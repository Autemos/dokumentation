window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "scheduler-overview": `
  <div class="section-intro">
    <span class="section-label">Scheduler</span>
    <h1>Test Scheduler</h1>
    <p>The Test Scheduler module enables teams to automate and orchestrate test executions across projects, workflows, and environments. It provides centralized scheduling capabilities for recurring regression suites, smoke tests, monitoring checks, and chained execution flows.</p>
  </div>
  <h2>What the module offers</h2>
  <ul class="feature-list">
    <li>Time-based execution with Cron intervals</li>
    <li>Event-based execution based on dependencies between schedules</li>
    <li>Monitor upcoming executions and review historical runs</li>
    <li>Configure execution settings and environments</li>
    <li>Manually trigger schedules on demand</li>
    <li>External CI/CD integration via API</li>
  </ul>
  <h2>Module sections</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Section</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td><strong>Schedules</strong></td><td>Manage and configure all scheduled executions</td></tr>
        <tr><td><strong>Upcoming Runs</strong></td><td>Preview future scheduled executions</td></tr>
        <tr><td><strong>History</strong></td><td>Centralized execution history across all schedules</td></tr>
      </tbody>
    </table>
  </div>
`,
  "schedules-list": `
  <div class="node-header">
    <div>
      <h1>Schedules</h1>
      <span class="badge badge-scheduler">Scheduler</span>
    </div>
  </div>
  <p>The Schedules tab provides a centralized overview of all configured schedules in the project. Each schedule card displays the name, description, execution frequency, timezone, linked workflows, current status, and quick action controls.</p>
  <div class="screenshot-wrap">
    <img src="./Test_Scheduler_Documentation/image_1.png" alt="Schedules Overview">
    <div class="screenshot-caption">Schedules — centralized overview of all configured schedules with status and quick actions.</div>
  </div>
  <h2>Available actions</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Action</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Run Now</strong></td><td>Executes the schedule immediately</td></tr>
        <tr><td><strong>Enable / Disable</strong></td><td>Activates or pauses the schedule</td></tr>
        <tr><td><strong>Edit</strong></td><td>Modifies the schedule configuration</td></tr>
        <tr><td><strong>Delete</strong></td><td>Permanently removes the schedule</td></tr>
        <tr><td><strong>Open Details</strong></td><td>Opens detailed schedule management</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Schedule status</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Status</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Active</strong></td><td>Schedule runs automatically according to its interval</td></tr>
        <tr><td><strong>Inactive</strong></td><td>Schedule is paused — no executions are triggered</td></tr>
        <tr><td><strong>Scheduled</strong></td><td>Execution is queued for future run</td></tr>
        <tr><td><strong>Running</strong></td><td>Schedule is currently executing</td></tr>
        <tr><td><strong>Failed</strong></td><td>Last execution failed</td></tr>
        <tr><td><strong>Passed</strong></td><td>Last execution completed successfully</td></tr>
      </tbody>
    </table>
  </div>
`,
  "create-schedule": `
  <div class="node-left">
    <div class="node-header">
      <div>
        <h1>Create Schedule</h1>
        <span class="badge badge-scheduler">Schedules</span>
      </div>
    </div>
    <p>Users can create new schedules using the <strong>New Schedule</strong> button. The creation dialog supports several configuration areas including name, trigger type, frequency, timezone, runner, and linked tests.</p>
    <h2>Basic configuration</h2>
    <div class="param-table-wrap">
      <table class="param-table">
        <thead><tr><th>Field</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>Schedule Name</strong></td><td>Visible name of the schedule (e.g. Nightly Regression Suite)</td></tr>
          <tr><td><strong>Description</strong></td><td>Optional metadata describing the purpose</td></tr>
          <tr><td><strong>Timezone</strong></td><td>Execution timezone (e.g. Europe/Zurich)</td></tr>
        </tbody>
      </table>
    </div>
    <h2>Execution settings</h2>
    <div class="param-table-wrap">
      <table class="param-table">
        <thead><tr><th>Setting</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>Runner Type</strong></td><td>Selenium Grid, Cloud Runner, Local Agent</td></tr>
          <tr><td><strong>Parallelism</strong></td><td>Number of concurrent test executions</td></tr>
          <tr><td><strong>Max Retries</strong></td><td>Retry count for failed executions</td></tr>
          <tr><td><strong>Retry Delay</strong></td><td>Delay between retry attempts</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="screenshot-wrap">
    <img src="./Test_Scheduler_Documentation/image_2.png" alt="Create Schedule dialog">
    <div class="screenshot-caption">Create Schedule dialog</div>
  </div>
`,
  "trigger-types": `
  <div class="node-header">
    <div>
      <h1>Trigger Types</h1>
      <span class="badge badge-scheduler">Schedules</span>
    </div>
  </div>
  <p>The Scheduler supports multiple trigger strategies to meet a variety of operational requirements.</p>
  <h2>Time-based (Cron)</h2>
  <p>Schedules run based on recurring time intervals.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Frequency</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Every 5 min</td><td>Continuous monitoring</td></tr>
        <tr><td>Every 15 min</td><td>High-frequency execution</td></tr>
        <tr><td>Every 30 min</td><td>Standard monitoring</td></tr>
        <tr><td>Hourly</td><td>Periodic execution</td></tr>
        <tr><td>Daily</td><td>Daily regression runs</td></tr>
        <tr><td>Weekly</td><td>Weekly validation cycles</td></tr>
        <tr><td>Custom</td><td>Custom Cron expressions for precise scheduling</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Event-based</h2>
  <p>Schedules can be triggered after another schedule completes successfully. This enables chained execution flows, dependency orchestration, and multi-stage validation pipelines.</p>
  <h2>Headless execution</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Mode</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Headed</strong></td><td>Browser UI visible during execution</td></tr>
        <tr><td><strong>Headless</strong></td><td>Browser runs invisibly — faster execution, lower infrastructure overhead</td></tr>
      </tbody>
    </table>
  </div>
`,
  "upcoming-runs": `
  <div class="node-header">
    <div>
      <h1>Upcoming Runs</h1>
      <span class="badge badge-scheduler">Monitoring</span>
    </div>
  </div>
  <p>The Upcoming Runs tab provides visibility into future scheduled executions across all configured schedules. Users can preview runs for the next 24 hours, 48 hours, or 7 days.</p>
  <div class="screenshot-wrap">
    <img src="./Test_Scheduler_Documentation/image_3.png" alt="Upcoming Runs">
    <div class="screenshot-caption">Upcoming Runs — preview of all future scheduled executions with time and workflow details.</div>
  </div>
  <h2>Displayed information</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Column</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Scheduled Time</td><td>Exact future execution timestamp</td></tr>
        <tr><td>Schedule</td><td>Associated schedule name</td></tr>
        <tr><td>Test / Workflow</td><td>Workflow or test name to be executed</td></tr>
        <tr><td>Status</td><td>Status of the queued execution</td></tr>
      </tbody>
    </table>
  </div>
`,
  "execution-history": `
  <div class="node-header">
    <div>
      <h1>Execution History</h1>
      <span class="badge badge-scheduler">Monitoring</span>
    </div>
  </div>
  <p>The History tab provides a centralized overview of all historical schedule executions across the entire project. Unlike schedule-specific run history, this view aggregates executions from all configured schedules into a single operational dashboard.</p>
  <div class="screenshot-wrap">
    <img src="./Test_Scheduler_Documentation/image_4.png" alt="Execution History">
    <div class="screenshot-caption">Execution History — centralized view of all scheduled run results in the project.</div>
  </div>
  <h2>History table</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Column</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Timestamp</td><td>Date and time of execution</td></tr>
        <tr><td>Schedule</td><td>Name of the originating schedule</td></tr>
        <tr><td>Test Name</td><td>Executed workflow or test</td></tr>
        <tr><td>Status</td><td>Final execution result</td></tr>
        <tr><td>Duration</td><td>Total execution time</td></tr>
        <tr><td>Actions</td><td>Access detailed execution information</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Filtering &amp; search</h2>
  <p>The History tab includes status filters (All, Passed, Failed) and time range filters (Last 24h, Last 7d, Last 30d) for faster investigation and analysis. The table supports pagination for large execution volumes.</p>
  <h2>Use cases</h2>
  <ul class="feature-list">
    <li>Failure investigation — identify recurring failures across schedules and workflows</li>
    <li>Performance monitoring — track execution duration trends over time</li>
    <li>Regression stability — analyze long-term automation reliability</li>
    <li>Operational auditing — maintain a complete audit trail of automated executions</li>
  </ul>
`,
  "schedule-details": `
  <div class="node-header">
    <div>
      <h1>Schedule Details</h1>
      <span class="badge badge-scheduler">Schedule Management</span>
    </div>
  </div>
  <p>Opening a schedule provides detailed management capabilities. The detail view is divided into three tabs: Tests, Upcoming Runs, and Run History.</p>
`,
  "schedule-tests": `
  <h2>Tests</h2>
  <p>The Tests tab displays all workflows assigned to the schedule and enables full test management within the schedule.</p>
  <div class="screenshot-wrap">
    <img src="./Test_Scheduler_Documentation/image_6.png" alt="Schedule Tests Tab">
    <div class="screenshot-caption">Tests tab — manage all workflows assigned to the schedule with dependencies and execution settings.</div>
  </div>
  <h3>Add test to schedule</h3>
  <div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:20px">
    <div style="flex:1;min-width:0">
      <p style="margin-bottom:12px">Tests can be dynamically added to existing schedules with full configuration options.</p>
      <div class="param-table-wrap" style="margin:0">
        <table class="param-table">
          <thead><tr><th>Option</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>Workflow</td><td>Select the workflow to execute</td></tr>
            <tr><td>Dependency</td><td>Define which test must complete before this one</td></tr>
            <tr><td>Retry Behavior</td><td>Override retry count and delay for this specific test</td></tr>
            <tr><td>Headless Mode</td><td>Run the browser without a visible UI</td></tr>
            <tr><td>Variables</td><td>Synchronize workflow input/output variables for parameterization</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="screenshot-wrap" style="flex:0 0 280px;margin:0">
      <img src="./Test_Scheduler_Documentation/image_7.png" alt="Add Test to Schedule">
      <div class="screenshot-caption">Add Test to Schedule dialog</div>
    </div>
  </div>
  <div class="tip">
    <span class="tip-icon">💡</span>
    Use <strong>Test Dependencies</strong> to chain execution flows — for example: <em>Checkout Flow depends on Login Flow</em>. This ensures that authentication and environment preparation occur before business-critical tests.
  </div>
`,
  "schedule-upcoming": `
  <h2>Upcoming Runs</h2>
  <p>The Upcoming Runs section at the schedule level displays future executions only for the selected schedule, helping teams validate scheduling behavior before execution.</p>
  <div class="screenshot-wrap">
    <img src="./Test_Scheduler_Documentation/image_8.png" alt="Schedule Upcoming Runs">
    <div class="screenshot-caption">Upcoming Runs (Schedule detail) — next scheduled executions with exact timestamps and run order.</div>
  </div>
  <h3>Displayed information</h3>
  <ul class="feature-list">
    <li>Exact execution timestamp</li>
    <li>Relative execution time (e.g. "in 2 hours")</li>
    <li>Run order within the schedule</li>
    <li>Next execution indicator</li>
  </ul>
`,
  "schedule-history": `
  <h2>Run History</h2>
  <p>The Run History section provides historical visibility into all executions of the selected schedule.</p>
  <div class="screenshot-wrap">
    <img src="./Test_Scheduler_Documentation/image_9.png" alt="Schedule Run History">
    <div class="screenshot-caption">Run History — execution timeline for the selected schedule with status, duration, and trigger details.</div>
  </div>
  <h3>History information</h3>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Field</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Date</td><td>Execution timestamp</td></tr>
        <tr><td>Trigger</td><td>Execution source (scheduled, manual, event-based)</td></tr>
        <tr><td>Status</td><td>Final execution state</td></tr>
        <tr><td>Tests</td><td>Number of executed tests</td></tr>
        <tr><td>Duration</td><td>Total execution duration</td></tr>
      </tbody>
    </table>
  </div>
  <h3>History filters</h3>
  <p>Filter execution history by status and time range (Last 24h, Last 7d, Last 30d) to quickly isolate incidents or analyze long-term trends.</p>
`,
  "external-integration": `
  <div class="node-header">
    <div>
      <h1>External Integration</h1>
      <span class="badge badge-scheduler">Integration</span>
    </div>
  </div>
  <p>In addition to built-in scheduling, Autemos supports integration with external orchestration and CI/CD platforms. This enables organizations to trigger automated tests directly from existing delivery pipelines.</p>
  <h2>Supported platforms</h2>
  <ul class="feature-list">
    <li>GitLab CI/CD</li>
    <li>Jenkins</li>
    <li>Azure DevOps</li>
    <li>GitHub Actions</li>
    <li>Custom pipeline systems via API</li>
  </ul>
  <h2>API-based execution</h2>
  <p>Autemos provides APIs that allow external systems to trigger individual tests, complete workflows, regression suites, and scheduled execution chains. External systems manage orchestration, while Autemos handles test execution, browser automation, reporting, self-healing, and analytics.</p>
  <h2>Common integration scenarios</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Scenario</th><th>Flow</th></tr></thead>
      <tbody>
        <tr><td><strong>CI/CD validation</strong></td><td>GitLab Pipeline → Deployment → Trigger Autemos tests → Validate</td></tr>
        <tr><td><strong>Enterprise scheduling</strong></td><td>Enterprise Scheduler → Autemos API → Automated execution</td></tr>
        <tr><td><strong>Release Gate</strong></td><td>Build → Deployment to staging → Trigger workflow → Evaluate → Proceed or stop</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Internal vs. external scheduling</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Type</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Internal</strong></td><td>Managed directly within the Test Scheduler module</td></tr>
        <tr><td><strong>External</strong></td><td>Triggered via API from CI/CD or enterprise systems</td></tr>
      </tbody>
    </table>
  </div>
  <div class="tip">
    <span class="tip-icon">💡</span>
    Many organizations use a <strong>hybrid approach</strong> — internal schedules for recurring monitoring and regression testing, external triggers for CI/CD and deployment validation. Both can be combined while preserving centralized reporting in Autemos.
  </div>
`,
});
