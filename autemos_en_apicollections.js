window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "apicollections-overview": `
<span class="section-label">Getting Started</span>
<div class="section-intro"><h1>API Collections</h1></div>
<p>API Collections provide a central place to import, manage, execute and reuse API definitions in Autemos.</p>
<p>Instead of configuring every API request manually, you can import an existing <strong>OpenAPI / Swagger specification</strong>. Autemos converts the specification into an API Collection containing the available endpoints and their relevant configuration.</p>
<div class="screenshot-wrap">
<img alt="API Collections overview" src="./autemos_apicollection_screenshots/image_1.png"/>
<div class="screenshot-caption">Manage API Collections centrally — imported specification with runtime environment and endpoint list.</div>
</div>
<h2>Three Ways to Use a Collection</h2>
<div class="concept-grid">
  <div class="concept-card"><h3>Run Directly</h3><p>Run and validate API endpoints directly from the API Collection — no Test Workflow required.</p></div>
  <div class="concept-card"><h3>As a Workflow Step</h3><p>Execute an entire API Collection as a single step inside a Test Workflow.</p></div>
  <div class="concept-card"><h3>Individual Endpoints</h3><p>Select individual endpoints from a collection when configuring an API Request node.</p></div>
</div>
<p>This allows API testing to be integrated directly with browser and mobile automation in the same Test Workflow. Autemos already supports Web, Mobile and API testing within a single workflow.</p>
`,
  "apicollections-import": `
<span class="section-label">Import</span>
<h1>Import an API Collection</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div style="flex:1;min-width:0">
    <p>Navigate to <strong>API Collections</strong> within your project and select <strong>Import</strong>.</p>
    <h2 style="margin-top:20px">Supported Sources</h2>
    <ul class="feature-list">
      <li><strong>File</strong> — upload an OpenAPI <code>.json</code> or <code>.yaml</code> file</li>
      <li><strong>URL</strong> — provide the URL of an available OpenAPI specification</li>
    </ul>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 380px;margin:0">
    <img alt="Import Swagger/OpenAPI dialog" src="./autemos_apicollection_screenshots/image_2.png"/>
    <div class="screenshot-caption">Import OpenAPI / Swagger directly — by file or URL.</div>
  </div>
</div>
`,
  "apicollections-import-config": `
<span class="section-label">Import</span>
<h1>Import Configuration</h1>
<p>During the import, the following options are available:</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Setting</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>OpenAPI File / URL</strong></td><td>Source of the OpenAPI specification</td></tr>
<tr><td><strong>Collection name</strong></td><td>Optional custom name for the API Collection</td></tr>
<tr><td><strong>Operations marked as deprecated</strong></td><td>Defines how deprecated operations should be handled</td></tr>
<tr><td><strong>Enable schema validation for all endpoints</strong></td><td>Enables response schema validation for imported endpoints</td></tr>
</tbody>
</table>
</div>
<div class="tip"><span class="tip-icon">💡</span>If no Collection name is specified, Autemos can use the title defined in the OpenAPI specification.</div>
`,
  "apicollections-schema-validation": `
<span class="section-label">Import</span>
<h1>Schema Validation</h1>
<p>Schema validation can be enabled for the complete collection during import.</p>
<p>Because OpenAPI specifications do not always describe the actual API responses with sufficient precision, schema validation is disabled by default. It can also be enabled individually for specific endpoints later.</p>
<div class="tip"><span class="tip-icon">💡</span>Importing with schema validation enabled globally tends to produce failures that are not defects. Enable validation where the specification is known to be reliable.</div>
`,
  "apicollections-list": `
<span class="section-label">Management</span>
<h1>API Collection Overview</h1>
<p>After importing an OpenAPI specification, Autemos creates the API Collection and lists the available endpoints.</p>
<p>Each endpoint contains information derived from the OpenAPI specification:</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Information</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>Method</strong></td><td>HTTP method such as GET, POST, PUT, PATCH or DELETE</td></tr>
<tr><td><strong>Path</strong></td><td>API endpoint path</td></tr>
<tr><td><strong>Operation</strong></td><td>Operation defined by the OpenAPI specification</td></tr>
<tr><td><strong>Expected</strong></td><td>Expected HTTP response status</td></tr>
<tr><td><strong>Status</strong></td><td>Current state of the imported endpoint</td></tr>
</tbody>
</table>
</div>
<p>The overview provides search and filtering options to quickly locate individual endpoints.</p>
`,
  "apicollections-runtime": `
<span class="section-label">Management</span>
<h1>Runtime Environment</h1>
<p>Each API Collection can be connected to the runtime configuration required to execute its endpoints.</p>
<div class="concept-grid">
  <div class="concept-card"><h3>Application</h3><p>Select an application configured for the project. If no application is selected, the base URL defined in the OpenAPI specification is used.</p></div>
  <div class="concept-card"><h3>Default Environment</h3><p>Defines the default environment used when executing the collection, for example DEV / TEST / INT / PROD.</p></div>
  <div class="concept-card"><h3>Auth Config</h3><p>Select a reusable authentication configuration instead of configuring credentials for every request.</p></div>
  <div class="concept-card"><h3>Test Data Binding</h3><p>Connect the collection to a Test Data Binding to use dynamic test data during execution.</p></div>
</div>
<p>This allows the same collection to be executed against different data sets and environments.</p>
`,
  "apicollections-run": `
<span class="section-label">Management</span>
<h1>Running an API Collection</h1>
<p>Select <strong>Run Collection</strong> to execute the API Collection directly. Autemos executes the enabled endpoints of the collection using the configured runtime environment.</p>
<h2>When to Use</h2>
<ul class="feature-list">
<li>Quickly validating an imported OpenAPI specification</li>
<li>Running API smoke or regression tests</li>
<li>Testing endpoints after API changes</li>
<li>Validating an API independently of a UI Test Workflow</li>
</ul>
<div class="tip"><span class="tip-icon">💡</span>You do not need to create a Test Workflow just to execute the APIs contained in a collection.</div>
`,
  "apicollections-workflows": `
<span class="section-label">Test Workflows</span>
<h1>Using API Collections in Test Workflows</h1>
<p>API Collections are directly integrated into Autemos Test Workflows. This allows APIs to become part of an end-to-end business process instead of being executed as isolated API tests.</p>
<div class="screenshot-wrap">
<img alt="Combined browser and API test in the workflow editor" src="./autemos_apicollection_screenshots/image_3.png"/>
<div class="screenshot-caption">Connecting API and UI into true end-to-end tests — browser steps and API request in one workflow.</div>
</div>
<h2>Typical Flows</h2>
<ul class="feature-list">
<li><strong>Browser Action → API Request → Verify Response → Browser Action</strong></li>
<li><strong>API Setup → Mobile Action → API Validation → Web Verification</strong></li>
</ul>
<p>This builds on the existing Autemos concept of combining Web, Mobile and API testing within a single workflow.</p>
`,
  "apicollections-endpoint": `
<span class="section-label">Test Workflows</span>
<h1>Using an Individual API Endpoint</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div style="flex:1;min-width:0">
    <p>Add an <a href="#api-request">API Request</a> node to the Test Workflow. The node can be configured manually or populated from an existing API Collection.</p>
    <p>Select <strong>Choose from collection</strong>. Autemos opens the endpoint selection dialog.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 300px;margin:0">
    <img alt="API Request node configuration" src="./autemos_apicollection_screenshots/image_4.png"/>
    <div class="screenshot-caption">API Request node — "Choose from collection" opens the endpoint selection.</div>
  </div>
</div>
<p>First select the required API Collection and then one or more available endpoints. Endpoints can also be searched directly within the dialog.</p>
<div class="screenshot-wrap">
<img alt="Endpoint selection from an API Collection" src="./autemos_apicollection_screenshots/image_5.png"/>
<div class="screenshot-caption">Bring API calls straight into workflows — choose a collection, search endpoints and insert them.</div>
</div>
<h2>Example</h2>
<ul class="feature-list">
<li><code>GET /posts</code></li>
<li><code>POST /posts</code></li>
<li><code>GET /posts/{postId}</code></li>
<li><code>PUT /posts/{postId}</code></li>
<li><code>DELETE /posts/{postId}</code></li>
</ul>
`,
  "apicollections-auto-config": `
<span class="section-label">Test Workflows</span>
<h1>Automatic Request Configuration</h1>
<p>When an endpoint is selected from an API Collection, Autemos uses the information available in the imported OpenAPI specification to populate the API Request node.</p>
<p>Depending on the endpoint definition, this can include:</p>
<ul class="feature-list">
<li>HTTP method</li>
<li>URL / endpoint</li>
<li>Authentication</li>
<li>Headers</li>
<li>Request body</li>
<li>Response information</li>
</ul>
<p>The configuration remains available in the standard tabs of the API Request node:</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Tab</th><th>Content</th></tr></thead>
<tbody>
<tr><td><strong>Request</strong></td><td>Method and target URL</td></tr>
<tr><td><strong>Auth</strong></td><td>Authentication mode and credentials</td></tr>
<tr><td><strong>Headers</strong></td><td>HTTP headers as key/value pairs</td></tr>
<tr><td><strong>Body</strong></td><td>Request body for POST/PUT/PATCH</td></tr>
<tr><td><strong>Response</strong></td><td>Response handling and response alias</td></tr>
</tbody>
</table>
</div>
<div class="tip"><span class="tip-icon">💡</span>The imported configuration is a starting point — the request can still be modified when required.</div>
`,
  "apicollections-verify-nodes": `
<span class="section-label">Test Workflows</span>
<h1>Automatically Create Verify Nodes</h1>
<p>When selecting an endpoint from an API Collection, the option <strong>Also create verify nodes</strong> can be enabled. Autemos then creates the relevant verification steps together with the API Request.</p>
<p>This reduces the need to manually recreate validations already defined by the API specification and provides a faster way to turn an OpenAPI definition into an executable API test.</p>
<p>The generated verification can subsequently be adjusted within the Test Workflow using the standard <a href="#verify-response">Verify Response</a> functionality.</p>
`,
  "apicollections-run-node": `
<span class="section-label">Test Workflows</span>
<h1>Run API Collection Node</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div style="flex:1;min-width:0">
    <p>Instead of selecting individual API endpoints, an entire collection can be executed from a Test Workflow. Add the <strong>Run API Collection</strong> node.</p>
    <p>The node executes the selected API Collection as one workflow step. The collection sees the workflow's variables.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 300px;margin:0">
    <img alt="Run API Collection node configuration" src="./autemos_apicollection_screenshots/image_6.png"/>
    <div class="screenshot-caption">Run API Collection — collection, environment, failure behaviour and result variable.</div>
  </div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>API Collection</strong></td><td>Collection to execute</td><td>Yes</td><td><code>Autemos API Collection Demo</code></td></tr>
<tr><td><strong>Environment</strong></td><td>Runtime environment used for execution</td><td>No</td><td><code>TEST</code></td></tr>
<tr><td><strong>On item failure</strong></td><td>Defines how the workflow behaves when an endpoint fails</td><td>Yes</td><td><code>Abort the workflow</code></td></tr>
<tr><td><strong>Store result as</strong></td><td>Workflow variable containing the collection result</td><td>No</td><td><code>collectionResult</code></td></tr>
</tbody>
</table>
</div>
<h2>Store Result As</h2>
<p>The result of the API Collection can be stored in a workflow variable, for example <code>collectionResult</code>. This makes the execution result available to subsequent workflow steps.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="tip"><span class="tip-icon">💡</span>If the project does not contain an API collection yet, the node points out that an OpenAPI specification has to be imported first.</div>
`,
  "apicollections-combine": `
<span class="section-label">Usage</span>
<h1>Combining API and UI Testing</h1>
<p>One of the main benefits of API Collections is the ability to combine API operations with UI automation.</p>
<h2>Example Flow</h2>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><p>Create a customer through an API.</p></div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><p>Store the returned customer ID.</p></div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><p>Open the application in a browser.</p></div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><p>Search for the newly created customer.</p></div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><p>Modify the customer through the UI.</p></div></div>
<div class="step"><div class="step-num">6</div><div class="step-content"><p>Call another API endpoint.</p></div></div>
<div class="step"><div class="step-num">7</div><div class="step-content"><p>Verify that the backend contains the updated information.</p></div></div>
</div>
<p>This allows the complete business process to be tested without separating API and UI automation into different tools or test suites.</p>
`,
  "apicollections-use-cases": `
<span class="section-label">Usage</span>
<h1>Typical Use Cases</h1>
<div class="concept-grid">
  <div class="concept-card"><h3>API Regression Testing</h3><p>Import an OpenAPI specification and execute the complete API Collection to validate the available endpoints.</p></div>
  <div class="concept-card"><h3>API Setup for UI Tests</h3><p>Use API requests to create the required test state before starting browser or mobile interactions.</p></div>
  <div class="concept-card"><h3>Backend Verification</h3><p>Perform a business process through the UI and use an API request afterwards to verify the resulting backend state.</p></div>
  <div class="concept-card"><h3>Hybrid End-to-End Testing</h3><p>Combine browser, mobile and API interactions within a single Test Workflow.</p></div>
  <div class="concept-card"><h3>Reusable API Definitions</h3><p>Maintain API definitions centrally through API Collections instead of manually configuring the same requests in multiple workflows.</p></div>
</div>
`,
  "apicollections-best-practices": `
<span class="section-label">Usage</span>
<h1>Best Practices</h1>
<ul class="best-practices">
<li>Import APIs from the authoritative OpenAPI specification whenever possible</li>
<li>Use API Collections as the central source for reusable API definitions</li>
<li>Configure authentication centrally instead of duplicating credentials across requests</li>
<li>Use environments to avoid hard-coded URLs</li>
<li>Use Test Data Bindings for dynamic and reusable API tests</li>
<li>Use <strong>Run Collection</strong> for API regression and smoke testing</li>
<li>Use individual API Request nodes when APIs form part of a larger end-to-end process</li>
<li>Enable automatic Verify node creation when the OpenAPI specification contains reliable response definitions</li>
<li>Combine API setup and validation with UI automation to make end-to-end tests faster and more robust</li>
</ul>
`,
  "apicollections-related": `
<span class="section-label">Usage</span>
<h1>Related Modules</h1>
<p>API Collections are part of the larger Autemos ecosystem.</p>
<div class="module-grid">
<div class="module-card">
<strong>Test Workflows</strong>
<span>Combine API, browser and mobile testing in one flow</span>
</div>
<div class="module-card">
<strong>API Request</strong>
<span>Execute individual HTTP requests</span>
</div>
<div class="module-card">
<strong>Verify Response</strong>
<span>Validate API responses</span>
</div>
<div class="module-card">
<strong>Extract JSON Value</strong>
<span>Extract response values for subsequent workflow steps</span>
</div>
<div class="module-card">
<strong>Test Data</strong>
<span>Provide dynamic data for API execution</span>
</div>
<div class="module-card">
<strong>Project Settings / Auth &amp; Secrets</strong>
<span>Centrally manage authentication and sensitive information</span>
</div>
</div>
`,
});
