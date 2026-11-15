<?php
declare(strict_types=1);
$files = glob('/tmp/triaggent-test-mail/message.*');
if (count($files) !== 2) {
    throw new RuntimeException('One accepted submission must create exactly two captured emails');
}
$confirmations = 0;
foreach ($files as $file) {
    $message = file_get_contents($file);
    if (preg_match('/^To: security-test@example\.invalid\r?$/m', $message)) {
        $confirmations++;
        if (strpos($message, 'PHISH-MARKER') !== false || strpos($message, 'https://example.invalid') !== false) {
            throw new RuntimeException('Visitor-controlled content leaked into confirmation');
        }
    }
}
if ($confirmations !== 1) {
    throw new RuntimeException('Expected one fixed-text confirmation');
}
echo "PASS: one enquiry, one confirmation, and no visitor-controlled content in the confirmation\n";
