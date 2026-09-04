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
