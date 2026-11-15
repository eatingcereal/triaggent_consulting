import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { after, test } from 'node:test';
import { createSession, touchSession, revokeSession, consumeLoginAttempt } from '../lib/security-store.ts';
import { IDLE_MS, SESSION_TTL_SECONDS, authSecrets } from '../lib/session.ts';

const directory = mkdtempSync(path.join(tmpdir(), 'sgo-state-test-'));
process.env.SGO_STATE_DIR = directory;
process.env.SGO_PASSWORD = randomBytes(24).toString('hex');
process.env.SESSION_SECRET = randomBytes(32).toString('hex');
after(() => rmSync(directory, { recursive: true, force: true }));

test('eight attempts are reserved before subsequent attempts are rejected', () => {
  const now = Date.now();
  for (let i = 0; i < 8; i++) assert.equal(consumeLoginAttempt('one-network', now), true);
  assert.equal(consumeLoginAttempt('one-network', now), false);
  assert.equal(consumeLoginAttempt('one-network', now + 600_000), true);
});

test('separate processes cannot race past the shared limit', async () => {
  const module = new URL('../lib/security-store.ts', import.meta.url).href;
  const code = `import {consumeLoginAttempt} from ${JSON.stringify(module)}; console.log(consumeLoginAttempt('concurrent'));`;
  const results = await Promise.all(Array.from({ length: 16 }, () => new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ['--experimental-strip-types', '--input-type=module', '-e', code], {
      env: { ...process.env, NODE_NO_WARNINGS: '1' }, stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '', stderr = '';
    child.stdout.on('data', (data) => { stdout += data; });
    child.stderr.on('data', (data) => { stderr += data; });
    child.on('error', reject);
    child.on('exit', (status) => status === 0 ? resolve(stdout.trim() === 'true') : reject(new Error(stderr)));
  })));
  assert.equal(results.filter(Boolean).length, 8);
  assert.equal(consumeLoginAttempt('concurrent'), false);
});

test('logout revokes a copied session token', () => {
  const id = createSession();
  assert.equal(touchSession(id), true);
  revokeSession(id);
  assert.equal(touchSession(id), false);
  assert.equal(touchSession('not-a-session'), false);
});

test('the idle deadline cannot be renewed after it expires', () => {
  const now = Date.now();
  const id = createSession(now);
  assert.equal(touchSession(id, now + IDLE_MS), false);
});

test('activity renews idle time but never the absolute deadline', () => {
  const now = Date.now();
  const id = createSession(now);
  for (let hour = 3; hour <= 9; hour += 3) assert.equal(touchSession(id, now + hour * 3_600_000), true);
  assert.equal(touchSession(id, now + SESSION_TTL_SECONDS * 1000), false);
});

test('changing the dashboard password revokes existing sessions', () => {
  const id = createSession();
  const previous = process.env.SGO_PASSWORD;
  process.env.SGO_PASSWORD = randomBytes(24).toString('hex');
  assert.equal(touchSession(id), false);
  process.env.SGO_PASSWORD = previous;
});

test('sample credentials fail closed', () => {
  const previous = process.env.SGO_PASSWORD;
  process.env.SGO_PASSWORD = 'change-me';
  assert.throws(authSecrets);
  process.env.SGO_PASSWORD = previous;
});
