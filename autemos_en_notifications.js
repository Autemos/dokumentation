window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "notifications-overview": `
  <span class="section-label">Getting Started</span>
  <h1>Notifications</h1>
  <p>Autemos reports the result of a test run by itself: whoever started a run no longer has to go and check the result in Autemos. When each run ends, a message appears in the <strong>bell</strong> in the header and — depending on the settings — an <strong>email</strong> is sent.</p>
  <h2>Channels</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>In-App (bell)</h3><p>Message with workflow, result, time and a link to the report — on every page of the application.</p></div>
    <div class="concept-card"><h3>Email</h3><p>Delivery via SMTP or Microsoft Graph (Microsoft 365 / Outlook), configured centrally by the administrator.</p></div>
  </div>
  <p>Further channels, such as Microsoft Teams, follow separately.</p>
  <h2>Results</h2>
  <p>The three results <strong>Passed</strong>, <strong>Failed</strong> and <strong>Cancelled</strong> (stopped run) are reported. Each user decides for themselves which result they want to receive through which channel.</p>
  <h2>Where do I find what?</h2>
  <ul class="feature-list">
    <li><a href="#notifications-bell">Bell</a> — read messages and jump to the report</li>
    <li><a href="#notifications-preferences">Profile settings</a> — choose per user what arrives</li>
    <li><a href="#notifications-recipients">Recipients &amp; Results</a> — who is notified for which run</li>
    <li><a href="#notifications-email">Email delivery</a> — email content and setup by administrators</li>
  </ul>
`,
  "notifications-bell": `
  <span class="section-label">For Users</span>
  <h1>The Bell</h1>
  <p>The bell sits in the header on every page, between the theme switch and the avatar. Its counter shows unread messages without you having to navigate anywhere.</p>
  <h2>Counter and panel</h2>
  <ul class="feature-list">
    <li>The button is named <strong>Notifications</strong>, or <strong>Notifications (N unread)</strong> when there are unread messages. A badge shows the number; from 100 it reads "99+". At 0 there is no badge.</li>
    <li>A click opens the <strong>Notifications</strong> panel. <strong>Mark all as read</strong> marks all messages as read (disabled when none are unread). Escape or a click outside closes the panel.</li>
    <li>The counter updates without reloading after 30 seconds at the latest while the browser tab is visible; opening the panel reloads the list immediately.</li>
  </ul>
  <h2>An entry</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Element</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Workflow name</strong></td><td>One line; the full name is shown as a tooltip.</td></tr>
        <tr><td><strong>Result</strong></td><td>Badge <em>Passed</em> (green), <em>Failed</em> (red) or <em>Cancelled</em> (grey).</td></tr>
        <tr><td><strong>Time</strong></td><td>Relative (for example "2 min ago"); the exact time is shown as a tooltip.</td></tr>
        <tr><td><strong>Unread</strong></td><td>Dot on the left and bold text.</td></tr>
      </tbody>
    </table>
  </div>
  <p>Clicking the entry opens the <strong>report of exactly that run</strong> and marks the message as read — also after reloading. Without a run identifier, the entry leads to the project's run overview.</p>
  <h2>Empty and error state</h2>
  <p>Without messages, "No notifications yet" is shown. If the list cannot be loaded, "Notifications could not be loaded" appears with a <strong>Retry</strong> button.</p>
  <div class="tip"><span class="tip-icon">🔒</span>Each user sees only their own messages.</div>
`,
  "notifications-preferences": `
  <span class="section-label">For Users</span>
  <h1>Profile Settings</h1>
  <p>In <strong>Personal Settings</strong> (avatar menu), the <strong>Notifications</strong> tab has a table: rows are the results <strong>Passed</strong>, <strong>Failed</strong> and <strong>Cancelled</strong>, columns are the channels <strong>In-App</strong> and <strong>Email</strong>. Each cell is a switch, for example "E-Mail – Failed".</p>
  <h2>Behaviour</h2>
  <ul class="feature-list">
    <li>A switch saves <strong>immediately</strong>. If saving fails, it jumps back and a message appears.</li>
    <li>The defaults without a personal setting: <strong>In-App</strong> on for all three results; <strong>Email</strong> only for <em>Failed</em>.</li>
    <li>If the administrator has not set up the email connection, the <em>Email</em> column is disabled and shows "Not configured by your administrator". Your choice is kept and applies as soon as the connection is in place.</li>
    <li>If the table cannot be loaded, <strong>Retry</strong> offers another attempt.</li>
  </ul>
`,
  "notifications-recipients": `
  <span class="section-label">Rules &amp; Delivery</span>
  <h1>Recipients &amp; Results</h1>
  <p>When each run ends, Autemos determines the recipients and checks, for each one individually, their personal setting per channel and result.</p>
  <h2>Who is notified?</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Recipient</th><th>When</th></tr></thead>
      <tbody>
        <tr><td><strong>Starter</strong></td><td>The signed-in user who started the run.</td></tr>
        <tr><td><strong>Schedule owner</strong></td><td>For runs started by a schedule: the user who created the schedule.</td></tr>
        <tr><td><strong>Project admins</strong></td><td>Additionally for <em>Failed</em> if an administrator has switched on <em>Also notify project admins on failed runs</em> in Global Settings (default: off).</td></tr>
      </tbody>
    </table>
  </div>
  <ul class="feature-list">
    <li>If someone is a recipient in several roles, they receive the message only once.</li>
    <li>Runs without an attributable user — for example runs started via an API key — produce no message.</li>
  </ul>
  <h2>Results</h2>
  <ul class="feature-list">
    <li><strong>Passed</strong> and <strong>Failed</strong> correspond to the run's result.</li>
    <li><strong>Cancelled</strong> stands for a stopped run. A stop that only arrives during the last node is no longer lost — the run ends as stopped.</li>
  </ul>
  <h2>Failures</h2>
  <p>Delivery runs in the background. If one channel fails, the other channels, the other recipients and the run itself are unaffected.</p>
`,
  "notifications-email": `
  <span class="section-label">Rules &amp; Delivery</span>
  <h1>Email Delivery</h1>
  <h2>Content of the email</h2>
  <ul class="feature-list">
    <li><strong>Subject:</strong> "[Autemos] Passed|Failed|Cancelled: &lt;workflow&gt;"</li>
    <li><strong>Body:</strong> workflow name, result, time the run finished (with time zone offset), project and a <strong>direct link to the test report</strong>. If there is no report, a corresponding note appears.</li>
    <li><strong>Recipient address:</strong> the user's email address. If it is missing, no email is sent.</li>
  </ul>
  <h2>Setup by administrators</h2>
  <p>The mail connection is set up once, centrally, in <a href="#settings-notifications">Global Settings → Notifications</a>: provider <strong>SMTP</strong> or <strong>Microsoft Graph</strong>, the credentials (stored encrypted) and the sender. With <strong>Send test email</strong>, administrators verify the connection. As long as the connection is incomplete, the email channel stays disabled for all users.</p>
  <div class="tip"><span class="tip-icon">💡</span>The same connection also sends the system emails (password reset, invitation, etc.), see <a href="#users-login">Sign-in &amp; Forgot Password</a>.</div>
`,
});
