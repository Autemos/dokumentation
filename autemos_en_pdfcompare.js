window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "pdfcompare-overview": `
<span class="section-label">Getting Started</span>
<div class="section-intro"><h1>PDF Compare</h1></div>
<p>PDF Compare enables automated validation of generated or downloaded PDF documents within an Autemos Test Workflow.</p>
<p>A PDF can be stored centrally as a <strong>baseline document</strong> and later selected in a workflow. During execution, Autemos captures the actual PDF and compares it with the selected baseline.</p>
<h2>What Is Compared</h2>
<div class="concept-grid">
  <div class="concept-card"><h3>Text</h3><p>Detects changed, missing or additional textual content.</p></div>
  <div class="concept-card"><h3>Values</h3><p>Detects differences in numeric values contained in the PDF.</p></div>
  <div class="concept-card"><h3>Layout</h3><p>Detects visual and positional differences using pixel-based comparison.</p></div>
</div>
<p>Dynamic content can be handled through <a href="#pdfcompare-zones">Exclusion Zones</a> for visual areas and <a href="#pdfcompare-patterns">Ignore Patterns</a> for variable text. This allows stable validation of documents that contain changing dates, identifiers, QR codes or generated reference numbers.</p>
<p>PDF Compare can be used for invoices, account statements, insurance documents, contracts, confirmations, reports and other generated business documents.</p>
`,
  "pdfcompare-baselines": `
<span class="section-label">Baselines</span>
<h1>PDF Baselines</h1>
<p>PDF Baselines are centrally managed reference documents used by the PDF Compare workflow node.</p>
<p>Navigate to <strong>PDF Baselines</strong> within the project to view the available reference documents. The overview shows information such as:</p>
<ul class="feature-list">
<li>Baseline name</li>
<li>Current version</li>
<li>Number of pages</li>
<li>File size</li>
<li>Recording or upload date</li>
</ul>
<p>A baseline can be reused by multiple Test Workflows. This avoids storing separate reference files in every workflow and provides a controlled source for document comparison.</p>
<div class="screenshot-wrap">
<img alt="Overview of PDF baselines in the project" src="./autemos_pdfcompare_screenshots/image_1.png"/>
<div class="screenshot-caption">Centrally manage PDF baseline documents.</div>
</div>
`,
  "pdfcompare-upload": `
<span class="section-label">Baselines</span>
<h1>Upload a Baseline</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div style="flex:1;min-width:0">
    <p>Select <strong>Upload Baseline</strong> to create a new reference document.</p>
    <p>Provide a unique name within the project and upload the required PDF file. The first upload creates version 1 of the baseline family.</p>
    <div class="param-table-wrap">
    <table class="param-table">
    <thead><tr><th>Setting</th><th>Description</th></tr></thead>
    <tbody>
    <tr><td><strong>Name</strong></td><td>Unique name used to identify and select the baseline</td></tr>
    <tr><td><strong>PDF File</strong></td><td>Reference PDF used for future comparisons</td></tr>
    </tbody>
    </table>
    </div>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 300px;margin:0">
    <img alt="Dialog for uploading a new baseline" src="./autemos_pdfcompare_screenshots/image_2.png"/>
    <div class="screenshot-caption">Upload a new PDF baseline.</div>
  </div>
</div>
`,
  "pdfcompare-versions": `
<span class="section-label">Baselines</span>
<h1>Baseline Versions</h1>
<p>Baselines are versioned. A Test Workflow can use the current version or a selected baseline version, depending on the required test setup.</p>
<p>When <strong>Current</strong> is selected, the workflow automatically follows later re-recordings of the same baseline. This is useful when the approved reference document changes while the workflow configuration should remain unchanged.</p>
<div class="tip"><span class="tip-icon">💡</span>Later re-recordings go through <strong>Record New Version</strong> on the same baseline rather than through another upload.</div>
`,
  "pdfcompare-capture": `
<span class="section-label">Test Workflows</span>
<h1>Capture a PDF During Workflow Execution</h1>
<p>Use the <strong>Capture Download</strong> node to collect a PDF downloaded by the browser during the Test Run.</p>
<p>The node identifies the downloaded file by its file-name pattern and stores it under a workflow variable. The variable can then be passed to the PDF Compare node as the actual document.</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Setting</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>File Name</strong></td><td>File name or matching pattern for the downloaded PDF</td></tr>
<tr><td><strong>Store As</strong></td><td>Workflow variable used by subsequent nodes</td></tr>
<tr><td><strong>Timeout</strong></td><td>Maximum time to wait for the download</td></tr>
</tbody>
</table>
</div>
<div class="screenshot-wrap">
<img alt="Capture Download node in the workflow editor" src="./autemos_pdfcompare_screenshots/image_3.png"/>
<div class="screenshot-caption">Capture a downloaded PDF and store it as a workflow variable.</div>
</div>
`,
  "pdfcompare-node": `
<span class="section-label">Test Workflows</span>
<h1>Add PDF Compare to a Test Workflow</h1>
<p>Add the PDF Compare node after the step that captures or otherwise provides the actual PDF document.</p>
<h2>Typical Sequence</h2>
<div class="steps">
<div class="step"><div class="step-num">1</div><div class="step-content"><p>Trigger the document generation in the application</p></div></div>
<div class="step"><div class="step-num">2</div><div class="step-content"><p>Capture the downloaded PDF</p></div></div>
<div class="step"><div class="step-num">3</div><div class="step-content"><p>Store the file in a workflow variable</p></div></div>
<div class="step"><div class="step-num">4</div><div class="step-content"><p>Compare the captured PDF against the selected baseline</p></div></div>
<div class="step"><div class="step-num">5</div><div class="step-content"><p>Continue or stop the workflow according to the configured failure behavior</p></div></div>
</div>
<div class="screenshot-wrap">
<img alt="PDF Compare node within an end-to-end workflow" src="./autemos_pdfcompare_screenshots/image_4.png"/>
<div class="screenshot-caption">PDF Compare within an end-to-end Test Workflow.</div>
</div>
`,
  "pdfcompare-config": `
<span class="section-label">Test Workflows</span>
<h1>PDF Compare Configuration</h1>
<div style="display:flex;gap:24px;align-items:flex-start;margin:16px 0">
  <div style="flex:1;min-width:0">
    <p>Select the baseline and map the actual PDF variable created by a previous workflow step. The available checks can be enabled or disabled independently to match the validation requirements of the document.</p>
    <div class="param-table-wrap">
    <table class="param-table">
    <thead><tr><th>Setting</th><th>Description</th></tr></thead>
    <tbody>
    <tr><td><strong>Baseline</strong></td><td>Reference document used for the comparison</td></tr>
    <tr><td><strong>Baseline version</strong></td><td>Current or a selected version of the baseline</td></tr>
    <tr><td><strong>Actual document variable</strong></td><td>Workflow variable containing the captured PDF</td></tr>
    <tr><td><strong>Page count</strong></td><td>Checks whether both documents contain the same number of pages</td></tr>
    <tr><td><strong>Text per page</strong></td><td>Compares extracted text on each corresponding page</td></tr>
    <tr><td><strong>Full document text</strong></td><td>Compares the complete extracted text of both documents</td></tr>
    <tr><td><strong>Visual (pixel) compare</strong></td><td>Compares the rendered pages for visual and layout differences</td></tr>
    <tr><td><strong>Two-stage gating</strong></td><td>Runs the pixel comparison only when the text comparison already matched</td></tr>
    <tr><td><strong>Render DPI</strong></td><td>Resolution used when rendering pages for visual comparison</td></tr>
    <tr><td><strong>Visual tolerance</strong></td><td>Share of differing pixels that is still treated as equal</td></tr>
    <tr><td><strong>On failure</strong></td><td>Defines how the workflow behaves when the comparison fails</td></tr>
    </tbody>
    </table>
    </div>
  </div>
  <div class="screenshot-wrap" style="flex:0 0 260px;margin:0">
    <img alt="Configuration panel of the PDF Compare node" src="./autemos_pdfcompare_screenshots/image_5.png"/>
    <div class="screenshot-caption">Configure comparison checks, visual tolerance and failure behavior.</div>
  </div>
</div>
`,
  "pdfcompare-types": `
<span class="section-label">Comparison Types</span>
<h1>Comparison Types</h1>
<p>The individual checks address different aspects of a document and can be enabled separately.</p>
<h2 id="pdfcompare-pagecount">Page Count</h2>
<p>Validates whether the baseline and actual document contain the same number of pages. This provides a fast structural check before individual content is evaluated.</p>
<h2 id="pdfcompare-text">Text and Value Comparison</h2>
<p>Autemos extracts the PDF text and detects changed, missing or additional content. Numeric values such as prices, totals, dates, quantities or account values are included in this comparison.</p>
<p>Text can be checked per page and across the full document. These checks can be configured independently.</p>
<h2 id="pdfcompare-visual">Visual and Layout Comparison</h2>
<p>For visual validation, Autemos renders the PDF pages and compares them at pixel level. This identifies layout changes such as moved elements, altered spacing, missing components or formatting differences.</p>
<p><strong>Render DPI</strong> controls the rendering resolution. <strong>Visual tolerance</strong> defines how many differing pixels may still be accepted as equal.</p>
`,
  "pdfcompare-gating": `
<span class="section-label">Comparison Types</span>
<h1>Two-Stage Gating</h1>
<p>When two-stage gating is enabled, Autemos performs the visual comparison only after the configured text comparison has matched.</p>
<p>This can reduce unnecessary pixel comparisons when a document already fails at content level.</p>
`,
  "pdfcompare-zones": `
<span class="section-label">Dynamic Content</span>
<h1>Exclusion Zones for Visual Comparison</h1>
<p>Generated PDFs often contain values that legitimately change between executions. PDF Compare provides separate mechanisms for dynamic visual areas and variable text.</p>
<p>Exclusion Zones mask selected rectangular areas during the pixel comparison. They are suitable for changing image-based or positioned content such as:</p>
<ul class="feature-list">
<li>Dates and timestamps</li>
<li>QR codes or barcodes</li>
<li>Generated document or invoice numbers</li>
<li>Dynamic headers, stamps or signatures</li>
</ul>
<div class="warn-box"><strong>Zones affect the visual comparison only.</strong> Text differences inside a masked area still fail and must be handled separately through <a href="#pdfcompare-patterns">Ignore Patterns</a>.</div>
<p>Zones are configured on the relevant PDF page.</p>
<div class="screenshot-wrap">
<img alt="Exclusion Zones editor on an invoice" src="./autemos_pdfcompare_screenshots/image_6.png"/>
<div class="screenshot-caption">Define an Exclusion Zone for a dynamic visual area.</div>
</div>
`,
  "pdfcompare-patterns": `
<span class="section-label">Dynamic Content</span>
<h1>Ignore Patterns for Text Comparison</h1>
<p>Ignore Patterns identify variable text that should not cause the comparison to fail.</p>
<p>Use the <code>@ignore</code> marker within stable surrounding text to identify the dynamic part, for example:</p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Setting</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>Pattern</strong></td><td>Surrounding text with <code>@ignore</code> marking the variable part, e.g. <code>Booking number: @ignore Refund</code></td></tr>
<tr><td><strong>Pages</strong></td><td>Comma-separated page numbers. Empty means the pattern applies to every page</td></tr>
</tbody>
</table>
</div>
<p>Multiple patterns can be added to the same PDF Compare configuration.</p>
<div class="tip"><span class="tip-icon">💡</span>No regular expressions are written. The backend builds the matching expression from the pattern provided.</div>
<div class="screenshot-wrap">
<img alt="Dialog for configuring Ignore Patterns" src="./autemos_pdfcompare_screenshots/image_7.png"/>
<div class="screenshot-caption">Configure Ignore Patterns for variable text.</div>
</div>
`,
  "pdfcompare-report": `
<span class="section-label">Results</span>
<h1>Result in the Test Report</h1>
<p>The PDF Compare result is displayed directly in the Test Run report.</p>
<p>The result summary shows the overall status and the status of the configured checks, for example:</p>
<ul class="feature-list">
<li>Page Count</li>
<li>Text per Page</li>
<li>Full Document Text</li>
<li>Visual Difference</li>
</ul>
<p>The compared document remains available as a Test Run artifact. If a check fails, users can open the detailed difference view for further analysis.</p>
<div class="screenshot-wrap">
<img alt="PDF Compare result in the Test Report" src="./autemos_pdfcompare_screenshots/image_8.png"/>
<div class="screenshot-caption">PDF Compare result within the Test Run report.</div>
</div>
`,
  "pdfcompare-diff": `
<span class="section-label">Results</span>
<h1>Detailed Difference View</h1>
<p>The detailed view displays the reference and actual PDF side by side. Differences are highlighted directly in both documents so changed content and layout areas can be located quickly.</p>
<p>Users can navigate through the detected differences and filter the view by comparison type. This makes it possible to distinguish textual changes from visual layout differences.</p>
<div class="screenshot-wrap">
<img alt="Side-by-side view of reference and actual PDF with highlighted differences" src="./autemos_pdfcompare_screenshots/image_9.png"/>
<div class="screenshot-caption">Side-by-side analysis of detected PDF differences.</div>
</div>
`,
  "pdfcompare-use-cases": `
<span class="section-label">Usage</span>
<h1>Typical Use Cases</h1>
<div class="concept-grid">
  <div class="concept-card"><h3>Invoice Validation</h3><p>Verify customer details, positions, totals and document layout.</p></div>
  <div class="concept-card"><h3>Financial, Insurance and Contract Documents</h3><p>Compare calculated values and generated content while excluding dynamic identifiers.</p></div>
  <div class="concept-card"><h3>Regression Testing</h3><p>Detect unintended document changes after application releases.</p></div>
</div>
`,
  "pdfcompare-best-practices": `
<span class="section-label">Usage</span>
<h1>Best Practices</h1>
<ul class="best-practices">
<li>Use an approved business document with a clear and stable name as the baseline</li>
<li>Use <strong>Current</strong> only when workflows should automatically follow later baseline versions</li>
<li>Enable only the comparison types required for the specific document</li>
<li>Use Exclusion Zones for dynamic visual areas and Ignore Patterns for variable text</li>
<li>Keep visual tolerance low and review the detailed difference view before accepting a changed baseline</li>
</ul>
`,
  "pdfcompare-related": `
<span class="section-label">Usage</span>
<h1>Related Modules</h1>
<p>PDF Compare is part of the larger Autemos ecosystem.</p>
<div class="module-grid">
<div class="module-card">
<strong>PDF Baselines</strong>
<span>Manage versioned reference documents</span>
</div>
<div class="module-card">
<strong>Capture Download</strong>
<span>Collect generated PDFs during execution</span>
</div>
<div class="module-card">
<strong>Test Workflows</strong>
<span>Run the PDF validation as a workflow step</span>
</div>
<div class="module-card">
<strong>Test Runs</strong>
<span>Review results and artifacts of the validation</span>
</div>
</div>
`,
});
