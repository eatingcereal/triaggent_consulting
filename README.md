# Triaggent Consulting website

This repository contains the public [Triaggent Consulting website](https://triaggent.com/), its PHP contact form, and the SGO Market Atlas project.

## What's here

| Path | Purpose |
| --- | --- |
| `index.html` | Public homepage. It is a bundled export; the original authoring source is not in this repository. |
| `contact.php`, `contact-config.php` | Contact form endpoint and shared configuration. Start from `contact-config.local.php.example` for local settings. |
| `portfolio/gradient-descent/` | Static build of the [Gradient Descent interactive course](https://github.com/Jacob19999/gradient-descent), served at `/portfolio/gradient-descent/`. |
| `portfolio/mission-control/` | Static, read-only replay of the [EDF mission-control console](https://github.com/Jacob19999/tvc-retro-propulsion) with recorded Isaac Sim landing and hover flights, served at `/portfolio/mission-control/`. See [portfolio/README.md](portfolio/README.md). |
| `portfolio/beyond-wrvus/` | Password-protected static copy of the Beyond wRVUs value platform (gynecologic oncology program value, public data), served at `/portfolio/beyond-wrvus/`. The page is stored encrypted and decrypts in the browser. See [portfolio/README.md](portfolio/README.md). The licensed MarketView atlas module is not included. |
| `sgo/` | Password-protected PHP version of the SGO Market Atlas. `sgo/platform.php` is the Beyond wRVUs value platform (public-data dashboards, scenario model, and a local-file atlas); it shares the atlas login and reads its data from encrypted `sgo/data/platform_*.json.enc`. |
| `sgo-next/` | Separate Next.js version of the atlas; see its [README](sgo-next/README.md). |

The homepage portfolio also links to the separate [Optimist Club of Minnesota Valley website](https://optimistmv.com/) and campaign websites for [Toby Leonard](https://www.mankatomayor.com/), [Jackie Henry](https://www.henry4senate.com/), and [Joel Hollerich](https://www.joelhollerich.com/).

## Previewing the public pages

From the repository root, run `python3 -m http.server 8000` and open `http://localhost:8000/`. This previews the homepage and the static Gradient Descent course. The contact form and SGO PHP app require a PHP-capable server.

## Updating the course

Build the [course source repository](https://github.com/Jacob19999/gradient-descent) with `npm ci` and `npm run build`. Copy the contents of its `dist/` directory into `portfolio/gradient-descent/`, keeping `index.html` and the `assets/` directory together. See [portfolio/README.md](portfolio/README.md) for the source revision used for the current build.

## Publishing

This repository does not contain a GitHub Actions or GitHub Pages deployment setup. Merge changes here, then publish the repository's public site files to the web root configured for `triaggent.com` using the hosting account's deployment method. Keep the full `portfolio/gradient-descent/` directory together so its relative asset links resolve.

Keep local contact settings and any plaintext SGO datasets out of the public repository. The relevant paths are gitignored; the SGO deployment details are in [sgo-next/README.md](sgo-next/README.md).

Publish the root `.htaccess` and the directory `.htaccess` files along with the
site. They disable directory listings, block configuration/source directories
(including the separate `sgo-next/` application), and set HSTS, anti-framing,
content-type, referrer, and content-security headers. Apache/LiteSpeed must allow
these overrides and enable `mod_headers` and `mod_rewrite`. If the hosting CDN
replaces security headers, configure it to preserve these policies. Keep the
hosting account's existing HTTP-to-HTTPS redirect enabled.

The homepage CSP approves its inline scripts by hash. Both homepage update
scripts refresh those hashes automatically; after other homepage script edits,
run `python3 scripts/security_policy.py` and publish `.htaccess` with `index.html`.
Its bundled component compiler still needs `unsafe-eval` and blob scripts; the
portfolio exports need inline scripts, including the document decrypted by the
Beyond wRVUs password form. The policies restrict their network destinations and
framing without disabling those features.

Contact confirmations contain fixed text only. Contact submissions reserve an
atomic per-IP slot before email delivery (45 seconds by default), at most three
submissions per recipient per hour, and a global cap of 60 per hour (configurable
with `global_rate_limit_per_hour`). PHP login attempts use the same locked storage
to enforce eight attempts per IP per ten minutes, with a global cap of 64. Both
features fail closed if the PHP user's private temporary storage is unavailable.

### Security regression checks

The PHP tests run in a disposable local container whose mail transport captures
messages locally. They never deliver test emails. Start a fresh container for
each run so the counters and captured messages start empty:

```bash
docker build -t triaggent-security-tests tests
docker run -d --rm --name triaggent-security-tests -p 127.0.0.1:8811:80 \
  -v "$PWD:/var/www/html:ro" triaggent-security-tests
python3 tests/check-web-security.py http://127.0.0.1:8811
docker exec --user www-data triaggent-security-tests php tests/rate-limit.php
docker exec triaggent-security-tests php tests/check-captured-mail.php
docker stop triaggent-security-tests
```

In `sgo-next/`, run `npm ci`, `npm test`, `npm run build`, `npm run test:http`,
and `npm audit`. The HTTP tests start their own local production server and
generate disposable credentials and private state.

## Triaggent Agentic Agent project example

The portfolio card for the document research assistant links to
`https://agenticagent.triaggent.com/`. The project landing page explains its capabilities;
its **Demo** button opens a fresh chat without sign-in. Its editable markup is in
`components/notebooklm-example.html`. After editing it, update the bundled homepage:

```bash
python3 scripts/update-notebooklm-example.py
```

Use `--demo-url https://...` to change the target. The updater changes only the
JSON-encoded template and preserves the embedded runtime assets and existing
portfolio projects. Publish the card after the application hostname is ready.
The application and its private data are deployed independently from this site.

## Mobile layout

The homepage adapts to phone and tablet widths, with a collapsible navigation menu, stacked content/project grids, and a scrollable contact dialog. Styles are maintained in `components/mobile-layout.css`, and the mobile menu markup is in `components/mobile-navigation.html`. Run `python3 scripts/update-mobile-layout.py` to update their named blocks in the bundled template. This preserves embedded runtime assets; the existing project-card updater also preserves these mobile changes.
