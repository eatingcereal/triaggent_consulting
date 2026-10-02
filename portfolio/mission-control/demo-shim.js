// Read-only demo: answers the console's /api/* calls from the JSON snapshots
// that export_static_demo.py wrote next to index.html. Loaded before the app.
(() => {
  const realFetch = window.fetch.bind(window);
  const base = new URL('./', document.baseURI).pathname;
  const READ_ONLY = 'Read-only demo: missions are not run here. These are recorded Isaac Sim flights; ' +
    'run the real console locally to fly your own.';
  const json = (value, status = 200) => new Response(JSON.stringify(value),
    { status, headers: { 'Content-Type': 'application/json' } });
  const frameCache = new Map();

  // Server paths are root-absolute (/api/..., /static/...); re-root them under this page.
  const reroot = path => (path.startsWith('/api/') || path.startsWith('/static/')) ? base + path.slice(1) : path;

  async function gunzip(response) {
    const bytes = new Uint8Array(await response.arrayBuffer());
    // Some hosts transparently decode .gz: accept plain JSON too.
    if (bytes[0] !== 0x1f || bytes[1] !== 0x8b) return JSON.parse(new TextDecoder().decode(bytes));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return JSON.parse(await new Response(stream).text());
  }

  async function frames(id, after) {
    if (!frameCache.has(id)) {
      frameCache.set(id, realFetch(`${base}api/missions/${id}.frames.json.gz`).then(r => {
        if (!r.ok) throw new Error('Recorded frames are missing for this mission');
        return gunzip(r);
      }));
    }
    const all = (await frameCache.get(id)).frames;
    return json({ frames: all.slice(after), next: all.length });
  }

  window.fetch = async (input, init) => {
    const url = new URL(typeof input === 'string' ? input : input.url, document.baseURI);
    // blob:, data: and cross-origin requests are none of the shim's business.
    if (url.origin !== location.origin) return realFetch(input, init);
    const method = (init?.method ?? (typeof input === 'string' ? 'GET' : input.method) ?? 'GET').toUpperCase();
    const path = url.pathname.startsWith(base) ? '/' + url.pathname.slice(base.length) : url.pathname;
    if (!path.startsWith('/api/')) return realFetch(reroot(url.pathname) + url.search, typeof input === 'string' ? init : undefined);

    if (method !== 'GET') {
      // Validation endpoints echo the request; everything else would change server state.
      if (path === '/api/flight-plan/validate' || path === '/api/flight-plan/route') {
        return json(JSON.parse(init?.body ?? 'null'));
      }
      return json({ detail: READ_ONLY }, 403);
    }
    let m;
    if ((m = path.match(/^\/api\/missions\/([a-f0-9]{12})\/frames$/))) return frames(m[1], Number(url.searchParams.get('after') || 0));
    if (/^\/api\/missions\/[a-f0-9]{12}\/(video|download|log)$/.test(path)) return json({ detail: 'Not available in the demo' }, 404);
    const response = await realFetch(`${base}${path.slice(1)}.json`);
    return response.ok ? response : json({ detail: 'Not found' }, 404);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.createElement('div');
    banner.className = 'demo-banner';
    banner.innerHTML = '<strong>RECORDED-FLIGHT DEMO</strong> Real flights from a custom NVIDIA Isaac Sim model of an ' +
      'electric ducted-fan landing vehicle, flown by convex (SOCP) powered-descent guidance. Pick one under ' +
      '<em>Mission archive</em> and press play. Launching new missions needs the local Isaac Sim service.';
    document.body.prepend(banner);
    // The page header claims a live Isaac service; say what this is.
    const label = document.getElementById('connection');
    if (label) {
      const fix = () => { if (label.textContent !== 'RECORDED DEMO') label.textContent = 'RECORDED DEMO'; };
      new MutationObserver(fix).observe(label, { childList: true, characterData: true, subtree: true });
      fix();
    }
  });
})();
