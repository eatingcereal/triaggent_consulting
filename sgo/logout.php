<?php
declare(strict_types=1);

require __DIR__ . '/auth.php';
sgo_boot();
sgo_headers();

$_SESSION = [];
if (ini_get('session.use_cookies')) {
    $p = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000, $p['path'] ?? '/sgo/', $p['domain'] ?? '', (bool) $p['secure'], (bool) $p['httponly']);
}
session_destroy();
header('Location: /sgo/');
exit;
