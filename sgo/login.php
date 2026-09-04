<?php
declare(strict_types=1);

require __DIR__ . '/auth.php';
sgo_boot();
sgo_headers();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /sgo/');
    exit;
}

if (!sgo_rate_ok()) {
    header('Location: /sgo/?e=rate');
    exit;
}

$password = (string) ($_POST['password'] ?? '');
$hash = (string) sgo_config()['password_hash'];

if ($password === '' || !password_verify($password, $hash)) {
    usleep(250000);
    header('Location: /sgo/?e=1');
    exit;
}

session_regenerate_id(true);
$_SESSION['sgo_ok'] = true;
$_SESSION['sgo_last'] = time();
$_SESSION['sgo_dk'] = sgo_derive_key($password);
header('Location: /sgo/');
exit;
