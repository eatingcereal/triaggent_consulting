import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)),
  poweredByHeader: false,
  // The atlas has no optimized images; keep the unused image API disabled.
  images: { unoptimized: true },
  async headers() {
    return [{ source: '/(.*)', headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'no-referrer' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
    ] }];
  },
  // To serve the atlas under a path (e.g. https://triaggent.com/sgo), uncomment
  // the line below AND prefix the fetch URL in public/app.js with the same path.
  // basePath: '/sgo',
};

export default nextConfig;
