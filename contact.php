<?php
/**
 * Contact form endpoint for Triaggent Consulting (Hostinger + Git deploy).
 *
 * Accepts JSON or form POST: name, email, subject, message, website (honeypot).
 * Sends:
 *   1) Alert to the team inbox (Reply-To = visitor)
 *   2) Confirmation to the visitor
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Same-origin browser form posts only need CORS for cross-origin; allow simple POSTs.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

$config = require __DIR__ . '/contact-config.php';
$local = __DIR__ . '/contact-config.local.php';
if (is_file($local)) {
    $override = require $local;
    if (is_array($override)) {
        $config = array_replace_recursive($config, $override);
    }
}

function respond(int $code, array $payload): void
{
    http_response_code($code);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function client_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    return preg_replace('/[^0-9a-fA-F:.]/', '', $ip) ?: '0.0.0.0';
}

function clean_header(string $value): string
{
    return trim(str_replace(["\r", "\n", "\0"], '', $value));
}

function read_payload(): array
{
    $contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? '';
    if (stripos($contentType, 'application/json') !== false) {
        $raw = file_get_contents('php://input') ?: '';
        $data = json_decode($raw, true);
        return is_array($data) ? $data : [];
    }
    return $_POST;
}

// --- Rate limit (per IP) ---
$rateSeconds = (int) ($config['rate_limit_seconds'] ?? 45);
$rateDir = sys_get_temp_dir() . '/triaggent_contact_rate';
if (!is_dir($rateDir)) {
    @mkdir($rateDir, 0700, true);
}
$rateFile = $rateDir . '/' . hash('sha256', client_ip()) . '.json';
if ($rateSeconds > 0 && is_file($rateFile)) {
    $prev = json_decode((string) @file_get_contents($rateFile), true);
    $last = (int) ($prev['t'] ?? 0);
    if ($last > 0 && (time() - $last) < $rateSeconds) {
        respond(429, [
            'ok' => false,
            'error' => 'Please wait a moment before sending another message.',
        ]);
    }
}

$data = read_payload();

// Honeypot: bots fill this; humans never see it
$honeypot = trim((string) ($data['website'] ?? $data['company_url'] ?? ''));
if ($honeypot !== '') {
    // Fake success so bots don't retry
    respond(200, ['ok' => true]);
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$subject = trim((string) ($data['subject'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

$maxLen = (int) ($config['max_message_length'] ?? 8000);

if ($name === '' || mb_strlen($name) > 120) {
    respond(400, ['ok' => false, 'error' => 'Please enter your name.']);
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 200) {
    respond(400, ['ok' => false, 'error' => 'Please enter a valid email address.']);
}
if ($message === '' || mb_strlen($message) > $maxLen) {
    respond(400, ['ok' => false, 'error' => 'Please describe what you are trying to achieve.']);
}
if ($subject === '') {
    $subject = 'New enquiry via triaggent.com';
}
if (mb_strlen($subject) > 200) {
    respond(400, ['ok' => false, 'error' => 'Subject is too long.']);
}

// Header-injection hardening
$name = clean_header($name);
$email = clean_header($email);
$subject = clean_header($subject);

$toEmail = clean_header((string) $config['to_email']);
$toName = clean_header((string) ($config['to_name'] ?? 'Triaggent Consulting'));
$fromEmail = clean_header((string) $config['from_email']);
$fromName = clean_header((string) ($config['from_name'] ?? 'Triaggent Consulting'));

$when = gmdate('Y-m-d H:i:s') . ' UTC';
$ip = client_ip();

$adminSubject = '[New enquiry] ' . $subject;
$adminBody = implode("\n", [
    'New contact form submission from triaggent.com',
    '',
    'Name:    ' . $name,
    'Email:   ' . $email,
    'Subject: ' . $subject,
    'When:    ' . $when,
    'IP:      ' . $ip,
    '',
    'Message:',
    $message,
    '',
    '---',
    'Reply directly to this email to respond to ' . $name . '.',
]);

$confirmSubject = 'We received your message — Triaggent Consulting';
$confirmBody = implode("\n", [
    'Hi ' . $name . ',',
    '',
    'Thanks for getting in touch. We received your request and a person will reply within one working day.',
    '',
    'Here is a copy of what you sent:',
    '',
    'Subject: ' . $subject,
    '',
    $message,
    '',
    '—',
    'Triaggent Consulting',
    $toEmail,
    '',
    'If you did not submit this form, you can ignore this email.',
]);

/**
 * Minimal SMTP client (AUTH LOGIN) for Hostinger.
 */
function smtp_send(
    array $smtp,
    string $fromEmail,
    string $fromName,
    string $toEmail,
    string $toName,
    string $subject,
    string $body,
    ?string $replyTo = null
): bool {
    $host = $smtp['host'] ?? 'smtp.hostinger.com';
    $port = (int) ($smtp['port'] ?? 465);
    $enc = strtolower((string) ($smtp['encryption'] ?? 'ssl'));
    $user = (string) ($smtp['username'] ?? '');
    $pass = (string) ($smtp['password'] ?? '');

    $remote = ($enc === 'ssl' ? 'ssl://' : '') . $host . ':' . $port;
    $errno = 0;
    $errstr = '';
    $fp = @stream_socket_client($remote, $errno, $errstr, 20, STREAM_CLIENT_CONNECT);
    if (!$fp) {
        return false;
    }
    stream_set_timeout($fp, 20);

    $read = static function () use ($fp): string {
        $data = '';
        while (!feof($fp)) {
            $line = fgets($fp, 515);
            if ($line === false) {
                break;
            }
            $data .= $line;
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return $data;
    };
    $write = static function (string $cmd) use ($fp): void {
        fwrite($fp, $cmd . "\r\n");
    };
    $expect = static function (string $resp, string $code) : bool {
        return strpos($resp, $code) === 0;
    };

    $greeting = $read();
    if (!$expect($greeting, '220')) {
        fclose($fp);
        return false;
    }

    $write('EHLO triaggent.com');
    $ehlo = $read();
    if (!$expect($ehlo, '250')) {
        $write('HELO triaggent.com');
        $read();
    }

    if ($enc === 'tls') {
        $write('STARTTLS');
        $tls = $read();
        if (!$expect($tls, '220')) {
            fclose($fp);
            return false;
        }
        if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            fclose($fp);
            return false;
        }
        $write('EHLO triaggent.com');
        $read();
    }

    $write('AUTH LOGIN');
    if (!$expect($read(), '334')) {
        fclose($fp);
        return false;
    }
    $write(base64_encode($user));
    if (!$expect($read(), '334')) {
        fclose($fp);
        return false;
    }
    $write(base64_encode($pass));
    if (!$expect($read(), '235')) {
        fclose($fp);
        return false;
    }

    $write('MAIL FROM:<' . $fromEmail . '>');
    if (!$expect($read(), '250')) {
        fclose($fp);
        return false;
    }
    $write('RCPT TO:<' . $toEmail . '>');
    if (!$expect($read(), '250')) {
        fclose($fp);
        return false;
    }
    $write('DATA');
    if (!$expect($read(), '354')) {
        fclose($fp);
        return false;
    }

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $headers = [
        'Date: ' . date('r'),
        'From: ' . sprintf('%s <%s>', encode_name($fromName), $fromEmail),
        'To: ' . sprintf('%s <%s>', encode_name($toName), $toEmail),
        'Subject: ' . $encodedSubject,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: Triaggent-Contact/1.0',
    ];
    if ($replyTo) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }

    // Dot-stuffing
    $safeBody = preg_replace('/^\./m', '..', $body) ?? $body;
    $data = implode("\r\n", $headers) . "\r\n\r\n" . $safeBody . "\r\n.";
    $write($data);
    if (!$expect($read(), '250')) {
        fclose($fp);
        return false;
    }
    $write('QUIT');
    fclose($fp);
    return true;
}

function encode_name(string $name): string
{
    if (function_exists('mb_encode_mimeheader')) {
        return mb_encode_mimeheader($name, 'UTF-8');
    }
    return '=?UTF-8?B?' . base64_encode($name) . '?=';
}

function mail_send(
    string $fromEmail,
    string $fromName,
    string $toEmail,
    string $subject,
    string $body,
    ?string $replyTo = null
): bool {
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . sprintf('%s <%s>', encode_name($fromName), $fromEmail),
        'X-Mailer: Triaggent-Contact/1.0',
    ];
    if ($replyTo) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }
    return @mail($toEmail, $encodedSubject, $body, implode("\r\n", $headers));
}

function send_message(array $config, string $fromEmail, string $fromName, string $toEmail, string $toName, string $subject, string $body, ?string $replyTo = null): bool
{
    $smtp = $config['smtp'] ?? [];
    $smtpEnabled = !empty($smtp['enabled']) && !empty($smtp['password']) && !empty($smtp['username']);
    if ($smtpEnabled) {
        return smtp_send($smtp, $fromEmail, $fromName, $toEmail, $toName, $subject, $body, $replyTo);
    }
    return mail_send($fromEmail, $fromName, $toEmail, $subject, $body, $replyTo);
}

$adminOk = send_message(
    $config,
    $fromEmail,
    $fromName,
    $toEmail,
    $toName,
    $adminSubject,
    $adminBody,
    $email // Reply-To visitor
);

if (!$adminOk) {
    respond(502, [
        'ok' => false,
        'error' => 'Could not send your message right now. Please email ' . $toEmail . ' directly.',
    ]);
}

// Confirmation is best-effort; enquiry already delivered
$confirmOk = send_message(
    $config,
    $fromEmail,
    $fromName,
    $email,
    $name,
    $confirmSubject,
    $confirmBody,
    $toEmail
);

@file_put_contents($rateFile, json_encode(['t' => time()]));

respond(200, [
    'ok' => true,
    'confirmation_sent' => (bool) $confirmOk,
]);
