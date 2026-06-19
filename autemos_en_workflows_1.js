window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "overview": `<span class="section-label">Getting Started</span>
<div class="section-intro">
<h1>Test Workflows</h1>
</div>
<p>Test Workflows are the central building block for automated testing in Autemos. They provide a visual, node-based representation of test logic, enabling users to efficiently design, customize, and debug automated tests.</p>
<p>A typical workflow consists of sequential steps such as opening an application, interacting with UI elements, validating results, and managing data. While most workflows are linear, Autemos also supports conditional logic and loops for more advanced testing scenarios.</p>
<div class="screenshot-wrap">
<img alt="Test Workflows Overview" src="./autemos_images/image1.png"/>
<div class="screenshot-caption">The Test Workflows overview lists all existing tests with list/tile view and search options.</div>
</div>
<h2>What You Can Do With Test Workflows</h2>
<ul class="feature-list">
<li>Refine recorded tests and add custom logic</li>
<li>Add validations and assertions to verify application behavior</li>
<li>Integrate test data for dynamic, reusable scenarios</li>
<li>Debug execution step by step with breakpoints and live view</li>
<li>Ensure test readiness before automated headless execution</li>
</ul>
<div class="screenshot-wrap">
<img alt="Workflow canvas" src="./autemos_images/image2.png"/>
<div class="screenshot-caption">The visual canvas — each step is represented as a node that performs a specific action.</div>
</div>
<h2>Creating and Editing</h2>
<p>The Test Workflows overview lists all existing tests. The <strong>+ New Workflow</strong> button opens an empty canvas. The <strong>Record Workflow</strong> button navigates to the recording module, where tests can be created with a click recorder or an AI chatbot. Workflows can be toggled between list and tile view, searched, sorted, and selected.</p>
<p>Each step in the workflow is represented by a <strong>node</strong> that performs a specific action, such as clicking an element, entering text, or validating a condition.</p>
`,
  "key-concepts": `<span class="section-label">Getting Started</span>
<h1>Key Concepts</h1>
<div class="concept-grid"><div class="concept-card">
<h3>Linear Execution</h3>
<p>Most workflows follow a top-down executed sequence of steps.</p>
</div>
<div class="concept-card">
<h3>Conditional Logic</h3>
<p>Use If nodes to branch execution based on runtime conditions.</p>
</div>
<div class="concept-card">
<h3>Loops</h3>
<p>Iterate over data or repeat actions with Loop nodes for data-driven testing.</p>
</div>
<div class="concept-card">
<h3>Drag &amp; Drop Editing</h3>
<p>Nodes can be added, removed, and reordered directly on the visual canvas.</p>
</div>
</div>
<div class="screenshot-wrap">
<img alt="Conditional logic with If node" src="./autemos_images/image3.png"/>
<div class="screenshot-caption">Example: Conditional logic with an If node to branch execution.</div>
</div>
<h2>Understanding Nodes</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:20px">
  <div style="flex:1;min-width:0">
    <p style="margin-bottom:12px">Nodes are the basic units of a Test Workflow. Each node represents a single action or operation:</p>
    <ul class="feature-list">
      <li>Interact with UI elements (Click, Type)</li>
      <li>Capture information (Extract Text, Screenshot)</li>
      <li>Validate behavior (Assert, Soft Verify)</li>
      <li>Manage data (Test Data, input variables)</li>
      <li>Control flow (If, Loop, Wait)</li>
    </ul>
    <p style="margin-top:12px">Nodes can interact with variables and stored data depending on their type. Detailed documentation for each node is available in the node reference sections below.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 260px;margin:0">
    <img alt="Node panel overview" src="./autemos_images/image4.png"/>
    <div class="screenshot-caption">Node panel — available node categories</div>
  </div>
</div>
<h2>Working With Test Data and Variables</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:20px">
  <div style="flex:1;min-width:0">
    <p>Test Workflows support flexible data management for dynamic and reusable tests. Data can be stored in variables, cached during execution, and reused in later steps.</p>
    <ul class="feature-list" style="margin-top:12px">
      <li>Store values in workflow variables and reuse them across steps</li>
      <li>Use the <strong>Test Data Easy</strong> node to bind tabular data sets inline</li>
      <li>Access row data via <code>{{easyData.field}}</code> or <code>{{easyDataRecords.0.field}}</code></li>
      <li>Link externally managed data sets for cross-workflow reuse</li>
    </ul>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 240px;margin:0">
    <img alt="Test Data Easy node" src="./autemos_images/image5.png"/>
    <div class="screenshot-caption">Test Data Easy — bind a data set directly in the workflow.</div>
  </div>
</div>
<h2>Supported Test Types</h2>
<p>Test Workflows support multiple test types within a single flow — independently or combined:</p>
<ul class="feature-list">
<li><strong>Web Testing</strong> — browser-based UI automation</li>
<li><strong>Mobile Testing</strong> — iOS and Android app tests</li>
<li><strong>API Testing</strong> — direct HTTP request validation</li>
</ul>
<p>This enables end-to-end scenarios such as: mobile action → API validation → web verification.</p>
`,
  "quick-start": `<span class="section-label">Getting Started</span>
<h1>Create Your First Test Workflow in 5 Minutes</h1>
<p>This quick tutorial walks you through creating, refining, and debugging a simple Test Workflow in Autemos. By the end, you will have a working, test-ready workflow.</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h3>Open a Test Workflow</h3>
<p>In the demo project, you will find sample tests for Mobile, Web, and a combined flow. After selecting a test, you will see the workflow canvas, where each step is represented as a node. Recorded workflows typically include application launch, basic user interactions, and navigation steps.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h3>Review the Workflow Structure</h3>
<p>Scan the workflow from top to bottom. Look for a clear step sequence (e.g., Login → Navigate → Action), missing validations, and hard-coded or unclear values. At this stage, most workflows are functional but not yet robust or reusable.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h3>Add a Validation</h3>
<p>After an important action, add an Assert or Soft Verify node to check that a screen is visible, a value is correct, or an element is present.</p>
<div class="tip"><span class="tip-icon">💡</span>Use Soft Verify when the test should continue even if a check fails.</div>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h3>Introduce Test Data</h3>
<p>Replace static values with dynamic data using the Test Data Easy node. Insert the node directly after the start node at the beginning of the workflow. This allows your workflow to run with different data sets and to be reused across scenarios.</p>
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<h3>Clean Up and Structure</h3>
<p>Rename nodes for better readability (e.g., "Click Button" → "Click Login"), mentally group logical steps (Login, Navigation, Action), and remove unnecessary steps. A clean workflow is easier to debug and maintain.</p>
</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content">
<h3>Debug the Workflow</h3>
<p>Switch to debug mode. Set a breakpoint at a critical step, run the workflow, step through it, and observe the behavior in the live view. Use the execution log to check timing, success/failure, and errors. Fix issues immediately.</p>
</div>
</div>
<div class="step">
<div class="step-num">7</div>
<div class="step-content">
<h3>Confirm Test Readiness</h3>
<p>Your workflow is ready when: all steps execute successfully, validations are in place, test data is correctly configured, and no blocking errors occur during debugging. The workflow can now be reliably executed in automated runs via the Scheduler.</p>
</div>
</div>
</div>
`,
  "debugging": `<span class="section-label">Getting Started</span>
<h1>Debug a Workflow</h1>
<p>Autemos provides powerful debugging capabilities to ensure workflows work as expected. Switch between <strong>Run</strong> and <strong>Debug</strong> mode directly from the workflow canvas.</p>
<div class="screenshot-wrap" style="display:inline-block;margin-bottom:24px">
<img alt="Run and Debug mode toggle" src="./autemos_images/image7.png" style="max-width:240px"/>
<div class="screenshot-caption">Switch between Run and Debug mode via the canvas toolbar.</div>
</div>
<div style="display:flex;gap:24px;align-items:flex-start;margin:12px 0 20px">
  <div style="flex:1;min-width:0">
    <h2 style="margin-top:0">Debug Mode</h2>
    <p>When running a workflow in debug mode, you can:</p>
    <ul class="feature-list">
      <li>Set breakpoints at critical steps</li>
      <li>Execute steps individually using the Step button</li>
      <li>Resume or pause execution at any time</li>
    </ul>
    <div class="screenshot-wrap" style="display:inline-block;margin:12px 0 0">
      <img alt="Debug controls — Resume, Step, Stop, Paused" src="./autemos_images/image9.png" style="max-width:340px"/>
      <div class="screenshot-caption">Debug controls — Resume, Step, Stop, and Paused state.</div>
    </div>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 320px;margin:0">
    <img alt="Debug breakpoints" src="./autemos_images/image8.png"/>
    <div class="screenshot-caption">Set breakpoints to pause workflow execution at a specific step and inspect it.</div>
  </div>
</div>
<h2>Execution Log</h2>
<p>The execution log provides step-by-step status updates, execution times, and detailed error information. Use it to pinpoint exactly which step failed and why.</p>
<h2>Live Execution View</h2>
<div class="screenshot-wrap">
<img alt="Live Device View" src="./autemos_images/image10.png"/>
<div class="screenshot-caption">Live Device View — observe real-time interaction with the application during execution.</div>
</div>
<p>For UI-based tests (web or mobile), a live view shows real-time interaction with the application, a visual confirmation of each step, and the option to open the view in a separate tab. This makes it easier to quickly identify and resolve issues.</p>
`,
  "error-handling": `<span class="section-label">Getting Started</span>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <h1 style="margin-top:0">Error Handling &amp; Soft Verify</h1>
    <p>Workflows support flexible error handling strategies.</p>
    <h2>Default Behavior</h2>
    <p>By default, a workflow stops execution when a step fails. This is the safest option and ensures that issues become immediately visible.</p>
    <h2>Soft Verify</h2>
    <p>When using Soft Verify, errors are logged and execution continues. This is useful when multiple validations should run and you want a complete test result instead of an early termination.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 320px;margin:0">
    <img alt="Error handling" src="./autemos_images/image11.png"/>
    <div class="screenshot-caption">A failed step displays the error details inline — XPath or selector issues are shown directly on the node.</div>
  </div>
</div>
<h2>When to Use Which Approach</h2>
<div class="concept-grid">
<div class="concept-card">
<h3>Default (Stop on Failure)</h3>
<p>Use this when a step failure makes all subsequent steps pointless. For example, if login fails, continuing makes no sense.</p>
</div>
<div class="concept-card">
<h3>Soft Verify (Continue)</h3>
<p>Use this when you want to collect all validation errors in a single run, e.g., for form field validations or UI state checks.</p>
</div>
</div>
<h2>Prepare a Workflow for Execution</h2>
<p>Before a workflow can be executed automatically in headless mode (e.g., in a scheduler), it must be test-ready. A test is considered ready when:</p>
<ul class="feature-list">
<li>All steps execute successfully</li>
<li>Data dependencies are resolved</li>
<li>No blocking errors remain</li>
</ul>
`,
  "self-healing": `<span class="section-label">Getting Started</span>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <h1 style="margin-top:0">Self-Healing</h1>
    <p>Autemos provides self-healing capabilities for element identification. When a UI element changes between test runs — e.g., when a CSS class, ID, or attribute is modified — the system can attempt to recover automatically.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 320px;margin:0">
    <img alt="Self-Healing" src="./autemos_images/image12.png"/>
    <div class="screenshot-caption">Self-Healing — automatic recovery on UI changes.</div>
  </div>
</div>
<div class="concept-grid">
<div class="concept-card">
<h3>Reduced Flakiness</h3>
<p>Tests continue to work even when minor UI changes occur, without manual intervention.</p>
</div>
<div class="concept-card">
<h3>Lower Maintenance Effort</h3>
<p>Self-healing reduces the time spent updating selectors after application updates.</p>
</div>
</div>
<div class="tip"><span class="tip-icon">💡</span>Self-healing works best when elements are registered in the Page Object Repository with multiple selector strategies. The more fallback strategies available, the higher the recovery rate.</div>
`,
  "related-modules": `<span class="section-label">Getting Started</span>
<h1>Related Modules</h1>
<p>Test Workflows are part of a larger ecosystem within Autemos.</p>
<div class="module-grid">
<div class="module-card">
<strong>Page Object Repository</strong>
<span>Central management of UI elements used in workflows</span>
</div>
<div class="module-card">
<strong>Test Data Module</strong>
<span>Management of reusable test data and dynamic bindings</span>
</div>
<div class="module-card">
<strong>Test Scheduler</strong>
<span>Enables parallel and headless execution of workflows</span>
</div>
<div class="module-card">
<strong>Code Generation &amp; Git Integration</strong>
<span>Versioning and integration with development workflows</span>
</div>
<div class="module-card">
<strong>Settings / Execution Platforms</strong>
<span>Configuration of execution environments and platforms</span>
</div>
<div class="module-card">
<strong>Recorder</strong>
<span>Record tests with a manual click recorder or AI chatbot</span>
</div>
</div>
`,
  "open-browser": `<div class="node-left"><div class="node-header">
<div>
<h1>Open Browser</h1>
<span class="badge badge-browser">Browser</span>
</div>
</div><p>The Open Browser node launches a new browser instance for executing web-based test steps. It defines the execution context, including the target platform and whether the browser runs in headless mode.</p><h2>When to Use</h2><ul class="feature-list">
<li>Start a web test workflow</li>
<li>Define the execution environment for browser-based testing</li>
<li>Run tests on a specific platform or configuration</li>
<li>Prepare workflows for local debugging or automated execution</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node is typically the <strong>first step</strong> in any web test workflow.</div></div><div class="screenshot-wrap">
<img alt="Open Browser configuration" src="./autemos_images/image13.png"/>
<div class="screenshot-caption">Open Browser configuration — select platform and headless mode.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Headless</strong></td><td>Runs the browser without a visible user interface</td><td>No</td><td><code>true</code></td></tr>
<tr><td><strong>Platform</strong></td><td>Defines the target execution platform</td><td>Yes</td><td><code>Chrome</code></td></tr>
<tr><td><strong>Test Type</strong></td><td>Defines the type of test execution</td><td>Yes</td><td><code>Web</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Initializes a new browser session</li>
<li>Applies the selected platform and configuration</li>
<li>Launches the browser in visible mode (for debugging) or headless mode (for automated execution)</li>
<li>Prepares the environment for all subsequent browser interactions</li>
</ul>
<h2>Output</h2>
<p>No direct output. The node establishes a browser session that is used by all subsequent steps.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Stops execution if the browser cannot be launched</li>
<li>Stops execution if the selected platform or configuration is invalid</li>
</ul>
<div class="example-block">
<h3>Example — Start a Chrome web test</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Headless</strong></td><td><code>false</code></td></tr>
<tr><td><strong>Platform</strong></td><td><code>Chrome</code></td></tr>
<tr><td><strong>Test Type</strong></td><td><code>Web</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use non-headless mode during development and debugging</li>
<li>Use headless mode for automated and scheduled executions</li>
<li>Make sure the correct platform is selected for your test scenario</li>
<li>Keep this node at the beginning of your workflow</li>
<li>Avoid mixing multiple browser sessions within a single workflow unless explicitly required</li>
</ul>
`,
  "navigate": `<div class="node-left"><div class="node-header">
<div>
<h1>Navigate</h1>
<span class="badge badge-browser">Browser</span>
</div>
</div><p>The Navigate node opens a specific URL in the active browser session. It is typically used after an Open Browser node to load the application or page where the test should begin.</p><h2>When to Use</h2><ul class="feature-list">
<li>Open the initial application URL</li>
<li>Navigate directly to a specific page or deep link</li>
<li>Start a workflow from an environment-dependent application configuration</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Use the <strong>Application</strong> field when the URL should depend on the selected environment (dev, staging, production).</div></div><div class="screenshot-wrap">
<img alt="Navigate configuration" src="./autemos_images/image14.png"/>
<div class="screenshot-caption">Navigate configuration — enter a URL directly or select an Application for environment-dependent navigation.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Application</strong></td><td>Project application used to resolve the target URL based on the selected environment</td><td>No</td><td><code>Customer Portal</code></td></tr>
<tr><td><strong>URL</strong></td><td>Direct URL or path to navigate to</td><td>Yes</td><td><code>https://example.com/login</code></td></tr>
<tr><td><strong>Wait Until</strong></td><td>Defines when navigation is considered complete</td><td>No</td><td><code>load</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* The URL can be specified directly or resolved via the selected application configuration.</p>
<p><strong>Wait Until Options</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>load</code></td><td>Continues after the full page load event has fired</td></tr>
<tr><td><code>domcontentloaded</code></td><td>Continues when the initial HTML has been loaded and parsed</td></tr>
<tr><td><code>networkidle</code></td><td>Continues when network activity has become idle</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Uses the active browser session</li>
<li>Resolves the target from the selected Application or a specified URL</li>
<li>Navigates the browser to the target page</li>
<li>Waits until the configured page load condition is met</li>
<li>Fails if navigation cannot be completed</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Navigate to a login page</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Application</strong></td><td><code>Customer Portal</code></td></tr>
<tr><td><strong>URL</strong></td><td><code>/login</code></td></tr>
<tr><td><strong>Wait Until</strong></td><td><code>load</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Place Navigate directly after Open Browser for web workflows</li>
<li>Prefer Application-based navigation for environment-dependent tests</li>
<li>Choose <code>networkidle</code> carefully — apps with continuous background requests may never become idle</li>
<li>Add an Assert or Soft Verify node after navigation to confirm the expected page is shown</li>
</ul>
`,
  "close-browser": `<div class="node-left"><div class="node-header">
<div>
<h1>Close Browser</h1>
<span class="badge badge-browser">Browser</span>
</div>
</div><p>The Close Browser node terminates the active browser session. It is typically used at the end of a Test Workflow to release resources and complete execution.</p><h2>When to Use</h2><ul class="feature-list">
<li>End a web test workflow</li>
<li>Release browser resources after execution</li>
<li>Ensure a clean test lifecycle for repeated or scheduled executions</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node is typically placed at the <strong>end</strong> of a workflow.</div></div><div class="screenshot-wrap">
<img alt="Close Browser configuration" src="./autemos_images/image29.png"/>
<div class="screenshot-caption">Close Browser configuration — enable Keep Alive optionally for debugging sessions.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Keep Alive</strong></td><td>Keeps the browser session open after execution (useful for debugging)</td><td>No</td><td><code>false</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Closes the active browser session and ends all interactions</li>
<li>Releases related resources</li>
<li>If <strong>Keep Alive</strong> is enabled: the browser session remains open — useful for debugging or manual inspection</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Close the browser at the end of the workflow</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Keep Alive</strong></td><td><code>false</code></td></tr>
</tbody>
</table>
</div>
<p>Use Keep Alive = true only when debugging to inspect the end state.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Place this node at the end of your workflow</li>
<li>Use <code>Keep Alive = true</code> only when debugging</li>
<li>Always close sessions in automated runs to avoid resource leaks</li>
</ul>
`,
  "type": `<div class="node-left"><div class="node-header">
<div>
<h1>Type</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Type node enters text into a specific input field. It is used to simulate user input in forms, search fields, login screens, or any editable UI elements.</p><h2>When to Use</h2><ul class="feature-list">
<li>Enter text in input fields</li>
<li>Fill out forms (e.g., name, email, password)</li>
<li>Provide dynamic values from test data</li>
<li>Simulate realistic user typing behavior</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Use <a href="#select">Select</a> instead when the field requires selection from predefined options.</div></div><div class="screenshot-wrap">
<img alt="Type configuration" src="./autemos_images/image15.png"/>
<div class="screenshot-caption">Type configuration — specify the target field and the value to enter.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target input field</td><td>Yes</td><td><code>LoginPage.passwordField</code></td></tr>
<tr><td><strong>Value</strong></td><td>Text to enter</td><td>Yes</td><td><code>MySecret123</code></td></tr>
<tr><td><strong>Bindings</strong></td><td>Allows dynamic values from variables or test data</td><td>No</td><td><code>\${password}</code></td></tr>
<tr><td><strong>Clear First</strong></td><td>Clears existing content before entering text</td><td>No</td><td><code>true</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the target input field is available and interactable</li>
<li>Optionally clears existing content if <strong>Clear First</strong> is enabled</li>
<li>Enters the specified value and triggers input-related events</li>
<li>Fails if the field cannot be found or interacted with</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Enter a verification code</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>VerificationPage.codeField</code></td></tr>
<tr><td><strong>Value</strong></td><td><code>123456</code></td></tr>
<tr><td><strong>Clear First</strong></td><td><code>true</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Enable Clear First if fields may already contain values</li>
<li>Use bindings for dynamic and reusable test input</li>
<li>Avoid hard-coding sensitive data (e.g., passwords)</li>
<li>Add an Assert or Soft Verify node to validate that the correct value was applied</li>
<li>Use stable input fields from the Page Object Repository</li>
</ul>
`,
  "click": `<div class="node-left"><div class="node-header">
<div>
<h1>Click</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Click node performs a click or tap action on a specific UI element. It is used to trigger buttons, navigate between screens, and submit forms.</p><h2>When to Use</h2><ul class="feature-list">
<li>Trigger buttons or links</li>
<li>Navigate between screens</li>
<li>Submit forms</li>
</ul></div><div class="screenshot-wrap">
<img alt="Click configuration" src="./autemos_images/image16.png"/>
<div class="screenshot-caption">Click configuration — select the target element from the Page Object Repository.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target UI element</td><td>Yes</td><td><code>LoginPage.loginButton</code></td></tr>
<tr><td><strong>Timeout</strong></td><td>Maximum wait time in milliseconds</td><td>No</td><td><code>5000</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the element is visible</li>
<li>Performs the click action</li>
<li>Fails if the element is not found within the timeout</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Click the login button</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>LoginPage.loginButton</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use elements from the Page Object Repository for stability</li>
<li>Make sure the element is visible before interacting with it</li>
<li>Benefits from self-healing when element identification changes</li>
</ul>
`,
  "double-click": `<div class="node-left"><div class="node-header">
<div>
<h1>Double Click</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Double Click node performs a double-click action on a specific UI element. It is used for interactions that require a quick two-click input, such as opening items, activating edit modes, or triggering advanced UI behaviors.</p><h2>When to Use</h2><ul class="feature-list">
<li>A single click is not enough to trigger the desired action</li>
<li>Interaction with elements that require double-click (e.g., lists, tables, file explorers)</li>
<li>Activate edit or detail views in desktop-like web applications</li>
</ul><div class="tip"><span class="tip-icon">💡</span>If a single click works, prefer the <a href="#click">Click</a> node for simplicity.</div></div><div class="screenshot-wrap">
<img alt="Double Click configuration" src="./autemos_images/image17.png"/>
<div class="screenshot-caption">Double Click configuration — select the element that requires a double-click interaction.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target UI element or selector</td><td>Yes</td><td><code>UserList.firstRow</code></td></tr>
<tr><td><strong>Timeout</strong></td><td>Maximum wait time in milliseconds</td><td>No</td><td><code>5000</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the target element is available and interactable</li>
<li>Performs two quick successive click actions on the element</li>
<li>Timing between clicks is handled automatically</li>
<li>Fails if the element is not found within the defined timeout</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Stops execution if the element cannot be found or interacted with</li>
<li>Can be combined with Soft Verify to continue execution on failure</li>
<li>Benefits from self-healing when element identification changes</li>
</ul>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Open a record via double-click</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>UserList.firstRow</code></td></tr>
<tr><td><strong>Timeout</strong></td><td><code>5000</code></td></tr>
</tbody>
</table>
</div>
<p>This action opens the detail view via double-click.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use Double Click only when explicitly required by the application</li>
<li>Make sure the element is visible and not obscured before executing</li>
<li>Avoid using Double Click as a workaround for timing issues</li>
</ul>
`,
  "right-click": `<div class="node-left"><div class="node-header">
<div>
<h1>Right Click</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Right Click node performs a right-click action on a specific UI element. It is typically used to open context menus or trigger secondary actions not available through a standard click.</p><h2>When to Use</h2><ul class="feature-list">
<li>Open a context menu</li>
<li>Access secondary actions of an element</li>
<li>Interact with table rows, cards, files, or list items</li>
<li>Test desktop-like behavior in web applications</li>
</ul></div><div class="screenshot-wrap">
<img alt="Right Click configuration" src="./autemos_images/image18.png"/>
<div class="screenshot-caption">Right Click configuration — select the element to be clicked on.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target UI element or selector</td><td>Yes</td><td><code>UserList.firstRow</code></td></tr>
<tr><td><strong>Timeout</strong></td><td>Maximum wait time in milliseconds</td><td>No</td><td><code>5000</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the target element is available and interactable</li>
<li>Performs a right-click action on the element</li>
<li>Typically opens the element's context menu</li>
<li>Fails if the element cannot be found or interacted with within the timeout</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Stops execution if the target element cannot be found or interacted with</li>
<li>Can be combined with Soft Verify to continue execution on failure</li>
<li>Benefits from self-healing when element identification changes</li>
</ul>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Open the context menu for a user record</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>UserList.firstRow</code></td></tr>
<tr><td><strong>Timeout</strong></td><td><code>5000</code></td></tr>
</tbody>
</table>
</div>
<p>After the context menu is open, continue the workflow with a Click node to select the desired menu option.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Follow with a Click node to select the desired menu option</li>
<li>Add a validation step to confirm the expected context menu appears</li>
<li>Do not rely on native browser context menus — behavior can vary between browsers</li>
</ul>
`,
  "hover": `<div class="node-left"><div class="node-header">
<div>
<h1>Hover</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Hover node moves the cursor over a specific UI element without performing a click. It is used to trigger hover-based behaviors such as tooltips, dropdown menus, or hidden UI elements.</p><h2>When to Use</h2><ul class="feature-list">
<li>A menu or element only appears on hover</li>
<li>Trigger tooltips or overlays</li>
<li>Reveal hidden buttons or actions</li>
<li>Test UI behavior that depends on mouse movements</li>
</ul><div class="tip"><span class="tip-icon">💡</span>If the same action can be triggered by a click, prefer <a href="#click">Click</a> for better stability.</div></div><div class="screenshot-wrap">
<img alt="Hover configuration" src="./autemos_images/image19.png"/>
<div class="screenshot-caption">Hover configuration — select the element to hover over.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target UI element or selector</td><td>Yes</td><td><code>Navigation.menuItem</code></td></tr>
<tr><td><strong>Timeout</strong></td><td>Maximum wait time in milliseconds</td><td>No</td><td><code>5000</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the target element is available and visible</li>
<li>Moves the cursor over the element</li>
<li>Triggers any hover-based UI behavior (e.g., dropdowns, tooltips)</li>
<li>Does not perform a click or further interaction</li>
<li>Fails if the element is not found within the timeout</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Stops execution if the element cannot be found or hovered</li>
<li>Can be combined with Soft Verify to continue execution on failure</li>
<li>Benefits from self-healing when element identification changes</li>
</ul>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Open a dropdown menu via hover</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>Navigation.productsMenu</code></td></tr>
<tr><td><strong>Timeout</strong></td><td><code>5000</code></td></tr>
</tbody>
</table>
</div>
<p>Follow this step with a Click node to select an option from the dropdown.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Combine with a follow-up step (e.g., Click or Assert) to validate the result</li>
<li>Make sure the element is visible before hovering</li>
<li>Avoid relying on pure hover interactions when alternatives are available</li>
</ul>
`,
  "drag-drop": `<div class="node-left"><div class="node-header">
<div>
<h1>Drag &amp; Drop</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Drag &amp; Drop node moves a UI element from one location to another. It is used to test interactions such as moving items between lists, reordering elements, uploading via drop zones, or working with visual editors.</p><h2>When to Use</h2><ul class="feature-list">
<li>Move an element from a source element to a target area</li>
<li>Test drag-and-drop behavior in web or mobile applications</li>
<li>Reorder items in a list or drop objects into containers</li>
</ul></div><div class="screenshot-wrap">
<img alt="Drag and Drop configuration" src="./autemos_images/image20.png"/>
<div class="screenshot-caption">Drag &amp; Drop configuration — define the source element and the target drop area.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Source Field</strong></td><td>UI element to be dragged</td><td>Yes</td><td><code>KanbanCard.todoItem</code></td></tr>
<tr><td><strong>Target Field</strong></td><td>UI element or area where the source element should be dropped</td><td>Yes</td><td><code>KanbanColumn.inProgress</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until both source and target elements are available and interactable</li>
<li>Drags the source element to the target location and releases it</li>
<li>Fails if either element is not found within the timeout</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Move a task card from "To Do" to "In Progress"</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Source Field</strong></td><td><code>TaskBoard.todoCard</code></td></tr>
<tr><td><strong>Target Field</strong></td><td><code>TaskBoard.inProgressColumn</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use stable Page Object Repository elements for source and target</li>
<li>Add an Assert or Soft Verify node after the action to confirm the element was moved successfully</li>
<li>Avoid exact pixel positions when element-based dragging is available</li>
<li>Prefer simpler interactions when the application offers a button-based alternative</li>
</ul>
`,
  "press-key": `<div class="node-left"><div class="node-header">
<div>
<h1>Press Key</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Press Key node sends a key press to a selected UI element. It is used for keyboard-driven interactions such as submitting forms, switching between fields, closing dialogs, or triggering keyboard shortcuts.</p><h2>When to Use</h2><ul class="feature-list">
<li>Submit a form with Enter</li>
<li>Move to the next field with Tab</li>
<li>Close a dialog with Escape</li>
<li>Test accessibility or keyboard navigation</li>
</ul><div class="tip"><span class="tip-icon">💡</span>If the action can be reliably performed with a <a href="#click">Click</a> node, prefer Click for better readability.</div></div><div class="screenshot-wrap">
<img alt="Press Key configuration" src="./autemos_images/image21.png"/>
<div class="screenshot-caption">Press Key configuration — select the target element and the key to be sent.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target UI element that should receive the key press</td><td>Yes</td><td><code>LoginPage.passwordField</code></td></tr>
<tr><td><strong>Key</strong></td><td>Key to send</td><td>Yes</td><td><code>Enter</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the selected field or element is available</li>
<li>Focuses the target element if required</li>
<li>Sends the configured key press</li>
<li>Triggers the corresponding application behavior</li>
<li>Fails if the target element cannot be found or the key press cannot be performed</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Stops execution if the target element cannot be found or interacted with</li>
<li>Can be combined with Soft Verify to continue execution on failure</li>
<li>Benefits from self-healing when element identification changes</li>
</ul>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Submit a login form with Enter</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>LoginPage.passwordField</code></td></tr>
<tr><td><strong>Key</strong></td><td><code>Enter</code></td></tr>
</tbody>
</table>
</div>
<p>The key press submits the form and triggers the next page load.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Select the element that should receive the key press</li>
<li>Use Tab and Escape carefully — behavior varies depending on focus state</li>
<li>Add an Assert or Soft Verify node after the key press to validate the expected result</li>
</ul>
`,
  "scroll": `<div class="node-left"><div class="node-header">
<div>
<h1>Scroll</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Scroll node scrolls the viewport either to a specific UI element or to a defined position using coordinates. It brings elements into the visible area or explicitly controls scroll behavior in complex layouts.</p><h2>When to Use</h2><ul class="feature-list">
<li>An element is not visible in the current viewport</li>
<li>Preparation for interactions such as Click or Type</li>
<li>Test scroll behavior (e.g., lazy loading, long pages)</li>
<li>Scroll to a specific position within a page or container</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Many interactions automatically scroll into the visible area. Use this node only when explicit scroll control is required.</div></div><div class="screenshot-wrap">
<img alt="Scroll configuration" src="./autemos_images/image22.png"/>
<div class="screenshot-caption">Scroll configuration — choose between element-based and coordinate-based scrolling.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target UI element (used when scrolling to an element)</td><td>No</td><td><code>CheckoutPage.submitButton</code></td></tr>
<tr><td><strong>Scroll To</strong></td><td>Defines the scroll mode (element or position)</td><td>Yes</td><td><code>element</code></td></tr>
<tr><td><strong>X</strong></td><td>Horizontal scroll offset in pixels (position mode)</td><td>No</td><td><code>0</code></td></tr>
<tr><td><strong>Y</strong></td><td>Vertical scroll offset in pixels (position mode)</td><td>No</td><td><code>500</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Field is only required when Scroll To = element.</p>
<h2>Scroll Modes</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Scroll To Element</h3><p>Scrolls until the target element is visible in the viewport.</p></div>
<div class="concept-card"><h3>Scroll To Position</h3><p>Scrolls to the specified X/Y coordinates without requiring a UI element.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Scroll to an element</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Field</strong></td><td><code>CheckoutPage.submitButton</code></td></tr>
<tr><td><strong>Scroll To</strong></td><td><code>element</code></td></tr>
</tbody></table></div>
<h3>Example — Scroll to a position</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Scroll To</strong></td><td><code>position</code></td></tr>
<tr><td><strong>X</strong></td><td><code>0</code></td></tr>
<tr><td><strong>Y</strong></td><td><code>800</code></td></tr>
</tbody></table></div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Prefer element-based scrolling for stability</li>
<li>Avoid hard-coded coordinates when a Page Object element is available</li>
<li>Combine with a follow-up action (e.g., Click or Assert)</li>
<li>Make sure the correct scroll container is targeted in complex layouts</li>
</ul>
`,
});
