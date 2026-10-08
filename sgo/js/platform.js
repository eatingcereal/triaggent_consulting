(function () {
"use strict";
const DATA = JSON.parse(document.getElementById("platform-data").textContent);
const TOPO = JSON.parse(document.getElementById("topo-data").textContent);
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const sum = (a) => a.reduce((x, y) => x + (y || 0), 0);
const median = (a) => { const s = a.filter((v) => v != null).sort((x, y) => x - y); if (!s.length) return null; const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const F = {
  usd: (v) => v == null ? "–" : (Math.abs(v) >= 1e6 ? "$" + (v / 1e6).toFixed(1) + "M" : Math.abs(v) >= 1e4 ? "$" + (v / 1e3).toFixed(0) + "k" : "$" + Math.round(v).toLocaleString("en-US")),
  usd0: (v) => v == null ? "–" : "$" + Math.round(v).toLocaleString("en-US"),
  n: (v) => v == null ? "–" : Math.round(v).toLocaleString("en-US"),
  p: (v, d) => v == null ? "–" : (v * 100).toFixed(d == null ? 1 : d) + "%",
  mi: (v) => v == null ? "–" : Math.round(v) + " mi",
  x: (v) => v == null ? "–" : v.toFixed(1) + "×",
};
const STATE_NAMES = {AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District of Columbia",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};

// ------------------------------------------------------------ storage (per-viewer conveniences only)
const store = {
  get(k, d) { try { const v = localStorage.getItem("bwrvu:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("bwrvu:" + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
};

// ------------------------------------------------------------ state
const VIEWS = [
  { id: "overview", grp: "Platform", label: "Overview", tag: "", icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>' },
  { id: "access", grp: "Need & access", label: "Access & equity", tag: "public", icon: '<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>' },
  { id: "supply", grp: "Need & access", label: "Supply & demand", tag: "public", icon: '<path d="M12 4v16"/><path d="M5 8h14"/><path d="M5 8l-3 6h6z"/><path d="M19 8l-3 6h6z"/>' },
  { id: "value", grp: "Economics", label: "Value model", tag: "scenario", icon: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>' },
  { id: "providers", grp: "Economics", label: "Provider footprint", tag: "public", icon: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.4 3-5.4 6-5.4s5.4 2 6 5.4"/><path d="M16 4.5a3 3 0 0 1 0 6"/><path d="M18 14.8c1.7.6 2.8 2.4 3 5.2"/>' },
  { id: "research", grp: "Institutional value", label: "Research & quality", tag: "public", icon: '<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><path d="M7.5 15h9"/>' },
  { id: "atlas", grp: "Licensed layer", label: "Program atlas", tag: "local", icon: '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/><path d="M12 8v4"/><path d="M10 10h4"/>' },
  { id: "methods", grp: "Governance", label: "Data & methods", tag: "", icon: '<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13"/><path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>' },
];
const SCEN_DEFAULTS = {
  cases: 60, mc: 45, com: 40, mcd: 10, oth: 5,
  comHosp: 2.54, comProf: 1.4, mcdMult: 0.72,
  pMcc: 23.6, pCc: 64.6,
  visits: 10, pChemo: 85, cycles: 6, pBev: 25, bevDoses: 15, ctYear: 4, petBase: 30, ca125: 8, pBrca: 85,
  pParp: 35, parpMonths: 9, inSys: 75, pharmShare: 30,
};
const state = {
  view: "overview",
  geo: store.get("geo", "us"),
  site: store.get("site", "all"),
  metric: "mi",
  threshold: 60,
  added: [],
  supplyMetric: "ratio",
  provState: null,
  cohort: "ov",
  lic: null,
  scen: Object.assign({}, SCEN_DEFAULTS, store.get("scen", {})),
  volSource: "user",
  sort: {},
};

// ------------------------------------------------------------ geometry
const proj = d3.geoAlbersUsa().scale(1300).translate([487.5, 305]);
const pathGen = d3.geoPath();
const countyFeatures = topojson.feature(TOPO, TOPO.objects.counties).features;
const stateFeatures = topojson.feature(TOPO, TOPO.objects.states).features;
const stateMesh = topojson.mesh(TOPO, TOPO.objects.states, (a, b) => a !== b);
const nation = topojson.feature(TOPO, TOPO.objects.nation);
const mnFeature = stateFeatures.find((f) => f.id === "27");
const MN_BOUNDS = pathGen.bounds(mnFeature);
const C = new Map(DATA.counties.map((c) => [c.f, c]));
const STATES = new Map(DATA.states.map((s) => [s.s, s]));
const FIPS2ST = new Map(DATA.states.map((s) => [s.f, s.s]));
const R_MI = 3958.8;
function hav(la1, lo1, la2, lo2) {
  const r = Math.PI / 180, dla = (la2 - la1) * r, dlo = (lo2 - lo1) * r;
  const a = Math.sin(dla / 2) ** 2 + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.sin(dlo / 2) ** 2;
  return 2 * R_MI * Math.asin(Math.sqrt(a));
}
const casesOf = (c) => {
  if (!c) return null;
  if (state.site === "all") { const v = [c.ov, c.ut, c.cx].filter((x) => x != null); return v.length ? sum(v) : null; }
  return c[state.site];
};
const rateOf = (c) => state.site === "all" ? null : c[state.site + "r"];
const siteLabel = () => ({ all: "gyn-cancer", ov: "ovarian cancer", ut: "uterine cancer", cx: "cervical cancer" }[state.site]);
const inScope = (c) => state.geo === "mn" ? c.s === "MN" : !["AK", "HI", "PR"].includes(c.s);
function distOf(c, added) {
  let d = c.mi;
  for (const a of (added || state.added)) d = Math.min(d, hav(c.la, c.lo, a.la, a.lo));
  return d;
}
function coverage(threshold, added) {
  const cs = DATA.counties.filter(inScope);
  let tot = 0, within = 0, popBeyond = 0, nBeyond = 0;
  for (const c of cs) {
    const k = casesOf(c) || 0, d = distOf(c, added);
    tot += k;
    if (d <= threshold) within += k; else { popBeyond += c.p || 0; nBeyond++; }
  }
  return { tot, within, share: tot ? within / tot : 0, popBeyond, nBeyond, beyond: tot - within };
}

// ------------------------------------------------------------ tooltip (delegated)
const tt = $("#tt");
function placeTip(x, y) {
  const w = tt.offsetWidth, h = tt.offsetHeight;
  let left = x + 14, top = y + 14;
  if (left + w > window.innerWidth - 8) left = x - w - 14;
  if (top + h > window.innerHeight - 8) top = y - h - 14;
  tt.style.left = Math.max(8, left) + "px"; tt.style.top = Math.max(8, top) + "px";
}
document.addEventListener("mousemove", (e) => {
  const t = e.target.closest && e.target.closest("[data-tip]");
  if (!t) { tt.hidden = true; return; }
  tt.innerHTML = t.getAttribute("data-tip"); tt.hidden = false; placeTip(e.clientX, e.clientY);
});
document.addEventListener("focusin", (e) => {
  const t = e.target.closest && e.target.closest("[data-tip]");
  if (!t) { tt.hidden = true; return; }
  const r = t.getBoundingClientRect();
  tt.innerHTML = t.getAttribute("data-tip"); tt.hidden = false; placeTip(r.left + 10, r.bottom);
});
document.addEventListener("focusout", () => { tt.hidden = true; });
document.addEventListener("scroll", () => { tt.hidden = true; }, true);
const tipAttr = (html) => 'data-tip="' + esc(html) + '"';

// ------------------------------------------------------------ chart helpers
function barsHTML(rows, o) {
  o = o || {};
  const max = o.max || Math.max(1e-9, ...rows.map((r) => r.v || 0));
  return '<div class="bars">' + rows.map((r) => {
    const pct = r.v ? Math.max(0.5, (r.v / max) * 100) : 0;
    const val = r.vtxt != null ? r.vtxt : (o.fmt ? o.fmt(r.v) : r.v);
    return '<div class="bar" tabindex="0" ' + tipAttr("<b>" + esc(r.label) + "</b><br>" + (r.tip || val)) + '><div class="bm"><span class="lb">' + esc(r.label) + (r.code ? "<small>" + esc(r.code) + "</small>" : "") +
      '</span><span class="vl">' + val + '</span></div><div class="tr"><div class="fl" style="width:' + pct.toFixed(2) + "%;background:" + (r.color || o.color || "var(--s1)") + '"></div></div></div>';
  }).join("") + "</div>";
}
function kpi(label, value, detail, extra) {
  return '<div class="kpi"><div class="l">' + label + '</div><div class="v">' + value + "</div>" + (detail ? '<div class="d">' + detail + "</div>" : "") + (extra || "") + "</div>";
}
function chip(kind, txt) { return '<span class="chip ' + kind + '">' + txt + "</span>"; }
function sortable(id, cols, rows, defSort) {
  const s = state.sort[id] || defSort || { k: cols[0].k, d: -1 };
  const sorted = rows.slice().sort((a, b) => {
    const x = a[s.k], y = b[s.k];
    if (x == null && y == null) return 0; if (x == null) return 1; if (y == null) return -1;
    return (typeof x === "string" ? x.localeCompare(y) : x - y) * s.d;
  });
  return '<div class="tbl-wrap" style="max-height:' + (cols.maxH || 420) + 'px"><table data-table="' + id + '"><thead><tr>' + cols.map((c) =>
    '<th class="' + (c.r ? "r" : "") + '" data-sort="' + c.k + '" scope="col" aria-sort="' + (s.k === c.k ? (s.d > 0 ? "ascending" : "descending") : "none") + '">' + c.h + (s.k === c.k ? (s.d > 0 ? " ▲" : " ▼") : "") + "</th>").join("") +
    "</tr></thead><tbody>" + sorted.map((r) => "<tr" + (r._click ? ' class="click" data-click="' + esc(r._click) + '" tabindex="0"' : "") + ">" + cols.map((c) => '<td class="' + (c.r ? "r" : "") + '">' + (c.f ? c.f(r[c.k], r) : esc(r[c.k])) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>";
}
document.addEventListener("click", (e) => {
  const th = e.target.closest("th[data-sort]");
  if (th) {
    const id = th.closest("table").dataset.table, k = th.dataset.sort;
    const cur = state.sort[id];
    state.sort[id] = { k, d: cur && cur.k === k ? -cur.d : -1 };
    render();
  }
});
function lineChart(el, series, o) {
  const W = o.W || 560, H = o.H || 230, m = { t: 12, r: 16, b: 34, l: 44 };
  const x = d3.scaleLinear().domain([0, o.xMax]).range([m.l, W - m.r]);
  const y = d3.scaleLinear().domain([0, 1]).range([H - m.b, m.t]);
  const svg = d3.select(el).append("svg").attr("viewBox", "0 0 " + W + " " + H).attr("role", "img").attr("aria-label", o.label || "line chart");
  svg.append("g").selectAll("line").data(y.ticks(4)).join("line").attr("x1", m.l).attr("x2", W - m.r).attr("y1", (d) => y(d)).attr("y2", (d) => y(d)).attr("stroke", "var(--rule-2)");
  svg.append("g").selectAll("text").data(y.ticks(4)).join("text").attr("x", m.l - 6).attr("y", (d) => y(d) + 4).attr("text-anchor", "end").attr("font-size", 11).attr("fill", "var(--muted)").text((d) => Math.round(d * 100) + "%");
  svg.append("g").selectAll("text").data(x.ticks(6)).join("text").attr("x", (d) => x(d)).attr("y", H - m.b + 16).attr("text-anchor", "middle").attr("font-size", 11).attr("fill", "var(--muted)").text((d) => d);
  svg.append("text").attr("x", W - m.r).attr("y", H - 4).attr("text-anchor", "end").attr("font-size", 11).attr("fill", "var(--muted)").text(o.xLabel || "");
  if (o.marker != null) {
    svg.append("line").attr("x1", x(o.marker)).attr("x2", x(o.marker)).attr("y1", m.t).attr("y2", H - m.b).attr("stroke", "var(--muted)").attr("stroke-dasharray", "3 3");
  }
  const line = d3.line().x((d) => x(d[0])).y((d) => y(d[1]));
  series.forEach((s) => {
    svg.append("path").attr("d", line(s.pts)).attr("fill", "none").attr("stroke", s.color).attr("stroke-width", 2).attr("stroke-linejoin", "round");
    const last = s.pts.find((p) => p[0] === o.marker) || s.pts[s.pts.length - 1];
    svg.append("circle").attr("cx", x(last[0])).attr("cy", y(last[1])).attr("r", 4).attr("fill", s.color).attr("stroke", "var(--panel)").attr("stroke-width", 2);
  });
  const cross = svg.append("line").attr("y1", m.t).attr("y2", H - m.b).attr("stroke", "var(--ink-2)").attr("opacity", 0);
  const dots = series.map((s) => svg.append("circle").attr("r", 4).attr("fill", s.color).attr("stroke", "var(--panel)").attr("stroke-width", 2).attr("opacity", 0));
  svg.append("rect").attr("x", m.l).attr("y", m.t).attr("width", W - m.l - m.r).attr("height", H - m.t - m.b).attr("fill", "transparent")
    .on("mousemove", (ev) => {
      const [px] = d3.pointer(ev);
      const xv = Math.max(0, Math.min(o.xMax, Math.round(x.invert(px) / 5) * 5));
      cross.attr("x1", x(xv)).attr("x2", x(xv)).attr("opacity", 0.5);
      let html = "<b>Within " + xv + " miles</b>";
      series.forEach((s, i) => { const p = s.pts.find((q) => q[0] === xv); if (p) { dots[i].attr("cx", x(xv)).attr("cy", y(p[1])).attr("opacity", 1); html += "<br>" + esc(s.name) + ": " + F.p(p[1]); } });
      tt.innerHTML = html; tt.hidden = false; placeTip(ev.clientX, ev.clientY);
    })
    .on("mouseleave", () => { cross.attr("opacity", 0); dots.forEach((d) => d.attr("opacity", 0)); tt.hidden = true; });
}

// ------------------------------------------------------------ county map
const BINS = {
  mi: { label: "Distance to nearest gyn oncologist (straight line)", t: [25, 50, 75, 100], f: (v) => v + " mi", get: (c) => distOf(c) },
  cases: { label: "Annual cases (avg, 2018–2022)", t: [3, 10, 30, 100], f: (v) => v, get: (c) => casesOf(c) },
  rate: { label: "Age-adjusted incidence per 100k women", t: null, f: (v) => v, get: (c) => rateOf(c) },
  mir: { label: "Crude ovarian mortality-to-incidence ratio", t: [0.5, 0.6, 0.7, 0.85], f: (v) => v, get: (c) => (c.ov && c.ovd != null ? c.ovd / c.ov : null) },
  pov: { label: "People in poverty (%), 2023", t: [10, 14, 18, 24], f: (v) => v + "%", get: (c) => c.pv },
  rural: { label: "Rural-urban continuum (RUCC 2023)", t: [3.5, 5.5, 7.5, 8.5], f: (v) => v, get: (c) => c.ru, cats: ["Metro (1–3)", "Nonmetro urban (4–5)", "Nonmetro (6–7)", "Rural (8)", "Most rural (9)"] },
};
function binDef(metric) {
  const b = BINS[metric];
  if (metric === "rate") {
    const vals = DATA.counties.filter(inScope).map(rateOf).filter((v) => v != null).sort((a, c) => a - c);
    const q = (p) => vals.length ? +d3.quantileSorted(vals, p).toFixed(1) : 0;
    return Object.assign({}, b, { t: [q(0.2), q(0.4), q(0.6), q(0.8)] });
  }
  return b;
}
function binIndex(v, t) { if (v == null || isNaN(v)) return 0; let i = 0; while (i < t.length && v >= t[i]) i++; return i + 1; }
function legendHTML(bd) {
  const t = bd.t;
  const labels = bd.cats || ["under " + bd.f(t[0])].concat(t.slice(0, -1).map((v, i) => bd.f(v) + "–" + bd.f(t[i + 1]))).concat([bd.f(t[t.length - 1]) + "+"]);
  return '<div class="ramp" aria-label="Legend">' + labels.map((l, i) => '<div class="st"><i style="background:var(--seq-' + (i + 1) + ')"></i>' + esc(l) + "</div>").join("") + '<div class="st"><i style="background:var(--seq-0)"></i>no data</div></div>';
}
function countyTip(c) {
  const k = casesOf(c);
  return "<b>" + esc(c.n) + ", " + c.s + "</b><br>" + siteLabel()[0].toUpperCase() + siteLabel().slice(1) + " cases/yr: " + (k == null ? "suppressed" : k) +
    "<br>Nearest gyn onc: " + F.mi(distOf(c)) + (state.added.length && distOf(c) < c.mi - 0.5 ? " (was " + F.mi(c.mi) + ")" : "") +
    "<br>RUCC " + (c.ru || "–") + " · poverty " + (c.pv == null ? "–" : c.pv + "%") +
    (c.ov && c.ovd != null ? "<br>Ovarian MIR (crude): " + (c.ovd / c.ov).toFixed(2) : "");
}
function drawCountyMap(el, o) {
  o = o || {};
  const bd = binDef(o.metric || state.metric);
  const vb = state.geo === "mn" ? [MN_BOUNDS[0][0] - 8, MN_BOUNDS[0][1] - 8, MN_BOUNDS[1][0] - MN_BOUNDS[0][0] + 16, MN_BOUNDS[1][1] - MN_BOUNDS[0][1] + 16] : [0, 0, 975, 610];
  el.innerHTML = "";
  const svg = d3.select(el).append("svg").attr("viewBox", vb.join(" ")).attr("role", "img").attr("aria-label", "County map: " + bd.label);
  const feats = state.geo === "mn" ? countyFeatures.filter((f) => f.id.startsWith("27") || neighborFips.has(f.id.slice(0, 2))) : countyFeatures;
  const g = svg.append("g");
  const paths = g.selectAll("path").data(feats).join("path").attr("class", "county").attr("d", pathGen)
    .attr("fill", (f) => { const c = C.get(f.id); if (!c) return "var(--seq-0)"; if (state.geo === "mn" && c.s !== "MN") return "var(--seq-0)"; return "var(--seq-" + (binIndex(bd.get(c), bd.t)) + ")"; })
    .attr("data-tip", (f) => { const c = C.get(f.id); return c ? countyTip(c) : "No data"; });
  svg.append("path").attr("class", "statel").attr("d", pathGen(stateMesh));
  if (state.geo === "mn") svg.append("path").attr("class", "statel").attr("d", pathGen(mnFeature)).attr("stroke-width", 1.4);
  if (o.sites !== false) {
    const r = state.geo === "mn" ? 1.6 : 1.5;
    svg.append("g").selectAll("circle").data(DATA.sites.map((s) => proj([s.lo, s.la])).filter(Boolean)).join("circle").attr("class", "site").attr("cx", (d) => d[0]).attr("cy", (d) => d[1]).attr("r", r);
  }
  const ag = svg.append("g");
  function drawAdded() {
    ag.selectAll("*").remove();
    state.added.forEach((a) => {
      const p = proj([a.lo, a.la]); if (!p) return;
      const s = state.geo === "mn" ? 3.2 : 4.5;
      ag.append("path").attr("class", "added").attr("d", "M" + p[0] + "," + (p[1] - s) + "L" + (p[0] + s) + "," + p[1] + "L" + p[0] + "," + (p[1] + s) + "L" + (p[0] - s) + "," + p[1] + "Z").attr("data-tip", "<b>Proposed outreach site</b><br>" + esc(a.name));
    });
  }
  drawAdded();
  if (o.onClick) {
    el.classList.add("clickable");
    svg.on("click", (ev) => {
      const [px, py] = d3.pointer(ev, svg.node());
      const ll = proj.invert([px, py]);
      if (!ll) return;
      const near = DATA.counties.reduce((best, c) => { const d = hav(ll[1], ll[0], c.la, c.lo); return d < best.d ? { d, c } : best; }, { d: Infinity, c: null });
      o.onClick({ la: ll[1], lo: ll[0], name: near.c ? "near " + near.c.n + ", " + near.c.s : "custom site" });
    });
  }
  return { paths, bd };
}
const neighborFips = new Set(["38", "46", "19", "55"]);

// ------------------------------------------------------------ navigation
function buildNav() {
  let html = "", grp = null;
  VIEWS.forEach((v) => {
    if (v.grp !== grp) { grp = v.grp; html += '<div class="grp">' + grp + "</div>"; }
    html += '<button type="button" data-view="' + v.id + '"' + (state.view === v.id ? ' aria-current="page"' : "") + '><svg viewBox="0 0 24 24" aria-hidden="true">' + v.icon + '</svg><span class="lbl">' + v.label + "</span>" + (v.tag ? '<span class="tag">' + v.tag + "</span>" : "") + "</button>";
  });
  const extra = window.SGO_LINKS || [];
  if (extra.length) {
    html += '<div class="grp">SGO workspace</div>' + extra.map((l) => l.theme
      ? '<button type="button" data-theme-toggle><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg><span class="lbl">Theme</span></button>'
      : '<a href="' + esc(l.href) + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + l.icon + '</svg><span class="lbl">' + esc(l.label) + "</span></a>").join("");
  }
  $("#nav").innerHTML = html;
}
$("#nav").addEventListener("click", (e) => {
  if (e.target.closest("[data-theme-toggle]")) {
    const root = document.documentElement;
    const dark = root.getAttribute("data-theme") ? root.getAttribute("data-theme") === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("sgo-theme", next); } catch (err) { /* storage unavailable */ }
    return;
  }
  const b = e.target.closest("button[data-view]"); if (b) go(b.dataset.view);
});
function go(id) {
  state.view = id;
  try { history.replaceState(null, "", "#" + id); } catch (e) { location.hash = id; }
  render(); $("#view").focus({ preventScroll: true }); window.scrollTo(0, 0);
}
$("#geo-seg").addEventListener("click", (e) => { const b = e.target.closest("button[data-geo]"); if (!b) return; state.geo = b.dataset.geo; store.set("geo", state.geo); render(); });
$("#site-sel").addEventListener("change", (e) => { state.site = e.target.value; store.set("site", state.site); render(); });
document.addEventListener("click", (e) => { const b = e.target.closest("[data-go]"); if (b) go(b.dataset.go); });

// ------------------------------------------------------------ views
const TITLES = {
  overview: ["Platform overview", "Program value intelligence"],
  access: ["Need & access · public data", "Access & equity"],
  supply: ["Need & access · public data", "Supply & demand"],
  value: ["Economics · scenario model", "Program value model"],
  providers: ["Economics · CMS 2024", "Provider footprint"],
  research: ["Institutional value", "Research & quality"],
  atlas: ["Licensed layer · local only", "Program atlas"],
  methods: ["Governance", "Data & methods"],
};
const views = {};

views.overview = function (el) {
  const geoName = state.geo === "mn" ? "Minnesota" : "United States (lower 48 + DC)";
  const cs = DATA.counties.filter(inScope);
  const cases = sum(cs.map(casesOf));
  const stScope = state.geo === "mn" ? DATA.states.filter((s) => s.s === "MN") : DATA.states.filter((s) => !["AK", "HI"].includes(s.s));
  const gyn = sum(stScope.map((s) => s.gyn));
  const casesForRatio = sum(stScope.filter((s) => s.cases != null).map((s) => state.site === "all" ? s.cases : s[state.site]));
  const gynForRatio = sum(stScope.filter((s) => s.cases != null).map((s) => s.gyn));
  const cov50 = coverage(50, []);
  const provs = DATA.providers.filter((p) => state.geo === "mn" ? p.s === "MN" : true);
  const partB = sum(provs.map((p) => p.pay)), partD = sum(DATA.partd.filter((p) => state.geo === "mn" ? p.s === "MN" : true).map((p) => p.c));
  const partDAll = sum(DATA.partd.map((p) => p.c)), parpAll = sum(DATA.partd.filter((p) => /parib/i.test(p.d)).map((p) => p.c));
  const drg737 = DATA.drg.find((d) => d.drg === "737" && d.geo === "National");
  const surg = DATA.prices["58953_F"].allowed;
  el.innerHTML =
    '<div class="banner"><span class="ic">i</span><div><b>What this platform answers:</b> how much a gynecologic oncology program is worth to its health system beyond the surgeon\'s wRVUs. It combines need and access, provider supply, and economics. Public data powers every module today. The MarketView layer loads locally, and PJI claims will replace benchmarks with measured dollars.</div></div>' +
    '<div class="kpis">' +
      kpi("Annual " + siteLabel() + " cases", F.n(cases), geoName + ", disclosed counties") +
      kpi("Identified gyn oncologists", F.n(gyn), "Medicare 2024 claim specialty + NPPES taxonomy") +
      kpi("Cases per gyn oncologist", gynForRatio ? (casesForRatio / gynForRatio).toFixed(0) : "–", "states with county data") +
      kpi("Cases beyond 50 miles", F.p(1 - cov50.share), "straight-line, county centroid") +
      kpi("Medicare Part B to gyn oncs", F.usd(partB), F.n(provs.length) + " gyn oncs, 2024") +
      kpi("Part D drugs they prescribe", F.usd(partD), "gross cost, all gyn-onc prescribers, 2024") +
    "</div>" +
    '<div class="grid">' +
      '<section class="panel c7"><div class="panel-h"><h2>Key insights</h2><span class="meta">click through to the module</span></div><div class="ins">' +
        insight("", "The hospital earns about " + Math.round(drg737.pay / surg) + "× the surgeon's fee for the same operation", "Medicare 2024: debulking (CPT 58953) averaged " + F.usd0(surg) + " allowed for the surgeon. The ovarian-malignancy surgical stay (DRG 737) averaged " + F.usd0(drg737.pay) + ".", "value", "Open value model") +
        insight("", "Oral cancer drugs gyn oncs prescribe roughly equal all their Medicare professional payments", "Part D gross cost " + F.usd(partDAll) + " vs. Part B payments " + F.usd(sum(DATA.providers.map((p) => p.pay))) + ". PARP inhibitors are " + F.p(parpAll / partDAll, 0) + " of the drug spend.", "providers", "Open provider footprint") +
        insight("opp", "Rural patients live more than twice as far from a gyn oncologist", "Median straight-line distance is 62 miles for rural counties vs. 26 for metro. Crude ovarian mortality-to-incidence ratio is 0.78 rural vs. 0.64 metro (unadjusted).", "access", "Open access & equity") +
        insight("gap", "Public hospital data can't size a program", "Only " + DATA.facts.hosp737_ge11 + " U.S. hospitals report 11+ Medicare FFS discharges in DRG 737. Medicare Advantage and commercial patients are invisible. MarketView and PJI close this gap.", "methods", "Open data & methods") +
        insight("opp", "Research access is a measurable institutional value", DATA.facts.trials_mn_total + " recruiting gyn-cancer trials list a Minnesota site, and community systems take part through NCI networks.", "research", "Open research & quality") +
      "</div></section>" +
      '<section class="panel c5"><div class="panel-h"><h2>Distance to nearest gyn oncologist</h2><span class="meta">' + (state.geo === "mn" ? "Minnesota" : "U.S.") + ' counties</span></div><div class="map-wrap" id="ov-map"></div><div id="ov-leg"></div><h2 style="margin:6px 0 0;font-size:var(--fs-md);font-weight:650">Share of ' + siteLabel() + ' cases by distance</h2>' + distBandsHTML() + '<button type="button" class="linkbtn" data-go="access">Run outreach scenarios →</button></section>' +
      '<section class="panel c6"><div class="panel-h"><h2>Per-patient payment anchors</h2><span class="meta">Medicare 2024, national</span></div>' + icebergHTML() + "</section>" +
      '<section class="panel c6"><div class="panel-h"><h2>Data readiness</h2><span class="meta">what each layer can support</span></div>' + readinessHTML() + "</section>" +
    "</div>";
  const m = drawCountyMap($("#ov-map"), { metric: "mi" });
  $("#ov-leg").innerHTML = legendHTML(m.bd);
};
function distBandsHTML() {
  const cs = DATA.counties.filter(inScope);
  const tot = sum(cs.map(casesOf)) || 1;
  const bands = [[0, 25], [25, 50], [50, 75], [75, 100], [100, 1e9]];
  return barsHTML(bands.map((b) => {
    const k = sum(cs.filter((c) => c.mi >= b[0] && c.mi < b[1]).map(casesOf));
    return { label: b[1] > 1e8 ? "100+ miles" : b[0] + "–" + b[1] + " miles", v: k / tot, color: b[0] >= 50 ? "var(--s2)" : "var(--s1)", tip: F.n(k) + " cases per year" };
  }), { fmt: (v) => F.p(v), max: 1 });
}
function insight(kind, title, body, target, cta) {
  return '<article class="insight ' + kind + '"><div class="stripe"></div><div><h3>' + title + "</h3><p>" + body + '</p><div class="foot"><button type="button" class="linkbtn" data-go="' + target + '">' + cta + " →</button></div></div></article>";
}
function icebergHTML() {
  const P = DATA.prices, D = (k) => DATA.drg.find((d) => d.drg === k && d.geo === "National").pay;
  const rows = [
    { label: "Surgeon's debulking fee", code: "CPT 58953", v: P["58953_F"].allowed, color: "var(--s2)", tip: "Average Medicare allowed, " + F.n(P["58953_F"].services) + " services" },
    { label: "Bevacizumab, one ~1,050 mg dose", code: "J9035", v: P["J9035_O"].allowed * 105, tip: F.usd0(P["J9035_O"].allowed) + " per 10 mg × 105" },
    { label: "PARP inhibitor, about one month", code: "Part D", v: DATA.facts.olaparib_cost_per_claim, tip: "Olaparib gross cost per claim prescribed by gyn oncs" },
    { label: "Hospital stay, no CC/MCC", code: "DRG 738", v: D("738") },
    { label: "Hospital stay, with CC", code: "DRG 737", v: D("737") },
    { label: "Hospital stay, with MCC", code: "DRG 736", v: D("736") },
  ];
  return '<div class="legend"><span><i class="sw" style="background:var(--s2)"></i>Counted in the surgeon\'s wRVUs</span><span><i class="sw" style="background:var(--s1)"></i>System and downstream payments</span></div>' + barsHTML(rows, { fmt: F.usd0 });
}
function readinessHTML() {
  const lic = !!state.lic;
  const rows = [
    ["Need & access maps, coverage scenarios", "pub", "Live"],
    ["Supply vs. burden by state and region", "pub", "Live"],
    ["Provider Medicare footprint", "pub", "Live"],
    ["Economic scenario on national benchmarks", "scn", "Live · scenario"],
    ["Facility and care-team atlas", "lic", lic ? "Loaded locally" : "Load MarketView file"],
    ["Patient journeys and measured dollars", "pji", "Needs PJI claims"],
    ["Attribution tiers and in-system share", "pji", "Needs PJI claims"],
    ["Quality measures from claims", "pji", "Needs PJI claims"],
  ];
  return '<div class="tbl-wrap"><table><thead><tr><th>Capability</th><th>Status</th></tr></thead><tbody>' + rows.map((r) => "<tr><td>" + r[0] + "</td><td>" + chip(r[1], r[2]) + "</td></tr>").join("") + "</tbody></table></div>";
}

views.access = function (el) {
  const suggestions = state.geo === "mn" ? [["Duluth", 46.7867, -92.1005], ["Bemidji", 47.4736, -94.8803], ["Grand Rapids", 47.2372, -93.5302], ["International Falls", 48.6011, -93.4105], ["Brainerd", 46.358, -94.2008], ["Thief River Falls", 48.1191, -96.1781], ["Marshall", 44.4469, -95.7884], ["Willmar", 45.1219, -95.0433], ["Fergus Falls", 46.283, -96.0776]] : [];
  el.innerHTML =
    '<div class="grid">' +
      '<section class="panel c8"><div class="panel-h"><h2 id="acc-title"></h2><span class="meta">click the map to add an outreach site</span></div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:10px 18px;align-items:center">' +
          '<div class="ctl"><label for="metric-sel">Map layer</label><select id="metric-sel">' +
            [["mi", "Distance to nearest gyn onc"], ["cases", "Annual cases"], ["rate", "Incidence rate (single site)"], ["mir", "Ovarian mortality-to-incidence"], ["pov", "Poverty rate"], ["rural", "Rurality"]].map((m) => '<option value="' + m[0] + '"' + (state.metric === m[0] ? " selected" : "") + ">" + m[1] + "</option>").join("") +
          "</select></div>" +
          '<div class="ctl"><label for="thr">Access threshold</label><input type="range" id="thr" min="20" max="150" step="5" value="' + state.threshold + '"><span class="num mono" id="thr-v">' + state.threshold + " mi</span></div>" +
        "</div>" +
        '<div class="map-wrap" id="acc-map"></div><div id="acc-leg"></div>' +
        (state.metric === "rate" && state.site === "all" ? '<p class="note">Incidence rates are site-specific. Choose ovary, uterus, or cervix in the top bar.</p>' : "") +
        '<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center"><button type="button" class="btn primary" id="best-site">Suggest best next site</button>' +
          suggestions.map((s) => '<button type="button" class="btn small" data-sug="' + s[1] + "," + s[2] + "," + s[0] + '">+ ' + s[0] + "</button>").join("") +
          (state.added.length ? '<button type="button" class="btn small" id="clear-sites">Clear ' + state.added.length + " site" + (state.added.length > 1 ? "s" : "") + "</button>" : "") +
        "</div>" +
      "</section>" +
      '<section class="panel c4"><div class="panel-h"><h2>Coverage at <span id="cov-thr">' + state.threshold + '</span> miles</h2></div><div class="kpis" id="cov-kpis" style="grid-template-columns:1fr 1fr"></div><div id="cov-curve" class="chart"></div><div class="legend" id="cov-leg"></div></section>' +
      '<section class="panel c6"><div class="panel-h"><h2>Largest underserved counties</h2><span class="meta">cases beyond the threshold</span></div><div id="under"></div></section>' +
      '<section class="panel c6"><div class="panel-h"><h2>Rural vs. metro</h2><span class="meta">' + (state.geo === "mn" ? "Minnesota" : "lower 48") + ' counties</span></div><div id="rural"></div><p class="note">Distances are straight-line from county population centroids to gyn-onc practice ZIPs. Drive time (OSRM, already run for Triaggent) is the next step. Mortality-to-incidence ratios are crude and unadjusted, so treat them as hypotheses.</p></section>' +
    "</div>";
  $("#acc-title").textContent = BINS[state.metric].label;
  const redraw = () => {
    const m = drawCountyMap($("#acc-map"), { onClick: (s) => { state.added.push(s); render(); } });
    $("#acc-leg").innerHTML = legendHTML(m.bd);
  };
  redraw();
  const updateStats = () => {
    const base = coverage(state.threshold, []), now = coverage(state.threshold);
    const changed = state.added.length > 0;
    $("#cov-thr").textContent = state.threshold;
    $("#cov-kpis").innerHTML =
      kpi("Cases within", F.p(now.share), changed ? '<span class="delta up">+' + ((now.share - base.share) * 100).toFixed(1) + " pts vs. today</span>" : "of " + F.n(now.tot) + " per year") +
      kpi("Cases beyond", F.n(now.beyond), changed ? '<span class="delta up">' + F.n(base.beyond - now.beyond) + " newly covered</span>" : "per year") +
      kpi("Counties beyond", F.n(now.nBeyond), changed ? "was " + F.n(base.nBeyond) : "") +
      kpi("Population beyond", F.n(now.popBeyond), "2020 census");
    const pts = (added) => d3.range(0, 205, 5).map((x) => [x, coverage(x, added).share]);
    const series = [{ name: "Today", color: "var(--s1)", pts: pts([]) }];
    if (changed) series.push({ name: "With outreach sites", color: "var(--s2)", pts: pts(state.added) });
    $("#cov-curve").innerHTML = "";
    lineChart($("#cov-curve"), series, { xMax: 200, W: 380, H: 250, xLabel: "miles to nearest gyn onc", marker: state.threshold, label: "Share of cases within distance" });
    $("#cov-leg").innerHTML = series.map((s) => '<span><i class="sw" style="background:' + s.color + '"></i>' + s.name + "</span>").join("");
    const cs = DATA.counties.filter(inScope).map((c) => ({ c, d: distOf(c), k: casesOf(c) })).filter((x) => x.d > state.threshold && x.k);
    cs.sort((a, b) => b.k - a.k);
    $("#under").innerHTML = cs.length ? sortable("under", [
      { k: "name", h: "County" }, { k: "cases", h: "Cases/yr", r: 1, f: F.n }, { k: "dist", h: "Distance", r: 1, f: F.mi }, { k: "rucc", h: "RUCC", r: 1 }, { k: "pov", h: "Poverty", r: 1, f: (v) => v == null ? "–" : v + "%" },
    ], cs.slice(0, 40).map((x) => ({ name: x.c.n + ", " + x.c.s, cases: x.k, dist: x.d, rucc: x.c.ru, pov: x.c.pv })), { k: "cases", d: -1 }) : '<p class="note">No county with disclosed cases is beyond this threshold.</p>';
    const scope = DATA.counties.filter(inScope);
    const grp = (f) => scope.filter(f);
    const rur = grp((c) => c.ru >= 4), met = grp((c) => c.ru && c.ru < 4);
    const mir = (arr) => { const a = arr.filter((c) => c.ov && c.ovd != null); return a.length ? sum(a.map((c) => c.ovd)) / sum(a.map((c) => c.ov)) : null; };
    const shareBeyond = (arr) => { const t = sum(arr.map(casesOf)); return t ? sum(arr.filter((c) => distOf(c) > state.threshold).map(casesOf)) / t : null; };
    $("#rural").innerHTML =
      '<div class="tbl-wrap"><table><thead><tr><th>Measure</th><th class="r">Metro (RUCC 1–3)</th><th class="r">Nonmetro (4–9)</th></tr></thead><tbody>' +
      "<tr><td>Counties</td><td class='r'>" + F.n(met.length) + "</td><td class='r'>" + F.n(rur.length) + "</td></tr>" +
      "<tr><td>Median distance to gyn onc</td><td class='r'>" + F.mi(median(met.map((c) => distOf(c)))) + "</td><td class='r'>" + F.mi(median(rur.map((c) => distOf(c)))) + "</td></tr>" +
      "<tr><td>Cases beyond " + state.threshold + " mi</td><td class='r'>" + F.p(shareBeyond(met)) + "</td><td class='r'>" + F.p(shareBeyond(rur)) + "</td></tr>" +
      "<tr><td>Crude ovarian MIR</td><td class='r'>" + (mir(met) == null ? "–" : mir(met).toFixed(2)) + "</td><td class='r'>" + (mir(rur) == null ? "–" : mir(rur).toFixed(2)) + "</td></tr>" +
      "<tr><td>Annual " + siteLabel() + " cases</td><td class='r'>" + F.n(sum(met.map(casesOf))) + "</td><td class='r'>" + F.n(sum(rur.map(casesOf))) + "</td></tr>" +
      "</tbody></table></div>";
  };
  updateStats();
  $("#metric-sel").addEventListener("change", (e) => { state.metric = e.target.value; render(); });
  const thr = $("#thr");
  thr.addEventListener("input", () => { state.threshold = +thr.value; $("#thr-v").textContent = state.threshold + " mi"; });
  thr.addEventListener("change", () => { updateStats(); });
  $$("[data-sug]").forEach((b) => b.addEventListener("click", () => { const [la, lo, n] = b.dataset.sug.split(","); state.added.push({ la: +la, lo: +lo, name: n }); render(); }));
  const clr = $("#clear-sites"); if (clr) clr.addEventListener("click", () => { state.added = []; render(); });
  $("#best-site").addEventListener("click", () => {
    const btn = $("#best-site"); btn.textContent = "Searching…"; btn.disabled = true;
    setTimeout(() => {
      const scope = DATA.counties.filter(inScope);
      const targets = scope.map((c) => ({ c, d: distOf(c), k: casesOf(c) || 0 })).filter((x) => x.d > state.threshold && x.k > 0);
      const cands = scope.filter((c) => (c.p || 0) >= (state.geo === "mn" ? 5000 : 20000));
      let best = null;
      for (const cand of cands) {
        let gain = 0;
        for (const t of targets) if (hav(cand.la, cand.lo, t.c.la, t.c.lo) <= state.threshold) gain += t.k;
        if (!best || gain > best.gain) best = { gain, cand };
      }
      if (best && best.gain > 0) state.added.push({ la: best.cand.la, lo: best.cand.lo, name: best.cand.n + ", " + best.cand.s + " (adds " + Math.round(best.gain) + " cases/yr within " + state.threshold + " mi)" });
      render();
    }, 20);
  });
};

views.supply = function (el) {
  const sKey = state.site === "all" ? "cases" : state.site;
  const rows = DATA.states.filter((s) => !["AK", "HI"].includes(s.s)).map((s) => {
    const cases = s[sKey];
    return { st: s.s, name: STATE_NAMES[s.s] || s.s, region: s.region, cases, gyn: s.gyn, ratio: cases != null && s.gyn ? cases / s.gyn : null, med: s.med_n, pay: s.pay, partd: s.partd, f: s.f };
  });
  const M = {
    ratio: { label: "Annual cases per identified gyn oncologist", t: [40, 55, 70, 85], f: (v) => Math.round(v), get: (r) => r.ratio },
    gyn: { label: "Identified gyn oncologists", t: [5, 10, 25, 50], f: (v) => v, get: (r) => r.gyn },
    cases: { label: "Annual cases (disclosed counties)", t: [300, 800, 1500, 3000], f: (v) => F.n(v), get: (r) => r.cases },
  }[state.supplyMetric];
  const byF = new Map(rows.map((r) => [r.f, r]));
  const regions = ["Northeast", "Midwest", "South", "West"].map((rg) => {
    const rr = rows.filter((r) => r.region === rg && r.cases != null);
    const c = sum(rr.map((r) => r.cases)), g = sum(rr.map((r) => r.gyn));
    return { label: rg, v: g ? c / g : 0, tip: F.n(c) + " cases/yr · " + F.n(g) + " gyn oncs", color: rg === "Midwest" ? "var(--s2)" : "var(--s1)" };
  });
  const usC = sum(rows.filter((r) => r.cases != null).map((r) => r.cases)), usG = sum(rows.filter((r) => r.cases != null).map((r) => r.gyn));
  const mn = rows.find((r) => r.st === "MN");
  el.innerHTML =
    '<div class="kpis">' +
      kpi("U.S. cases per gyn onc", (usC / usG).toFixed(0), siteLabel() + ", states with county data") +
      kpi("Minnesota", mn.ratio ? mn.ratio.toFixed(0) : "–", F.n(mn.cases) + " cases · " + mn.gyn + " gyn oncs") +
      kpi("States with no gyn onc found", F.n(rows.filter((r) => r.gyn === 0).length), "in Medicare or NPPES") +
      kpi("Identified gyn oncologists", F.n(DATA.facts.identified_npis), "unique NPIs, all states") +
    "</div>" +
    '<div class="grid">' +
      '<section class="panel c8"><div class="panel-h"><h2>' + M.label + '</h2><div class="ctl"><label for="sup-m">Show</label><select id="sup-m">' +
        [["ratio", "Cases per gyn onc"], ["gyn", "Gyn oncologists"], ["cases", "Annual cases"]].map((m) => '<option value="' + m[0] + '"' + (state.supplyMetric === m[0] ? " selected" : "") + ">" + m[1] + "</option>").join("") +
      '</select></div></div><div class="map-wrap" id="sup-map"></div><div id="sup-leg"></div></section>' +
      '<section class="panel c4"><div class="panel-h"><h2>By Census region</h2><span class="meta">cases per gyn onc</span></div>' + barsHTML(regions, { fmt: (v) => v.toFixed(0) }) +
        '<p class="note">Holtzman et al. (2025) found the steepest drop in hallmark cases per fellow in the Midwest, so it is highlighted here. These ratios use public identity files and partly reflect how completely gyn oncs are registered.</p></section>' +
      '<section class="panel c12"><div class="panel-h"><h2>State detail</h2><span class="meta">click a column to sort</span></div>' +
        sortable("states", [
          { k: "name", h: "State" }, { k: "region", h: "Region" }, { k: "cases", h: "Cases/yr", r: 1, f: (v) => v == null ? '<span class="blank">no county data</span>' : F.n(v) },
          { k: "gyn", h: "Gyn oncs", r: 1, f: F.n }, { k: "ratio", h: "Cases per gyn onc", r: 1, f: (v) => v == null ? "–" : Math.round(v) },
          { k: "med", h: "In Medicare file", r: 1, f: F.n }, { k: "pay", h: "Medicare Part B", r: 1, f: F.usd }, { k: "partd", h: "Part D prescribed", r: 1, f: F.usd },
        ], rows, { k: "ratio", d: -1 }) +
        '<p class="note">Cases are average annual counts from NCI State Cancer Profiles (2018–2022), summed over counties that publish them. Kansas and Connecticut publish no county counts in this release. Gyn oncologists are unique NPIs from Medicare 2024 claim specialty plus NPPES taxonomy 207VX0201X.</p></section>' +
    "</div>";
  const svg = d3.select("#sup-map").append("svg").attr("viewBox", "0 0 975 610").attr("role", "img").attr("aria-label", M.label);
  svg.append("g").selectAll("path").data(stateFeatures.filter((f) => !["02", "15", "72"].includes(f.id))).join("path")
    .attr("d", pathGen).attr("class", "county").attr("stroke-width", 0.8)
    .attr("fill", (f) => { const r = byF.get(f.id); const v = r ? M.get(r) : null; return v == null ? "var(--seq-0)" : "var(--seq-" + binIndex(v, M.t) + ")"; })
    .attr("data-tip", (f) => { const r = byF.get(f.id); if (!r) return "No data"; return "<b>" + esc(r.name) + "</b><br>Cases/yr: " + (r.cases == null ? "no county data" : F.n(r.cases)) + "<br>Gyn oncs identified: " + r.gyn + "<br>Cases per gyn onc: " + (r.ratio == null ? "–" : Math.round(r.ratio)); });
  svg.append("path").attr("d", pathGen(mnFeature)).attr("fill", "none").attr("stroke", "var(--s2)").attr("stroke-width", 2.2);
  $("#sup-leg").innerHTML = legendHTML(Object.assign({}, M, { f: M.f })) + '<div class="legend" style="margin-top:6px"><span><i class="sw" style="background:transparent;box-shadow:inset 0 0 0 2px var(--s2)"></i>Minnesota</span></div>';
  $("#sup-m").addEventListener("change", (e) => { state.supplyMetric = e.target.value; render(); });
};

// ------------------------------------------------------------ value model
const BM = (() => {
  const P = DATA.prices, D = (k) => DATA.drg.find((d) => d.drg === k && d.geo === "National");
  const d6 = D("736"), d7 = D("737"), d8 = D("738");
  return {
    surg: P["58953_F"].allowed, newVisit: P["99205_O"].allowed, estVisit: P["99215_O"].allowed,
    chemoAdmin: P["96413_O"].allowed, carbo: P["J9045_O"].allowed, pacli: P["J9267_O"].allowed, bev10: P["J9035_O"].allowed,
    ct: P["74177_O"].allowed, pet: P["78815_O"].allowed, ca125: P["86304_O"].allowed, brca: P["81162_O"].allowed,
    drg736: d6.pay, drg737: d7.pay, drg738: d8.pay, parp: DATA.facts.olaparib_cost_per_claim,
    mixMcc: d6.dis / (d6.dis + d7.dis + d8.dis), mixCc: d7.dis / (d6.dis + d7.dis + d8.dis),
  };
})();
function computeScenario(sc) {
  const pm = sc.mc + sc.com + sc.mcd + sc.oth || 1;
  const w = { mc: sc.mc / pm, com: sc.com / pm, mcd: sc.mcd / pm, oth: sc.oth / pm };
  const prof = w.mc + w.com * sc.comProf + w.mcd * sc.mcdMult + w.oth;
  const hosp = w.mc + w.com * sc.comHosp + w.mcd * sc.mcdMult + w.oth;
  const pMcc = Math.min(100, sc.pMcc) / 100, pCc = Math.min(100 - sc.pMcc, sc.pCc) / 100, pNo = Math.max(0, 1 - pMcc - pCc);
  const inSys = sc.inSys / 100;
  const L = [];
  const add = (key, label, phase, tier, base, mult, retain, tag) => L.push({ key, label, phase, tier, base, mult, retain, per: base * mult * retain, tag });
  add("consult", "New-patient gyn-onc consultation", 1, "Direct", BM.newVisit, prof, 1, "CMS 99205");
  add("brca", "Germline BRCA testing", 1, "Downstream", BM.brca * sc.pBrca / 100, hosp, inSys, "CMS 81162");
  add("staging", "Staging imaging (CT + PET share)", 1, "Downstream", BM.ct + BM.pet * sc.petBase / 100, hosp, inSys, "CMS 74177/78815");
  add("ca125b", "Baseline CA-125", 1, "Downstream", BM.ca125, hosp, inSys, "CMS 86304");
  add("surgeon", "Surgeon's debulking fee", 2, "Direct", BM.surg, prof, 1, "CMS 58953");
  add("stay", "Index hospital stay (DRG mix)", 2, "Associated", BM.drg736 * pMcc + BM.drg737 * pCc + BM.drg738 * pNo, hosp, 1, "CMS DRG 736–738");
  add("visits", "Follow-up gyn-onc visits", 3, "Direct", BM.estVisit * Math.max(0, sc.visits - 1), prof, 1, "CMS 99215");
  add("chemo", "Platinum-taxane chemotherapy (admin + drugs)", 3, "Downstream", sc.pChemo / 100 * sc.cycles * (BM.chemoAdmin + BM.carbo * 15 + BM.pacli * 300), hosp, inSys, "CMS 96413/J9045/J9267");
  add("bev", "Bevacizumab infusions", 3, "Downstream", sc.pBev / 100 * sc.bevDoses * BM.bev10 * 105, hosp, inSys, "CMS J9035");
  add("surv", "Surveillance CT", 3, "Downstream", BM.ct * Math.max(0, sc.ctYear - 1), hosp, inSys, "CMS 74177");
  add("ca125s", "CA-125 monitoring", 3, "Downstream", BM.ca125 * Math.max(0, sc.ca125 - 1), hosp, inSys, "CMS 86304");
  add("parp", "PARP maintenance via system pharmacy", 3, "Downstream", sc.pParp / 100 * sc.parpMonths * BM.parp, 1, sc.pharmShare / 100, "CMS Part D");
  const tiers = { Direct: 0, Associated: 0, Downstream: 0 }, phases = { 1: 0, 2: 0, 3: 0 };
  L.forEach((l) => { tiers[l.tier] += l.per; phases[l.phase] += l.per; });
  const perPatient = tiers.Direct + tiers.Associated + tiers.Downstream;
  return { lines: L, tiers, phases, perPatient, program: perPatient * sc.cases, ratio: tiers.Direct ? (tiers.Associated + tiers.Downstream) / tiers.Direct : null, prof, hosp, w };
}
const SCEN_FIELDS = [
  ["Program volume", [["cases", "Annual ovarian cancer surgical patients", 1, 0, 2000, "User input · MarketView supplies this nationally"]]],
  ["Payer mix (%)", [["mc", "Medicare", 1, 0, 100, "Assumption"], ["com", "Commercial", 1, 0, 100, "Assumption"], ["mcd", "Medicaid", 1, 0, 100, "Assumption"], ["oth", "Other / self-pay", 1, 0, 100, "Assumption"]]],
  ["Price multipliers vs. Medicare", [["comHosp", "Commercial, hospital services", 0.05, 0.5, 5, "RAND Round 5: employers paid 254% of Medicare (2022)"], ["comProf", "Commercial, professional services", 0.05, 0.5, 4, "Assumption; CBO 2022 found specialty prices 30–140% above Medicare"], ["mcdMult", "Medicaid, all services", 0.01, 0.3, 1.5, "KFF Medicaid-to-Medicare fee index 0.72 (2019)"]]],
  ["Surgical acuity (%)", [["pMcc", "Stays with major complication (MCC)", 0.1, 0, 100, "Benchmark: Medicare 2024 discharge mix"], ["pCc", "Stays with complication (CC)", 0.1, 0, 100, "Benchmark: Medicare 2024 discharge mix"]]],
  ["Clinical pathway, first 12 months", [["visits", "Gyn-onc office visits", 1, 0, 40, "Assumption"], ["pChemo", "% receiving platinum-taxane chemo", 1, 0, 100, "Assumption"], ["cycles", "Chemo cycles", 1, 0, 12, "Assumption"], ["pBev", "% receiving bevacizumab", 1, 0, 100, "Assumption"], ["bevDoses", "Bevacizumab doses", 1, 0, 30, "Assumption"], ["ctYear", "CT scans", 1, 0, 12, "Assumption"], ["petBase", "% with staging PET", 1, 0, 100, "Assumption"], ["ca125", "CA-125 tests", 1, 0, 24, "Assumption"], ["pBrca", "% with germline BRCA testing", 1, 0, 100, "Assumption; guidelines recommend testing all"], ["pParp", "% on PARP maintenance", 1, 0, 100, "Assumption"], ["parpMonths", "PARP months in year one", 1, 0, 12, "Assumption"]]],
  ["Retention", [["inSys", "% of downstream care kept in-system", 1, 0, 100, "Assumption · PJI will measure this"], ["pharmShare", "% of PARP fills via system pharmacy", 1, 0, 100, "Assumption"]]],
];
views.value = function (el) {
  const sc = state.scen;
  const lic = state.lic;
  const facOpts = lic ? lic.facilities.filter((f) => f.ov.st === "num") : [];
  el.innerHTML =
    '<div class="banner"><span class="ic">!</span><div><b>Scenario model, not measured revenue.</b> Prices are Medicare 2024 national averages from CMS public files, adjusted by the payer mix and multipliers you set. When PJI claims arrive, observed allowed amounts replace each benchmark line by line. Contribution margin needs local cost data and is not shown.</div></div>' +
    '<div class="grid">' +
      '<section class="panel c4"><div class="panel-h"><h2>Assumptions</h2><button type="button" class="btn small" id="scen-reset">Reset defaults</button></div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:6px">' + [["Community program", 25], ["Regional hub", 80], ["Referral center", 200]].map((p) => '<button type="button" class="btn small" data-preset="' + p[1] + '">' + p[0] + " · " + p[1] + "</button>").join("") + "</div>" +
        (lic ? '<div class="frow"><label for="vol-src">Volume from MarketView</label><select id="vol-src"><option value="user">Manual entry</option>' + facOpts.map((f) => '<option value="' + esc(f.id) + '"' + (state.volSource === f.id ? " selected" : "") + ">" + esc(f.name) + " (" + f.ov.v + ")</option>").join("") + '</select><span class="src">Sample facility counts cover an unspecified period. Suppressed facilities are not listed.</span></div>' : "") +
        '<form class="form" id="scen-form">' + SCEN_FIELDS.map((g) => '<div class="fgroup"><h3>' + g[0] + "</h3>" + g[1].map((f) =>
          '<div class="frow"><label for="sc-' + f[0] + '">' + f[1] + '</label><input type="number" id="sc-' + f[0] + '" data-k="' + f[0] + '" step="' + f[2] + '" min="' + f[3] + '" max="' + f[4] + '" value="' + sc[f[0]] + '"><span class="src">' + f[5] + "</span></div>").join("") + "</div>").join("") + "</form>" +
        '<p class="note" id="mix-warn"></p>' +
      "</section>" +
      '<div class="c8" style="display:grid;gap:16px;align-content:start" id="scen-out"></div>' +
    "</div>";
  const out = $("#scen-out");
  const paint = () => {
    const r = computeScenario(sc);
    const pm = sc.mc + sc.com + sc.mcd + sc.oth;
    $("#mix-warn").textContent = Math.abs(pm - 100) > 0.5 ? "Payer mix adds to " + pm + "%. It is normalized to 100% in the calculation." : "";
    const tierColor = { Direct: "var(--s2)", Associated: "var(--s3)", Downstream: "var(--s1)" };
    const tierLabel = { Direct: "Direct professional", Associated: "Associated institutional", Downstream: "Downstream program" };
    const tornado = sensitivity(sc, r.program);
    out.innerHTML =
      '<div class="kpis">' +
        kpi("Program footprint, year one", F.usd(r.program), F.n(sc.cases) + " patients × " + F.usd(r.perPatient)) +
        kpi("Direct professional", F.usd(r.tiers.Direct * sc.cases), "the gyn oncologist's own billing") +
        kpi("System value per $1 direct", r.ratio ? "$" + r.ratio.toFixed(1) : "–", "associated + downstream ÷ direct") +
        kpi("Blended price index", r.hosp.toFixed(2) + "×", "hospital services vs. Medicare") +
      "</div>" +
      '<section class="panel"><div class="panel-h"><h2>Per-patient value by attribution tier</h2><span class="meta">payer-adjusted, in-system share applied</span></div>' +
        '<div class="legend">' + Object.keys(tierColor).map((k) => '<span><i class="sw" style="background:' + tierColor[k] + '"></i>' + tierLabel[k] + "</span>").join("") + "</div>" +
        '<div class="stack" role="img" aria-label="Per-patient value split by tier">' + Object.keys(tierColor).map((k) => '<div tabindex="0" style="flex:' + Math.max(0.0001, r.tiers[k]) + ";background:" + tierColor[k] + '" ' + tipAttr("<b>" + tierLabel[k] + "</b><br>" + F.usd0(r.tiers[k]) + " per patient · " + F.p(r.tiers[k] / r.perPatient)) + "></div>").join("") + "</div>" +
        barsHTML(Object.keys(tierColor).map((k) => ({ label: tierLabel[k], v: r.tiers[k], color: tierColor[k], vtxt: F.usd0(r.tiers[k]) + " · " + F.p(r.tiers[k] / r.perPatient, 0) })), {}) +
      "</section>" +
      '<div class="grid">' +
        '<section class="panel c6"><div class="panel-h"><h2>By SGO journey phase</h2><span class="meta">per patient</span></div>' +
          barsHTML([["1 · Consultation & diagnosis", 1], ["2 · Surgical care", 2], ["3 · Treatment & survivorship", 3]].map((p) => ({ label: p[0], v: r.phases[p[1]], color: "var(--bar-neutral)", vtxt: F.usd0(r.phases[p[1]]) })), {}) + "</section>" +
        '<section class="panel c6"><div class="panel-h"><h2>Sensitivity</h2><span class="meta">program total, low to high</span></div><div class="tornado">' + tornado + '</div><p class="note">Bar spans the program total when each assumption moves by the stated amount. The vertical tick marks the current scenario.</p></section>' +
      "</div>" +
      '<section class="panel"><div class="panel-h"><h2>Line items</h2><span class="meta">every number tagged with its source</span></div>' +
        sortable("lines", [
          { k: "label", h: "Service" }, { k: "tier", h: "Tier", f: (v) => '<span style="display:inline-flex;gap:6px;align-items:center"><i class="sw" style="background:' + tierColor[v] + '"></i>' + v + "</span>" },
          { k: "per", h: "Per patient", r: 1, f: F.usd0 }, { k: "prog", h: "Program", r: 1, f: F.usd },
          { k: "base", h: "Medicare basis", r: 1, f: F.usd0 }, { k: "mult", h: "Price index", r: 1, f: (v) => v.toFixed(2) + "×" }, { k: "retain", h: "Kept in-system", r: 1, f: (v) => F.p(v, 0) },
          { k: "phase", h: "Phase", r: 1 }, { k: "tag", h: "Source", f: (v) => chip("pub", esc(v)) },
        ], r.lines.map((l) => Object.assign({}, l, { prog: l.per * sc.cases })), { k: "per", d: -1 }) +
      "</section>" +
      '<section class="panel"><div class="panel-h"><h2>Leadership summary</h2><button type="button" class="btn primary" id="copy-sum">Copy summary</button></div><textarea class="copybox" id="sum-txt" readonly aria-label="Leadership summary text"></textarea><p class="note" id="copy-msg"></p></section>';
    $("#sum-txt").value = summaryText(sc, r);
    $("#copy-sum").addEventListener("click", () => {
      const t = $("#sum-txt").value;
      const done = (ok) => { $("#copy-msg").textContent = ok ? "Copied to clipboard." : "Clipboard is blocked here. The text is selected; press Ctrl+C or ⌘C."; if (!ok) { $("#sum-txt").focus(); $("#sum-txt").select(); } };
      try { navigator.clipboard.writeText(t).then(() => done(true), () => done(false)); } catch (e) { done(false); }
    });
  };
  paint();
  $("#scen-form").addEventListener("submit", (e) => e.preventDefault());
  $("#scen-form").addEventListener("input", (e) => {
    const k = e.target.dataset.k; if (!k) return;
    const v = parseFloat(e.target.value); if (isNaN(v)) return;
    sc[k] = v; if (k === "cases") state.volSource = "user";
    store.set("scen", sc); paint();
  });
  $("#scen-reset").addEventListener("click", () => { state.scen = Object.assign({}, SCEN_DEFAULTS); state.volSource = "user"; store.set("scen", state.scen); render(); });
  $$("[data-preset]").forEach((b) => b.addEventListener("click", () => { sc.cases = +b.dataset.preset; state.volSource = "user"; store.set("scen", sc); render(); }));
  const vs = $("#vol-src");
  if (vs) vs.addEventListener("change", () => {
    state.volSource = vs.value;
    if (vs.value !== "user") { const f = lic.facilities.find((x) => x.id === vs.value); if (f && f.ov.v) sc.cases = f.ov.v; }
    render();
  });
};
function sensitivity(sc, base) {
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const run = (patch) => computeScenario(Object.assign({}, sc, patch)).program;
  const rows = [
    ["Commercial hospital multiplier ±25%", { comHosp: sc.comHosp * 0.75 }, { comHosp: sc.comHosp * 1.25 }],
    ["Commercial share ±15 pts (vs. Medicare)", { com: clamp(sc.com - 15, 0, 100), mc: sc.mc + Math.min(15, sc.com) }, { com: sc.com + Math.min(15, sc.mc), mc: clamp(sc.mc - 15, 0, 100) }],
    ["In-system retention ±15 pts", { inSys: clamp(sc.inSys - 15, 0, 100) }, { inSys: clamp(sc.inSys + 15, 0, 100) }],
    ["PARP maintenance uptake ±15 pts", { pParp: clamp(sc.pParp - 15, 0, 100) }, { pParp: clamp(sc.pParp + 15, 0, 100) }],
    ["Bevacizumab uptake ±15 pts", { pBev: clamp(sc.pBev - 15, 0, 100) }, { pBev: clamp(sc.pBev + 15, 0, 100) }],
    ["Major-complication share ±10 pts", { pMcc: clamp(sc.pMcc - 10, 0, 100), pCc: sc.pCc + Math.min(10, sc.pMcc) }, { pMcc: clamp(sc.pMcc + 10, 0, 100), pCc: clamp(sc.pCc - 10, 0, 100) }],
  ].map((r) => { const a = run(r[1]), b = run(r[2]); return { label: r[0], lo: Math.min(a, b), hi: Math.max(a, b) }; });
  rows.sort((a, b) => (b.hi - b.lo) - (a.hi - a.lo));
  const mn = Math.min(base, ...rows.map((r) => r.lo)), mx = Math.max(base, ...rows.map((r) => r.hi)), span = mx - mn || 1;
  const pos = (v) => ((v - mn) / span * 100).toFixed(2) + "%";
  return rows.map((r) => '<div class="trow"><span>' + r.label + '</span><div class="ttrack" tabindex="0" ' + tipAttr("<b>" + r.label + "</b><br>" + F.usd(r.lo) + " to " + F.usd(r.hi) + "<br>Base " + F.usd(base)) + '><div class="trange" style="left:' + pos(r.lo) + ";width:calc(" + pos(r.hi) + " - " + pos(r.lo) + ')"></div><div class="tbase" style="left:' + pos(base) + '"></div></div></div>').join("") +
    '<div class="trow"><span></span><div style="display:flex;justify-content:space-between;font-size:var(--fs-xs);color:var(--muted)" class="num"><span>' + F.usd(mn) + "</span><span>" + F.usd(mx) + "</span></div></div>";
}
function summaryText(sc, r) {
  return [
    "GYNECOLOGIC ONCOLOGY PROGRAM VALUE: SCENARIO SUMMARY",
    "",
    "Volume: " + sc.cases + " ovarian cancer surgical patients per year.",
    "Payer mix: Medicare " + sc.mc + "%, commercial " + sc.com + "%, Medicaid " + sc.mcd + "%, other " + sc.oth + "%.",
    "",
    "Estimated year-one footprint: " + F.usd(r.program) + " (" + F.usd0(r.perPatient) + " per patient).",
    "  Direct professional (gyn oncologist):  " + F.usd(r.tiers.Direct * sc.cases),
    "  Associated institutional (index stay): " + F.usd(r.tiers.Associated * sc.cases),
    "  Downstream program care kept in-system: " + F.usd(r.tiers.Downstream * sc.cases),
    "",
    "For every $1 of direct professional revenue, the program is associated with about $" + (r.ratio || 0).toFixed(1) + " of health-system revenue.",
    "",
    "Method: Medicare 2024 national average payments (CMS public use files) adjusted by payer mix (commercial hospital " + sc.comHosp + "x, commercial professional " + sc.comProf + "x, Medicaid " + sc.mcdMult + "x) and an in-system retention of " + sc.inSys + "%. Other specialties' professional fees are excluded. This is a scenario, not measured revenue; contribution margin requires local cost data.",
  ].join("\n");
}

views.providers = function (el) {
  const sel = state.provState || (state.geo === "mn" ? "MN" : "ALL");
  const ps = DATA.providers.filter((p) => sel === "ALL" || p.s === sel);
  const pd = DATA.partd.filter((p) => sel === "ALL" || p.s === sel);
  const tot = sum(ps.map((p) => p.pay)), drug = sum(ps.map((p) => p.drug));
  const benes = sum(ps.map((p) => p.b));
  const wavg = (k) => { const a = ps.filter((p) => p[k] != null && p.b); const b = sum(a.map((p) => p.b)); return b ? sum(a.map((p) => p[k] * p.b)) / b : null; };
  const bins = [[0, 10e3, "Under $10k"], [10e3, 25e3, "$10k–25k"], [25e3, 50e3, "$25k–50k"], [50e3, 75e3, "$50k–75k"], [75e3, 100e3, "$75k–100k"], [100e3, 250e3, "$100k–250k"], [250e3, 1e12, "$250k+"]];
  const hist = bins.map((b) => ({ label: b[2], v: ps.filter((p) => p.pay >= b[0] && p.pay < b[1]).length }));
  const cats = [["em", "Office and hospital visits"], ["drug", "In-office Part B drugs"], ["surg", "Surgery"], ["chemo", "Chemo administration"], ["img", "Imaging"], ["lab", "Lab and pathology"], ["oth", "Other"]];
  const svc = cats.map((c) => ({ label: c[1], v: sum(ps.map((p) => (p.svc || {})[c[0]] || 0)) }));
  const dr = d3.rollups(pd, (v) => ({ c: sum(v.map((x) => x.c)), k: sum(v.map((x) => x.k)) }), (d) => d.d).map(([d, v]) => ({ label: d, v: v.c, tip: F.usd(v.c) + " · " + F.n(v.k) + " claims" })).sort((a, b) => (a.label === "All other drugs") - (b.label === "All other drugs") || b.v - a.v);
  const pdTot = sum(pd.map((p) => p.c));
  const parp = sum(pd.filter((p) => /parib/i.test(p.d)).map((p) => p.c));
  const ruralN = ps.filter((p) => p.rural).length;
  const stOpts = Array.from(new Set(DATA.providers.map((p) => p.s))).filter(Boolean).sort();
  el.innerHTML =
    '<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><div class="ctl"><label for="prov-st">Practice state</label><select id="prov-st"><option value="ALL">All states</option>' + stOpts.map((s) => '<option value="' + s + '"' + (sel === s ? " selected" : "") + ">" + (STATE_NAMES[s] || s) + "</option>").join("") + "</select></div>" + chip("pub", "CMS Medicare 2024 · fee-for-service only") + "</div>" +
    '<div class="kpis">' +
      kpi("Gyn oncologists in Medicare", F.n(ps.length), "claim specialty, 2024") +
      kpi("Medicare Part B payments", F.usd(tot), "median " + F.usd(median(ps.map((p) => p.pay))) + " per gyn onc") +
      kpi("In-office drug share", tot ? F.p(drug / tot, 0) : "–", F.n(ps.filter((p) => p.drug > 0).length) + " gyn oncs bill Part B drugs") +
      kpi("Part D prescribed", F.usd(pdTot), pdTot ? F.p(parp / pdTot, 0) + " PARP inhibitors" : "") +
      kpi("Rural practice locations", ps.length ? F.p(ruralN / ps.length, 0) : "–", "practice ZIP RUCA 4–10") +
      kpi("Beneficiary risk score", wavg("risk") == null ? "–" : wavg("risk").toFixed(2), "average age " + (wavg("age") == null ? "–" : wavg("age").toFixed(0))) +
    "</div>" +
    '<div class="grid">' +
      '<section class="panel c6"><div class="panel-h"><h2>Medicare Part B payment per gyn oncologist</h2><span class="meta">number of gyn oncs</span></div>' + barsHTML(hist, { fmt: F.n }) + '<p class="note">The long right tail is practices with in-office infusion, where drug payments flow through the physician\'s billing.</p></section>' +
      '<section class="panel c6"><div class="panel-h"><h2>Professional service mix</h2><span class="meta">Medicare payments by service type</span></div>' + barsHTML(svc, { fmt: F.usd }) + '<p class="note">Service-level rows exclude codes billed for fewer than 11 beneficiaries, so these sum to less than total payments.</p></section>' +
      '<section class="panel c7"><div class="panel-h"><h2>Part D drugs prescribed by gyn oncologists</h2><span class="meta">gross drug cost</span></div>' + barsHTML(dr, { fmt: F.usd }) + '<p class="note">Gross cost includes plan and patient payments. It becomes health-system revenue only when a system-owned specialty pharmacy dispenses the drug.</p></section>' +
      '<section class="panel c5"><div class="panel-h"><h2>Who gyn oncologists treat</h2><span class="meta">Medicare beneficiaries</span></div><div class="kpis" style="grid-template-columns:1fr 1fr">' +
        kpi("Beneficiaries", F.n(benes), "summed across providers") +
        kpi("Dual-eligible", benes ? F.p(sum(ps.map((p) => p.dual)) / benes, 0) : "–", "Medicare + Medicaid") +
        kpi("Aged 75+", benes ? F.p(sum(ps.map((p) => p.o75)) / benes, 0) : "–", "of beneficiaries") +
        kpi("Avg. HCC risk", wavg("risk") == null ? "–" : wavg("risk").toFixed(2), "1.0 = average beneficiary") +
      '</div><p class="note">Provider-level records are aggregated here; the platform does not show named physicians.</p></section>' +
    "</div>";
  $("#prov-st").addEventListener("change", (e) => { state.provState = e.target.value; render(); });
};

views.research = function (el) {
  const measures = [
    ["Surgery-to-chemotherapy interval", "Days from index debulking to first platinum dose; share within 42 days", "DOS, procedure, NDC/J-codes", "Quality"],
    ["Germline genetic testing", "Share of ovarian cancer patients with BRCA/HRD testing within 12 months of diagnosis", "CPT 81162–81167, dx C56", "Quality"],
    ["PARP maintenance after response", "Share of eligible patients starting maintenance", "NDC, pharmacy claims", "Quality"],
    ["30-day readmission and ED use", "Unplanned admissions or ED visits after index surgery", "Setting of care, dates", "Quality / operations"],
    ["Chemo in the last 14 days of life", "End-of-life aggressiveness, an established oncology quality metric", "Dates, J-codes, death proxy", "Quality / equity"],
    ["Hospice enrollment", "Share enrolled in hospice before death, and length of stay", "Bill type, dates", "Quality"],
    ["Care in-system", "Share of downstream services delivered by the index surgeon's system", "Facility NPI → system crosswalk", "Economic / coordination"],
    ["Travel to surgery", "Patient ZIP3 to surgical facility distance", "PATIENT_ZIP_3, facility NPI", "Access / equity"],
  ];
  el.innerHTML =
    '<div class="grid">' +
      '<section class="panel c6"><div class="panel-h"><h2>Recruiting gyn-cancer trials with a Minnesota site</h2><span class="meta">by health system</span></div>' +
        barsHTML(DATA.trials.map((t) => ({ label: t.org, v: t.n, tip: t.n + " recruiting trials" })), { fmt: (v) => v + " trials" }) +
        '<p class="note">ClinicalTrials.gov API, ' + DATA.facts.trials_mn_total + ' recruiting trials matched on ovarian, endometrial, uterine, or cervical cancer. The condition match is broad, and a trial counts once per system.</p></section>' +
      '<section class="panel c6"><div class="panel-h"><h2>Why specialist care is part of the value story</h2></div>' +
        '<div class="kpis" style="grid-template-columns:1fr 1fr">' + kpi("NCCN-adherent care", "~40%", "of 13,000+ ovarian cancer patients (Bristow 2013)") + kpi("Higher 5-year mortality risk", "+33%", "with non-adherent care") + kpi("High-volume hospital", "≥20/yr", "ovarian cases; adherence 51% vs. 34%") + kpi("High-volume surgeon", "≥10/yr", "ovarian cases") + "</div>" +
        '<p class="note">These findings support SGO\'s quality and outcomes domain. The platform\'s coverage flags (Program atlas) and access index make the gap locally visible.</p></section>' +
      '<section class="panel c12"><div class="panel-h"><h2>Quality measures ready to compute from PJI claims</h2>' + chip("pji", "activates with PJI") + "</div>" +
        sortable("measures", [{ k: "m", h: "Measure" }, { k: "d", h: "Definition" }, { k: "f", h: "Claims fields" }, { k: "dom", h: "SGO value domain" }], measures.map((m) => ({ m: m[0], d: m[1], f: m[2], dom: m[3] })), { k: "dom", d: 1 }) +
      "</section>" +
      '<section class="panel c12"><div class="panel-h"><h2>Institutional value domains and where they are measured</h2></div><div class="tbl-wrap"><table><thead><tr><th>Domain</th><th>Measured by</th><th>Status</th></tr></thead><tbody>' +
        [["Direct professional value", "Provider footprint, value model (direct tier)", "pub", "Live"], ["Downstream and retained value", "Value model scenario now; journey engine with PJI", "scn", "Scenario"], ["Contribution margin", "Value model plus local cost inputs", "pji", "Needs local finance data"], ["Access and equity", "Access & equity module", "pub", "Live"], ["Research", "Trial activity by system", "pub", "Live"], ["Quality and outcomes", "Claims-based measures above", "pji", "Needs PJI"], ["Coordination", "Care-team footprint (Program atlas)", "lic", state.lic ? "Loaded locally" : "Load MarketView"]].map((r) => "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + chip(r[2], r[3]) + "</td></tr>").join("") +
      "</tbody></table></div></section>" +
    "</div>";
};

// ------------------------------------------------------------ licensed atlas
function specGroup(p) {
  if (p.gyn_any) return "Gyn oncologist";
  const s = ((p.sp1 || "") + " " + (p.sp2 || "")).toLowerCase();
  if (/surgery|urolog|colon|rectal|obstetric|gynec/.test(s)) return "Other surgeon / OB-GYN";
  return "Other specialty";
}
const SPEC_COLORS = { "Gyn oncologist": "var(--s1)", "Other surgeon / OB-GYN": "var(--s2)", "Other specialty": "var(--s3)" };
function loadLicensed(file) {
  const rd = new FileReader();
  rd.onload = () => {
    try {
      const d = JSON.parse(rd.result);
      if (d.kind !== "marketview-sample" || !Array.isArray(d.facilities)) throw new Error("This file is not a platform MarketView extract.");
      state.lic = d; state.volSource = "user"; render();
    } catch (e) { const m = $("#drop-msg"); if (m) m.textContent = "Couldn't open that file: " + e.message + " Build it with build_licensed_extract.py."; }
  };
  rd.readAsText(file);
}
views.atlas = function (el) {
  const lic = state.lic;
  if (!lic) {
    el.innerHTML =
      '<div class="drop" id="drop"><span class="chip lic">Licensed layer · stays on this device</span><h2>Open the MarketView extract</h2>' +
      '<p class="note">This module reads Bart\'s MarketView sample from a file on your computer. The file is parsed in this browser tab and is never uploaded, stored, or sent anywhere. Reloading the page clears it.</p>' +
      '<ul><li>Facility and practitioner cohort volumes, with suppressed cells kept as unknown</li><li>Care-team composition: which specialties each program pulls in</li><li>Specialist-coverage flags: activity without a gyn oncologist on the roster</li><li>Identity cross-check against Medicare gyn-onc providers</li><li>Distance from each hospital to the nearest public gyn-onc practice</li></ul>' +
      '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><label class="btn primary" for="lic-file">Choose file</label><input type="file" id="lic-file" accept=".json,application/json" hidden><span class="note">or drop <code>marketview_sample.platform.json</code> here</span></div>' +
      '<p class="note">Generate it locally with <code>python3 build_licensed_extract.py</code> in <code>women opportunity/platform/</code>.</p><p class="note" id="drop-msg" role="status"></p></div>';
    const dz = $("#drop");
    $("#lic-file").addEventListener("change", (e) => { if (e.target.files[0]) loadLicensed(e.target.files[0]); });
    dz.addEventListener("dragover", (e) => { e.preventDefault(); dz.classList.add("over"); });
    dz.addEventListener("dragleave", () => dz.classList.remove("over"));
    dz.addEventListener("drop", (e) => { e.preventDefault(); dz.classList.remove("over"); if (e.dataTransfer.files[0]) loadLicensed(e.dataTransfer.files[0]); });
    return;
  }
  const co = state.cohort;
  const P = new Map(lic.practitioners.map((p) => [p.id, p]));
  const linksBy = d3.group(lic.links, (l) => l.f);
  const active = (l) => l[co].st !== "blank";
  const facRows = lic.facilities.map((f) => {
    const ls = (linksBy.get(f.id) || []).filter(active);
    const ps = ls.map((l) => P.get(l.p)).filter(Boolean);
    const groups = d3.rollup(ps, (v) => v.length, specGroup);
    const nearest = f.lat ? d3.min(DATA.sites, (s) => hav(f.lat, f.lon, s.la, s.lo)) : null;
    return { id: f.id, name: f.name, system: f.system || "–", city: f.city, cnt: f[co].v, st: f[co].st, rank: f[co].rank, team: ps.length, gyn: groups.get("Gyn oncologist") || 0, groups, nearest, f, _click: f.id };
  });
  const flags = facRows.filter((r) => r.st !== "blank" && r.gyn === 0);
  const gynAny = lic.practitioners.filter((p) => p.gyn_any);
  const multi = d3.rollups(lic.links, (v) => v.length, (l) => l.p).filter((x) => x[1] > 1).length;
  const visible = sum(facRows.filter((r) => r.st === "num").map((r) => r.cnt));
  const nSup = facRows.filter((r) => r.st === "sup").length, nNum = facRows.filter((r) => r.st === "num").length;
  el.innerHTML =
    '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">' + chip("lic", "MarketView sample · " + esc(lic.region) + " · loaded locally") +
      '<div class="seg" role="group" aria-label="Cohort"><button type="button" data-co="ov" aria-pressed="' + (co === "ov") + '">Ovarian debulking</button><button type="button" data-co="rh" aria-pressed="' + (co === "rh") + '">Radical hysterectomy</button></div>' +
      '<button type="button" class="btn small" id="lic-unload">Unload file</button></div>' +
    '<div class="banner"><span class="ic">!</span><div><b>Restricted data.</b> Counts cover an unspecified period. Suppressed cells (*) stay unknown and are never summed or imputed. Practitioner–hospital links are affiliations, not referrals. Don\'t screenshot this view for anyone outside BData.</div></div>' +
    '<div class="kpis">' +
      kpi("Hospitals", F.n(lic.facilities.length), nNum + " disclosed · " + nSup + " suppressed") +
      kpi("Visible facility count", F.n(visible), "sum of disclosed cells, not unique patients") +
      kpi("Practitioners", F.n(lic.practitioners.length), F.n(gynAny.length) + " gyn-onc labeled (" + lic.practitioners.filter((p) => p.gyn_pri).length + " primary)") +
      kpi("Matched to Medicare gyn-onc file", F.n(gynAny.filter((p) => p.medicare_gynonc).length) + " / " + gynAny.length, "by NPI, public CMS 2024") +
      kpi("Multi-site practitioners", F.n(multi), "linked to 2+ hospitals") +
      kpi("Coverage flags", F.n(flags.length), "activity, no gyn onc linked") +
    "</div>" +
    '<div class="grid">' +
      '<section class="panel c5"><div class="panel-h"><h2>Hospitals in the extract</h2><span class="meta">bubble = disclosed count; dashed = suppressed</span></div><div class="map-wrap" id="lic-map"></div><div class="legend"><span><i class="sw" style="background:var(--s1)"></i>Disclosed count</span><span><i class="sw" style="background:transparent;box-shadow:inset 0 0 0 2px var(--s2)"></i>Suppressed</span><span><i class="sw" style="background:var(--map-site);border-radius:50%"></i>Public gyn-onc practice ZIP</span></div></section>' +
      '<section class="panel c7"><div class="panel-h"><h2>Care-team composition</h2><span class="meta">linked practitioners active in the cohort</span></div>' +
        '<div class="legend">' + Object.keys(SPEC_COLORS).map((k) => '<span><i class="sw" style="background:' + SPEC_COLORS[k] + '"></i>' + k + "</span>").join("") + "</div>" +
        '<div class="bars">' + facRows.filter((r) => r.team > 0).sort((a, b) => b.team - a.team).map((r) => '<div class="bar"><div class="bm"><span class="lb">' + esc(r.name) + '</span><span class="vl">' + r.team + "</span></div>" +
          '<div class="stack" style="height:12px">' + Object.keys(SPEC_COLORS).map((k) => { const n = r.groups.get(k) || 0; return n ? '<div tabindex="0" style="flex:' + n + ";background:" + SPEC_COLORS[k] + '" ' + tipAttr("<b>" + esc(r.name) + "</b><br>" + k + ": " + n) + "></div>" : ""; }).join("") + "</div></div>").join("") + "</div>" +
        '<p class="note">Shown as the associated care team. SGO does not want other specialties\' professional revenue credited to gyn oncology.</p></section>' +
      '<section class="panel c12"><div class="panel-h"><h2>Hospital detail</h2><span class="meta">click a row for linked practitioners</span></div>' +
        sortable("lic-fac", [
          { k: "name", h: "Hospital" }, { k: "system", h: "System" }, { k: "city", h: "City" },
          { k: "cnt", h: "Patients", r: 1, f: (v, r) => r.st === "num" ? F.n(v) : r.st === "sup" ? '<span class="sup">* suppressed</span>' : '<span class="blank">not reported</span>' },
          { k: "rank", h: "Decile", r: 1, f: (v) => v == null ? "–" : v }, { k: "team", h: "Linked team", r: 1 }, { k: "gyn", h: "Gyn oncs", r: 1, f: (v, r) => v === 0 && r.st !== "blank" ? '<span class="sup">0 · flag</span>' : v },
          { k: "nearest", h: "Nearest gyn-onc ZIP", r: 1, f: F.mi },
        ], facRows, { k: "cnt", d: -1 }) + "</section>" +
      (flags.length ? '<section class="panel c12"><div class="panel-h"><h2>Specialist-coverage flags to validate</h2>' + chip("lic", "validate with SGO before sharing") + '</div><div class="ins">' + flags.map((r) => insight("gap", esc(r.name), "Cohort activity is recorded here, but no linked practitioner carries a gynecologic oncology label. The nearest public gyn-onc practice ZIP is " + F.mi(r.nearest) + " away. Possible explanations: a visiting surgeon, general surgeons operating, or a labeling gap.", "research", "Why it matters")).join("") + "</div></section>" : "") +
    "</div>";
  // map
  const svg = d3.select("#lic-map").append("svg").attr("viewBox", [MN_BOUNDS[0][0] - 8, MN_BOUNDS[0][1] - 8, MN_BOUNDS[1][0] - MN_BOUNDS[0][0] + 16, MN_BOUNDS[1][1] - MN_BOUNDS[0][1] + 16].join(" ")).attr("role", "img").attr("aria-label", "Minnesota hospitals in the MarketView extract");
  svg.append("g").selectAll("path").data(countyFeatures.filter((f) => f.id.startsWith("27"))).join("path").attr("class", "county").attr("d", pathGen).attr("fill", "var(--seq-0)");
  svg.append("path").attr("class", "statel").attr("d", pathGen(mnFeature));
  svg.append("g").selectAll("circle").data(DATA.sites.filter((s) => s.s === "MN" || ["ND", "SD", "WI", "IA"].includes(s.s)).map((s) => proj([s.lo, s.la])).filter(Boolean)).join("circle").attr("class", "site").attr("cx", (d) => d[0]).attr("cy", (d) => d[1]).attr("r", 1.4);
  const rmax = d3.max(facRows, (r) => r.cnt || 0) || 1;
  const rs = d3.scaleSqrt().domain([0, rmax]).range([2.5, 14]);
  svg.append("g").selectAll("circle").data(facRows.filter((r) => r.f.lat && r.st !== "blank").sort((a, b) => (b.cnt || 0) - (a.cnt || 0))).join("circle")
    .attr("class", (r) => "fac-dot" + (r.st === "sup" ? " sup" : "")).attr("fill", "var(--s1)").attr("fill-opacity", 0.8)
    .attr("cx", (r) => proj([r.f.lon, r.f.lat])[0]).attr("cy", (r) => proj([r.f.lon, r.f.lat])[1]).attr("r", (r) => r.st === "num" ? rs(r.cnt) : 5)
    .attr("tabindex", 0).attr("data-tip", (r) => "<b>" + esc(r.name) + "</b><br>" + (r.st === "num" ? F.n(r.cnt) + " patients" : "count suppressed") + "<br>Linked team: " + r.team + " · gyn oncs: " + r.gyn)
    .on("click", (ev, r) => openFacility(r.id));
  $$("[data-co]").forEach((b) => b.addEventListener("click", () => { state.cohort = b.dataset.co; render(); }));
  $("#lic-unload").addEventListener("click", () => { state.lic = null; state.volSource = "user"; render(); });
  $$("tr[data-click]").forEach((tr) => { tr.addEventListener("click", () => openFacility(tr.dataset.click)); tr.addEventListener("keydown", (e) => { if (e.key === "Enter") openFacility(tr.dataset.click); }); });
};
function openFacility(id) {
  const lic = state.lic, co = state.cohort;
  const f = lic.facilities.find((x) => x.id === id); if (!f) return;
  const P = new Map(lic.practitioners.map((p) => [p.id, p]));
  const ls = lic.links.filter((l) => l.f === id);
  const rows = ls.map((l) => { const p = P.get(l.p) || {}; return { name: p.name, cred: p.cred, spec: [p.sp1, p.sp2].filter(Boolean).join(" / "), grp: specGroup(p), st: l[co].st, v: l[co].v, work: l[co].work, med: p.medicare_gynonc }; })
    .sort((a, b) => (b.st !== "blank") - (a.st !== "blank") || (a.grp > b.grp ? 1 : -1));
  const root = $("#drawer-root");
  root.innerHTML = '<div class="drawer-back" id="dback"></div><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="dtitle"><div style="display:flex;justify-content:space-between;gap:10px;align-items:start"><div><div class="note">' + esc(f.system || "") + " · " + esc(f.city || "") + '</div><h2 id="dtitle">' + esc(f.name) + '</h2></div><button type="button" class="btn small" id="dclose">Close</button></div>' +
    '<div class="kpis" style="grid-template-columns:1fr 1fr">' + kpi(lic.cohorts[co], f[co].st === "num" ? F.n(f[co].v) : f[co].st === "sup" ? "*" : "–", f[co].st === "sup" ? "suppressed" : "patients, unspecified period") + kpi("Decile", f[co].rank == null ? "–" : f[co].rank, "rank universe undocumented") + "</div>" +
    '<div class="tbl-wrap"><table><thead><tr><th>Practitioner</th><th>Specialty</th><th>Cohort</th><th>Workload</th></tr></thead><tbody>' +
    rows.map((r) => "<tr><td>" + esc(r.name) + (r.cred ? ' <span class="note">' + esc(r.cred) + "</span>" : "") + (r.med ? " " + chip("pub", "Medicare gyn onc") : "") + '</td><td style="white-space:normal;min-width:160px"><i class="sw" style="background:' + SPEC_COLORS[r.grp] + ';margin-right:6px;vertical-align:-1px"></i>' + esc(r.spec || "–") + "</td><td>" + (r.st === "num" ? F.n(r.v) : r.st === "sup" ? '<span class="sup">*</span>' : '<span class="blank">–</span>') + "</td><td>" + esc(r.work || "–") + "</td></tr>").join("") +
    '</tbody></table></div><p class="note">Workload buckets show the share of a practitioner\'s cohort activity at this hospital. Their denominator is undocumented.</p></aside>';
  const close = () => { root.innerHTML = ""; };
  $("#dback").addEventListener("click", close); $("#dclose").addEventListener("click", close);
  document.addEventListener("keydown", function k(e) { if (e.key === "Escape") { close(); document.removeEventListener("keydown", k); } });
  $("#dclose").focus();
}

views.methods = function (el) {
  const src = [
    ["CMS Medicare Physician & Other Practitioners", "NPI; NPI × HCPCS; national × HCPCS", "2024", "Public", "pub", "Provider footprint, value model"],
    ["CMS Medicare Part D Prescribers", "NPI × drug", "2024", "Public", "pub", "Provider footprint, value model"],
    ["CMS Medicare Inpatient Hospitals", "DRG × national/state", "2024", "Public", "pub", "Value model, overview"],
    ["NPPES + NUCC taxonomy 207VX0201X", "NPI × practice location", "2026 extract", "Public", "pub", "Supply, access"],
    ["NCI State Cancer Profiles", "County × site", "Incidence 2018–22, mortality 2019–23", "Public", "pub", "Access, supply"],
    ["USDA ERS RUCC and SAIPE poverty", "County", "2023", "Public", "pub", "Access"],
    ["Census gazetteer (counties, ZCTA) + us-atlas", "County, ZCTA", "2024", "Public", "pub", "Maps, geocoding"],
    ["ClinicalTrials.gov API v2", "Trial × site", "Queried 8 Oct 2026", "Public", "pub", "Research"],
    ["Published benchmarks (RAND, KFF, CBO, Adjei & Meyer, Bristow)", "National", "2013–2024", "Public", "scn", "Value model assumptions, research"],
    ["LexisNexis MarketView sample", "Practitioner, facility, link", "Unspecified window", "Restricted · local file", "lic", "Program atlas, value model volume"],
    ["LexisNexis PJI claims", "Claim line, tokenized patient", "Pending", "Licensed", "pji", "Journeys, measured economics, quality"],
  ];
  el.innerHTML =
    '<section class="panel"><div class="panel-h"><h2>Architecture</h2><span class="meta">three layers, each useful on its own</span></div><div class="arch">' +
      '<div class="box"><h3>1 · Public layer</h3><ul><li>CMS, NCI, Census, USDA, trials</li><li>Need, access, supply, Medicare footprint</li><li>National today, no license required</li></ul>' + chip("pub", "live") + "</div>" +
      '<div class="box"><h3>2 · MarketView layer</h3><ul><li>Who treats the cohort and where</li><li>Facility volumes, care teams, affiliations</li><li>Sample now, national in Snowflake later</li></ul>' + chip("lic", state.lic ? "loaded locally" : "local file") + "</div>" +
      '<div class="box"><h3>3 · PJI claims layer</h3><ul><li>Patient journeys across SGO\'s three phases</li><li>Allowed and paid amounts replace benchmarks</li><li>Attribution tiers, in-system share, quality</li></ul>' + chip("pji", "pending") + "</div>" +
      '<div class="box"><h3>Member layer</h3><ul><li>Local volumes, payer mix, rates</li><li>Scenario calculator and leadership summary</li><li>Every value tagged by source</li></ul>' + chip("scn", "live · scenario") + "</div>" +
    "</div></section>" +
    '<section class="panel"><div class="panel-h"><h2>Source registry</h2></div>' +
      sortable("sources", [{ k: "n", h: "Source" }, { k: "g", h: "Grain" }, { k: "v", h: "Vintage" }, { k: "a", h: "Access", f: (v, r) => chip(r.c, esc(v)) }, { k: "u", h: "Used in" }], src.map((s) => ({ n: s[0], g: s[1], v: s[2], a: s[3], c: s[4], u: s[5] })), { k: "a", d: 1 }) +
    "</section>" +
    '<div class="grid">' +
      '<section class="panel c6"><div class="panel-h"><h2>Guardrails built into the platform</h2></div><ul style="margin:0;padding-left:18px;display:grid;gap:6px;font-size:var(--fs-md)">' +
        "<li>Benchmarks are scenario anchors, labeled as such, and never presented as a program's revenue.</li>" +
        "<li>Suppressed counts stay unknown. They are not summed, imputed, or back-solved from ranks.</li>" +
        "<li>Practitioner–hospital links are shown as affiliations, never as referrals.</li>" +
        "<li>Other specialties appear as the associated care team, not as gyn-onc wRVUs.</li>" +
        "<li>Gross Part D cost is shown separately from hospital revenue.</li>" +
        "<li>Restricted MarketView data is parsed in the browser from a local file and never uploaded.</li>" +
        "<li>Provider records are aggregated; no named physician appears in the public layer.</li>" +
      "</ul></section>" +
      '<section class="panel c6"><div class="panel-h"><h2>Known limitations</h2></div><ul style="margin:0;padding-left:18px;display:grid;gap:6px;font-size:var(--fs-md)">' +
        "<li>Medicare fee-for-service only. Minnesota is about 57% Medicare Advantage, and commercial patients are absent.</li>" +
        "<li>Only " + DATA.facts.hosp737_ge11 + " U.S. hospitals clear CMS's 11-discharge threshold for DRG 737, so hospital-level public volume is unusable.</li>" +
        "<li>Distances are straight-line from county centroids; drive time comes next.</li>" +
        "<li>Gyn-onc identity combines Medicare claim specialty and NPPES taxonomy; both miss some gyn oncs registered as OB/GYN. " + DATA.facts.geocode_fallbacks + " practice records with non-residential ZIPs were geocoded to the nearest ZCTA.</li>" +
        "<li>State county-count sums exclude suppressed small counties; Kansas and Connecticut publish none.</li>" +
        "<li>Mortality-to-incidence ratios are crude and use different years.</li>" +
      "</ul></section>" +
      '<section class="panel c12"><div class="panel-h"><h2>Rebuild</h2></div><p class="note">From <code>women opportunity/</code>: <code>analysis/public_benchmarks/fetch_cms.py</code> downloads CMS data, <code>platform/build_platform_data.py</code> compiles the public bundle, <code>platform/build_platform.py</code> writes this page, and <code>platform/build_licensed_extract.py</code> creates the local MarketView file. Data bundle built ' + esc(DATA.meta.built) + ".</p></section>" +
    "</div>";
};

// ------------------------------------------------------------ render
function render() {
  const [k, h] = TITLES[state.view];
  $("#crumb-k").textContent = k; $("#crumb-h").textContent = h;
  $("#geo-us").setAttribute("aria-pressed", state.geo === "us"); $("#geo-mn").setAttribute("aria-pressed", state.geo === "mn");
  $("#site-sel").value = state.site;
  $("#lic-dot").className = "dot " + (state.lic ? "local" : "off");
  $("#lic-txt").textContent = state.lic ? "MarketView · loaded locally" : "MarketView · not loaded";
  buildNav();
  tt.hidden = true;
  const el = $("#view");
  views[state.view](el);
}
const h0 = (location.hash || "").replace("#", "");
if (TITLES[h0]) state.view = h0;
window.addEventListener("hashchange", () => { const h = location.hash.replace("#", ""); if (TITLES[h] && h !== state.view) { state.view = h; render(); } });
render();
})();
