window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "table-handling-overview": `
<div class="section-intro">
<h1>Table Handling</h1>
<span class="badge badge-table">Table Handling</span>
</div>
<p>The Table Handling Nodes provide a complete set of business-oriented operations for interacting with enterprise tables in your Test Workflows. Instead of relying on row positions or technical selectors, they work with business columns, conditions, and configured table definitions.</p>
`,
  "cell-value": `<div class="node-left"><div class="node-header">
<div>
<h1>Cell Value</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Cell Value Node reads, validates, or stores the value of a specific column from a table row. Used to dynamically access business data from tables during workflow execution.</p><h2>When to Use</h2><ul class="feature-list">
<li>Read values from a table row</li>
<li>Verify table content</li>
<li>Extract business data for later workflow steps</li>
<li>Work with rows identified by Find Row</li>
<li>Validate status, amounts, IDs, or other table-based information</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node enables workflows to interact with table data based on <strong>business meaning</strong> rather than fixed row positions.</div></div><div class="screenshot-wrap"><img alt="Cell Value configuration" src="./autemos_images/image72.png"/><div class="screenshot-caption">Cell Value configuration — define table, column, action, and row conditions.</div></div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td>Defines what should happen with the cell value</td><td>Yes</td><td><code>Read value</code></td></tr>
<tr><td><strong>Match</strong></td><td>Defines how multiple conditions are evaluated</td><td>No</td><td><code>All conditions</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify the target row</td><td>No</td><td><code>Order Number equals \${orderNumber}</code></td></tr>
<tr><td><strong>Column</strong></td><td>Name of the business column being accessed</td><td>Yes</td><td><code>Status</code></td></tr>
<tr><td><strong>Save As</strong></td><td>Variable name for storing the cell value</td><td>No</td><td><code>orderStatus</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Where is optional if the current row context is already present (e.g. after Find Row). Save As is required when reading and storing values.</p>
<p><strong>Available Actions</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>Read value</code></td><td>Reads the cell value and stores it as a variable</td></tr>
<tr><td><code>Verify value</code></td><td>Validates the cell value against an expected condition</td></tr>
<tr><td><code>Read and verify</code></td><td>Reads and validates the value in a single step</td></tr>
</tbody>
</table>
</div>
<p><strong>Additional Options</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>Search Scope</code></td><td>Defines where the table search should start (e.g. Start from first page)</td></tr>
<tr><td><code>Max Pages</code></td><td>Maximum number of pages to search (default: 10)</td></tr>
<tr><td><code>Timeout (ms)</code></td><td>Maximum wait time for the table search to complete (default: 15000)</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Locates the target row via the current table row context or configured conditions</li>
<li>Evaluates conditions against table rows</li>
<li>Navigates across table pages if needed</li>
<li>Accesses the specified business column and performs the configured action (read, verify, or both)</li>
</ul>
<h2>Output</h2>
<p>The cell value is stored in the variable defined by <strong>Save As</strong>.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Read the status of a specific order</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td><code>Read value</code></td></tr>
<tr><td><strong>Where</strong></td><td><code>Order Number equals ORD-100245</code></td></tr>
<tr><td><strong>Column</strong></td><td><code>Status</code></td></tr>
<tr><td><strong>Save As</strong></td><td><code>orderStatus</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use Find Row before Cell Value when working with dynamic tables</li>
<li>Search by stable business values, not by row position</li>
<li>Use meaningful variable names such as orderStatus or customerName</li>
<li>Limit Max Pages to avoid lengthy searches</li>
<li>Validate important values with Assert or If Nodes</li>
</ul>
`,
  "check-table-state": `<div class="node-left"><div class="node-header">
<div>
<h1>Check Table State</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Check Table State Node verifies the current state of a table. Used to validate whether a table is visible, hidden, empty, populated, or ready for page-dependent workflows.</p><h2>When to Use</h2><ul class="feature-list">
<li>Check whether a table is visible before interacting with it</li>
<li>Verify whether a table contains rows</li>
<li>Handle empty-state scenarios in a controlled way</li>
<li>Validate pagination behavior (has next page, no next page)</li>
<li>Ensure that table-dependent workflows can continue safely</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Use this node before Find Row, Cell Value, pagination steps, row selection, or dynamic table interactions.</div></div><div class="screenshot-wrap">
<img alt="Check Table State configuration" src="./autemos_images/image45.png"/>
<div class="screenshot-caption">Check Table State configuration — select the table and the expected state to verify.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>State</strong></td><td>Expected table state to verify</td><td>Yes</td><td><code>notEmpty</code></td></tr>
</tbody>
</table>
</div>
<p><strong>Available States</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>visible</code></td><td>Table is visible on screen</td></tr>
<tr><td><code>hidden</code></td><td>Table is not visible</td></tr>
<tr><td><code>empty</code></td><td>Table contains no rows</td></tr>
<tr><td><code>notEmpty</code></td><td>Table contains at least one row</td></tr>
<tr><td><code>hasNextPage</code></td><td>Table has a next page</td></tr>
<tr><td><code>noNextPage</code></td><td>Table has no next page</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Waits for the configured table state</li>
<li>Evaluates the selected check against the table</li>
<li>Stops execution if the expected state is not reached within the timeout</li>
<li>Does not change table content or row selection</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Check that the table contains data before searching</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>State</strong></td><td><code>notEmpty</code></td></tr>
</tbody>
</table>
</div>
<p>Place this node before Find Row or Click Row to avoid errors on empty tables.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use this node before pagination or row interaction steps</li>
<li>Validate table visibility before Find Row or Cell Value</li>
<li>Handle empty-state scenarios explicitly</li>
<li>Use Has next page before pagination loops and No next page to detect the end</li>
</ul>
`,
  "click-row": `<div class="node-left"><div class="node-header">
<div>
<h1>Click Row</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Click Row Node locates and clicks a matching business row within a configured table. Used to trigger row-based actions such as opening detail views, selecting records, or performing standard table interactions.</p><h2>When to Use</h2><ul class="feature-list">
<li>Open details for a specific business record</li>
<li>Select a row in a table</li>
<li>Trigger row-level actions</li>
<li>Navigate from a table to a detail page</li>
<li>Interact with dynamic business tables without relying on row indexes</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node clicks the <strong>business row</strong> itself — not a specific cell element.</div></div><div class="screenshot-wrap">
<img alt="Click Row configuration" src="./autemos_images/image46.png"/>
<div class="screenshot-caption">Click Row configuration — define conditions to identify the target business row.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Match</strong></td><td>Defines how multiple conditions are evaluated</td><td>No</td><td><code>All conditions</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify the target row</td><td>Yes</td><td><code>Order Number equals \${orderNumber}</code></td></tr>
<tr><td><strong>Search Scope</strong></td><td>Defines where the table search should start</td><td>No</td><td><code>Start from first page</code></td></tr>
<tr><td><strong>Max Pages</strong></td><td>Maximum number of pages to search</td><td>No</td><td><code>10</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Searches the configured table for a matching business row</li>
<li>Applies the configured conditions</li>
<li>Navigates through pagination if needed</li>
<li>Determines the technical click target automatically from the table definition</li>
<li>Performs a click action on the matching row</li>
</ul>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Open the details of a specific order</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Where</strong></td><td><code>Order Number equals ORD-100245</code></td></tr>
<tr><td><strong>Search Scope</strong></td><td><code>Start from first page</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Search by stable business identifiers instead of row position</li>
<li>Use All conditions when identifying unique records</li>
<li>Prefer Start from first page for deterministic behavior</li>
<li>Combine with Check Table State before complex table interactions</li>
</ul>
`,
  "filter-table": `<div class="node-left"><div class="node-header">
<div>
<h1>Filter Table</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Filter Table Node applies filters in a configured table, searches it, or clears filters. Used to dynamically narrow down visible business records during workflow execution.</p><h2>When to Use</h2><ul class="feature-list">
<li>Filter a table by business values</li>
<li>Search table contents</li>
<li>Reduce visible rows before interaction</li>
<li>Clear active table filters</li>
<li>Prepare tables for Find Row or Click Row operations</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node enables workflows to work efficiently with <strong>large and dynamic</strong> business tables.</div></div><div class="screenshot-wrap">
<img alt="Filter Table configuration" src="./autemos_images/image48.png"/>
<div class="screenshot-caption">Filter Table configuration — select filter mode, business column, and filter value.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Filter Mode</strong></td><td>Defines the type of filter operation</td><td>Yes</td><td><code>Column Filter</code></td></tr>
<tr><td><strong>Column</strong></td><td>Business column to filter (Column Filter mode)</td><td>No</td><td><code>Status</code></td></tr>
<tr><td><strong>Operator</strong></td><td>Filter comparison operator</td><td>No</td><td><code>contains</code></td></tr>
<tr><td><strong>Value</strong></td><td>Filter value to apply</td><td>No</td><td><code>Active</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Column, Operator, and Value are required for Column Filter mode.</p>
<h2>Filter Modes</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Column Filter</h3><p>Applies a filter to a specific business column with a value and operator (equals, contains, etc.).</p></div>
<div class="concept-card"><h3>Global Search</h3><p>Performs a global table search across all columns.</p></div>
<div class="concept-card"><h3>Clear Filters</h3><p>Removes all active table filters and restores the full dataset.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Filter the orders table by status</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Filter Mode</strong></td><td><code>Column Filter</code></td></tr>
<tr><td><strong>Column</strong></td><td><code>Status</code></td></tr>
<tr><td><strong>Operator</strong></td><td><code>equals</code></td></tr>
<tr><td><strong>Value</strong></td><td><code>Active</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Filter tables before searching or clicking rows</li>
<li>Prefer <code>contains</code> for flexible searches</li>
<li>Use <code>equals</code> for deterministic validations</li>
<li>Clear filters before starting unrelated table operations</li>
</ul>
`,
  "find-row": `<div class="node-left"><div class="node-header">
<div>
<h1>Find Row</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Find Row Node searches a configured table and stores a matching row as a variable. Used to find a specific table row based on one or more business conditions.</p><h2>When to Use</h2><ul class="feature-list">
<li>A specific row in a table needs to be located</li>
<li>A later step should interact with cells in that row</li>
<li>Validate table content based on business data</li>
<li>The row position may change between executions</li>
<li>Fixed row indexes should be avoided</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Use Find Row when the test should identify data by <strong>meaning</strong> rather than position.</div></div><div class="screenshot-wrap">
<img alt="Find Row configuration" src="./autemos_images/image49.png"/>
<div class="screenshot-caption">Find Row configuration — define conditions to locate the row and the Save Row As variable name.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Match</strong></td><td>Defines how multiple conditions are evaluated</td><td>No</td><td><code>All conditions</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify the target row</td><td>Yes</td><td><code>Order Number equals \${orderNumber}</code></td></tr>
<tr><td><strong>Save Row As</strong></td><td>Variable name for storing the found row</td><td>Yes</td><td><code>foundRow</code></td></tr>
<tr><td><strong>Search Scope</strong></td><td>Defines where the table search should start</td><td>No</td><td><code>Start from first page</code></td></tr>
<tr><td><strong>Max Pages</strong></td><td>Maximum number of pages to search</td><td>No</td><td><code>10</code></td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Uses the selected table definition</li>
<li>Evaluates the configured conditions against table rows</li>
<li>Selects the matching row based on the Find option (first, last, first visible)</li>
<li>Stores the row reference in the variable defined by <strong>Save Row As</strong></li>
<li>Makes the row available for subsequent table-related nodes</li>
</ul>
<h2>Output</h2>
<p>The matching row is stored in the variable defined by <strong>Save Row As</strong> and can be used in subsequent Cell Value, Click Row, or Run Cell Action nodes.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Find an order row by order number</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Where</strong></td><td><code>Order Number equals ORD-100245</code></td></tr>
<tr><td><strong>Save Row As</strong></td><td><code>targetOrder</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Search by stable business values, not by row position</li>
<li>Use clear variable names such as orderRow, customerRow, or invoiceRow</li>
<li>Prefer All conditions when identifying a unique row</li>
<li>Use multiple conditions if a single value may not be unique</li>
<li>After finding the row, add an Assert or Soft Verify to confirm the expected data</li>
</ul>
`,
  "table-inspect": `<div class="node-left"><div class="node-header">
<div>
<h1>Table Inspect</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Table Inspect Node reads structural and runtime information from a configured table. Used to inspect headers, columns, sorting, pagination, selection state, and available row actions during workflow execution.</p><h2>When to Use</h2><ul class="feature-list">
<li>Validate table structure dynamically</li>
<li>Read table metadata (current page, total pages, number of selected items)</li>
<li>Check sorting or pagination state</li>
<li>Inspect selected rows</li>
<li>Build advanced or adaptive table workflows</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node provides <strong>runtime table intelligence</strong> that can be reused in later workflow steps.</div></div><div class="screenshot-wrap">
<img alt="Table Inspect configuration" src="./autemos_images/image51.png"/>
<div class="screenshot-caption">Table Inspect configuration — select inspection mode and variable to store the result.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Mode</strong></td><td>Defines which table information is inspected</td><td>Yes</td><td><code>Pagination</code></td></tr>
<tr><td><strong>Store As</strong></td><td>Variable name for storing the inspection result</td><td>Yes</td><td><code>tableInfo</code></td></tr>
</tbody>
</table>
</div>
<p><strong>Available Modes</strong></p>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Option</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>Pagination</code></td><td>Reads pagination state: current page, total pages, has next page</td></tr>
<tr><td><code>Headers</code></td><td>Reads column header information</td></tr>
<tr><td><code>Columns</code></td><td>Reads configured business column definitions</td></tr>
<tr><td><code>SelectedRows</code></td><td>Reads currently selected rows</td></tr>
<tr><td><code>RowActions</code></td><td>Reads available row actions from the table definition</td></tr>
</tbody>
</table>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Reads table structure information based on the selected inspection mode</li>
<li>Retrieves runtime metadata such as current page, total pages, selected rows</li>
<li>Stores structured inspection results for later use in the workflow</li>
<li>Does not modify table data, apply filters, click rows, or change pagination</li>
</ul>
<h2>Output</h2>
<p>Inspection results are stored in the variable defined by <strong>Store As</strong>. Example: <code>\${tableInfo.currentPage}</code>, <code>\${tableInfo.totalPages}</code></p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Inspect pagination state before a loop</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Mode</strong></td><td><code>Pagination</code></td></tr>
<tr><td><strong>Store As</strong></td><td><code>tableInfo</code></td></tr>
</tbody>
</table>
</div>
<p>Usage: <code>If \${tableInfo.hasNextPage} equals true → navigate to next page</code></p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use Table Inspect before advanced table interactions</li>
<li>Store inspection results with meaningful variable names</li>
<li>Use pagination inspection before pagination loops</li>
<li>Combine with If Nodes for adaptive workflows</li>
<li>Use column validation to detect table configuration changes early</li>
</ul>
`,
  "load-scroll-table": `<div class="node-left"><div class="node-header">
<div>
<h1>Load / Scroll Table</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Load / Scroll Table Node loads additional rows or controls the scroll position of a configured table. Used for lazy-loaded, virtual, infinite-scrolling, or long tables where not all rows are immediately available.</p><h2>When to Use</h2><ul class="feature-list">
<li>Work with lazy-loaded or virtual tables</li>
<li>Load additional rows before searching or validating data</li>
<li>Scroll to the top or bottom of a table</li>
<li>Bring a matching business row into the visible area</li>
<li>Handle tables without classic pagination</li>
</ul></div><div class="screenshot-wrap">
<img alt="Load / Scroll Table configuration" src="./autemos_images/image52.png"/>
<div class="screenshot-caption">Load / Scroll Table configuration — select the table and the load or scroll action to perform.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td>Defines the load or scroll operation to perform</td><td>Yes</td><td><code>Load More Once</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify the row to scroll to (Scroll to Matching Row only)</td><td>No</td><td><code>Order Number equals \${orderNumber}</code></td></tr>
</tbody>
</table>
</div>
<h2>Load Options</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Load More Once</h3><p>Loads the next set of rows. Provides precise control over each load step.</p></div>
<div class="concept-card"><h3>Load All Rows</h3><p>Repeatedly loads rows until the table reports no more data.</p></div>
<div class="concept-card"><h3>Scroll to Top/Bottom</h3><p>Scrolls the table view area to the top or bottom.</p></div>
<div class="concept-card"><h3>Scroll to Matching Row</h3><p>Scrolls until a matching business row becomes visible.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Load all rows in a virtual table</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td><code>Load All Rows</code></td></tr>
</tbody>
</table>
</div>
<p>Use this node before Find Row or Rows to ensure all data is available.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use Load more once for precise control over each load step</li>
<li>Use Load all rows only when the table size is manageable</li>
<li>Prefer Scroll to matching row when searching for a known business record</li>
<li>Avoid loading all rows for very large datasets unless necessary</li>
<li>Combine with Check Table State or Find Row for reliable validation</li>
</ul>
`,
  "change-table-page": `<div class="node-left"><div class="node-header">
<div>
<h1>Change Table Page</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Change Table Page Node navigates between pages in a paginated table. Used to navigate directly through table pagination, instead of relying on automatic table search.</p><h2>When to Use</h2><ul class="feature-list">
<li>Manually navigate through paginated tables</li>
<li>Move to the next or previous table page</li>
<li>Jump directly to a specific page</li>
<li>Build controlled pagination workflows</li>
<li>Iterate through pages in loops</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node gives workflows <strong>explicit control</strong> over table paging behavior.</div></div><div class="screenshot-wrap">
<img alt="Change Table Page configuration" src="./autemos_images/image53.png"/>
<div class="screenshot-caption">Change Table Page configuration — select table and page navigation action.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td>Page navigation action to perform</td><td>Yes</td><td><code>Next Page</code></td></tr>
<tr><td><strong>Page Number</strong></td><td>Target page number (only for Go To Page action)</td><td>No</td><td><code>3</code></td></tr>
</tbody>
</table>
</div>
<h2>Available Page Actions</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Next Page</h3><p>Navigates to the next page of the table.</p></div>
<div class="concept-card"><h3>Previous Page</h3><p>Navigates to the previous page of the table.</p></div>
<div class="concept-card"><h3>First Page</h3><p>Jumps to the first page of the table.</p></div>
<div class="concept-card"><h3>Go To Page</h3><p>Jumps directly to a specified page number.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Navigate to the next page</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td><code>Next Page</code></td></tr>
</tbody>
</table>
</div>
<p>Use <strong>Check Table State</strong> (hasNextPage) before this node to avoid errors on the last page.</p>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use Check Table State before navigating to the next page</li>
<li>Combine with Loop Nodes for processing multiple pages</li>
<li>Only use Go to page when page numbers are stable and predictable</li>
<li>Keep timeouts realistic for table loading performance</li>
</ul>
`,
  "rows": `<div class="node-left"><div class="node-header">
<div>
<h1>Rows</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Rows Node counts, reads, or validates rows within a configured table. Used to dynamically work with visible, matching, selected, or total row sets during workflow execution.</p><h2>When to Use</h2><ul class="feature-list">
<li>Count rows in a table</li>
<li>Read matching rows into an array</li>
<li>Validate the existence of rows</li>
<li>Verify row counts</li>
<li>Apply validations across multiple rows</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Designed for <strong>scalable business table validation</strong> and bulk processing of rows.</div></div><div class="screenshot-wrap">
<img alt="Rows configuration" src="./autemos_images/image54.png"/>
<div class="screenshot-caption">Rows configuration — select action (count, read, verify), what to count, and conditions.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td>Defines what should happen with the rows</td><td>Yes</td><td><code>Count</code></td></tr>
<tr><td><strong>What to Count</strong></td><td>Defines which rows are counted</td><td>No</td><td><code>Visible rows</code></td></tr>
<tr><td><strong>Match</strong></td><td>Defines how multiple conditions are evaluated</td><td>No</td><td><code>All conditions</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify matching rows</td><td>No</td><td><code>Status equals Active</code></td></tr>
<tr><td><strong>Save As</strong></td><td>Variable name for storing the result</td><td>No</td><td><code>rowCount</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Save As is required for the Count and Read Matching Rows actions.</p>
<h2>Available Actions</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Count</h3><p>Counts visible, matching, selected, or total rows and stores the result.</p></div>
<div class="concept-card"><h3>Read Matching Rows</h3><p>Reads all matching rows into an array for further processing.</p></div>
<div class="concept-card"><h3>Verify Presence</h3><p>Verifies that at least one matching row exists.</p></div>
<div class="concept-card"><h3>Verify All Rows</h3><p>Verifies that all matching rows satisfy the configured conditions.</p></div>
</div>
<h2>Output</h2>
<p>For Count and Read Matching Rows actions, the result is stored in the variable defined by <strong>Save As</strong>.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
</div>
<div class="example-block">
<h3>Example — Count active orders in the table</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td><code>Count</code></td></tr>
<tr><td><strong>Where</strong></td><td><code>Status equals Active</code></td></tr>
<tr><td><strong>Save As</strong></td><td><code>activeCount</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use meaningful Save As variable names</li>
<li>Prefer business conditions over row positions</li>
<li>Use Read matching rows for advanced row processing</li>
<li>Use Verify presence before row interaction</li>
<li>Combine with Filter Table for large datasets</li>
</ul>
`,
  "run-cell-action": `<div class="node-left"><div class="node-header">
<div>
<h1>Run Cell Action</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Run Cell Action Node executes a configured action from a specific business column within a matching table row. Used to trigger row-specific actions such as opening details, editing records, downloading files, or executing context menu actions directly from a table cell.</p><h2>When to Use</h2><ul class="feature-list">
<li>Trigger actions from action columns</li>
<li>Click row-specific buttons or menus</li>
<li>Open detail or edit dialogs</li>
<li>Execute business actions within tables</li>
<li>Interact with dynamic row actions without relying on technical selectors</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node interacts with <strong>configured business actions</strong> instead of raw UI elements.</div></div><div class="screenshot-wrap">
<img alt="Run Cell Action configuration" src="./autemos_images/image56.png"/>
<div class="screenshot-caption">Run Cell Action configuration — specify table, business column, action key, and row conditions.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Column</strong></td><td>Business column containing the action</td><td>Yes</td><td><code>Actions</code></td></tr>
<tr><td><strong>Action Key</strong></td><td>Key identifying the specific action to execute</td><td>Yes</td><td><code>edit</code></td></tr>
<tr><td><strong>Match</strong></td><td>Defines how multiple conditions are evaluated</td><td>No</td><td><code>All conditions</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify the target row</td><td>Yes</td><td><code>Order Number equals \${orderNumber}</code></td></tr>
<tr><td><strong>Search Scope</strong></td><td>Defines where the table search should start</td><td>No</td><td><code>Start from first page</code></td></tr>
<tr><td><strong>Max Pages</strong></td><td>Maximum number of pages to search</td><td>No</td><td><code>10</code></td></tr>
</tbody>
</table>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Click the edit action of a specific order row</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Column</strong></td><td><code>Actions</code></td></tr>
<tr><td><strong>Action Key</strong></td><td><code>edit</code></td></tr>
<tr><td><strong>Where</strong></td><td><code>Order Number equals ORD-100245</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use stable business conditions for row identification</li>
<li>Prefer All conditions for unique row identification</li>
<li>Use meaningful Action Keys in table definitions</li>
<li>Prefer Start from first page for deterministic workflows</li>
<li>Combine with Check Table State before complex table actions</li>
</ul>
`,
  "run-row-action": `<div class="node-left"><div class="node-header">
<div>
<h1>Run Row Action</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Run Row Action Node executes a configured action directly on a matching table row. Used to trigger business-specific row actions such as opening detail views, editing records, deleting entries, or executing workflow-specific row operations.</p><h2>When to Use</h2><ul class="feature-list">
<li>Execute actions configured on a table row</li>
<li>Open detail views or edit dialogs</li>
<li>Delete records</li>
<li>Trigger row-specific workflows</li>
<li>Work with dynamic business tables without relying on technical selectors</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node executes actions defined at the <strong>row level</strong>, rather than within a specific cell.</div></div><div class="screenshot-wrap">
<img alt="Run Row Action configuration" src="./autemos_images/image58.png"/>
<div class="screenshot-caption">Run Row Action configuration — specify table, action key, and row conditions.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action Key</strong></td><td>Key identifying the row action to execute</td><td>Yes</td><td><code>delete</code></td></tr>
<tr><td><strong>Match</strong></td><td>Defines how multiple conditions are evaluated</td><td>No</td><td><code>All conditions</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify the target row</td><td>Yes</td><td><code>Order Number equals \${orderNumber}</code></td></tr>
<tr><td><strong>Search Scope</strong></td><td>Defines where the table search should start</td><td>No</td><td><code>Start from first page</code></td></tr>
<tr><td><strong>Max Pages</strong></td><td>Maximum number of pages to search</td><td>No</td><td><code>10</code></td></tr>
</tbody>
</table>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Delete a cancelled order row</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action Key</strong></td><td><code>delete</code></td></tr>
<tr><td><strong>Where</strong></td><td><code>Status equals Cancelled</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use stable business conditions for row identification</li>
<li>Prefer All conditions for unique row identification</li>
<li>Use meaningful Row Action Keys</li>
<li>Prefer Start from first page for deterministic workflows</li>
<li>Keep Max Pages realistic to avoid slow execution</li>
</ul>
`,
  "set-row-selection": `<div class="node-left"><div class="node-header">
<div>
<h1>Set Row Selection</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Set Row Selection Node selects or deselects rows in a configured table. Used to control row selection state without exposing technical selection details such as checkboxes or internal UI implementations.</p><h2>When to Use</h2><ul class="feature-list">
<li>Select business records in a table</li>
<li>Deselect rows</li>
<li>Manage bulk selections</li>
<li>Prepare rows for batch operations</li>
<li>Work with multi-select or single-select tables</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node abstracts table selection behavior into <strong>business-specific</strong> workflow actions.</div></div><div class="screenshot-wrap">
<img alt="Set Row Selection configuration" src="./autemos_images/image60.png"/>
<div class="screenshot-caption">Set Row Selection configuration — define selection action and row conditions.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td>Selection operation to perform</td><td>Yes</td><td><code>Select Matching</code></td></tr>
<tr><td><strong>Match</strong></td><td>Defines how multiple conditions are evaluated</td><td>No</td><td><code>All conditions</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify the rows to select</td><td>No</td><td><code>Status equals Active</code></td></tr>
<tr><td><strong>Max Pages</strong></td><td>Maximum number of pages to search</td><td>No</td><td><code>10</code></td></tr>
</tbody>
</table>
</div>
<h2>Selection Actions</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Select Matching</h3><p>Selects rows that match the configured business conditions.</p></div>
<div class="concept-card"><h3>Deselect Matching</h3><p>Deselects rows that match the configured business conditions.</p></div>
<div class="concept-card"><h3>Select All Visible</h3><p>Selects all currently visible rows in the table.</p></div>
<div class="concept-card"><h3>Clear Selection</h3><p>Deselects all selected rows in the table.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Select all active order rows</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Action</strong></td><td><code>Select Matching</code></td></tr>
<tr><td><strong>Where</strong></td><td><code>Status equals Active</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use stable business conditions for row identification</li>
<li>Clear previous selections before new bulk operations when appropriate</li>
<li>Combine with Rows or Table Inspect to validate selection state</li>
<li>Keep Max Pages realistic to avoid lengthy searches</li>
</ul>
`,
  "sort-table": `<div class="node-left"><div class="node-header">
<div>
<h1>Sort Table</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Sort Table Node applies or removes sorting for a business column in a configured table. Used to dynamically control table sorting without relying on technical header selectors or manual UI clicks.</p><h2>When to Use</h2><ul class="feature-list">
<li>Sort table data by a business column</li>
<li>Change table sorting before validation</li>
<li>Prepare deterministic table states</li>
<li>Verify sorted records</li>
<li>Remove active sorting on a column</li>
</ul><div class="tip"><span class="tip-icon">💡</span>Provides <strong>business-level sorting control</strong> for dynamic enterprise tables.</div></div><div class="screenshot-wrap">
<img alt="Sort Table configuration" src="./autemos_images/image62.png"/>
<div class="screenshot-caption">Sort Table configuration — select business column and sorting direction.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Column</strong></td><td>Business column to sort by</td><td>Yes</td><td><code>Order Date</code></td></tr>
<tr><td><strong>Direction</strong></td><td>Sort direction to apply</td><td>Yes</td><td><code>Descending</code></td></tr>
</tbody>
</table>
</div>
<h2>Sort Directions</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Ascending</h3><p>Sorts the column from lowest to highest values (A–Z, 0–9).</p></div>
<div class="concept-card"><h3>Descending</h3><p>Sorts the column from highest to lowest values (Z–A, 9–0).</p></div>
<div class="concept-card"><h3>Clear Sorting</h3><p>Removes sorting from the selected business column.</p></div>
</div>
<h2>Output</h2>
<p>No output.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Sort orders by date descending</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Column</strong></td><td><code>Order Date</code></td></tr>
<tr><td><strong>Direction</strong></td><td><code>Descending</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Apply sorting before row-based validation</li>
<li>Use stable business columns for deterministic workflows</li>
<li>Clear sorting when workflows should return to a neutral table state</li>
<li>Combine with Rows or Find Row for predictable table interaction</li>
</ul>
`,
  "table-verify": `<div class="node-left"><div class="node-header">
<div>
<h1>Table Verify</h1>
<span class="badge badge-table">Table Handling</span>
</div>
</div><p>The Table Verify Node is the central verification node for table-based workflows. Used to validate table state, headers, columns, rows, counts, sorting, selection, cell values, and configured row actions in a single unified verification node.</p><h2>When to Use</h2><ul class="feature-list">
<li>Verify table visibility or empty states</li>
<li>Validate table structure (headers, columns)</li>
<li>Verify row counts or row existence</li>
<li>Validate cell values</li>
<li>Check sorting behavior</li>
<li>Validate selected rows and configured row actions</li>
</ul><div class="tip"><span class="tip-icon">💡</span>This node centralizes most table-related <strong>validation scenarios</strong> into a reusable verification component.</div></div><div class="screenshot-wrap">
<img alt="Table Verify configuration" src="./autemos_images/image63.png"/>
<div class="screenshot-caption">Table Verify configuration — select verification type, table, and expected values.</div>
</div>
<h2>Configuration</h2>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Description</th><th>Required</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td>Centrally managed table definition</td><td>Yes</td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Verification Type</strong></td><td>Defines which aspect of the table is verified</td><td>Yes</td><td><code>Row Count</code></td></tr>
<tr><td><strong>Match</strong></td><td>Defines how multiple conditions are evaluated</td><td>No</td><td><code>All conditions</code></td></tr>
<tr><td><strong>Where</strong></td><td>Conditions to identify rows (where applicable)</td><td>No</td><td><code>Status equals Active</code></td></tr>
<tr><td><strong>Expected Value</strong></td><td>Expected value for comparison (where applicable)</td><td>No</td><td><code>5</code></td></tr>
</tbody>
</table>
</div>
<p class="param-note">* Expected Value is required for value comparison verifications.</p>
<h2>Verification Types</h2>
<div class="concept-grid">
<div class="concept-card"><h3>Table State</h3><p>Verify visibility, emptiness, or pagination state (has/no next page).</p></div>
<div class="concept-card"><h3>Column / Header</h3><p>Verify that a specific business column or header exists in the table.</p></div>
<div class="concept-card"><h3>Row Count / Presence</h3><p>Verify the number of rows or that a matching row exists.</p></div>
<div class="concept-card"><h3>Cell Value</h3><p>Verify the value of a specific cell in a matching row.</p></div>
<div class="concept-card"><h3>Sorting</h3><p>Verify that the table is sorted by a specific column and direction.</p></div>
<div class="concept-card"><h3>Row Action</h3><p>Verify that a configured action exists on a matching row.</p></div>
</div>
<h2>Behavior</h2>
<ul class="feature-list">
<li>Automatically uses table definitions, business columns, configured row actions, and pagination handling</li>
<li>Verification failures stop the workflow unless Soft Verify is enabled</li>
</ul>
<h2>Output</h2>
<p>No output. Verification failures stop the workflow unless Soft Verify is enabled.</p>
<div class="meta-grid">
<div class="meta-card"><div class="meta-label">Input Variables</div><div class="meta-value"><span class="meta-pill pill-yes">Yes</span></div></div>
<div class="meta-card"><div class="meta-label">Output Variables</div><div class="meta-value"><span class="meta-pill pill-no">No</span></div></div>
</div>
<div class="example-block">
<h3>Example — Verify the status of a specific order row</h3>
<div class="param-table-wrap">
<table class="param-table">
<thead><tr><th>Parameter</th><th>Value</th></tr></thead>
<tbody>
<tr><td><strong>Table</strong></td><td><code>OrdersTable</code></td></tr>
<tr><td><strong>Verification Type</strong></td><td><code>Cell Value</code></td></tr>
<tr><td><strong>Column</strong></td><td><code>Status</code></td></tr>
<tr><td><strong>Where</strong></td><td><code>Order Number equals ORD-100245</code></td></tr>
<tr><td><strong>Expected Value</strong></td><td><code>Delivered</code></td></tr>
</tbody>
</table>
</div>
</div>
<h2>Best Practices</h2>
<ul class="best-practices">
<li>Use business conditions instead of row indexes</li>
<li>Prefer centralized table verification over custom assertions</li>
<li>Verify table state before row interaction</li>
<li>Use explicit sorting verification in deterministic workflows</li>
</ul>
`
});
