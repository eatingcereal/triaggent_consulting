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
            return fac && fac.system === state.system;
          })
          .map((a) => a.piid)
      );
      rows = rows.filter((p) => ids.has(p.piid));
    }
    return rows;
  }

  function destroyChart(id) {
    if (state.charts[id]) {
      state.charts[id].destroy();
      delete state.charts[id];
    }
  }

  function stackedBar(id, labels, datasets) {
    destroyChart(id);
    const ctx = document.getElementById(id);
    if (!ctx) return;
    state.charts[id] = new Chart(ctx, {
      type: "bar",
      data: { labels, datasets },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom" } },
        scales: {
          x: { stacked: true, grid: { color: "#eee" }, ticks: { precision: 0 } },
          y: { stacked: true, grid: { display: false }, ticks: { font: { size: 11 } } },
        },
      },
    });
  }

  function barChart(id, labels, values, color) {
    destroyChart(id);
    const ctx = document.getElementById(id);
    if (!ctx) return;
    state.charts[id] = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [{ data: values, backgroundColor: color || "#4f46e5", borderRadius: 6, maxBarThickness: 28 }],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: "#eee" }, ticks: { precision: 0 } },
          y: { grid: { display: false }, ticks: { font: { size: 11 } } },
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
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 18,
    }).addTo(map);
    const key = cohortKey();
    const nums = facilities.map((f) => volume(f[key])).filter((n) => n > 0);
    const max = Math.max(1, ...nums);
    facilities.forEach((f) => {
      if (f.lat == null || f.lon == null) return;
      const v = volume(f[key]);
      const suppressed = f[key].suppressed;
      const r = v > 0 ? 8 + (Math.sqrt(v / max) * 22) : 8;
      const marker = L.circleMarker([f.lat, f.lon], {
        radius: r,
        color: suppressed ? "#b45309" : "#4f46e5",
        fillColor: suppressed ? "#fde68a" : "#4f46e5",
        fillOpacity: suppressed ? 0.35 : 0.55,
        weight: 2,
      }).addTo(map);
      marker.bindPopup(
        `<strong>${esc(f.name)}</strong><br>${esc(f.system)} · ${esc(f.city)}<br>` +
          `Patients: ${fmtCount(f[key])}` +
          (f[key].rank != null ? `<br>National decile: ${f[key].rank}` : "")
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
    const mayo = fac.find((f) => f.name && f.name.includes("MAYO"));
    const gynPri = prac.filter((p) => p.gynonc_primary).length;
    const starHosp = fac.filter((f) => f[key].suppressed).length;

    $("#kpi-row").innerHTML = [
      kpi("Hospitals", fac.length, "Acute-care MN extract"),
      kpi("Practitioners", prac.length, `${gynPri} primary gyn-onc · ${data.kpis.physicians || "—"} physicians`),
      kpi("Visible facility cells", sum || "—", `${starHosp} hospitals *; not unique patients`),
      kpi(
        "Mayo of visible cells",
        mayo && sum ? Math.round((mayo[key].value / sum) * 100) + "%" : "—",
        mayo && mayo[key].rank != null ? `Decile ${mayo[key].rank} (universe unconfirmed)` : "Not in current filter"
      ),
      kpi("Data-trust alerts", data.alerts.length, `${data.kpis.critical_alerts} critical`, true),
    ].join("");

    const ranked = [...fac].sort((a, b) => volume(b[key]) - volume(a[key]));
    const withVol = ranked.filter((f) => f[key].value != null);
    barChart(
      "volChart",
      withVol.map((f) => shortName(f.name)),
      withVol.map((f) => f[key].value),
      "#4f46e5"
    );

    const spec = {};
    prac.forEach((p) => {
      const s = p.specialty_1 || "Unknown";
      spec[s] = (spec[s] || 0) + 1;
    });
    const specRows = Object.entries(spec).sort((a, b) => b[1] - a[1]).slice(0, 8);
    barChart("specChart", specRows.map((r) => r[0]), specRows.map((r) => r[1]), "#6366f1");

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
      return volume(f[key]);
    };
    rows = sortRows(rows, keyFn);
    $("#table-wrap").innerHTML = `
      <div class="card">
        <h2>Facilities (${rows.length})</h2>
        <table>
          <thead><tr>
            <th data-k="name">Hospital</th>
            <th data-k="system">System</th>
            <th>City</th>
            <th data-k="rank">Decile*</th>
            <th data-k="volume">Patients</th>
            <th>Roster</th>
            <th data-k="gyn">Primary gyn-onc</th>
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
                <td>${f.volume_without_any_gynonc ? '<span class="tag bad">No gyn-onc</span>' : f.volume_without_primary_gynonc ? '<span class="tag warn">No primary gyn-onc</span>' : ""}
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
        state.sort.key = k;
        state.sort.dir = state.sort.dir === -1 && state.sort.key === k ? 1 : -1;
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
          (p.specialty_1 || "").toLowerCase().includes(q) ||
          (p.npi || "").includes(q)
      );
    }
    const funnel = {
      primary: data.practitioners.filter((p) => p.gynonc_primary).length,
      any: data.practitioners.filter((p) => p.gynonc_any).length,
      neither: data.practitioners.filter((p) => !p.gynonc_any).length,
    };
    rows = sortRows(rows, (p) => (state.sort.key === "name" ? p.display_name : volume(p[key])));
    $("#table-wrap").innerHTML = `
      <div class="card">
        <h2>Practitioners (${rows.length})</h2>
        <p class="muted" style="margin:0 0 10px">Gyn-onc funnel: ${funnel.primary} primary · ${data.kpis.gynonc_secondary_only || 0} secondary-only · ${funnel.neither} neither. Affiliation tab omits secondary specialty — join the practitioner master.</p>
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
                <td><span class="tag ${p.gynonc_primary ? "ok" : p.gynonc_any ? "" : "muted"}">${esc(p.gynonc_label)}</span>${p.nppes_gynonc ? ' <span class="tag ok">NPPES 207VX0201X</span>' : p.gynonc_primary ? ' <span class="tag warn">not in NPPES</span>' : ""}</td>
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
    search.oninput = debounce(() => renderPractitioners(data), 150);
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

  function renderSummary(data) {
    const s = data.summary;
    const k = data.kpis;
    const spec = s.specialty || [];
    $("#table-wrap").innerHTML = `
      <p class="lede">${esc(s.headline)}</p>
      <div class="verdict">${esc(s.verdict)}</div>
      <div class="kpis">
        ${kpi("Visible facility cells", k.ovarian_unsuppressed_patients, "Ovarian · not unique patients")}
        ${kpi("Gyn-onc any specialty", k.gynonc_any, `${k.gynonc_primary} primary · ${k.gynonc_secondary_only} secondary-only`)}
        ${kpi("Confirmed RH links", k.confirmed_rh_links, `${k.rh_rank_without_link} ranks with blank link counts`)}
        ${kpi("Multi-site people", k.multi_facility_practitioners, "2–3 facilities; association not referral")}
        ${kpi("Alerts", k.open_alerts, `${k.critical_alerts} critical`, true)}
      </div>
      <div class="findings">
        ${s.findings
          .map(
            (f) => `<article class="finding ${esc(f.tone)}"><h3>${esc(f.title)}</h3><p>${esc(f.body)}</p></article>`
          )
          .join("")}
      </div>
      <div class="claim-grid">
        <div class="card">
          <h2>What this extract can support</h2>
          <ul>${s.can_do.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
        <div class="card">
          <h2>What it cannot support</h2>
          <ul>${s.cannot_do.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="card" style="margin-top:12px">
        <h2>Ovarian patient cells by primary specialty — numeric vs * vs blank</h2>
        <p class="muted" style="margin:0 0 8px">Do not add these numeric sums across specialties as unique patients. OB/GYN holds most of the visible numeric cells.</p>
        <div class="chart-box" style="height:${Math.max(220, spec.length * 28)}px"><canvas id="specStack"></canvas></div>
      </div>
      <div class="next">
        <h2>Recommended next step</h2>
        <p>${esc(s.next_step)}</p>
        <ul>${s.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
      </div>`;
    stackedBar(
      "specStack",
      spec.map((r) => r.specialty),
      [
        { label: "Numeric", data: spec.map((r) => r.numeric), backgroundColor: "#4f46e5" },
        { label: "* suppressed", data: spec.map((r) => r.suppressed), backgroundColor: "#fbbf24" },
        { label: "Blank", data: spec.map((r) => r.blank), backgroundColor: "#d6d3d1" },
      ]
    );
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
        ${kpi("US ovary AAIR", nat.ovary_aair, `${nat.ovary_annual_cases.toLocaleString()} cases/year · 2018–2022`)}
        ${kpi("US cervix / uterus", `${nat.cervix_aair} / ${nat.uterus_aair}`, `${nat.cervix_annual_cases.toLocaleString()} / ${nat.uterus_annual_cases.toLocaleString()} cases`)}
        ${kpi("MN NPPES GynOnc", mn.nppes_gynonc_npi1, `${mn.rural_counties} of ${mn.counties} counties non-metro`)}
        ${kpi("Sample ∩ NPPES", join.practitioners_nppes_gynonc + "/77", `${join.marketview_primary_gynonc_missing_nppes}/9 primary labels missing`)}
        ${kpi("CMS ZIP matches", join.facilities_matched_cms_zip + "/12", "Name strings differ; ZIP joins")}
      </div>
      <div class="grid-2">
        <div class="card">
          <h2>Minnesota counties — ovarian AAIR (centroids)</h2>
          <p class="muted">Gray = suppressed/missing rate. Indigo markers = sample hospitals. Rural mean AAIR ${mn.rural_ovary_aair} vs metro ${mn.metro_ovary_aair}. County rates are not the sample's surgical volume.</p>
          <div id="access-map" style="height:380px;border-radius:12px;background:#edf0ea"></div>
        </div>
        <div class="card">
          <h2>NPPES unique GynOnc (NPI-1) by state</h2>
          <div class="chart-box"><canvas id="nppesChart"></canvas></div>
        </div>
      </div>
      <div class="card" style="margin-top:12px">
        <h2>Sample hospitals joined to CMS + Medicare GynOnc office price</h2>
        <table>
          <thead><tr><th>Hospital</th><th>CCN</th><th>County</th><th>Type / ownership</th><th>New-visit $</th><th>Nearest NPPES km</th></tr></thead>
          <tbody>
            ${cms
              .map(
                (f) => `<tr>
                <td><strong>${esc(shortName(f.name))}</strong><div class="muted">${esc(f.cms_name || "")}</div></td>
                <td>${esc(f.cms_ccn || "—")}</td>
                <td>${esc(f.county || "—")}</td>
                <td>${esc(f.cms_type || "")}<div class="muted">${esc(f.cms_ownership || "")}</div></td>
                <td>${f.medicare_new_visit != null ? "$" + f.medicare_new_visit : "—"}</td>
                <td>${f.nearest_nppes_gynonc_km != null ? f.nearest_nppes_gynonc_km : "—"}</td>
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
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 18,
      }).addTo(map);
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
      "#4f46e5"
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
          <p>Those buckets need Patient Journey Intelligence (or a health-system cost feed), not MarketView scorecards.</p>
        </div>
      </div>
      <div class="card" style="margin-top:12px">
        <h2>Draft phenotype library (${rows.length})</h2>
        <p class="muted">${cb.rows || 41} rows · ${cb.unique_codes || 39} distinct codes · ${cb.header_columns || 10} headers / ${cb.actual_columns || 11} populated columns · wildcards ${((cb.wildcards || []).join(", ")) || "C77.x …"}</p>
        <input id="code-search" class="search" placeholder="Search codes, cohorts, issues" value="${esc(q)}">
        <table>
          <thead><tr><th>Cohort</th><th>Type</th><th>Code</th><th>Description</th><th>Status</th></tr></thead>
          <tbody>
            ${rows
              .map(
                (c) => `<tr>
                <td>${esc(c.cohort)}</td>
                <td>${esc(c.code_type)}</td>
                <td><strong>${esc(c.code)}</strong></td>
                <td>${esc(c.description || "")}${c.issues.length ? `<div class="muted">${c.issues.map(esc).join(", ")}</div>` : ""}</td>
                <td><span class="tag ${c.status === "usable" ? "ok" : "warn"}">${esc(c.status)}</span></td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>`;
    $("#code-search").oninput = debounce(() => renderPhenotype(data), 150);
  }

  function renderOpportunity(data) {
    const k = data.kpis || {};
    const m = data.meta || {};
    const primary = k.gynonc_primary != null ? k.gynonc_primary : "9";
    const any = k.gynonc_any != null ? k.gynonc_any : "28";
    const notInExtract = (m.not_in_extract || [
      "Patient / claim identifiers and service dates",
      "Procedure / diagnosis / revenue codes",
      "Charge, allowed, paid, or patient-responsibility amounts",
      "Patient residence, stage, outcomes",
      "Operating-vs-referring physician role; health-system ID; lat/lon",
    ]);

    // 1 — Ideas, sequenced by evidence level
    const phases = [
      {
        letter: "A",
        title: "v0 feasibility demo",
        evi: "Buildable now",
        tone: "ok",
        body:
          "One clinically reviewed ovarian-debulking phenotype; a provider/facility atlas that respects both specialty fields, masking, and the association network; a hardened draft code library; and a documented data-gaps and methodology-questions list. Proves what the data can support before any dollars.",
      },
      {
        letter: "B",
        title: "Access & opportunity map (BEI-style)",
        evi: "Buildable now · public data",
        tone: "ok",
        body:
          "Validated gyn-onc locations (NPPES + SGO) against female-population and cancer burden (ACS, State Cancer Profiles), travel time (OpenStreetMap routing), and rurality / social barriers (RUCA, SVI). Shows modeled potential geographic access — not observed patient travel, referral flow, or leakage.",
      },
      {
        letter: "C",
        title: "Licensed longitudinal economic model",
        evi: "Needs licensed claims",
        tone: "warn",
        body:
          "With PJI / detailed claims: index-anchored episodes (candidate 180-day look-back, 90/180/365-day follow-up), each service classified into institutional buckets, tiered attribution, and observed primary-payer allowed/paid amounts translated per bucket under explicit anti-double-count rules. Contribution margin only with agreed revenue and variable-cost inputs.",
      },
      {
        letter: "D",
        title: "SGO member value tool (Step 3)",
        evi: "After A–C",
        tone: "muted",
        body:
          "Apply the model to MarketView provider/facility volumes with member-entered local inputs (payer mix, rates, own volumes), keeping source-derived, national-benchmark, user-entered, and calculated values distinct, with a stored model version and an output-to-input reconciliation.",
      },
    ];

    // 2a — Geographic / access module (public, buildable now)
    const geoSources = [
      ["CMS NPPES + NUCC taxonomy", "Provider/site identity; gyn-onc 207VX0201X", "Free · monthly", "NPI ≠ active surgical service; don't duplicate volume across a provider's sites"],
      ["Census ACS 5-year (2020–2024)", "Female age denominators, poverty, insurance, vehicle access", "Free · API key", "Period estimates, not cancer patients; small-area uncertainty"],
      ["Census TIGER/Line", "County / tract / ZCTA geometry for the map", "Free · annual", "ZCTA ≠ postal ZIP; match vintage to ACS"],
      ["NCI/CDC State Cancer Profiles · USCS · SEER", "Ovarian/cervical/uterine incidence by county", "Free (SEER*Stat gated)", "Suppressed counts ≠ zero; not a surgical-case file"],
      ["USDA ERS RUCA / RUCC", "Rurality of provider and population areas", "Free", "Describes commuting, not cancer-service shortage"],
      ["CDC/ATSDR SVI (2022)", "Social-barrier overlay where travel is long", "Free", "Not a validated oncology-access score; avoid double-counting poverty"],
      ["HRSA Area Health Resources File", "County workforce / facility context", "Free · annual", "Broad OB/GYN supply ≠ gyn-onc availability"],
      ["OSM + openrouteservice", "30/60-min drive-time & catchment scenarios", "Open / self-host", "Modeled access, not observed trips; hosted isochrones capped ~1 hr"],
      ["CMS Care Compare + Cost Reports", "Hospital identity/type; coarse cost context", "Free", "Whole-hospital cost ≠ a specialty's contribution margin"],
      ["SGO program & physician rosters", "Validate qualifying gyn-onc service sites", "Partner-provided", "Public directory is a snapshot, not a census"],
    ];

    // 2b — Economic / reimbursement layer (rate files + licensed claims)
    const econSources = [
      ["CMS PFS RVU files", "Price list — professional + technical; the −26/−TC split is the anti-double-count guardrail", "Free"],
      ["CMS OPPS Addendum A/B (APC)", "Hospital-outpatient facility rates — imaging technical, infusion admin, outpatient surgery", "Free"],
      ["CMS IPPS MS-DRG weights", "Inpatient facility payment for debulking / radical-hyst stays", "Free"],
      ["CMS Part B ASP file (ASP+6%)", "Chemo / immunotherapy drug amounts (generics ≈ $0 margin; value in admin + biologics)", "Free"],
      ["CMS CLFS", "Labs, tumor markers (CA-125), molecular/genomic", "Free"],
      ["CMS Physician & Inpatient PUFs", "Real Medicare allowed/paid + volumes per NPI/HCPCS/DRG (no DUA)", "Free"],
      ["HCUP + cost-to-charge ratios", "All-payer volumes; charges → cost bridge for margin", "Low cost"],
      ["Medicare Cost Reports (HCRIS)", "Department cost-to-charge ratios (OR, imaging, lab, pharmacy, ICU, radonc)", "Free"],
      ["FAIR Health / MarketScan / Optum", "Commercial allowed amounts & Medicare-to-commercial multipliers (younger cervical cohort)", "Licensed"],
      ["SEER-Medicare linked", "Registry-validated stage + Medicare journey with real dollars", "Application / fee"],
      ["LexisNexis MarketView PJI", "The in-house engine: TOKEN-linked journeys + allowed amounts (see caveats →)", "BData-licensed"],
    ];

    const methodAnchors = [
      ["CMS OCM / EOM episode spec", "Defensible public template for an oncology episode — adapt the trigger to an index gyn-onc surgery (ovarian/cervical are outside EOM's 7 cancers)."],
      ["Merritt Hawkins / AMN survey", "Canonical 'a physician is worth more than their fee' benchmark (~3.3× professional fees) — gyn onc is not broken out, so a claims-based version is the differentiated build."],
      ["Downstream-revenue studies", "Published attribution recipes (e.g., ASCO 2024 genetics ≈ $4.76M/yr per counselor; AMC downstream ≈ 6× direct) — index event → window → categorized services vs a control."],
      ["Keepage / leakage method", "Retained value = downstream revenue kept in-network (1 − leakage); needs where patients actually received care + intended referrals."],
    ];

    const canDo = [
      "Provider/facility atlas: locations, association network, cohort-presence and both-specialty filters, masking-aware volume/rank",
      "Workforce distribution: distinct validated gyn-onc providers by facility/area (do not sum people across sites)",
      "Population-access context: geocoded facilities vs census burden and travel — modeled potential access",
      "Facility & provider profiles with explicit data-confidence flags",
    ];
    const cannotDo = [
      "Patient journeys, referral flow, leakage, or retained value — an edge is an association, not a referral",
      "Any payment, revenue, or contribution margin — no dollars, dates, or codes are in this sample",
      "Unique patient totals — visible cells are not additive across providers/facilities and * has no stated threshold",
      "Market share, statewide completeness, or trend — no sampling frame, observation window, or 'G1' definition",
    ];

    const phaseCards = phases
      .map(
        (p) =>
          `<article class="finding ${p.tone}">
             <h3><span class="tag ${p.tone === "muted" ? "muted" : p.tone}">${p.letter}</span> ${esc(p.title)}
               <span class="tag ${p.tone === "ok" ? "ok" : p.tone === "warn" ? "warn" : "muted"}" style="float:right">${esc(p.evi)}</span></h3>
             <p>${esc(p.body)}</p>
           </article>`
      )
      .join("");

    const geoRows = geoSources
      .map(
        (r) =>
          `<tr><td><strong>${esc(r[0])}</strong><div class="muted">${esc(r[3])}</div></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`
      )
      .join("");

    const econRows = econSources
      .map(
        (r) => `<tr><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`
      )
      .join("");

    const methodRows = methodAnchors
      .map((r) => `<li><strong>${esc(r[0])}</strong> — ${esc(r[1])}</li>`)
      .join("");

    $("#table-wrap").innerHTML = `
      <div class="opp">
      <p class="lede">One-pager: what we can build for SGO, the external data that feeds it, and exactly what today's MarketView sample does and does not support.</p>
      <div class="verdict"><strong>Read this as three evidence levels.</strong> The sample supports a provider/facility atlas and an access map; the licensed economic model needs detailed claims. Nothing here derives revenue from the current sample, and payment figures below are external rate references, not measured hospital revenue.</div>

      <div class="card">
        <h2>1 · What we can build</h2>
        <p class="muted" style="margin:0 0 10px">Sequenced by evidence level — start where the data already supports a defensible result.</p>
        <div class="findings">${phaseCards}</div>
      </div>

      <div class="card" style="margin-top:12px">
        <h2>2 · External data we can bring in</h2>
        <p class="muted" style="margin:0 0 8px"><strong>2a · Geographic / access module — public, buildable now.</strong> "Free" describes access, not staff time; freeze each release's dictionary before use.</p>
        <table>
          <thead><tr><th>Source</th><th>Role</th><th>Access</th></tr></thead>
          <tbody>${geoRows}</tbody>
        </table>
        <p class="muted" style="margin:14px 0 8px"><strong>2b · Economic / reimbursement layer — to translate utilization into dollars in the licensed model.</strong> One rate file per institutional bucket; the −26/−TC split keeps other specialties' professional fees out.</p>
        <table>
          <thead><tr><th>Source</th><th>Role</th><th>Access</th></tr></thead>
          <tbody>${econRows}</tbody>
        </table>
        <div class="methods" style="margin-top:12px">
          <h2 style="font-size:13px">Methodology anchors (published, defensible)</h2>
          <ul>${methodRows}</ul>
        </div>
      </div>

      <div class="card" style="margin-top:12px">
        <h2>3 · The data landscape</h2>
        <div class="claim-grid">
          <div>
            <h2 style="font-size:13px">This MarketView sample supports</h2>
            <ul>${canDo.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
          <div>
            <h2 style="font-size:13px">It cannot support</h2>
            <ul>${cannotDo.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>
        </div>
        <p class="muted" style="margin:12px 0 8px">Headline finding: <strong>${esc(String(primary))} primary vs ${esc(String(any))} any-field gyn-onc</strong> — and the practitioner–facility tab carries primary specialty only, so join the master before filtering.</p>
        <div class="findings">
          <article class="finding"><h3><span class="tag">Layer 1</span> MarketView rollup — <em>who &amp; where</em> (this sample)</h3><p>Provider- and facility-grain scorecards: decile ranks, masked patient cells, and workload buckets for two cohorts. Broad coverage, no depth.</p></article>
          <article class="finding warn"><h3><span class="tag warn">Layer 2</span> Patient Journey Intelligence — <em>why &amp; how much</em> (licensed)</h3><p>Per-patient claims with allowed amounts. Caveats from the spec: it is a <strong>specification</strong>, not a delivered extract; most fields are optional; there is <strong>no referring/ordering NPI</strong> (so ordered-service attribution is not automatic); and CHARGE/PAID/ALLOWED are claim-level totals repeated on each line — never summed or added together.</p></article>
          <article class="finding ok"><h3><span class="tag ok">Layer 3</span> Public rate, geo &amp; cost files — <em>translate &amp; contextualize</em></h3><p>CMS rate files, census/geography, cancer burden, and cost-to-charge ratios turn utilization into benchmarked dollars and put the map in context — all free.</p></article>
        </div>
        <p class="muted" style="margin:12px 0 0"><strong>Not in this sample:</strong> ${notInExtract.map((x) => esc(x)).join(" · ")}. Those need PJI/detailed claims or a health-system cost feed — not more rows of the same scorecard. Restricted source files stay out of this repository.</p>
      </div>

      <div class="next">
        <h2>Decisions that size the first sprint</h2>
        <ul>
          <li>Is the primary deliverable the access/opportunity map, the advocacy economic model, or a combined product with separate evidence levels?</li>
          <li>Confirm PJI/MarketView as the Step-1 engine: coverage, payer mix, geography, patient/episode linkage, provider roles, and allowed/paid fields.</li>
          <li>What does the MarketView <em>Patients</em> cell count, what is the <em>*</em> suppression rule, and how are the deciles defined?</li>
          <li>Does "economic value" mean professional work, payer spending, hospital revenue, or contribution margin? Each needs different data.</li>
          <li>Can SGO validate the qualifying gyn-onc service sites and provide the journey-mapping / incidence work it has offered?</li>
        </ul>
      </div>
      </div>`;
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
      <p>Roster ${f.practitioner_count} · primary gyn-onc ${f.gynonc_primary_count}
        ${f.volume_without_primary_gynonc ? '<span class="tag warn">volume without primary gyn-onc</span>' : ""}</p>
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
    $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.view === state.view));
    const overview = $("#overview-panels");
    const table = $("#table-wrap");
    if (state.view === "overview") {
      overview.classList.remove("hidden");
      table.classList.add("hidden");
      renderOverview(data);
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
