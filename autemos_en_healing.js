window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "healing-overview": `
  <div class="section-intro">
    <span class="section-label">Self-Healing</span>
    <h1>Self-Healing &amp; LLM</h1>
    <p>The Self-Healing &amp; LLM module provides centralized management, monitoring, and configuration of the platform's AI-powered selector healing capabilities. It enables automatic selector recovery, intelligent locator fallback strategies, and AI-assisted healing proposals.</p>
  </div>
  <h2>What the module provides</h2>
  <ul class="feature-list">
    <li>Automatic selector recovery when the UI changes</li>
    <li>Intelligent locator fallback strategies</li>
    <li>AI-assisted healing proposals with confidence scores</li>
    <li>Monitoring and analysis of selector reliability</li>
    <li>Global and project-specific healing configuration</li>
    <li>Tracking of healing costs and transparency of AI token usage</li>
  </ul>
  <h2>Module structure</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Section</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td><strong>LLM Dashboard</strong></td><td>Analytics and AI healing metrics</td></tr>
        <tr><td><strong>Self-Healing Monitor</strong></td><td>Runtime healing health and reliability</td></tr>
        <tr><td><strong>Healing Config</strong></td><td>Global and project-specific configuration</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Deep integration</h2>
  <p>Self-Healing is deeply integrated into Test Workflows, Test Runs, runtime execution, and reporting. In earlier modules, healing is visible during workflow execution and in reports — this module focuses on the operational management and configuration of the healing system itself.</p>
`,
  "llm-dashboard": `
  <div class="node-header">
    <div>
      <h1>LLM Dashboard</h1>
      <span class="badge badge-healing">Self-Healing</span>
    </div>
  </div>
  <p>The LLM Dashboard provides transparency into AI-powered healing activity, proposal generation, runtime costs, and acceptance metrics. It enables teams to understand how often healing occurs, how successful it is, and what operational AI costs are incurred.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_1.png" alt="LLM Dashboard">
    <div class="screenshot-caption">LLM Dashboard — AI healing analytics, proposal tracking, token usage, and cost overview.</div>
  </div>
  <h2>Dashboard metrics</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Metric</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Success Rate</strong></td><td>Overall healing success rate across all executions</td></tr>
        <tr><td><strong>Proposals</strong></td><td>Total number of AI-generated healing proposals</td></tr>
        <tr><td><strong>Accepted</strong></td><td>Proposals accepted and successfully applied</td></tr>
        <tr><td><strong>LLM Costs</strong></td><td>Estimated AI operating costs including processing of input and output tokens</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Token usage</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Metric</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Input Tokens</td><td>Tokens sent to the LLM</td></tr>
        <tr><td>Output Tokens</td><td>Tokens returned by the LLM</td></tr>
        <tr><td>Total Tokens</td><td>Combined token usage</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Cost overview</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Type</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Input Cost</td><td>Cost of prompt processing</td></tr>
        <tr><td>Output Cost</td><td>Cost of generated responses</td></tr>
        <tr><td>Total Cost</td><td>Combined LLM operating costs</td></tr>
      </tbody>
    </table>
  </div>
  <p>The cost trend chart shows the historical evolution of AI costs over time and helps organizations monitor scaling effects, unusual usage spikes, and the AI operating budget. The feedback distribution visualization shows the overall ratios of accepted and rejected proposals for evaluating AI proposal quality.</p>
`,
  "recent-proposals": `
  <div class="node-header">
    <div>
      <h1>Recent Proposals</h1>
      <span class="badge badge-healing">LLM Dashboard</span>
    </div>
  </div>
  <p>The Recent Proposals table displays recently generated healing proposals along with their current status, confidence scores, and available actions.</p>
  <h2>Proposal information</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Column</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Date</td><td>Timestamp of proposal creation</td></tr>
        <tr><td>Page</td><td>Associated PageObject</td></tr>
        <tr><td>Element</td><td>Affected selector</td></tr>
        <tr><td>Confidence</td><td>AI confidence score for the proposal</td></tr>
        <tr><td>Status</td><td>Current proposal status</td></tr>
        <tr><td>Actions</td><td>View proposal details</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Proposal status</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Status</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Pending</strong></td><td>Awaiting review or automatic acceptance</td></tr>
        <tr><td><strong>Accepted</strong></td><td>Successfully applied — selector is now healed</td></tr>
        <tr><td><strong>Rejected</strong></td><td>Rejected by the user or system</td></tr>
      </tbody>
    </table>
  </div>
`,
  "healing-monitoring": `
  <div class="node-header">
    <div>
      <h1>Self-Healing Monitor</h1>
      <span class="badge badge-healing">Monitoring</span>
    </div>
  </div>
  <p>The Self-Healing area focuses on runtime healing health and selector reliability. It provides operational transparency into healing attempts, recovery success, selector stability, and runtime reliability.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_3.png" alt="Self-Healing Monitoring">
    <div class="screenshot-caption">Self-Healing Monitor — runtime healing health, strategy rotations, and selector reliability metrics.</div>
  </div>
  <h2>Runtime metrics</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Metric</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Healing Events</strong></td><td>Total number of recorded healing events across all executions</td></tr>
        <tr><td><strong>Success Rate</strong></td><td>Percentage of successful healing operations</td></tr>
        <tr><td><strong>Failed Heals</strong></td><td>Failed healing attempts — may indicate unstable applications or larger UI changes</td></tr>
        <tr><td><strong>Strategy Rotations</strong></td><td>How often fallback strategies were rotated during healing attempts</td></tr>
        <tr><td><strong>Heals per Minute</strong></td><td>Frequency of healing activity during runtime execution</td></tr>
        <tr><td><strong>Avg Heal Time</strong></td><td>Average duration of healing attempts</td></tr>
        <tr><td><strong>LLM Calls</strong></td><td>Number of AI requests during healing operations</td></tr>
      </tbody>
    </table>
  </div>
`,
  "circuit-breaker": `
  <div class="node-header">
    <div>
      <h1>Circuit Breaker</h1>
      <span class="badge badge-healing">Monitoring</span>
    </div>
  </div>
  <p>The healing engine includes a protective mechanism called the Circuit Breaker. It prevents excessive repeated healing attempts during unstable executions, thereby safeguarding system stability and execution quality.</p>
  <h2>Circuit Breaker states</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>State</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Closed (OK)</strong></td><td>Healing system is operating normally</td></tr>
        <tr><td><strong>Open</strong></td><td>Healing temporarily disabled after repeated failures</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Proactive health check</h2>
  <p>The platform can proactively analyze selector reliability before test execution begins, allowing teams to detect unstable selectors early.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Health state</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Healthy</strong></td><td>Stable selectors with no healing history</td></tr>
        <tr><td><strong>Degraded</strong></td><td>Potentially unstable selectors with occasional healing</td></tr>
        <tr><td><strong>Critical</strong></td><td>High-risk selectors with frequent healing dependency</td></tr>
      </tbody>
    </table>
  </div>
`,
  "field-reliability": `
  <div class="node-header">
    <div>
      <h1>Field Reliability</h1>
      <span class="badge badge-healing">Monitoring</span>
    </div>
  </div>
  <p>The Field Reliability table provides per-selector health analytics, enabling teams to identify unstable or frequently healed selectors and prioritize maintenance work.</p>
  <h2>Reliability metrics</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Column</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>Field</td><td>Selector name</td></tr>
        <tr><td>Page Object</td><td>Associated page</td></tr>
        <tr><td>Reliability</td><td>Stability percentage over recent executions</td></tr>
        <tr><td>Usage</td><td>Total execution count</td></tr>
        <tr><td>Heals</td><td>Number of triggered healing events</td></tr>
        <tr><td>Heal Ratio</td><td>Healing frequency as a percentage of usage</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Reliability interpretation</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Reliability</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td><strong>100%</strong></td><td>Fully stable selector — no healing required</td></tr>
        <tr><td><strong>90–99%</strong></td><td>Very stable — rare healing events</td></tr>
        <tr><td><strong>70–89%</strong></td><td>Moderate instability — review recommended</td></tr>
        <tr><td><strong>Below 70%</strong></td><td>High healing dependency — manual maintenance required</td></tr>
      </tbody>
    </table>
  </div>
`,
  "healing-config": `
  <div class="node-header">
    <div>
      <h1>Healing Configuration</h1>
      <span class="badge badge-healing">Configuration</span>
    </div>
  </div>
  <p>The Healing Config area controls global and project-specific healing behavior. The configuration can be managed centrally or overridden on a per-project basis.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_4.png" alt="Healing Configuration overview">
    <div class="screenshot-caption">Healing configuration — global default settings and project-specific override settings.</div>
  </div>
  <h2>Configuration scopes</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Scope</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Global</strong></td><td>Default settings applied platform-wide — all projects inherit these unless overridden</td></tr>
        <tr><td><strong>Project</strong></td><td>Project-specific overrides — inherited values are visually indicated in the UI</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Self-Healing activation</h2>
  <p>The master toggle controls whether healing is active. When disabled, selectors fail immediately and no fallback strategies are attempted.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_5.png" alt="Self-Healing Enabled toggle">
    <div class="screenshot-caption">Self-Healing Enabled — master toggle for the healing engine.</div>
  </div>
  <h2>Dependent settings locked</h2>
  <p>If <strong>Self-Healing Enabled</strong> is switched off in the active scope (Global, Project or Field) or the Healing Mode is set to <strong>Disabled</strong>, all dependent settings are locked and greyed out: the two thresholds, Max Auto-Heals Per Run, Max Healing Attempts, Heal Count for Blacklist, Blacklist Window, Critical Fields and Locator Priority, including their reset buttons. A note gives the reason: "Enable Self-Healing or select a Healing Mode to edit these settings."</p>
  <ul class="feature-list">
    <li>The switch, the Healing Mode selection and <strong>Save Configuration</strong> stay operable.</li>
    <li>The locked values are kept unchanged, are sent along when saving and can be edited again immediately after reactivation.</li>
  </ul>
`,
  "healing-modes": `
  <div class="node-header">
    <div>
      <h1>Healing Modes</h1>
      <span class="badge badge-healing">Configuration</span>
    </div>
  </div>
  <div style="display:flex;gap:24px;align-items:flex-start;margin-bottom:20px">
    <div class="screenshot-wrap" style="flex:0 0 260px;margin:0">
      <img src="./autemos_images_autoheal/image_6.png" alt="Healing Modes">
      <div class="screenshot-caption">Healing Modes dropdown</div>
    </div>
    <div class="param-table-wrap" style="flex:1;min-width:0;margin:0">
      <table class="param-table">
        <thead><tr><th>Mode</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>Automatic</strong></td><td>System applies successful healing results automatically at runtime — minimizes execution disruption</td></tr>
          <tr><td><strong>Propose Only</strong></td><td>System generates proposals but requires manual review before application — recommended for regulated or production-critical environments</td></tr>
          <tr><td><strong>Disabled</strong></td><td>Healing functionality fully disabled — nothing is healed during a run, even if <strong>Self-Healing Enabled</strong> stays switched on</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="tip">
    <span class="tip-icon">💡</span>
    Use <strong>Propose Only</strong> mode for critical production workflows where automatic selector changes require governance review before being applied.
  </div>
  <p>If the effective mode is <strong>Disabled</strong>, no heal starts during a run: the step with the broken selector fails on the original selector, and the run log states the reason ("SKIPPED: healing mode is set to Disabled for this project"). This also applies to the proactive check. If Self-Healing itself is switched off, the reason is "self-healing is switched off for this project". Without a stored setting, <strong>Automatic</strong> applies.</p>
`,
  "thresholds": `
  <div class="node-header">
    <div>
      <h1>Thresholds &amp; Limits</h1>
      <span class="badge badge-healing">Configuration</span>
    </div>
  </div>
  <p>Thresholds define the minimum confidence scores and execution limits that govern how aggressively the healing engine operates.</p>

  <h2>Auto-Heal Threshold</h2>
  <p>Defines the minimum confidence score required for automatic healing. Range: 0.0–1.0. Higher values are safer and more conservative; lower values enable more aggressive automatic healing.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_7.png" alt="Auto-Heal Threshold">
    <div class="screenshot-caption">Auto-Heal Threshold — minimum confidence score for automatic selector repair.</div>
  </div>

  <h2>Proposal Threshold</h2>
  <p>Defines the minimum confidence score for generating healing proposals. This threshold is typically lower than the Auto-Heal threshold so that lower-confidence proposals are also surfaced for manual review.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_8.png" alt="Proposal Threshold">
    <div class="screenshot-caption">Proposal Threshold — minimum confidence for generating a healing proposal.</div>
  </div>

  <h2>Max Auto-Heals Per Run</h2>
  <p>Limits the maximum number of healing operations allowed during a single execution. Prevents unstable, endless healing loops and protects overall execution quality.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_9.png" alt="Max Auto-Heals Per Run">
    <div class="screenshot-caption">Max Auto-Heals Per Run — upper limit on healing operations per workflow execution.</div>
  </div>

  <h2>Max Healing Attempts</h2>
  <p>Defines how many retry attempts are allowed per selector before the healing engine gives up.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_10.png" alt="Max Healing Attempts">
    <div class="screenshot-caption">Max Healing Attempts — retry limit per selector before giving up.</div>
  </div>

  <h2>Heal Count for Blacklist</h2>
  <p>Defines how many repeated failures are allowed before a locator strategy is temporarily blacklisted.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_11.png" alt="Heal Count for Blacklist">
    <div class="screenshot-caption">Heal Count for Blacklist — failure threshold before a strategy is temporarily excluded.</div>
  </div>

  <h2>Blacklist Window</h2>
  <p>Defines the sliding time window for blacklist calculations. Example: 7 days — only failures within the last 7 days count toward the blacklist threshold.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_12.png" alt="Blacklist Window">
    <div class="screenshot-caption">Blacklist Window — sliding time window for blacklist failure counting.</div>
  </div>

  <h2>Critical Fields</h2>
  <p>Critical Fields are selectors that should never be healed automatically. These fields always require manual review before changes are applied. Typical examples include login buttons, payment actions, destructive operations, and production-critical workflows.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_13.png" alt="Critical Fields">
    <div class="screenshot-caption">Critical Fields — selectors excluded from automatic healing, always requiring manual review.</div>
  </div>
`,
  "locator-priority": `
  <div class="node-header">
    <div>
      <h1>Locator Priority</h1>
      <span class="badge badge-healing">Configuration</span>
    </div>
  </div>
  <p>The healing engine can prioritize locator strategies during recovery attempts. Higher-priority locators are tried first, enabling teams to enforce a preference for stable semantic selectors over fragile technical ones.</p>
  <div class="screenshot-wrap">
    <img src="./autemos_images_autoheal/image_14.png" alt="Locator Priority">
    <div class="screenshot-caption">Locator Priority — drag-and-drop ordering of fallback locator strategies.</div>
  </div>
  <h2>Default priority order</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Priority</th><th>Strategy</th><th>Rationale</th></tr></thead>
      <tbody>
        <tr><td>#1</td><td><code>data-testid</code></td><td>Most stable — purpose-built for testing</td></tr>
        <tr><td>#2</td><td><code>aria</code></td><td>Semantic and accessibility-based</td></tr>
        <tr><td>#3</td><td><code>css</code></td><td>Flexible and widely supported</td></tr>
        <tr><td>#4</td><td><code>name</code></td><td>Stable identifier for form fields</td></tr>
        <tr><td>#5</td><td><code>id</code></td><td>Unique, but may be dynamic</td></tr>
        <tr><td>#6</td><td><code>xpath</code></td><td>Last resort — vulnerable to DOM changes</td></tr>
      </tbody>
    </table>
  </div>
  <div class="tip">
    <span class="tip-icon">💡</span>
    Always prioritize <strong>data-testid</strong> and <strong>aria</strong> attributes. These are stable semantic identifiers that survive UI refactoring, unlike XPath, which breaks on structural DOM changes.
  </div>
`,
  "healing-safeguards": `
  <div class="node-header">
    <div>
      <h1>Safeguards Against Wrong Heals</h1>
      <span class="badge badge-healing">Configuration</span>
    </div>
  </div>
  <p>A heal is meant to repair a test, never to hide a real error. Two safeguards prevent a step from being "healed" onto a foreign element and still reporting green.</p>
  <h2>Identity check of the heal candidate</h2>
  <p>Before a heal candidate is used, Autemos checks whether it is the same element as the one originally meant. If the check rejects the candidate as a <strong>different element</strong>, it is executed nowhere: not during the run, not in the proactive check and not in the AI Recorder.</p>
  <ul class="feature-list">
    <li>After a rejection the search continues: stored alternative, re-finder, finally the AI. An identity-verified fallback wins against any rejected proposal.</li>
    <li>If no identity-verified candidate remains, the step fails (red). The error message names the candidate, the stage and the reason for the rejection.</li>
    <li>A rejected stored alternative is not deleted, but neither used nor counted as a used alternative.</li>
    <li>The rule applies equally to actions and checks (click, input, assert, read/extract text, healing in custom code). Candidates the check confirms or cannot judge behave as before.</li>
  </ul>
  <h2>Relevance check for inline selectors</h2>
  <p>A web step with an inline selector (without a page object field and without a stored entry) is only healed if the proposed candidate carries a feature of the failed selector, for example an ID, class, test hook, name, aria-label or label. If there is no such element on the page, the step fails again with "Selektor findet kein Element: &lt;selector&gt;", even if the AI attributes a high confidence to the proposal.</p>
  <ul class="feature-list">
    <li>The rule applies before both thresholds: the candidate is neither healed automatically nor used as a proposal ("Proposed").</li>
    <li>The run log states the reason ("no candidate is related to the failed selector …"). No heal event and no entry in the store is created.</li>
    <li>Unchanged are heals of page object fields and stored entries, mobile steps, and runs in which no DOM was captured.</li>
  </ul>
  <div class="tip">
    <span class="tip-icon">💡</span>
    A test that is supposed to detect a missing element therefore fails correctly instead of passing thanks to a heal onto another element.
  </div>
`,
});
