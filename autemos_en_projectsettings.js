// Autemos Documentation — Project Settings English Translations
window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "projectsettings-overview": `
  <span class="section-label">Getting Started</span>
  <h1>Project Settings</h1>
  <p>The <strong>Project Settings</strong> module centralizes the administrative configuration of a project. It allows project owners and administrators to manage project metadata, environments, members, API keys, as well as authentication configurations and secrets.</p>
  <div class="screenshot-wrap">
    <img alt="Project Settings overview" src="./autemos_projectsettings/image_1.png"/>
    <div class="screenshot-caption">Project Settings — central management of all project-related configurations.</div>
  </div>
  <h2>Managed Areas</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Project Metadata</h3><p>Name, description, and core project configuration.</p></div>
    <div class="concept-card"><h3>Project Environments</h3><p>Applications and environments (TEST / QA / PROD).</p></div>
    <div class="concept-card"><h3>Members &amp; Permissions</h3><p>Access and roles per project.</p></div>
    <div class="concept-card"><h3>API Keys</h3><p>Programmatic access for external integrations.</p></div>
    <div class="concept-card"><h3>Auth &amp; Secrets</h3><p>Reusable auth configurations and encrypted secrets.</p></div>
  </div>
  <p>The module provides the foundation for secure collaboration, environment management, and API integration within the platform.</p>
`,
  "projectsettings-general": `
  <span class="section-label">Configuration</span>
  <h1>General Settings</h1>
  <p>The <strong>General</strong> section contains the core project configuration including project name, description, environment management, and application catalog.</p>
  <div class="screenshot-wrap">
    <img alt="General Settings configuration" src="./autemos_projectsettings/image_2.png"/>
    <div class="screenshot-caption">General Settings — project name, description, and application/environment catalog.</div>
  </div>
  <h2>Each Project Defines</h2>
  <p>Multiple applications and environments used across:</p>
  <ul class="feature-list">
    <li>Test Workflows</li>
    <li>Recorder sessions</li>
    <li>Test Data bindings</li>
    <li>API executions</li>
  </ul>
  <h2>When to Use</h2>
  <ul class="feature-list">
    <li>Creating a new project structure</li>
    <li>Configuring test environments</li>
    <li>Managing multiple application URLs</li>
    <li>Separating TEST / QA / PROD environments</li>
    <li>Updating project metadata</li>
  </ul>
  <h2>Project Details</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Project Name</strong></td><td>Name of the project</td></tr>
        <tr><td><strong>Description</strong></td><td>Optional project description</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Project Environments</h2>
  <p>Each application can contain multiple environments. Example:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Application</th><th>Environment</th><th>URL</th></tr></thead>
      <tbody>
        <tr><td>Migros</td><td>TEST</td><td><code>https://www.migros.ch/de</code></td></tr>
      </tbody>
    </table>
  </div>
  <h3>Supported Actions</h3>
  <ul class="feature-list">
    <li>Add application</li>
    <li>Remove application</li>
    <li>Add environments</li>
    <li>Define environment URLs</li>
    <li>Configure default environments</li>
  </ul>
  <h2>Behavior</h2>
  <ul class="feature-list">
    <li>Environment configurations are centrally managed</li>
    <li>Workflows can dynamically reference environments</li>
    <li>Recorder and API nodes use the configured environment URLs</li>
    <li>Changes are applied project-wide</li>
  </ul>
  <h2>Best Practices</h2>
  <ul class="best-practices">
    <li>Use clear environment naming conventions</li>
    <li>Strictly separate TEST, QA, and PROD environments</li>
    <li>Avoid using production credentials in test environments</li>
    <li>Keep environment URLs centralized</li>
  </ul>
`,
  "projectsettings-members": `
  <span class="section-label">Configuration</span>
  <h1>Members</h1>
  <p>The <strong>Members</strong> section manages project access and permissions.</p>
  <div class="screenshot-wrap">
    <img alt="Members overview" src="./autemos_projectsettings/image_3.png"/>
    <div class="screenshot-caption">Members — overview of all project members and their roles.</div>
  </div>
  <h2>Users Can</h2>
  <ul class="feature-list">
    <li>Be assigned to projects</li>
    <li>Be removed from projects</li>
    <li>Be granted specific roles</li>
  </ul>
  <h2>Supported Roles</h2>
  <div class="screenshot-wrap">
    <img alt="Member roles" src="./autemos_projectsettings/image_4.png"/>
    <div class="screenshot-caption">Role assignment — OWNER, ADMIN, or MEMBER per user.</div>
  </div>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Role</th><th>Permissions</th></tr></thead>
      <tbody>
        <tr><td><strong>OWNER</strong></td><td>Full project administration</td></tr>
        <tr><td><strong>ADMIN</strong></td><td>Manage workflows, settings, and users</td></tr>
        <tr><td><strong>MEMBER</strong></td><td>Execute and edit allowed resources</td></tr>
      </tbody>
    </table>
  </div>
  <h2>When to Use</h2>
  <ul class="feature-list">
    <li>Granting project access</li>
    <li>Managing team permissions</li>
    <li>Onboarding testers or developers</li>
    <li>Restricting administrative access</li>
  </ul>
  <h2>Behavior</h2>
  <ul class="feature-list">
    <li>Only assigned users can access the project</li>
    <li>Roles determine available permissions</li>
    <li>Owners have full administrative control</li>
    <li>Members receive limited operational access</li>
  </ul>
  <h2>Best Practices</h2>
  <ul class="best-practices">
    <li>Limit OWNER permissions to few users</li>
    <li>Use MEMBER for standard testers</li>
    <li>Regularly review project access</li>
    <li>Remove inactive users</li>
  </ul>
`,
  "projectsettings-apikeys": `
  <span class="section-label">Integration &amp; Security</span>
  <h1>API Keys</h1>
  <p>The <strong>API Keys</strong> section allows secure programmatic access to the platform. API keys can be used for external integrations, CI/CD pipelines, service accounts, and automated executions.</p>
  <div class="screenshot-wrap">
    <img alt="API Keys overview" src="./autemos_projectsettings/image_5.png"/>
    <div class="screenshot-caption">API Keys — secure programmatic access for external integrations.</div>
  </div>
  <h2>When to Use</h2>
  <ul class="feature-list">
    <li>Integrating external systems</li>
    <li>Running automated executions</li>
    <li>Connecting CI/CD pipelines</li>
    <li>Enabling machine-to-machine communication</li>
  </ul>
  <h2>Configuration</h2>
  <div class="screenshot-wrap">
    <img alt="API Key configuration" src="./autemos_projectsettings/image_6.png"/>
    <div class="screenshot-caption">API Key configuration — name, description, and expiration.</div>
  </div>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Key Name</strong></td><td>Name of the API key</td></tr>
        <tr><td><strong>Description</strong></td><td>Optional usage description</td></tr>
        <tr><td><strong>Expires In</strong></td><td>Expiration period in days</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Behavior</h2>
  <ul class="feature-list">
    <li>API keys are securely generated</li>
    <li>Full keys are shown only once after creation</li>
    <li>Expired keys automatically become invalid</li>
    <li>Keys can be revoked at any time</li>
  </ul>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Security note —</strong> The full API key is only displayed once after creation. Always store API keys securely.
  </div>
  <h2>Best Practices</h2>
  <ul class="best-practices">
    <li>Use expiration dates whenever possible</li>
    <li>Rotate keys regularly</li>
    <li>Use separate keys per integration</li>
    <li>Never expose API keys publicly</li>
  </ul>
`,
  "projectsettings-auth": `
  <span class="section-label">Integration &amp; Security</span>
  <h1>Auth &amp; Secrets</h1>
  <p>The <strong>Auth &amp; Secrets</strong> section manages reusable authentication configurations and encrypted secrets.</p>
  <div class="screenshot-wrap">
    <img alt="Auth and Secrets overview" src="./autemos_projectsettings/image_7.png"/>
    <div class="screenshot-caption">Auth &amp; Secrets — reusable auth configurations and encrypted secrets.</div>
  </div>
  <h2>Supported Components</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Environment Secrets</h3><p>Encrypted sensitive values per environment.</p></div>
    <div class="concept-card"><h3>Shared Auth Configurations</h3><p>Reusable authentication setups.</p></div>
    <div class="concept-card"><h3>OAuth2 Credentials</h3><p>OAuth2 client configurations.</p></div>
    <div class="concept-card"><h3>Bearer Tokens</h3><p>Token-based authentication.</p></div>
    <div class="concept-card"><h3>API Keys</h3><p>API key authentication.</p></div>
    <div class="concept-card"><h3>Basic Authentication</h3><p>Username / password.</p></div>
  </div>

  <h2>Environment Secrets</h2>
  <div class="screenshot-wrap">
    <img alt="Environment Secrets" src="./autemos_projectsettings/image_8.png"/>
    <div class="screenshot-caption">Environment Secrets — encrypted sensitive data managed centrally.</div>
  </div>
  <p>Environment Secrets store encrypted sensitive values such as tokens, passwords, client secrets, and API credentials. Secrets are <strong>encrypted at rest</strong> and never fully displayed after creation.</p>
  <h3>Configuration</h3>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Key</strong></td><td>Secret identifier</td></tr>
        <tr><td><strong>Value</strong></td><td>Encrypted secret value</td></tr>
        <tr><td><strong>Description</strong></td><td>Optional usage description</td></tr>
      </tbody>
    </table>
  </div>
  <h3>Behavior</h3>
  <ul class="feature-list">
    <li>Secrets are securely encrypted</li>
    <li>Values remain hidden after creation</li>
    <li>Secrets can be reused across auth configurations</li>
    <li>Used by API Request nodes and integrations</li>
  </ul>

  <h2>Auth Configurations</h2>
  <div class="screenshot-wrap">
    <img alt="Auth Configurations" src="./autemos_projectsettings/image_9.png"/>
    <div class="screenshot-caption">Auth Configurations — reusable authentication setups for API Request nodes.</div>
  </div>
  <p>Auth Configurations provide reusable authentication setups for <a href="#api-request">API Request</a> nodes. Supported authentication types:</p>
  <ul class="feature-list">
    <li>Bearer Token</li>
    <li>Basic Auth</li>
    <li>API Key</li>
    <li>OAuth2 Client Credentials</li>
  </ul>
  <h3>Configuration</h3>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Name</strong></td><td>Authentication configuration name</td></tr>
        <tr><td><strong>Description</strong></td><td>Optional usage description</td></tr>
        <tr><td><strong>Auth Type</strong></td><td>Authentication method</td></tr>
        <tr><td><strong>Secret Reference</strong></td><td>Linked encrypted secret</td></tr>
      </tbody>
    </table>
  </div>
  <h3>Behavior</h3>
  <ul class="feature-list">
    <li>Auth configurations reuse centralized secrets</li>
    <li>Multiple workflows can share the same auth config</li>
    <li>Changes apply automatically across dependent requests</li>
    <li>Credentials are never exposed in workflows</li>
  </ul>
`,
  "projectsettings-best-practices": `
  <span class="section-label">Usage</span>
  <h1>Best Practices</h1>
  <p>Key recommendations for using the Project Settings module:</p>
  <ul class="best-practices">
    <li>Always store sensitive data as <strong>secrets</strong></li>
    <li>Reuse <strong>shared auth configurations</strong></li>
    <li>Never store credentials directly in workflows</li>
    <li>Separate credentials per environment</li>
    <li>Rotate secrets regularly</li>
    <li>Use clear naming conventions for environments</li>
    <li>Limit OWNER permissions to few users</li>
    <li>Regularly review and clean up project access</li>
    <li>Set expiration dates on API keys</li>
    <li>Use separate API keys per integration</li>
  </ul>
`,
});
