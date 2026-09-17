window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "templates-overview": `
  <span class="section-label">Getting Started</span>
  <h1>Code Template Management</h1>
  <div class="warning">
    <span class="tip-icon">⚠️</span><strong>Restricted access — Test architects / administrators only —</strong> This module is intended for advanced users (test architects, framework engineers, administrators). <strong>Incorrect changes to templates can directly impact the generated automation code across all projects.</strong>
  </div>
  <p>The <strong>Code Template Management</strong> module enables test architects and administrators to define and manage the templates used by Autemos for automatic code generation.</p>
  <div class="screenshot-wrap">
    <img alt="Code Template Management overview" src="./autemos_codetemplatemgmt_screenshots/image_1.png"/>
    <div class="screenshot-caption">Code Template Management — central management of all code generation templates per language and framework.</div>
  </div>
  <h2>Foundation For</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Code Generation Engine</h3><p>Dynamic generation of automation code.</p></div>
    <div class="concept-card"><h3>AI-Driven Generation</h3><p>Basis for AI-generated automation code.</p></div>
    <div class="concept-card"><h3>Framework Export System</h3><p>Framework-specific code export.</p></div>
  </div>
  <p>Instead of generating static, predefined code, Autemos creates automation code <strong>dynamically based on configurable templates</strong>. This allows the generated code to be fully aligned with internal coding standards, framework structures, architecture guidelines, naming conventions, and enterprise best practices.</p>
  <h2>Purpose</h2>
  <ul class="feature-list">
    <li>Standardize generated automation code</li>
    <li>Support multiple programming languages</li>
    <li>Support different automation frameworks</li>
    <li>Customize generated test structures</li>
    <li>Enforce organization-wide coding standards</li>
    <li>Adapt templates to internal frameworks</li>
  </ul>
  <h2>Supported Languages &amp; Frameworks</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Languages</th><th>Frameworks</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>Java</strong> · <strong>TypeScript</strong> · <strong>Python</strong> · <strong>C#</strong></td>
          <td><strong>Selenium</strong> · <strong>Playwright</strong> · <strong>Appium</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
  <h2>Architecture Overview</h2>
  <p>The Code Template Management system is divided into four main areas:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>Template Editor</h3><p>Class structures, imports, constructors.</p></div>
    <div class="concept-card"><h3>Node Templates</h3><p>Workflow action to code translations.</p></div>
    <div class="concept-card"><h3>Methods &amp; Field Types</h3><p>Field annotations and interaction methods.</p></div>
    <div class="concept-card"><h3>Configuration Import/Export</h3><p>Migration and versioning.</p></div>
  </div>
`,
  "templates-selection": `
  <span class="section-label">Configuration</span>
  <h1>Language &amp; Framework Selection</h1>
  <p>Before templates can be edited, users must select a <strong>programming language</strong> and an <strong>automation framework</strong>. This creates framework-specific template configurations.</p>
  <h2>Main Template Types</h2>
  <p>The system supports different template categories:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>pageobject</h3><p>Templates for reusable PageObject classes.</p></div>
    <div class="concept-card"><h3>test</h3><p>Templates for executable test classes.</p></div>
  </div>
  <p>These templates define the <strong>basic structure</strong> of the generated automation code.</p>
  <div class="tip"><span class="tip-icon">💡</span>Each combination of language + framework has its own template configuration — e.g., a Java/Selenium PageObject differs fundamentally from a TypeScript/Playwright PageObject.</div>
`,
  "templates-editor": `
  <span class="section-label">Template Editor</span>
  <h1>Template Editor</h1>
  <p>The <strong>Template Editor</strong> defines the general code structure used during code generation — imports, class structures, constructors, methods, field injections, and variable placeholders.</p>
  <div class="screenshot-wrap">
    <img alt="Template Editor" src="./autemos_codetemplatemgmt_screenshots/image_2.png"/>
    <div class="screenshot-caption">Template Editor — class structure, constructors, and variable placeholders for code generation.</div>
  </div>
  <h2>Main Template</h2>
  <p>The <strong>Main Template</strong> controls the generated class structure:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>PageObject Templates</h3><p>Structure of reusable PageObjects.</p></div>
    <div class="concept-card"><h3>Test Class Templates</h3><p>Structure of executable test classes.</p></div>
  </div>
  <h2>Template Variables</h2>
  <p>Templates support dynamic placeholder variables — these are automatically replaced during code generation:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Variable</th><th>Usage</th></tr></thead>
      <tbody>
        <tr><td><code>&dollar;{className}</code></td><td>Name of the generated class</td></tr>
        <tr><td><code>&dollar;{fields}</code></td><td>Fields block (field annotations)</td></tr>
        <tr><td><code>&dollar;{methods}</code></td><td>Methods block (interaction methods)</td></tr>
        <tr><td><code>&dollar;{packageName}</code></td><td>Package / namespace name</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Constructor Template</h2>
  <p>Defines how <strong>constructors</strong> are generated. Example use cases:</p>
  <ul class="feature-list">
    <li>WebDriver injection</li>
    <li>Dependency injection</li>
    <li>Framework initialization</li>
    <li>PageFactory initialization</li>
  </ul>
  <h2>Description Field &amp; Saving</h2>
  <p>The <strong>Description field</strong> documents the purpose of the template for better maintainability. The <strong>Save Template</strong> action saves the updated template configuration — changes take effect immediately on future generated code.</p>
`,
  "templates-nodes": `
  <span class="section-label">Node Templates</span>
  <h1>Node Templates</h1>
  <p><strong>Node Templates</strong> define how workflow nodes are translated into automation code. Each workflow action can generate different code depending on language, framework, and architecture.</p>
  <div class="screenshot-wrap">
    <img alt="Node Templates" src="./autemos_codetemplatemgmt_screenshots/image_3.png"/>
    <div class="screenshot-caption">Node Templates — definition of code generation per workflow action (Click, Assertion, Navigation, …).</div>
  </div>
  <h2>Supported Node Types</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Assertion</h3><p>Verifications and validations.</p></div>
    <div class="concept-card"><h3>Click</h3><p>Click interactions.</p></div>
    <div class="concept-card"><h3>Navigation</h3><p>URL navigation and routing.</p></div>
    <div class="concept-card"><h3>Validation</h3><p>Data validations.</p></div>
    <div class="concept-card"><h3>API Calls</h3><p>HTTP calls.</p></div>
    <div class="concept-card"><h3>Wait Conditions</h3><p>Synchronization and waits.</p></div>
  </div>
  <h2>Template Variables</h2>
  <p>Node Templates support dynamic placeholders that are automatically filled from workflow data:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Variable</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><code>&dollar;{varName}</code></td><td>Variable name</td></tr>
        <tr><td><code>&dollar;{methodCall}</code></td><td>Method call</td></tr>
        <tr><td><code>&dollar;{value}</code></td><td>Input value</td></tr>
        <tr><td><code>&dollar;{url}</code></td><td>Target URL</td></tr>
        <tr><td><code>&dollar;{duration}</code></td><td>Wait time / timeout</td></tr>
        <tr><td><code>&dollar;{expected}</code></td><td>Expected value</td></tr>
        <tr><td><code>&dollar;{actual}</code></td><td>Actual value</td></tr>
      </tbody>
    </table>
  </div>
  <h2>Example</h2>
  <p>An <strong>Assertion node</strong> may be defined as a template:</p>
  <pre style="background:#0F121A;border:1px solid #2A2E3A;border-radius:8px;padding:12px;color:#C4C9D6;font-size:13px;overflow-x:auto"><code>assertEquals(&dollar;{expected}, &dollar;{actual});</code></pre>
  <p>During generation, this becomes concrete code:</p>
  <pre style="background:#0F121A;border:1px solid #2A2E3A;border-radius:8px;padding:12px;color:#C4C9D6;font-size:13px;overflow-x:auto"><code>assertEquals("Success", resultText);</code></pre>
`,
  "templates-methods": `
  <span class="section-label">Methods &amp; Fields</span>
  <h1>Methods &amp; Field Types</h1>
  <p>The <strong>Methods &amp; Field Types</strong> area defines field annotations, generated field structures, and reusable interaction methods. This allows generated PageObjects to follow framework-specific conventions.</p>
  <div class="screenshot-wrap">
    <img alt="Methods and Field Types" src="./autemos_codetemplatemgmt_screenshots/image_4.png"/>
    <div class="screenshot-caption">Methods &amp; Field Types — templates for field annotations and reusable methods.</div>
  </div>
  <h2>Field Type Selection</h2>
  <p>Users can define templates for the following field types:</p>
  <div class="concept-grid">
    <div class="concept-card"><h3>INPUT</h3><p>Input fields.</p></div>
    <div class="concept-card"><h3>BUTTON</h3><p>Buttons.</p></div>
    <div class="concept-card"><h3>CHECKBOX</h3><p>Checkboxes.</p></div>
    <div class="concept-card"><h3>DROPDOWN</h3><p>Selection lists.</p></div>
    <div class="concept-card"><h3>TABLE</h3><p>Table structures.</p></div>
    <div class="concept-card"><h3>LINK</h3><p>Hyperlinks.</p></div>
  </div>
  <h2>Field Annotation Templates</h2>
  <p>This area defines how UI elements are represented in the generated code:</p>
  <ul class="feature-list">
    <li>Selenium annotations</li>
    <li>Playwright locators</li>
    <li>Appium mobile selectors</li>
  </ul>
  <h2>Reusable Methods</h2>
  <p>The system supports reusable interaction methods:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Method</th><th>Usage</th></tr></thead>
      <tbody>
        <tr><td><code>click</code></td><td>Click on an element</td></tr>
        <tr><td><code>type</code></td><td>Text input</td></tr>
        <tr><td><code>clear</code></td><td>Clear field</td></tr>
        <tr><td><code>getValue</code></td><td>Read value</td></tr>
      </tbody>
    </table>
  </div>
  <p>Each method can contain <strong>custom implementation logic</strong>, <strong>framework-specific behavior</strong>, and <strong>enterprise utilities</strong>.</p>
  <h2>Missing Template Indicators</h2>
  <p>The system marks incomplete template definitions with the indicator <strong>"Missing Template"</strong>. This allows architects to quickly identify incomplete framework configurations.</p>
  <h2>Edit &amp; Delete Actions</h2>
  <p>Each method template supports <strong>Edit</strong> and <strong>Delete</strong> — enabling full management of reusable automation methods.</p>
`,
  "templates-config": `
  <span class="section-label">Configuration</span>
  <h1>Configuration Import / Export</h1>
  <p>The <strong>Configuration area</strong> allows organizations to export, import, and migrate template configurations between environments.</p>
  <div class="screenshot-wrap">
    <img alt="Configuration Import Export" src="./autemos_codetemplatemgmt_screenshots/image_5.png"/>
    <div class="screenshot-caption">Configuration Import / Export — template configurations for backup, migration, and team synchronization.</div>
  </div>
  <h2>Export Configuration</h2>
  <p>Exports the current template configuration for:</p>
  <ul class="feature-list">
    <li>Backups</li>
    <li>Migrations</li>
    <li>Versioning</li>
    <li>Team exchange</li>
  </ul>
  <h2>Import Configuration</h2>
  <p>Imports previously exported template configurations — useful for:</p>
  <ul class="feature-list">
    <li>Onboarding</li>
    <li>Framework rollouts</li>
    <li>Synchronization across multiple environments</li>
  </ul>
`,
  "templates-use-cases": `
  <span class="section-label">Usage</span>
  <h1>Use Cases &amp; Best Practices</h1>
  <h2>Typical Use Cases</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Selenium Enterprise Frameworks</h3><p>Generation of organization-wide Selenium PageObjects and test structures.</p></div>
    <div class="concept-card"><h3>Playwright Standardization</h3><p>Ensuring consistent Playwright architectures across teams.</p></div>
    <div class="concept-card"><h3>Appium Mobile Automation</h3><p>Generation of reusable mobile automation structures.</p></div>
    <div class="concept-card"><h3>AI-Driven Code Generation</h3><p>Provides clean templates for AI-generated automation code.</p></div>
  </div>
  <h2>Best Practices</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Recommendation</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Use Versioned Templates</strong></td><td>Templates should be versioned and historized.</td></tr>
        <tr><td><strong>Restrict Access</strong></td><td>Only experienced framework architects should be allowed to edit templates.</td></tr>
        <tr><td><strong>Test Templates Carefully</strong></td><td>Incorrect templates can affect all generated automation artifacts.</td></tr>
        <tr><td><strong>Maintain Consistent Standards</strong></td><td>Use consistent naming and structural conventions.</td></tr>
      </tbody>
    </table>
  </div>
`,
});
