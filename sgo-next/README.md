# SGO Market Atlas — Next.js

A Next.js (App Router + TypeScript) rebuild of the PHP `sgo/` dashboard. Same UI,
same data, but on a modern Node stack with a **simple shared-password gate**
instead of the PHP session + per-file encryption machinery.

## What changed from the PHP app

| PHP (`sgo/`) | Next.js (`sgo-next/`) |
| --- | --- |
| `login.php` (bcrypt) | `app/api/login/route.ts` — compares `SGO_PASSWORD`, sets a signed cookie |
| `auth.php` sessions + PBKDF2/AES-GCM | `iron-session` encrypted cookie (`lib/session.ts`) — no data encryption |
| `api.php` decrypt-and-serve | `app/api/data/route.ts` — session check + serve JSON from `data/` |
| `.htaccess` gate | Server-side authorization in `/` and `/api/data`; middleware supplies CSP nonces |
| `index.php` shell | `app/dashboard.tsx` (React) + `app/login/page.tsx` |
| `js/app.js`, `css/app.css` | `public/app.js` (unchanged except the fetch URL), `app/globals.css` |
| `data/*.json.enc` (encrypted) | `data/*.json` (plaintext, **gitignored**) |

The dashboard UI logic (`public/app.js`) is the original file **byte-for-byte**
except for one line: `api.php?file=` → `/api/data?file=`. Chart.js and Leaflet are
still the vendored builds under `public/vendor/`, loaded before `app.js` boots.

## Security model (simple password)

- One shared password (`SGO_PASSWORD`) → an encrypted cookie carrying a random session ID.
- The private SQLite store holds only hashes of session IDs. Logout revokes the
  session server-side, including copies of the cookie. Four hours of inactivity
  or twelve hours total expires the session. Password/secret rotation invalidates
  existing sessions; cookies from the old implementation are not accepted.
- Login attempts are reserved in a SQLite transaction before reading passwords:
  eight per ten minutes in each network bucket, with a global cap of 64. With no
  trusted proxy header configured, all visitors share one eight-attempt bucket.
  Arbitrary `X-Forwarded-For` headers are ignored. Counters survive worker restarts.
- The cookie gates both the dashboard page and the data API. No password, no data.
- Data is plaintext JSON on the server, served **only** through the authenticated
  `/api/data` route. It is never in `public/`, so it cannot be fetched without a session.
- **Because the data is no longer encrypted at rest, it must stay out of the public
  repo.** `data/*.json` is gitignored for exactly this reason. If a restricted extract
  ever lands here, re-introduce encryption-at-rest instead of shipping plaintext.

## Run locally

```bash
cp .env.example .env.local     # fill in unique secrets; examples are deliberately empty
npm ci
npm run dev                    # http://localhost:3000  (password: value of SGO_PASSWORD)
```

`npm run build && npm start` runs the production server.

### Environment variables (`.env.local`, gitignored)

- `SGO_PASSWORD` — the shared password users type on the login screen; at least
  16 characters. Placeholder values are rejected, including in development.
- `SESSION_SECRET` — ≥32-char secret that signs the session cookie. Generate one:
  `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- `SGO_STATE_DIR` — private persistent SQLite directory outside the application
  and public web root, with permissions `0700`. Defaults to
  `~/.local/state/sgo-atlas`. The database is created with permissions `0600`.
  The Node service account needs read/write access; preserve this directory
  across deploys and mount it on a persistent volume when using containers.
- `SGO_TRUSTED_IP_HEADER` — optional single-IP header overwritten by your trusted
  ingress, for example `cf-connecting-ip`. Configure this only if the ingress
  replaces client-supplied values and direct access to the Node server is blocked.
  Comma-separated IP chains are rejected. Leaving this unset is safe and uses a
  shared bucket instead. The proxy must preserve the public Host/protocol so the
  login and logout Origin check matches the public request URL.

## Regenerating `data/` from the encrypted source

The plaintext datasets were decrypted from `../sgo/data/*.json.enc`. To recreate
them (e.g. on a fresh checkout), run the decrypt step with the data password and
write the `.json` files into `data/`. Keep that password out of the repo.

## Deploying

Use Node **22.13 or newer** (Node 24 LTS recommended) on a single persistent Node
host or container. All Node workers must use the same local `SGO_STATE_DIR`.
This deployment uses Node's built-in SQLite with WAL transactions. Ephemeral
serverless instances (including Vercel functions), independent replicas, and
network-filesystem SQLite are not supported: use a central transactional store
before deploying that topology. Storage failure denies authentication rather
than falling back to unshared in-memory counters or cookie-only sessions.

Deploy this as a separate Node application, outside the PHP site's public web
root. Its `.htaccess` intentionally denies static HTTP access if the source
directory is accidentally copied into the public PHP deployment. The Node app
sets its own security headers, including a fresh script nonce on each HTML
response. Preserve these headers and disable caching of private HTML/API responses
at the reverse proxy. The unused image optimizer is disabled.

- **`data/` is gitignored**, so it will not travel with a `git`-based deploy. Provision
  it at deploy time (private storage, a build step, or a private deploy branch). Do not
  commit plaintext data to the public `triaggent_consulting` repo.
- To serve under a path such as `https://triaggent.com/sgo`, set `basePath: '/sgo'`
  in `next.config.mjs` **and** prefix the fetch URL in `public/app.js` accordingly.

## Incremental React path (later)

`public/app.js` currently drives the DOM imperatively, exactly as before — this keeps
the proven UI intact. When you want to modernize a view, rebuild it as a React
component that reads from `/api/data` and delete the matching `render*()` from
`app.js`, one tab at a time. The auth and data layers already fit that model.
