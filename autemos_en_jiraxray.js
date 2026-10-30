window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "jiraxray-overview": `
<span class="section-label">Getting Started</span>
<div class="section-intro"><h1>Jira Xray Integration</h1></div>
<p>The Jira Xray integration connects test design in Jira directly with AI-assisted test automation in Autemos.</p>
<p>Existing Xray Test Cases can be selected directly in the Autemos <a href="#recorder-overview">Recorder</a>. Relevant content such as <strong>manual test steps, expected results and Cucumber scenarios</strong> is transferred to Autemos and used as input for the recording.</p>
<p>The Recorder processes the imported test definition step by step while users can visually follow the automation progress. When the resulting Test Workflow is saved, it remains linked to the original Xray Test Case.</p>
<h2>Capabilities</h2>
<div class="concept-grid">
  <div class="concept-card"><h3>Select a Test Case</h3><p>Select an existing Xray Test Case directly in the Recorder.</p></div>
  <div class="concept-card"><h3>Use the Test Definition</h3><p>Use manual test steps or Cucumber scenarios as recording input.</p></div>
  <div class="concept-card"><h3>Link Automatically</h3><p>Automatically link the saved Test Workflow to the Xray Test Case.</p></div>
  <div class="concept-card"><h3>Show Context</h3><p>Display key Xray metadata and open the linked Test Case directly from the workflow.</p></div>
  <div class="concept-card"><h3>Detect Changes</h3><p>Detect, review and accept changes to the Xray test case in Jira in a controlled way.</p></div>
  <div class="concept-card"><h3>Run Xray Runs</h3><p>Run Test Executions and Test Plans with the linked workflows and write the results back to Xray.</p></div>
  <div class="concept-card"><h3>Collections with Test Sets</h3><p>Create and connect collections from Xray Test Sets; their runs appear as a Test Execution in Jira.</p></div>
</div>
<p>Autemos writes execution results back to Jira Xray: on the <a href="#jiraxray-runs">Test Runs</a> page, Xray Test Executions and Test Plans can be run, collections can be connected to Xray Test Sets and changes to the test case in Jira are detected.</p>
`,
  "jiraxray-select": `
<span class="section-label">Recorder</span>
<h1>Select an Xray Test Case in the Recorder</h1>
<p>Start a new Recorder session and open the <strong>Test case</strong> panel. Search for and select the required Test Case from the connected Jira Xray project.</p>
<p>Depending on the Xray Test Type, Autemos imports the available test definition, including:</p>
<ul class="feature-list">
<li>Jira Issue Key and Test Case title</li>
<li>Description and relevant test context</li>
<li>Manual test steps, test data and expected results</li>
<li>Cucumber / Gherkin scenario steps</li>
</ul>
<p>The Test Case becomes the functional input for the recording. Users therefore do not need to copy the test definition manually into Autemos.</p>
<div class="screenshot-wrap">
<img alt="Xray Test Case with manual test steps in the Recorder" src="./autemos_jiraxray_screenshots/image_1.png"/>
<div class="screenshot-caption">Select and record Xray Test Cases directly in Autemos.</div>
</div>
`,
  "jiraxray-manual": `
<span class="section-label">Recorder</span>
<h1>Automating Manual Test Steps</h1>
<p>For manual Xray Test Cases, Autemos displays the available test steps in their defined sequence.</p>
<p>The AI Recorder works through the test step by step. During the recording:</p>
<ul class="feature-list">
<li>Completed steps are visually marked</li>
<li>The current automation progress remains visible</li>
<li>Open steps can be reviewed at any time</li>
<li>The AI Chat documents the Recorder actions and any questions that require user input</li>
</ul>
<p>This provides transparency throughout the automation process and makes it easier to understand how the original Xray Test Case is translated into an executable Test Workflow.</p>
`,
  "jiraxray-cucumber": `
<span class="section-label">Recorder</span>
<h1>Using Cucumber Scenarios</h1>
<p>Autemos also supports Xray Test Cases described as Cucumber / Gherkin scenarios.</p>
<p>The scenario is displayed in the Recorder and processed in its original sequence, including steps such as:</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Step</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>Given</strong></td><td>Defines the initial context or precondition</td></tr>
<tr><td><strong>When</strong></td><td>Describes the user action or event</td></tr>
<tr><td><strong>Then</strong></td><td>Defines the expected result</td></tr>
<tr><td><strong>And</strong></td><td>Adds further context, actions or validations</td></tr>
</tbody>
</table>
</div>
<p>As the Recorder automates the scenario, completed steps are visually highlighted. This allows business-readable acceptance scenarios to be used directly as the basis for executable automation.</p>
<div class="screenshot-wrap">
<img alt="Cucumber scenario with completed steps in the Recorder" src="./autemos_jiraxray_screenshots/image_2.png"/>
<div class="screenshot-caption">Import and process Cucumber scenarios step by step.</div>
</div>
`,
  "jiraxray-progress": `
<span class="section-label">Recorder</span>
<h1>Visual Recording Progress</h1>
<p>The Recorder brings the application, AI interaction and Xray Test Case context together in a single view.</p>
<p>During the recording, users can follow:</p>
<ul class="feature-list">
<li>The application currently being automated</li>
<li>Recorded browser, mobile or API actions</li>
<li>The Test Case steps or Cucumber scenario</li>
<li>The number of completed and remaining steps</li>
<li>AI messages, questions and the current processing status</li>
</ul>
<p>This makes the automation process understandable and allows users to intervene when additional functional information is required.</p>
`,
  "jiraxray-link": `
<span class="section-label">Linking</span>
<h1>Linking the Test Workflow to Jira Xray</h1>
<p>When the recording is saved, Autemos creates the Test Workflow and automatically links it to the selected Xray Test Case.</p>
<p>The link preserves traceability between the functional test definition in Jira and its technical automation in Autemos. No additional manual mapping is required after the recording.</p>
<p>The linked relationship is visible directly in the Test Workflow and can be removed using the <strong>Unlink</strong> action if the workflow should no longer be associated with the Test Case.</p>
<p>An existing link can also be <a href="#jiraxray-change">changed</a> directly to a different Test Case.</p>
<div class="screenshot-wrap">
<img alt="Linked Xray context in the workflow editor" src="./autemos_jiraxray_screenshots/image_4.png"/>
<div class="screenshot-caption">Linked Xray context within the workflow editor.</div>
</div>
`,
  "jiraxray-context": `
<span class="section-label">Linking</span>
<h1>Available Xray Context</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div style="flex:1;min-width:0">
    <p>The Xray panel in the Test Workflow displays key information from the linked Test Case. Depending on the available Jira data, this can include:</p>
    <div class="param-table-wrap">
    <table class="param-table">
    <thead><tr><th>Information</th><th>Description</th></tr></thead>
    <tbody>
    <tr><td><strong>Issue Key</strong></td><td>Unique identifier of the Xray Test Case</td></tr>
    <tr><td><strong>Title</strong></td><td>Name of the linked Test Case</td></tr>
    <tr><td><strong>Test Type</strong></td><td>Xray Test Type, for example Manual or Cucumber</td></tr>
    <tr><td><strong>Status</strong></td><td>Current Jira workflow status</td></tr>
    <tr><td><strong>Assignee</strong></td><td>Person assigned to the Test Case in Jira</td></tr>
    <tr><td><strong>Jira priority</strong></td><td>Priority configured in Jira</td></tr>
    <tr><td><strong>Autemos priority</strong></td><td>Authoritative priority in Autemos with its source, see <a href="#jiraxray-priority">Priority</a></td></tr>
    <tr><td><strong>Jira sync status</strong></td><td>Whether the test case in Jira matches the reference state, see <a href="#jiraxray-sync">Detecting changes</a></td></tr>
    <tr><td><strong>Description</strong></td><td>Functional description or scenario context</td></tr>
    <tr><td><strong>Linked on</strong></td><td>Timestamp showing when the relationship was created</td></tr>
    </tbody>
    </table>
    </div>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 300px;margin:0">
    <img alt="Xray panel in the Test Workflow" src="./autemos_jiraxray_screenshots/image_3.png"/>
    <div class="screenshot-caption">Jira Xray information displayed in the Test Workflow.</div>
  </div>
</div>
`,
  "jiraxray-open": `
<span class="section-label">Linking</span>
<h1>Open in Jira Xray</h1>
<p>The linked Issue Key in the Xray tab is a link that opens the issue in Jira (<code>…/browse/&lt;KEY&gt;</code>) in a new tab. Users can move from the automation in Autemos to the functional Test Case without searching for it again in Jira. The link is also shown if the test case was not found or Jira is unreachable. If the Jira address is not known, the key stays plain text without an icon.</p>
`,
  "jiraxray-change": `
<span class="section-label">Linking</span>
<h1>Changing the Link</h1>
<p>In the <strong>Xray</strong> tab of the workflow editor, an existing link can be switched to a different test case without unlinking it first.</p>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-content"><h3>Choose Change</h3><p>The <strong>Change</strong> button sits next to <strong>Unlink</strong>, also for an orphaned link (test case not found or Jira unreachable). It shows the search below the existing link; <strong>Cancel</strong> aborts.</p></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-content"><h3>Search for a test case</h3><p>Search for a key, for example <code>SB-377</code>. The currently linked test case is marked "Already linked" in the result list and cannot be linked again.</p></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-content"><h3>Confirm the replacement</h3><p><strong>Link</strong> on a different result opens <strong>Replace Xray link?</strong>: "Replace the link to … with …? The reference for change detection is taken anew from …". Only <strong>Replace</strong> replaces the link. On an error or <strong>Cancel</strong>, the old link stays unchanged.</p></div></div>
</div>
<p>After replacing, the new key, a fresh reference state and the sync status appear in the tab; the nodes, edges and settings of the workflow do not change. Linking an unlinked workflow for the first time stays without a confirmation dialog.</p>
`,
  "jiraxray-priority": `
<span class="section-label">Linking</span>
<h1>Priority: Jira and Autemos</h1>
<p>Every linked workflow has exactly one <strong>Autemos priority</strong> that is authoritative for test execution. The Xray tab shows it separately from the <strong>Jira priority</strong> (the raw value from Jira), in the <strong>Autemos priority</strong> group with the source "from Jira" or "managed in Autemos". If a manually managed value differs from Jira, "Jira: High" is shown in addition.</p>
<h2>Rule per project</h2>
<p>In the "Jira" card of the project settings (the card with the Jira Project Key), the <strong>Priority handling</strong> field determines where the priority comes from:</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Setting</th><th>Effect</th></tr></thead>
<tbody>
<tr><td><strong>Adopt Jira priority</strong> (default)</td><td>Autemos takes over the Jira priority when linking, when changing the link, on <strong>Check now</strong> and on the periodic check. The priority is read-only in the tab.</td></tr>
<tr><td><strong>Manage independently</strong></td><td>The priority is managed in Autemos. Anyone allowed to write in the project sets it in the tab with the <strong>Priority</strong> select and <strong>Save</strong>. It survives reloads and checks.</td></tr>
</tbody>
</table>
</div>
<h2>Scale and mapping</h2>
<p>The scale is Highest, High, Medium, Low, Lowest and matches the Jira default scheme; Jira names are taken over by the same name regardless of case. Custom Jira priorities are assigned in the <strong>Priority mapping</strong> text field, for example <code>P1=Highest, P2=High</code>; these entries take precedence over the default. An invalid target is rejected on save with a field hint. An unmapped Jira name does not change the Autemos priority and appears as "not mapped (Jira: P7)", without an error and without "Out of sync".</p>
<ul class="feature-list">
<li>A pure priority change in Jira does not change the sync status (see "Detecting changes in Jira").</li>
<li>If Jira is unreachable, the stored priority stays.</li>
<li>When the link is removed, the priority is kept; the source changes to "managed in Autemos". Saving the workflow in the editor does not alter it.</li>
<li>Opening the tab triggers neither a check nor a write access.</li>
</ul>
`,
  "jiraxray-sync": `
<span class="section-label">Linking</span>
<h1>Detecting Changes in Jira</h1>
<p>When linking, Autemos records a reference state of the test case: title, description, test steps (Action, Data, Expected result), Cucumber scenario and test type. Every 6 hours a background job checks all linked workflows one after another against Jira; in addition, the <strong>Check now</strong> button in the tab checks exactly this workflow immediately. Opening the tab does not start a check. Existing links without a reference automatically receive one on the first successful run ("created automatically").</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Jira sync status</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>In sync</strong></td><td>The test case in Jira matches the reference state. "Reference from … by …" and "Last checked" are shown.</td></tr>
<tr><td><strong>Out of sync</strong></td><td>Content, title or test type changed in Jira. The notice <strong>The test case changed in Jira</strong> names the affected areas: Title, Description, Test steps, Scenario, Test type.</td></tr>
<tr><td><strong>Unknown</strong></td><td>The check was not possible (for example missing permission, Jira unreachable, test case deleted, setup missing). The reason is shown in the tab; the reference state stays unchanged.</td></tr>
<tr><td><strong>Not checked yet</strong></td><td>No check yet, or the test case could not be read completely when linking. The link exists anyway.</td></tr>
</tbody>
</table>
</div>
<p>Changes to status, assignee, priority, components, labels, comments, and pure whitespace or line-ending changes do not count and leave the status at "In sync".</p>
<h2>Viewing and accepting changes</h2>
<ul class="feature-list">
<li><strong>View changes</strong> shows, per changed area, the two columns "Reference" and "Jira now"; test steps appear line by line with the markers "changed", "added" and "removed".</li>
<li><strong>Accept changes</strong> takes over exactly the displayed Jira state as the new reference ("In sync", "Reference from … by …"; audit entry). The workflow itself is not changed – adjust its steps manually if needed. If the test case changed again in Jira in the meantime, a message asks you to reload and nothing is accepted.</li>
<li>In the workflow list, every "Out of sync" workflow carries the badge <strong>Jira changed</strong> in table and card; it disappears after "Accept changes".</li>
<li><strong>Unlink</strong> also removes the reference; linking again creates a new one.</li>
</ul>
`,
  "jiraxray-runs": `
<span class="section-label">Execution</span>
<h1>Run from Xray: Running a Test Execution or Test Plan</h1>
<p>On the <strong>Test Runs</strong> page, the <strong>Run from Xray</strong> button runs a Xray Test Execution or Test Plan with the linked Autemos workflows and writes the results back to Xray. The button only appears if the Jira connection is set up and the project is mapped to a Jira project.</p>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-content"><h3>Load</h3><p>In the <strong>Run from Xray</strong> dialog, enter the key under <strong>Test Execution or Test Plan key</strong> and choose <strong>Load tests</strong>. Autemos shows type and title and the <strong>Xray tests</strong> table with the columns Xray test, Autemos workflow and Mapping.</p></div></div>
  <div class="step"><div class="step-num">2</div><div class="step-content"><h3>Check the mapping</h3><p>Every Xray test has exactly one state: <strong>Linked</strong> (with workflow name), <strong>Not linked</strong> or <strong>Ambiguous (n workflows)</strong>. Mapping is done exclusively through the Xray link of active workflows in the project, never by name or similarity. Only "Linked" is run.</p></div></div>
  <div class="step"><div class="step-num">3</div><div class="step-content"><h3>Start</h3><p><strong>Start run</strong> runs the mapped workflows one after another ("Runs 1 of 3 tests"). The button is disabled without a loaded list, on a loading error, or if no test is "Linked".</p></div></div>
</div>
<h2>Target execution</h2>
<p>For a Test Execution, Autemos writes the results into that execution. For a Test Plan, Autemos creates a new execution under the plan at the start ("Autemos run &lt;date time&gt; – &lt;project&gt;"), in which all mapped tests initially stand at TODO. At most 1000 tests of a set are read (otherwise a note appears). If creating it fails, nothing is run.</p>
<h2>Xray run page</h2>
<p>The Xray run page shows the table <strong>Xray run tests</strong> in the <strong>Xray sync</strong> area:</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Column</th><th>Content</th></tr></thead>
<tbody>
<tr><td><strong>Result</strong></td><td>Result in Autemos: PASSED or FAILED (everything except a successful run counts as FAILED), RUNNING or "—". A "Report" link opens the Autemos report.</td></tr>
<tr><td><strong>Xray status</strong></td><td>The status of the test run read back from Xray.</td></tr>
<tr><td><strong>Sync</strong></td><td>"Waiting", <strong>Sent to &lt;execution&gt;</strong> or <strong>Sync failed: &lt;reason&gt;</strong> with the <strong>Retry sync</strong> button; "Not run" for tests without a unique mapping.</td></tr>
</tbody>
</table>
</div>
<ul class="feature-list">
<li>When each workflow ends, Autemos transfers the result to Xray without further action, with a comment "Autemos run &lt;id&gt; – &lt;link to the report&gt;", and reads the status back. If it differs from the Autemos result, the delivery counts as failed.</li>
<li>A failed delivery never changes the result of the run in Autemos. There is no automatic retry; <strong>Retry sync</strong> delivers again. Credentials appear neither in messages nor in the log.</li>
<li>Loading errors appear in the dialog, for example "SB-999999 was not found in Jira project SB." or "SB-377 is a Xray test, not a test execution or test plan.".</li>
<li>A third tab <strong>Xray runs</strong> in the run overview lists all Xray runs; normal runs without a Xray run are unchanged.</li>
</ul>
<h2>Earlier runs of the same execution</h2>
<p>If the same Test Execution is run again, all earlier Autemos reports remain findable:</p>
<ul class="feature-list">
<li>In the Xray test run comment, below the line of the current report, the list <strong>Earlier Autemos runs</strong> shows date, result and report link, newest first. At most 10 entries are listed; further ones are summarized by the line "and n more" with a link to the run page. The current status is written to Xray unchanged.</li>
<li>On the Xray run page, the region <strong>Earlier Autemos runs</strong> shows the table "Earlier runs" with Started, Run, Xray test, Result and Report; without earlier runs it says "No earlier Autemos runs of &lt;key&gt;".</li>
</ul>
`,
  "jiraxray-collections": `
<span class="section-label">Execution</span>
<h1>Collections with Xray Test Sets</h1>
<p>A collection can be connected to a Xray <strong>Test Set</strong>. This only reads from Jira; Autemos writes nothing to the Test Set. A Test Set is not a Test Execution: <strong>Run from Xray</strong> rejects it with "… is a test set, not a test execution or test plan."</p>
<h2>Creating a collection from a Test Set</h2>
<p>In the <strong>+ Create</strong> menu of the workflow overview, the entry <strong>Collection from Xray Test Set</strong> creates a collection. The entry only appears if the project is mapped to a Jira project.</p>
<ul class="feature-list">
<li>In the <strong>Create Collection from Xray Test Set</strong> dialog, enter the key under <strong>Xray Test Set key</strong> and choose <strong>Load</strong>. A key that is not a Test Set produces a message, for example "SB-385 is a test execution, not a test set.", and <strong>Create</strong> stays disabled.</li>
<li>The <strong>Xray tests</strong> table shows every test with its mapping: <strong>Linked</strong>, <strong>Not automated</strong> (no linked workflow) or <strong>Ambiguous (n workflows)</strong>. The name is prefilled with the title of the Test Set and can be changed.</li>
<li>The members of the collection are exactly the "Linked" workflows, in the order of the Test Set.</li>
<li>The detail page shows the <strong>Xray Test Set</strong> entry as a link to Jira (new tab), a note on the number of non-automated tests ("n tests of … are not automated – they are not run.") and the <strong>Xray tests</strong> table. The mapping is calculated live from the current links.</li>
</ul>
<h2>Linking an existing collection afterwards</h2>
<p>The <strong>Link Xray Test Set</strong> button in the header of a collection without a Test Set opens a dialog with loading and preview as above.</p>
<ul class="feature-list">
<li>Existing members stay in the same position; no workflow appears twice. New "Linked" workflows are only added through the checkbox <strong>Add &lt;workflow&gt;</strong> (ticked by default). Workflows already included show "Already in collection", members without a test in the set show "Not in test set … they stay in the collection".</li>
<li>With <strong>Ambiguous</strong>, <strong>Link</strong> stays disabled. Executions and their results remain unchanged.</li>
<li>The dialog warns: "After linking, every run of this collection creates a Xray Test Execution in Jira."</li>
</ul>
<h2>Detecting changes to the Test Set</h2>
<p>For a connected collection, the <strong>Xray sync status</strong> area of the detail page shows the status In sync, Out of sync, Unknown or Not checked yet, including "Reference from … by …" and "Last checked". Autemos checks every 6 hours in the background; <strong>Check for Changes</strong> checks immediately. Added, removed and renamed tests count as a change, pure reordering does not.</p>
<ul class="feature-list">
<li>On "Out of sync", the notice <strong>The test set changed in Jira</strong> gives the numbers ("n added, n removed, n changed").</li>
<li><strong>Review Jira Changes</strong> opens the <strong>Jira changes</strong> table with Xray test, Change (Added, Removed, Changed), reference value, Jira value and mapping. Each change has a checkbox <strong>Apply &lt;key&gt;</strong>; in addition there are "Add &lt;workflow&gt;" (new members) and "Also remove &lt;workflow&gt; from collection" (off by default).</li>
<li><strong>Apply selected</strong> takes over only the chosen changes into the reference and the member list. When all are taken over, the status is "In sync". If Jira changed again in the meantime, nothing is applied. <strong>Cancel</strong> changes nothing.</li>
</ul>
`,
  "jiraxray-collection-runs": `
<span class="section-label">Execution</span>
<h1>Reporting Collection Executions to Xray</h1>
<p>When a collection connected to a Xray Test Set runs (manually or on a schedule), Autemos creates exactly one new Xray Test Execution in the Jira project of the mapping at the start. Every run gets its own execution ("Autemos – &lt;collection&gt; – #&lt;number&gt;"); earlier executions and their results are preserved.</p>
<ul class="feature-list">
<li>The execution contains all tests of the Test Set, initially at TODO.</li>
<li>After each item, Autemos writes the final status after all retries back: successful (also after a retry) → PASSED, failed → FAILED, technical error → FAILED with the comment "ERROR – …". The comment contains the link to the Autemos report and to the collection execution.</li>
<li>Non-automated tests (Not linked or Ambiguous) trigger no report and stay at TODO in Xray; they are never reported as successful.</li>
<li>The collection execution page shows the entry <strong>Xray test execution</strong> as a link to Jira in the "Collection execution" region. The <strong>Xray tests</strong> card lists mapping and delivery status per test: <strong>Sent</strong> (with Xray status), <strong>Failed</strong> (reason in the tooltip), <strong>Not automated</strong> or <strong>Not sent</strong>. Cancelling the execution sets open rows to "Not sent".</li>
<li>If creating the execution fails on a manual start, the message appears in the dialog and the collection is not started. If only a delivery fails, the Autemos result stays unchanged.</li>
<li>Collections without a Test Set and the "Run from Xray" function behave unchanged.</li>
</ul>
`,
  "jiraxray-scope": `
<span class="section-label">Scope</span>
<h1>Current Integration Scope</h1>
<p>The following functionality is currently available:</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Capability</th><th>Availability</th></tr></thead>
<tbody>
<tr><td>Select Xray Test Cases in the Recorder</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Import manual test steps and expected results</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Import Cucumber / Gherkin scenarios</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Visual step-by-step recording progress</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Automatically link a saved Test Workflow</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Display Xray metadata in the Test Workflow</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Open the Test Case directly in Jira Xray</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Change the link to a different Test Case</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Manage Jira priority and Autemos priority separately</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Detect and accept changes to the Test Case in Jira</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Run a Xray Test Execution or Test Plan and write results back to Xray</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Create and link collections from Xray Test Sets and review changes</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
<tr><td>Report collection runs as a Xray Test Execution</td><td><span class="meta-pill pill-yes">Available</span></td></tr>
</tbody>
</table>
</div>
`,
  "jiraxray-use-cases": `
<span class="section-label">Usage</span>
<h1>Typical Use Cases</h1>
<div class="concept-grid">
  <div class="concept-card"><h3>Automating Existing Manual Test Cases</h3><p>Use existing Xray test steps as the basis for an automated Test Workflow.</p></div>
  <div class="concept-card"><h3>Automating Cucumber Acceptance Tests</h3><p>Automate business-readable Given, When and Then scenarios directly in the Recorder.</p></div>
  <div class="concept-card"><h3>Maintaining End-to-End Traceability</h3><p>Keep the automation connected to its original functional Test Case.</p></div>
  <div class="concept-card"><h3>Business and Automation Collaboration</h3><p>Maintain functional definitions in Xray and executable workflows in Autemos.</p></div>
  <div class="concept-card"><h3>Integrated Execution Reporting</h3><p>Make Autemos execution results available in Jira as a Xray Test Execution with report links.</p></div>
</div>
`,
  "jiraxray-best-practices": `
<span class="section-label">Usage</span>
<h1>Best Practices</h1>
<ul class="best-practices">
<li>Keep the Jira Xray Test Case as the functional source of the test definition</li>
<li>Write clear, executable test steps with explicit actions and expected results</li>
<li>Use Cucumber scenarios when business-readable acceptance criteria are required</li>
<li>Review the imported steps before starting the recording</li>
<li>Monitor the visual progress and respond to Recorder questions when functional context is missing</li>
<li>Use the direct Jira link to review or maintain the original Test Case</li>
<li>Unlink a workflow only when the relationship to the Xray Test Case is no longer valid</li>
</ul>
`,
  "jiraxray-related": `
<span class="section-label">Usage</span>
<h1>Related Modules</h1>
<p>The Jira Xray integration is part of the larger Autemos ecosystem.</p>
<div class="module-grid">
<div class="module-card">
<strong>Recorder</strong>
<span>Create automated workflows from Xray Test Cases</span>
</div>
<div class="module-card">
<strong>Test Workflows</strong>
<span>Maintain and execute the resulting automation</span>
</div>
<div class="module-card">
<strong>Test Runs</strong>
<span>Review workflow execution results</span>
</div>
<div class="module-card">
<strong>Projects / Jira Configuration</strong>
<span>Configure access to Jira and Xray</span>
</div>
<div class="module-card">
<strong>Collections</strong>
<span>Organize related Test Workflows for execution and reporting</span>
</div>
</div>
`,
});
