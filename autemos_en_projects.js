window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "projects-overview": `
  <span class="section-label">Getting Started</span>
  <h1>Projects</h1>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Administrators only —</strong> Projects can only be created, edited, and deleted by administrators.
  </div>
  <p>The <strong>Projects menu</strong> is the central management area for all projects within Autemos. It allows users to create, organize, browse, and navigate between different automation projects.</p>
  <div class="screenshot-wrap">
    <img alt="Projects overview" src="./autemos_projects_screenshots/image_1.png"/>
    <div class="screenshot-caption">Projects Overview — central management area for all projects with search, filter, and project cards.</div>
  </div>
  <h2>Projects as Top-Level Container</h2>
  <p>Projects serve as the top-level container for:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>Test Workflows</h3><p>All workflows within a project.</p></div>
    <div class="concept-card"><h3>Test Runs</h3><p>Project-related executions.</p></div>
    <div class="concept-card"><h3>Pages</h3><p>Reusable PageObjects.</p></div>
    <div class="concept-card"><h3>Auto-Heal Configuration</h3><p>Healing rules per project.</p></div>
    <div class="concept-card"><h3>Test Data</h3><p>Test data and datasets.</p></div>
    <div class="concept-card"><h3>Schedules</h3><p>Scheduled executions.</p></div>
    <div class="concept-card"><h3>Code Generation</h3><p>Generated automation code.</p></div>
    <div class="concept-card"><h3>Recorder Sessions</h3><p>Recorded sessions.</p></div>
  </div>
  <h2>What a Project Can Represent</h2>
  <p>Each project is logically separated and can represent:</p>
  <ul class="feature-list">
    <li>An application</li>
    <li>A product</li>
    <li>A customer</li>
    <li>A business domain</li>
    <li>A test initiative</li>
  </ul>
  <h2>Purpose</h2>
  <p>The Projects menu helps teams to:</p>
  <ul class="feature-list">
    <li>Organize automation assets</li>
    <li>Separate test domains from each other</li>
    <li>Manage project-specific workflows</li>
    <li>Quickly access project features</li>
    <li>Build scalable automation structures</li>
  </ul>
`,
  "projects-cards": `
  <span class="section-label">Overview Page</span>
  <h1>Project Cards</h1>
  <p>Each project is displayed as a <strong>Project Card</strong> with key information — for quick overview and navigation.</p>
  <div class="screenshot-wrap">
    <img alt="Project Card" src="./autemos_projects_screenshots/image_4.png"/>
    <div class="screenshot-caption">Project Card — compact overview with status, test count, failed tests, pages, and fields.</div>
  </div>
  <h2>Displayed Information</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Information</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Project Name</strong></td><td>Unique name of the project</td></tr>
        <tr><td><strong>Project Status</strong></td><td>Activity indicator (active / inactive)</td></tr>
        <tr><td><strong>Number of Tests</strong></td><td>Total number of tests in the project</td></tr>
        <tr><td><strong>Failed Tests (7d)</strong></td><td>Failed tests in the last 7 days</td></tr>
        <tr><td><strong>Number of Pages</strong></td><td>Number of configured PageObjects</td></tr>
        <tr><td><strong>Number of Fields</strong></td><td>Number of reusable fields</td></tr>
        <tr><td><strong>Last Updated Timestamp</strong></td><td>Time of the last change</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Project Status</h2>
  <p>Projects can display various status indicators:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>active</h3><p>Project is active and in use.</p></div>
    <div class="concept-card"><h3>inactive</h3><p>Project is deactivated or unused.</p></div>
  </div>
  <p>This gives users quick visibility into project activity.</p>
`,
  "projects-search": `
  <span class="section-label">Overview Page</span>
  <h1>Search, Sorting &amp; Views</h1>
  <p>The Projects overview page offers extensive features to quickly find the right project even in large portfolios.</p>
  <h2>Project Search</h2>
  <p>The search bar allows users to find projects quickly. Supports searching by:</p>
  <ul class="feature-list">
    <li>Project name</li>
    <li>Project-related content</li>
  </ul>
  <h2>Sorting Options</h2>
  <p>Projects can be sorted by various criteria:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Sort By</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Recently Updated</strong></td><td>Most recently changed projects first</td></tr>
        <tr><td><strong>Name</strong></td><td>Alphabetically by project name</td></tr>
        <tr><td><strong>Tests</strong></td><td>By number of tests</td></tr>
        <tr><td><strong>Failed (7d)</strong></td><td>By failed tests in the last 7 days</td></tr>
        <tr><td><strong>Pages</strong></td><td>By number of PageObjects</td></tr>
        <tr><td><strong>Fields</strong></td><td>By number of fields</td></tr>
      </tbody>
    </table>
  </div>
  <h3>Benefits of Sorting</h3>
  <ul class="feature-list">
    <li>Prioritize active projects</li>
    <li>Identify unstable projects</li>
    <li>Quickly find large projects</li>
    <li>Monitor automation growth</li>
  </ul>
  <h2>View Modes</h2>
  <p>The Projects page supports multiple display modes:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>Grid View</h3><p>Compact card view with all projects at a glance.</p></div>
    <div class="concept-card"><h3>List View</h3><p>Tabular list view with detailed information.</p></div>
  </div>
`,
  "projects-create": `
  <span class="section-label">Management</span>
  <h1>Create New Project</h1>
  <p>Administrators can create new projects directly through the Projects menu.</p>
  <div class="screenshot-wrap">
    <img alt="Create New Project dialog" src="./autemos_projects_screenshots/image_3.png"/>
    <div class="screenshot-caption">Create New Project dialog — define project name and optional description.</div>
  </div>
  <h2>Create Project Dialog</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Field</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Project Name</strong></td><td>Defines the unique name of the project.</td></tr>
        <tr><td><strong>Description</strong></td><td>Optional project description for organizational purposes.</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Create Project Action</h2>
  <p>The <strong>Create Project</strong> button creates the new project container and initializes the project structure (workflows, pages, schedules, etc.).</p>
  <h2>Rules for the project name</h2>
  <ul class="feature-list">
    <li>3 to 100 characters.</li>
    <li>Letters of all languages — including <strong>umlauts, ß and accents</strong> — digits, spaces and <code>- _ . ( ) &amp;</code> are allowed. Names such as "Qualitätssicherung (Süd) &amp; Co." can therefore be created.</li>
    <li>Characters such as <code>&lt; &gt; / \\ " ' ; %</code> are not allowed.</li>
  </ul>
  <p>If the server rejects the name or another input, the dialog states the <strong>reason</strong> — no success message appears.</p>
`,
  "projects-edit": `
  <span class="section-label">Management</span>
  <h1>Edit &amp; Delete Project</h1>
  <p>Existing projects can be edited or removed by administrators.</p>
  <h2>Edit Project</h2>
  <div class="screenshot-wrap">
    <img alt="Edit Project dialog" src="./autemos_projects_screenshots/image_2.png"/>
    <div class="screenshot-caption">Edit Project — the project name can be renamed at any time.</div>
  </div>
  <p>Existing projects can be edited after creation.</p>
  <h3>Editable Fields</h3>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Field</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Project Name</strong></td><td>The project name can be renamed at any time.</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Delete Project</h2>
  <p>Administrators can remove projects that are no longer needed.</p>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Important notes —</strong> Deleting a project may remove the following content: Workflows, Runs, Pages, Test Data, Schedules, and generated assets. The exact impact depends on the system configuration and retention policies.
  </div>
  <h3>Errors when saving</h3>
  <p>The same rules apply to the new name as when creating a project (see <a href="#projects-create">Create New Project</a>). If a change is rejected — in the <strong>Edit Project</strong> dialog as well as in the project settings — Autemos states the reason; the input stays in place for correction, and the existing project name is not overwritten.</p>
`,
  "projects-navigation": `
  <span class="section-label">Features</span>
  <h1>Navigation Shortcuts &amp; Isolation</h1>
  <p>Each Project Card offers direct navigation shortcuts to important project areas, and each project is fully isolated.</p>
  <h2>Test Workflow Navigation</h2>
  <p>Users can directly open the <strong>Test Workflow menu</strong>. This enables quick access to:</p>
  <ul class="feature-list">
    <li>Workflow editing</li>
    <li>Workflow execution</li>
    <li>Automation maintenance</li>
  </ul>
  <h2>Code Generation Navigation</h2>
  <p>Users can directly open the <strong>Code Generation menu</strong>. This enables quick access to:</p>
  <ul class="feature-list">
    <li>Generated automation code</li>
    <li>Framework exports</li>
    <li>AI-generated automation assets</li>
  </ul>
  <h2>Project Isolation</h2>
  <p>Each project manages isolated:</p>
  <ul class="feature-list">
    <li>Workflows</li>
    <li>Page Objects</li>
    <li>Fields</li>
    <li>Schedules</li>
    <li>Automation assets</li>
  </ul>
  <h3>Benefits of Isolation</h3>
  <ul class="feature-list">
    <li>Clean organization</li>
    <li>Scalability</li>
    <li>Multi-team support</li>
    <li>Clear separation of responsibility</li>
  </ul>
`,
  "projects-access": `
  <span class="section-label">Features</span>
  <h1>Access Management</h1>
  <p>Project access rights are <strong>not</strong> managed within the Projects menu — all project access control is handled centrally through the <strong>Users menu</strong>.</p>
  <div class="tip"><span class="tip-icon">💡</span>In the <strong>Users menu</strong>, all access rights are maintained across projects — keeping the Projects menu clean and focused on project organization.</div>
  <h2>What Is Configured in the Users Menu</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Project Visibility</h3><p>Which users can see which projects.</p></div>
    <div class="concept-card"><h3>User Assignments</h3><p>Assignment of users to projects.</p></div>
    <div class="concept-card"><h3>Role Management</h3><p>Definition and assignment of project roles.</p></div>
    <div class="concept-card"><h3>Permission Configuration</h3><p>Granular permission settings.</p></div>
  </div>
`,
  "projects-use-cases": `
  <span class="section-label">Usage</span>
  <h1>Use Cases &amp; Enterprise Benefits</h1>
  <h2>Typical Use Cases</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Customer Separation</h3><p>Separate projects for different customers or tenants.</p></div>
    <div class="concept-card"><h3>Application Separation</h3><p>Organize automation by applications or platforms.</p></div>
    <div class="concept-card"><h3>Team Organization</h3><p>Separate projects by departments or QA teams.</p></div>
    <div class="concept-card"><h3>Environment Isolation</h3><p>Independent automation structures for staging, production, and test environments.</p></div>
  </div>
  <h2>Scalability</h2>
  <p>The Projects menu is designed to support:</p>
  <ul class="feature-list">
    <li>Small teams</li>
    <li>Enterprise organizations</li>
    <li>Multi-project environments</li>
    <li>Large automation portfolios</li>
  </ul>
  <h2>Enterprise Benefits</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Benefit</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Better Organization</strong></td><td>Structured separation of automation assets.</td></tr>
        <tr><td><strong>Faster Navigation</strong></td><td>Quick access to workflows and code generation.</td></tr>
        <tr><td><strong>Simplified Management</strong></td><td>Centralized project management and overview.</td></tr>
        <tr><td><strong>Scalability</strong></td><td>Supports large enterprise automation portfolios.</td></tr>
      </tbody>
    </table>
  </div>
`,
});
