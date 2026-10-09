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

// ------------------------------------------------------------ info icons (definition, interpretation, formula)
// One entry per calculated figure: t = title, d = definition, i = how to interpret, f = formula lines.
const HAV = "d = haversine distance in miles from the county's Census internal point to the nearest gyn-onc practice ZIP centroid (R = 3,958.8 mi)";
const INFO = {
  // overview
  ov_cases: { t: "Annual cases", d: "Average new cancer cases diagnosed per year (NCI State Cancer Profiles, 2018–2022), summed over the counties in view. The cancer-site selector picks ovary, uterus (corpus), cervix, or all three.",
    i: "Read it as a floor. NCI suppresses counts for counties with very few cases, and those counties add nothing here. Kansas and Connecticut publish no county counts.",
    f: ["Annual cases = Σ county average annual count", "  over counties in view with a disclosed count", "", "All gyn = ovary + uterus + cervix (disclosed sites only)", "United States = lower 48 + DC"] },
  ov_gyn: { t: "Identified gyn oncologists", d: "Physicians who appear as gynecologic oncologists in a public file: Medicare 2024 claim specialty \"Gynecological Oncology\" or NPPES taxonomy 207VX0201X.",
    i: "An undercount of the real workforce, because some gyn oncologists are registered only as OB-GYNs. A physician with practice locations in two states counts once in each.",
    f: ["Gyn oncologists = Σ over states in view of", "  unique NPIs with a practice location in that state", "", "NPI set = Medicare 2024 specialty ∪ NPPES 207VX0201X"] },
  ov_ratio: { t: "Cases per gyn oncologist", d: "Annual cases divided by identified gyn oncologists, using only states that publish county case counts.",
    i: "A rough measure of burden per specialist: higher means more annual cases for each identified gyn oncologist. It is not a caseload, since patients cross state lines and not every case sees a gyn oncologist.",
    f: ["Cases per gyn onc = Σ annual cases ÷ Σ gyn oncologists", "  over states in view with county case data", "  (Kansas and Connecticut excluded)"] },
  ov_beyond50: { t: "Cases beyond 50 miles", d: "Share of annual cases in counties more than 50 straight-line miles from the nearest gyn-onc practice ZIP.",
    i: "Higher means more patients face a long trip to specialist care. Straight-line distance is shorter than road distance, so the share beyond 50 road miles is higher than this.",
    f: ["Share beyond 50 = 1 − Σ cases(d ≤ 50) ÷ Σ cases", "", HAV] },
  ov_partb: { t: "Medicare Part B to gyn oncs", d: "Total 2024 Medicare fee-for-service payments to physicians whose Medicare claim specialty is gynecologic oncology, in the geography shown.",
    i: "This is the gyn oncologists' own professional billing, the part that wRVU productivity sees. It includes Part B drugs billed in the office. It leaves out Medicare Advantage, commercial and Medicaid patients, and the patient's deductible and coinsurance.",
    f: ["Part B = Σ Tot_Mdcr_Pymt_Amt over gyn-onc NPIs", "  (CMS Physician & Other Practitioners, by provider, 2024)"] },
  ov_partd: { t: "Part D drugs they prescribe", d: "Gross cost of Medicare Part D prescriptions written by gyn oncologists in 2024, in the geography shown.",
    i: "Gross cost is everything paid at the pharmacy by plans, patients and other payers, before manufacturer rebates. It is not the prescriber's revenue. It becomes health-system revenue only when a system-owned pharmacy fills the prescription.",
    f: ["Part D = Σ Tot_Drug_Cst over gyn-onc prescribers", "  (CMS Part D Prescribers, by provider and drug, 2024)"] },
  ov_insights: { t: "Key insights", d: "Headline findings computed from the public layer. Each card links to the module with the detail.",
    i: "The first card compares what the hospital is paid for the surgical stay with what the surgeon is paid for the operation. The rural and metro figures are fixed national values for the lower 48 and don't change with the geography toggle.",
    f: ["Hospital-to-surgeon multiple = DRG 737 average total payment", "  ÷ CPT 58953 average allowed (facility)", "PARP share = Part D cost of olaparib, niraparib, rucaparib", "  ÷ all Part D cost, gyn-onc prescribers", "Rural vs. metro = median county distance, RUCC 4–9 vs. 1–3", "Crude ovarian MIR = Σ ovarian deaths ÷ Σ ovarian cases"] },
  ov_map: { t: "Distance to nearest gyn oncologist", d: "Each county is shaded by the straight-line distance to the nearest ZIP where an identified gyn oncologist practices. The bars below show how annual cases split across distance bands.",
    i: "Darker counties are farther from specialist care. Orange bars (50 miles and more) hold the cases most likely to face travel barriers. Distance is not drive time, and the nearest practice may not offer surgery.",
    f: [HAV, "", "Band share = Σ cases in counties with d in the band ÷ Σ cases in view", "Bands: 0–25, 25–50, 50–75, 75–100, 100+ miles"] },
  ov_anchors: { t: "Per-patient payment anchors", d: "Medicare 2024 national average payments for single services in an ovarian-cancer patient's care, set beside the surgeon's fee for the operation.",
    i: "Only the orange bar counts toward the surgeon's wRVUs. Teal bars are payments the program generates for the hospital and downstream services. Each bar is one service, not a patient total. The value model combines them.",
    f: ["Surgeon's fee = CPT 58953 average Medicare allowed, facility setting", "Bevacizumab dose = J9035 allowed per 10 mg × 105 (about 1,050 mg)", "PARP month = olaparib Part D gross cost ÷ claims, gyn-onc prescribers", "Hospital stay = DRG 736 / 737 / 738 average total Medicare payment", "", "Allowed = Medicare payment + patient cost sharing"] },
  // access & equity: map layers
  layer_mi: { t: "Distance to nearest gyn oncologist", d: "Straight-line distance from each county to the nearest identified gyn-onc practice ZIP, or to an outreach site you added if that is closer.",
    i: "Darker counties are farther from specialist care. Real travel is longer than straight-line distance, especially across lakes and sparse road networks. A practice ZIP may host a visiting clinic rather than a surgical program.",
    f: ["d = min(nearest practice ZIP, nearest added outreach site)", HAV, "", "Legend breaks: 25, 50, 75, 100 miles"] },
  layer_cases: { t: "Annual cases", d: "Average new cancer cases per year (NCI, 2018–2022) for the site chosen in the top bar.",
    i: "Shows where patients are, not how common the cancer is. Big counties are dark because they are big; use the incidence rate to compare risk. Grey counties have suppressed counts.",
    f: ["Shown as published: NCI average annual count", "All gyn = ovary + uterus + cervix (disclosed sites only)", "", "Legend breaks: 3, 10, 30, 100 cases per year"] },
  layer_rate: { t: "Incidence rate", d: "Age-adjusted new cases per 100,000 women per year (NCI, 2018–2022) for a single cancer site.",
    i: "Compares risk between counties regardless of their size or age mix. The legend splits counties into fifths, so color shows rank within the view, not an absolute level. Small counties have unstable rates or none.",
    f: ["Rate = NCI age-adjusted incidence per 100,000", "  (2000 U.S. standard population)", "", "Legend breaks = 20th, 40th, 60th and 80th percentiles", "  of county rates in view"] },
  layer_mir: { t: "Ovarian mortality-to-incidence ratio", d: "Ovarian cancer deaths per year divided by new ovarian cancer cases per year in the county.",
    i: "Closer to 1 means more deaths for each new diagnosis, a rough signal of later diagnosis or worse survival. It is crude: not adjusted for age or stage, deaths and cases come from different years, and small counties swing widely. Treat high values as hypotheses.",
    f: ["MIR = average annual ovarian deaths (2019–2023)", "      ÷ average annual ovarian cases (2018–2022)", "Shown only where both counts are disclosed", "", "Legend breaks: 0.50, 0.60, 0.70, 0.85"] },
  layer_pov: { t: "Poverty rate", d: "Share of all residents living below the federal poverty line in 2023 (Census SAIPE, via USDA ERS).",
    i: "Higher poverty often goes with uninsurance, less flexible work and fewer cars, which make long trips to specialist care harder.",
    f: ["Shown as published: PCTPOVALL_2023 (no calculation)", "", "Legend breaks: 10, 14, 18, 24 percent"] },
  layer_rural: { t: "Rurality (RUCC 2023)", d: "USDA Rural-Urban Continuum Code, from 1 (metro of 1 million or more) to 9 (rural, not next to a metro area).",
    i: "Higher codes are more rural and usually farther from subspecialists. The platform treats codes 1–3 as metro and 4–9 as nonmetro.",
    f: ["Shown as published: RUCC_2023 (no calculation)", "1–3 metro, by metro size", "4–5 nonmetro, urban population 20,000+", "6–7 nonmetro, urban population 5,000–20,000", "8–9 nonmetro, urban population under 5,000", "Codes 4, 6 and 8 border a metro area; 5, 7 and 9 do not"] },
  // access & equity: coverage
  acc_cov: { t: "Coverage at the access threshold", d: "How many of the annual cases in view live within the threshold distance of a gyn-onc practice, today and with any outreach sites you added.",
    i: "The curve gives the covered share at every distance from 0 to 200 miles, and the dashed line marks your threshold. With outreach sites added, the orange curve shows the gain over today. The steeper the early curve, the more cases sit close to specialists.",
    f: ["Coverage(T) = Σ cases(d ≤ T) ÷ Σ cases in view", "d = distance to the nearest practice ZIP or added site", "Curve = Coverage(T) for T = 0, 5, 10 … 200 miles"] },
  acc_within: { t: "Cases within", d: "Share of annual cases in counties within the threshold distance.",
    i: "Higher is better. With outreach sites added, the green note shows the gain in percentage points over today's network.",
    f: ["Cases within = Σ cases(d ≤ T) ÷ Σ cases in view", "Gain = Cases within (with sites) − Cases within (today)", "T = access threshold"] },
  acc_beyond: { t: "Cases beyond", d: "Annual cases in counties farther than the threshold distance.",
    i: "The number of patients a year who would need outreach or long travel. With sites added, \"newly covered\" is the drop from today.",
    f: ["Cases beyond = Σ cases(d > T)", "Newly covered = Cases beyond (today) − Cases beyond (with sites)"] },
  acc_counties: { t: "Counties beyond", d: "Number of counties in view farther than the threshold distance, including counties whose case counts are suppressed.",
    i: "Shows how much territory lies outside the network. Many of these counties are small and rural.",
    f: ["Counties beyond = count of counties with d > T"] },
  acc_pop: { t: "Population beyond", d: "Total 2020 Census population, all ages and sexes, of counties farther than the threshold distance.",
    i: "Captures small counties whose cases are suppressed and therefore missing from the case figures. It counts all residents, not only women at risk.",
    f: ["Population beyond = Σ 2020 population of counties with d > T"] },
  acc_best: { t: "Suggest best next site", d: "Finds the county where one outreach clinic would bring the most currently uncovered cases within the threshold.",
    i: "A greedy search, one site at a time: press it again to add the next best site given the ones already placed. It looks only at straight-line distance to uncovered cases, not drive time, staffing or facility readiness. Use it to shortlist places, not to choose one.",
    f: ["Candidates = counties in view with population ≥ 20,000", "  (≥ 5,000 in the Minnesota view)", "Gain(candidate) = Σ cases of counties now beyond T", "  that lie within T miles of the candidate", "Adds the candidate with the largest gain, if gain > 0"] },
  acc_under: { t: "Largest underserved counties", d: "Counties in view beyond the threshold distance, ranked by annual cases.",
    i: "Where outreach would reach the most patients. Counties with suppressed counts are left out even when they are remote; Population beyond covers them. The table shows the top 40.",
    f: ["Include a county if d > T and cases > 0", "Sort by cases, highest first; keep 40"] },
  acc_rural: { t: "Rural vs. metro", d: "Compares metro counties (RUCC 1–3) with nonmetro counties (RUCC 4–9) on distance, coverage, outcomes and burden.",
    i: "A larger median distance or share beyond the threshold in nonmetro counties shows an access gap. The mortality-to-incidence ratio is unadjusted, so a difference is a lead to test, not a finding.",
    f: ["Median distance = median of county d (each county counts once)", "Cases beyond = Σ cases(d > T) ÷ Σ cases, within the group", "Crude ovarian MIR = Σ ovarian deaths ÷ Σ ovarian cases,", "  counties with both counts disclosed", "Annual cases = Σ disclosed county cases"] },
  // supply & demand
  sup_us: { t: "U.S. cases per gyn onc", d: "Annual cases for the selected site divided by identified gyn oncologists, across lower-48 states and DC that publish county case counts.",
    i: "The national benchmark. A state above it has more cases per identified gyn oncologist than the country as a whole.",
    f: ["U.S. ratio = Σ cases ÷ Σ gyn oncologists", "  over lower-48 states + DC with county case data"] },
  sup_mn: { t: "Minnesota cases per gyn onc", d: "Minnesota's annual cases for the selected site divided by gyn oncologists identified with a Minnesota practice location.",
    i: "Compare with the U.S. figure. Higher means each Minnesota gyn oncologist faces more cases than the national average.",
    f: ["Minnesota ratio = Minnesota cases ÷ Minnesota gyn oncologists"] },
  sup_none: { t: "States with no gyn onc found", d: "Lower-48 states and DC where no gyn oncologist appears in Medicare 2024 or NPPES.",
    i: "Patients there must travel out of state, or are treated by specialists registered under another specialty. Some zeros may be registration gaps.",
    f: ["Count of states with 0 identified gyn oncologists"] },
  sup_ids: { t: "Identified gyn oncologists", d: "Unique physicians (NPIs) identified as gyn oncologists, across all states.",
    i: "Each physician counts once here. State totals count a physician once for each state where they practice, so they add up to more.",
    f: ["Count of unique NPIs in", "  Medicare 2024 specialty ∪ NPPES taxonomy 207VX0201X"] },
  sup_ratio: { t: "Annual cases per identified gyn oncologist", d: "Each state's annual cases for the selected site divided by its identified gyn oncologists.",
    i: "Darker states have more cases per identified gyn oncologist, a sign of strain or of under-registration. Grey states publish no county case counts.",
    f: ["State ratio = state cases ÷ state gyn oncologists", "", "Legend breaks: 40, 55, 70, 85"] },
  sup_gyn: { t: "Identified gyn oncologists by state", d: "Unique NPIs with a practice location in the state, from Medicare 2024 claim specialty or NPPES taxonomy 207VX0201X.",
    i: "Raw supply. Large states lead because they are large; use cases per gyn onc to compare strain.",
    f: ["State count = unique NPIs with a practice ZIP in the state", "", "Legend breaks: 5, 10, 25, 50"] },
  sup_cases: { t: "Annual cases by state", d: "Sum of county average annual cases (NCI, 2018–2022) for the selected site.",
    i: "Raw demand. It excludes counties with suppressed counts, so small rural states are understated. Kansas and Connecticut publish none.",
    f: ["State cases = Σ disclosed county average annual counts", "", "Legend breaks: 300, 800, 1,500, 3,000"] },
  sup_region: { t: "Cases per gyn onc by Census region", d: "Pooled ratio of annual cases to identified gyn oncologists for each Census region.",
    i: "A pooled ratio, so large states weigh more than small ones. It is not an average of state ratios. The Midwest is highlighted because Holtzman et al. (2025) found the steepest fall in fellows' hallmark cases there.",
    f: ["Region ratio = Σ cases ÷ Σ gyn oncologists", "  over the region's states with county case data"] },
  sup_table: { t: "State detail", d: "One row per state with the inputs behind the map.",
    i: "Sort by cases per gyn onc to find the most stretched states. A large gap between Gyn oncs and In Medicare file means many identified gyn oncologists don't bill Medicare under that specialty.",
    f: ["Cases/yr = Σ disclosed county average annual counts", "Gyn oncs = unique NPIs practicing in the state (Medicare ∪ NPPES)", "Cases per gyn onc = Cases/yr ÷ Gyn oncs", "In Medicare file = NPIs with Medicare gyn-onc specialty, by practice state", "Medicare Part B = Σ 2024 Medicare payments to those NPIs", "Part D prescribed = Σ Part D gross drug cost, by prescriber state"] },
  // value model
  val_assump: { t: "Your program", d: "The inputs behind every value-model output. Each is labeled with its source: a published benchmark or an assumption you set.",
    i: "Moving one payer slider rebalances the others, so the mix always totals 100%. The complication split prices the index stay across DRGs 736–738. Retention applies only to downstream services.",
    f: ["Payer weight w = payer share ÷ (Medicare + commercial + Medicaid + other)", "Professional index = w_mc + w_com × commercial professional", "  + w_mcd × Medicaid + w_oth", "Hospital index = w_mc + w_com × commercial hospital", "  + w_mcd × Medicaid + w_oth", "No-CC/MCC share = 1 − MCC share − CC share"] },
  val_program: { t: "Year-one value to the health system", d: "Estimated payments to the health system from one year of the program's ovarian-cancer surgical patients, over each patient's first 12 months of care.",
    i: "Gross revenue under your assumptions, not profit and not measured revenue. It sizes how far the program reaches beyond the surgeon's own billing. PJI claims will replace each benchmark with observed payments.",
    f: ["Year-one value = per-patient value × annual patients", "Per-patient value = Σ line items (direct + associated + downstream)"] },
  val_direct: { t: "What wRVUs see", d: "The direct professional tier: the gyn oncologist's own billing for these patients, made up of the new-patient consultation, the debulking surgery fee and follow-up office visits.",
    i: "Roughly what wRVU productivity credits. Compare it with the year-one value to see how much value sits outside the surgeon's billing.",
    f: ["Direct = (consult + surgeon's fee + follow-up visits) × annual patients", "Each line = Medicare national allowed × physician-fee average price"] },
  val_ratio: { t: "For every $1 the gyn oncologist bills", d: "Associated and downstream payments generated for each dollar of the gyn oncologist's professional revenue.",
    i: "$20 means each $1 the surgeon bills goes with $20 more in hospital and downstream payments. It is an association under your assumptions, not a causal return.",
    f: ["Ratio = (associated + downstream) ÷ direct, per patient"] },
  val_index: { t: "Your average price", d: "What your payer mix pays on average relative to Medicare (1.00×), shown separately for hospital care and for physician fees.",
    i: "Above 1 means the mix pays more than Medicare on average, mostly because of the commercial share. Hospital care uses the commercial hospital multiplier and physician fees the commercial professional multiplier, so the two differ.",
    f: ["Hospital care = w_mc × 1 + w_com × commercial hospital multiplier", "  + w_mcd × Medicaid multiplier + w_oth × 1", "Physician fees = w_mc × 1 + w_com × commercial professional multiplier", "  + w_mcd × Medicaid multiplier + w_oth × 1", "w = payer-mix shares (total 100%); other and self-pay priced at Medicare"] },
  val_tiers: { t: "Where each patient's value comes from", d: "One patient's year-one value split three ways: direct professional (the gyn oncologist's billing), associated institutional (the index hospital stay) and downstream program (tests, imaging, chemotherapy and drugs kept in-system).",
    i: "Shows how much value counting only the surgeon's wRVUs would miss. The downstream tier depends heavily on the retention assumption.",
    f: ["Tier value = Σ line items in the tier, per patient", "Tier share = tier value ÷ per-patient total"] },
  val_phase: { t: "Value along the patient journey", d: "The same per-patient value grouped by SGO's three phases of care.",
    i: "Shows when value arises. Phase 2 is mostly the hospital stay; phase 3 grows with bevacizumab and PARP maintenance uptake.",
    f: ["Phase 1 = consult + BRCA test + staging imaging + baseline CA-125", "Phase 2 = surgeon's fee + index stay", "Phase 3 = follow-up visits + chemo + bevacizumab", "  + surveillance CT + CA-125 monitoring + PARP", "All per patient"] },
  val_sens: { t: "Which assumptions matter most", d: "How far the program total moves when one assumption changes and all others stay fixed.",
    i: "Longer bars are the assumptions that matter most, sorted from the top. Check those against local data before presenting the total. The black tick is your current scenario.",
    f: ["Low, high = program total with the assumption moved down, up", "Bar spans min(low, high) to max(low, high)", "", "Moves: commercial hospital multiplier × 0.75 / × 1.25;", "commercial share ±15 pts, offset by Medicare;", "retention, PARP and bevacizumab uptake ±15 pts;", "MCC share ±10 pts, offset by CC. Shares stay within 0–100%."] },
  val_lines: { t: "Line items", d: "Every service in the scenario with its Medicare price, payer adjustment and in-system share.",
    i: "Per patient is what one patient generates for the system in year one. Medicare price comes before payer adjustment and already includes the share of patients who get the service and the number of units.",
    f: ["Per patient = Medicare price × payer adjustment × kept in-system", "Program = per patient × annual patients", "", "Medicare price (2024 national allowed):", "Consult = 99205", "BRCA = 81162 × % tested", "Staging = 74177 + 78815 × % with PET", "Baseline CA-125 = 86304", "Surgeon's fee = 58953 (facility)", "Index stay = DRG 736 × MCC% + 737 × CC% + 738 × rest", "  (average total payment)", "Follow-up visits = 99215 × (visits − 1)", "Chemo = % chemo × cycles", "  × (96413 + J9045 × 15 + J9267 × 300)", "  (750 mg carboplatin, 300 mg paclitaxel)", "Bevacizumab = % bev × doses × J9035 × 105", "Surveillance CT = 74177 × (CT scans − 1)", "CA-125 monitoring = 86304 × (tests − 1)", "PARP = % PARP × months × olaparib cost per claim", "", "Payer adjustment: direct lines use the physician-fee average price,", "PARP 1.00×, the rest the hospital-care average price.", "Kept in-system: direct lines and the stay 100%, PARP the pharmacy", "share, other downstream lines the retention assumption."] },
  // provider footprint
  pf_n: { t: "Gyn oncologists in Medicare", d: "Physicians whose 2024 Medicare claim specialty is gynecologic oncology, in the selected practice state.",
    i: "Smaller than identified gyn oncologists, because it counts only those billing Medicare fee-for-service under that specialty.",
    f: ["Count of NPIs with provider type \"Gynecological Oncology\"", "  in CMS Physician & Other Practitioners 2024"] },
  pf_pay: { t: "Medicare Part B payments", d: "Total 2024 Medicare payments to these physicians. The detail line shows the median per physician.",
    i: "The median is the typical physician. A few practices that bill in-office infusion drugs pull the total up.",
    f: ["Total = Σ Tot_Mdcr_Pymt_Amt", "Median = middle value of per-physician totals"] },
  pf_drug: { t: "In-office drug share", d: "Share of Part B payments that pays for drugs the physician bills directly, such as chemotherapy given in an office infusion suite.",
    i: "A high share means the practice runs its own infusion. When the hospital runs infusion, the drugs bill under the hospital and this share is low.",
    f: ["Drug share = Σ Drug_Mdcr_Pymt_Amt ÷ Σ Tot_Mdcr_Pymt_Amt"] },
  pf_partd: { t: "Part D prescribed", d: "Gross 2024 Part D cost of prescriptions written by these physicians. The detail line shows the PARP inhibitor share.",
    i: "Gross cost is what plans, patients and other payers paid at the pharmacy, before rebates. It becomes health-system revenue only when a system-owned pharmacy fills the prescription.",
    f: ["Part D = Σ Tot_Drug_Cst", "PARP share = Σ cost of olaparib, niraparib, rucaparib ÷ Part D", "  (PARP inhibitors among the top 10 drugs by national cost)"] },
  pf_rural: { t: "Rural practice locations", d: "Share of these physicians whose Medicare practice ZIP is micropolitan, small-town or rural.",
    i: "A low share confirms that subspecialists cluster in metro areas, leaving rural patients to travel.",
    f: ["Rural share = physicians with practice ZIP RUCA ≥ 4 ÷ all physicians"] },
  pf_risk: { t: "Beneficiary risk score", d: "Average CMS-HCC risk score of the Medicare patients these physicians treat, weighted by patient count. The detail line shows the weighted average age.",
    i: "1.00 is the average Medicare beneficiary. Above 1 means sicker patients who are expected to cost more.",
    f: ["Risk = Σ (risk score × beneficiaries) ÷ Σ beneficiaries", "  over physicians with a reported score", "Age is weighted the same way"] },
  pf_hist: { t: "Part B payment per gyn oncologist", d: "Number of physicians in each band of 2024 Medicare Part B payments.",
    i: "Most physicians sit in the lower bands. The long right tail is practices with in-office infusion, where drug payments flow through the physician's billing.",
    f: ["Band count = physicians with total payment in [low, high)"] },
  pf_svc: { t: "Professional service mix", d: "Medicare payments to these physicians by type of service.",
    i: "Shows what gyn oncologists' own billing is made of. It sums to less than total payments because CMS drops service lines with fewer than 11 beneficiaries.",
    f: ["Payment = Σ services × average Medicare payment, per HCPCS line", "Drug flag → drugs; 992xx, G2211 → visits", "963xx, 964xx → chemo administration", "38, 39, 44, 47, 49, 50, 51, 56, 57, 58xxx → surgery", "7xxxx → imaging; 8xxxx → lab; the rest → other"] },
  pf_drugs: { t: "Part D drugs prescribed", d: "Gross 2024 Part D cost by drug for prescriptions written by gyn oncologists.",
    i: "PARP inhibitors and oral targeted drugs dominate. These dollars stay outside the physician's and hospital's billing unless a system pharmacy dispenses them.",
    f: ["Cost = Σ Tot_Drug_Cst by generic name", "The top 10 drugs by national cost are named;", "  the rest are pooled as All other drugs"] },
  pf_benes: { t: "Beneficiaries", d: "Medicare fee-for-service beneficiaries treated, summed across physicians.",
    i: "A patient seen by two gyn oncologists counts twice, so this overstates unique patients.",
    f: ["Beneficiaries = Σ Tot_Benes"] },
  pf_dual: { t: "Dual-eligible", d: "Share of beneficiaries enrolled in both Medicare and Medicaid.",
    i: "A marker of low income and social risk. CMS hides small counts for some physicians, and those count as zero here, so the share is a floor.",
    f: ["Dual share = Σ dual-eligible beneficiaries ÷ Σ beneficiaries"] },
  pf_o75: { t: "Aged 75+", d: "Share of beneficiaries aged 75 or older.",
    i: "Older patients are more often frail, which shapes surgical risk and treatment choices. Hidden small counts count as zero, so the share is a floor.",
    f: ["Share 75+ = Σ (beneficiaries aged 75–84 + aged 85+) ÷ Σ beneficiaries"] },
  // research & quality
  rq_trials: { t: "Recruiting trials by health system", d: "ClinicalTrials.gov studies that are recruiting, match ovarian, endometrial, uterine or cervical cancer, and list a site in each Minnesota health system.",
    i: "A proxy for local research access. A trial with sites in two systems counts for each, so the bars add up to more than the total. The condition match is broad and includes some trials open to many cancer types.",
    f: ["Trials(system) = count of recruiting studies with a Minnesota site", "  whose facility name matches one of the system's names", "Each study counts at most once per system"] },
};
function info(key) {
  const d = INFO[key]; if (!d) return "";
  return '<button type="button" class="info-i" data-info="' + key + '" aria-label="' + esc("About " + d.t + ": definition, interpretation and formula") + '" aria-haspopup="dialog" aria-expanded="false" aria-controls="info-pop"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.5"/><path d="M8 7.4v4.1"/><path d="M8 4.8v.1"/></svg></button>';
}
const h2i = (title, key) => '<div class="h2i"><h2>' + title + "</h2>" + info(key) + "</div>";
const pop = $("#info-pop");
let popFor = null;
function placePop() {
  if (!popFor) return;
  const r = popFor.getBoundingClientRect();
  if (!popFor.isConnected || r.bottom < 0 || r.top > window.innerHeight) { closePop(false); return; }
  const w = pop.offsetWidth, h = pop.offsetHeight, m = 12;
  let top = r.bottom + 6;
  if (top + h > window.innerHeight - m && r.top - h - 6 >= m) top = r.top - h - 6;
  pop.style.left = Math.max(m, Math.min(r.left - 8, window.innerWidth - w - m)) + "px";
  pop.style.top = Math.max(m, Math.min(top, window.innerHeight - h - m)) + "px";
}
function openPop(btn) {
  const d = INFO[btn.dataset.info]; if (!d) return;
  if (popFor) popFor.setAttribute("aria-expanded", "false");
  popFor = btn; btn.setAttribute("aria-expanded", "true");
  pop.innerHTML = '<div class="ip-h"><h3 id="ip-t">' + esc(d.t) + '</h3><button type="button" class="ip-x" aria-label="Close">×</button></div>' +
    '<div><div class="ip-k">Definition</div><p>' + esc(d.d) + "</p></div>" +
    '<div><div class="ip-k">How to interpret</div><p>' + esc(d.i) + "</p></div>" +
    '<div><div class="ip-k">Formula</div><pre>' + esc(d.f.join("\n")) + "</pre></div>";
  pop.hidden = false; tt.hidden = true; pop.scrollTop = 0;
  placePop(); pop.focus({ preventScroll: true });
}
function closePop(refocus) {
  if (!popFor) return;
  const b = popFor; popFor = null; pop.hidden = true; b.setAttribute("aria-expanded", "false");
  if (refocus && b.isConnected) b.focus({ preventScroll: true });
}
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest("[data-info]");
  if (b) { if (popFor === b) closePop(true); else openPop(b); return; }
  if (e.target.closest && e.target.closest(".ip-x")) { closePop(true); return; }
  if (popFor && !pop.contains(e.target)) closePop(false);
});
pop.addEventListener("focusout", (e) => { if (popFor && e.relatedTarget && !pop.contains(e.relatedTarget) && e.relatedTarget !== popFor) closePop(false); });
// Tab past the close button returns to the icon, so keyboard order continues from where the popover opened.
pop.addEventListener("keydown", (e) => { if (e.key === "Tab" && !e.shiftKey && e.target.closest(".ip-x")) { e.preventDefault(); closePop(true); } });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && popFor) closePop(true); });
document.addEventListener("scroll", (e) => { if (popFor && !pop.contains(e.target)) placePop(); }, true);
window.addEventListener("resize", placePop);

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
function kpi(label, value, detail, extra, inf) {
  return '<div class="kpi"><div class="l"><span>' + label + "</span>" + (inf ? info(inf) : "") + '</div><div class="v">' + value + "</div>" + (detail ? '<div class="d">' + detail + "</div>" : "") + (extra || "") + "</div>";
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
    html += '<div class="grp">' + esc(window.SGO_LINKS_GROUP || "SGO workspace") + "</div>" + extra.map((l) => l.theme
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
      kpi("Annual " + siteLabel() + " cases", F.n(cases), geoName + ", disclosed counties", "", "ov_cases") +
      kpi("Identified gyn oncologists", F.n(gyn), "Medicare 2024 claim specialty + NPPES taxonomy", "", "ov_gyn") +
      kpi("Cases per gyn oncologist", gynForRatio ? (casesForRatio / gynForRatio).toFixed(0) : "–", "states with county data", "", "ov_ratio") +
      kpi("Cases beyond 50 miles", F.p(1 - cov50.share), "straight-line, county centroid", "", "ov_beyond50") +
      kpi("Medicare Part B to gyn oncs", F.usd(partB), F.n(provs.length) + " gyn oncs, 2024", "", "ov_partb") +
      kpi("Part D drugs they prescribe", F.usd(partD), "gross cost, all gyn-onc prescribers, 2024", "", "ov_partd") +
    "</div>" +
    '<div class="grid">' +
      '<section class="panel c7"><div class="panel-h">' + h2i("Key insights", "ov_insights") + '<span class="meta">click through to the module</span></div><div class="ins">' +
        insight("", "The hospital earns about " + Math.round(drg737.pay / surg) + "× the surgeon's fee for the same operation", "Medicare 2024: debulking (CPT 58953) averaged " + F.usd0(surg) + " allowed for the surgeon. The ovarian-malignancy surgical stay (DRG 737) averaged " + F.usd0(drg737.pay) + ".", "value", "Open value model") +
        insight("", "Oral cancer drugs gyn oncs prescribe roughly equal all their Medicare professional payments", "Part D gross cost " + F.usd(partDAll) + " vs. Part B payments " + F.usd(sum(DATA.providers.map((p) => p.pay))) + ". PARP inhibitors are " + F.p(parpAll / partDAll, 0) + " of the drug spend.", "providers", "Open provider footprint") +
        insight("opp", "Rural patients live more than twice as far from a gyn oncologist", "Median straight-line distance is 62 miles for rural counties vs. 26 for metro. Crude ovarian mortality-to-incidence ratio is 0.78 rural vs. 0.64 metro (unadjusted).", "access", "Open access & equity") +
        insight("gap", "Public hospital data can't size a program", "Only " + DATA.facts.hosp737_ge11 + " U.S. hospitals report 11+ Medicare FFS discharges in DRG 737. Medicare Advantage and commercial patients are invisible. MarketView and PJI close this gap.", "methods", "Open data & methods") +
        insight("opp", "Research access is a measurable institutional value", DATA.facts.trials_mn_total + " recruiting gyn-cancer trials list a Minnesota site, and community systems take part through NCI networks.", "research", "Open research & quality") +
      "</div></section>" +
      '<section class="panel c5"><div class="panel-h">' + h2i("Distance to nearest gyn oncologist", "ov_map") + '<span class="meta">' + (state.geo === "mn" ? "Minnesota" : "U.S.") + ' counties</span></div><div class="map-wrap" id="ov-map"></div><div id="ov-leg"></div><h2 style="margin:6px 0 0;font-size:var(--fs-md);font-weight:650">Share of ' + siteLabel() + ' cases by distance</h2>' + distBandsHTML() + '<button type="button" class="linkbtn" data-go="access">Run outreach scenarios →</button></section>' +
      '<section class="panel c6"><div class="panel-h">' + h2i("Per-patient payment anchors", "ov_anchors") + '<span class="meta">Medicare 2024, national</span></div>' + icebergHTML() + "</section>" +
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
      '<section class="panel c8"><div class="panel-h"><div class="h2i"><h2 id="acc-title"></h2>' + info("layer_" + state.metric) + '</div><span class="meta">click the map to add an outreach site</span></div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:10px 18px;align-items:center">' +
          '<div class="ctl"><label for="metric-sel">Map layer</label><select id="metric-sel">' +
            [["mi", "Distance to nearest gyn onc"], ["cases", "Annual cases"], ["rate", "Incidence rate (single site)"], ["mir", "Ovarian mortality-to-incidence"], ["pov", "Poverty rate"], ["rural", "Rurality"]].map((m) => '<option value="' + m[0] + '"' + (state.metric === m[0] ? " selected" : "") + ">" + m[1] + "</option>").join("") +
          "</select></div>" +
          '<div class="ctl"><label for="thr">Access threshold</label><input type="range" id="thr" min="20" max="150" step="5" value="' + state.threshold + '"><span class="num mono" id="thr-v">' + state.threshold + " mi</span></div>" +
        "</div>" +
        '<div class="map-wrap" id="acc-map"></div><div id="acc-leg"></div>' +
        (state.metric === "rate" && state.site === "all" ? '<p class="note">Incidence rates are site-specific. Choose ovary, uterus, or cervix in the top bar.</p>' : "") +
        '<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center"><button type="button" class="btn primary" id="best-site">Suggest best next site</button>' + info("acc_best") +
          suggestions.map((s) => '<button type="button" class="btn small" data-sug="' + s[1] + "," + s[2] + "," + s[0] + '">+ ' + s[0] + "</button>").join("") +
          (state.added.length ? '<button type="button" class="btn small" id="clear-sites">Clear ' + state.added.length + " site" + (state.added.length > 1 ? "s" : "") + "</button>" : "") +
        "</div>" +
      "</section>" +
      '<section class="panel c4"><div class="panel-h"><div class="h2i"><h2>Coverage at <span id="cov-thr">' + state.threshold + '</span> miles</h2>' + info("acc_cov") + '</div></div><div class="kpis" id="cov-kpis" style="grid-template-columns:1fr 1fr"></div><div id="cov-curve" class="chart"></div><div class="legend" id="cov-leg"></div></section>' +
      '<section class="panel c6"><div class="panel-h">' + h2i("Largest underserved counties", "acc_under") + '<span class="meta">cases beyond the threshold</span></div><div id="under"></div></section>' +
      '<section class="panel c6"><div class="panel-h">' + h2i("Rural vs. metro", "acc_rural") + '<span class="meta">' + (state.geo === "mn" ? "Minnesota" : "lower 48") + ' counties</span></div><div id="rural"></div><p class="note">Distances are straight-line from county population centroids to gyn-onc practice ZIPs. Drive time (OSRM, already run for Triaggent) is the next step. Mortality-to-incidence ratios are crude and unadjusted, so treat them as hypotheses.</p></section>' +
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
      kpi("Cases within", F.p(now.share), changed ? '<span class="delta up">+' + ((now.share - base.share) * 100).toFixed(1) + " pts vs. today</span>" : "of " + F.n(now.tot) + " per year", "", "acc_within") +
      kpi("Cases beyond", F.n(now.beyond), changed ? '<span class="delta up">' + F.n(base.beyond - now.beyond) + " newly covered</span>" : "per year", "", "acc_beyond") +
      kpi("Counties beyond", F.n(now.nBeyond), changed ? "was " + F.n(base.nBeyond) : "", "", "acc_counties") +
      kpi("Population beyond", F.n(now.popBeyond), "2020 census", "", "acc_pop");
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
    placePop();
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
      kpi("U.S. cases per gyn onc", (usC / usG).toFixed(0), siteLabel() + ", states with county data", "", "sup_us") +
      kpi("Minnesota", mn.ratio ? mn.ratio.toFixed(0) : "–", F.n(mn.cases) + " cases · " + mn.gyn + " gyn oncs", "", "sup_mn") +
      kpi("States with no gyn onc found", F.n(rows.filter((r) => r.gyn === 0).length), "in Medicare or NPPES", "", "sup_none") +
      kpi("Identified gyn oncologists", F.n(DATA.facts.identified_npis), "unique NPIs, all states", "", "sup_ids") +
    "</div>" +
    '<div class="grid">' +
      '<section class="panel c8"><div class="panel-h">' + h2i(M.label, "sup_" + state.supplyMetric) + '<div class="ctl"><label for="sup-m">Show</label><select id="sup-m">' +
        [["ratio", "Cases per gyn onc"], ["gyn", "Gyn oncologists"], ["cases", "Annual cases"]].map((m) => '<option value="' + m[0] + '"' + (state.supplyMetric === m[0] ? " selected" : "") + ">" + m[1] + "</option>").join("") +
      '</select></div></div><div class="map-wrap" id="sup-map"></div><div id="sup-leg"></div></section>' +
      '<section class="panel c4"><div class="panel-h">' + h2i("By Census region", "sup_region") + '<span class="meta">cases per gyn onc</span></div>' + barsHTML(regions, { fmt: (v) => v.toFixed(0) }) +
        '<p class="note">Holtzman et al. (2025) found the steepest drop in hallmark cases per fellow in the Midwest, so it is highlighted here. These ratios use public identity files and partly reflect how completely gyn oncs are registered.</p></section>' +
      '<section class="panel c12"><div class="panel-h">' + h2i("State detail", "sup_table") + '<span class="meta">click a column to sort</span></div>' +
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
  const add = (key, label, short, phase, tier, base, mult, retain, tag) => L.push({ key, label, short, phase, tier, base, mult, retain, per: base * mult * retain, tag });
  add("consult", "New-patient gyn-onc consultation", "First consultation", 1, "Direct", BM.newVisit, prof, 1, "CMS 99205");
  add("brca", "Germline BRCA testing", "BRCA genetic test", 1, "Downstream", BM.brca * sc.pBrca / 100, hosp, inSys, "CMS 81162");
  add("staging", "Staging imaging (CT + PET share)", "Staging CT and PET", 1, "Downstream", BM.ct + BM.pet * sc.petBase / 100, hosp, inSys, "CMS 74177/78815");
  add("ca125b", "Baseline CA-125", "Baseline CA-125", 1, "Downstream", BM.ca125, hosp, inSys, "CMS 86304");
  add("surgeon", "Surgeon's debulking fee", "Surgeon's fee", 2, "Direct", BM.surg, prof, 1, "CMS 58953");
  add("stay", "Index hospital stay (DRG mix)", "Hospital stay", 2, "Associated", BM.drg736 * pMcc + BM.drg737 * pCc + BM.drg738 * pNo, hosp, 1, "CMS DRG 736–738");
  add("visits", "Follow-up gyn-onc visits", "Follow-up visits", 3, "Direct", BM.estVisit * Math.max(0, sc.visits - 1), prof, 1, "CMS 99215");
  add("chemo", "Platinum-taxane chemotherapy (admin + drugs)", "Chemotherapy", 3, "Downstream", sc.pChemo / 100 * sc.cycles * (BM.chemoAdmin + BM.carbo * 15 + BM.pacli * 300), hosp, inSys, "CMS 96413/J9045/J9267");
  add("bev", "Bevacizumab infusions", "Bevacizumab", 3, "Downstream", sc.pBev / 100 * sc.bevDoses * BM.bev10 * 105, hosp, inSys, "CMS J9035");
  add("surv", "Surveillance CT", "Surveillance CT", 3, "Downstream", BM.ct * Math.max(0, sc.ctYear - 1), hosp, inSys, "CMS 74177");
  add("ca125s", "CA-125 monitoring", "CA-125 monitoring", 3, "Downstream", BM.ca125 * Math.max(0, sc.ca125 - 1), hosp, inSys, "CMS 86304");
  add("parp", "PARP maintenance via system pharmacy", "PARP inhibitor", 3, "Downstream", sc.pParp / 100 * sc.parpMonths * BM.parp, 1, sc.pharmShare / 100, "CMS Part D");
  const tiers = { Direct: 0, Associated: 0, Downstream: 0 }, phases = { 1: 0, 2: 0, 3: 0 };
  L.forEach((l) => { tiers[l.tier] += l.per; phases[l.phase] += l.per; });
  const perPatient = tiers.Direct + tiers.Associated + tiers.Downstream;
  return { lines: L, tiers, phases, perPatient, program: perPatient * sc.cases, ratio: tiers.Direct ? (tiers.Associated + tiers.Downstream) / tiers.Direct : null, prof, hosp, w };
}
// Every input the model takes. kind: "bench" = default from a published benchmark, "assume" = our starting assumption,
// "input" = the member's own number. smax narrows the slider; the number box still accepts up to max.
const VM_FIELDS = {
  cases: { label: "Ovarian cancer surgical patients a year", short: "", unit: "patients", step: 1, min: 0, max: 2000, smax: 400, kind: "input", help: "Patients whose ovarian cancer surgery is done by the program's gyn oncologists.", src: "Your number. MarketView supplies facility volumes nationally." },
  mc: { label: "Medicare", short: "Medicare", unit: "%", step: 1, min: 0, max: 100, kind: "assume" },
  com: { label: "Commercial insurance", short: "Commercial", unit: "%", step: 1, min: 0, max: 100, kind: "assume" },
  mcd: { label: "Medicaid", short: "Medicaid", unit: "%", step: 1, min: 0, max: 100, kind: "assume" },
  oth: { label: "Other / self-pay", short: "Other", unit: "%", step: 1, min: 0, max: 100, kind: "assume" },
  comHosp: { label: "Commercial, hospital care", short: "Hospital", unit: "×", step: 0.01, min: 0.5, max: 5, kind: "bench", help: "What commercial plans pay hospitals, as a multiple of Medicare.", src: "RAND Round 5: employers paid 254% of Medicare for hospital services (2022)." },
  comProf: { label: "Commercial, physician fees", short: "Physician", unit: "×", step: 0.01, min: 0.5, max: 4, kind: "assume", help: "What commercial plans pay physicians, as a multiple of Medicare.", src: "CBO (2022) found commercial specialty prices 30–140% above Medicare." },
  mcdMult: { label: "Medicaid, all services", short: "Medicaid", unit: "×", step: 0.01, min: 0.3, max: 1.5, kind: "bench", help: "Medicaid usually pays less than Medicare.", src: "KFF Medicaid-to-Medicare fee index of 0.72 (2019)." },
  inSys: { label: "Chemo, imaging and tests done in-system", short: "Care", unit: "%", step: 1, min: 0, max: 100, kind: "assume", help: "Share of follow-on care your system delivers instead of another provider.", src: "PJI claims will measure this." },
  pharmShare: { label: "PARP prescriptions filled by your pharmacy", short: "PARP fills", unit: "%", step: 1, min: 0, max: 100, kind: "assume", help: "PARP inhibitors are pills, often dispensed by outside specialty pharmacies.", src: "No public benchmark." },
  pChemo: { label: "Patients getting chemotherapy", short: "Chemo", unit: "%", step: 1, min: 0, max: 100, kind: "assume", help: "Carboplatin plus paclitaxel after surgery.", src: "Typical first-line treatment." },
  pParp: { label: "Patients on a PARP inhibitor", short: "PARP", unit: "%", step: 1, min: 0, max: 100, kind: "assume", help: "Daily maintenance pills such as olaparib, mostly for BRCA or HRD-positive tumors.", src: "Depends on tumor genetics." },
  pBev: { label: "Patients getting bevacizumab", short: "Bevacizumab", unit: "%", step: 1, min: 0, max: 100, kind: "assume", help: "An IV drug added to chemotherapy for some patients.", src: "Varies by practice." },
  cycles: { label: "Chemo cycles", short: "Cycles", unit: "cycles", step: 1, min: 0, max: 12, kind: "assume", help: "Per patient who gets chemo. A standard course is six.", src: "Standard course." },
  bevDoses: { label: "Bevacizumab doses", short: "Doses", unit: "doses", step: 1, min: 0, max: 30, kind: "assume", help: "Per patient who gets bevacizumab, in the first year.", src: "Assumed maintenance length." },
  parpMonths: { label: "Months on a PARP inhibitor", short: "Months", unit: "months", step: 1, min: 0, max: 12, kind: "assume", help: "In the first year, per patient who takes one.", src: "Assumed start after chemo." },
  visits: { label: "Gyn-onc office visits", short: "Visits", unit: "visits", step: 1, min: 0, max: 40, kind: "assume", help: "Includes the first consultation.", src: "Assumed visit schedule." },
  ctYear: { label: "CT scans", short: "CT", unit: "scans", step: 1, min: 0, max: 12, kind: "assume", help: "Includes the staging scan.", src: "Assumed surveillance schedule." },
  petBase: { label: "Patients with a staging PET scan", short: "PET", unit: "%", step: 1, min: 0, max: 100, kind: "assume", help: "PET is added to CT for some patients at diagnosis.", src: "Varies by practice." },
  ca125: { label: "CA-125 blood tests", short: "CA-125", unit: "tests", step: 1, min: 0, max: 24, kind: "assume", help: "Tumor-marker tests, including the baseline.", src: "Assumed monitoring schedule." },
  pBrca: { label: "Patients with germline BRCA testing", short: "BRCA", unit: "%", step: 1, min: 0, max: 100, kind: "assume", help: "Tests for inherited BRCA1/2 mutations.", src: "Guidelines recommend testing everyone with ovarian cancer." },
  pMcc: { label: "Stays with a major complication", short: "MCC", unit: "%", step: 0.1, min: 0, max: 100, kind: "bench", help: "Paid at the higher DRG 736 rate.", src: "Medicare 2024 national discharge mix." },
  pCc: { label: "Stays with a complication", short: "CC", unit: "%", step: 0.1, min: 0, max: 100, kind: "bench", help: "Paid at the DRG 737 rate. The rest are paid at DRG 738.", src: "Medicare 2024 national discharge mix." },
};
const VM_GROUPS = [
  { id: "size", q: "How many patients does the program treat?", lead: "Annual ovarian cancer surgical volume. Pick a program type or set your own number.", keys: ["cases"] },
  { id: "payer", q: "Who pays for their care?", lead: "Commercial plans pay more than Medicare and Medicaid pays less. Moving one slider rebalances the others so the mix stays at 100%. Other / self-pay is priced at Medicare rates.", keys: ["mc", "com", "mcd", "oth"] },
  { id: "price", q: "How do other payers' prices compare with Medicare?", lead: "Multipliers on Medicare's 2024 national prices.", keys: ["comHosp", "comProf", "mcdMult"] },
  { id: "keep", q: "How much follow-on care stays in your system?", lead: "Only care your system delivers counts. Patients often get chemo, scans or drugs elsewhere.", keys: ["inSys", "pharmShare"] },
  { id: "tx", q: "What treatment do patients get in year one?", lead: "Defaults describe a typical first year after surgery.", keys: ["pChemo", "pParp", "pBev"], more: ["cycles", "bevDoses", "parpMonths", "visits", "ctYear", "petBase", "ca125", "pBrca"], moreLabel: "Doses, visits, scans and tests" },
  { id: "acuity", q: "How complex are the surgeries?", lead: "Medicare pays more for hospital stays with complications. Defaults match Medicare's 2024 national mix.", keys: ["pMcc", "pCc"] },
];
const VM_PAYERS = ["mc", "com", "mcd", "oth"];
const VM_FLOOR = { mc: 100, com: 0, mcd: 0, oth: 0, inSys: 0, pParp: 0 };
const VM_TIERS = {
  Direct: { color: "var(--s2)", name: "Direct professional", desc: "The gyn oncologist's own fees for the consultation, surgery and follow-up visits. This is the only part wRVUs measure." },
  Associated: { color: "var(--s3)", name: "Associated institutional", desc: "The hospital's payment for the surgical stay, set by Medicare's DRG 736–738 rates." },
  Downstream: { color: "var(--s1)", name: "Downstream program", desc: "Chemotherapy, infusions, imaging, genetic testing and PARP drugs delivered by your system." },
};
const VM_PHASES = [[1, "Consultation & diagnosis", "Before surgery"], [2, "Surgical care", "Surgery and hospital stay"], [3, "Treatment & survivorship", "Rest of the first year"]];
const VM_GLOSSARY = [
  ["SGO", "Society of Gynecologic Oncology, the professional society for gynecologic oncologists. Its members asked for a way to show a program's value beyond physician billing."],
  ["Gynecologic oncologist", "A surgeon who treats cancers of the ovary, uterus and cervix, including complex tumor surgery and chemotherapy."],
  ["wRVU", "Work relative value unit: Medicare's measure of a physician's own work on a service. Hospitals often judge specialists by wRVUs, which leaves out the hospital and downstream revenue they generate."],
  ["Payer mix", "The share of patients covered by Medicare, commercial insurance, Medicaid and other sources. Each pays a different price for the same service."],
  ["Debulking surgery", "Surgery to remove as much ovarian tumor as possible (CPT 58953 in this model). It anchors the patient's first year of care."],
  ["DRG, MCC and CC", "Medicare pays hospitals a set amount per stay by diagnosis-related group. DRGs 736, 737 and 738 cover this surgery with a major complication (MCC), a complication (CC), or neither."],
  ["Platinum-taxane chemotherapy", "The standard chemotherapy after surgery: carboplatin plus paclitaxel, usually six cycles."],
  ["Bevacizumab", "An IV drug that blocks the blood supply tumors grow, added to chemotherapy for some patients."],
  ["PARP inhibitor", "Daily maintenance pills such as olaparib, taken after chemotherapy, mostly by patients with BRCA mutations or HRD-positive tumors."],
  ["CA-125", "A blood test for a tumor marker, used to track response to treatment and watch for recurrence."],
  ["In-system retention", "The share of a patient's follow-on care delivered by the same health system. Care delivered elsewhere earns the system nothing."],
  ["PJI and MarketView", "Licensed LexisNexis data. PJI claims would replace these benchmarks with measured payments; MarketView supplies program volumes nationally."],
];
const VM_HOW = [
  ["Follow one patient through the first year", "The model lists 12 services a typical ovarian cancer patient receives across SGO's three phases of care. The treatment sliders set how many patients get each service and how often."],
  ["Price each service at Medicare rates", "Each service starts at Medicare's 2024 national average payment from CMS public files. The surgical stay blends the three DRG rates by your complication mix."],
  ["Adjust for who pays", "Commercial plans pay more than Medicare and Medicaid pays less. Your payer mix turns the multipliers into one average adjustment for hospital care and one for physician fees. PARP drugs stay at their Part D cost."],
  ["Count only care your system delivers", "The gyn oncologist's fees and the surgical stay count in full. Chemo, imaging and tests count at your in-system share, and PARP drugs at your pharmacy share."],
  ["Sort each service into a tier", "Direct is the gyn oncologist's own billing, associated is the surgical stay, and downstream is the care that follows. Fees billed by other specialists, such as anesthesia and pathology, are left out."],
  ["Multiply by the number of patients", "Adding the lines gives the value of one patient's first year. Multiplying by annual volume gives the program total."],
];
const VM_OUT = [
  "Fees billed by other specialists, such as anesthesia and pathology. The model never credits them to the gyn oncologist.",
  "Care after the first 12 months, including treatment for recurrence.",
  "Readmissions and any hospital stay other than the surgical stay.",
  "Uterine and cervical cancer. This version models ovarian cancer surgery only.",
  "Costs. The result is revenue, not profit; contribution margin needs local cost data.",
  "Your contracted rates. Price multipliers are national averages.",
  "Research, education and access value, which the other modules cover.",
];
const vmDec = (step) => (String(step).split(".")[1] || "").length;
function vmFmt(k, v) {
  const f = VM_FIELDS[k];
  if (f.unit === "%") return (+v.toFixed(vmDec(f.step))) + "%";
  if (f.unit === "×") return v.toFixed(2) + "×";
  return F.n(v) + " " + f.unit;
}
function vmField(k) {
  const f = VM_FIELDS[k], v = state.scen[k], d = SCEN_DEFAULTS[k], smax = f.smax || f.max;
  const defAt = Math.max(0, Math.min(1, (d - f.min) / (smax - f.min)));
  const kind = { bench: ["pub", "Benchmark"], assume: ["scn", "Assumption"], input: ["scn", "Your input"] }[f.kind];
  const tip = "<b>" + kind[1] + "</b>" + (f.src ? "<br>" + esc(f.src) : "") + "<br>Default: " + esc(vmFmt(k, d));
  return '<div class="fld" data-fld="' + k + '">' +
    '<div class="fld-top"><label for="sl-' + k + '">' + esc(f.label) + '</label><span class="fld-val"><input type="number" id="nb-' + k + '" data-k="' + k + '" step="' + f.step + '" min="' + f.min + '" max="' + f.max + '" value="' + v + '" aria-label="' + esc(f.label) + ", " + esc(f.unit) + '"><span class="u">' + esc(f.unit) + "</span></span></div>" +
    '<div class="sl"><i class="def" style="left:calc(9px + (100% - 18px) * ' + defAt.toFixed(4) + ')"></i><input type="range" id="sl-' + k + '" data-k="' + k + '" min="' + f.min + '" max="' + smax + '" step="' + f.step + '" value="' + Math.min(v, smax) + '"></div>' +
    (f.help ? '<div class="fld-help"><span class="chip ' + kind[0] + '" tabindex="0" ' + tipAttr(tip) + ">" + kind[1] + "</span>" + esc(f.help) + "</div>" : "") +
    "</div>";
}
// Spread `rest` over `keys` in proportion to `weights`, as whole numbers that add up exactly.
function vmApportion(keys, weights, rest) {
  const tw = sum(weights);
  const raw = keys.map((_, i) => (tw > 0 ? weights[i] / tw : 1 / keys.length) * rest);
  const out = raw.map(Math.floor);
  let left = Math.round(rest - sum(out));
  raw.map((x, i) => [x - out[i], i]).sort((a, b) => b[0] - a[0]).forEach(([, i]) => { if (left > 0) { out[i]++; left--; } });
  return out;
}
views.value = function (el) {
  const sc = state.scen;
  const lic = state.lic;
  const facOpts = lic ? lic.facilities.filter((f) => f.ov.st === "num") : [];
  if (!state.vmOpen) state.vmOpen = { acuity: false, "tx-more": false };
  if (Math.round(sum(VM_PAYERS.map((k) => sc[k]))) !== 100) {
    const fixed = vmApportion(VM_PAYERS, VM_PAYERS.map((k) => Math.max(0, sc[k])), 100);
    VM_PAYERS.forEach((k, i) => { sc[k] = fixed[i]; });
  }
  const isOpen = (id) => state.vmOpen[id] !== false;
  const group = (g) => '<details class="vm-group" data-open-key="' + g.id + '"' + (isOpen(g.id) ? " open" : "") + ">" +
    '<summary class="vm-q"><h3>' + esc(g.q) + '</h3><span class="lead">' + esc(g.lead) + '</span><span class="cur" id="cur-' + g.id + '"></span></summary>' +
    (g.id === "size" ? '<div class="presets">' + [["Community program", 25], ["Regional hub", 80], ["Referral center", 200]].map((p) => '<button type="button" class="btn small" data-preset="' + p[1] + '">' + p[0] + " · " + p[1] + "</button>").join("") + "</div>" : "") +
    (g.id === "size" && lic ? '<div class="frow"><label for="vol-src">Volume from MarketView</label><select id="vol-src"><option value="user">Manual entry</option>' + facOpts.map((f) => '<option value="' + esc(f.id) + '"' + (state.volSource === f.id ? " selected" : "") + ">" + esc(f.name) + " (" + f.ov.v + ")</option>").join("") + '</select><span class="src">Sample facility counts cover an unspecified period. Suppressed facilities are not listed.</span></div>' : "") +
    (g.id === "payer" ? '<div class="mixbar" id="mix-payer" role="img" aria-label="Payer mix"></div>' : "") +
    (g.id === "acuity" ? '<div class="mixbar acuity" id="mix-acuity" role="img" aria-label="Hospital stays by complication level"></div>' : "") +
    g.keys.map(vmField).join("") +
    (g.id === "price" ? '<div class="readout" id="blend"></div>' : "") +
    (g.more ? '<details class="vm-more" data-open-key="' + g.id + '-more"' + (isOpen(g.id + "-more") ? " open" : "") + "><summary>" + esc(g.moreLabel) + "</summary>" + g.more.map(vmField).join("") + "</details>" : "") +
    "</details>";
  el.innerHTML =
    '<section class="panel"><div class="vm-intro">' +
      '<div><div class="eyebrow">What this model answers</div><h2>What is a gynecologic oncology program worth to its health system?</h2>' +
        "<p>Hospitals usually value a gyn oncologist by wRVUs, a count of the doctor's own billed work. That leaves out most of the revenue the program creates: the surgical hospital stay, chemotherapy, imaging, genetic tests and drugs that follow each patient. This model estimates that full first-year footprint for an ovarian cancer program, starting from Medicare's 2024 national prices.</p><button type=\"button\" class=\"linkbtn\" id=\"vm-how-link\" style=\"margin-top:8px\">See how the model works, step by step</button></div>" +
      '<ol class="vm-steps">' +
        "<li><span><b>Describe your program</b> with the sliders: how many patients, who pays, and how much care stays in your system.</span></li>" +
        "<li><span><b>Read the result.</b> It updates as you drag, split into the gyn oncologist's own billing, the hospital stay and downstream care.</span></li>" +
        "<li><span><b>See what drives it.</b> The sensitivity chart ranks the assumptions that move the total most. Click one to adjust it.</span></li>" +
      "</ol>" +
    "</div></section>" +
    '<div class="banner"><span class="ic">!</span><div><b>Scenario model, not measured revenue.</b> Prices are Medicare 2024 national averages from CMS public files, adjusted by the payer mix and multipliers you set. When PJI claims arrive, observed allowed amounts replace each benchmark line by line. Contribution margin needs local cost data and is not shown.</div></div>' +
    '<div class="grid">' +
      '<section class="panel c4 vm-inputs" id="vm-inputs" aria-label="Scenario inputs"><div class="panel-h">' + h2i("Your program", "val_assump") + '<button type="button" class="btn small" id="scen-reset">Reset defaults</button></div>' +
        '<p class="note" style="margin:0 0 10px">Drag a slider or type a number. The small mark on each slider is the default.</p>' +
        '<div class="vm-start"><span>Stress test:</span><button type="button" class="btn small" id="vm-floor" aria-pressed="false">Medicare-only floor</button></div>' +
        '<form id="scen-form">' + VM_GROUPS.map(group).join("") + "</form>" +
        '<div class="vm-live" id="vm-live" aria-hidden="true"></div>' +
      "</section>" +
      '<div class="c8" style="display:grid;gap:16px;align-content:start">' +
        '<section class="panel vm-hero" id="vm-hero"></section>' +
        '<section class="panel"><div class="panel-h">' + h2i("Where each patient\'s value comes from", "val_tiers") + '<span class="meta">per patient, after payer mix and in-system share</span></div><div class="tiers" id="vm-tiers"></div></section>' +
        '<section class="panel journey"><div class="panel-h">' + h2i("Value along the patient journey", "val_phase") + '<span class="meta">per patient · SGO journey phases</span></div><div id="vm-journey"></div><p class="note" style="margin:0">Modeled from Medicare benchmarks, not observed claims. Bar length compares the three phases.</p></section>' +
        '<section class="panel"><div class="panel-h">' + h2i("Which assumptions matter most", "val_sens") + '<span class="meta">program total, low to high</span></div><div class="tornado" id="vm-sens"></div><p class="note" style="margin:0">Each bar shows the program total when one assumption moves by the stated amount and everything else stays put. The black tick is your current scenario. Click a row to adjust that assumption.</p></section>' +
        '<section class="panel"><div class="panel-h">' + h2i("Line items", "val_lines") + '<span class="meta">every line tagged with its CMS source</span></div><div id="vm-formula"></div><div id="vm-lines"></div></section>' +
        '<section class="panel"><div class="panel-h"><h2>Leadership summary</h2><button type="button" class="btn primary" id="copy-sum">Copy summary</button></div><textarea class="copybox" id="sum-txt" readonly aria-label="Leadership summary text"></textarea><p class="note" id="copy-msg"></p></section>' +
      "</div>" +
      '<section class="panel c12" id="vm-how"><div class="panel-h"><h2>How the model works</h2><span class="meta">six steps, shown with your current scenario</span></div>' +
        '<ol class="how">' + VM_HOW.map((h, i) => '<li><span class="how-n" aria-hidden="true">' + (i + 1) + '</span><div class="how-b"><h3>' + esc(h[0]) + "</h3><p>" + esc(h[1]) + '</p><div class="calc" id="how-' + (i + 1) + '"></div></div></li>').join("") + "</ol>" +
        '<div class="how-cols">' +
          '<div><h3 class="how-h">What the model leaves out</h3><ul class="how-out">' + VM_OUT.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" +
          '<div><h3 class="how-h">Medicare 2024 prices it starts from</h3><div class="tbl-wrap"><table><thead><tr><th scope="col">Code</th><th scope="col">Service</th><th scope="col">Unit</th><th scope="col" class="r">Medicare</th></tr></thead><tbody>' +
            [["99205", "New-patient office visit, high complexity", "visit", BM.newVisit], ["99215", "Follow-up office visit, high complexity", "visit", BM.estVisit], ["58953", "Debulking surgery, surgeon's fee", "surgery", BM.surg],
             ["DRG 736", "Surgical stay with a major complication", "stay", BM.drg736], ["DRG 737", "Surgical stay with a complication", "stay", BM.drg737], ["DRG 738", "Surgical stay with neither", "stay", BM.drg738],
             ["96413", "Chemotherapy infusion, first hour", "session", BM.chemoAdmin], ["J9045", "Carboplatin", "50 mg (15 a cycle)", BM.carbo], ["J9267", "Paclitaxel", "1 mg (300 a cycle)", BM.pacli], ["J9035", "Bevacizumab", "10 mg (105 a dose)", BM.bev10],
             ["74177", "CT, abdomen and pelvis", "scan", BM.ct], ["78815", "PET/CT, skull base to mid-thigh", "scan", BM.pet], ["86304", "CA-125 blood test", "test", BM.ca125], ["81162", "BRCA1/2 genetic test", "test", BM.brca],
             ["Part D", "Olaparib (PARP inhibitor)", "claim, counted as a month", BM.parp]]
              .map((x) => '<tr><td class="mono">' + x[0] + "</td><td>" + x[1] + "</td><td>" + x[2] + '</td><td class="r">' + (x[3] < 10 ? "$" + x[3].toFixed(2) : F.usd0(x[3])) + "</td></tr>").join("") +
          '</tbody></table></div><p class="note" style="margin:6px 0 0">Average Medicare allowed amounts (payment plus patient cost sharing), 2024. Stays use the average total DRG payment; olaparib uses the average Part D gross cost per claim.</p></div>' +
        "</div>" +
        '<p class="note" style="margin:0">With PJI claims, observed allowed amounts would replace each Medicare price, and the in-system share would be measured from where patients actually received care instead of set by a slider.</p>' +
      "</section>" +
      '<section class="panel c12"><div class="panel-h"><h2>Terms on this page</h2></div><dl class="gloss">' + VM_GLOSSARY.map((g) => "<div><dt>" + esc(g[0]) + "</dt><dd>" + esc(g[1]) + "</dd></div>").join("") + "</dl></section>" +
    "</div>";
  const topbar = $(".topbar");
  const setTop = () => document.documentElement.style.setProperty("--topbar-h", topbar.offsetHeight + "px");
  setTop();
  if (!window.__vmResize) { window.__vmResize = true; window.addEventListener("resize", setTop); }

  const changedKeys = () => Object.keys(VM_FIELDS).filter((k) => Math.abs(sc[k] - SCEN_DEFAULTS[k]) > 1e-9);
  const isFloor = () => Object.keys(VM_FLOOR).every((k) => sc[k] === VM_FLOOR[k]);
  const syncFields = (skip) => {
    Object.keys(VM_FIELDS).forEach((k) => {
      const f = VM_FIELDS[k], v = sc[k], smax = f.smax || f.max;
      const sl = $("#sl-" + k), nb = $("#nb-" + k);
      if (sl) {
        if (sl !== skip) sl.value = Math.min(v, smax);
        sl.style.setProperty("--p", ((Math.min(v, smax) - f.min) / (smax - f.min) * 100).toFixed(2) + "%");
        sl.setAttribute("aria-valuetext", vmFmt(k, v).replace("×", " times Medicare"));
      }
      if (nb && nb !== skip) nb.value = v.toFixed(vmDec(f.step));
      const fld = $('[data-fld="' + k + '"]');
      if (fld) fld.classList.toggle("changed", Math.abs(v - SCEN_DEFAULTS[k]) > 1e-9);
    });
  };
  const mixBar = (id, parts, active) => {
    const box = $("#" + id); if (!box) return;
    const W = box.clientWidth, tot = sum(parts.map((p) => p.v)) || 1;
    box.innerHTML = parts.filter((p) => p.v > 0).map((p) => {
      const w = p.v / tot * W, full = p.label + " " + p.txt;
      const txt = full.length * 6.4 + 14 < w ? full : p.txt.length * 6.4 + 10 < w ? p.txt : "";
      return '<div class="' + (p.k === active ? "act" : "") + '" style="flex:' + p.v + '" tabindex="-1" ' + tipAttr("<b>" + esc(p.label) + "</b><br>" + esc(p.txt)) + ">" + esc(txt) + "</div>";
    }).join("");
  };
  let lastKey = null;
  const paint = () => {
    const r = computeScenario(sc);
    const floor = computeScenario(Object.assign({}, sc, VM_FLOOR));
    const changed = changedKeys();
    const T = VM_TIERS, tierKeys = Object.keys(T);

    // input-side readouts
    VM_GROUPS.forEach((g) => { const c = $("#cur-" + g.id); if (c) c.textContent = g.keys.map((k) => (VM_FIELDS[k].short ? VM_FIELDS[k].short + " " : "") + vmFmt(k, sc[k])).join(" · "); });
    mixBar("mix-payer", VM_PAYERS.map((k) => ({ k, label: VM_FIELDS[k].short, v: sc[k], txt: sc[k] + "%" })), VM_PAYERS.includes(lastKey) ? lastKey : null);
    const pM = Math.min(100, sc.pMcc), pC = Math.min(100 - pM, sc.pCc);
    mixBar("mix-acuity", [{ k: "pMcc", label: "MCC", v: pM, txt: +pM.toFixed(1) + "%" }, { k: "pCc", label: "CC", v: pC, txt: +pC.toFixed(1) + "%" }, { k: "none", label: "Neither", v: Math.max(0, 100 - pM - pC), txt: +Math.max(0, 100 - pM - pC).toFixed(1) + "%" }], null);
    $("#blend").innerHTML = "<span>Your average price, hospital care <b>" + r.hosp.toFixed(2) + "×</b> Medicare</span><span class=\"h2i\">physician fees <b>" + r.prof.toFixed(2) + "×</b>" + info("val_index") + "</span>";
    const fb = $("#vm-floor"); fb.classList.toggle("on", isFloor()); fb.setAttribute("aria-pressed", isFloor());

    $("#vm-live").innerHTML = "<span>Year one <b>" + F.usd(r.program) + "</b></span><span><b>" + (r.ratio != null ? "$" + r.ratio.toFixed(1) : "–") + "</b> per $1 billed</span>";

    // headline: the program total, and what wRVUs see of it
    const prog = (k) => r.tiers[k] * sc.cases;
    const seg = (k) => '<i style="flex:' + Math.max(prog(k), 0.0001) + ";background:" + T[k].color + '" ' + tipAttr("<b>" + T[k].name + "</b><br>" + F.usd(prog(k)) + " · " + F.usd0(r.tiers[k]) + " per patient") + "></i>";
    $("#vm-hero").innerHTML =
      '<div class="vm-hero-top">' +
        '<div><div class="eyebrow h2i">Year-one value to the health system' + info("val_program") + '</div><div class="big">' + F.usd(r.program) + '</div><div class="big-sub"><b>' + F.n(sc.cases) + "</b> patients × <b>" + F.usd0(r.perPatient) + "</b> per patient</div></div>" +
        '<div><div class="eyebrow h2i">For every $1 the gyn oncologist bills' + info("val_ratio") + '</div><div class="big md">' + (r.ratio != null ? "$" + r.ratio.toFixed(1) : "–") + '</div><div class="big-sub">of hospital and downstream revenue. Conservative floor: <b>' + (floor.ratio != null ? "$" + floor.ratio.toFixed(1) : "–") + "</b> with Medicare prices and only the hospital stay counted.</div></div>" +
      "</div>" +
      '<div class="cmp">' +
        '<div class="cmp-row"><div class="lb"><span class="h2i">What wRVUs see' + info("val_direct") + '</span><small>The gyn oncologist\'s own billing</small></div><div class="cmp-track">' + seg("Direct") + '<i class="gap" style="flex:' + Math.max(prog("Associated") + prog("Downstream"), 0.0001) + '"></i></div><div class="vl">' + F.usd(prog("Direct")) + "</div></div>" +
        '<div class="cmp-row"><div class="lb">What the program brings in<small>Adds the hospital stay and downstream care</small></div><div class="cmp-track">' + tierKeys.map(seg).join("") + '</div><div class="vl">' + F.usd(r.program) + "</div></div>" +
      "</div>" +
      '<div class="vm-state"><div class="legend" style="margin-right:auto">' + tierKeys.map((k) => '<span><i class="sw" style="background:' + T[k].color + '"></i>' + T[k].name + "</span>").join("") + "</div>" +
        (changed.length ? chip("scn", changed.length + (changed.length === 1 ? " input" : " inputs") + " changed") + '<button type="button" class="linkbtn" data-vm-reset>Reset defaults</button>' : chip("pub", "Default scenario")) + "</div>";

    // tiers
    $("#vm-tiers").innerHTML = tierKeys.map((k) => {
      const share = r.perPatient ? r.tiers[k] / r.perPatient : 0;
      return '<div class="tier"><div class="hd"><i class="sw" style="background:' + T[k].color + '"></i>' + T[k].name + "</div>" +
        '<div class="v">' + F.usd0(r.tiers[k]) + "<small>per patient</small></div>" +
        '<div class="meter"><i style="width:' + (share * 100).toFixed(1) + "%;background:" + T[k].color + '"></i></div>' +
        '<div class="pc">' + F.p(share, 0) + " of the total · " + F.usd(prog(k)) + " a year</div>" +
        "<p>" + T[k].desc + "</p></div>";
    }).join("");

    // journey
    const maxPh = Math.max(1, ...Object.values(r.phases));
    const arrow = '<div class="jarrow" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M3 8h10"/><path d="M9 4l4 4-4 4"/></svg></div>';
    $("#vm-journey").innerHTML = '<div class="jgrid">' + VM_PHASES.map((p, i) => {
      const ls = r.lines.filter((l) => l.phase === p[0]).sort((a, b) => b.per - a.per);
      const byTier = tierKeys.map((k) => [k, sum(ls.filter((l) => l.tier === k).map((l) => l.per))]).filter((t) => t[1] > 0);
      return (i ? arrow : "") + '<div class="jstage"><div class="n">Phase ' + p[0] + " · " + p[2] + "</div><h3>" + p[1] + "</h3>" +
        '<div class="v">' + F.usd0(r.phases[p[0]]) + "<small>" + F.p(r.perPatient ? r.phases[p[0]] / r.perPatient : 0, 0) + "</small></div>" +
        '<div class="jbar" style="width:' + Math.max(1, r.phases[p[0]] / maxPh * 100).toFixed(1) + '%">' + byTier.map((t) => '<i style="flex:' + t[1] + ";background:" + T[t[0]].color + '" ' + tipAttr("<b>" + T[t[0]].name + "</b><br>" + F.usd0(t[1]) + " per patient") + "></i>").join("") + "</div>" +
        '<ul class="jlist">' + ls.map((l) => '<li class="' + (l.per < 0.5 ? "zero" : "") + '"><span><i style="background:' + T[l.tier].color + '"></i>' + esc(l.short) + "</span><span>" + F.usd0(l.per) + "</span></li>").join("") + "</ul></div>";
    }).join("") + "</div>";

    // sensitivity
    $("#vm-sens").innerHTML = sensitivity(sc, r.program);

    // formula + line items
    const ex = r.lines.find((l) => l.key === "chemo" && l.per > 0) || r.lines.slice().sort((a, b) => b.per - a.per)[0];
    const term = (lbl, val, cls) => '<div class="term' + (cls ? " " + cls : "") + '"><small>' + lbl + "</small><b>" + val + "</b></div>";
    const op = (s) => '<span class="op" aria-hidden="true">' + s + "</span>";
    $("#vm-formula").innerHTML = '<p class="note" style="margin:0 0 8px">Every line uses the same formula. Here it is for <b>' + esc(ex.short.toLowerCase()) + "</b>:</p>" +
      '<div class="formula">' + term("Medicare 2024 price", F.usd0(ex.base)) + op("×") + term("Payer adjustment", ex.mult.toFixed(2) + "×") + op("×") + term("Kept in-system", F.p(ex.retain, 0)) + op("=") +
      term("Per patient", F.usd0(ex.per), "res") + '<span class="tail">× ' + F.n(sc.cases) + " patients = <b>" + F.usd(ex.per * sc.cases) + "</b> a year</span></div>";
    const maxPer = Math.max(1, ...r.lines.map((l) => l.per));
    $("#vm-lines").innerHTML = sortable("lines", [
      { k: "label", h: "Service", f: (v, row) => '<span class="svc">' + esc(v) + "<small>" + esc(row.tag) + "</small></span>" },
      { k: "tier", h: "Tier", f: (v) => '<span style="display:inline-flex;gap:6px;align-items:center"><i class="sw" style="background:' + T[v].color + '"></i>' + v + "</span>" },
      { k: "per", h: "Per patient", r: 1, f: (v, row) => '<span class="mini" style="width:' + (v / maxPer * 48).toFixed(1) + "px;background:" + T[row.tier].color + ';margin-right:8px"></span>' + F.usd0(v) },
      { k: "prog", h: "Program", r: 1, f: F.usd },
      { k: "base", h: "Medicare price", r: 1, f: F.usd0 }, { k: "mult", h: "Payer adj.", r: 1, f: (v) => v.toFixed(2) + "×" }, { k: "retain", h: "Kept in-system", r: 1, f: (v) => F.p(v, 0) },
      { k: "phase", h: "Phase", r: 1 },
    ], r.lines.map((l) => Object.assign({}, l, { prog: l.per * sc.cases })), { k: "per", d: -1 });
    // method steps, with this scenario's numbers
    const $c = (v) => (v < 10 ? "$" + v.toFixed(2) : F.usd0(v));
    const pct1 = (v) => +v.toFixed(1) + "%";
    const mixTerms = (comM) => [["mc", 1], ["com", comM], ["mcd", sc.mcdMult], ["oth", 1]].filter((t) => r.w[t[0]] > 0).map((t) => F.p(r.w[t[0]], 0) + " × " + t[1].toFixed(2)).join(" + ");
    const cycle = BM.chemoAdmin + BM.carbo * 15 + BM.pacli * 300;
    const stay = r.lines.find((l) => l.key === "stay");
    const calc = {
      1: ["Chemo " + sc.pChemo + "% × " + sc.cycles + " cycles", "Bevacizumab " + sc.pBev + "% × " + sc.bevDoses + " doses", "PARP " + sc.pParp + "% × " + sc.parpMonths + " months", sc.visits + " visits · " + sc.ctYear + " CT scans · " + sc.ca125 + " CA-125 tests"],
      2: ["Stay = " + $c(BM.drg736) + " × " + pct1(pM) + " + " + $c(BM.drg737) + " × " + pct1(pC) + " + " + $c(BM.drg738) + " × " + pct1(Math.max(0, 100 - pM - pC)) + " = " + $c(stay.base), "Chemo cycle = " + $c(BM.chemoAdmin) + " + 15 × " + $c(BM.carbo) + " + 300 × " + $c(BM.pacli) + " = " + $c(cycle)],
      3: ["Hospital care = " + mixTerms(sc.comHosp) + " = " + r.hosp.toFixed(2) + "×", "Physician fees = " + mixTerms(sc.comProf) + " = " + r.prof.toFixed(2) + "×"],
      4: ["Gyn-onc fees, surgical stay: 100%", "Chemo, imaging, tests: " + sc.inSys + "%", "PARP prescriptions: " + sc.pharmShare + "%"],
      5: ["Direct " + F.usd0(r.tiers.Direct) + " + associated " + F.usd0(r.tiers.Associated), "+ downstream " + F.usd0(r.tiers.Downstream) + " = " + F.usd0(r.perPatient) + " per patient"],
      6: [F.usd0(r.perPatient) + " × " + F.n(sc.cases) + " patients = " + F.usd(r.program) + " a year"],
    };
    Object.keys(calc).forEach((i) => { $("#how-" + i).innerHTML = calc[i].map((x) => "<div>" + esc(x) + "</div>").join(""); });
    $("#sum-txt").value = summaryText(sc, r, floor);
    placePop();
  };
  syncFields(null);
  paint();

  const setField = (k, v, src) => {
    const f = VM_FIELDS[k];
    v = +Math.max(f.min, Math.min(f.max, v)).toFixed(vmDec(f.step));
    if (VM_PAYERS.includes(k)) {
      v = Math.round(v);
      const others = VM_PAYERS.filter((x) => x !== k);
      const fixed = vmApportion(others, others.map((x) => sc[x]), 100 - v);
      others.forEach((x, i) => { sc[x] = fixed[i]; });
      sc[k] = v;
    } else if (k === "pMcc" || k === "pCc") {
      const o = k === "pMcc" ? "pCc" : "pMcc";
      sc[k] = v;
      if (sc[k] + sc[o] > 100) sc[o] = +(100 - sc[k]).toFixed(1);
    } else sc[k] = v;
    if (k === "cases") state.volSource = "user";
    lastKey = k;
    store.set("scen", sc);
    syncFields(src);
    paint();
  };
  const form = $("#scen-form");
  form.addEventListener("submit", (e) => e.preventDefault());
  form.addEventListener("input", (e) => {
    const k = e.target.dataset.k; if (!k || !VM_FIELDS[k]) return;
    const v = parseFloat(e.target.value); if (isNaN(v)) return;
    setField(k, v, e.target);
  });
  form.addEventListener("change", (e) => { if (e.target.type === "number") syncFields(null); });
  form.addEventListener("toggle", (e) => {
    const d = e.target; if (!d.dataset || !d.dataset.openKey) return;
    state.vmOpen[d.dataset.openKey] = d.open;
    if (d.open) paint();
  }, true);
  const reset = () => { state.scen = Object.assign({}, SCEN_DEFAULTS); state.volSource = "user"; store.set("scen", state.scen); render(); };
  $("#scen-reset").addEventListener("click", reset);
  $("#vm-how-link").addEventListener("click", () => { $("#vm-how").scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); });
  $("#vm-hero").addEventListener("click", (e) => { if (e.target.closest("[data-vm-reset]")) reset(); });
  $("#vm-floor").addEventListener("click", () => {
    const src = isFloor() ? SCEN_DEFAULTS : VM_FLOOR;
    Object.keys(VM_FLOOR).forEach((k) => { sc[k] = src[k]; });
    lastKey = null; store.set("scen", sc); syncFields(null); paint();
  });
  $$("[data-preset]").forEach((b) => b.addEventListener("click", () => setField("cases", +b.dataset.preset, null)));
  $("#vm-sens").addEventListener("click", (e) => {
    const b = e.target.closest("[data-focus]"); if (!b) return;
    const k = b.dataset.focus, fld = $('[data-fld="' + k + '"]'); if (!fld) return;
    for (let p = fld.parentElement; p; p = p.parentElement) if (p.tagName === "DETAILS" && !p.open) p.open = true;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    fld.scrollIntoView({ block: "center", behavior: still ? "auto" : "smooth" });
    $("#sl-" + k).focus({ preventScroll: true });
    fld.classList.remove("flash"); void fld.offsetWidth; fld.classList.add("flash");
    setTimeout(() => fld.classList.remove("flash"), 700);
  });
  $("#copy-sum").addEventListener("click", () => {
    const t = $("#sum-txt").value;
    const done = (ok) => { $("#copy-msg").textContent = ok ? "Copied to clipboard." : "Clipboard is blocked here. The text is selected; press Ctrl+C or ⌘C."; if (!ok) { $("#sum-txt").focus(); $("#sum-txt").select(); } };
    try { navigator.clipboard.writeText(t).then(() => done(true), () => done(false)); } catch (e) { done(false); }
  });
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
    ["Commercial hospital prices ±25%", "comHosp", { comHosp: sc.comHosp * 0.75 }, { comHosp: sc.comHosp * 1.25 }],
    ["Commercial share of patients ±15 pts", "com", { com: clamp(sc.com - 15, 0, 100), mc: sc.mc + Math.min(15, sc.com) }, { com: sc.com + Math.min(15, sc.mc), mc: clamp(sc.mc - 15, 0, 100) }],
    ["Care kept in-system ±15 pts", "inSys", { inSys: clamp(sc.inSys - 15, 0, 100) }, { inSys: clamp(sc.inSys + 15, 0, 100) }],
    ["PARP inhibitor use ±15 pts", "pParp", { pParp: clamp(sc.pParp - 15, 0, 100) }, { pParp: clamp(sc.pParp + 15, 0, 100) }],
    ["Bevacizumab use ±15 pts", "pBev", { pBev: clamp(sc.pBev - 15, 0, 100) }, { pBev: clamp(sc.pBev + 15, 0, 100) }],
    ["Major-complication share ±10 pts", "pMcc", { pMcc: clamp(sc.pMcc - 10, 0, 100), pCc: sc.pCc + Math.min(10, sc.pMcc) }, { pMcc: clamp(sc.pMcc + 10, 0, 100), pCc: clamp(sc.pCc - 10, 0, 100) }],
  ].map((r) => { const a = run(r[2]), b = run(r[3]); return { label: r[0], k: r[1], lo: Math.min(a, b), hi: Math.max(a, b) }; });
  rows.sort((a, b) => (b.hi - b.lo) - (a.hi - a.lo));
  const mn = Math.min(base, ...rows.map((r) => r.lo)), mx = Math.max(base, ...rows.map((r) => r.hi)), span = mx - mn || 1;
  const pos = (v) => ((v - mn) / span * 100).toFixed(2) + "%";
  return rows.map((r) => '<button type="button" class="trow" data-focus="' + r.k + '" ' + tipAttr("<b>" + r.label + "</b><br>" + F.usd(r.lo) + " to " + F.usd(r.hi) + "<br>Your scenario: " + F.usd(base)) + '><span class="tl"><span>' + r.label + "</span><small>" + F.usd(r.lo) + " to " + F.usd(r.hi) + '</small></span><span class="ttrack"><span class="trange" style="left:' + pos(r.lo) + ";width:calc(" + pos(r.hi) + " - " + pos(r.lo) + ')"></span><span class="tbase" style="left:' + pos(base) + '"></span></span></button>').join("") +
    '<div class="taxis"><span></span><div><span>' + F.usd(mn) + "</span><span>" + F.usd(mx) + "</span></div></div>";
}
function summaryText(sc, r, floor) {
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
    "Conservative floor (Medicare prices, index hospital stay only): about $" + (floor.ratio || 0).toFixed(1) + " per $1.",
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
      kpi("Gyn oncologists in Medicare", F.n(ps.length), "claim specialty, 2024", "", "pf_n") +
      kpi("Medicare Part B payments", F.usd(tot), "median " + F.usd(median(ps.map((p) => p.pay))) + " per gyn onc", "", "pf_pay") +
      kpi("In-office drug share", tot ? F.p(drug / tot, 0) : "–", F.n(ps.filter((p) => p.drug > 0).length) + " gyn oncs bill Part B drugs", "", "pf_drug") +
      kpi("Part D prescribed", F.usd(pdTot), pdTot ? F.p(parp / pdTot, 0) + " PARP inhibitors" : "", "", "pf_partd") +
      kpi("Rural practice locations", ps.length ? F.p(ruralN / ps.length, 0) : "–", "practice ZIP RUCA 4–10", "", "pf_rural") +
      kpi("Beneficiary risk score", wavg("risk") == null ? "–" : wavg("risk").toFixed(2), "average age " + (wavg("age") == null ? "–" : wavg("age").toFixed(0)), "", "pf_risk") +
    "</div>" +
    '<div class="grid">' +
      '<section class="panel c6"><div class="panel-h">' + h2i("Medicare Part B payment per gyn oncologist", "pf_hist") + '<span class="meta">number of gyn oncs</span></div>' + barsHTML(hist, { fmt: F.n }) + '<p class="note">The long right tail is practices with in-office infusion, where drug payments flow through the physician\'s billing.</p></section>' +
      '<section class="panel c6"><div class="panel-h">' + h2i("Professional service mix", "pf_svc") + '<span class="meta">Medicare payments by service type</span></div>' + barsHTML(svc, { fmt: F.usd }) + '<p class="note">Service-level rows exclude codes billed for fewer than 11 beneficiaries, so these sum to less than total payments.</p></section>' +
      '<section class="panel c7"><div class="panel-h">' + h2i("Part D drugs prescribed by gyn oncologists", "pf_drugs") + '<span class="meta">gross drug cost</span></div>' + barsHTML(dr, { fmt: F.usd }) + '<p class="note">Gross cost includes plan and patient payments. It becomes health-system revenue only when a system-owned specialty pharmacy dispenses the drug.</p></section>' +
      '<section class="panel c5"><div class="panel-h"><h2>Who gyn oncologists treat</h2><span class="meta">Medicare beneficiaries</span></div><div class="kpis" style="grid-template-columns:1fr 1fr">' +
        kpi("Beneficiaries", F.n(benes), "summed across providers", "", "pf_benes") +
        kpi("Dual-eligible", benes ? F.p(sum(ps.map((p) => p.dual)) / benes, 0) : "–", "Medicare + Medicaid", "", "pf_dual") +
        kpi("Aged 75+", benes ? F.p(sum(ps.map((p) => p.o75)) / benes, 0) : "–", "of beneficiaries", "", "pf_o75") +
        kpi("Avg. HCC risk", wavg("risk") == null ? "–" : wavg("risk").toFixed(2), "1.0 = average beneficiary", "", "pf_risk") +
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
      '<section class="panel c6"><div class="panel-h">' + h2i("Recruiting gyn-cancer trials with a Minnesota site", "rq_trials") + '<span class="meta">by health system</span></div>' +
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

// @@LICENSED_BEGIN (removed from the public build)
// ------------------------------------------------------------ licensed atlas
function specGroup(p) {
  if (p.gyn_any) return "Gyn oncologist";
  const s = ((p.sp1 || "") + " " + (p.sp2 || "")).toLowerCase();
  if (/surgery|urolog|colon|rectal|obstetric|gynec/.test(s)) return "Other surgeon / OB-GYN";
  return "Other specialty";
}
const SPEC_COLORS = { "Gyn oncologist": "var(--s1)", "Other surgeon / OB-GYN": "var(--s2)", "Other specialty": "var(--s3)" };
Object.assign(INFO, {
  at_hosp: { t: "Hospitals", d: "Hospitals in the MarketView extract, split by whether the selected cohort's count is disclosed or suppressed (*).",
    i: "Suppressed hospitals had activity too small to publish. They stay unknown and are never filled in.",
    f: ["Hospitals = count of facility records", "Disclosed = cohort cell is a number; suppressed = cohort cell is *"] },
  at_visible: { t: "Visible facility count", d: "Sum of the disclosed hospital counts for the selected cohort.",
    i: "Not unique patients: a patient can appear at more than one hospital, suppressed hospitals add nothing, and the period is unspecified. Use it to compare hospitals, not to size the market.",
    f: ["Visible count = Σ facility cohort count where the cell is disclosed"] },
  at_pract: { t: "Practitioners", d: "Practitioners in the extract. The detail line counts those labeled gynecologic oncology in either specialty field, and in the primary field.",
    i: "The labels come from MarketView and may not match board certification.",
    f: ["Gyn-onc labeled = specialty 1 or 2 contains \"gynecologic\"", "Primary = specialty 1 contains \"gynecologic\""] },
  at_match: { t: "Matched to Medicare gyn-onc file", d: "Gyn-onc labeled practitioners whose NPI also appears in the public CMS 2024 gyn-onc provider file.",
    i: "A cross-check on labels. A low match means MarketView and Medicare disagree on who is a gyn oncologist, or those physicians don't bill Medicare fee-for-service.",
    f: ["Matched = gyn-onc labeled practitioners with NPI in the Medicare file", "Shown as matched / gyn-onc labeled"] },
  at_multi: { t: "Multi-site practitioners", d: "Practitioners linked to two or more hospitals in the extract.",
    i: "Shows visiting and multi-campus surgeons. Links are affiliations, not referrals.",
    f: ["Count of practitioners with more than one practitioner–hospital link"] },
  at_flags: { t: "Coverage flags", d: "Hospitals with recorded cohort activity but no linked gyn-onc labeled practitioner active in that cohort.",
    i: "A lead to check, not a finding. Possible reasons: a visiting surgeon, general surgeons operating, or a labeling gap. Validate with SGO before sharing.",
    f: ["Flag if the hospital's cohort cell is disclosed or suppressed", "  and gyn oncologists among its active linked practitioners = 0", "Active link = the link's cohort cell is disclosed or suppressed"] },
  at_map: { t: "Hospitals in the extract", d: "Hospital locations sized by disclosed cohort count, with public gyn-onc practice ZIPs for context.",
    i: "Bigger bubbles mean more disclosed patients. Dashed rings are hospitals with suppressed counts, drawn at a fixed size because their volume is unknown.",
    f: ["Radius = square-root scale of count, 2.5 to 14 px", "  (bubble area grows with count)"] },
  at_team: { t: "Care-team composition", d: "Practitioners linked to each hospital whose link shows activity in the selected cohort, grouped by specialty.",
    i: "Shows which specialties each program draws in. Other specialties are the associated care team; their revenue is not credited to gyn oncology.",
    f: ["Team = practitioners with an active link to the hospital", "Gyn oncologist = gyn-onc label", "Other surgeon / OB-GYN = specialty mentions surgery, urology,", "  colon, rectal, obstetric or gynec", "Other specialty = everyone else"] },
  at_table: { t: "Hospital detail", d: "One row per hospital for the selected cohort.",
    i: "Sort by Gyn oncs to find coverage flags, or by Nearest gyn-onc ZIP to see how isolated each hospital is.",
    f: ["Patients = cohort count (disclosed, * suppressed, or not reported)", "Decile = MarketView rank decile; its universe is undocumented", "Linked team = practitioners with an active link", "Gyn oncs = gyn-onc labeled among them", "Nearest gyn-onc ZIP = haversine miles to the nearest public practice ZIP"] },
});
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
      kpi("Hospitals", F.n(lic.facilities.length), nNum + " disclosed · " + nSup + " suppressed", "", "at_hosp") +
      kpi("Visible facility count", F.n(visible), "sum of disclosed cells, not unique patients", "", "at_visible") +
      kpi("Practitioners", F.n(lic.practitioners.length), F.n(gynAny.length) + " gyn-onc labeled (" + lic.practitioners.filter((p) => p.gyn_pri).length + " primary)", "", "at_pract") +
      kpi("Matched to Medicare gyn-onc file", F.n(gynAny.filter((p) => p.medicare_gynonc).length) + " / " + gynAny.length, "by NPI, public CMS 2024", "", "at_match") +
      kpi("Multi-site practitioners", F.n(multi), "linked to 2+ hospitals", "", "at_multi") +
      kpi("Coverage flags", F.n(flags.length), "activity, no gyn onc linked", "", "at_flags") +
    "</div>" +
    '<div class="grid">' +
      '<section class="panel c5"><div class="panel-h">' + h2i("Hospitals in the extract", "at_map") + '<span class="meta">bubble = disclosed count; dashed = suppressed</span></div><div class="map-wrap" id="lic-map"></div><div class="legend"><span><i class="sw" style="background:var(--s1)"></i>Disclosed count</span><span><i class="sw" style="background:transparent;box-shadow:inset 0 0 0 2px var(--s2)"></i>Suppressed</span><span><i class="sw" style="background:var(--map-site);border-radius:50%"></i>Public gyn-onc practice ZIP</span></div></section>' +
      '<section class="panel c7"><div class="panel-h">' + h2i("Care-team composition", "at_team") + '<span class="meta">linked practitioners active in the cohort</span></div>' +
        '<div class="legend">' + Object.keys(SPEC_COLORS).map((k) => '<span><i class="sw" style="background:' + SPEC_COLORS[k] + '"></i>' + k + "</span>").join("") + "</div>" +
        '<div class="bars">' + facRows.filter((r) => r.team > 0).sort((a, b) => b.team - a.team).map((r) => '<div class="bar"><div class="bm"><span class="lb">' + esc(r.name) + '</span><span class="vl">' + r.team + "</span></div>" +
          '<div class="stack" style="height:12px">' + Object.keys(SPEC_COLORS).map((k) => { const n = r.groups.get(k) || 0; return n ? '<div tabindex="0" style="flex:' + n + ";background:" + SPEC_COLORS[k] + '" ' + tipAttr("<b>" + esc(r.name) + "</b><br>" + k + ": " + n) + "></div>" : ""; }).join("") + "</div></div>").join("") + "</div>" +
        '<p class="note">Shown as the associated care team. SGO does not want other specialties\' professional revenue credited to gyn oncology.</p></section>' +
      '<section class="panel c12"><div class="panel-h">' + h2i("Hospital detail", "at_table") + '<span class="meta">click a row for linked practitioners</span></div>' +
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

// @@LICENSED_END
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
  tt.hidden = true; closePop(false);
  const el = $("#view");
  views[state.view](el);
}
const h0 = (location.hash || "").replace("#", "");
if (TITLES[h0]) state.view = h0;
window.addEventListener("hashchange", () => { const h = location.hash.replace("#", ""); if (TITLES[h] && h !== state.view) { state.view = h; render(); } });
render();
})();
