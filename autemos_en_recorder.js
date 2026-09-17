window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "recorder-overview": `
<span class="section-label">Getting Started</span>
<div class="section-intro"><h1>Recorder</h1></div>
<p>The Recorder is the fastest way to create automated tests in Autemos. Instead of building workflows manually step by step, users can simply interact with the application while Autemos automatically captures every action and turns it into reusable test workflows.</p>
<p>The Recorder supports two recording modes:</p>
<ul class="feature-list">
  <li><strong>Manual Recording</strong> — classic click recorder</li>
  <li><strong>AI Recording</strong> — AI-assisted test creation through natural language</li>
</ul>
<p>During recording, Autemos automatically creates Pages and Fields, Workflow Nodes, Assertions, Reusable Selectors, Page Objects as well as table and UI structures. The generated workflow can then be saved and further edited in the Test Workflow Editor.</p>
<h2>Key Features</h2>
<div class="concept-grid">
  <div class="concept-card"><h3>Dual Recording Modes</h3><p>Choose between classic interaction recording (Manual) and AI-driven test creation through natural language (AI).</p></div>
  <div class="concept-card"><h3>Web &amp; Mobile Support</h3><p>Support for browser-based applications as well as mobile automation on Android, iOS, physical devices and device farms.</p></div>
  <div class="concept-card"><h3>Automatic Page Object Detection</h3><p>Pages, Fields and Selectors are automatically detected during recording and created as reusable components.</p></div>
  <div class="concept-card"><h3>Workflow Ready</h3><p>The generated workflow is immediately available in the Test Workflow Editor for further editing and execution.</p></div>
</div>
`,
  "recorder-dashboard": `
<span class="section-label">Getting Started</span>
<h1>Recorder Workspace</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <p>The Recorder provides a central interface for recording, analyzing and saving test flows. The workspace is divided into clearly separated areas that work together during a session.</p>
    <h2 style="margin-top:20px">Main Areas</h2>
    <ul class="feature-list">
      <li><strong>Session Area</strong> — displays the active browser or mobile session</li>
      <li><strong>AI Chat Panel</strong> — interaction with the AI through natural language (AI mode)</li>
      <li><strong>Events Panel</strong> — shows all recorded technical events in real time</li>
      <li><strong>Workflow View</strong> — visualization of the generated test workflow</li>
      <li><strong>Pages View</strong> — display of automatically detected pages and fields</li>
    </ul>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 300px;margin:0">
    <img alt="Recorder dashboard — Manual mode with no active session" src="./autemos_recorder_screenshots/image_1.png"/>
    <div class="screenshot-caption">Recorder Workspace — Manual and AI modes, Events / Workflow / Pages tabs.</div>
  </div>
</div>
`,
  "recorder-session": `
<span class="section-label">Session Management</span>
<h1>Starting a Session</h1>
<p>Users can start new sessions directly from the Recorder. Supported session types: <strong>Web Browser</strong> and <strong>Mobile Device</strong>.</p>
<h2>Web Browser Session</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <p>Configure the browser session through a predefined application and environment, or enter a URL directly.</p>
    <div class="param-table-wrap" style="margin-top:16px">
      <table class="param-table">
        <thead><tr><th>Field</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>Application</strong></td><td>Selection of a defined application</td></tr>
          <tr><td><strong>Environment</strong></td><td>Selection of the target environment (DEV, QA, UAT, PROD)</td></tr>
          <tr><td><strong>Browser</strong></td><td>Selection of the target browser</td></tr>
          <tr><td><strong>Certificate</strong></td><td>Integration of personal or project-wide certificates</td></tr>
          <tr><td><strong>Resolved URL</strong></td><td>Display of the final opened URL</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 260px;margin:0">
    <img alt="Add Session dialog — Web Browser" src="./autemos_recorder_screenshots/image_2.png"/>
    <div class="screenshot-caption">Web Browser Session — select Application, Environment, Browser and Certificate.</div>
  </div>
</div>
<h2>Direct URL Recording</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <p>Alternatively, a URL can be entered directly without selecting an Application or Environment. Ideal for ad-hoc tests, external websites, temporary environments and quick tests.</p>
    <div class="tip"><span class="tip-icon">💡</span>Use <strong>Enter URL manually</strong> when the target is not registered as an Autemos application — the session will not be bound to a project environment.</div>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 260px;margin:0">
    <img alt="Add Session dialog — Direct URL" src="./autemos_recorder_screenshots/image_3.png"/>
    <div class="screenshot-caption">Direct URL entry — start without Application or Environment.</div>
  </div>
</div>
<h2>Mobile Device Session</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <div class="param-table-wrap">
      <table class="param-table">
        <thead><tr><th>Field</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>Platform</strong></td><td>Selection: Android or iOS</td></tr>
          <tr><td><strong>Device</strong></td><td>Selection of a connected device or manual UDID entry</td></tr>
          <tr><td><strong>Application</strong></td><td>Selection of the installed mobile app</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 260px;margin:0">
    <img alt="Add Session dialog — Mobile Device" src="./autemos_recorder_screenshots/image_4.png"/>
    <div class="screenshot-caption">Mobile Device Session — select Platform, Device and Application.</div>
  </div>
</div>
`,
  "recorder-manual": `
<span class="section-label">Session Management</span>
<h1>Manual Recording</h1>
<p>The Manual Recorder is suitable for users who want to work directly with the application while Autemos automatically records every action.</p>
<h2>How It Works</h2>
<p>Start a session, interact with the application and end the flow. Autemos automatically records:</p>
<ul class="feature-list">
  <li>Clicks and inputs</li>
  <li>Navigation and page transitions</li>
  <li>Assertions and element interactions</li>
</ul>
<h2>Automatically Generated Artifacts</h2>
<div class="concept-grid">
  <div class="concept-card"><h3>Workflow Nodes</h3><p>Every recorded action becomes a node in the visual workflow.</p></div>
  <div class="concept-card"><h3>Page Objects</h3><p>Pages and Fields are automatically detected and created as reusable components.</p></div>
  <div class="concept-card"><h3>Assertions</h3><p>Validation steps are captured automatically alongside the interaction events.</p></div>
  <div class="concept-card"><h3>Reusable Selectors</h3><p>Multiple selector strategies are generated per element for long-term stability.</p></div>
</div>
`,
  "recorder-ai": `
<span class="section-label">Session Management</span>
<h1>AI Recording</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <p>With the AI Recorder, users can create tests entirely through natural language. Switch to AI mode and describe the desired scenario in the AI Chat Panel.</p>
    <div class="tip" style="margin-top:16px"><span class="tip-icon">💡</span>Example: <em>"Open eBanking, navigate to Budget, open Help and Contact and verify the phone number."</em></div>
    <p style="margin-top:16px">The AI interprets the input, executes the actions, navigates through the application and automatically creates the complete workflow.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 300px;margin:0">
    <img alt="Recorder in AI mode" src="./autemos_recorder_screenshots/image_5.png"/>
    <div class="screenshot-caption">AI mode — AI Chat Panel and model selector (e.g. GPT-4o).</div>
  </div>
</div>
<h2>Transparent AI Execution</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <p>During AI execution, Autemos shows in real time:</p>
    <ul class="feature-list">
      <li>Executed commands and browser actions</li>
      <li>Generated Workflow Nodes and Page Objects</li>
      <li>Performed assertions</li>
      <li>Execution summary</li>
    </ul>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 220px;margin:0">
    <img alt="AI Chat execution summary" src="./autemos_recorder_screenshots/image_6.png"/>
    <div class="screenshot-caption">AI execution overview — steps and results are shown in the chat.</div>
  </div>
</div>
<h2>Supported AI Models</h2>
<p>The Recorder supports configurable AI Models (e.g. GPT-4o), which can be selected depending on project requirements.</p>
`,
  "recorder-events": `
<span class="section-label">Recorded Data</span>
<h1>Events Recording</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <p>The <strong>Events</strong> tab shows all recorded technical actions with full details.</p>
    <h2 style="margin-top:20px">Typical Events</h2>
    <ul class="feature-list">
      <li><code>open_browser()</code></li>
      <li><code>click_element()</code></li>
      <li><code>assert_element()</code></li>
      <li><code>close_session()</code></li>
    </ul>
    <h2 style="margin-top:20px">Event Details</h2>
    <p>Each event contains: Event Type, Selector, Page Object references, parameters, assertion values as well as browser or device context. Events can be filtered by Web, Mobile and Event Type.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 300px;margin:0">
    <img alt="Events tab showing captured events" src="./autemos_recorder_screenshots/image_7.png"/>
    <div class="screenshot-caption">Events tab — all recorded actions with type, selector and Page Object references.</div>
  </div>
</div>
`,
  "recorder-workflow": `
<span class="section-label">Recorded Data</span>
<h1>Workflow Generation</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <p>Autemos automatically converts the recorded events into a visual workflow. The <strong>Workflow</strong> tab shows the generated graph in real time.</p>
    <h2 style="margin-top:20px">Workflow Contents</h2>
    <ul class="feature-list">
      <li>Navigation Nodes (Open Browser, Close)</li>
      <li>Action Nodes (Click, Type, Swipe)</li>
      <li>Assertions and session handling</li>
      <li>Execution order and conditional logic</li>
    </ul>
    <h2 style="margin-top:20px">Reusability</h2>
    <p>The generated workflows can be edited, combined, scheduled, executed and used for Code Generation.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 220px;margin:0">
    <img alt="Workflow tab showing generated workflow" src="./autemos_recorder_screenshots/image_8.png"/>
    <div class="screenshot-caption">Workflow tab — the generated workflow graph updates in real time.</div>
  </div>
</div>
`,
  "recorder-pages": `
<span class="section-label">Recorded Data</span>
<h1>Automatic Page Object Detection</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:24px">
  <div style="flex:1;min-width:0">
    <p>One of the most important features of the Recorder is the automatic creation of Page Objects. During recording, Autemos continuously detects UI structures and creates reusable components from them.</p>
    <h2 style="margin-top:20px">Automatically Detected Elements</h2>
    <ul class="feature-list">
      <li>Pages, Fields, Buttons, Inputs, Links</li>
      <li>Tables and UI structures</li>
      <li>Assertions and Selectors</li>
    </ul>
    <h2 style="margin-top:20px">Reuse Detection</h2>
    <p>Autemos automatically recognizes already existing elements and marks them as <strong>Reused</strong> or <strong>New</strong> — duplicates are avoided and maintainability is improved.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 300px;margin:0">
    <img alt="Pages tab showing detected Page Objects" src="./autemos_recorder_screenshots/image_9.png"/>
    <div class="screenshot-caption">Pages tab — detected Page Objects and Fields, marked as Reused or New.</div>
  </div>
</div>
`,
  "recorder-output": `
<span class="section-label">Output &amp; Integration</span>
<h1>Recorder Output</h1>
<p>After saving, the Recorder automatically creates a complete set of reusable assets:</p>
<div class="concept-grid">
  <div class="concept-card"><h3>Test Workflow</h3><p>Reusable workflow for execution and editing in the Test Workflow Editor.</p></div>
  <div class="concept-card"><h3>Page Objects</h3><p>Structured page models with Fields and Selectors.</p></div>
  <div class="concept-card"><h3>Assertions</h3><p>Automatically captured validation logic, embedded directly in the workflow.</p></div>
  <div class="concept-card"><h3>Event Metadata</h3><p>Technical execution information for debugging and audit.</p></div>
</div>
<h2>Integration with the Test Workflow Editor</h2>
<p>After saving, the generated workflow can be extended in the Test Workflow Editor: conditions, loops, variables, retry logic, integrations and advanced assertions. The Recorder serves as a foundation for complex enterprise test automation.</p>
<h2>Integration with Code Generation</h2>
<p>The generated workflows can be used directly in the Code Generation Hub to generate automated test code for Selenium, Playwright or Appium.</p>
<h2>Typical Use Cases</h2>
<div class="concept-grid">
  <div class="concept-card"><h3>Rapid Test Creation</h3><p>Create automated tests within minutes.</p></div>
  <div class="concept-card"><h3>Citizen Automation</h3><p>Business users without programming skills can also create tests.</p></div>
  <div class="concept-card"><h3>Page Object Discovery</h3><p>Automatically generate reusable page structures.</p></div>
  <div class="concept-card"><h3>Regression Testing</h3><p>Quickly turn user flows into regression tests.</p></div>
</div>
<h2>Saving as a Test Workflow or Sub-Workflow</h2>
<p>When saving a recording session, you can choose whether the recorded steps are stored as a <strong>Test Workflow</strong> or as a <strong>Sub-Workflow</strong>.</p>
<p>A Sub-Workflow is suitable when the recorded process should be used in multiple tests, represents only part of a complete test, requires reusable input parameters or should be maintained centrally. See <a href="#subworkflows-create">Creating and Extracting Sub-Workflows</a> for the other creation paths.</p>
`,
});
