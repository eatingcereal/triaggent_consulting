#!/usr/bin/env python3
"""Run only against the local mail-capturing Apache test container."""
import concurrent.futures
import json
import sys
import urllib.error
import urllib.request
from urllib.parse import urlparse

base = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:8811'
if urlparse(base).hostname not in ('localhost', '127.0.0.1'):
    raise SystemExit('This test submits forms; use only the local test container.')


def request(path, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(base + path, data=data, headers={'Content-Type': 'application/json'})
    try:
        response = urllib.request.urlopen(req, timeout=15)
    except urllib.error.HTTPError as error:
        response = error
    return response.status, response.headers, response.read()


status, headers, body = request('/')
assert status == 200, (status, body[:100])
assert headers['X-Frame-Options'] == 'DENY'
assert 'max-age=31536000' in headers['Strict-Transport-Security']
policy = headers['Content-Security-Policy']
script_policy = next(d for d in policy.split(';') if d.strip().startswith('script-src '))
assert 'sha256-' in script_policy and "'unsafe-inline'" not in script_policy, policy
assert "frame-ancestors 'none'" in policy

for path in ['/sgo-next/lib/session.ts', '/sgo-next/app/api/login/route.ts', '/sgo-next/data/kpis.json',
             '/scripts/security_policy.py', '/components/notebooklm-example.html', '/tests/sendmail.sh',
             '/contact-config.php', '/contact-config.local.php.example', '/rate-limit.php',
             '/security-headers.php', '/.git/HEAD', '/.env', '/sgo/config.php', '/sgo/data/kpis.json.enc']:
    assert request(path)[0] == 403, path
assert request('/sgo/api.php?file=kpis')[0] == 401
assert request('/portfolio/mission-control/api/config.json')[0] == 200
status, headers, body = request('/sgo/')
assert status == 200 and "'nonce-" in headers['Content-Security-Policy']
assert b'<script nonce="' in body
assert request('/contact.php', {'name': []})[0] == 400
assert request('/contact.php', {'website': 'bot'})[0] == 200

payload = {'name': 'PHISH-MARKER https://example.invalid/name', 'email': 'security-test@example.invalid',
           'subject': 'PHISH-MARKER https://example.invalid/subject',
           'message': 'PHISH-MARKER https://example.invalid/message'}
with concurrent.futures.ThreadPoolExecutor(max_workers=16) as pool:
    results = list(pool.map(lambda _: request('/contact.php', payload)[0], range(16)))
assert results.count(200) == 1 and results.count(429) == 15, results
print('PASS: headers, homepage hashes, PHP login nonce, source/data access controls, and concurrent contact submissions')
