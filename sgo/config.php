<?php
/**
 * SGO dashboard gate. Hash only — never store the plaintext password here.
 */
declare(strict_types=1);

return [
    'password_hash' => '$2y$12$qSrYYHqbTyrb8MCSEiM6KO4FKNpJTrKexaSWuqWy2M3R6PwC3bU3u',
    'session_name' => 'sgo_atlas',
    'idle_seconds' => 14400,
    'rate_window_seconds' => 600,
    'rate_limit_max' => 8,
    'data_kdf_salt' => 'sgo-atlas-v1',
    'data_kdf_iters' => 210000,
];
