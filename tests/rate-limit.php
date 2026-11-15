<?php
declare(strict_types=1);
require dirname(__DIR__) . '/rate-limit.php';

if (($argv[1] ?? '') === 'worker') {
    echo triaggent_reserve_rate_limits($argv[2], [
        ['key' => 'global', 'seconds' => 600, 'max' => 8],
    ]) ? 'allowed' : 'blocked';
    exit;
}

$namespace = 'test-' . bin2hex(random_bytes(16));
$workers = [];
for ($i = 0; $i < 24; $i++) {
    $pipes = [];
    $process = proc_open([PHP_BINARY, __FILE__, 'worker', $namespace], [
        0 => ['pipe', 'r'], 1 => ['pipe', 'w'], 2 => ['pipe', 'w'],
    ], $pipes);
    fclose($pipes[0]);
    $workers[] = [$process, $pipes];
}
$allowed = 0;
foreach ($workers as [$process, $pipes]) {
    $result = stream_get_contents($pipes[1]);
    $error = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);
    if (proc_close($process) !== 0) {
        throw new RuntimeException($error);
    }
    $allowed += $result === 'allowed' ? 1 : 0;
}
if ($allowed !== 8) {
    throw new RuntimeException("Expected 8 reservations across 24 workers, got $allowed");
}

$namespace .= '-clock';
$limits = [['key' => 'one', 'seconds' => 45, 'max' => 1]];
if (!triaggent_reserve_rate_limits($namespace, $limits, 1000)
    || triaggent_reserve_rate_limits($namespace, $limits, 1044)
    || !triaggent_reserve_rate_limits($namespace, $limits, 1045)) {
    throw new RuntimeException('Window boundary failed');
}

$namespace .= '-broken';
$filename = sys_get_temp_dir() . '/triaggent_limits/' . hash('sha256', $namespace) . '.json';
file_put_contents($filename, '{broken');
try {
    triaggent_reserve_rate_limits($namespace, $limits);
    throw new LogicException('Broken storage must fail closed');
} catch (RuntimeException $expected) {
    unlink($filename);
}
echo "PASS: atomic reservations across 24 PHP processes, expiry, and corrupt-store rejection\n";
