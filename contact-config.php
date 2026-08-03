<?php
/**
 * Contact form configuration for Hostinger.
 *
 * Defaults use PHP mail() with your domain address (works on most Hostinger plans).
 * For more reliable delivery, create a mailbox in hPanel and fill in SMTP below.
 *
 * Optional overrides: copy this file to contact-config.local.php (not in git)
 * and set secrets there — that file is loaded automatically if present.
 */
return [
    // Inbox that receives new enquiries
    'to_email'   => 'contact@triaggent.com',
    'to_name'    => 'Triaggent Consulting',

    // Shown as the From address (must be a mailbox on your Hostinger domain)
    'from_email' => 'contact@triaggent.com',
    'from_name'  => 'Triaggent Consulting',

    // Hostinger SMTP (recommended). Leave password empty to use PHP mail() instead.
    'smtp' => [
        'enabled'  => false, // set true after filling username/password
        'host'     => 'smtp.hostinger.com',
        'port'     => 465,
        'encryption' => 'ssl', // ssl (465) or tls (587)
        'username' => 'contact@triaggent.com',
        'password' => '', // email account password from hPanel
    ],

    // Simple abuse protection
    'max_message_length' => 8000,
    'rate_limit_seconds' => 45,
];
