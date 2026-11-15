<?php
declare(strict_types=1);

/** Reserve all limits together, before performing the protected operation.
 * The exclusive lock covers reading, checking, and persisting the counters.
 * A broken/unwritable store throws so callers fail closed instead of sending mail.
 */
function triaggent_reserve_rate_limits(string $namespace, array $limits, ?int $now = null): bool
{
    $now = $now ?? time();
    $dir = sys_get_temp_dir() . '/triaggent_limits';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        throw new RuntimeException('Rate limit storage unavailable');
    }
    $file = $dir . '/' . hash('sha256', $namespace) . '.json';
    $handle = @fopen($file, 'c+');
    if ($handle === false) {
        throw new RuntimeException('Rate limit storage unavailable');
    }
    try {
        if (!flock($handle, LOCK_EX)) {
            throw new RuntimeException('Rate limit storage unavailable');
        }
        $raw = stream_get_contents($handle);
        $state = $raw === '' ? [] : json_decode((string) $raw, true);
        if (!is_array($state)) {
            throw new RuntimeException('Invalid rate limit storage');
        }
        foreach ($state as $key => $bucket) {
            if (($bucket['expires'] ?? 0) <= $now) {
                unset($state[$key]);
            }
        }
        foreach ($limits as $limit) {
            $key = hash('sha256', $limit['key']);
            $hits = array_values(array_filter($state[$key]['hits'] ?? [],
                static fn($t) => is_int($t) && $t > $now - $limit['seconds']));
            if (count($hits) >= $limit['max']) {
                return false;
            }
            $hits[] = $now;
            $state[$key] = ['hits' => $hits, 'expires' => $now + $limit['seconds']];
        }
        $encoded = json_encode($state, JSON_THROW_ON_ERROR);
        rewind($handle);
        if (!ftruncate($handle, 0) || fwrite($handle, $encoded) !== strlen($encoded) || !fflush($handle)) {
            throw new RuntimeException('Rate limit storage unavailable');
        }
        return true;
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}
