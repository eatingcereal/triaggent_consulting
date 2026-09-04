<?php
declare(strict_types=1);

require __DIR__ . '/auth.php';
sgo_boot();
sgo_headers();

$err = (string) ($_GET['e'] ?? '');
$logged = sgo_logged_in();
$v = static function (string $rel): string {
    $path = __DIR__ . '/' . $rel;
    $t = is_file($path) ? (string) filemtime($path) : '1';
    return htmlspecialchars($rel . '?v=' . $t, ENT_QUOTES, 'UTF-8');
};
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="color-scheme" content="light dark">
  <title><?php echo $logged ? 'SGO Market Atlas' : 'Sign in — SGO Market Atlas'; ?></title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%234f46e5'/%3E%3Cpath d='M16 7 L25 25 L7 25 Z' fill='none' stroke='white' stroke-width='2' stroke-linejoin='round' opacity='.55'/%3E%3Ccircle cx='16' cy='17' r='3' fill='white'/%3E%3C/svg%3E">
  <script>
    (function () {
      try {
        var t = localStorage.getItem('sgo-theme');
        if (t !== 'light' && t !== 'dark') {
          t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', t);
      } catch (e) {}
    })();
  </script>
  <link rel="stylesheet" href="<?php echo $v('css/app.css'); ?>">
  <?php if ($logged): ?>
  <link rel="stylesheet" href="<?php echo $v('js/vendor/leaflet.css'); ?>">
  <?php endif; ?>
</head>
<body class="<?php echo $logged ? 'app' : ''; ?>">
<?php if (!$logged): ?>
  <div class="login-wrap">
    <form class="login-card" method="post" action="login.php" autocomplete="off">
      <div class="mark" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path d="M16 5 L27 26 L5 26 Z" stroke="white" stroke-width="1.8" stroke-linejoin="round" opacity=".55"/>
          <circle cx="16" cy="16" r="3.2" fill="white"/>
        </svg>
      </div>
      <h1>SGO Economic Value Prototype</h1>
      <p>Confidential MarketView atlas for the BData / SGO working group. Enter the shared password to continue.</p>
      <?php if ($err === '1'): ?>
        <div class="err">That password did not match. Access was not granted.</div>
      <?php elseif ($err === 'rate'): ?>
        <div class="err">Too many attempts from this network. Wait a few minutes and try again.</div>
      <?php endif; ?>
      <label for="password">Password</label>
      <input id="password" name="password" type="password" required autofocus autocomplete="current-password">
      <button type="submit">Open dashboard</button>
      <p class="fine">Unsuccessful sign-in does not load data, schema, or files. Session expires after four idle hours.</p>
    </form>
  </div>
<?php else: ?>
  <aside class="sidebar">
    <div class="brand">
      <div class="mark" aria-hidden="true">
        <svg width="19" height="19" viewBox="0 0 32 32" fill="none">
          <path d="M16 5 L27 26 L5 26 Z" stroke="white" stroke-width="1.8" stroke-linejoin="round" opacity=".55"/>
          <circle cx="16" cy="16" r="3.2" fill="white"/>
        </svg>
      </div>
      <div>
        <div class="brand-name">SGO Market Atlas</div>
        <div class="brand-sub">GynOnc · MarketView</div>
      </div>
    </div>
    <nav class="nav" aria-label="Views">
      <div class="nav-label">Brief</div>
      <button class="tab active" type="button" data-view="summary">
        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h11l3 3v13H5z"/><path d="M8 10h8M8 14h8M8 18h5"/></svg>Summary</button>
      <button class="tab" type="button" data-view="opportunity">
        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>Opportunity</button>
      <div class="nav-label">Explore</div>
      <button class="tab" type="button" data-view="overview">
        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>Overview</button>
      <button class="tab" type="button" data-view="facilities">
        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 21V5l7-2 7 2v16"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4"/></svg>Facilities</button>
      <button class="tab" type="button" data-view="practitioners">
        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/></svg>Practitioners</button>
      <button class="tab" type="button" data-view="access">
        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>Access context</button>
      <div class="nav-label">Rigor</div>
      <button class="tab" type="button" data-view="trust">
        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9.5 12l1.8 1.8 3.4-3.6"/></svg>Data trust</button>
      <button class="tab" type="button" data-view="phenotype">
        <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3v6l-4 8a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-4-8V3"/><path d="M8 3h8M8 13h8"/></svg>Phenotype &amp; methods</button>
    </nav>
    <div class="sidebar-foot">
      <button class="icon-btn" id="theme-toggle" type="button" aria-label="Toggle theme"><span class="lbl">Theme</span></button>
      <a class="icon-btn" href="logout.php">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3"/><path d="M10 8l-4 4 4 4M6 12h9"/></svg><span class="lbl">Sign out</span></a>
    </div>
  </aside>
  <div class="content">
    <header class="topbar">
      <div class="title-wrap">
        <h1 id="view-title">Summary</h1>
        <div class="sub" id="view-sub">Minnesota MarketView sample · Layer 1 feasibility · not a revenue model</div>
      </div>
      <div class="spacer"></div>
      <div class="filters">
        <div>
          <label for="cohort">Cohort</label>
          <select id="cohort">
            <option value="ovarian">Ovarian debulking</option>
            <option value="radical">Radical hysterectomy</option>
          </select>
        </div>
        <div>
          <label for="system">Health system</label>
          <select id="system">
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
          <label for="gynonc">Gyn-onc label</label>
          <select id="gynonc">
            <option value="all">All practitioners</option>
            <option value="primary">Primary gyn-onc</option>
            <option value="any">Gyn-onc any specialty</option>
            <option value="neither">Not labeled gyn-onc</option>
          </select>
        </div>
      </div>
    </header>
    <div class="banner" id="banner"></div>
    <main class="main">
      <div id="overview-panels" class="hidden">
        <div class="kpis" id="kpi-row"></div>
        <div class="grid-2">
          <div class="card">
            <h2>Hospital locations</h2>
            <div id="map"></div>
          </div>
          <div class="card">
            <h2>Unsuppressed volume</h2>
            <div class="chart-box"><canvas id="volChart"></canvas></div>
          </div>
        </div>
        <div class="card" style="margin-top:14px">
          <h2>Specialty mix in the extract</h2>
          <div class="chart-box" style="height:280px"><canvas id="specChart"></canvas></div>
        </div>
      </div>
      <div id="table-wrap"></div>
    </main>
  </div>
  <div class="drawer-back" id="drawer-back"></div>
  <aside class="drawer" id="drawer"></aside>
  <script src="<?php echo $v('js/vendor/chart.umd.min.js'); ?>"></script>
  <script src="<?php echo $v('js/vendor/leaflet.js'); ?>"></script>
  <script src="<?php echo $v('js/app.js'); ?>"></script>
<?php endif; ?>
</body>
</html>
