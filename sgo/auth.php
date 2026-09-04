<?php
declare(strict_types=1);

function sgo_config(): array
{
    static $config;
    if ($config === null) {
        $config = require __DIR__ . '/config.php';
    }
    return $config;
}

function sgo_client_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    return preg_replace('/[^0-9a-fA-F:.]/', '', $ip) ?: '0.0.0.0';
}

function sgo_boot(): void
{
    $cfg = sgo_config();
    $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || (($_SERVER['SERVER_PORT'] ?? '') === '443')
        || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');

    session_name((string) $cfg['session_name']);
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/sgo/',
        'secure' => $https,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }

    $idle = (int) $cfg['idle_seconds'];
    $last = (int) ($_SESSION['sgo_last'] ?? 0);
    if (!empty($_SESSION['sgo_ok']) && $last > 0 && (time() - $last) > $idle) {
        $_SESSION = [];
        session_regenerate_id(true);
    }
    if (!empty($_SESSION['sgo_ok'])) {
        $_SESSION['sgo_last'] = time();
    }
}

function sgo_logged_in(): bool
{
    return !empty($_SESSION['sgo_ok']);
}

function sgo_require_login(): void
{
    if (sgo_logged_in()) {
        return;
    }
    http_response_code(401);
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex, nofollow');
    $accept = (string) ($_SERVER['HTTP_ACCEPT'] ?? '');
    $ctype = (string) ($_SERVER['CONTENT_TYPE'] ?? '');
    if (strpos($accept, 'application/json') !== false
        || strpos($ctype, 'application/json') !== false
        || (($_GET['file'] ?? '') !== '')) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => false, 'error' => 'unauthorized']);
        exit;
    }
    header('Location: /sgo/');
    exit;
}

function sgo_rate_ok(): bool
{
    $cfg = sgo_config();
    $dir = sys_get_temp_dir() . '/sgo_login_rate';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    $file = $dir . '/' . hash('sha256', sgo_client_ip()) . '.json';
    $now = time();
    $window = (int) $cfg['rate_window_seconds'];
    $max = (int) $cfg['rate_limit_max'];
    $hits = [];
    if (is_file($file)) {
        $prev = json_decode((string) @file_get_contents($file), true);
        $hits = is_array($prev['hits'] ?? null) ? $prev['hits'] : [];
    }
    $hits = array_values(array_filter($hits, static fn($t) => is_int($t) && ($now - $t) < $window));
    if (count($hits) >= $max) {
        @file_put_contents($file, json_encode(['hits' => $hits]), LOCK_EX);
        return false;
    }
    $hits[] = $now;
    @file_put_contents($file, json_encode(['hits' => $hits]), LOCK_EX);
    return true;
}

function sgo_headers(): void
{
    header('X-Robots-Tag: noindex, nofollow');
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: no-referrer');
    header('Cache-Control: no-store, no-cache, must-revalidate');
    header('Pragma: no-cache');
}

function sgo_derive_key(string $password): string
{
    $cfg = sgo_config();
    return hash_pbkdf2(
        'sha256',
        $password,
        (string) $cfg['data_kdf_salt'],
        (int) $cfg['data_kdf_iters'],
        32,
        true
    );
}

function sgo_decrypt_file(string $path): ?string
{
    $key = $_SESSION['sgo_dk'] ?? '';
    if (!is_string($key) || strlen($key) !== 32) {
        return null;
    }
    $blob = @file_get_contents($path);
    if ($blob === false || strlen($blob) < 29) {
        return null;
    }
    $iv = substr($blob, 0, 12);
    $rest = substr($blob, 12);
    $tag = substr($rest, -16);
    $ct = substr($rest, 0, -16);
    $plain = openssl_decrypt($ct, 'aes-256-gcm', $key, OPENSSL_RAW_DATA, $iv, $tag);
    return $plain === false ? null : $plain;
}
