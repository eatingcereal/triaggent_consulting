<?php
declare(strict_types=1);

function triaggent_security_headers(string $policy): void
{
    header('X-Frame-Options: DENY');
    header('X-Content-Type-Options: nosniff');
    header('Referrer-Policy: no-referrer');
    header('Strict-Transport-Security: max-age=31536000');
    header('Content-Security-Policy: ' . $policy);
}
