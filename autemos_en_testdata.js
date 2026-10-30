window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "testdata-overview": `
  <span class="section-label">Getting Started</span>
  <h1>Test Data Management</h1>
  <p>The <strong>Test Data Management module</strong> enables centralized management, provisioning, and reuse of test data within the platform. It ensures that Test Workflows can access consistent, dynamic, and reproducible test data at any time — regardless of whether the data comes from APIs, databases, files, or internal datasets.</p>
  <div class="screenshot-wrap">
    <img alt="Test Data Management overview" src="./autemos_testdata_screenshot/image_1.png"/>
    <div class="screenshot-caption">Test Data Management — central management of all test data sources, bindings, and datasets.</div>
  </div>
  <h2>The Module Supports</h2>
  <ul class="feature-list">
    <li>Central data sources</li>
    <li>Reusable datasets</li>
    <li>Runtime bindings</li>
    <li>Asynchronous data persistence</li>
    <li>Scope-based data handling</li>
    <li>Dynamic test data provisioning</li>
  </ul>
  <div class="tip"><span class="tip-icon">💡</span>Test data is a core component of stable and scalable test automation.</div>
  <h2>Module Goals</h2>
  <ul class="feature-list">
    <li>Manage test data centrally</li>
    <li>Avoid redundant data definitions</li>
    <li>Reuse data across workflows</li>
    <li>Connect dynamic data sources</li>
    <li>Support asynchronous test executions</li>
    <li>Ensure reproducible tests</li>
    <li>Model complex enterprise test data flows</li>
  </ul>
  <h2>Main Areas</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Area</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Overview</strong></td><td>Status and runtime overview</td></tr>
        <tr><td><strong>Data Sources</strong></td><td>Management of external data sources</td></tr>
        <tr><td><strong>Variables</strong></td><td>Test data bindings and variables</td></tr>
        <tr><td><strong>Settings</strong></td><td>Adapter and database configuration</td></tr>
      </tbody>
    </table>
  </div>
`,
  "testdata-dashboard": `
  <span class="section-label">Status</span>
  <h1>Overview Dashboard</h1>
  <p>The <strong>Overview Dashboard</strong> shows the current state of the test data infrastructure — adapter status, active data sources, cache, and runtime states at a glance.</p>
  <div class="screenshot-wrap">
    <img alt="Overview Dashboard" src="./autemos_testdata_screenshot/image_16.png"/>
    <div class="screenshot-caption">Overview Dashboard — live status of all test data components and connections.</div>
  </div>
  <h2>Included Information</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Adapter Status</h3><p>Availability of all data adapters.</p></div>
    <div class="concept-card"><h3>Active Data Sources</h3><p>Which sources are currently connected.</p></div>
    <div class="concept-card"><h3>Cache Information</h3><p>Cache usage and utilization.</p></div>
    <div class="concept-card"><h3>Scope Usage</h3><p>Active scopes per Run / Project / Tenant.</p></div>
    <div class="concept-card"><h3>Auto-Refresh Status</h3><p>Configuration of automatic refreshes.</p></div>
    <div class="concept-card"><h3>Runtime States</h3><p>Active bindings and runtime variables.</p></div>
  </div>
  <h2>Helps To</h2>
  <ul class="feature-list">
    <li>Quickly identify connection issues</li>
    <li>Monitor active data bindings</li>
    <li>Analyze cache usage</li>
    <li>Inspect runtime data states</li>
  </ul>
`,
  "testdata-sources": `
  <span class="section-label">Data Sources</span>
  <h1>Data Sources</h1>
  <p>In the <strong>Data Sources</strong> area, external and internal data sources are managed. Each data source can be reused across multiple Test Workflows.</p>
  <div class="screenshot-wrap">
    <img alt="Data Sources" src="./autemos_testdata_screenshot/image_2.png"/>
    <div class="screenshot-caption">Data Sources — management of all configured data sources and adapters.</div>
  </div>
  <h2>Supported Source Types</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>REST API</h3><p>HTTP-based data queries.</p></div>
    <div class="concept-card"><h3>JSON File</h3><p>Structured JSON data sources.</p></div>
    <div class="concept-card"><h3>Excel</h3><p>XLSX-based datasets.</p></div>
    <div class="concept-card"><h3>Database</h3><p>JDBC / PostgREST connections.</p></div>
    <div class="concept-card"><h3>iSynth</h3><p>iSynth sources for synthetic test data.</p></div>
  </div>
  <h2>Named Data Sources</h2>
  <p>Named Data Sources define reusable data source configurations — e.g. <code>testdata_users</code>, <code>api_orders</code>, <code>customer_data</code>, <code>product_catalog</code>.</p>
  <div class="screenshot-wrap">
    <img alt="Named Data Sources" src="./autemos_testdata_screenshot/image_3.png"/>
    <div class="screenshot-caption">Named Data Sources — reusable data sources.</div>
  </div>
  <p>A data source contains:</p>
  <ul class="feature-list">
    <li>Source Type</li>
    <li>Connection information</li>
    <li>Authentication</li>
    <li>Retry configuration</li>
    <li>Timeout configuration</li>
    <li>Path Templates</li>
  </ul>
  <div class="tip"><span class="tip-icon">💡</span>Named Data Sources enable central reuse and simplified maintenance.</div>
  <h2>REST API Data Sources</h2>
  <p>REST APIs can be used directly as test data sources — e.g. for customer data, product data, or session tokens.</p>
  <div class="screenshot-wrap">
    <img alt="REST API Data Sources" src="./autemos_testdata_screenshot/image_6.png"/>
    <div class="screenshot-caption">REST API Data Sources — direct access to APIs for dynamic test data.</div>
  </div>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Base URL</strong></td><td>API endpoint</td></tr>
        <tr><td><strong>Authentication</strong></td><td>Token, Basic Auth, OAuth</td></tr>
        <tr><td><strong>Timeout</strong></td><td>Maximum wait time</td></tr>
        <tr><td><strong>Retry Handling</strong></td><td>Retry logic on errors</td></tr>
        <tr><td><strong>Health Path</strong></td><td>Health check endpoint</td></tr>
        <tr><td><strong>Path Templates</strong></td><td>Dynamic URL paths</td></tr>
      </tbody>
    </table>
  </div>
  <h2>iSynth Integration</h2>
  <p>The module supports <strong>iSynth-based test data sources</strong> for synthetic test data generation.</p>
  <div class="screenshot-wrap">
    <img alt="iSynth Integration" src="./autemos_testdata_screenshot/image_7.png"/>
    <div class="screenshot-caption">iSynth Integration — synthetic test data and dynamic data provisioning.</div>
  </div>
  <h3>Supported Capabilities</h3>
  <ul class="feature-list">
    <li>Synthetic test data generation</li>
    <li>Dynamic runtime data provisioning</li>
    <li>Temporary dataset creation</li>
    <li>Tenant-aware data isolation</li>
  </ul>
  <h3>Configurable Parameters</h3>
  <ul class="feature-list">
    <li>Base URL</li>
    <li>Authentication</li>
    <li>API Keys</li>
    <li>Timeout</li>
    <li>Retry configuration</li>
    <li>Path Templates</li>
    <li>TTL (Time-to-Live)</li>
  </ul>
  <p>This allows the following to be integrated directly into the platform:</p>
  <ul class="feature-list">
    <li>Synthetic customer generation</li>
    <li>Scalable enterprise test data</li>
    <li>Privacy-safe test automation</li>
    <li>Dynamic CI/CD test data provisioning</li>
    <li>Parallel execution with isolated datasets</li>
  </ul>
  <h2>Database Connections</h2>
  <p>The module supports database-based test data sources via <strong>JDBC</strong> or <strong>PostgREST</strong>. This allows existing test databases, data pools, and central test data repositories to be used directly.</p>
  <div class="screenshot-wrap">
    <img alt="Database connections" src="./autemos_testdata_screenshot/image_8.png"/>
    <div class="screenshot-caption">Database Connections — JDBC / PostgREST configuration.</div>
  </div>
  <div class="screenshot-wrap">
    <img alt="Database details" src="./autemos_testdata_screenshot/image_9.png"/>
    <div class="screenshot-caption">Database details — table mapping and data retrieval.</div>
  </div>
  <h3>Configurable Parameters</h3>
  <ul class="feature-list">
    <li>Table name</li>
    <li>Schema</li>
    <li>Data Type Column</li>
    <li>API Keys</li>
    <li>Maximum records</li>
  </ul>
`,
  "testdata-bindings": `
  <span class="section-label">Bindings</span>
  <h1>Test Data Bindings</h1>
  <p>Bindings connect workflows with data sources. A binding defines <strong>which data is loaded</strong>, <strong>from which source</strong>, <strong>under what name</strong>, and <strong>for which environment</strong>.</p>
  <div class="screenshot-wrap">
    <img alt="Test Data Bindings" src="./autemos_testdata_screenshot/image_10.png"/>
    <div class="screenshot-caption">Test Data Bindings — linking workflows with data sources.</div>
  </div>
  <h2>Example Binding</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td><strong>Binding Name</strong></td><td><code>premiumCustomer</code></td></tr>
        <tr><td><strong>Source</strong></td><td><code>customer_api</code></td></tr>
        <tr><td><strong>Data Type</strong></td><td><code>CUSTOMER</code></td></tr>
      </tbody>
    </table>
  </div>
  <h3>Usage in Workflow</h3>
  <pre style="background:#0F121A;border:1px solid #2A2E3A;border-radius:8px;padding:12px;color:#C4C9D6;font-size:13px;overflow-x:auto"><code>&dollar;{premiumCustomer.email}
&dollar;{premiumCustomer.id}</code></pre>
  <h2>Environment-Specific Bindings</h2>
  <div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
    <div style="flex:1;min-width:0">
      <p>Bindings can be defined per environment — this allows the same workflows to use different data sources depending on the environment.</p>
      <div class="concept-grid">
        <div class="concept-card"><h3>DEV</h3><p>Development data.</p></div>
        <div class="concept-card"><h3>TEST</h3><p>Test data.</p></div>
        <div class="concept-card"><h3>STAGING</h3><p>Staging data.</p></div>
        <div class="concept-card"><h3>PROD</h3><p>Production data.</p></div>
      </div>
    </div>
    <div class="screenshot-wrap" style="flex:0 0 360px;margin:0">
      <img alt="Environment Bindings" src="./autemos_testdata_screenshot/image_11.png"/>
      <div class="screenshot-caption">Environment-specific bindings — per DEV / TEST / STAGING / PROD.</div>
    </div>
  </div>
`,
  "testdata-easy": `
  <span class="section-label">Datasets</span>
  <h1>Test Data Easy</h1>
  <p><strong>Test Data Easy</strong> enables simple management of static or semi-dynamic datasets directly within the platform. Datasets can be <strong>created</strong>, <strong>edited</strong>, <strong>imported</strong>, and <strong>reused</strong>.</p>
  <div class="screenshot-wrap">
    <img alt="Test Data Easy" src="./autemos_testdata_screenshot/image_12.png"/>
    <div class="screenshot-caption">Test Data Easy — direct management of datasets within the platform.</div>
  </div>
  <h2>Adding and Editing Test Data Easy</h2>
  <p>Test Data Easy datasets can either be created <strong>directly inside a Test Workflow</strong> or <strong>managed centrally within the Test Data module</strong>. This allows teams to quickly create reusable datasets for workflows, bindings, loops, and data-driven testing scenarios.</p>
  <div class="screenshot-wrap">
    <img alt="New Test Data Easy Dataset" src="./autemos_testdata_screenshot/image_13.png"/>
    <div class="screenshot-caption">New Test Data Easy Dataset — dialog for creating and editing datasets with all options (Linked Workflow, One-Time Use, Add Column/Row, Import).</div>
  </div>
  <h3>Features</h3>
  <p>Supported capabilities:</p>
  <ul class="feature-list">
    <li>Create reusable datasets</li>
    <li>Edit existing datasets</li>
    <li>Add and remove rows</li>
    <li>Add and remove columns</li>
    <li>Import CSV / XLSX / JSON files</li>
    <li>Paste tabular data directly</li>
    <li>Link datasets to workflows</li>
    <li>Configure one-time-use datasets</li>
  </ul>
  <h2>Supported Import Formats</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>CSV</h3><p>Comma-separated values.</p></div>
    <div class="concept-card"><h3>XLSX</h3><p>Excel spreadsheets.</p></div>
    <div class="concept-card"><h3>JSON</h3><p>Structured JSON data.</p></div>
    <div class="concept-card"><h3>Manual Grid Input</h3><p>Paste tabular data directly into the grid.</p></div>
  </div>
  <p>This allows existing test data repositories to be integrated quickly into the platform.</p>
  <h2>Dataset Structure</h2>
  <p>A dataset consists of <strong>columns</strong>, <strong>rows</strong>, and optional <strong>workflow links</strong>. Typical examples:</p>
  <ul class="feature-list">
    <li>Login users</li>
    <li>Product lists</li>
    <li>Test orders</li>
    <li>Reference data</li>
  </ul>
  <h2>Linked Workflows</h2>
  <p>Datasets can optionally be linked to a specific Test Workflow. This improves:</p>
  <ul class="feature-list">
    <li>Traceability</li>
    <li>Maintainability</li>
    <li>Workflow-specific test data management</li>
  </ul>
  <div class="tip"><span class="tip-icon">💡</span>If no workflow is linked, the dataset can be <strong>reused globally across the project</strong>.</div>
  <h2>Typical Workflow</h2>
  <p>Most commonly:</p>
  <ul class="feature-list">
    <li>Test Data Easy datasets are created directly during workflow creation</li>
    <li>The dataset is then automatically linked to the workflow</li>
    <li>Variables can immediately be used inside workflow nodes</li>
  </ul>
  <p>Alternatively, datasets can also be created and maintained centrally in the Test Data module. This is useful for:</p>
  <ul class="feature-list">
    <li>Shared datasets</li>
    <li>Reusable regression data</li>
    <li>Centrally managed test pools</li>
    <li>Team-wide reusable test assets</li>
  </ul>
  <div class="screenshot-wrap">
    <img alt="One-Time Use" src="./autemos_testdata_screenshot/image_14.png"/>
    <div class="screenshot-caption">One-Time Use — marking of already consumed datasets.</div>
  </div>
  <h2>One-Time Use</h2>
  <p>The <strong>One-Time Use mode</strong> prevents the reuse of already-consumed datasets.</p>
  <h3>Behavior</h3>
  <ul class="feature-list">
    <li>Used rows are marked</li>
    <li>Already used data is not delivered again</li>
    <li>Ideal for unique test data</li>
  </ul>
  <p><strong>Examples:</strong> Coupon codes · one-time users · unique registrations</p>
  <div class="tip"><span class="tip-icon">💡</span>Prevents data conflicts in parallel tests.</div>
  <h2 id="testdata-easy-tags">Tags</h2>
  <p>Each dataset can carry <strong>any number of tags</strong>. Tags are free-form terms (for example <code>Smoke</code>, <code>High</code> or a release name) used to organise large data collections by topic or ownership. A tag does not trigger any logic of its own (such as priority handling) — the term stays free.</p>
  <h3>Assigning tags</h3>
  <ul class="feature-list">
    <li>In the <strong>New/Edit Easy Test Data Dataset</strong> dialog, the <strong>Tags</strong> field sits below <em>Description</em> (placeholder "Create or reuse a tag").</li>
    <li>Press <strong>Enter</strong> or the <strong>Add tag</strong> button to apply a tag. Each tag appears as a chip with the buttons <strong>Edit tag</strong> and <strong>Remove tag</strong>.</li>
    <li>The field suggests all tags already used in the project so that terms are reused.</li>
    <li>Duplicates are detected regardless of upper/lower case; the spelling used first is kept.</li>
  </ul>
  <h3>Search, filter, group</h3>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Element</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>"Tags" column</strong></td><td>In table view directly after the name; in card view as chips. Datasets without tags show "—".</td></tr>
        <tr><td><strong>Search datasets</strong></td><td>Search field "Search by name or tag": finds datasets whose name <em>or</em> a tag contains the search text.</td></tr>
        <tr><td><strong>Filter by tags (match all)</strong></td><td>One checkbox per existing tag. With several tags selected, only datasets carrying <em>all</em> of them are shown.</td></tr>
        <tr><td><strong>Group by tag</strong></td><td>Groups the overview by tag; the "Without tags" group comes last. A dataset with several tags appears in each of its groups. Off by default.</td></tr>
        <tr><td><strong>Clear filters</strong></td><td>Resets search and filters. The counter "n of m datasets" shows how many datasets are visible.</td></tr>
      </tbody>
    </table>
  </div>
  <p>If nothing matches, "No datasets match the current filters" is shown. In the <em>Easy Test Data</em> workflow node, the tags of the selected dataset are display-only. Existing datasets without tags remain fully usable.</p>
  <div class="tip"><span class="tip-icon">💡</span>Tags can also be used for <a href="#testdata-datadriven">data-driven execution</a>: there, the <em>By tags</em> option selects all datasets carrying the desired tags.</div>
  <h2 id="testdata-easy-shortname">Placeholder name (without a binding)</h2>
  <p>Every Easy Test Data table has a <strong>Placeholder name</strong>. It lets you use the table in a workflow <strong>without an additional binding</strong>: <code>{{shortname.column}}</code> returns the column value from row 1 — or from the row chosen in the <a href="#testdata-run-selection">Test Data Selection</a> dialog.</p>
  <ul class="feature-list">
    <li>The overview shows the short name in the <strong>Placeholder name</strong> column (between Name and Tags) with a copy button.</li>
    <li>The short name is generated automatically on creation: lower case, <code>ä/ö/ü/ß</code> become <code>ae/oe/ue/ss</code>, all other special characters and spaces become <code>_</code>. If it starts with a digit, <code>t_</code> is prepended. Example: "Länder Test" becomes <code>laender_test</code>.</li>
    <li>Reserved names (<code>secret</code>, <code>env</code>, <code>vars</code>, <code>part1</code> …) get the suffix <code>_table</code>; on a collision within the project, <code>_2</code>, <code>_3</code> … follows.</li>
    <li>The short name stays the same when the table is renamed and cannot be edited, so existing workflows do not break.</li>
    <li>Table names may contain umlauts and other letters. Upper/lower case in the placeholder does not matter.</li>
    <li>The variable picker in the workflow editor lists all project tables in the <strong>Test Data Tables</strong> section and inserts <code>{{shortname.column}}</code>.</li>
    <li>As with an Easy binding, a One-Time-Use table consumes the row that is used.</li>
  </ul>
  <h3>Resolution order</h3>
  <p>A placeholder is resolved in this order: secret → run variable, parameter or store-as target → test data binding → Easy table. Existing workflows therefore behave as before. If a binding has the same name as a table, <strong>the binding wins</strong>; the picker flags this with "Overridden by binding", the pre-run check in the editor shows a (non-blocking) warning, and the table list shows a warning icon next to the short name.</p>
`,
  "testdata-run-selection": `
  <span class="section-label">Execution</span>
  <h1>Test Data Selection at Run</h1>
  <p>If a workflow has test data, the Run button no longer starts blindly: the <strong>Test Data Selection</strong> dialog opens. There you decide which dataset rows the workflow runs with. This applies to the Run in the workflow editor as well as to the Run from the workflow list.</p>
  <h2>When does the dialog appear?</h2>
  <ul class="feature-list">
    <li>The workflow contains an <strong>Easy Test Data</strong> node (linked dataset or embedded table), or</li>
    <li>the workflow uses a <strong>named test data binding</strong>.</li>
  </ul>
  <p>Workflows without test data start directly, as before.</p>
  <h2>Run mode</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Mode</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td><strong>Single Row</strong></td><td>Pick one specific row; exactly one execution runs.</td></tr>
        <tr><td><strong>Selected Rows</strong></td><td>Tick several rows; they run one after another.</td></tr>
        <tr><td><strong>All Rows</strong></td><td>The workflow runs once for every available row, one after another.</td></tr>
        <tr><td><strong>Default Run</strong></td><td>Default. The workflow starts as before with the first row (with One-Time-Use: the first unconsumed row).</td></tr>
      </tbody>
    </table>
  </div>
  <p>The <strong>Data rows</strong> table shows the rows of the dataset; selected rows are highlighted, a counter (for example "2 rows selected") summarises the choice, and the <strong>Preview</strong> area shows the values. For One-Time-Use datasets, rows that are already used carry the <strong>Consumed</strong> badge. <strong>Cancel</strong> starts nothing.</p>
  <h2>What happens during the run</h2>
  <ul class="feature-list">
    <li>Each selected row runs as its <strong>own execution</strong> with exactly its values and its own test result. The test and report name carries the suffix <code>[Set · Row n]</code>.</li>
    <li>A log line names the set and row of the execution.</li>
    <li>A <strong>targeted selection consumes nothing</strong>: One-Time-Use rows stay unconsumed. The node, dataset, binding and workflow are not changed either. Only the <em>Default Run</em> consumes, as before.</li>
    <li>The editor follows the series until all rows have run; the next row starts as soon as the previous one has finished.</li>
  </ul>
  <h2>Limits</h2>
  <ul class="feature-list">
    <li>At most <strong>100 rows</strong> are offered; the dialog points this out.</li>
    <li>For One-Time-Use datasets, <em>All Rows</em> covers only the unconsumed rows.</li>
    <li>The row selection applies to <strong>one</strong> set. If the workflow uses further test data sets, they run with their default row; a note in the dialog says so.</li>
    <li>If a selected row no longer matches the state of the dataset (for example because it has been changed in the meantime), the server reports the reason and nothing starts.</li>
  </ul>
`,
  "testdata-datadriven": `
  <span class="section-label">Execution</span>
  <h1>Data-driven Execution &amp; Dataset Pool</h1>
  <p>With <strong>Data-driven execution…</strong> (menu of the Run button in the workflow editor), a workflow runs <strong>once per matching dataset</strong>. Each dataset starts an independent run; a batch groups them, shows progress and can be cancelled. The run details show the name of the dataset that was used.</p>
  <h2>Data-driven binding (dataset pool)</h2>
  <p>Instead of creating a separate binding for each dataset, a <strong>data-driven binding</strong> bundles several compatible Easy datasets under <strong>one name</strong>. In the binding manager, choose the pool type under <strong>Binding type</strong> and assign the datasets to it. The workflow only references <code>{{country.field}}</code>; per run, the pool supplies one dataset under that name. Existing single bindings continue to work unchanged.</p>
  <h2>The "Data-driven execution" dialog</h2>
  <p>The dialog detects the binding from the workflow's placeholders itself — you no longer have to type a technical variable name.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Area</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Data source / Binding</strong></td><td>If the workflow references exactly one pool binding, the dialog shows "Data-driven binding: country" and the source ("Source: Easy Test Data"). With several, choose under <em>Data-driven binding</em>. If there is none, a note explains how to create one, with the link <em>Set up a data-driven binding</em>.</td></tr>
        <tr><td><strong>Dataset selection</strong></td><td>Which datasets run: All datasets, Single dataset, Selected datasets, First N datasets or By tags (all datasets with the chosen tags).</td></tr>
        <tr><td><strong>Execution preview</strong></td><td>States the number of runs up front, for example "4 datasets selected – 4 test runs will be created", and lists the selected datasets.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Start is refused —</strong> If a dataset lacks a field the workflow needs, nothing starts. The message names dataset and field (for example "Dataset 'AUT66-03-France' lacks field(s) expectedTitle required by {{country.expectedTitle}}"). No batch is created and no run is started.
  </div>
  <h2>Permissions and schedules</h2>
  <ul class="feature-list">
    <li>All project members can read the dataset selection; <strong>starting and cancelling</strong> a data-driven execution requires at least the Editor project role (see <a href="#users-roles">Roles &amp; Permissions</a>).</li>
    <li>The same selection can be set in schedules — see <a href="#scheduler-testdata">Test data in a schedule</a>.</li>
  </ul>
`,
  "testdata-playground": `
  <span class="section-label">Tools</span>
  <h1>Playground &amp; Acquire</h1>
  <p>The <strong>Playground</strong> is used for manually testing and validating data sources.</p>
  <div class="screenshot-wrap">
    <img alt="Playground" src="./autemos_testdata_screenshot/image_15.png"/>
    <div class="screenshot-caption">Playground — manually query and validate data sources.</div>
  </div>
  <h2>Features</h2>
  <ul class="feature-list">
    <li>Fetch test data</li>
    <li>Test filters</li>
    <li>Check TTL</li>
    <li>Validate cache behavior</li>
    <li>Inspect Async Store</li>
  </ul>
  <h2>Acquire Test Data</h2>
  <p>With <strong>Acquire Test Data</strong>, data can be loaded manually.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Source Type</strong></td><td>Data source</td></tr>
        <tr><td><strong>Data Type</strong></td><td>e.g. CUSTOMER, ORDERS, USERS</td></tr>
        <tr><td><strong>Quantity</strong></td><td>Number of records to fetch</td></tr>
        <tr><td><strong>Scope</strong></td><td>RUN / PROJECT / TENANT</td></tr>
        <tr><td><strong>TTL Override</strong></td><td>Custom cache lifetime</td></tr>
        <tr><td><strong>JSON Filter</strong></td><td>Filter logic</td></tr>
        <tr><td><strong>Cache Bypass</strong></td><td>Bypass the cache</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Async Store</h2>
  <p>The <strong>Async Store</strong> enables persistent data storage across asynchronous workflow executions.</p>
  <h3>Particularly Important For</h3>
  <ul class="feature-list">
    <li><a href="#time-gap">Time Gap</a> nodes</li>
    <li>Multi-part workflows</li>
    <li>Long-running processes</li>
  </ul>
  <h3>Persisted Data Survives</h3>
  <ul class="feature-list">
    <li>JVM restarts</li>
    <li>Workflow interruptions</li>
    <li>Asynchronous continuations</li>
  </ul>
`,
  "testdata-scope": `
  <span class="section-label">Architecture</span>
  <h1>Scope Concept &amp; Cache System</h1>
  <h2>Scope Concept</h2>
  <p>The module supports different <strong>data lifecycles</strong> to isolate or share data selectively.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Scope</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>RUN</strong></td><td>Only for one test execution</td></tr>
        <tr><td><strong>PROJECT</strong></td><td>Available for a project</td></tr>
        <tr><td><strong>TENANT</strong></td><td>Globally available tenant-wide</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Cache System</h2>
  <p>The integrated cache system reduces unnecessary data fetches.</p>
  <h3>Features</h3>
  <ul class="feature-list">
    <li>Token caching</li>
    <li>API response caching</li>
    <li>Scope-based cache management</li>
    <li>TTL control</li>
  </ul>
  <h3>Benefits</h3>
  <ul class="feature-list">
    <li>Faster execution</li>
    <li>Lower API load</li>
    <li>More stable test runs</li>
  </ul>
`,
  "testdata-runtime": `
  <span class="section-label">Runtime</span>
  <h1>Runtime Behavior &amp; Error Handling</h1>
  <p>Test Data Management is deeply integrated into workflow execution and ensures data is available at the right time.</p>
  <h2>Runtime Behavior</h2>
  <h3>Before Workflow Start</h3>
  <ul class="feature-list">
    <li>Bindings are resolved</li>
    <li>Data sources are queried</li>
    <li>Data is validated</li>
    <li>Runtime variables are created</li>
  </ul>
  <h3>During Execution</h3>
  <ul class="feature-list">
    <li>Data remains available</li>
    <li>Runtime state can be persisted</li>
    <li>Async workflows can resume data</li>
  </ul>
  <h2>Error Handling</h2>
  <p>The module supports robust error handling:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>Retry Mechanisms</h3><p>Automatic retries on failures.</p></div>
    <div class="concept-card"><h3>Timeout Configuration</h3><p>Maximum wait time per source.</p></div>
    <div class="concept-card"><h3>Adapter Health Checks</h3><p>Availability checks for adapters.</p></div>
    <div class="concept-card"><h3>Cache Fallbacks</h3><p>Fallback to cached data.</p></div>
    <div class="concept-card"><h3>Persistent Resumption</h3><p>Async workflows can be continued.</p></div>
  </div>
  <h3>Typical Errors</h3>
  <ul class="feature-list">
    <li>Unreachable APIs</li>
    <li>Invalid data structures</li>
    <li>Empty datasets</li>
    <li>Expired tokens</li>
  </ul>
`,
  "testdata-settings": `
  <span class="section-label">Configuration</span>
  <h1>Settings</h1>
  <p>The <strong>Settings</strong> section defines the default runtime behavior, caching strategy, persistence scope, and infrastructure configuration for the Test Data Management module. It allows administrators and test architects to centrally control how test data is fetched, cached, persisted, and protected across workflows and environments.</p>

  <h2>Project Defaults</h2>
  <p>Project Defaults define the runtime behavior for all test data operations inside a project.</p>
  <div class="screenshot-wrap">
    <img alt="Project Defaults" src="./autemos_testdata_screenshot/image_17.png"/>
    <div class="screenshot-caption">Project Defaults — default source, TTL, persistence scope, and retry behavior.</div>
  </div>
  <h3>Configurable Parameters</h3>
  <ul class="feature-list">
    <li>Default source</li>
    <li>Default TTL</li>
    <li>Default persistence scope</li>
    <li>Retry behavior</li>
    <li>Maximum retries</li>
  </ul>
  <h3>Supported Scopes</h3>
  <div class="concept-grid">
    <div class="concept-card"><h3>RUN</h3><p>Only for one test execution.</p></div>
    <div class="concept-card"><h3>PROJECT</h3><p>Available for a project.</p></div>
    <div class="concept-card"><h3>TENANT</h3><p>Globally available tenant-wide.</p></div>
  </div>
  <h3>Benefits</h3>
  <ul class="feature-list">
    <li>Centralized runtime configuration</li>
    <li>Consistent test data handling</li>
    <li>Project-specific overrides</li>
    <li>Stable retry and recovery behavior</li>
  </ul>

  <h2>Project Cache Policy</h2>
  <p>The <strong>Cache Policy</strong> controls how long fetched or generated datasets remain available inside the platform.</p>
  <div class="screenshot-wrap">
    <img alt="Project Cache Policy" src="./autemos_testdata_screenshot/image_18.png"/>
    <div class="screenshot-caption">Project Cache Policy — TTL, persistence scope, and per-type overrides.</div>
  </div>
  <h3>Configurable Parameters</h3>
  <ul class="feature-list">
    <li>Default TTL</li>
    <li>Persistent scope</li>
    <li>Per-type TTL overrides</li>
  </ul>
  <h3>Benefits</h3>
  <ul class="feature-list">
    <li>Temporary runtime datasets</li>
    <li>Reusable project-level caches</li>
    <li>Optimized performance</li>
    <li>Reduced external API requests</li>
    <li>Configurable data lifetimes</li>
  </ul>

  <h2>Global Infrastructure &amp; Sensitive Fields</h2>
  <p>The module supports centralized infrastructure settings for <strong>asynchronous persistence</strong> and secure handling of sensitive data.</p>
  <div class="screenshot-wrap">
    <img alt="Global Infrastructure and Sensitive Fields" src="./autemos_testdata_screenshot/image_19.png"/>
    <div class="screenshot-caption">Global Infrastructure &amp; Sensitive Fields — Async Store backend and masking.</div>
  </div>
  <h3>Infrastructure Configuration</h3>
  <ul class="feature-list">
    <li>Async Store backend</li>
    <li>Effective source</li>
    <li>Effective scope</li>
    <li>Retry configuration</li>
  </ul>
  <h3>Sensitive Field Masking</h3>
  <div class="concept-grid">
    <div class="concept-card"><h3>Passwords</h3><p>Full masking in logs.</p></div>
    <div class="concept-card"><h3>Tokens</h3><p>API and session tokens.</p></div>
    <div class="concept-card"><h3>IBANs</h3><p>Bank account details.</p></div>
    <div class="concept-card"><h3>Credit Card Numbers</h3><p>Payment data.</p></div>
  </div>
  <h3>Benefits</h3>
  <ul class="feature-list">
    <li>Secure runtime logging</li>
    <li>Protected sensitive information</li>
    <li>Centralized infrastructure management</li>
    <li>Compliance-friendly test execution</li>
  </ul>

  <h2>Global Cache Infrastructure</h2>
  <p>The platform includes a centralized cache infrastructure for runtime datasets and temporary persistence.</p>
  <div class="screenshot-wrap">
    <img alt="Global Cache Infrastructure" src="./autemos_testdata_screenshot/image_20.png"/>
    <div class="screenshot-caption">Global Cache Infrastructure — maximum cache size, eviction, and persistence scope.</div>
  </div>
  <h3>Configurable Parameters</h3>
  <ul class="feature-list">
    <li>Maximum cache size</li>
    <li>Eager eviction</li>
    <li>Eviction interval</li>
    <li>Effective persistent scope</li>
  </ul>
  <h3>Benefits</h3>
  <ul class="feature-list">
    <li>Scalable runtime caching</li>
    <li>Automatic cleanup</li>
    <li>Optimized memory usage</li>
    <li>Stable long-running workflow execution</li>
  </ul>
  <div class="tip"><span class="tip-icon">💡</span>Project-level settings can inherit values from the global configuration or override them individually.</div>
`,
  "testdata-best-practices": `
  <span class="section-label">Usage</span>
  <h1>Best Practices, Common Errors &amp; Benefits</h1>
  <h2>Best Practices</h2>
  <ul class="best-practices">
    <li>Manage data sources centrally</li>
    <li>Name bindings consistently</li>
    <li>Use environment-specific bindings</li>
    <li>Enable One-Time Use for unique data</li>
    <li>Test data sources in the Playground</li>
    <li>Persist runtime data cleanly</li>
    <li>Configure TTLs deliberately</li>
  </ul>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Common errors —</strong> Using hardcoded test data · sharing test data between parallel runs · no scope separation · forgetting One-Time Use · loading datasets that are too large · ignoring environment mapping.
  </div>
  <h2>Benefits</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Benefit</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Central Test Data Management</strong></td><td>All data sources in one place.</td></tr>
        <tr><td><strong>Scalable Data Provisioning</strong></td><td>Suitable for enterprise volumes.</td></tr>
        <tr><td><strong>Dynamic Data Sources</strong></td><td>APIs, DBs, files, synthetic.</td></tr>
        <tr><td><strong>Asynchronous Data Persistence</strong></td><td>Across Time Gap nodes.</td></tr>
        <tr><td><strong>Reusable Datasets</strong></td><td>Define once, use multiple times.</td></tr>
        <tr><td><strong>Better Maintainability</strong></td><td>Central changes.</td></tr>
        <tr><td><strong>More Stable Automation</strong></td><td>Cache + Retry + Health checks.</td></tr>
        <tr><td><strong>Higher Reusability</strong></td><td>Bindings across workflows.</td></tr>
      </tbody>
    </table>
  </div>
  <p>Test Data Management forms the <strong>foundation for professional enterprise test automation</strong> with consistent and reproducible test data.</p>
`,
});
