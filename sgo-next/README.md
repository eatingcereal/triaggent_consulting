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
| `.htaccess` gate | `middleware.ts` gates `/` and `/api/data` |
| `index.php` shell | `app/dashboard.tsx` (React) + `app/login/page.tsx` |
| `js/app.js`, `css/app.css` | `public/app.js` (unchanged except the fetch URL), `app/globals.css` |
| `data/*.json.enc` (encrypted) | `data/*.json` (plaintext, **gitignored**) |

The dashboard UI logic (`public/app.js`) is the original file **byte-for-byte**
except for one line: `api.php?file=` → `/api/data?file=`. Chart.js and Leaflet are
still the vendored builds under `public/vendor/`, loaded before `app.js` boots.

## Security model (simple password)

- One shared password (`SGO_PASSWORD`) → a tamper-proof signed session cookie.
- The cookie gates both the dashboard page and the data API. No password, no data.
- Data is plaintext JSON on the server, served **only** through the authenticated
  `/api/data` route. It is never in `public/`, so it cannot be fetched without a session.
- **Because the data is no longer encrypted at rest, it must stay out of the public
  repo.** `data/*.json` is gitignored for exactly this reason. If a restricted extract
  ever lands here, re-introduce encryption-at-rest instead of shipping plaintext.

## Run locally

```bash
cp .env.example .env.local     # then edit values (defaults already set for dev)
npm install
npm run dev                    # http://localhost:3000  (password: value of SGO_PASSWORD)
```

`npm run build && npm start` runs the production server.

### Environment variables (`.env.local`, gitignored)

- `SGO_PASSWORD` — the shared password users type on the login screen.
- `SESSION_SECRET` — ≥32-char secret that signs the session cookie. Generate one:
  `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

## Regenerating `data/` from the encrypted source

The plaintext datasets were decrypted from `../sgo/data/*.json.enc`. To recreate
them (e.g. on a fresh checkout), run the decrypt step with the data password and
write the `.json` files into `data/`. Keep that password out of the repo.

## Deploying

The app runs anywhere Node runs (Vercel, a Node host, a container).

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
