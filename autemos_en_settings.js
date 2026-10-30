window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "settings-overview": `
  <span class="section-label">Getting Started</span>
  <h1>Global Settings</h1>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Administrators Only —</strong> The Global Settings area is accessible exclusively to system administrators. Changes affect all projects, users, and global system behavior. Incorrect configurations can impact stability, security, execution environments, or connected services.
  </div>
  <p>The <strong>Global Settings</strong> module provides centralized management of all system-wide configurations across the entire Autemos platform. All settings apply globally to all projects and environments.</p>
  <div class="screenshot-wrap">
    <img alt="Global Settings overview" src="./autemos_settings_screenshots/image_1.png"/>
    <div class="screenshot-caption">Global Settings — centralized management of all platform-wide configurations.</div>
  </div>
  <h2>Configurable Areas</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>LLM Integration</h3><p>Configuration of Large Language Models for AI functionality.</p></div>
    <div class="concept-card"><h3>Security</h3><p>Authentication, password policies, and access control.</p></div>
    <div class="concept-card"><h3>Notifications</h3><p>Mail connection (SMTP or Microsoft Graph) for notifications and system emails.</p></div>
    <div class="concept-card"><h3>Audit Logs</h3><p>Read-only overview of all audit events.</p></div>
    <div class="concept-card"><h3>Storage</h3><p>Data policies, retention, and backups.</p></div>
    <div class="concept-card"><h3>Selenium Grid</h3><p>Distributed browser execution infrastructure.</p></div>
    <div class="concept-card"><h3>Cloud Providers</h3><p>External test platform integrations.</p></div>
    <div class="concept-card"><h3>Certificates</h3><p>Secure runtime certificates for protected applications.</p></div>
  </div>
  <h2>Purpose</h2>
  <ul class="feature-list">
    <li>Manage infrastructure centrally</li>
    <li>Simplify enterprise administration</li>
    <li>Control platform-wide integrations</li>
    <li>Configure test infrastructure</li>
    <li>Implement security and compliance policies</li>
    <li>Manage notifications and storage strategies</li>
    <li>Provide scalable test environments</li>
  </ul>
`,
  "settings-llm": `
  <span class="section-label">AI &amp; Security</span>
  <h1>LLM Integration</h1>
  <p>The <strong>LLM Integration Settings</strong> enable the configuration of Large Language Models across the entire platform. These settings are used for AI-driven field generation, AI-based automation, intelligent workflow creation, automatic test generation, and Auto-Healing.</p>
  <div class="screenshot-wrap">
    <img alt="LLM Integration settings" src="./autemos_settings_screenshots/image_2.png"/>
    <div class="screenshot-caption">LLM Integration — configuration of LLM provider, API key, model selection, and rate limits.</div>
  </div>
  <h2>Configuration Options</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Setting</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Enable LLM</strong></td><td>Enables or disables AI functionality globally across the entire platform.</td></tr>
        <tr><td><strong>LLM Server URL</strong></td><td>Endpoint of the LLM provider (e.g., <code>https://api.openai.com/v1</code>).</td></tr>
        <tr><td><strong>API Key</strong></td><td>Secure API authentication — encrypted backend storage, hidden UI display.</td></tr>
        <tr><td><strong>Model Selection</strong></td><td>Select the AI model (GPT-4, GPT-4o, Claude, custom models).</td></tr>
        <tr><td><strong>Temperature</strong></td><td>Controls creativity and determinism — low values = more stable results, high values = more creative responses.</td></tr>
        <tr><td><strong>Max Tokens</strong></td><td>Maximum number of tokens per request.</td></tr>
        <tr><td><strong>Timeout</strong></td><td>Maximum execution time for AI requests.</td></tr>
        <tr><td><strong>Rate Limits</strong></td><td>Maximum requests per minute, API protection, and cost control.</td></tr>
        <tr><td><strong>Monthly Cost Threshold</strong></td><td>Monthly cost limit for AI usage — budget control and enterprise governance.</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Logging Options</h2>
  <ul class="feature-list">
    <li>Detailed AI logging</li>
    <li>Fallback caching</li>
    <li>Debugging and monitoring</li>
  </ul>
`,
  "settings-security": `
  <span class="section-label">AI &amp; Security</span>
  <h1>Security Settings</h1>
  <p>The <strong>Security Settings</strong> area manages global authentication and security policies of the platform.</p>
  <div class="screenshot-wrap">
    <img alt="Security Settings" src="./autemos_settings_screenshots/image_4.png"/>
    <div class="screenshot-caption">Security Settings — session management, password policies, two-factor authentication, and CORS configuration.</div>
  </div>
  <h2>Session Management</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Setting</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Session Timeout</strong></td><td>Automatically logs out users after a defined period of inactivity.</td></tr>
        <tr><td><strong>Max Login Attempts</strong></td><td>Maximum number of failed login attempts before account lockout.</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Password Policies</h2>
  <ul class="feature-list">
    <li>Minimum password length</li>
    <li>Enterprise password standards</li>
    <li>Advanced security policies</li>
  </ul>
  <h2>Two-Factor Authentication</h2>
  <ul class="feature-list">
    <li>Mandatory 2FA</li>
    <li>Global MFA policies</li>
    <li>Enhanced account security</li>
  </ul>
  <h2>Guest Access &amp; CORS</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Setting</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Guest Access</strong></td><td>Controls whether guest users can access public projects.</td></tr>
        <tr><td><strong>CORS Configuration</strong></td><td>Defines allowed origins for frontend/backend communication (e.g., <code>http://localhost:3000</code>). Supports enterprise deployments, custom domains, and multi-environment setups.</td></tr>
      </tbody>
    </table>
  </div>
`,
  "settings-notifications": `
  <span class="section-label">Communication</span>
  <h1>Notification Settings</h1>
  <p>The <strong>Notifications</strong> tab centrally configures the platform's <strong>mail connection</strong>. It is used for test run notifications (see the <a href="#notifications-email">Notifications</a> module) and for all system emails. Further channels such as Microsoft Teams follow separately.</p>
  <h2>"Email" section</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Setting</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Enable email notifications</strong></td><td>Switches email notifications for test runs on or off. System emails do not depend on this switch, only on a complete mail configuration.</td></tr>
        <tr><td><strong>Mail provider</strong></td><td>Choose between <strong>SMTP</strong> and <strong>Microsoft Graph</strong> (Microsoft 365 / Outlook).</td></tr>
        <tr><td><strong>SMTP</strong></td><td>Server, port, encryption (STARTTLS, SSL or none), username, password and sender address. If the SMTP server field is left empty, Autemos uses the server's mail configuration ("Leave SMTP server empty to use the server mail configuration").</td></tr>
        <tr><td><strong>Microsoft Graph</strong></td><td>Tenant ID, client ID, client secret and sender address of an app registration with the application permission <code>Mail.Send</code>.</td></tr>
        <tr><td><strong>Send test email</strong></td><td>Sends a test email to your own address — using the <em>saved</em> settings. The response reports success or a short reason, never a secret or a stack trace.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="tip"><span class="tip-icon">🔒</span>Passwords and client secrets are stored encrypted and never returned in plain text. Stored values appear as "•••• (stored)".</div>
  <h2>"Recipients" section</h2>
  <p>With the <strong>Also notify project admins on failed runs</strong> switch (default: off), the project's admins also receive a notification when a run fails. The recipient logic is described in the <a href="#notifications-recipients">Notifications</a> module.</p>
  <h2>System emails</h2>
  <p>Password reset, "password changed", invitations and admin reset links are sent through the connection configured here as soon as it is complete for the chosen provider. Otherwise Autemos uses the server's mail configuration. If the chosen route fails, there is no second attempt via another route — the error is logged without the email content.</p>
`,
  "settings-storage": `
  <span class="section-label">Infrastructure</span>
  <h1>Storage Management</h1>
  <p>The <strong>Storage Settings</strong> area manages system-wide storage and data policies.</p>
  <div class="screenshot-wrap">
    <img alt="Storage Settings" src="./autemos_settings_screenshots/image_6.png"/>
    <div class="screenshot-caption">Storage Management — upload limits, data retention, automatic cleanup, and backups.</div>
  </div>
  <h2>File Upload Limits</h2>
  <ul class="feature-list">
    <li>Maximum upload size</li>
    <li>Storage limits</li>
    <li>Resource protection</li>
  </ul>
  <h2>Data Retention</h2>
  <p>Controls the retention period of system data:</p>
  <ul class="feature-list">
    <li>Screenshots</li>
    <li>Logs</li>
    <li>Execution artifacts</li>
    <li>Reports</li>
  </ul>
  <h2>Automatic Cleanup &amp; Compression</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Feature</th><th>Benefit</th></tr></thead>
      <tbody>
        <tr><td><strong>Automatic Cleanup</strong></td><td>Automatic deletion of outdated data — reduced storage consumption and compliance support</td></tr>
        <tr><td><strong>Data Compression</strong></td><td>Storage optimization through data compression</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Automatic Backups</h2>
  <p>Supports scheduled automatic backups at the following intervals:</p>
  <ul class="feature-list">
    <li>Daily</li>
    <li>Weekly</li>
    <li>Monthly</li>
  </ul>
`,
  "settings-grid": `
  <span class="section-label">Infrastructure</span>
  <h1>Selenium Grid Configuration</h1>
  <p>The <strong>Selenium Grid Settings</strong> manage the infrastructure for distributed browser execution — parallel tests, browser nodes, Docker-based grid, and scalable execution infrastructure.</p>
  <div class="screenshot-wrap">
    <img alt="Selenium Grid Configuration" src="./autemos_settings_screenshots/image_7.png"/>
    <div class="screenshot-caption">Selenium Grid — node configuration for Chrome, Firefox, and Edge with session limits and recording options.</div>
  </div>
  <h2>Grid Configuration</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Setting</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Chrome Nodes</strong></td><td>Number of Chrome nodes in the grid</td></tr>
        <tr><td><strong>Firefox Nodes</strong></td><td>Number of Firefox nodes in the grid</td></tr>
        <tr><td><strong>Edge Nodes</strong></td><td>Number of Edge nodes in the grid</td></tr>
        <tr><td><strong>Session Limits</strong></td><td>Maximum parallel sessions</td></tr>
        <tr><td><strong>Connection Timeouts</strong></td><td>Connection timeouts for grid nodes</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Automatic Grid Management</h2>
  <ul class="feature-list">
    <li>Auto-start grid</li>
    <li>Auto-stop grid</li>
    <li>Dynamic node scaling</li>
  </ul>
  <h2>Recording Options</h2>
  <ul class="feature-list">
    <li>Video recording</li>
    <li>Automatic screenshots</li>
    <li>Error diagnostics</li>
  </ul>
  <div class="tip"><span class="tip-icon">💡</span>The local Selenium Grid connects automatically via the Docker network — no manual URL configuration required.</div>

  <h2 id="settings-grid-emulator">Mobile Emulator Configuration</h2>
  <div class="screenshot-wrap">
    <img alt="Mobile Emulator Configuration" src="./autemos_settings_screenshots/image_8.png"/>
    <div class="screenshot-caption">Mobile Emulator — configuration of Android emulators (Samsung, Pixel, virtual device scaling).</div>
  </div>
  <p>Supports the configuration of Android emulators such as Samsung and Pixel devices as well as virtual device scaling.</p>
  <h3>Emulator Settings</h3>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Setting</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Number of Emulators</strong></td><td>Number of emulators running in parallel</td></tr>
        <tr><td><strong>Memory Allocation</strong></td><td>Memory allocation per emulator</td></tr>
        <tr><td><strong>Screen Resolution</strong></td><td>Screen resolution of the virtual device</td></tr>
        <tr><td><strong>Screen Dimensions</strong></td><td>Screen dimensions</td></tr>
        <tr><td><strong>Session Timeouts</strong></td><td>Timeouts for emulator sessions</td></tr>
      </tbody>
    </table>
  </div>
  <div class="warning"><span class="tip-icon">⚠️</span><strong>Platform requirements:</strong> Android emulators require <strong>Linux</strong>, <strong>KVM support</strong>, and <strong>hardware virtualization</strong>.</div>
`,
  "settings-cloud": `
  <span class="section-label">Infrastructure</span>
  <h1>Cloud Providers</h1>
  <p>The <strong>Cloud Providers</strong> area manages integrations of external test platforms such as Experitest, BrowserStack, Sauce Labs, and LambdaTest.</p>
  <div class="screenshot-wrap">
    <img alt="Cloud Providers" src="./autemos_settings_screenshots/image_9.png"/>
    <div class="screenshot-caption">Cloud Providers — management of external test platform integrations with routing and status monitoring.</div>
  </div>
  <h2>Supported Providers</h2>
  <ul class="feature-list">
    <li>Experitest</li>
    <li>BrowserStack</li>
    <li>Sauce Labs</li>
    <li>LambdaTest</li>
    <li>Custom providers</li>
  </ul>
  <h2>Provider Routing</h2>
  <p>Autemos supports routing for desktop browsers, virtual mobile devices, and real devices.</p>
  <h2>Connection Management</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Feature</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>API Credentials</strong></td><td>Secure provider authentication</td></tr>
        <tr><td><strong>Connection Test</strong></td><td>Connection check before saving</td></tr>
        <tr><td><strong>Device Availability</strong></td><td>Display of available devices</td></tr>
        <tr><td><strong>Execution Routing</strong></td><td>Control of test execution per provider</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Provider Status Monitoring</h2>
  <ul class="feature-list">
    <li>Online/Offline status</li>
    <li>Available devices</li>
    <li>Slot capacities</li>
    <li>Browser availability</li>
  </ul>
`,
  "settings-certificates": `
  <span class="section-label">Infrastructure</span>
  <h1>Certificates Management</h1>
  <p>The <strong>Certificates</strong> area manages secure runtime certificates for protected applications.</p>
  <div class="screenshot-wrap">
    <img alt="Certificates Management" src="./autemos_settings_screenshots/image_10.png"/>
    <div class="screenshot-caption">Certificates — centralized management of shared certificates with vault and file system integration.</div>
  </div>
  <h2>Shared Certificate Sources</h2>
  <p>Administrators can configure:</p>
  <ul class="feature-list">
    <li>Shared certificate locations</li>
    <li>Vault integrations</li>
    <li>Shared file system sources</li>
  </ul>
  <p>These certificates can be used across projects.</p>
  <h2>Shared Certificates</h2>
  <p>Shared certificates are managed centrally and are globally available. Typical use cases:</p>
  <ul class="feature-list">
    <li>Enterprise authentication</li>
    <li>Shared mTLS access</li>
    <li>Organization-wide certificates</li>
  </ul>
  <div class="tip"><span class="tip-icon">💡</span><strong>Personal certificates</strong> are added and managed in the personal settings menu — not in Global Settings.</div>
  <h2>Security &amp; Encryption</h2>
  <p>Sensitive configuration values are protected platform-wide through:</p>
  <ul class="feature-list">
    <li>Backend encryption</li>
    <li>Secure credential storage</li>
    <li>Hidden UI values</li>
    <li>Secure API communication</li>
  </ul>
`,
  "settings-audit": `
  <span class="section-label">Platform</span>
  <h1>Audit Logs</h1>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Administrators only —</strong> The <strong>Audit Logs</strong> page is reserved for global administrators. Other users are redirected to the dashboard.
  </div>
  <p>The admin navigation shows <strong>Audit Logs</strong> below <strong>Global Settings</strong>. The page is a <strong>read-only record</strong> of all user and system actions — for example code sync, settings changes, secret actions, screenshot clean-up runs and password changes.</p>
  <h2>Filters and search</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Filter</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Search</strong></td><td>Free-text search; works together with the other filters.</td></tr>
        <tr><td><strong>From / To</strong></td><td>Period in whole days.</td></tr>
        <tr><td><strong>Result</strong></td><td>Successful or failed actions.</td></tr>
        <tr><td><strong>User, Event, Category, Project</strong></td><td>List filters; "All" removes the filter.</td></tr>
      </tbody>
    </table>
  </div>
  <p>Filtering and sorting happen on the server; the list is paged (default 50 entries, at most 200 per page) and sorted by time, newest first, by default. If no entry matches, "No audit events match the current filters" appears.</p>
  <h2>Table and details</h2>
  <p>The table shows <strong>Timestamp, User, Event, Category, Object, Action, Result</strong> and a <strong>Details</strong> button. The details dialog additionally names the event ID, project, error message, technical details (method, path, IP, source), the sanitised parameters, and old and new values where present. Categories include <em>Code Sync</em>, <em>Administration</em>, <em>Security</em> and <em>Test Management</em>; events without an assignment appear under <em>Other</em>. Background events without a sign-in carry the user "System".</p>
  <h2>Export</h2>
  <p><strong>Export CSV</strong> downloads <em>all</em> entries matching the active filters — not only the visible page — with a header row.</p>
  <h2>Security</h2>
  <ul class="feature-list">
    <li>The page offers no edit and no delete; the database prevents later changes to entries.</li>
    <li>Passwords, tokens and encrypted setting values appear neither in the table nor in the dialog nor in the CSV export; they are masked.</li>
    <li>A failure while writing the audit entry does not abort the actual action.</li>
  </ul>
`,
  "settings-status": `
  <span class="section-label">Platform</span>
  <h1>System Status &amp; Scalability</h1>
  <p>The platform provides a live overview of the state of all infrastructure components — administrators can quickly check the system status at any time.</p>
  <div class="screenshot-wrap">
    <img alt="System Status Overview" src="./autemos_settings_screenshots/image_11.png"/>
    <div class="screenshot-caption">System Status Overview — live status of all platform components at a glance.</div>
  </div>
  <h2>Live Status Overview</h2>
  <ul class="feature-list">
    <li>LLM status</li>
    <li>Security level</li>
    <li>Notification status</li>
    <li>Storage cleanup behavior</li>
  </ul>
  <h2>Enterprise Scalability</h2>
  <p>The Global Settings architecture supports:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>Enterprise Deployments</h3><p>Large, distributed installations with centralized configuration.</p></div>
    <div class="concept-card"><h3>Multi-Project Environments</h3><p>Configuration across many parallel projects.</p></div>
    <div class="concept-card"><h3>Distributed Execution</h3><p>Distributed execution infrastructures.</p></div>
    <div class="concept-card"><h3>Cloud-native Setups</h3><p>Cloud-native test environments.</p></div>
    <div class="concept-card"><h3>Hybrid Testing</h3><p>Hybrid testing setups (local + cloud).</p></div>
  </div>
`,
  "settings-use-cases": `
  <span class="section-label">Usage</span>
  <h1>Use Cases &amp; Benefits</h1>
  <h2>Typical Use Cases</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Enterprise Platform Administration</h3><p>Centralized management of all infrastructure and integration components.</p></div>
    <div class="concept-card"><h3>AI Infrastructure Configuration</h3><p>Global management of AI providers and AI usage.</p></div>
    <div class="concept-card"><h3>Security Governance</h3><p>Organization-wide security and compliance policies.</p></div>
    <div class="concept-card"><h3>Distributed Test Infrastructure</h3><p>Management of Selenium Grid and cloud test platforms.</p></div>
    <div class="concept-card"><h3>Certificate &amp; Authentication</h3><p>Secure management of runtime certificates and authentication.</p></div>
  </div>
  <h2>Benefits</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Benefit</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Centralized Administration</strong></td><td>A single place for all system-wide settings.</td></tr>
        <tr><td><strong>Enterprise Security</strong></td><td>Strong encryption and modern access control.</td></tr>
        <tr><td><strong>Scalable Infrastructure</strong></td><td>Supports distributed execution and cloud integrations.</td></tr>
        <tr><td><strong>Operational Transparency</strong></td><td>Provides an overview of infrastructure status and configuration.</td></tr>
        <tr><td><strong>Flexible Integrations</strong></td><td>Supports different providers, environments, and enterprise architectures.</td></tr>
      </tbody>
    </table>
  </div>
`,
});
