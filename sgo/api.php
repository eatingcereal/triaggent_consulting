<?php
declare(strict_types=1);

require __DIR__ . '/auth.php';
sgo_boot();
sgo_headers();
header('Content-Type: application/json; charset=utf-8');

if (!sgo_logged_in()) {
    http_response_code(401);
    echo json_encode(['ok' => false, 'error' => 'unauthorized']);
    exit;
}

$allowed = [
    'kpis' => 'kpis.json.enc',
    'meta' => 'meta.json.enc',
    'facilities' => 'facilities.json.enc',
    'practitioners' => 'practitioners.json.enc',
    'affiliations' => 'affiliations.json.enc',
    'codes' => 'codes.json.enc',
    'alerts' => 'alerts.json.enc',
    'summary' => 'summary.json.enc',
    'mn_counties' => 'mn_counties.json.enc',
    'facility_cms' => 'facility_cms.json.enc',
    'nppes_mn' => 'nppes_mn.json.enc',
    'external' => 'external.json.enc',
];

$key = (string) ($_GET['file'] ?? '');
if (!isset($allowed[$key])) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'unknown file']);
    exit;
}

$path = __DIR__ . '/data/' . $allowed[$key];
if (!is_file($path)) {
    http_response_code(404);
    echo json_encode(['ok' => false, 'error' => 'missing']);
    exit;
}

$plain = sgo_decrypt_file($path);
if ($plain === null) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'unauthorized']);
    exit;
}

echo $plain;
exit;
