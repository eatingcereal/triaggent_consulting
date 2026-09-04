"use client";

import { useEffect } from "react";

// Loads a script once, resolving when ready. Skips if already present.
function loadScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) return resolve();
    const s = document.createElement("script");
    s.id = id;
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("failed to load " + src));
    document.body.appendChild(s);
  });
}

export default function Dashboard() {
  useEffect(() => {
    document.body.classList.add("app");
    const w = window as unknown as { __sgoBooted?: boolean };
    if (!w.__sgoBooted) {
      w.__sgoBooted = true;
      // Chart.js and Leaflet must be on window before app.js runs.
      (async () => {
        await loadScript("/vendor/chart.umd.min.js", "sgo-chart");
        await loadScript("/vendor/leaflet.js", "sgo-leaflet");
        await loadScript("/app.js", "sgo-app");
      })().catch((e) => console.error(e));
    }
    return () => {
      document.body.classList.remove("app");
    };
  }, []);

  return (
    <>
      <aside className="sidebar">
        <div className="brand">
          <div className="mark" aria-hidden="true">
            <svg width="19" height="19" viewBox="0 0 32 32" fill="none">
              <path d="M16 5 L27 26 L5 26 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" opacity=".55" />
              <circle cx="16" cy="16" r="3.2" fill="white" />
            </svg>
          </div>
          <div>
            <div className="brand-name">SGO Market Atlas</div>
            <div className="brand-sub">GynOnc · MarketView</div>
          </div>
        </div>
        <nav className="nav" aria-label="Views">
          <div className="nav-label">Brief</div>
          <button className="tab active" type="button" data-view="summary">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 4h11l3 3v13H5z" />
              <path d="M8 10h8M8 14h8M8 18h5" />
            </svg>
            Summary
          </button>
          <button className="tab" type="button" data-view="opportunity">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
            </svg>
            Opportunity
          </button>
          <div className="nav-label">Explore</div>
          <button className="tab" type="button" data-view="overview">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="4" y="4" width="7" height="7" rx="1" />
              <rect x="13" y="4" width="7" height="7" rx="1" />
              <rect x="4" y="13" width="7" height="7" rx="1" />
              <rect x="13" y="13" width="7" height="7" rx="1" />
            </svg>
            Overview
          </button>
          <button className="tab" type="button" data-view="facilities">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 21V5l7-2 7 2v16" />
              <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4" />
            </svg>
            Facilities
          </button>
          <button className="tab" type="button" data-view="practitioners">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
            </svg>
            Practitioners
          </button>
          <button className="tab" type="button" data-view="access">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Access context
          </button>
          <div className="nav-label">Rigor</div>
          <button className="tab" type="button" data-view="trust">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
              <path d="M9.5 12l1.8 1.8 3.4-3.6" />
            </svg>
            Data trust
          </button>
          <button className="tab" type="button" data-view="phenotype">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 3v6l-4 8a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-4-8V3" />
              <path d="M8 3h8M8 13h8" />
            </svg>
            Phenotype &amp; methods
          </button>
        </nav>
        <div className="sidebar-foot">
          <button className="icon-btn" id="theme-toggle" type="button" aria-label="Toggle theme">
            <span className="lbl">Theme</span>
          </button>
          <a className="icon-btn" href="/api/logout">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3" />
              <path d="M10 8l-4 4 4 4M6 12h9" />
            </svg>
            <span className="lbl">Sign out</span>
          </a>
        </div>
      </aside>
      <div className="content">
        <header className="topbar">
          <div className="title-wrap">
            <h1 id="view-title">Summary</h1>
            <div className="sub" id="view-sub">
              Minnesota MarketView sample · Layer 1 feasibility · not a revenue model
            </div>
          </div>
          <div className="spacer"></div>
          <div className="filters">
            <div>
              <label htmlFor="cohort">Cohort</label>
              <select id="cohort" defaultValue="ovarian">
                <option value="ovarian">Ovarian debulking</option>
                <option value="radical">Radical hysterectomy</option>
              </select>
            </div>
            <div>
              <label htmlFor="system">Health system</label>
              <select id="system" defaultValue="all">
                <option value="all">All systems</option>
                <option value="Mayo">Mayo</option>
                <option value="Fairview">Fairview</option>
                <option value="Allina">Allina</option>
                <option value="HealthPartners">HealthPartners</option>
                <option value="CentraCare">CentraCare</option>
                <option value="Essentia">Essentia</option>
              </select>
            </div>
            <div>
              <label htmlFor="gynonc">Gyn-onc label</label>
              <select id="gynonc" defaultValue="all">
                <option value="all">All practitioners</option>
                <option value="primary">Primary gyn-onc</option>
                <option value="any">Gyn-onc any specialty</option>
                <option value="neither">Not labeled gyn-onc</option>
              </select>
            </div>
          </div>
        </header>
        <div className="banner" id="banner"></div>
        <main className="main">
          <div id="overview-panels" className="hidden">
            <div className="kpis" id="kpi-row"></div>
            <div className="grid-2">
              <div className="card">
                <h2>Hospital locations</h2>
                <div id="map"></div>
              </div>
              <div className="card">
                <h2>Unsuppressed volume</h2>
                <div className="chart-box">
                  <canvas id="volChart"></canvas>
                </div>
              </div>
            </div>
            <div className="card" style={{ marginTop: 14 }}>
              <h2>Specialty mix in the extract</h2>
              <div className="chart-box" style={{ height: 280 }}>
                <canvas id="specChart"></canvas>
              </div>
            </div>
          </div>
          <div id="table-wrap"></div>
        </main>
      </div>
      <div className="drawer-back" id="drawer-back"></div>
      <aside className="drawer" id="drawer"></aside>
    </>
  );
}
