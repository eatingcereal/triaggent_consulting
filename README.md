# Triaggent Consulting website

This repository contains the public [Triaggent Consulting website](https://triaggent.com/), its PHP contact form, and the SGO Market Atlas project.

## What's here

| Path | Purpose |
| --- | --- |
| `index.html` | Public homepage. It is a bundled export; the original authoring source is not in this repository. |
| `contact.php`, `contact-config.php` | Contact form endpoint and shared configuration. Start from `contact-config.local.php.example` for local settings. |
| `portfolio/gradient-descent/` | Static build of the [Gradient Descent interactive course](https://github.com/Jacob19999/gradient-descent), served at `/portfolio/gradient-descent/`. |
| `sgo/` | Password-protected PHP version of the SGO Market Atlas. |
| `sgo-next/` | Separate Next.js version of the atlas; see its [README](sgo-next/README.md). |

The homepage portfolio also links to the separate [Optimist Club of Minnesota Valley website](https://optimistmv.com/).

## Previewing the public pages

From the repository root, run `python3 -m http.server 8000` and open `http://localhost:8000/`. This previews the homepage and the static Gradient Descent course. The contact form and SGO PHP app require a PHP-capable server.

## Updating the course

Build the [course source repository](https://github.com/Jacob19999/gradient-descent) with `npm ci` and `npm run build`. Copy the contents of its `dist/` directory into `portfolio/gradient-descent/`, keeping `index.html` and the `assets/` directory together. See [portfolio/README.md](portfolio/README.md) for the source revision used for the current build.

## Publishing

This repository does not contain a GitHub Actions or GitHub Pages deployment setup. Merge changes here, then publish the repository's public site files to the web root configured for `triaggent.com` using the hosting account's deployment method. Keep the full `portfolio/gradient-descent/` directory together so its relative asset links resolve.

Keep local contact settings and any plaintext SGO datasets out of the public repository. The relevant paths are gitignored; the SGO deployment details are in [sgo-next/README.md](sgo-next/README.md).
