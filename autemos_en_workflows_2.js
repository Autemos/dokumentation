window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "select": `<div class="node-left"><div class="node-header">
<div>
<h1>Select</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Select node picks an option from a dropdown field. It is used for forms, filters, configuration fields or any UI element where the user must select a value from a list of available options.</p><h2>When to Use</h2><ul class="feature-list">
<li>Select a value from a dropdown</li>
<li>Set form fields with predefined options</li>
<li>Apply filters or categories</li>
<li>Use dynamic values via bindings</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Use <a href="#type">Type</a> only when the field expects free text. Use Select when the value must be chosen from predefined options.</div></div><div class="screenshot-wrap">
<img alt="Select configuration" src="./autemos_images/image23.png"/>
<div class="screenshot-caption">Select configuration — choose target dropdown, value and selection strategy.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Dropdown field for the interaction</td><td>Yes</td><td><code>PaymentPage.countryDropdown</code></td></tr>
<tr><td><strong>Value</strong></td><td>Option value to select</td><td>Yes</td><td><code>Switzerland</code></td></tr>
<tr><td><strong>Bindings</strong></td><td>Allows the value to be provided dynamically</td><td>No</td><td><code>country</code></td></tr>
<tr><td><strong>Select By</strong></td><td>Defines how the option should be selected</td><td>Yes</td><td><code>value</code></td></tr>
</tbody>
</table>
</div>
<p><strong>Select By options</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>value</code></td><td>Selects the option by its underlying value (e.g. <code>CH</code>)</td></tr>
<tr><td><code>text</code></td><td>Selects the option by its visible label (e.g. <code>Switzerland</code>)</td></tr>
<tr><td><code>index</code></td><td>Selects the option by its position in the list (e.g. <code>2</code>)</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the dropdown field is available</li>
<li>Looks up the matching option based on the selected strategy (text, value or index)</li>
<li>Selects the matching option</li>
<li>Fails if the field or option cannot be found</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Selecting a country from a payment form</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>PaymentPage.countryDropdown</code></td></tr>
<tr><td><strong>Value</strong></td><td><code>Switzerland</code></td></tr>
<tr><td><strong>Select By</strong></td><td><code>text</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Prefer selecting by visible text when the value is meaningful to users</li>
<li>Use bindings when dropdown values should come from test data</li>
<li>Avoid index-based selection unless the order of options is stable</li>
<li>Add an Assert or Soft Verify node after selection to confirm that the value was applied</li>
</ul>`,
  "screenshot": `<div class="node-left"><div class="node-header">
<div>
<h1>Screenshot</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Screenshot node captures an image of the current application state during test execution. It can capture either the visible viewport or the entire page, depending on the configuration.</p><h2>When to Use</h2><ul class="feature-list">
<li>Document test execution steps</li>
<li>Capture evidence of test results</li>
<li>Debug issues during execution</li>
<li>Record important checkpoints in a workflow</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Especially useful after important steps, e.g. after login, before submission or when a validation fails.</div></div><div class="screenshot-wrap">
<img alt="Screenshot configuration" src="./autemos_images/image24.png"/>
<div class="screenshot-caption">Screenshot configuration — name the screenshot and optionally enable full-page capture.</div>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Captures the current state of the application at runtime</li>
<li>If <strong>Full Page</strong> is enabled: scrolls and captures the entire page</li>
<li>Otherwise: captures only the visible viewport</li>
<li>Continues execution immediately after capture</li>
</ul>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Name</strong></td><td>Name of the screenshot file</td><td>Yes</td><td><code>login_success</code></td></tr>
<tr><td><strong>Bindings</strong></td><td>Allows dynamic naming via variables</td><td>No</td><td><code>\${testStep}_screenshot</code></td></tr>
<tr><td><strong>Full Page</strong></td><td>Captures the entire page instead of only the visible viewport</td><td>No</td><td><code>true</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Captures the current state of the application at runtime</li>
<li>Saves the screenshot with the defined name</li>
<li>If Full Page is enabled: scrolls and captures the entire page</li>
<li>Otherwise: captures only the visible viewport</li>
<li>Continues execution immediately after capture</li>
</ul>
<h2>Output</h2>
<p>Screenshot file, saved as part of the test execution results.</p>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Typically does not fail, except when capturing the screenshot is not possible</li>
<li>Can be combined with Soft Verify when used in validation flows</li>
<li>Has no impact on the application state</li>
</ul>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span> <span style="font-size:12px;color:var(--text-sm)">(for naming)</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Taking a screenshot after login</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Name</strong></td><td><code>after_login</code></td></tr>
<tr><td><strong>Full Page</strong></td><td><code>false</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use meaningful names for easy screenshot identification</li>
<li>Capture screenshots at critical points (before/after important actions)</li>
<li>Avoid too many screenshots to keep execution lean</li>
<li>Use Full Page only when necessary — it may impact performance</li>
</ul>`,
  "upload-file": `<div class="node-left"><div class="node-header">
<div>
<h1>Upload File</h1>
<span class="badge badge-interaction">UI Interaction</span>
</div>
</div><p>The Upload File node uploads a file to an application via a file input element. It simulates a user selecting a file to upload, without interacting with the native file picker dialog.</p><h2>When to Use</h2><ul class="feature-list">
<li>Upload documents, images or attachments</li>
<li>Test file upload functionality in forms</li>
<li>Provide files for import processes</li>
<li>Automate scenarios that require a file selection</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node works with file input fields and does <strong>not</strong> interact with the system file picker dialog.</div></div><div class="screenshot-wrap">
<img alt="Upload File configuration" src="./autemos_images/image25.png"/>
<div class="screenshot-caption">Upload File configuration — specify the file input element and the file path to upload.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target file input element</td><td>Yes</td><td><code>UploadPage.fileInput</code></td></tr>
<tr><td><strong>File Path</strong></td><td>Path to the file to upload</td><td>Yes</td><td><code>/files/test-document.pdf</code></td></tr>
<tr><td><strong>Bindings</strong></td><td>Allows dynamic file paths via variables</td><td>No</td><td><code>\${filePath}</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the file input element is available</li>
<li>Sets the file path directly on the input element</li>
<li>Triggers the upload process as defined by the application</li>
<li>Fails if the element cannot be found or the file path is not accessible</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Uploading a PDF document</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>UploadPage.fileInput</code></td></tr>
<tr><td><strong>File Path</strong></td><td><code>/files/test-document.pdf</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use file paths that are accessible in the execution environment</li>
<li>Prefer relative or environment-dependent paths whenever possible</li>
<li>Use bindings to make file selection dynamic</li>
<li>Ensure the file input element is correctly defined in the Page Object Repository</li>
</ul>`,
  "switch-session": `<div class="node-left"><div class="node-header">
<div>
<h1>Switch Session</h1>
<span class="badge badge-session">Session Control</span>
</div>
</div><p>The Switch Session node switches execution to another active session within the same workflow. It enables interaction with multiple sessions, such as different browser instances or mobile devices, within a single Test Workflow.</p><h2>When to Use</h2><ul class="feature-list">
<li>Working with multiple browser sessions</li>
<li>Testing interactions between different users (e.g. sender/receiver scenarios)</li>
<li>Switching between web and mobile sessions in a combined workflow</li>
<li>Handling multi-session or multi-device test scenarios</li>
</ul><div class="tip"><span class="tip-icon">💡</span>If your workflow only uses a single session, this node is not required.</div></div><div class="screenshot-wrap">
<img alt="Switch Session configuration" src="./autemos_images/image26.png"/>
<div class="screenshot-caption">Switch Session configuration — select the target session for the execution context.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Target Session</strong></td><td>Name or identifier of the session to switch to</td><td>Yes</td><td><code>Session_2</code></td></tr>
<tr><td><strong>Bindings</strong></td><td>Allows dynamic session selection via variables</td><td>No</td><td><code>\${targetSession}</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Switches the execution context to the specified active session</li>
<li>All subsequent nodes are executed within the selected session</li>
<li>Does not create or close sessions — only switches between existing ones</li>
<li>Fails if the target session does not exist or is not active</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Switching to a secondary browser session</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Target Session</strong></td><td><code>Session_2</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use clear and consistent naming for sessions</li>
<li>Ensure sessions are created and active before switching</li>
<li>Add validation steps after switching to confirm the correct context</li>
<li>Use this node primarily for multi-user or multi-context scenarios</li>
</ul>`,
  "switch-frame": `<div class="node-left"><div class="node-header">
<div>
<h1>Switch Frame</h1>
<span class="badge badge-session">Session Control</span>
</div>
</div><p>The Switch Frame node changes the execution context to a specific iframe or back to the parent frame. It is required when interacting with elements embedded in iframes.</p><h2>When to Use</h2><ul class="feature-list">
<li>Interacting with elements inside an iframe</li>
<li>Switching back from an iframe to the main page</li>
<li>Working with embedded content such as payment providers, external widgets or embedded applications</li>
</ul><div class="tip"><span class="tip-icon">💡</span>If elements cannot be found but are visibly present, they are often inside an iframe — this node is likely required.</div></div><div class="screenshot-wrap">
<img alt="Switch Frame configuration" src="./autemos_images/image27.png"/>
<div class="screenshot-caption">Switch Frame configuration — select the iframe to switch into, or switch back to the parent frame.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Frame Selector</strong></td><td>Selector or reference to the target iframe</td><td>Yes</td><td><code>PaymentPage.paymentIframe</code></td></tr>
<tr><td><strong>Switch To</strong></td><td>Defines the target context (frame or parent frame)</td><td>Yes</td><td><code>frame</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Frame Selector is required when Switch To = frame.</p>
<p><strong>Switch To options</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>frame</code></td><td>Switches the execution context into the specified iframe</td></tr>
<tr><td><code>parent</code></td><td>Switches the execution context back to the parent (outer) frame</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Switch To Frame</h3><p>Waits until the iframe is available and switches the execution context into it. All subsequent actions are executed within the iframe.</p></div>
<div class="concept-card"><h3>Switch To Parent</h3><p>Switches the execution context back to the parent (outer) frame. Required in order to continue interacting with elements outside the iframe.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Switching into an iframe</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Frame Selector</strong></td><td><code>PaymentPage.paymentIframe</code></td></tr>
<tr><td><strong>Switch To</strong></td><td><code>frame</code></td></tr>
</tbody></table></div>
<h3>Example — Switching back to the parent frame</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Switch To</strong></td><td><code>parent</code></td></tr>
</tbody></table></div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Always switch back to the parent frame after completing iframe interactions</li>
<li>Use stable iframe selectors from the Page Object Repository</li>
<li>Keep iframe interactions grouped together in the workflow</li>
<li>Add validation steps to confirm the correct context (e.g. element presence)</li>
</ul>`,
  "exit-frame": `<div class="node-left"><div class="node-header">
<div>
<h1>Exit Frame</h1>
<span class="badge badge-session">Session Control</span>
</div>
</div><p>The Exit Frame node switches the execution context from the current iframe back to a parent document. It is used to leave an iframe and continue interacting with elements outside it.</p><h2>When to Use</h2><ul class="feature-list">
<li>Interactions inside an iframe have been completed</li>
<li>You need to return to the main page or a parent frame</li>
<li>Elements outside the iframe are not accessible after switching into a frame</li>
</ul><div class="tip"><span class="tip-icon">💡</span>If elements suddenly cannot be found after working inside an iframe, you most likely need to exit the frame.</div></div><div class="screenshot-wrap">
<img alt="Exit Frame configuration" src="./autemos_images/image28.png"/>
<div class="screenshot-caption">Exit Frame configuration — exit to the top-level document or one level up.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Exit To</strong></td><td>Defines the target context to switch back to</td><td>Yes</td><td><code>top</code></td></tr>
</tbody>
</table>
</div>
<p><strong>Exit To options</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>parent</code></td><td>Switches one level up from the current iframe</td></tr>
<tr><td><code>top</code></td><td>Switches back to the main document (root level)</td></tr>
</tbody>
</table>
</div>
<h2>Exit To Options</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Top</h3><p>Switches directly to the top-level document, bypassing any nested iframes. Recommended for most use cases.</p></div>
<div class="concept-card"><h3>Parent</h3><p>Switches one level up to the immediate parent frame. Useful when working with nested iframes.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Exiting to the main document</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Exit To</strong></td><td><code>top</code></td></tr>
</tbody></table></div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Always exit the frame after completing iframe interactions</li>
<li>Prefer <code>top</code> when working with nested iframes to avoid confusion</li>
<li>Add validation after exiting to confirm the correct context</li>
<li>Avoid unnecessary context switches</li>
</ul>`,
  "mobile-press-key": `<div class="node-left"><div class="node-header">
<div>
<h1>Mobile Press Key</h1>
<span class="badge badge-mobile">Mobile</span>
</div>
</div><p>The Mobile Press Key node simulates pressing a hardware key on a mobile device. It is used to trigger system-side actions such as navigating back, returning to the home screen or opening device menus.</p><h2>When to Use</h2><ul class="feature-list">
<li>Navigate back in the app using the device back key</li>
<li>Return to the device home screen</li>
<li>Open system menus or device-side controls</li>
<li>Test mobile-specific navigation behavior</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node interacts with the <strong>device</strong>, not just the application UI.</div></div><div class="screenshot-wrap">
<img alt="Mobile Press Key configuration" src="./autemos_images/image30.png"/>
<div class="screenshot-caption">Mobile Press Key configuration — select the hardware key to simulate (e.g. BACK, HOME).</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Key</strong></td><td>Hardware key to simulate on the device</td><td>Yes</td><td><code>BACK</code></td></tr>
</tbody>
</table>
</div>
<p><strong>Available keys</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>BACK</code></td><td>Navigates one step back in the app</td></tr>
<tr><td><code>HOME</code></td><td>Returns to the device home screen</td></tr>
<tr><td><code>MENU</code></td><td>Opens the device or app menu (where supported)</td></tr>
<tr><td><code>APP_SWITCH</code></td><td>Opens the app switcher (recent apps view)</td></tr>
<tr><td><code>ENTER</code></td><td>Confirms input or triggers default actions</td></tr>
<tr><td><code>DELETE</code></td><td>Deletes characters or content</td></tr>
<tr><td><code>VOLUME_UP</code></td><td>Increases device volume</td></tr>
<tr><td><code>VOLUME_DOWN</code></td><td>Decreases device volume</td></tr>
<tr><td><code>POWER</code></td><td>Simulates pressing the power key</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Sends the selected hardware key command to the mobile device</li>
<li>Triggers system-side navigation or actions</li>
<li>Does not require a UI element</li>
<li>Behavior may vary depending on device and platform (Android vs iOS)</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Navigating back to the previous screen</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Key</strong></td><td><code>BACK</code></td></tr>
</tbody>
</table>
</div>
<p>The BACK key triggers the device's native navigation behavior.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use BACK for realistic navigation rather than UI buttons when appropriate</li>
<li>Be aware of differences between Android and iOS behavior</li>
<li>Avoid HOME unless explicitly required (it leaves the app context)</li>
<li>Combine with validation steps to confirm the expected navigation result</li>
</ul>`,
  "swipe": `<div class="node-left"><div class="node-header">
<div>
<h1>Swipe</h1>
<span class="badge badge-mobile">Mobile</span>
</div>
</div><p>The Swipe node performs a swipe gesture on a mobile device. It is used to simulate user interactions such as scrolling, navigating between screens or triggering gesture-based actions.</p><h2>When to Use</h2><ul class="feature-list">
<li>Scroll through content on mobile screens</li>
<li>Navigate between views (e.g. carousels, tabs)</li>
<li>Trigger gesture-based UI behavior</li>
<li>Interact with elements that require swipe actions</li>
</ul></div><div class="screenshot-wrap">
<img alt="Swipe configuration" src="./autemos_images/image31.png"/>
<div class="screenshot-caption">Swipe configuration — choose direction-based or coordinate-based swipe mode.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Direction</strong></td><td>Predefined swipe direction (up, down, left, right)</td><td>No</td><td><code>up</code></td></tr>
<tr><td><strong>Start X</strong></td><td>Start X coordinate of the swipe (coordinate mode)</td><td>No</td><td><code>100</code></td></tr>
<tr><td><strong>Start Y</strong></td><td>Start Y coordinate of the swipe (coordinate mode)</td><td>No</td><td><code>600</code></td></tr>
<tr><td><strong>End X</strong></td><td>End X coordinate of the swipe (coordinate mode)</td><td>No</td><td><code>100</code></td></tr>
<tr><td><strong>End Y</strong></td><td>End Y coordinate of the swipe (coordinate mode)</td><td>No</td><td><code>100</code></td></tr>
<tr><td><strong>Duration</strong></td><td>Duration of the swipe gesture in milliseconds</td><td>No</td><td><code>300</code></td></tr>
</tbody>
</table>
</div>
<h2>Swipe Modes</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Direction-based</h3><p>Uses predefined directions (up, down, left, right). Calculates the swipe coordinates automatically. Recommended for most use cases.</p></div>
<div class="concept-card"><h3>Coordinate-based</h3><p>Uses explicit start and end coordinates. Allows precise control for custom layouts, complex gestures or fine-tuned interactions.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Direction-based swipe</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Direction</strong></td><td><code>up</code></td></tr>
<tr><td><strong>Duration</strong></td><td><code>300</code></td></tr>
</tbody></table></div>
<h3>Example — Coordinate-based swipe</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Start X</strong></td><td><code>100</code></td></tr>
<tr><td><strong>Start Y</strong></td><td><code>600</code></td></tr>
<tr><td><strong>End X</strong></td><td><code>100</code></td></tr>
<tr><td><strong>End Y</strong></td><td><code>100</code></td></tr>
<tr><td><strong>Duration</strong></td><td><code>300</code></td></tr>
</tbody></table></div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Prefer direction-based swipes for stability and readability</li>
<li>Use coordinates only when necessary</li>
<li>Avoid hard-coded coordinates across different devices — screen sizes vary</li>
<li>Keep swipe duration realistic (too fast or slow may affect behavior)</li>
<li>Combine with assertions to verify the expected outcome (e.g. content visible)</li>
</ul>`,
  "assert": `<div class="node-left"><div class="node-header">
<div>
<h1>Assert</h1>
<span class="badge badge-control">Control Flow</span>
</div>
</div><p>The Assert node verifies that a UI element matches an expected condition. It is used to validate application behavior and determine whether a test passes or fails.</p><h2>When to Use</h2><ul class="feature-list">
<li>Verify that an element is visible</li>
<li>Check that expected text or values are displayed</li>
<li>Confirm that a screen, dialog or result appears</li>
<li>Validate the outcome of a previous action</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Assertions are what turn an automated script into a real automated <strong>test</strong>.</div></div><div class="screenshot-wrap">
<img alt="Assert configuration" src="./autemos_images/image32.png"/>
<div class="screenshot-caption">Assert configuration — select element, condition and expected value for verification.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td>Target UI element to check</td><td>Yes</td><td><code>LoginPage.errorMessage</code></td></tr>
<tr><td><strong>Condition</strong></td><td>Condition to check</td><td>Yes</td><td><code>visible</code></td></tr>
<tr><td><strong>Expected Value</strong></td><td>Value for comparison (condition-dependent)</td><td>No</td><td><code>Invalid password</code></td></tr>
<tr><td><strong>Bindings</strong></td><td>Allows dynamic expected values from variables or test data</td><td>No</td><td><code>\${expectedMessage}</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Expected Value is only required for conditions that compare against a value.</p>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the target element or condition can be evaluated</li>
<li>Checks the selected condition against the element</li>
<li>Uses the expected value when the condition requires a comparison</li>
<li>Fails the workflow if the assertion is not met</li>
</ul>
<h2>Output</h2>
<p>No output. The node contributes to the test result by marking the validation as passed or failed.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Verifying that the success message is visible after form submission</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Field</strong></td><td><code>PaymentPage.successMessage</code></td></tr>
<tr><td><strong>Condition</strong></td><td><code>visible</code></td></tr>
<tr><td><strong>Expected Value</strong></td><td><code>(empty)</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Add assertions after important user actions</li>
<li>Prefer meaningful business validations over purely technical checks</li>
<li>Use dynamic expected values when working with test data</li>
<li>Keep assertions focused: one validation per Assert node</li>
<li>Use Soft Verify when you want to collect multiple validation failures in a single run</li>
</ul>`,
  "extract-json": `<div class="node-left"><div class="node-header">
<div>
<h1>Extract JSON Value</h1>
<span class="badge badge-api">API Testing</span>
</div>
</div>
<p>The <strong>Extract JSON Value</strong> node extracts a value from the last API response using a <strong>Response Path</strong> or <strong>JSONPath</strong>. The extracted value is stored as a workflow variable and can be reused in subsequent workflow steps.</p>
<h2>When to Use</h2>
<ul class="feature-list">
<li>Extract values from API responses</li>
<li>Store IDs for later requests</li>
<li>Capture tokens or references</li>
<li>Read nested JSON structures</li>
</ul>
</div>
<div class="screenshot-wrap">
<img alt="Extract JSON Value configuration" src="./autemos_images/image_112.png"/>
<div class="screenshot-caption">Extract JSON Value — configuration of Store As and JSONPath for value extraction.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Store As</strong></td><td>Variable name for the extracted value</td><td>Yes</td><td><code>userId</code></td></tr>
<tr><td><strong>Response Path / JSONPath</strong></td><td>Path to the desired value in the response</td><td>Yes</td><td><code>$.data.id</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Reads the last API response</li>
<li>Executes the JSONPath</li>
<li>Extracts the value</li>
<li>Stores the value as a variable</li>
</ul>
<h2>Output</h2>
<p>The extracted value is exposed through the variable defined by <strong>Store As</strong>. Example: <code>&dollar;{userId}</code></p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Error on invalid JSONPath</li>
<li>Error if no value is found</li>
</ul>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use meaningful variable names</li>
<li>Prefer stable JSONPaths</li>
</ul>`,
  "api-request": `<div class="node-left"><div class="node-header">
<div>
<h1>API Request</h1>
<span class="badge badge-api">API Testing</span>
</div>
</div>
<p>The <strong>API Request</strong> node sends HTTP requests directly within a Test Workflow. It enables calling backend APIs, preparing test data, and combining UI with API testing.</p>
<h2>When to Use</h2>
<ul class="feature-list">
<li>Call backend APIs</li>
<li>Prepare test data</li>
<li>Combine UI and API tests</li>
<li>Load dynamic data</li>
</ul>
<h2>Supported Methods</h2>
<ul class="feature-list">
<li>GET</li>
<li>POST</li>
<li>PUT</li>
<li>DELETE</li>
<li>PATCH</li>
</ul>
</div>
<div class="screenshot-wrap">
<img alt="API Request main configuration" src="./autemos_images/image_113.png"/>
<div class="screenshot-caption">API Request — configure Method and URL.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Method</strong></td><td>HTTP method</td><td>Yes</td><td><code>POST</code></td></tr>
<tr><td><strong>URL</strong></td><td>Target endpoint</td><td>Yes</td><td><code>https://api.example.com/users</code></td></tr>
<tr><td><strong>Auth Type</strong></td><td>Authentication mode</td><td>No</td><td><code>Bearer Token</code></td></tr>
<tr><td><strong>Headers</strong></td><td>HTTP headers</td><td>No</td><td><code>Content-Type: application/json</code></td></tr>
<tr><td><strong>Body</strong></td><td>Request body (JSON)</td><td>No</td><td><code>{"name":"test"}</code></td></tr>
<tr><td><strong>Response Alias</strong></td><td>Name under which the response is stored</td><td>No</td><td><code>createUserResponse</code></td></tr>
</tbody>
</table>
</div>
<h2>Authentication</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div style="flex:1;min-width:0">
    <div class="concept-grid">
      <div class="concept-card"><h3>Bearer Token</h3><p>Token-based authentication.</p></div>
      <div class="concept-card"><h3>Basic Auth</h3><p>Username / password.</p></div>
      <div class="concept-card"><h3>API Key</h3><p>API key in header or query.</p></div>
      <div class="concept-card"><h3>OAuth2</h3><p>OAuth2 flow for secure APIs.</p></div>
      <div class="concept-card"><h3>Shared Config</h3><p>Reuse global authentication configuration.</p></div>
    </div>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 340px;margin:0">
    <img alt="API Request authentication options" src="./autemos_images/image_114.png"/>
    <div class="screenshot-caption">Auth Type — Bearer Token, Basic Auth, API Key, OAuth2, or Shared Config.</div>
  </div>
</div>
<h2>Headers &amp; Body</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div class="screenshot-wrap" style="flex:1;margin:0">
    <img alt="API Request headers editor" src="./autemos_images/image_115.png"/>
    <div class="screenshot-caption">Headers — configure HTTP headers as Key/Value pairs.</div>
  </div>
  <div class="screenshot-wrap" style="flex:1;margin:0">
    <img alt="API Request body editor" src="./autemos_images/image_116.png"/>
    <div class="screenshot-caption">Body — request body (e.g. JSON) for POST/PUT/PATCH requests.</div>
  </div>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Sends the HTTP request</li>
<li>Resolves workflow variables</li>
<li>Stores the response</li>
</ul>
<h2>Output</h2>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div style="flex:1;min-width:0">
    <p>The response is stored under the configured <strong>Response Alias</strong> and can be processed further with <a href="#extract-json">Extract JSON Value</a> or <a href="#verify-response">Verify Response</a>.</p>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 340px;margin:0">
    <img alt="API Request response alias" src="./autemos_images/image_117.png"/>
    <div class="screenshot-caption">Response Alias — stored response for further processing.</div>
  </div>
</div>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Error on invalid URL</li>
<li>Error on invalid authentication</li>
<li>Error on failed request</li>
</ul>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use Shared Config</li>
<li>Validate responses</li>
<li>Never hardcode secrets</li>
</ul>`,
  "verify-response": `<div class="node-left"><div class="node-header">
<div>
<h1>Verify Response</h1>
<span class="badge badge-api">API Testing</span>
</div>
</div>
<p>The <strong>Verify Response</strong> node validates the response of the previous API Request. Three match modes are available: <strong>partial</strong>, <strong>exact</strong>, or <strong>jsonPath</strong>.</p>
<h2>When to Use</h2>
<ul class="feature-list">
<li>Validate API responses</li>
<li>Check status values</li>
<li>Verify JSON structures</li>
<li>Secure backend processes</li>
</ul>
</div>
<div class="screenshot-wrap">
<img alt="Verify Response configuration" src="./autemos_images/image_118.png"/>
<div class="screenshot-caption">Verify Response — configuration of Match Mode and Expected Body.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Match Mode</strong></td><td>Validation mode (partial / exact / jsonPath)</td><td>Yes</td><td><code>partial</code></td></tr>
<tr><td><strong>Expected Body</strong></td><td>Expected value or structure</td><td>Yes</td><td><code>{"status":"ok"}</code></td></tr>
</tbody>
</table>
</div>
<h2>Match Modes</h2>
<div class="concept-grid">
<div class="concept-card"><h3>partial</h3><p>Checks whether the expected fields are contained. Ideal for dynamic responses.</p></div>
<div class="concept-card"><h3>exact</h3><p>Strict match — the response must exactly match the Expected Body.</p></div>
<div class="concept-card"><h3>jsonPath</h3><p>Validation via JSONPath expressions. Ideal for large responses.</p></div>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Reads the last API response</li>
<li>Performs the validation</li>
<li>Stops the workflow on failure</li>
</ul>
<h2>Output</h2>
<p>No direct output. The node validates the response and stops the workflow on failure.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>Error if no response exists</li>
<li>Error if validation fails</li>
</ul>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use <strong>partial</strong> for dynamic responses</li>
<li>Use <strong>exact</strong> only for stable responses</li>
<li>Prefer <strong>jsonPath</strong> for large responses</li>
</ul>`,
  "if": `<div class="node-left"><div class="node-header">
<div>
<h1>If</h1>
<span class="badge badge-control">Control Flow</span>
</div>
</div><p>The If node introduces conditional logic into a Test Workflow. It evaluates a condition and routes the workflow into different branches, depending on whether the condition is met or not.</p><h2>When to Use</h2><ul class="feature-list">
<li>Execute steps only under specific conditions</li>
<li>Handle optional UI elements (e.g. popups, dialogs)</li>
<li>Build flexible and dynamic workflows</li>
<li>Implement fallback or alternative flows</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Use If to make your tests <strong>resilient</strong> instead of relying on rigid step sequences.</div></div><div class="screenshot-wrap">
<img alt="If configuration" src="./autemos_images/image33.png"/>
<div class="screenshot-caption">If configuration — define condition, operator and compare value for the branching logic.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Condition</strong></td><td>Defines what to evaluate</td><td>Yes</td><td><code>visible</code></td></tr>
<tr><td><strong>Operator</strong></td><td>Defines how the condition is evaluated</td><td>Yes</td><td><code>equals</code></td></tr>
<tr><td><strong>Compare Value</strong></td><td>Value for comparison (if required)</td><td>No</td><td><code>Success</code></td></tr>
<tr><td><strong>Bindings</strong></td><td>Allows dynamic values via variables</td><td>No</td><td><code>\${expectedValue}</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Compare Value is only required for conditions that compare values.</p>
<p><strong>Available conditions</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>visible</code></td><td>Element is visible on the screen</td></tr>
<tr><td><code>hidden</code></td><td>Element is not visible</td></tr>
<tr><td><code>exists</code></td><td>Element exists in the DOM/UI</td></tr>
<tr><td><code>notExists</code></td><td>Element does not exist</td></tr>
<tr><td><code>textEquals</code></td><td>Element text matches exactly</td></tr>
<tr><td><code>textContains</code></td><td>Element text contains a value</td></tr>
<tr><td><code>valueEquals</code></td><td>Element value matches expected input</td></tr>
</tbody>
</table>
</div>
<p><strong>Available operators</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>equals</code></td><td>Values must match exactly</td></tr>
<tr><td><code>notEquals</code></td><td>Values must be different</td></tr>
<tr><td><code>contains</code></td><td>Value must contain the expected input</td></tr>
<tr><td><code>greaterThan</code></td><td>Numeric comparison: greater than</td></tr>
<tr><td><code>lessThan</code></td><td>Numeric comparison: less than</td></tr>
<tr><td><code>isEmpty</code></td><td>Value is empty</td></tr>
<tr><td><code>isNotEmpty</code></td><td>Value is not empty</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Evaluates the defined condition at runtime</li>
<li>Compares the result using the selected operator</li>
<li>Routes execution into the True branch (condition met) or False branch (condition not met)</li>
<li>Only the selected branch is executed</li>
</ul>
<h2>Output</h2>
<p>No output. The node controls the workflow execution flow by routing into the True or False branch.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Handling an optional error message</h3>
<p>Only continue if no error message is displayed:</p>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Condition</strong></td><td><code>notExists</code></td></tr>
<tr><td><strong>Operator</strong></td><td><code>equals</code></td></tr>
</tbody></table></div>
<p><strong>True branch:</strong> Continue workflow  |  <strong>False branch:</strong> Handle error (e.g. capture screenshot, stop test)</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use If for optional or dynamic UI behavior</li>
<li>Keep conditions simple and readable</li>
<li>Avoid deeply nested If structures — they are hard to maintain</li>
<li>Combine with Assert or Soft Verify for validation logic</li>
<li>Use variables to make conditions reusable</li>
</ul>`,
  "loop": `<div class="node-left"><div class="node-header">
<div>
<h1>Loop</h1>
<span class="badge badge-control">Control Flow</span>
</div>
</div><p>The Loop node iterates over a data set and executes a group of nodes repeatedly. It is used to process multiple records, enabling data-driven testing within a single Test Workflow.</p><h2>When to Use</h2><ul class="feature-list">
<li>Run the same steps for multiple records</li>
<li>Execute tests with different input values</li>
<li>Iterate over data sets (e.g. users, orders, inputs)</li>
<li>Build scalable and reusable test scenarios</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Loop is essential for <strong>data-driven testing</strong>.</div></div><div class="screenshot-wrap">
<img alt="Loop configuration" src="./autemos_images/image34.png"/>
<div class="screenshot-caption">Loop configuration — define data source, Save As variable and maximum iterations.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Data Source</strong></td><td>Data collection to iterate over</td><td>Yes</td><td><code>\${users}</code></td></tr>
<tr><td><strong>Save As</strong></td><td>Variable name for the current item in each iteration</td><td>Yes</td><td><code>item</code></td></tr>
<tr><td><strong>Max Iterations</strong></td><td>Maximum number of loop runs</td><td>No</td><td><code>100</code></td></tr>
<tr><td><strong>Bindings</strong></td><td>Allows dynamic data sources and variable names</td><td>No</td><td><code>\${dataSet}</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Reads the provided data source</li>
<li>Iterates over each item in the collection</li>
<li>Stores the current item in the variable defined in <strong>Save As</strong></li>
<li>Executes all nodes inside the loop for each item</li>
<li>Stops when all items have been processed or the Max Iterations limit is reached</li>
</ul>
<h2>Output</h2>
<p>No direct output. The Save As variable is available within the loop for each iteration.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Processing multiple users</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Data Source</strong></td><td><code>\${users}</code></td></tr>
<tr><td><strong>Save As</strong></td><td><code>user</code></td></tr>
<tr><td><strong>Max Iterations</strong></td><td><code>50</code></td></tr>
</tbody></table></div>
<p>Inside the loop: <code>Type \${user.name}</code> → <code>Type \${user.email}</code> → <code>Click Submit</code></p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use meaningful variable names (e.g. user, order, item)</li>
<li>Limit iterations for large data sets</li>
<li>Combine with assertions to validate each iteration</li>
<li>Keep loop logic simple and readable</li>
<li>Avoid deeply nested loops — they are hard to maintain and debug</li>
</ul>`,
  "wait": `<div class="node-left"><div class="node-header">
<div>
<h1>Wait</h1>
<span class="badge badge-control">Control Flow</span>
</div>
</div><p>The Wait node pauses execution for a defined period of time. It is used to insert a fixed delay between steps in a Test Workflow.</p><h2>When to Use</h2><ul class="feature-list">
<li>Wait for animations or transitions to complete</li>
<li>Handle known, fixed delays in the application</li>
<li>Stabilize interactions in edge cases when no better condition is available</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Wait should be used sparingly. Prefer condition-based waiting (e.g. <a href="#assert">Assert</a>) whenever possible.</div></div><div class="screenshot-wrap">
<img alt="Wait configuration" src="./autemos_images/image35.png"/>
<div class="screenshot-caption">Wait configuration — specify the pause duration in milliseconds.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Duration</strong></td><td>Wait time</td><td>Yes</td><td><code>1000</code></td></tr>
<tr><td><strong>Unit</strong></td><td>Time unit for the duration (ms or s)</td><td>Yes</td><td><code>ms</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Pauses execution for the specified duration</li>
<li>Does not check any condition during the wait</li>
<li>Continues execution after the time has elapsed</li>
<li>Does not interact with the application state</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="warn-box">
<strong>Common mistakes:</strong> Using Wait instead of real validation, adding large delays to "fix" flaky tests, or chaining multiple Wait nodes leads to slow and unreliable execution. Instead of <code>Wait 5000ms</code>, prefer <code>Assert element is visible</code>.
  </div>
<div class="example-block">
<h3>Example — Waiting for 1 second</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Duration</strong></td><td><code>1000</code></td></tr>
<tr><td><strong>Unit</strong></td><td><code>ms</code></td></tr>
</tbody></table></div>
<div class="tip" style="margin-top:12px"><span class="tip-icon">💡</span>Instead of waiting, prefer <strong>Assert element is visible</strong> or an <strong>If</strong> condition — this makes tests faster and more reliable.</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use Wait only when no condition-based alternative is available</li>
<li>Keep wait times as short as possible</li>
<li>Prefer Assert (e.g. visible) or If conditions over Wait</li>
<li>Use Wait for animations, not for loading logic</li>
</ul>`,
  "time-gap": `<div class="node-left"><div class="node-header">
<div>
<h1>Time Gap</h1>
<span class="badge badge-control">Control Flow</span>
</div>
</div>
<p>The <strong>Time Gap node</strong> splits a Test Workflow into asynchronous parts and resumes execution at a later point in time.</p>
<p>Unlike the standard <a href="#wait">Wait node</a>, workflow execution does <strong>not stay active</strong> at a Time Gap node. Instead, the current workflow part is completed, persisted, and the next part is scheduled separately. This enables long-running and asynchronous automation scenarios.</p>
<div class="tip"><span class="tip-icon">💡</span>Time Gap is essential for enterprise workflows that require delayed continuations, asynchronous processes, or scheduled follow-up validations.</div>
<h2>When to Use</h2>
<p>Use the Time Gap node when:</p>
<ul class="feature-list">
<li>you need to wait several minutes, hours, or days</li>
<li>asynchronous backend processes are being processed</li>
<li>you have to wait for external systems</li>
<li>you build multi-part workflows</li>
<li>delayed business events need to be validated</li>
<li>future workflow continuations are scheduled</li>
<li>retry or follow-up workflows are required</li>
</ul>
<p><strong>Typical examples:</strong> Shipment tracking after dispatch · waiting for payment confirmation · delayed email verification · overnight processing · long-running business workflows.</p>
<div class="tip"><span class="tip-icon">💡</span>Time Gap creates a true <strong>asynchronous workflow boundary</strong>.</div>
</div><div class="screenshot-wrap">
<img alt="Time Gap configuration" src="./autemos_images/image_109.png"/>
<div class="screenshot-caption">Time Gap configuration — Wait Mode (Relative / Absolute), duration, and Continue on Failure.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Wait Mode</strong></td><td>Defines whether Relative or Absolute is used</td><td>Yes</td><td><code>Relative</code></td></tr>
<tr><td><strong>Wait For</strong></td><td>Duration until the next workflow part starts</td><td>Relative only</td><td><code>1</code></td></tr>
<tr><td><strong>Unit</strong></td><td>Time unit for the relative delay</td><td>Relative only</td><td><code>Minutes</code></td></tr>
<tr><td><strong>Anchor Type</strong></td><td>Defines the scheduling mode</td><td>Absolute only</td><td><code>Specific date &amp; time</code></td></tr>
<tr><td><strong>Date &amp; Time (UTC)</strong></td><td>Exact UTC timestamp for the continuation</td><td>Absolute only</td><td><code>2026-03-01 12:00</code></td></tr>
<tr><td><strong>Continue on Failure</strong></td><td>Schedules the next part even on failure</td><td>No</td><td><code>Enabled</code></td></tr>
</tbody>
</table>
</div>
<div style="display:flex;gap:24px;align-items:flex-start;margin:20px 0">
  <div style="flex:1;min-width:0">
    <h2 style="margin-top:0">Behavior</h2>
    <h3>Relative Mode</h3>
    <p>Relative Mode schedules the next workflow part after a defined duration (e.g. after 1 minute, 2 hours, or 1 day).</p>
    <ul class="feature-list">
      <li>The current workflow part is completed</li>
      <li>The workflow state is persisted</li>
      <li>The next part is scheduled after the configured duration</li>
      <li>Execution resumes automatically</li>
    </ul>
    <h3>Absolute Mode</h3>
    <p>Absolute Mode schedules the continuation at a fixed UTC date and time.</p>
    <ul class="feature-list">
      <li>The current workflow part is completed</li>
      <li>The workflow state is persisted</li>
      <li>The next workflow part is bound to a fixed point in time</li>
      <li>Execution resumes automatically at the defined time</li>
    </ul>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 340px;margin:0">
    <img alt="Time Gap Workflow split" src="./autemos_images/image_110.png"/>
    <div class="screenshot-caption">Time Gap automatically divides the workflow into multiple execution parts.</div>
  </div>
</div>
<h2>Workflow Splitting</h2>
<p>The Time Gap node automatically splits workflows into multiple execution parts. Each workflow part is executed <strong>independently</strong>.</p>
<div class="example-block">
  <h3>Example flow</h3>
  <ul class="feature-list">
    <li><strong>Part 1</strong> → Create order</li>
    <li><strong>Time Gap</strong> → Wait 1 hour</li>
    <li><strong>Part 2</strong> → Check shipment tracking</li>
  </ul>
</div>
<h2>Persistent Runtime State</h2>
<p>Since execution is interrupted between workflow parts, the platform automatically persists all relevant workflow data:</p>
<ul class="feature-list">
<li>Workflow variables</li>
<li>Extracted values</li>
<li>Environment configurations</li>
<li>Runtime context</li>
<li>Generated IDs, order numbers, API responses</li>
<li>Session metadata</li>
</ul>
<p>This allows later workflow parts to continue working with the same execution context.</p>
<div class="tip"><span class="tip-icon">💡</span>Correct state persistence is essential for asynchronous automation.</div>
<h2>Output</h2>
<p>No direct output. The node schedules the asynchronous continuation of the workflow.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<h2>Working with Variables</h2>
<p>Variables created <strong>before the Time Gap node</strong> remain available in later workflow parts.</p>
<div class="screenshot-wrap">
<img alt="Time Gap variables" src="./autemos_images/image_111.png"/>
<div class="screenshot-caption">Time Gap — persisted variables are carried across workflow parts.</div>
</div>
<div class="example-block">
<h3>Example</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Save Variable</strong></td><td><code>&dollar;{orderNumber}</code></td></tr>
</tbody></table></div>
<ul class="feature-list" style="margin-top:12px">
<li><strong>Part 1:</strong> Create order → save <code>&dollar;{orderNumber}</code></li>
<li><strong>Part 2:</strong> Reuse <code>&dollar;{orderNumber}</code> → track shipment</li>
</ul>
</div>
<h2>Error Handling</h2>
<ul class="feature-list">
<li>The current workflow part is completed before scheduling</li>
<li>Invalid scheduling configurations can stop execution</li>
<li>Absolute scheduling requires valid UTC timestamps</li>
<li><strong>Continue on Failure</strong> allows continuation despite previous errors</li>
<li>Errors during workflow persistence can prevent continuation</li>
</ul>
<div class="example-block">
<h3>Example — Relative Mode (wait 1 minute)</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Wait Mode</strong></td><td><code>Relative</code></td></tr>
<tr><td><strong>Wait For</strong></td><td><code>1</code></td></tr>
<tr><td><strong>Unit</strong></td><td><code>Minutes</code></td></tr>
</tbody></table></div>
<p style="margin-top:12px"><strong>Behavior:</strong> Part 1 is completed, the workflow pauses asynchronously, Part 2 starts after 1 minute.</p>
</div>
<div class="example-block">
<h3>Example — Absolute Mode (fixed point in time)</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Wait Mode</strong></td><td><code>Absolute</code></td></tr>
<tr><td><strong>Anchor Type</strong></td><td><code>Specific date &amp; time</code></td></tr>
<tr><td><strong>Date &amp; Time (UTC)</strong></td><td><code>2026-03-01 12:00</code></td></tr>
</tbody></table></div>
<p style="margin-top:12px"><strong>Behavior:</strong> The workflow resumes exactly at the defined UTC timestamp.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Persist important runtime data <strong>before</strong> the Time Gap</li>
<li>Use meaningful variable names</li>
<li>Use Relative Mode for flexible delays</li>
<li>Use Absolute Mode for scheduled business events</li>
<li>Keep asynchronous workflows modular and readable</li>
<li>Use Continue on Failure deliberately</li>
<li>Validate delayed workflows after resumption</li>
</ul>`,
  "acquire-test-data": `<div class="node-header">
<div>
<h1>Acquire Test Data</h1>
<span class="badge badge-data">Test Data</span>
</div>
</div>
<p>The Acquire Test Data node retrieves test data from a configured test data source and locks it. It fetches structured data (e.g. users, customers, orders) and makes it available for use in a Test Workflow.</p>
<h2>When to Use</h2>
<ul class="feature-list">
<li>Retrieve test data from a central data source</li>
<li>Perform data-driven tests with managed data sets</li>
<li>Ensure unique or reserved data for each test execution</li>
<li>Avoid conflicts between parallel test runs</li>
</ul>
<div class="tip"><span class="tip-icon">💡</span>This node is essential for <strong>reliable and scalable</strong> test automation.</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Source Type</strong></td><td>Type of data source</td><td>Yes</td><td><code>rest-api</code></td></tr>
<tr><td><strong>Data Type</strong></td><td>Type of record to retrieve</td><td>Yes</td><td><code>CUSTOMER</code></td></tr>
<tr><td><strong>Quantity</strong></td><td>Number of records to retrieve</td><td>Yes</td><td><code>1</code></td></tr>
<tr><td><strong>Scope</strong></td><td>Defines how long the data is reserved</td><td>Yes</td><td><code>RUN</code></td></tr>
<tr><td><strong>TTL Override</strong></td><td>Custom validity duration for the data lock</td><td>No</td><td><code>PT30M</code></td></tr>
<tr><td><strong>Store As</strong></td><td>Variable name for the retrieved data</td><td>Yes</td><td><code>acquiredToken</code></td></tr>
<tr><td><strong>Bypass Cache</strong></td><td>Forces fresh data retrieval, bypassing the cache</td><td>No</td><td><code>false</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Requests data from the configured test data source</li>
<li>Locks the retrieved records to prevent reuse in parallel executions</li>
<li>Stores the result in the defined variable</li>
<li>Makes the data available for subsequent steps via placeholders such as <code>\${"{"}acquiredToken.record.username{"}"}</code></li>
</ul>
<h2>Output</h2>
<p>The retrieved data is stored in the variable defined by <strong>Store As</strong>. Example: <code>\${acquiredToken.record.username}</code> or <code>\${acquiredToken.records[0].email}</code></p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Retrieving a customer record for a test run</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Source Type</strong></td><td><code>rest-api</code></td></tr>
<tr><td><strong>Data Type</strong></td><td><code>CUSTOMER</code></td></tr>
<tr><td><strong>Quantity</strong></td><td><code>1</code></td></tr>
<tr><td><strong>Scope</strong></td><td><code>RUN</code></td></tr>
<tr><td><strong>Store As</strong></td><td><code>acquiredToken</code></td></tr>
</tbody>
</table>
</div>
<p>Usage in a later step: <code>Type \${acquiredToken.record.email}</code></p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use meaningful names for stored variables (e.g. customerData, testUser)</li>
<li>Keep quantity as low as needed to preserve resources</li>
<li>Use Scope = RUN for isolated test executions</li>
<li>Combine with assertions to validate data usage</li>
</ul>`,
  "extract-text": `<div class="node-left"><div class="node-header">
<div>
<h1>Extract Text</h1>
<span class="badge badge-data">Test Data</span>
</div>
</div><p>The Extract Text node reads text or attribute values from a UI element and stores the result in a variable. It is used to capture dynamic application data during test execution for later validation, comparison or reuse.</p><h2>When to Use</h2><ul class="feature-list">
<li>Read values from the user interface</li>
<li>Capture dynamic content such as IDs, messages or totals</li>
<li>Compare displayed values later in the workflow</li>
<li>Store application data for assertions or API calls</li>
<li>Build dynamic and data-driven test scenarios</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Often used together with Assert, If and Type nodes.</div></div><div class="screenshot-wrap">
<img alt="Extract Text configuration" src="./autemos_images/image36.png"/>
<div class="screenshot-caption">Extract Text configuration — select element, attribute to read and variable name to store the result.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Page</strong></td><td>Page Object containing the target element</td><td>Yes</td><td><code>CheckoutPage</code></td></tr>
<tr><td><strong>Element</strong></td><td>UI element from which data is extracted</td><td>Yes</td><td><code>orderNumberLabel</code></td></tr>
<tr><td><strong>Variable Name</strong></td><td>Name of the variable to store the extracted value</td><td>Yes</td><td><code>orderNumber</code></td></tr>
<tr><td><strong>Attribute</strong></td><td>Property or attribute of the element that is read</td><td>Yes</td><td><code>textContent</code></td></tr>
</tbody>
</table>
</div>
<p><strong>Supported attributes</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>textContent</code></td><td>Visible text content of the element</td></tr>
<tr><td><code>value</code></td><td>Current value of an input field</td></tr>
<tr><td><code>innerText</code></td><td>Rendered text displayed to the user</td></tr>
<tr><td><code>placeholder</code></td><td>Placeholder text of an input field</td></tr>
<tr><td><code>href</code></td><td>Target URL of a link</td></tr>
<tr><td><code>src</code></td><td>Source URL of an image or media element</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits until the target element is available</li>
<li>Reads the selected attribute or text value from the element</li>
<li>Stores the extracted value in the specified variable</li>
<li>Makes the value available for all subsequent workflow steps</li>
</ul>
<h2>Output</h2>
<p>The extracted value is stored in the specified variable and is available for all subsequent workflow steps.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Extracting the order number from the checkout page</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Page</strong></td><td><code>CheckoutPage</code></td></tr>
<tr><td><strong>Element</strong></td><td><code>orderNumberLabel</code></td></tr>
<tr><td><strong>Variable Name</strong></td><td><code>orderNumber</code></td></tr>
<tr><td><strong>Attribute</strong></td><td><code>textContent</code></td></tr>
</tbody>
</table>
</div>
<p>Later usage: <code>Assert \${orderNumber} is not empty</code></p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use meaningful variable names</li>
<li>Prefer textContent for visible UI text</li>
<li>Validate extracted values with Assert or If nodes</li>
<li>Avoid unintentionally overwriting variables</li>
<li>Place extraction logic close to where the value is used</li>
</ul>`,
  "persist-test-data": `<div class="node-left"><div class="node-header">
<div>
<h1>Persist Test Data</h1>
<span class="badge badge-data">Test Data</span>
</div>
</div><p>The Persist Test Data node stores previously acquired test data for later reuse in workflow executions or asynchronous processing steps. It is used to retain locked records beyond the current execution context.</p><h2>When to Use</h2><ul class="feature-list">
<li>A workflow is paused and resumed later</li>
<li>Test execution spans multiple asynchronous processes</li>
<li>Retain acquired records across workflow restarts</li>
<li>Coordinate data between multiple execution attempts</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Especially useful in <strong>CI/CD and asynchronous execution</strong> scenarios.</div></div><div class="screenshot-wrap">
<img alt="Persist Test Data configuration" src="./autemos_images/image37.png"/>
<div class="screenshot-caption">Persist Test Data configuration — specify Token Variable, Run ID and Attempt ID.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Token Variable</strong></td><td>Variable containing the acquired record token</td><td>Yes</td><td><code>acquiredToken</code></td></tr>
<tr><td><strong>Run ID</strong></td><td>Unique identifier for the workflow execution</td><td>Yes</td><td><code>ci-build-42</code></td></tr>
<tr><td><strong>Attempt ID</strong></td><td>Identifier for the execution attempt</td><td>Yes</td><td><code>1</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Reads the record token from the specified variable</li>
<li>Stores the record reference for later retrieval</li>
<li>Links the persisted data to a specific Run ID and Attempt ID</li>
<li>Enables future workflow executions to resume the same record</li>
</ul>
<h2>Output</h2>
<p>No direct output. The record reference is stored externally for future workflow attempts.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Persisting a customer record for a CI pipeline run</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Token Variable</strong></td><td><code>acquiredToken</code></td></tr>
<tr><td><strong>Run ID</strong></td><td><code>ci-build-42</code></td></tr>
<tr><td><strong>Attempt ID</strong></td><td><code>1</code></td></tr>
</tbody>
</table>
</div>
<p>Use <strong>Resume Test Data</strong> with the same Run ID and Attempt ID to restore the record later.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use stable and unique Run IDs</li>
<li>Only persist records that need to survive workflow restarts</li>
<li>Keep naming conventions consistent across workflows</li>
<li>Combine with Resume Test Data for resumption scenarios</li>
</ul>`,
  "release-test-data": `<div class="node-left"><div class="node-header">
<div>
<h1>Release Test Data</h1>
<span class="badge badge-data">Test Data</span>
</div>
</div><p>The Release Test Data node returns a previously acquired or restored record back to the test data pool. It is used to make locked test data available again after a workflow has completed or when the data is no longer needed.</p><h2>When to Use</h2><ul class="feature-list">
<li>A workflow has finished using the acquired test data</li>
<li>A previously locked record should be returned to the pool</li>
<li>Avoid unnecessary data locks after execution</li>
<li>Clean up test data usage after successful or failed runs</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node is the <strong>cleanup step</strong> for test data previously acquired in the workflow.</div></div><div class="screenshot-wrap">
<img alt="Release Test Data configuration" src="./autemos_images/image38.png"/>
<div class="screenshot-caption">Release Test Data configuration — specify Token Variable and Scope.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Token Variable</strong></td><td>Variable containing the acquired or restored record token</td><td>Yes</td><td><code>acquiredToken</code></td></tr>
<tr><td><strong>Scope</strong></td><td>Scope in which the record should be released</td><td>Yes</td><td><code>RUN</code></td></tr>
</tbody>
</table>
</div>
<p><strong>Scope options</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>RUN</code></td><td>Releases the record for the current workflow run</td></tr>
<tr><td><code>PROJECT</code></td><td>Releases the record within the current project</td></tr>
<tr><td><code>TENANT</code></td><td>Releases the record across the entire tenant scope</td></tr>
</tbody>
</table>
</div>
<h2>Output</h2>
<p>No output. The record lock is removed or released according to the selected scope.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Releasing a customer record after workflow completion</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Token Variable</strong></td><td><code>acquiredToken</code></td></tr>
<tr><td><strong>Scope</strong></td><td><code>RUN</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Release acquired test data as soon as it is no longer needed</li>
<li>Use the same Token Variable created by Acquire Test Data or Resume Test Data</li>
<li>Prefer RUN scope for most workflow executions</li>
<li>Place this node near the end of the workflow or in a cleanup branch</li>
</ul>`,
  "resume-test-data": `<div class="node-left"><div class="node-header">
<div>
<h1>Resume Test Data</h1>
<span class="badge badge-data">Test Data</span>
</div>
</div><p>The Resume Test Data node restores previously persisted test data and makes it available again within the current workflow execution. It is the counterpart to the Persist Test Data node.</p><h2>When to Use</h2><ul class="feature-list">
<li>Resuming a paused or restarted workflow</li>
<li>Restoring previously persisted records</li>
<li>Continuing asynchronous or distributed test execution</li>
<li>Maintaining consistent test data across retries or CI/CD stages</li>
</ul></div><div class="screenshot-wrap">
<img alt="Resume Test Data configuration" src="./autemos_images/image39.png"/>
<div class="screenshot-caption">Resume Test Data configuration — specify Run ID, Attempt ID and Store As variable.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Run ID</strong></td><td>Identifier of the workflow execution to restore data from</td><td>Yes</td><td><code>ci-build-42</code></td></tr>
<tr><td><strong>Attempt ID</strong></td><td>Identifier of the persisted execution attempt</td><td>Yes</td><td><code>1</code></td></tr>
<tr><td><strong>Store As</strong></td><td>Variable name under which the restored record is made available</td><td>Yes</td><td><code>acquiredToken</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Retrieves the persisted record using Run ID and Attempt ID</li>
<li>Restores the record reference in the workflow context</li>
<li>Makes the restored data available via the variable defined in <strong>Store As</strong></li>
<li>The restored variable behaves exactly like data from Acquire Test Data</li>
</ul>
<h2>Output</h2>
<p>The restored record is made available via the variable defined by <strong>Store As</strong>. Example: <code>\${acquiredToken.record.username}</code></p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Restoring a persisted customer record</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Run ID</strong></td><td><code>ci-build-42</code></td></tr>
<tr><td><strong>Attempt ID</strong></td><td><code>1</code></td></tr>
<tr><td><strong>Store As</strong></td><td><code>acquiredToken</code></td></tr>
</tbody>
</table>
</div>
<p>Later usage: <code>Type \${acquiredToken.record.email}</code></p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use stable Run IDs across related workflow executions</li>
<li>Keep Attempt IDs consistent for the same asynchronous execution flow</li>
<li>Use the same Store As variable naming convention throughout the workflow</li>
<li>Combine with Release Test Data to properly clean up record locks</li>
</ul>`,
  "http-request": `<div class="node-left"><div class="node-header">
<div>
<h1>HTTP Request</h1>
<span class="badge badge-api">API &amp; Scripting</span>
</div>
</div><p>The HTTP Request node sends an HTTP request to an external service or API endpoint. It is used to retrieve, create, update or validate data directly via APIs as part of a Test Workflow.</p><h2>When to Use</h2><ul class="feature-list">
<li>Call REST APIs during a workflow</li>
<li>Prepare or clean up test data</li>
<li>Validate backend responses</li>
<li>Combine UI and API testing in a single flow</li>
<li>Integrate external systems into automated tests</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Frequently used for <strong>test data setup</strong> and backend validation.</div></div><div class="screenshot-wrap">
<img alt="HTTP Request configuration" src="./autemos_images/image40.png"/>
<div class="screenshot-caption">HTTP Request configuration — define method, URL, headers and request body.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Url</strong></td><td>Target API endpoint</td><td>Yes</td><td><code>https://api.example.com/users</code></td></tr>
<tr><td><strong>Method</strong></td><td>HTTP method of the request</td><td>Yes</td><td><code>GET</code></td></tr>
<tr><td><strong>Headers</strong></td><td>HTTP headers sent with the request</td><td>No</td><td><code>[{"Authorization":"Bearer token"}]</code></td></tr>
<tr><td><strong>Body</strong></td><td>Request payload sent to the API</td><td>No</td><td><code>{"name":"John"}</code></td></tr>
<tr><td><strong>Body Type</strong></td><td>Format of the request body</td><td>No</td><td><code>json</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Body is typically required for POST, PUT or PATCH requests.</p>
<p><strong>Supported HTTP methods</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>GET</code></td><td>Retrieve data</td></tr>
<tr><td><code>POST</code></td><td>Create new data</td></tr>
<tr><td><code>PUT</code></td><td>Replace existing data</td></tr>
<tr><td><code>PATCH</code></td><td>Partially update existing data</td></tr>
<tr><td><code>DELETE</code></td><td>Remove data</td></tr>
</tbody>
</table>
</div>
<p><strong>Supported body types</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>json</code></td><td>JSON payload</td></tr>
<tr><td><code>form-data</code></td><td>Multipart form submission</td></tr>
<tr><td><code>x-www-form-urlencoded</code></td><td>URL-encoded form data</td></tr>
<tr><td><code>text</code></td><td>Plain text payload</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Sends the configured HTTP request to the target endpoint</li>
<li>Applies header and payload configuration</li>
<li>Waits for the API response</li>
<li>Makes the response (status code, headers, body) available for later workflow steps</li>
</ul>
<h2>Supported Methods</h2>
<p>GET, POST, PUT, PATCH, DELETE — as well as other standard HTTP methods supported by the API being called.</p>
<h2>Output</h2>
<p>The node provides access to the API response, including status code, headers and response body. Response values can be extracted and reused in subsequent workflow steps.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Retrieving customer data</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Url</strong></td><td><code>https://api.example.com/customers/42</code></td></tr>
<tr><td><strong>Method</strong></td><td><code>GET</code></td></tr>
<tr><td><strong>Headers</strong></td><td><code>[{"Authorization":"Bearer token"}]</code></td></tr>
</tbody></table></div>
<h3>Example — Creating test data via API</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Url</strong></td><td><code>https://api.example.com/customers</code></td></tr>
<tr><td><strong>Method</strong></td><td><code>POST</code></td></tr>
<tr><td><strong>Body</strong></td><td><code>{"name":"John Doe"}</code></td></tr>
<tr><td><strong>Body Type</strong></td><td><code>json</code></td></tr>
</tbody></table></div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use variables and bindings instead of hard-coded values</li>
<li>Store authentication tokens securely</li>
<li>Validate important responses with Assert or Extract Text</li>
<li>Use APIs for efficient test data setup instead of UI-only preparation</li>
<li>Keep request payloads readable and maintainable</li>
</ul>`,
  "execute-javascript": `<div class="node-left"><div class="node-header">
<div>
<h1>Execute JavaScript</h1>
<span class="badge badge-api">API &amp; Scripting</span>
</div>
</div><p>The Execute JavaScript node runs custom JavaScript code directly in the active browser session. It is used for advanced browser interactions, retrieving dynamic information, manipulating page behavior or executing logic not covered by standard workflow nodes.</p><h2>When to Use</h2><ul class="feature-list">
<li>Directly access browser or DOM information</li>
<li>Retrieve dynamic application data</li>
<li>Perform advanced UI interactions</li>
<li>Execute custom logic in the browser context</li>
<li>Handle edge cases not supported by built-in nodes</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node is intended for <strong>advanced and technical</strong> use cases.</div></div><div class="screenshot-wrap">
<img alt="Execute JavaScript configuration" src="./autemos_images/image41.png"/>
<div class="screenshot-caption">Execute JavaScript configuration — write the script and optionally define a Store Result As variable.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Script</strong></td><td>JavaScript code executed in the browser context</td><td>Yes</td><td><code>return document.title;</code></td></tr>
<tr><td><strong>Store Result As</strong></td><td>Variable name to store the returned result</td><td>No</td><td><code>pageTitle</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Executes the provided JavaScript in the active browser session</li>
<li>Runs in the context of the currently loaded page</li>
<li>Can access the DOM, read browser information and manipulate page state</li>
<li>Returns the result of the script (if applicable) and stores it in the configured variable</li>
</ul>
<h2>Output</h2>
<p>Optional output. If the script returns a value and <strong>Store Result As</strong> is configured, the result is stored in the specified variable. Example: <code>\${pageTitle}</code> → <code>Customer Portal</code></p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Retrieving the current page title</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Script</strong></td><td><code>return document.title;</code></td></tr>
<tr><td><strong>Store Result As</strong></td><td><code>pageTitle</code></td></tr>
</tbody></table></div>
<p>Later usage: <code>Assert \${pageTitle} equals Dashboard</code></p>
<h3>Example — Reading element text</h3>
<div class="param-table-wrap"><table class="param-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>
<tr><td><strong>Script</strong></td><td><code>return document.querySelector('#total').textContent;</code></td></tr>
<tr><td><strong>Store Result As</strong></td><td><code>totalAmount</code></td></tr>
</tbody></table></div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Keep scripts short and focused</li>
<li>Prefer built-in nodes whenever possible</li>
<li>Return values explicitly using <code>return</code></li>
<li>Use meaningful variable names for stored results</li>
<li>Only modify application state when necessary</li>
<li>Validate results with Assert or If nodes</li>
</ul>`
});
