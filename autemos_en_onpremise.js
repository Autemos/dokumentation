window.TRANSLATIONS_EN = Object.assign(window.TRANSLATIONS_EN || {}, {
  "onpremise-overview": `
  <span class="section-label">Getting Started</span>
  <h1>On-Premise Stack</h1>
  <p>Autemos can be operated <strong>entirely on your own infrastructure</strong> — on a single laptop, on a server inside the corporate network, or in a strictly isolated environment without internet access. The complete stack runs as a Docker Compose deployment: application, database, browser grid and optionally a local language model. There is <strong>no dependency on external services</strong>.</p>
  <h2>Deployment Models</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Single Workstation</h3><p>The entire stack runs on one laptop. Access via <code>localhost</code>. Ideal for evaluation, training and demos.</p></div>
    <div class="concept-card"><h3>Server in the Corporate Network</h3><p>The stack runs centrally on a server and multiple users access it via browser. Requires adjusting two URLs in the configuration.</p></div>
    <div class="concept-card"><h3>Air-Gap / Offline</h3><p>Installation without any internet access from a prepared bundle. All container images and the LLM model are already included.</p></div>
    <div class="concept-card"><h3>Hybrid LLM</h3><p>The stack runs locally while the AI features use an existing LLM service — local, on the network, or as a cloud endpoint.</p></div>
  </div>
  <h2>What Is Delivered</h2>
  <p>Delivery takes the form of a folder named <code>autemos-offline/</code> containing everything required:</p>
  <ul class="feature-list">
    <li>All container images as archive files in the <code>images/</code> subfolder</li>
    <li>The ready-made <code>docker-compose.yml</code> and the configuration file <code>.env</code> with pre-generated passwords</li>
    <li>The local language model in the <code>ollama-data/</code> subfolder</li>
    <li>Helper scripts for loading the images and warming up the model — for Linux/macOS and for Windows</li>
  </ul>
  <div class="tip"><span class="tip-icon">💡</span>Because all images ship with the bundle, the target system <strong>never</strong> needs a connection to a container registry or to the internet.</div>
`,
  "onpremise-architecture": `
  <span class="section-label">Getting Started</span>
  <h1>Architecture</h1>
  <p>The stack consists of several containers that communicate with each other over an internal Docker network. Only a few ports are published to the outside.</p>
  <h2>Components</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Component</th><th>Purpose</th><th>Port (host)</th></tr></thead>
      <tbody>
        <tr><td><strong>Frontend</strong></td><td>The Autemos web interface. Also acts as the entry point and forwards requests to the backend and worker.</td><td><code>3000</code></td></tr>
        <tr><td><strong>Backend</strong></td><td>Core application logic: projects, workflows, test runs, settings, LLM integration.</td><td>internal</td></tr>
        <tr><td><strong>Java Worker</strong></td><td>Executes the test workflows and drives the browsers in the grid.</td><td>via <code>/worker</code></td></tr>
        <tr><td><strong>PostgreSQL</strong></td><td>Database for all project, test and configuration data. Stored in a Docker volume.</td><td>internal</td></tr>
        <tr><td><strong>Selenium Grid Hub</strong></td><td>Distributes test sessions across the available browser nodes.</td><td><code>4444</code></td></tr>
        <tr><td><strong>Chrome Nodes</strong></td><td>Two static browser nodes for test execution.</td><td>via the hub</td></tr>
        <tr><td><strong>Ollama</strong></td><td>Local LLM service for AI features such as field generation, AI Recorder and auto-healing.</td><td><code>11434</code></td></tr>
      </tbody>
    </table>
  </div>
  <h2>Internal Names and External Addresses</h2>
  <p>Within the Compose deployment, containers reach each other by their <strong>service name</strong>, not via <code>localhost</code>. This is the most common source of configuration errors.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Point of view</th><th>Address for Ollama</th></tr></thead>
      <tbody>
        <tr><td>From inside a container (e.g. the backend)</td><td><code>http://ollama:11434</code></td></tr>
        <tr><td>From the host system / from the browser</td><td><code>http://localhost:11434</code></td></tr>
      </tbody>
    </table>
  </div>
  <div class="warning"><span class="tip-icon">⚠️</span><strong>localhost means something different inside a container.</strong> If you enter <code>localhost</code> in a setting that is evaluated by the backend, it points at the backend container itself — not at the host and not at another service.</div>
  <h2>Scaling the Grid</h2>
  <p>The two bundled Chrome nodes run permanently and independently. In addition, Autemos can start further nodes dynamically when required; this uses the Docker socket. If the socket is unavailable, the static nodes are unaffected and test execution continues to work.</p>
  <div class="tip"><span class="tip-icon">💡</span>The status of the grid including all nodes and running sessions is available in the application under <a href="#grid-overview"><strong>Grid Dashboard</strong></a>.</div>
`,
  "onpremise-requirements": `
  <span class="section-label">Installation</span>
  <h1>System Requirements</h1>
  <p>The stack places no special demands on the operating system — what matters is Docker, the processor architecture and enough memory for the desired language model.</p>
  <h2>Baseline</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Requirement</th><th>Details</th></tr></thead>
      <tbody>
        <tr><td><strong>Docker</strong></td><td>Docker Desktop or Docker Engine, installed and running — including <strong>Docker Compose v2</strong>.</td></tr>
        <tr><td><strong>Architecture</strong></td><td><strong>x86-64 / amd64</strong>. The images are built for amd64.</td></tr>
        <tr><td><strong>Disk space</strong></td><td>About <strong>30 GB</strong> free for the loaded images and application data.</td></tr>
        <tr><td><strong>Memory</strong></td><td>Depends on the language model — see below. Considerably less without a local LLM.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="warning"><span class="tip-icon">⚠️</span><strong>Apple Silicon is not supported.</strong> The stack runs exclusively on amd64 systems, not on arm64 machines such as Macs with M-series processors.</div>
  <h2>Memory for the Local Language Model</h2>
  <p>Running the bundled model <code>qwen3-coder:30b</code> with a 32k context on the CPU requires <strong>around 24 GB of RAM or more</strong>. A GPU is recommended but not mandatory.</p>
  <div class="tip"><span class="tip-icon">💡</span>Smaller models such as <code>qwen2.5-coder:7b</code> are noticeably faster and more frugal. For the <a href="#recorder-ai"><strong>AI Recorder</strong></a>, however, they are <strong>too weak</strong> — only a larger model produces usable results there.</div>
  <p>Alternatively, the local model can be omitted entirely and an existing LLM service connected instead. The memory footprint of the stack then drops significantly — see <a href="#onpremise-llm">OpenAI-Compatible Interface</a>.</p>
`,
  "onpremise-installation": `
  <span class="section-label">Installation</span>
  <h1>Installation</h1>
  <p>Installation consists of three steps: get the bundle onto the target system, load the images into Docker, start the stack.</p>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <div class="step-content">
        <h3>Copy the bundle to the target system</h3>
        <p>Transfer the complete <code>autemos-offline/</code> folder via USB media or network share to the target machine, then open a console <strong>inside that folder</strong>.</p>
        <pre class="cmd-block"><code>cd autemos-offline</code></pre>
      </div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div class="step-content">
        <h3>Load the container images</h3>
        <p>The bundled script imports all archive files from <code>images/</code> into the local Docker installation.</p>
        <pre class="cmd-block"><span class="cmd-comment"># Linux / macOS / Git Bash</span>
<code>./load-images.sh</code>

<span class="cmd-comment"># Windows PowerShell</span>
<code>.\\load-images.ps1</code></pre>
        <p>The archives can also be loaded individually: <code>docker load -i images/&lt;file&gt;.tar</code> for each file in the folder.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div class="step-content">
        <h3>Start the stack</h3>
        <p>The adjacent <code>.env</code> file is read automatically. The <strong>first</strong> start takes a moment until all services are ready — database migrations and health checks are running.</p>
        <pre class="cmd-block"><code>docker compose up -d</code></pre>
        <p>If the stack is to run on a server rather than locally, two URLs must be adjusted beforehand — see <a href="#onpremise-access">Access &amp; URLs</a>.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div class="step-content">
        <h3>Check the status</h3>
        <p>All services should reach the status <code>running</code> or <code>healthy</code>.</p>
        <pre class="cmd-block"><code>docker compose ps
docker compose logs -f</code></pre>
      </div>
    </div>
  </div>
`,
  "onpremise-access": `
  <span class="section-label">Installation</span>
  <h1>Access &amp; URLs</h1>
  <p>Once started, the following interfaces are available:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Service</th><th>URL</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td><strong>Autemos UI</strong></td><td><code>http://localhost:3000</code></td><td>The application itself</td></tr>
        <tr><td><strong>Selenium Grid</strong></td><td><code>http://localhost:4444/ui</code></td><td>Grid console for inspecting the browser nodes</td></tr>
        <tr><td><strong>Ollama</strong></td><td><code>http://localhost:11434</code></td><td>Endpoint of the local language model</td></tr>
      </tbody>
    </table>
  </div>
  <h2>First Login</h2>
  <p>Log in with the preconfigured administrator account, default user name <code>admin</code>.</p>
  <div class="warning"><span class="tip-icon">⚠️</span><strong>Change the password immediately after the first login.</strong> The shipped default account is structured identically in every installation and must not remain in productive use with the delivery password.</div>
  <p>Additional accounts are then created normally via the <a href="#users-overview"><strong>Users</strong></a> module.</p>
  <h2>Running on a Server</h2>
  <p>If the stack does not run locally but on a server that other machines access via browser, two entries in the <code>.env</code> file must be changed from <code>localhost</code> to the server name or server IP <strong>before the first start</strong>:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Entry</th><th>Meaning</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td><code>FRONTEND_BASE_URL</code></td><td>Address under which users open the interface</td><td><code>http://192.168.1.50:3000</code></td></tr>
        <tr><td><code>WORKER_EXTERNAL_URL</code></td><td>Address under which the worker is reachable from outside</td><td><code>http://192.168.1.50:3000/worker</code></td></tr>
      </tbody>
    </table>
  </div>
  <div class="tip"><span class="tip-icon">💡</span>If the adjustment is made later, it is enough to change the values in <code>.env</code> and run <code>docker compose up -d</code> again.</div>
`,
  "onpremise-llm": `
  <span class="section-label">LLM Integration</span>
  <h1>OpenAI-Compatible Interface</h1>
  <p>Autemos does not address language models through proprietary protocols but through an <strong>OpenAI-compatible interface</strong>. Any service that speaks this widely adopted API schema can therefore be connected — whether it runs inside the stack, on the corporate network, or is provided as a cloud endpoint.</p>
  <h2>Possible Counterparts</h2>
  <div class="concept-grid">
    <div class="concept-card"><h3>Ollama inside the stack</h3><p>The bundled container. No further infrastructure required, and no data leaves the system.</p></div>
    <div class="concept-card"><h3>Ollama as a separate service</h3><p>An existing Ollama installation on the host or on another machine in the network.</p></div>
    <div class="concept-card"><h3>Corporate LLM gateway</h3><p>A centrally operated service with an OpenAI-compatible endpoint shared by several applications.</p></div>
    <div class="concept-card"><h3>Cloud endpoint</h3><p>For example Azure AI Foundry or a comparable provider. Useful when no local compute capacity is available.</p></div>
  </div>
  <h2>Which URL Belongs in the "LLM Server URL" Field?</h2>
  <p>The address to enter depends on <strong>where the service runs</strong> — as seen from the backend that issues the requests.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Deployment</th><th>LLM Server URL</th><th>Note</th></tr></thead>
      <tbody>
        <tr><td><strong>Ollama in the bundled stack</strong></td><td><code>http://ollama:11434</code></td><td>Internal service name of the container</td></tr>
        <tr><td><strong>Ollama as a local service</strong>, without container separation</td><td><code>http://localhost:11434</code></td><td>Only correct if the service and the backend share the same network context</td></tr>
        <tr><td><strong>Ollama on another machine</strong></td><td><code>http://&lt;hostname-or-ip&gt;:11434</code></td><td>The port must be reachable from outside</td></tr>
        <tr><td><strong>Cloud or gateway endpoint</strong></td><td>The provider's full base URL, e.g. <code>https://api.openai.com/v1</code></td><td>Use the address and path exactly as documented by the provider</td></tr>
      </tbody>
    </table>
  </div>
  <div class="warning"><span class="tip-icon">⚠️</span>If Ollama runs <strong>inside the Compose stack</strong>, <code>http://localhost:11434</code> is <strong>wrong</strong> here. From the backend container's point of view, <code>localhost</code> refers to the container itself. The only correct value is the service name <code>http://ollama:11434</code>.</div>
  <h2>API Key</h2>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Counterpart</th><th>API key</th></tr></thead>
      <tbody>
        <tr><td>Local Ollama</td><td>Leave the field empty — no authentication takes place</td></tr>
        <tr><td>Gateway or cloud endpoint</td><td>The key issued by the provider. Stored encrypted in the backend and never displayed in clear text in the interface</td></tr>
      </tbody>
    </table>
  </div>
  <div class="tip"><span class="tip-icon">💡</span>All further parameters of the LLM integration — temperature, max tokens, rate limits and cost thresholds — are described under <a href="#settings-llm"><strong>Global Settings → LLM Integration</strong></a>.</div>
`,
  "onpremise-llm-setup": `
  <span class="section-label">LLM Integration</span>
  <h1>Setup in the UI</h1>
  <p>The bundled model already resides in the <code>ollama-data/</code> folder and does not need to be downloaded. The connection is established once in the interface.</p>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <div class="step-content">
        <h3>Open the settings</h3>
        <p>In the application, go to <strong>Global Settings → LLM Integration</strong>.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div class="step-content">
        <h3>Enable LLM globally</h3>
        <p>Switch on the option <strong>"Enable LLM for field generation globally"</strong>.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div class="step-content">
        <h3>Select the provider</h3>
        <p>Choose <code>Ollama / OpenAI-compatible</code> as the provider.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div class="step-content">
        <h3>Enter the server URL</h3>
        <p>When running inside the bundled stack: <code>http://ollama:11434</code>. For other deployments see <a href="#onpremise-llm">OpenAI-Compatible Interface</a>.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">5</div>
      <div class="step-content">
        <h3>Select the model</h3>
        <p>Click <strong>"Load models"</strong> and pick <code>qwen3-coder:30b</code> from the list. Leave the API key empty.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">6</div>
      <div class="step-content">
        <h3>Save and verify</h3>
        <p>Apply with <strong>Save</strong>, then run <strong>Test Connection</strong>. The result should be positive.</p>
      </div>
    </div>
  </div>
  <div class="tip"><span class="tip-icon">💡</span>Before the first productive call, the model should be warmed up once — see <a href="#onpremise-warmup">Warming Up the Model</a>. Otherwise the first call may run into a timeout.</div>
`,
  "onpremise-warmup": `
  <span class="section-label">LLM Integration</span>
  <h1>Warming Up the Model</h1>
  <p>On the <strong>first</strong> call, Ollama loads the model from disk into memory. On the CPU this can take several minutes with a large model such as <code>qwen3-coder:30b</code>. To keep the first real call from the application from running into a timeout, the model is deliberately warmed up once.</p>
  <pre class="cmd-block"><span class="cmd-comment"># Linux / macOS / Git Bash</span>
<code>./warmup-ollama.sh</code>

<span class="cmd-comment"># Windows PowerShell</span>
<code>.\\warmup-ollama.ps1</code>

<span class="cmd-comment"># If the execution policy blocks the script:</span>
<code>powershell -ExecutionPolicy Bypass -File .\\warmup-ollama.ps1</code></pre>
  <p>The script waits until the model is fully loaded, prints the elapsed time and finally verifies that the model actually resides in memory. A <strong>second</strong> run should take only a few seconds — the model is then warm.</p>
  <h2>Why the Model Stays Loaded</h2>
  <p>Left alone, Ollama unloads a model from memory after about five minutes without requests, making the next call cold again. The bundled stack therefore sets <code>OLLAMA_KEEP_ALIVE=-1</code> — the model stays loaded permanently after the first load.</p>
  <div class="tip"><span class="tip-icon">💡</span>The value can be overridden in <code>.env</code>, for instance to <code>OLLAMA_KEEP_ALIVE=24h</code>, if memory should be released again after longer periods of inactivity.</div>
`,
  "onpremise-config": `
  <span class="section-label">Operations</span>
  <h1>Configuration &amp; Secrets</h1>
  <p>All operating parameters of the stack live in the <code>.env</code> file next to <code>docker-compose.yml</code>. It is read automatically on start. After a change, running <code>docker compose up -d</code> again is sufficient.</p>
  <h2>Credentials</h2>
  <p>The delivered <code>.env</code> already contains randomly generated values for the following entries:</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Entry</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td><code>POSTGRES_PASSWORD</code></td><td>Database password</td></tr>
        <tr><td><code>JWT_SECRET</code></td><td>Key used to sign the login tokens</td></tr>
        <tr><td><code>BACKEND_SERVICE_PASS</code></td><td>Password for internal service communication</td></tr>
      </tbody>
    </table>
  </div>
  <div class="warning"><span class="tip-icon">⚠️</span>For productive use these values should be replaced with your own and the stack restarted afterwards. Protect the <code>.env</code> file accordingly — it holds all credentials in clear text.</div>
  <h2>Ports</h2>
  <p>If ports are already taken on the target system, the published ports can be adjusted in <code>.env</code> — for example <code>FRONTEND_PORT</code> or <code>GRID_HUB_PORT</code>. Restart the stack afterwards.</p>
  <div class="tip"><span class="tip-icon">💡</span>If <code>FRONTEND_PORT</code> is changed, <code>FRONTEND_BASE_URL</code> and <code>WORKER_EXTERNAL_URL</code> must be updated to match.</div>
  <h2>Using a GPU</h2>
  <p>By default Ollama computes on the CPU. If an NVIDIA GPU is available on the target system, inference can be accelerated considerably. To do so, install the <strong>NVIDIA Container Toolkit</strong> on the host and add a GPU reservation to the <code>ollama</code> service in <code>docker-compose.yml</code>.</p>
  <h2>Timeout for LLM Requests</h2>
  <p>The timeout for requests to the language model defaults to <strong>180 seconds</strong>, a value that holds up even for CPU operation. If a large model needs longer even when warm, the value can be increased under <a href="#settings-llm"><strong>Global Settings → LLM Integration</strong></a>.</p>
  <h2>A Different Language Model</h2>
  <p>Which model the bundle contains is decided <strong>when the bundle is created</strong> and cannot be swapped out afterwards on an offline system — that would require a download. If a smaller or larger model is needed, request a bundle built accordingly.</p>
  <div class="tip"><span class="tip-icon">💡</span>If the target system does have a network connection to an LLM service, the bundled model can be bypassed and an external endpoint connected instead — see <a href="#onpremise-llm">OpenAI-Compatible Interface</a>.</div>
`,
  "onpremise-operations": `
  <span class="section-label">Operations</span>
  <h1>Operations</h1>
  <p>Day-to-day operation is handled entirely through Docker Compose from within the bundle folder.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Command</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td><code>docker compose up -d</code></td><td>Start the stack, or reapply it after configuration changes</td></tr>
        <tr><td><code>docker compose down</code></td><td>Stop the stack — <strong>all data is preserved</strong></td></tr>
        <tr><td><code>docker compose ps</code></td><td>Show the status of all services</td></tr>
        <tr><td><code>docker compose logs -f</code></td><td>Follow the logs continuously</td></tr>
        <tr><td><code>docker compose down -v</code></td><td><strong>Delete everything</strong>, including the database volume</td></tr>
      </tbody>
    </table>
  </div>
  <div class="warning"><span class="tip-icon">⚠️</span><code>docker compose down -v</code> removes the database volume and with it <strong>all projects, workflows and test results irreversibly</strong>. To stop the stack normally, use <code>docker compose down</code> without <code>-v</code>.</div>
  <h2>Data Storage</h2>
  <p>All application data resides in a Docker volume and survives stopping, starting and host reboots. Backing up the stack therefore essentially means backing up this volume plus the <code>.env</code> file.</p>
`,
  "onpremise-troubleshooting": `
  <span class="section-label">Operations</span>
  <h1>Troubleshooting</h1>
  <p>The following situations occur most frequently during commissioning.</p>
  <div class="param-table-wrap">
    <table class="param-table">
      <thead><tr><th>Symptom</th><th>Cause</th><th>Remedy</th></tr></thead>
      <tbody>
        <tr><td>Warm-up runs into a timeout, the model never shows as loaded</td><td>Not enough free memory on the host</td><td>Check the memory situation (see below). Close applications or use a bundle with a smaller model</td></tr>
        <tr><td><strong>Test Connection</strong> fails in the LLM configuration</td><td>Wrong server URL — usually <code>localhost</code> instead of the service name</td><td>Correct the URL according to your <a href="#onpremise-llm">deployment</a>; inside the stack it is <code>http://ollama:11434</code></td></tr>
        <tr><td>The stack does not start, a port conflict is reported</td><td>Ports 3000, 4444 or 11434 are already in use</td><td>Change the ports in <code>.env</code> and restart the stack</td></tr>
        <tr><td>The interface is unreachable from a workstation</td><td>The stack runs on a server but the URLs still point to <code>localhost</code></td><td>Adjust <code>FRONTEND_BASE_URL</code> and <code>WORKER_EXTERNAL_URL</code> — see <a href="#onpremise-access">Access &amp; URLs</a></td></tr>
        <tr><td>Images fail to load or containers do not start</td><td>The target system is not an amd64 machine</td><td>Run on an x86-64 system; arm64 is not supported</td></tr>
        <tr><td>The first call to an AI feature aborts, later ones work</td><td>The model was still cold</td><td>Warm the model up and leave <code>OLLAMA_KEEP_ALIVE</code> in place — see <a href="#onpremise-warmup">Warming Up the Model</a></td></tr>
      </tbody>
    </table>
  </div>
  <h2>Diagnosing the LLM Service</h2>
  <p>If it remains unclear whether the model could be loaded, the logs and resource usage of the Ollama container provide the answer:</p>
  <pre class="cmd-block"><code>docker logs --tail 80 stk_prod_ollama
docker stats stk_prod_ollama --no-stream</code></pre>
  <p>If memory usage shows that the container is hitting a limit, there is not enough RAM for the selected model.</p>
  <h2>General Diagnostics</h2>
  <pre class="cmd-block"><span class="cmd-comment"># Status of all services</span>
<code>docker compose ps</code>

<span class="cmd-comment"># Logs of a single service</span>
<code>docker compose logs -f &lt;service-name&gt;</code></pre>
  <div class="tip"><span class="tip-icon">💡</span>In addition, the application itself provides an overview of the platform components' health under <a href="#settings-status"><strong>Global Settings → System Status</strong></a>.</div>
`,
});
