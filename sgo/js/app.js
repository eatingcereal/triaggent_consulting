(() => {
  const state = {
    view: "summary",
    cohort: "ovarian",
    system: "all",
    gynonc: "all",
    sort: { table: "facilities", key: "volume", dir: -1 },
    charts: {},
    map: null,
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const cssVar = (name, fallback) => {
    const val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return val || fallback;
  };
  const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";
  const tileURL = () =>
    isDark()
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
  const TILE_OPTS = { attribution: "&copy; OpenStreetMap &copy; CARTO", subdomains: "abcd", maxZoom: 19 };
  function applyChartTheme() {
    if (!window.Chart) return;
    Chart.defaults.color = cssVar("--chart-ink", "#59534b");
    Chart.defaults.borderColor = cssVar("--chart-grid", "#ece8e1");
    Chart.defaults.font.family = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
  }

  const VIEW_META = {
    summary: ["Summary", "Feasibility verdict for the MarketView sample"],
    opportunity: ["Opportunity", "Ideas, external data, and the data landscape"],
    overview: ["Overview", "Source patient cells, cohort presence, and specialty labels"],
    facilities: ["Facilities", "Hospitals in the Minnesota extract"],
    practitioners: ["Practitioners", "Providers and the gyn-onc funnel"],
    access: ["Access context", "Public incidence, workforce, and geography"],
    trust: ["Data trust", "What to verify before interpreting"],
    phenotype: ["Phenotype & methods", "Draft cohort code library and gaps"],
  };

  async function loadFile(name) {
    const res = await fetch("api.php?file=" + encodeURIComponent(name), {
      credentials: "same-origin",
      headers: { Accept: "application/json" },
    });
    if (res.status === 401) {
      window.location.reload();
      throw new Error("unauthorized");
    }
    if (!res.ok) throw new Error("failed " + name);
    return res.json();
  }

  function cohortKey() {
    return state.cohort === "radical" ? "radical_hysterectomy" : "ovarian";
  }

  function fmtCount(obj) {
    if (!obj) return "—";
    if (obj.suppressed) return "*";
    if (obj.missing || obj.value == null) return "—";
    return String(obj.value);
  }

  function volume(obj) {
    return obj && obj.value != null ? obj.value : -1;
  }

  function filteredFacilities(data) {
    return data.facilities.filter((f) => state.system === "all" || f.system === state.system);
  }

  function filteredPractitioners(data) {
    let rows = data.practitioners;
    if (state.gynonc === "primary") rows = rows.filter((p) => p.gynonc_primary);
    if (state.gynonc === "any") rows = rows.filter((p) => p.gynonc_any);
    if (state.gynonc === "neither") rows = rows.filter((p) => !p.gynonc_any);
    if (state.system !== "all") {
      const ids = new Set(
        data.affiliations
          .filter((a) => {
            const fac = data.facilities.find((f) => f.poid === a.poid);
            return fac && fac.system === state.system && !a[cohortKey()].missing;
          })
          .map((a) => a.piid)
      );
      rows = rows.filter((p) => ids.has(p.piid));
    }
    return rows.filter((p) => !p[cohortKey()].missing);
  }

  function destroyChart(id) {
    if (state.charts[id]) {
      state.charts[id].destroy();
      delete state.charts[id];
    }
  }

  function stackedBar(id, labels, datasets) {
    destroyChart(id);
    applyChartTheme();
    const ctx = document.getElementById(id);
    if (!ctx) return;
    state.charts[id] = new Chart(ctx, {
      type: "bar",
      data: { labels, datasets },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: {
          x: { stacked: true, grid: { color: cssVar("--chart-grid", "#ece8e1") }, border: { display: false }, ticks: { precision: 0 } },
          y: { stacked: true, grid: { display: false }, border: { display: false }, ticks: { font: { size: 11 } } },
        },
      },
    });
  }

  function barChart(id, labels, values, color) {
    destroyChart(id);
    applyChartTheme();
    const ctx = document.getElementById(id);
    if (!ctx) return;
    state.charts[id] = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [{ data: values, backgroundColor: color || cssVar("--series-1", "#4f46e5"), borderRadius: 5, maxBarThickness: 26 }],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: cssVar("--chart-grid", "#ece8e1") }, border: { display: false }, ticks: { precision: 0 } },
          y: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 11 } } },
        },
      },
    });
  }

  function renderMap(facilities) {
    const el = document.getElementById("map");
    if (!el) return;
    if (state.map) {
      state.map.remove();
      state.map = null;
    }
    const map = L.map(el, { scrollWheelZoom: false }).setView([45.6, -93.4], 6);
    L.tileLayer(tileURL(), TILE_OPTS).addTo(map);
    const brand = cssVar("--series-1", "#4f46e5");
    const key = cohortKey();
    const nums = facilities.map((f) => volume(f[key])).filter((n) => n > 0);
    const max = Math.max(1, ...nums);
    facilities.forEach((f) => {
      if (f.lat == null || f.lon == null) return;
      const v = volume(f[key]);
      const suppressed = f[key].suppressed;
      const missing = f[key].missing;
      const r = v > 0 ? 8 + (Math.sqrt(v / max) * 22) : 8;
      const marker = L.circleMarker([f.lat, f.lon], {
        radius: r,
        color: missing ? "#78716c" : suppressed ? "#b45309" : brand,
        fillColor: missing ? "#d6d3d1" : suppressed ? "#fde68a" : brand,
        fillOpacity: suppressed ? 0.35 : 0.6,
        weight: 2,
      }).addTo(map);
      marker.bindPopup(
        `<strong>${esc(f.name)}</strong><br>${esc(f.system)} · ${esc(f.city)}<br>` +
          `Patients: ${fmtCount(f[key])}` +
          (f[key].rank != null ? `<br>Source decile: ${f[key].rank} (universe unconfirmed)` : "")
      );
    });
    state.map = map;
    setTimeout(() => map.invalidateSize(), 80);
  }

  function esc(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderOverview(data) {
    const fac = filteredFacilities(data);
    const prac = filteredPractitioners(data);
    const key = cohortKey();
    const unsup = fac.map((f) => f[key].value).filter((v) => v != null);
    const sum = unsup.reduce((a, b) => a + b, 0);
    const gynPri = prac.filter((p) => p.gynonc_primary).length;
    const starHosp = fac.filter((f) => f[key].suppressed).length;
    const blankHosp = fac.filter((f) => f[key].missing).length;

    $("#kpi-row").innerHTML = [
      kpi("Hospitals", fac.length, "Acute-care MN extract"),
      kpi("Cohort-present practitioners", prac.length, `${gynPri} primary gyn-onc · ${prac.filter(p => p.physician).length} physicians in this selection`),
      kpi("Visible facility-cell sum", unsup.length ? sum : "—", `${unsup.length} numeric · ${starHosp} masked · ${blankHosp} blank; not unique patients`),
      kpi("Nonblank facility cells", fac.length - blankHosp, "Numeric or masked; no clinical confirmation"),
      kpi("Data-trust alerts", data.alerts.length, `${data.kpis.critical_alerts} critical`, true),
    ].join("");

    const ranked = [...fac].sort((a, b) => volume(b[key]) - volume(a[key]));
    const withVol = ranked.filter((f) => f[key].value != null);
    barChart(
      "volChart",
      withVol.map((f) => shortName(f.name)),
      withVol.map((f) => f[key].value),
      cssVar("--series-1", "#4f46e5")
    );

    const spec = {};
    prac.forEach((p) => {
      const s = p.specialty_1 || "Unknown";
      spec[s] = (spec[s] || 0) + 1;
    });
    const specRows = Object.entries(spec).sort((a, b) => b[1] - a[1]);
    $("#specChart").parentElement.style.height = Math.max(280, specRows.length * 28) + "px";
    barChart("specChart", specRows.map((r) => r[0]), specRows.map((r) => r[1]), cssVar("--series-2", "#1baf7a"));

    renderMap(fac);
  }

  function kpi(label, value, hint, alert) {
    return `<article class="kpi${alert ? " alert" : ""}"><div class="label">${esc(label)}</div><div class="value">${esc(value)}</div><div class="hint">${esc(hint)}</div></article>`;
  }

  function shortName(name) {
    return String(name)
      .replace("M HEALTH FAIRVIEW UNIVERSITY OF MINNESOTA MEDICAL CENTER", "Fairview UMMC")
      .replace("M HEALTH FAIRVIEW ST. JOHN'S HOSPITAL", "Fairview St. John's")
      .replace("M HEALTH FAIRVIEW SOUTHDALE HOSPITAL", "Fairview Southdale")
      .replace("ST. FRANCIS REGIONAL MEDICAL CENTER", "St. Francis")
      .replace("ESSENTIA HEALTH ST. MARY'S MEDICAL CENTER", "Essentia St. Mary's")
      .replace("CENTRACARE - ST. CLOUD HOSPITAL", "CentraCare St. Cloud")
      .replace("ABBOTT NORTHWESTERN HOSPITAL", "Abbott Northwestern")
      .replace("MAYO CLINIC - ROCHESTER", "Mayo Rochester")
      .replace(" METHODIST HOSPITAL", " Methodist")
      .replace("HOSPITAL", "Hosp.");
  }

  function sortRows(rows, keyFn) {
    const dir = state.sort.dir;
    return [...rows].sort((a, b) => {
      const av = keyFn(a);
      const bv = keyFn(b);
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "string") return av.localeCompare(bv) * dir;
      return (av - bv) * dir;
    });
  }

  function renderFacilities(data) {
    const key = cohortKey();
    let rows = filteredFacilities(data);
    const keyFn = (f) => {
      if (state.sort.key === "name") return f.name;
      if (state.sort.key === "system") return f.system;
      if (state.sort.key === "rank") return f[key].rank;
      if (state.sort.key === "gyn") return f.gynonc_primary_count;
      return f[key].value;
    };
    rows = sortRows(rows, keyFn);
    $("#table-wrap").innerHTML = `
      <div class="card">
        <h2>Facilities (${rows.length})</h2>
        <p class="muted">All sample hospitals in the selected system, including blank cohort cells. Roster counts cover all exported associations and both specialties; they are not staffing totals. System labels and map coordinates are unvalidated app enrichments. Source decile universe is unknown.</p>
        <table>
          <thead><tr>
            <th data-k="name">Hospital</th>
            <th data-k="system">System</th>
            <th>City</th>
            <th data-k="rank">Decile*</th>
            <th data-k="volume">Patients</th>
            <th>Exported roster</th>
            <th data-k="gyn">Primary gyn-onc</th>
            <th>Any-field gyn-onc</th>
            <th>Flags</th>
          </tr></thead>
          <tbody>
            ${rows
              .map(
                (f) => `<tr class="clickable" data-poid="${esc(f.poid)}">
                <td><strong>${esc(shortName(f.name))}</strong><div class="muted">${esc(f.npi)}</div></td>
                <td>${esc(f.system)}</td>
                <td>${esc(titleCase(f.city))}</td>
                <td>${f[key].rank ?? "—"}</td>
                <td>${fmtCount(f[key])}</td>
                <td>${f.practitioner_count}</td>
                <td>${f.gynonc_primary_count}</td>
                <td>${f.gynonc_any_count}</td>
                <td>${f.gynonc_any_count === 0 ? '<span class="tag warn">No gyn-onc label in roster</span>' : f.gynonc_primary_count === 0 ? '<span class="tag warn">Secondary labels only</span>' : ""}
                    ${f[key].suppressed ? '<span class="tag muted">*</span>' : f[key].missing ? '<span class="tag muted">Blank</span>' : ""}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>`;
    $("#table-wrap").querySelectorAll("th[data-k]").forEach((th) => {
      th.onclick = () => {
        const k = th.getAttribute("data-k");
        state.sort.dir = state.sort.key === k ? -state.sort.dir : (k === "name" || k === "system" ? 1 : -1);
        state.sort.key = k;
        render();
      };
    });
    $("#table-wrap").querySelectorAll("tr[data-poid]").forEach((tr) => {
      tr.onclick = () => openFacility(data, tr.getAttribute("data-poid"));
    });
  }

  function titleCase(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function renderPractitioners(data) {
    const key = cohortKey();
    let rows = filteredPractitioners(data);
    const q = ($("#prac-search") && $("#prac-search").value.trim().toLowerCase()) || "";
    if (q) {
      rows = rows.filter(
        (p) =>
          (p.display_name || "").toLowerCase().includes(q) ||
          [p.specialty_1, p.specialty_2].join(" ").toLowerCase().includes(q) ||
          (p.npi || "").includes(q)
      );
    }
    const funnel = {
      primary: rows.filter((p) => p.gynonc_primary).length,
      any: rows.filter((p) => p.gynonc_any).length,
      neither: rows.filter((p) => !p.gynonc_any).length,
    };
    rows = sortRows(rows, (p) => (state.sort.key === "name" ? p.display_name : p[key].value));
    $("#table-wrap").innerHTML = `
      <div class="card">
        <h2>Practitioners (${rows.length})</h2>
        <p class="muted" style="margin:0 0 10px">Current selection: ${funnel.primary} primary · ${funnel.any - funnel.primary} secondary-only · ${funnel.neither} neither. Only practitioners with nonblank cohort patient cells are shown; system filtering also requires a nonblank link cell. Blank means unknown, not absence of care. Patient counts remain practitioner-wide; they are not allocated to the selected system. Decile universe is unconfirmed.</p>
        <input id="prac-search" class="search" placeholder="Search name, specialty, NPI" value="${esc(q)}">
        <table>
          <thead><tr>
            <th data-k="name">Name</th>
            <th>Specialty</th>
            <th>Gyn-onc</th>
            <th>City</th>
            <th data-k="volume">Patients</th>
            <th>Decile</th>
            <th>Sites</th>
          </tr></thead>
          <tbody>
            ${rows
              .map(
                (p) => `<tr class="clickable" data-piid="${esc(p.piid)}">
                <td><strong>${esc(p.display_name)}</strong><div class="muted">${esc(p.cred || "")} · ${esc(p.npi)}</div></td>
                <td>${esc(p.specialty_1 || "—")}${p.specialty_2 ? `<div class="muted">${esc(p.specialty_2)}</div>` : ""}</td>
                <td><span class="tag ${p.gynonc_primary ? "ok" : p.gynonc_any ? "" : "muted"}">${esc(p.gynonc_label)}</span>${p.nppes_gynonc ? ' <span class="tag ok">NPPES extract match</span>' : p.gynonc_any ? ' <span class="tag warn">No match in taxonomy extract</span>' : ""}</td>
                <td>${esc(titleCase(p.city))}${p.out_of_state ? ' <span class="tag warn">' + esc(p.state) + "</span>" : ""}</td>
                <td>${fmtCount(p[key])}</td>
                <td>${p[key].rank ?? "—"}</td>
                <td>${p.facility_count}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>`;
    const search = $("#prac-search");
    search.oninput = debounce(() => {
      const pos = search.selectionStart;
      renderPractitioners(data);
      $("#prac-search").focus();
      $("#prac-search").setSelectionRange(pos, pos);
    }, 150);
    $("#table-wrap").querySelectorAll("th[data-k]").forEach((th) => {
      th.onclick = () => {
        const key = th.dataset.k;
        state.sort.dir = state.sort.key === key ? -state.sort.dir : (key === "name" ? 1 : -1);
        state.sort.key = key;
        renderPractitioners(data);
      };
    });
    $("#table-wrap").querySelectorAll("tr[data-piid]").forEach((tr) => {
      tr.onclick = () => openPractitioner(data, tr.getAttribute("data-piid"));
    });
  }

  function debounce(fn, ms) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  }

  function researchCards(data) {
    return (data.summary.research || []).map((r) => `<article class="card methods">
      <h2>${esc(r.title)}</h2><p>${esc(r.body)}</p><p><strong>Interpretation:</strong> ${esc(r.caveat)}</p>
      <p class="muted">${esc(r.source)}${r.url ? ` · <a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Publication</a>` : ""}</p>
    </article>`).join("");
  }

  function sourceInventory(data) {
    return `<div class="card"><h2>Available evidence and proposed additions</h2>
      <div class="table-scroll"><table><thead><tr><th>Status</th><th>Sources</th><th>Interpretation</th></tr></thead>
      <tbody>${(data.summary.source_inventory || []).map((r) => `<tr>${r.map((v) => `<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
  }

  function countStates(rows, key) {
    return { numeric: rows.filter((r) => r[key].value != null).length,
      masked: rows.filter((r) => r[key].suppressed).length,
      blank: rows.filter((r) => r[key].missing).length,
      sum: rows.some((r) => r[key].value != null) ? rows.reduce((n, r) => n + (r[key].value ?? 0), 0) : null };
  }

  function renderSummary(data) {
    const s = data.summary;
    const k = data.kpis;
    const rows = [["Practitioner", data.practitioners], ["Facility", data.facilities], ["Association", data.affiliations]];
    const completeness = rows.flatMap(([grain, records]) => ["ovarian", "radical_hysterectomy"].map((key) => {
      const c = countStates(records, key);
      return `<tr><td>${grain}</td><td>${key === "ovarian" ? "Ovarian" : "Radical hysterectomy"}</td><td>${records.length}</td><td>${c.numeric}</td><td>${c.masked}</td><td>${c.blank}</td><td>${c.sum ?? "—"}</td></tr>`;
    })).join("");
    $("#table-wrap").innerHTML = `
      <p class="lede">${esc(s.headline)}</p><div class="verdict">${esc(s.verdict)}</div>
      <p class="muted">Whole-sample research brief · reviewed ${esc(data.meta.research_review_date)} · filters apply only to Explore views.</p>
      <div class="kpis">
        ${kpi("Practitioners", data.practitioners.length, `${k.physicians} physicians · ${k.physician_assistants ?? 4} physician assistants`)}
        ${kpi("Gyn-onc labels", k.gynonc_any, `${k.gynonc_primary} primary · ${k.gynonc_secondary_only} secondary-only; not validated capacity`)}
        ${kpi("Sample hospitals", data.facilities.length, "Minnesota · completeness unknown")}
        ${kpi("RH nonblank links", k.confirmed_rh_links, "Masked patient cells; not confirmed operations")}
        ${kpi("Draft code entries", data.codes.length, `${new Set(data.codes.map(c => c.code)).size} distinct tokens; clinical review required`)}
      </div>
      <section class="sum-section"><div class="section-head"><span class="eyebrow">Research</span><h2>What the supplied evidence establishes</h2></div>
        <div class="research-grid">${researchCards(data)}</div></section>
      <section class="sum-section"><div class="card"><h2>Counts reconciled to the workbook</h2>
        <p class="muted">Numeric, masked and blank are distinct states. The sums below describe visible cells at each grain; they are not unique patients and must not be added across grains. No observation period is supplied.</p>
        <div class="table-scroll"><table><thead><tr><th>Grain</th><th>Cohort</th><th>Rows</th><th>Numeric</th><th>Masked *</th><th>Blank —</th><th>Visible-cell sum</th></tr></thead><tbody>${completeness}</tbody></table></div>
        <p class="muted">All 87 practitioner–facility keys join. For radical hysterectomy, 38 links have a copied facility rank but a blank link count. Associations are not referrals.</p>
      </div></section>
      <section class="sum-section"><div class="claim-grid">
        <div class="card"><h2>Supported now</h2><ul>${s.can_do.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div class="card"><h2>Evidence still needed</h2><ul>${s.cannot_do.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      </div></section>
      <section class="sum-section">${sourceInventory(data)}</section>
      <div class="next"><h2>Recommended next step</h2><p>${esc(s.next_step)}</p></div>`;
  }

  function ovaryColor(rate) {
    if (rate == null) return "#d6d3d1";
    if (rate < 8) return "#c7d2fe";
    if (rate < 10) return "#818cf8";
    if (rate < 12) return "#4f46e5";
    return "#312e81";
  }

  function renderAccess(data) {
    const ext = data.external;
    const counties = data.mn_counties || [];
    const cms = data.facility_cms || [];
    const nppes = data.nppes_mn || [];
    const nat = ext.national;
    const mn = ext.minnesota;
    const join = ext.sample_join;
    $("#table-wrap").innerHTML = `
      <div class="kpis">
        ${kpi("US ovary AAIR / 100k", nat.ovary_aair, `${nat.ovary_annual_cases.toLocaleString()} average cases/year · 2018–2022`)}
        ${kpi("US cervix / uterus AAIR", `${nat.cervix_aair} / ${nat.uterus_aair}`, "Per 100,000 women · 2018–2022; not surgical rates")}
        ${kpi("MN NPPES extract NPIs", mn.nppes_gynonc_npi1, `Individuals with taxonomy; ${mn.rural_counties}/${mn.counties} counties non-metro`)}
        ${kpi("Sample ∩ NPPES", join.practitioners_nppes_gynonc + "/77", `${join.marketview_primary_gynonc_missing_nppes}/9 primary labels missing`)}
        ${kpi("CMS candidate matches", join.facilities_matched_cms_zip + "/12", "ZIP/name heuristic; crosswalk unvalidated")}
      </div>
      <div class="grid-2">
        <div class="card">
          <h2>Minnesota counties — ovarian AAIR (centroids)</h2>
          <p class="muted">2018–2022 age-adjusted incidence per 100,000 women. Gray = suppressed or missing; orange = sample hospitals. Dots are county reference points, not patient locations. No travel time, catchment or local capacity is measured.</p>
          <div id="access-map" style="height:380px;border-radius:12px;background:#edf0ea"></div>
        </div>
        <div class="card">
          <h2>Leading states in the supplied taxonomy extract</h2>
          <p class="muted">Taxonomy 207VX0201X, NPI-1. One NPI counted per state where a location appears; multi-state NPIs can appear in multiple bars. Extract coverage is unconfirmed; this is not national workforce or clinical capacity.</p>
          <div class="chart-box"><canvas id="nppesChart"></canvas></div>
        </div>
      </div>
      <div class="card" style="margin-top:12px">
        <h2>Candidate CMS matches and office-visit price context</h2>
        <p class="muted">ZIP/name matches need a validated NPI–CCN crosswalk. CMS office-visit values are locality benchmarks from the supplied snapshot; pricing year and billing assumptions need confirmation. They are not surgical-episode payments, collections or margin. Provider distances are withheld pending validated practice geocoding.</p>
        <table>
          <thead><tr><th>Hospital</th><th>Candidate CCN</th><th>County</th><th>Type / ownership</th><th>New-visit benchmark $</th></tr></thead>
          <tbody>
            ${cms
              .map(
                (f) => `<tr>
                <td><strong>${esc(shortName(f.name))}</strong><div class="muted">${esc(f.cms_name || "")}</div></td>
                <td>${esc(f.cms_ccn || "—")}</td>
                <td>${esc(f.county || "—")}</td>
                <td>${esc(f.cms_type || "")}<div class="muted">${esc(f.cms_ownership || "")}</div></td>
                <td>${f.medicare_new_visit != null ? "$" + f.medicare_new_visit : "—"}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="card" style="margin-top:12px">
        <h2>Minnesota NPPES individual GynOnc NPIs (${nppes.length})</h2>
        <p class="muted">Taxonomy 207VX0201X, NPI-1 only. Public registry; not a capacity census. Phones stripped.</p>
        <table>
          <thead><tr><th>Name</th><th>NPI</th><th>City</th><th>ZIP</th></tr></thead>
          <tbody>
            ${nppes
              .map(
                (p) => `<tr><td>${esc(p.name)}</td><td>${esc(p.npi)}</td><td>${esc(p.city)}</td><td>${esc(p.zip)}</td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>`;
    if (state.map) {
      state.map.remove();
      state.map = null;
    }
    const el = document.getElementById("access-map");
    if (el && window.L) {
      const map = L.map(el, { scrollWheelZoom: false }).setView([46.0, -94.0], 6);
      L.tileLayer(tileURL(), TILE_OPTS).addTo(map);
      counties.forEach((c) => {
        if (c.lat == null) return;
        L.circleMarker([c.lat, c.lon], {
          radius: c.ovary_count ? 4 + Math.min(10, Math.sqrt(c.ovary_count) * 2) : 4,
          color: ovaryColor(c.ovary_rate),
          fillColor: ovaryColor(c.ovary_rate),
          fillOpacity: c.ovary_rate == null ? 0.25 : 0.7,
          weight: 1,
        })
          .addTo(map)
          .bindPopup(
            `<strong>${esc(c.name)}</strong><br>RUCC ${c.rucc ?? "—"} ${c.metro ? "(metro)" : "(non-metro)"}<br>` +
              `Ovary AAIR ${c.ovary_rate ?? "*"} · avg count ${c.ovary_count ?? "*"}<br>` +
              `Cervix ${c.cervix_rate ?? "*"} · Uterus ${c.uterus_rate ?? "*"}<br>` +
              `Poverty ${c.poverty_pct ?? "—"}%`
          );
      });
      (data.facilities || []).forEach((f) => {
        if (f.lat == null) return;
        L.circleMarker([f.lat, f.lon], {
          radius: 8,
          color: "#111827",
          fillColor: "#f59e0b",
          fillOpacity: 0.9,
          weight: 2,
        })
          .addTo(map)
          .bindPopup(`<strong>${esc(f.name)}</strong><br>Sample hospital`);
      });
      state.map = map;
      setTimeout(() => map.invalidateSize(), 80);
    }
    barChart(
      "nppesChart",
      (ext.nppes_top_states || []).map((s) => s.state),
      (ext.nppes_top_states || []).map((s) => s.unique_npi1),
      cssVar("--series-1", "#4f46e5")
    );
  }

  function renderTrust(data) {
    $("#table-wrap").innerHTML = `<div class="alert-list">${data.alerts
      .map(
        (a) => `<article class="alert ${esc(a.severity)}" data-id="${esc(a.id)}">
          <h3>${esc(a.title)} <span class="tag ${a.severity === "critical" ? "bad" : a.severity === "warning" ? "warn" : ""}">${esc(a.severity)}</span></h3>
          <p>${esc(a.summary)}</p>
          <div class="more">${esc(a.detail)}</div>
          <button class="link" type="button">Why this matters</button>
        </article>`
      )
      .join("")}</div>`;
    $$(".alert button.link").forEach((btn) => {
      btn.onclick = () => btn.parentElement.classList.toggle("open");
    });
  }

  function renderPhenotype(data) {
    const q = ($("#code-search") && $("#code-search").value.trim().toLowerCase()) || "";
    let rows = data.codes;
    if (q) {
      rows = rows.filter((c) =>
        [c.code, c.cohort, c.category, c.description, c.status].join(" ").toLowerCase().includes(q)
      );
    }
    const missing = data.meta.not_in_extract;
    const cb = (data.summary && data.summary.codebook) || {};
    $("#table-wrap").innerHTML = `
      <div class="grid-2">
        <div class="card methods">
          <h2>What this extract is</h2>
          <p>${esc(data.meta.banner)}</p>
          <p>Grain: ${esc(data.meta.grain)}. Geography: ${esc(data.meta.geography)}. Cohorts: ${data.meta.cohorts.map(esc).join(", ")}.</p>
          <p>Workbook audit (Sept 2026): 41 codebook rows, 10 headers / 11 populated columns, CPT 58957 deleted Jan 2025. Boitano/Holtzman motivate a broader value story; they are not dollar benchmarks.</p>
        </div>
        <div class="card methods">
          <h2>Not in this extract</h2>
          <ul>${missing.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
          <p>Different gaps need different sources: suitable licensed claims for patient/event histories, operational data for coordination and referrals, registry data for stage/outcomes, and local accounting for costs. No single feed guarantees all of these.</p>
        </div>
      </div>
      <div class="card" style="margin-top:12px">
        <h2>Draft phenotype library (${rows.length})</h2>
        <p class="muted">${cb.rows || 41} entries · ${cb.unique_codes || 39} distinct tokens · ${cb.header_columns || 10} headers / ${cb.actual_columns || 11} populated columns. Descriptions below preserve the supplied draft and may be incorrect. No entry is an approved surgical phenotype. Historical coding flags require review against the service-year code set; wildcard families require explicit expansion.</p>
        <p class="muted">Review 58943 (not pelvic exenteration), 58953 (initial rather than recurrent malignancy surgery), 58957 (deleted for 2025), and 44139 (mobilization add-on, not a separate bowel resection). Reference: supplied Research Review §5 and <a href="https://www.sgo.org/resources/coding-qa-ovarian-cancer-or-masses/" target="_blank" rel="noopener noreferrer">SGO coding guidance</a>. Core/companion roles, malignant diagnoses, co-occurrence and code year require clinical approval.</p>
        <input id="code-search" class="search" placeholder="Search codes, cohorts, issues" value="${esc(q)}">
        <table>
          <thead><tr><th>Cohort</th><th>Type</th><th>Code</th><th>Supplied draft description</th><th>Review status</th></tr></thead>
          <tbody>
            ${rows
              .map(
                (c) => `<tr>
                <td>${esc(c.cohort)}</td>
                <td>${esc(c.code_type)}</td>
                <td><strong>${esc(c.code)}</strong></td>
                <td>${esc(c.description || "")}${c.issues.length ? `<div class="muted">${c.issues.map(esc).join(", ")}</div>` : ""}</td>
                <td><span class="tag warn">${esc(c.status === "usable" ? "draft — clinical review required" : c.status)}</span></td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>`;
    const search = $("#code-search");
    search.oninput = debounce(() => {
      const pos = search.selectionStart;
      renderPhenotype(data);
      $("#code-search").focus();
      $("#code-search").setSelectionRange(pos, pos);
    }, 150);
  }

  function renderOpportunity(data) {
    const phases = [
      ["1 · Feasibility and methodology", "Current priority", "Use the verified sample atlas to resolve the vendor dictionary, suppression, cohort definition and observation window. Review an ovarian phenotype with SGO; no code in the current library is clinically approved by this app."],
      ["2 · Detailed economic model", "Needs suitable licensed data", "Obtain dated inpatient and outpatient claims with patient linkage and validated financial fields. Define episodes, reconcile claims and test attribution. A wider MarketView summary export does not supply these missing fields."],
      ["3 · Member customization", "Needs validated transport and local inputs", "Apply the approved episode model to compatible summary measures. Label source values, national benchmarks, member assumptions and calculated scenarios; reconcile outputs to inputs. Local finance owners define collections and variable costs."],
      ["Complement · Access and institutional value", "Context available; extensions conditional", "Use the existing public incidence, registry, rurality and poverty layers as context. Travel-time modeling, current service-site validation and workforce forecasts require additional data and scope. Access is not a prerequisite for the economic model."]
    ];
    const domains = [
      ["Consultation and diagnosis", "Visits, tests and diagnostic utilization may be observed in detailed claims. Referral intake, tumor board, treatment planning, navigation and unbilled review effort need operational or member inputs."],
      ["Surgical care", "Validated procedures can describe activity. Deduplicate operations and distinguish professional/facility, attending, assistant and co-surgeon roles. Complexity, OR resources, coordination and learner exposure need additional evidence."],
      ["Treatment, survivorship and end of life", "Longitudinal claims can describe captured treatment and follow-up. Infusion billing does not establish who directs care; trials, palliative coordination and non-billed work need local sources. Allow recurrence, repeated phases and pathways without surgery."]
    ];
    $("#table-wrap").innerHTML = `<div class="opp">
      <p class="lede">An editable institutional value toolkit, supported by an auditable economic model.</p>
      <div class="verdict">The August 22 clarification puts economic modeling and data methodology first. The May committee deck supplies the care/value framework; the workforce papers motivate questions but provide no dollar benchmark.</div>
      <section class="sum-section"><div class="claim-grid">${phases.map(p => `<article class="card methods"><h2>${esc(p[0])}</h2><span class="tag">${esc(p[1])}</span><p>${esc(p[2])}</p></article>`).join("")}</div></section>
      <section class="sum-section"><div class="section-head"><h2>Three care domains, with different evidence needs</h2></div><div class="research-grid">${domains.map(d => `<article class="card methods"><h2>${esc(d[0])}</h2><p>${esc(d[1])}</p></article>`).join("")}</div><p class="muted">Source: May 19 FOP committee deck, slides 6–8. These are proposed value domains, not reconstructed patient journeys.</p></section>
      <section class="sum-section"><div class="card methods"><h2>Rules for the economic model</h2>${(data.summary.financial_rules || []).map(r => `<h3>${esc(r[0])}</h3><p>${esc(r[1])}</p>`).join("")}
        <p class="muted">Source: August onboarding slides 4–8; supplied 2022 PJI layout; corrected Scope and Methods. Project license and delivery are unconfirmed. General <a href="https://risk.lexisnexis.com/products/patient-journey-intelligence" target="_blank" rel="noopener noreferrer">PJI product capabilities</a> do not establish the fields or coverage of BData’s eventual license.</p>
      </div></section>
      <section class="sum-section">${sourceInventory(data)}</section>
      <div class="next"><h2>Decisions for the first milestone</h2><ul>
        <li>Confirm acceptance criteria and clinical, methodology and finance owners.</li>
        <li>Obtain the MarketView observation period, Patients definition, suppression rule and rank universe.</li>
        <li>Verify detailed-claims availability, payer/setting coverage, patient linkage, claim adjustments and payment completeness.</li>
        <li>Approve the ovarian code-year phenotype and distinguish observed payment from modeled revenue or margin.</li>
        <li>Identify member inputs for non-billed coordination, staffing, education and local finance; version the model and its assumptions.</li>
      </ul></div></div>`;
  }

  function openFacility(data, poid) {
    const f = data.facilities.find((x) => x.poid === poid);
    if (!f) return;
    const key = cohortKey();
    const people = data.affiliations
      .filter((a) => a.poid === poid)
      .map((a) => ({ a, p: data.practitioners.find((x) => x.piid === a.piid) }))
      .filter((x) => x.p);
    $("#drawer").innerHTML = `
      <button class="ghost btn" type="button" id="close-drawer">Close</button>
      <h2>${esc(f.name)}</h2>
      <p class="muted">${esc(f.system)} · ${esc(titleCase(f.city))}, ${esc(f.state)} · NPI ${esc(f.npi)}</p>
      <p>Patients (${state.cohort}): <strong>${fmtCount(f[key])}</strong> · Decile ${f[key].rank ?? "—"} (universe unconfirmed)</p>
      <p>Exported roster ${f.practitioner_count} · primary gyn-onc ${f.gynonc_primary_count} · any-field gyn-onc ${f.gynonc_any_count}. Labels do not establish current service capacity.</p>
      <p class="muted">All exported associations are shown, including blank cohort cells. Only a nonblank link-specific patient cell indicates export presence; copied ranks do not establish an operation. Workload denominator is unknown.</p>
      <table>
        <thead><tr><th>Practitioner</th><th>Specialty</th><th>Workload</th><th>Patients</th></tr></thead>
        <tbody>
          ${people
            .map(
              ({ a, p }) => `<tr>
              <td>${esc(p.display_name)} ${p.gynonc_any ? '<span class="tag ok">gyn-onc</span>' : ""}</td>
              <td>${esc(p.specialty_1 || "")}</td>
              <td>${esc(a[key].workload || "—")}</td>
              <td>${fmtCount(a[key])}${a.rh_facility_rank_without_link && key === "radical_hysterectomy" ? ' <span class="tag warn">rank only</span>' : ""}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>`;
    showDrawer();
    $("#close-drawer").onclick = hideDrawer;
  }

  function openPractitioner(data, piid) {
    const p = data.practitioners.find((x) => x.piid === piid);
    if (!p) return;
    const key = cohortKey();
    const sites = data.affiliations
      .filter((a) => a.piid === piid)
      .map((a) => ({ a, f: data.facilities.find((x) => x.poid === a.poid) }))
      .filter((x) => x.f);
    $("#drawer").innerHTML = `
      <button class="ghost btn" type="button" id="close-drawer">Close</button>
      <h2>${esc(p.display_name)}</h2>
      <p class="muted">${esc(p.specialty_1 || "")}${p.specialty_2 ? " / " + esc(p.specialty_2) : ""} · NPI ${esc(p.npi)}</p>
      <p>Gyn-onc label: <span class="tag">${esc(p.gynonc_label)}</span> · Patients: <strong>${fmtCount(p[key])}</strong></p>
      <p class="muted">All exported sites are shown, including blank cohort cells and sites outside the current system filter. Workload denominator and observation period are unknown; these are associations, not referrals.</p>
      <table>
        <thead><tr><th>Facility</th><th>System</th><th>Workload</th><th>Patients</th></tr></thead>
        <tbody>
          ${sites
            .map(
              ({ a, f }) => `<tr>
              <td>${esc(shortName(f.name))}</td>
              <td>${esc(f.system)}</td>
              <td>${esc(a[key].workload || "—")}</td>
              <td>${fmtCount(a[key])}${a.rh_facility_rank_without_link && key === "radical_hysterectomy" ? ' <span class="tag warn">rank only</span>' : ""}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>`;
    showDrawer();
    $("#close-drawer").onclick = hideDrawer;
  }

  function showDrawer() {
    $("#drawer-back").classList.add("show");
    $("#drawer").classList.add("show");
  }
  function hideDrawer() {
    $("#drawer-back").classList.remove("show");
    $("#drawer").classList.remove("show");
  }

  function render() {
    const data = state.data;
    hideDrawer();
    if (state.map) { state.map.remove(); state.map = null; }
    Object.keys(state.charts).forEach(destroyChart);
    const explore = ["overview", "facilities", "practitioners"].includes(state.view);
    $(".filters").classList.toggle("hidden", !explore);
    $("#gynonc").parentElement.classList.toggle("hidden", state.view !== "practitioners" && state.view !== "overview");
    $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.view === state.view));
    const vm = VIEW_META[state.view];
    if (vm) {
      const tt = $("#view-title");
      if (tt) tt.textContent = vm[0];
      const ts = $("#view-sub");
      if (ts) ts.textContent = vm[1];
    }
    const overview = $("#overview-panels");
    const table = $("#table-wrap");
    if (state.view === "overview") {
      overview.classList.remove("hidden");
      table.classList.add("hidden");
      renderOverview(data);
      $("#overview-note").textContent = "Hospital map/counts use the health-system filter and retain blank cohort cells. Specialty filter applies to cohort-present practitioners only; hospital totals cannot be allocated to a specialty. Only nonblank link counts establish presence within a selected system. System labels and coordinates are app enrichments; missing specialty labels do not mean absent services.";
    } else {
      overview.classList.add("hidden");
      table.classList.remove("hidden");
      if (state.view === "summary") renderSummary(data);
      if (state.view === "opportunity") renderOpportunity(data);
      if (state.view === "access") renderAccess(data);
      if (state.view === "facilities") renderFacilities(data);
      if (state.view === "practitioners") renderPractitioners(data);
      if (state.view === "trust") renderTrust(data);
      if (state.view === "phenotype") renderPhenotype(data);
    }
  }

  async function init() {
    const [kpis, meta, facilities, practitioners, affiliations, codes, alerts, summary, mn_counties, facility_cms, nppes_mn, external] = await Promise.all([
      loadFile("kpis"),
      loadFile("meta"),
      loadFile("facilities"),
      loadFile("practitioners"),
      loadFile("affiliations"),
      loadFile("codes"),
      loadFile("alerts"),
      loadFile("summary"),
      loadFile("mn_counties"),
      loadFile("facility_cms"),
      loadFile("nppes_mn"),
      loadFile("external"),
    ]);
    state.data = { kpis, meta, facilities, practitioners, affiliations, codes, alerts, summary, mn_counties, facility_cms, nppes_mn, external };
    $("#banner").textContent = meta.banner;
    $$(".tab").forEach((t) => {
      t.onclick = () => {
        state.view = t.dataset.view;
        render();
      };
    });
    const root = document.documentElement;
    const syncThemeLabel = () => {
      const btn = $("#theme-toggle");
      const lbl = btn && btn.querySelector(".lbl");
      if (lbl) lbl.textContent = root.getAttribute("data-theme") === "dark" ? "Light" : "Dark";
    };
    syncThemeLabel();
    const tt = $("#theme-toggle");
    if (tt) {
      tt.onclick = () => {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("sgo-theme", next); } catch (e) {}
        syncThemeLabel();
        render();
      };
    }
    $("#cohort").onchange = (e) => {
      state.cohort = e.target.value;
      render();
    };
    $("#system").onchange = (e) => {
      state.system = e.target.value;
      render();
    };
    $("#gynonc").onchange = (e) => {
      state.gynonc = e.target.value;
      render();
    };
    $("#drawer-back").onclick = hideDrawer;
    render();
  }

  init().catch((err) => {
    const el = $("#banner");
    if (el) el.textContent = "Could not load dashboard data. Check that you are still signed in.";
    console.error(err);
  });
})();
