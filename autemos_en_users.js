// Autemos Documentation — User Management Module English Translations
window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "users-overview": `
  <span class="section-label">Getting Started</span>
  <h1>User Management</h1>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Administrators only —</strong> The User Management area is accessible exclusively to administrators. Only users with administrative permissions can invite, edit, disable, or delete users, assign projects, and manage roles. This ensures secure and centralized access control across the entire Autemos platform.
  </div>
  <p>The <strong>User Management menu</strong> is the central administrative area for managing all users within Autemos.</p>
  <h2>What Administrators Can Do</h2>
  <ul class="feature-list">
    <li>Create and invite users</li>
    <li>Manage user accounts</li>
    <li>Assign project access</li>
    <li>Configure project roles</li>
    <li>Monitor user activity</li>
    <li>Control platform permissions</li>
  </ul>
  <h2>Designed For</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Enterprise Access Management</h3><p>Centralized control for large organizations.</p></div>
    <div class="concept-card"><h3>Multi-Team Environments</h3><p>Clean separation of multiple teams.</p></div>
    <div class="concept-card"><h3>Secure Project Isolation</h3><p>Granular access control per project.</p></div>
    <div class="concept-card"><h3>Scalable Permissions</h3><p>Even with very large user counts.</p></div>
  </div>
  <h2>Purpose</h2>
  <p>The User Management area helps organizations to:</p>
  <ul class="feature-list">
    <li>Control platform access</li>
    <li>Separate responsibilities</li>
    <li>Manage project permissions</li>
    <li>Onboard new users</li>
    <li>Disable inactive accounts</li>
    <li>Ensure secure enterprise governance</li>
  </ul>
  <h2>Main Features</h2>
  <ul class="feature-list">
    <li>User overview</li>
    <li>User search</li>
    <li>User invitation</li>
    <li>User editing</li>
    <li>Project assignment</li>
    <li>Role management</li>
    <li>Account activation and deactivation</li>
    <li>User deletion</li>
  </ul>
`,
  "users-list": `
  <span class="section-label">Overview</span>
  <h1>User Management Overview</h1>
  <p>The main overview displays all registered users — with dashboard statistics, search functionality, and a complete user table.</p>
  <div class="screenshot-wrap">
    <img alt="User Management overview" src="./autemos_usermanagement_screenshots/image_1.png"/>
    <div class="screenshot-caption">User Management Overview — dashboard with statistics, user search, and complete user table.</div>
  </div>
  <h2>Dashboard Statistics</h2>
  <p>The top dashboard cards provide a quick overview of platform usage:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>Total Users</h3><p>Total number of all registered users.</p></div>
    <div class="concept-card"><h3>Active Users</h3><p>Number of active accounts.</p></div>
    <div class="concept-card"><h3>Administrators</h3><p>Number of admin users.</p></div>
    <div class="concept-card"><h3>Disabled Users</h3><p>Number of disabled accounts.</p></div>
  </div>
  <h2>User Table</h2>
  <p>The user table displays all users and their account information:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Column</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>User Name</strong></td><td>Full name of the user</td></tr>
        <tr><td><strong>Username</strong></td><td>Unique username (login)</td></tr>
        <tr><td><strong>Email</strong></td><td>Email address</td></tr>
        <tr><td><strong>Role</strong></td><td>System-wide role (Administrator / User)</td></tr>
        <tr><td><strong>Status</strong></td><td>Account status (Active / Disabled)</td></tr>
        <tr><td><strong>Created Date</strong></td><td>Date of account creation</td></tr>
        <tr><td><strong>Last Login</strong></td><td>Time of last login</td></tr>
        <tr><td><strong>Actions Menu</strong></td><td>Direct access to user actions</td></tr>
      </tbody>
    </table>
  </div>
  <h2>User Roles</h2>
  <p>Users can have different system-wide roles:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>Administrator</h3><p>Full platform administration rights.</p></div>
    <div class="concept-card"><h3>User</h3><p>Standard user account with project-based rights.</p></div>
  </div>
  <p>Roles define <strong>platform permissions</strong>, <strong>administrative functions</strong>, and <strong>access restrictions</strong>.</p>
  <h2>User Status</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Active</h3><p>User can log in and work.</p></div>
    <div class="concept-card"><h3>Disabled</h3><p>User is blocked — no login possible.</p></div>
  </div>
  <h2>Search Function</h2>
  <p>The search bar enables administrators to quickly find users. Supported search criteria:</p>
  <ul class="feature-list">
    <li>Name</li>
    <li>Username</li>
    <li>Email address</li>
  </ul>
`,
  "users-invite": `
  <span class="section-label">Management</span>
  <h1>Invite New User</h1>
  <p>Administrators can invite new users directly through the User Management menu.</p>
  <div class="screenshot-wrap">
    <img alt="Invite User dialog" src="./autemos_usermanagement_screenshots/image_2.png"/>
    <div class="screenshot-caption">Invite User Dialog — email, username, first and last name for inviting new users.</div>
  </div>
  <h2>Invite User Dialog</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Field</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Email</strong></td><td>Email address for the invitation</td></tr>
        <tr><td><strong>Username</strong></td><td>Unique login name</td></tr>
        <tr><td><strong>First Name</strong></td><td>User's first name</td></tr>
        <tr><td><strong>Last Name</strong></td><td>User's last name</td></tr>
      </tbody>
    </table>
  </div>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>SMTP Notice —</strong> If SMTP is not configured, the system displays a warning message. In this case, <strong>invitation emails cannot be sent automatically</strong>, and <strong>password reset links must be shared manually</strong>. This alerts administrators to incomplete notification configurations.
  </div>
  <h2>Account Creation</h2>
  <p>After the invitation:</p>
  <ul class="feature-list">
    <li>The user account is created</li>
    <li>Login credentials can be initialized</li>
    <li>The user can receive onboarding information</li>
  </ul>
`,
  "users-edit": `
  <span class="section-label">Management</span>
  <h1>Edit User &amp; Status</h1>
  <p>Existing users can be edited subsequently, and administrators can activate or deactivate accounts at any time.</p>
  <div class="screenshot-wrap">
    <img alt="Edit User dialog" src="./autemos_usermanagement_screenshots/image_3.png"/>
    <div class="screenshot-caption">Edit User — editable fields for email, first/last name, and User Enabled Status.</div>
  </div>
  <h2>Editable Fields</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Field</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Email</strong></td><td>Update email address</td></tr>
        <tr><td><strong>First Name</strong></td><td>Change first name</td></tr>
        <tr><td><strong>Last Name</strong></td><td>Change last name</td></tr>
        <tr><td><strong>User Enabled Status</strong></td><td>Enable or disable the account</td></tr>
      </tbody>
    </table>
  </div>
  <div class="tip"><span class="tip-icon">💡</span><strong>Username Restriction —</strong> The <strong>Username</strong> cannot be changed after creation. This ensures consistent identities, stable audit data, and secure permission structures.</div>
  <h2>Enable / Disable Users</h2>
  <p>Administrators can enable or disable users. Disabled users:</p>
  <ul class="feature-list">
    <li>Can no longer log in</li>
    <li>Lose platform access</li>
    <li>Retain historical references within the system</li>
  </ul>
  <h3>Use Cases</h3>
  <div class="concept-grid">
    <div class="concept-card"><h3>Temporary Suspension</h3><p>Short-term access revocation.</p></div>
    <div class="concept-card"><h3>Employee Offboarding</h3><p>Orderly exit with data retention.</p></div>
    <div class="concept-card"><h3>Security Measures</h3><p>Immediate lockout for compliance issues.</p></div>
  </div>
`,
  "users-actions": `
  <span class="section-label">Management</span>
  <h1>User Actions &amp; Delete</h1>
  <p>Each user row has an <strong>Actions dropdown menu</strong> with all important user actions.</p>
  <h2>Available Actions</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Action</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Edit</strong></td><td>Edit user data</td></tr>
        <tr><td><strong>View Projects</strong></td><td>Manage project assignments</td></tr>
        <tr><td><strong>Disable</strong></td><td>Deactivate account</td></tr>
        <tr><td><strong>Delete</strong></td><td>Permanently delete user</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Delete User</h2>
  <p>Administrators can permanently remove users from the system.</p>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Important Notes —</strong> When deleting a user, <strong>permissions are removed immediately</strong>. Historical test assignments may be retained, and audit logs may still store references.
  </div>
`,
  "users-projects": `
  <span class="section-label">Project Assignment</span>
  <h1>Project Assignment &amp; Roles</h1>
  <p>Users can be assigned to one or more projects — with individual project roles per assignment.</p>
  <div class="screenshot-wrap">
    <img alt="Manage User Projects" src="./autemos_usermanagement_screenshots/image_5.png"/>
    <div class="screenshot-caption">Manage User Projects — centralized management of all project assignments per user.</div>
  </div>
  <h2>Manage User Projects</h2>
  <p>The project dialog enables administrators to:</p>
  <ul class="feature-list">
    <li>Assign projects</li>
    <li>Remove projects</li>
    <li>Manage project roles</li>
    <li>View current assignments</li>
  </ul>
  <h2>Assigned Projects View</h2>
  <div class="screenshot-wrap">
    <img alt="Assigned Projects view" src="./autemos_usermanagement_screenshots/image_6.png"/>
    <div class="screenshot-caption">Assigned Projects — already assigned projects with current roles and assignment data.</div>
  </div>
  <p>The <strong>Assigned Projects</strong> tab shows:</p>
  <ul class="feature-list">
    <li>Assigned projects</li>
    <li>Current project roles</li>
    <li>Assignment dates</li>
    <li>Project owner information</li>
  </ul>
  <h2>Available Projects View</h2>
  <p>The <strong>Available Projects</strong> tab shows projects not yet assigned to the user. Administrators can browse available projects and grant new project access.</p>
  <h2>Assign Project Dialog</h2>
  <div class="screenshot-wrap">
    <img alt="Assign Project dialog" src="./autemos_usermanagement_screenshots/image_7.png"/>
    <div class="screenshot-caption">Assign Project Dialog — assign a project and define the user role at the same time.</div>
  </div>
  <p>Administrators can assign a project and define the user role at the same time.</p>
  <h2>Project Roles</h2>
  <p>Project-related roles can be:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>Owner</h3><p>Full project responsibility and administrative control.</p></div>
    <div class="concept-card"><h3>Admin</h3><p>Can manage project resources and configurations.</p></div>
    <div class="concept-card"><h3>Member</h3><p>Standard access for collaboration within the project.</p></div>
    <div class="concept-card"><h3>Viewer</h3><p>Read-only access to project information.</p></div>
  </div>
  <h2>Project Permissions</h2>
  <p>Project roles define access to:</p>
  <ul class="feature-list">
    <li>Workflows</li>
    <li>Test Runs</li>
    <li>Pages</li>
    <li>Schedules</li>
    <li>Test Data</li>
    <li>Automation Assets</li>
  </ul>
  <p>This ensures <strong>project isolation</strong>, <strong>controlled collaboration</strong>, and <strong>secure multi-team operation</strong>.</p>
`,
  "users-use-cases": `
  <span class="section-label">Usage</span>
  <h1>Use Cases &amp; Enterprise Benefits</h1>
  <h2>Typical Use Cases</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Team Onboarding</h3><p>Invite new QA engineers or automation developers.</p></div>
    <div class="concept-card"><h3>Customer Separation</h3><p>Assign users exclusively to customer-specific projects.</p></div>
    <div class="concept-card"><h3>Role-Based Access Control</h3><p>Restrict administrative functions to specific users.</p></div>
    <div class="concept-card"><h3>Temporary Access</h3><p>Grant short-term project access for external staff or partners.</p></div>
    <div class="concept-card"><h3>Offboarding</h3><p>Disable or remove users when they leave the company.</p></div>
  </div>
  <h2>Enterprise Benefits</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Benefit</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Centralized Access Control</strong></td><td>All user and permission management is handled centrally in one administrative interface.</td></tr>
        <tr><td><strong>Secure Multi-Team Collaboration</strong></td><td>Projects and permissions can be cleanly separated between teams and departments.</td></tr>
        <tr><td><strong>Scalable User Management</strong></td><td>Supports enterprise environments with large user counts.</td></tr>
        <tr><td><strong>Simplified Onboarding</strong></td><td>New users can quickly be assigned to required projects.</td></tr>
        <tr><td><strong>Improved Security</strong></td><td>Administrators retain full control over permissions, project access, user activity, and the entire user lifecycle.</td></tr>
      </tbody>
    </table>
  </div>
`,
});
