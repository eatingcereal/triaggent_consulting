// Run after npm run build. Starts only a local server with generated test secrets.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { once } from 'node:events';
import { mkdtempSync, rmSync } from 'node:fs';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

const directory = mkdtempSync(path.join(tmpdir(), 'sgo-http-test-'));
const portServer = createServer().listen(0, '127.0.0.1');
await once(portServer, 'listening');
const port = portServer.address().port;
await new Promise(resolve => portServer.close(resolve));
const base = `http://localhost:${port}`;
const env = { ...process.env, NODE_ENV: 'production', SGO_STATE_DIR: directory,
  SGO_PASSWORD: randomBytes(24).toString('hex'), SESSION_SECRET: randomBytes(32).toString('hex') };
delete env.SGO_TRUSTED_IP_HEADER;
let server;
let logs = '';

async function start() {
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', String(port)], {
    env, stdio: ['ignore', 'pipe', 'pipe'],
  });
  server.stdout.on('data', data => { logs += data; });
  server.stderr.on('data', data => { logs += data; });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error(logs);
    try { if ((await fetch(base + '/login')).ok) return; } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Local server failed to start: ' + logs);
}
async function stop() {
  if (server && server.exitCode === null) {
    const exit = once(server, 'exit');
    server.kill('SIGTERM');
    await exit;
  }
}
const get = (url, cookie) => fetch(base + url, { redirect: 'manual', headers: cookie ? { cookie } : {} });
const login = (password = env.SGO_PASSWORD, extra = {}) => fetch(base + '/api/login', {
  method: 'POST', headers: { 'content-type': 'application/json', origin: base, ...extra },
  body: JSON.stringify({ password }),
});
async function signIn() {
  const response = await login();
  assert.equal(response.status, 200, await response.text());
  const cookie = response.headers.get('set-cookie')?.split(';')[0];
  assert.ok(cookie);
  assert.match(response.headers.get('set-cookie'), /HttpOnly/i);
  assert.match(response.headers.get('set-cookie'), /Secure/i);
  return cookie;
}

try {
  await start();
  assert.equal((await get('/')).status, 307);
  assert.equal((await get('/api/data?file=kpis')).status, 401);
  assert.equal((await login('wrong', { origin: 'https://example.invalid' })).status, 403);
  const cookie = await signIn();
  assert.equal((await get('/api/data?file=kpis', cookie)).status, 404); // No private test dataset is provisioned.
  assert.equal((await get('/api/data?file=constructor', cookie)).status, 400);
  const dashboard = await get('/', cookie);
  assert.equal(dashboard.status, 200);
  const policy = dashboard.headers.get('content-security-policy');
  const html = await dashboard.text();
  const nonce = /'nonce-([^']+)'/.exec(policy)?.[1];
  assert.ok(nonce && html.includes(`nonce="${nonce}"`));
  assert.ok(!policy.includes('unsafe-eval') && !policy.split(';').find(d => d.includes('script-src')).includes('unsafe-inline'));
  assert.match(dashboard.headers.get('cache-control'), /no-store/);
  assert.equal(dashboard.headers.get('x-frame-options'), 'DENY');
  const logout = await fetch(base + '/api/logout', { method: 'POST', redirect: 'manual', headers: { cookie, origin: base } });
  assert.equal(logout.status, 303);
  assert.equal((await get('/api/data?file=kpis', cookie)).status, 401);

  const idleCookie = await signIn();
  const database = new DatabaseSync(path.join(directory, 'security.sqlite'));
  database.prepare('UPDATE sessions SET last_seen = ?').run(Date.now() - 4 * 3_600_000 - 1000);
  assert.equal((await get('/api/data?file=kpis', idleCookie)).status, 401);
  const expiredCookie = await signIn();
  database.prepare('UPDATE sessions SET expires_at = ?').run(Date.now() - 1000);
  assert.equal((await get('/api/data?file=kpis', expiredCookie)).status, 401);
  const activeCookie = await signIn();

  const results = await Promise.all(Array.from({ length: 16 }, (_, i) => login('wrong', { 'x-forwarded-for': `192.0.2.${i + 1}` })));
  assert.equal(results.filter(r => r.status === 401).length, 4); // Four slots used by the valid logins.
  assert.equal(results.filter(r => r.status === 429).length, 12);
  assert.equal((await login('wrong', { 'x-forwarded-for': '203.0.113.1' })).status, 429);
  database.close();
  await stop();
  env.SGO_PASSWORD = randomBytes(24).toString('hex');
  await start();
  assert.equal((await login()).status, 429); // Counters survive a server restart.
  assert.equal((await get('/api/data?file=kpis', activeCookie)).status, 401); // Rotation revokes copied cookies.
  console.log('PASS: production HTTP authorization, nonce CSP, logout replay, idle/absolute expiry, concurrent attempts, forged IPs, persistence, and password rotation');
} finally {
  await stop();
  rmSync(directory, { recursive: true, force: true });
}
