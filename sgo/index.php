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
  <title><?php echo $logged ? 'SGO Market Atlas' : 'Sign in — SGO Market Atlas'; ?></title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%234f46e5'/%3E%3C/svg%3E">
  <link rel="stylesheet" href="<?php echo $v('css/app.css'); ?>">
  <?php if ($logged): ?>
  <link rel="stylesheet" href="<?php echo $v('js/vendor/leaflet.css'); ?>">
  <?php endif; ?>
</head>
<body>
<?php if (!$logged): ?>
  <div class="login-wrap">
    <form class="login-card" method="post" action="login.php" autocomplete="off">
      <div class="mark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <path d="M16 5 L27 26 L5 26 Z" stroke="white" stroke-width="1.7" stroke-linejoin="round" opacity=".5"/>
          <circle cx="16" cy="16" r="3" fill="white"/>
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
  <header class="app-header">
    <div class="mark" style="margin:0" aria-hidden="true"></div>
    <div>
      <h1>SGO GynOnc Market Atlas</h1>
      <div class="sub">Minnesota MarketView sample · Layer 1 feasibility · not a revenue model</div>
    </div>
    <div class="spacer"></div>
    <a class="btn ghost" href="logout.php">Sign out</a>
  </header>
  <div class="banner" id="banner"></div>
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
  <nav class="tabs">
    <button class="tab active" type="button" data-view="summary">Summary</button>
    <button class="tab" type="button" data-view="opportunity">Opportunity</button>
    <button class="tab" type="button" data-view="overview">Overview</button>
    <button class="tab" type="button" data-view="facilities">Facilities</button>
    <button class="tab" type="button" data-view="practitioners">Practitioners</button>
    <button class="tab" type="button" data-view="access">Access context</button>
    <button class="tab" type="button" data-view="trust">Data trust</button>
    <button class="tab" type="button" data-view="phenotype">Phenotype &amp; methods</button>
  </nav>
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
      <div class="card" style="margin-top:12px">
        <h2>Specialty mix in the extract</h2>
        <div class="chart-box" style="height:280px"><canvas id="specChart"></canvas></div>
      </div>
    </div>
    <div id="table-wrap"></div>
  </main>
  <div class="drawer-back" id="drawer-back"></div>
  <aside class="drawer" id="drawer"></aside>
  <script src="<?php echo $v('js/vendor/chart.umd.min.js'); ?>"></script>
  <script src="<?php echo $v('js/vendor/leaflet.js'); ?>"></script>
  <script src="<?php echo $v('js/app.js'); ?>"></script>
<?php endif; ?>
</body>
</html>
