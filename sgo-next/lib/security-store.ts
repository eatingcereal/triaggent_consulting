import { createHash, createHmac, randomBytes } from "node:crypto";
import { chmodSync, mkdirSync, realpathSync, statSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { authSecrets, IDLE_MS, SESSION_TTL_SECONDS } from "./session.ts";

// A persistent SQLite transaction, shared by every worker on this host. Never
// put this directory in the web root or an ephemeral/serverless filesystem.
let database: DatabaseSync | undefined;
function db(): DatabaseSync {
  if (database) return database;
  const directory = path.resolve(process.env.SGO_STATE_DIR || path.join(homedir(), ".local/state/sgo-atlas"));
  mkdirSync(directory, { recursive: true, mode: 0o700 });
  const relative = path.relative(realpathSync(process.cwd()), realpathSync(directory));
  if (!relative || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative))) {
    throw new Error("SGO_STATE_DIR must be outside the application/web root.");
  }
  if (statSync(directory).mode & 0o077) {
    throw new Error("SGO_STATE_DIR must be a private directory (permissions 0700).");
  }
  const filename = path.join(directory, "security.sqlite");
  const connection = new DatabaseSync(filename);
  chmodSync(filename, 0o600);
  connection.exec(`
    PRAGMA busy_timeout = 5000;
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS login_attempts (bucket TEXT NOT NULL, attempted_at INTEGER NOT NULL);
    CREATE INDEX IF NOT EXISTS attempts_time ON login_attempts(attempted_at);
    CREATE TABLE IF NOT EXISTS sessions (
      id_hash TEXT PRIMARY KEY, last_seen INTEGER NOT NULL,
      expires_at INTEGER NOT NULL, credential_version TEXT NOT NULL
    );
  `);
  database = connection;
  return connection;
}

function transaction<T>(operation: (connection: DatabaseSync) => T): T {
  const connection = db();
  connection.exec("BEGIN IMMEDIATE");
  try {
    const result = operation(connection);
    connection.exec("COMMIT");
    return result;
  } catch (error) {
    connection.exec("ROLLBACK");
    throw error;
  }
}

export function consumeLoginAttempt(bucket: string, now = Date.now()): boolean {
  return transaction((connection) => {
    connection.prepare("DELETE FROM login_attempts WHERE attempted_at <= ?").run(now - 600_000);
    const { count } = connection.prepare(
      "SELECT COUNT(*) AS count FROM login_attempts WHERE bucket = ?",
    ).get(bucket) as { count: number };
    const total = connection.prepare("SELECT COUNT(*) AS count FROM login_attempts").get() as { count: number };
    if (count >= 8 || total.count >= 64) return false;
    connection.prepare("INSERT INTO login_attempts VALUES (?, ?)").run(bucket, now);
    return true;
  });
}

function credentialVersion(): string {
  const { password, secret } = authSecrets();
  return createHmac("sha256", secret).update(password).digest("hex");
}
const sessionHash = (id: string) => createHash("sha256").update(id).digest("hex");

export function createSession(now = Date.now()): string {
  const id = randomBytes(32).toString("hex");
  const version = credentialVersion();
  transaction((connection) => {
    connection.prepare("DELETE FROM sessions WHERE expires_at <= ? OR last_seen <= ?").run(now, now - IDLE_MS);
    connection.prepare("INSERT INTO sessions VALUES (?, ?, ?, ?)")
      .run(sessionHash(id), now, now + SESSION_TTL_SECONDS * 1000, version);
  });
  return id;
}

export function touchSession(id: unknown, now = Date.now()): boolean {
  if (typeof id !== "string" || !/^[a-f0-9]{64}$/.test(id)) return false;
  // One statement prevents an expired or concurrently revoked session being
  // renewed. Password/secret rotation also invalidates existing sessions.
  return !!db().prepare(`UPDATE sessions SET last_seen = ?
    WHERE id_hash = ? AND last_seen > ? AND expires_at > ? AND credential_version = ?
    RETURNING id_hash`).get(now, sessionHash(id), now - IDLE_MS, now, credentialVersion());
}

export function revokeSession(id: unknown): void {
  if (typeof id === "string" && /^[a-f0-9]{64}$/.test(id)) {
    db().prepare("DELETE FROM sessions WHERE id_hash = ?").run(sessionHash(id));
  }
}
