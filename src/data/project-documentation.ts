export type DocumentationTable = {
  title: string;
  description?: string;
  columns: string[];
  rows: string[][];
};

export type DocumentationCode = {
  title: string;
  language: string;
  code: string;
};

export type DocumentationSection = {
  title: string;
  eyebrow?: string;
  body?: string;
  points?: string[];
  tables?: DocumentationTable[];
  code?: DocumentationCode[];
};

export type ProjectDocumentation = {
  title: string;
  subtitle: string;
  version: string;
  license: string;
  imagePaths: string[];
  sections: DocumentationSection[];
};

export const projectDocumentation: Record<string, ProjectDocumentation> = {
  "forge-osh": {
    title: "Forge-OSH Open Source Harness",
    subtitle:
      "A universal, provider-agnostic coding agent for developers who live in the terminal.",
    version: "v1.0.16",
    license: "MIT License",
    imagePaths: [
      "media/img1.png",
      "media/img2.png",
      "media/img3.png",
      "media/img8.png",
      "media/img4.png",
      "media/img5.png",
      "media/img6.png",
      "media/img7.png",
      "media/img9.png"
    ],
    sections: [
      {
        eyebrow: "Vision",
        title: "Project vision",
        body:
          "Forge-OSH was created as a lightning-fast native AI coding assistant that runs entirely inside the terminal. It avoids Electron shells, browser tabs, and vendor lock-in, while still giving the agent enough autonomy to inspect code, modify files, run commands, manage Git, search, recover from errors, and continue through a real engineering task.",
        points: [
          "Use any LLM provider: Anthropic, OpenAI, Gemini, Groq, xAI, OpenRouter, DeepSeek, or local Ollama-style models.",
          "Switch providers mid-conversation without rebuilding the workflow around a single vendor.",
          "Run a true agentic loop that can read files, write code, run shell commands, manage Git, search the web, and fix its own failures.",
          "Protect destructive work through permission rules, allow/deny globs, blocked command lists, and trust modes.",
          "Ship as one compiled binary for Windows, macOS, and Linux with no Python, Node, Docker, or browser runtime required."
        ]
      },
      {
        eyebrow: "Snapshot",
        title: "Key features at a glance",
        tables: [
          {
            title: "Feature overview",
            columns: ["Category", "Capability"],
            rows: [
              ["Providers", "12+ cloud providers, 6 local providers, and auto-detection for local inference servers."],
              ["Tools", "40+ tools across file I/O, shell execution, Git, search, web access, code quality, tasks, notebooks, and worktrees."],
              ["Agent", "Autonomous plan-execute-observe loop with explicit enter_plan_mode and exit_plan_mode control."],
              ["TUI", "Five color themes, Vim normal mode, mouse scrolling, conversation history, and modal pickers."],
              ["Safety", "Per-tool permission rules with glob patterns, blocked command lists, and trust mode."],
              ["Sessions", "Auto-save, named sessions, resume, and Markdown export."],
              ["Context", "LLM-based compaction, precise token counting, and real-time cost tracking."],
              ["Undo", "Snapshot-backed file undo for every agent mutation."],
              ["Hooks", "Shell hooks on PreToolUse, PostToolUse, Stop, Notification, UserPromptSubmit, SessionStart, SessionEnd, and PreCompact events."],
              ["Memory", "Automatic loading of CLAUDE.md files from project, parent, user, and Claude-compatible paths."],
              ["Code Graph", "Semantic code graph with deterministic symbol lookup and token-efficient codebase navigation."]
            ]
          }
        ]
      },
      {
        eyebrow: "Architecture",
        title: "Tech stack and architecture",
        body:
          "The system is structured around a Rust terminal UI, an application core, a provider router, a session and configuration layer, a tool registry, and an optional semantic graph engine. The core design keeps rendering, orchestration, provider routing, tools, permissions, hooks, context management, and graph navigation separated enough to grow independently.",
        tables: [
          {
            title: "Core stack",
            columns: ["Layer", "Technology"],
            rows: [
              ["Language", "Rust 2021 Edition"],
              ["Async runtime", "Tokio with full features"],
              ["Terminal UI", "Ratatui and Crossterm"],
              ["CLI parsing", "Clap v4 with derive macros"],
              ["HTTP", "Reqwest with Rustls TLS and SSE streaming"],
              ["Tokenization", "tiktoken-rs for accurate token counting"],
              ["Serialization", "Serde, JSON, TOML, and Bincode for graph artifacts"],
              ["Code graph", "Petgraph StableGraph with Rayon parallel parsing"],
              ["Code quality", "Syntect for syntax highlighting and Similar for diff generation"],
              ["Errors", "thiserror typed errors and Anyhow"],
              ["Logging", "Tracing with environment filtering"]
            ]
          }
        ],
        code: [
          {
            title: "Architecture map",
            language: "text",
            code: `CLI/TUI -> App Core -> Provider Router

App Core owns:
- Agent loop
- Sessions and history
- Token accounting
- Configuration
- Keyring
- Model database
- Hooks
- Permissions

Tool Registry includes:
- File I/O
- Git operations
- Shell and PowerShell
- Search and web
- Code quality
- Task management
- Agent planning
- Notebooks
- Worktrees
- graph_query

Optional Semantic Code Graph includes:
- Petgraph StableGraph
- Two-pass parallel builder
- Bincode artifact persistence
- O(1) symbol lookup indices`
          }
        ]
      },
      {
        eyebrow: "Installation",
        title: "Getting the application",
        points: [
          "Pre-built binary: request a compiled executable by emailing omamitshah@gmail.com with operating system and architecture.",
          "GitHub Releases: download the platform archive from the forge-osh releases page and place the binary on PATH.",
          "Source install: clone the repository and run cargo install --path . with Rust 1.75+.",
          "Custom build: set CARGO_TARGET_DIR on Windows when needed, then run cargo build --release."
        ],
        tables: [
          {
            title: "Release artifacts",
            columns: ["Platform", "File"],
            rows: [
              ["Windows x64", "forge-osh-windows-amd64.zip"],
              ["macOS Apple Silicon", "forge-osh-macos-arm64.tar.gz"],
              ["macOS Intel", "forge-osh-macos-amd64.tar.gz"],
              ["Linux x64", "forge-osh-linux-x86_64.tar.gz"]
            ]
          }
        ],
        code: [
          {
            title: "Install from source",
            language: "bash",
            code: `git clone https://github.com/OmShah74/forge-osh.git
cd forge-osh
cargo install --path .`
          },
          {
            title: "Windows release build",
            language: "powershell",
            code: `$env:PATH = "$env:USERPROFILE\\.cargo\\bin;C:\\msys64\\mingw64\\bin;$env:PATH"
$env:CARGO_TARGET_DIR = "C:\\forge-build"
cargo build --release`
          }
        ]
      },
      {
        eyebrow: "Start",
        title: "Quick start guide",
        points: [
          "Run forge-osh with no arguments for the guided first-run setup.",
          "Set API keys directly with forge-osh config keys set <provider> <key>.",
          "Use environment variables for ephemeral API key sessions.",
          "Launch interactive TUI mode with forge-osh.",
          "Run a single task by passing the prompt as an argument.",
          "Pipe logs, code, or errors through stdin for diagnosis workflows.",
          "Specify provider and model for a single session with -p and -m.",
          "Resume the last session with --resume or start a named session with --session."
        ],
        code: [
          {
            title: "Common launch commands",
            language: "bash",
            code: `forge-osh
forge-osh config keys set anthropic sk-ant-api-xxxxxxxxxxxx
export ANTHROPIC_API_KEY=sk-ant-api-xxxxxxxxxxxx
forge-osh "Fix the null pointer exception in src/handler.rs"
cat build_errors.log | forge-osh "Diagnose and fix these build errors"
forge-osh -p groq -m llama-3.3-70b-versatile "Refactor the auth module"
forge-osh --resume
forge-osh --session feature-auth-refactor`
          }
        ]
      },
      {
        eyebrow: "Models",
        title: "Supported LLM providers",
        body:
          "Forge-OSH is provider agnostic. It supports major cloud providers, multiple local inference servers, default model selection, local auto-detection, and provider switching inside an active workflow.",
        tables: [
          {
            title: "Cloud providers",
            columns: ["Provider", "Environment variable", "Default model"],
            rows: [
              ["Anthropic", "ANTHROPIC_API_KEY", "claude-sonnet-4-20250514"],
              ["OpenAI", "OPENAI_API_KEY", "gpt-4o"],
              ["Google Gemini", "GEMINI_API_KEY", "gemini-2.0-flash"],
              ["Groq", "GROQ_API_KEY", "llama-3.3-70b-versatile"],
              ["xAI Grok", "XAI_API_KEY", "grok-3"],
              ["OpenRouter", "OPENROUTER_API_KEY", "anthropic/claude-sonnet-4-20250514"],
              ["Mistral", "MISTRAL_API_KEY", "mistral-large-latest"],
              ["DeepSeek", "DEEPSEEK_API_KEY", "deepseek-chat"],
              ["Together AI", "TOGETHER_API_KEY", "meta-llama/Llama-3.3-70B-Instruct-Turbo"],
              ["Fireworks", "FIREWORKS_API_KEY", "llama-v3p3-70b-instruct"],
              ["Perplexity", "PERPLEXITY_API_KEY", "sonar-pro"],
              ["Cohere", "COHERE_API_KEY", "command-r-plus"]
            ]
          },
          {
            title: "Local providers",
            columns: ["Provider", "Default URL", "Auto-detect"],
            rows: [
              ["Ollama", "http://localhost:11434", "Yes"],
              ["LM Studio", "http://localhost:1234", "Yes"],
              ["llama.cpp", "http://localhost:8080", "Yes"],
              ["vLLM", "http://localhost:8000", "Yes"],
              ["Jan", "http://localhost:1337", "Yes"],
              ["LocalAI", "http://localhost:8080", "Yes"]
            ]
          }
        ]
      },
      {
        eyebrow: "Tools",
        title: "Agent tool suite",
        body:
          "The tool suite gives the agent enough surface area to perform full engineering work while still allowing each operation to be permissioned, observed, and recovered.",
        tables: [
          {
            title: "File system operations",
            columns: ["Tool", "Permission", "Description"],
            rows: [
              ["read_file", "ReadOnly", "Read file content with optional line ranges."],
              ["write_file", "Mutating", "Write an entire file, either new or overwrite."],
              ["edit_file", "Mutating", "Surgical find-and-replace edits, preferred over write_file."],
              ["create_file", "Mutating", "Create a new file and error if it already exists."],
              ["delete_file", "Destructive", "Delete a file with confirmation."],
              ["list_directory", "ReadOnly", "List directory contents."],
              ["move_file", "Mutating", "Move or rename files."],
              ["copy_file", "Mutating", "Copy files."]
            ]
          },
          {
            title: "Shell execution",
            columns: ["Tool", "Permission", "Description"],
            rows: [
              ["bash", "Varies", "Run shell commands. Read-only commands such as ls, cat, grep, and git log are auto-allowed."],
              ["powershell", "Varies", "Run PowerShell commands on Windows. Get-* cmdlets are auto-allowed."]
            ]
          },
          {
            title: "Git operations",
            columns: ["Tool", "Permission", "Description"],
            rows: [
              ["git_status", "ReadOnly", "Working tree status."],
              ["git_diff", "ReadOnly", "Diff with staged and file-specific options."],
              ["git_log", "ReadOnly", "Commit history with formatting."],
              ["git_blame", "ReadOnly", "Line-by-line blame."],
              ["git_show", "ReadOnly", "Show commit contents."],
              ["git_add", "Mutating", "Stage files."],
              ["git_commit", "Mutating", "Create commits."],
              ["git_branch", "Mutating", "Create and list branches."],
              ["git_checkout", "Mutating", "Switch branches."],
              ["git_stash", "Mutating", "Stash changes."],
              ["git_reset", "Destructive", "Reset HEAD."],
              ["git_fetch", "Network", "Fetch from remotes."],
              ["git_push", "Network", "Push to remotes."],
              ["git_pull", "Network", "Pull from remotes."]
            ]
          },
          {
            title: "Search, web, quality, tasks, orchestration, notebooks, worktrees, and graph",
            columns: ["Area", "Tools"],
            rows: [
              ["Search", "search_files, find_files"],
              ["Web", "web_fetch, web_search"],
              ["Code quality", "run_linter, run_tests, run_formatter"],
              ["Tasks", "todo_write, task_create, task_update, task_get, task_list"],
              ["Agent orchestration", "ask_user, enter_plan_mode, exit_plan_mode"],
              ["Notebooks", "notebook_read"],
              ["Git worktrees", "enter_worktree, exit_worktree, list_worktrees"],
              ["Semantic code graph", "graph_query with find, context_pack, blast_radius, file_graph, mutations, and stats"]
            ]
          }
        ]
      },
      {
        eyebrow: "Runtime",
        title: "Agentic loop and TUI",
        points: [
          "The agent follows an understand, plan, execute, observe, and report loop.",
          "Complex prompts can trigger plan mode before edits or command execution.",
          "The full-screen TUI includes a header bar, conversation view, input box, and status bar.",
          "The header displays model, provider, session name, token count, cost, theme, and trust status.",
          "Conversation history is scrollable and syntax-highlighted.",
          "Vim normal mode supports j/k scrolling, half-page movement, top/bottom jumps, and insert-mode return.",
          "Themes include dark, light, dracula, nord, and solarized."
        ]
      },
      {
        eyebrow: "Commands",
        title: "Slash commands and keyboard shortcuts",
        tables: [
          {
            title: "General commands",
            columns: ["Command", "Description"],
            rows: [
              ["/help", "Show full help overlay."],
              ["/clear", "Clear the conversation display."],
              ["/quit, /exit", "Exit forge-osh."],
              ["/new", "Start a fresh conversation."],
              ["/save", "Save session to disk."],
              ["/session", "Show current session info."]
            ]
          },
          {
            title: "Model, provider, and control commands",
            columns: ["Command", "Description"],
            rows: [
              ["/model", "Open model selector picker."],
              ["/model list", "List available models for the current provider."],
              ["/model <id>", "Switch directly to a model by ID."],
              ["/provider", "Open provider selector picker."],
              ["/keys", "Open the API key manager."],
              ["/trust", "Toggle trust mode."],
              ["/vim", "Toggle Vim normal mode."],
              ["/fast", "Toggle fast mode."],
              ["/compact", "Run LLM-based context compaction."],
              ["/undo", "Undo the last agent file mutation."],
              ["/effort <1-5>", "Set response effort level."],
              ["/copy", "Copy last assistant response to clipboard."],
              ["/permissions", "View or edit permission rules."]
            ]
          },
          {
            title: "Git, export, diagnostics, and graph commands",
            columns: ["Command", "Description"],
            rows: [
              ["/commit", "Generate an AI commit message for staged changes."],
              ["/diff [staged]", "Show git diff statistics."],
              ["/export [file.md]", "Export conversation to Markdown."],
              ["/cost", "Show token usage and cost breakdown."],
              ["/status", "Show provider, model, context percentage, and cost."],
              ["/doctor", "Run environment diagnostics."],
              ["/resume", "List saved sessions for resuming."],
              ["/forge-graph", "Build and save a semantic code graph artifact."],
              ["/forge-graph rebuild", "Force a full graph rebuild."],
              ["/forge-graph status", "Show node count, edge count, build time, and file count."],
              ["/forge-graph query <name>", "Search the graph for a symbol by name."],
              ["/forge-graph clear", "Remove artifact and unload graph."]
            ]
          },
          {
            title: "Keyboard shortcuts",
            columns: ["Shortcut", "Action"],
            rows: [
              ["Ctrl+C", "Cancel or interrupt the active agent turn."],
              ["Ctrl+D", "Exit on empty input."],
              ["Ctrl+L", "Clear conversation."],
              ["Esc", "Close modal or enter Vim mode."],
              ["Enter", "Submit prompt."],
              ["Shift+Enter", "Insert newline."],
              ["Ctrl+A / Ctrl+E", "Move cursor to start or end."],
              ["Ctrl+U / Ctrl+W", "Delete to start of line or previous word."],
              ["Ctrl+O / Ctrl+P / Ctrl+K", "Open model picker, provider picker, or API key manager."],
              ["Ctrl+B", "Show token and cost info."],
              ["Ctrl+R", "Cycle color theme."],
              ["Ctrl+T", "Toggle trust mode."],
              ["Ctrl+S / Ctrl+N / Ctrl+X", "Save session, create new session, or export session."],
              ["PgUp / PgDn / Mouse Wheel", "Scroll conversation."],
              ["Y / N / A / T", "Allow, deny, always allow, or enable trust mode in confirmation dialogs."]
            ]
          }
        ]
      },
      {
        eyebrow: "Safety",
        title: "Permissions, hooks, memory, sessions, context, and undo",
        points: [
          "Permission rules live in ~/.forge-osh/permissions.json and use wildcard patterns such as bash(git *) or edit_file(/src/*).",
          "Deny rules are checked first, allow rules second, then the user is prompted when no rule matches.",
          "ReadOnly tools never prompt, and trust mode bypasses prompts.",
          "Hooks are configured in ~/.forge-osh/hooks.json and can run before tools, after tools, at stop events, notifications, prompt submission, session start/end, and pre-compaction.",
          "Hook commands receive TOOL_NAME, TOOL_INPUT, TOOL_OUTPUT, and IS_ERROR environment variables where relevant.",
          "CLAUDE.md memory files are loaded from project scope, user scope, Claude-compatible directories, and parent directories.",
          "Sessions auto-save to ~/.local/share/forge-osh/sessions/ with provider, model, message history, timestamps, and token usage.",
          "Context compaction replaces older messages with dense summaries that preserve files touched, decisions, task state, errors, IDs, branch names, and next steps.",
          "Every write_file, edit_file, create_file, and delete_file call snapshots the previous state so /undo can restore or delete the affected file."
        ],
        code: [
          {
            title: "Permission examples",
            language: "text",
            code: `/permissions add bash(git *)
/permissions add bash(cargo *)
/permissions add read_file(*)
/permissions add edit_file(/src/*)
/permissions deny bash(rm -rf *)
/permissions remove <index>`
          },
          {
            title: "Hook configuration",
            language: "json",
            code: `{
  "PreToolUse": [
    { "matcher": "bash", "command": "echo 'Running: $TOOL_INPUT'" }
  ],
  "PostToolUse": [
    { "matcher": "*", "command": "echo 'Tool $TOOL_NAME done (error=$IS_ERROR)'" }
  ],
  "Stop": [
    { "command": "notify-send 'forge-osh task complete'" }
  ]
}`
          }
        ]
      },
      {
        eyebrow: "Graph",
        title: "Semantic code graph",
        body:
          "The optional forge-graph engine builds a semantic graph artifact for deterministic symbol lookup, dependency tracing, blast-radius analysis, file-level graph views, mutation tracking, and token-budgeted context packs.",
        points: [
          "The graph is built with a two-pass process: parallel source parsing first, then sequential node insertion and edge resolution.",
          "Three in-memory indices power lookup: fully-qualified symbol index, file index, and name index.",
          "Artifacts are serialized with Bincode as forge_graph_<dirname>.bin and reloaded automatically on launch.",
          "The graph is optional; if no artifact exists, Forge-OSH behaves like earlier versions."
        ],
        tables: [
          {
            title: "Supported languages",
            columns: ["Language", "Definitions parsed", "Imports", "Call graph"],
            rows: [
              ["Rust", "fn, struct, enum, trait, impl, macro_rules!, mod, type, static, const", "use statements", "Function and method calls"],
              ["Python", "def, class, async def", "import and from ... import", "Function calls"],
              ["JavaScript / TypeScript", "function, class, const/let/var arrows, interface, type, enum", "import and require()", "Function calls"],
              ["Go", "func, type struct, type interface, var, const", "import blocks", "Function calls"]
            ]
          },
          {
            title: "Node and edge types",
            columns: ["Kind", "Values"],
            rows: [
              ["Node kinds", "File, Module, Class, Struct, Enum, EnumVariant, Function, Method, Trait, Interface, Impl, GlobalVar, TypeAlias, Macro, Field, ExternalStub"],
              ["Edge types", "Contains, Defines, Calls, Instantiates, Returns, ReadsState, MutatesState, Implements, Inherits, Imports, ExternalDependency"]
            ]
          }
        ],
        code: [
          {
            title: "graph_query operations",
            language: "json",
            code: `{ "operation": "find", "target": "MyStruct" }
{ "operation": "context_pack", "target": "src/agent/loop.rs::AgentLoop::run", "token_budget": 4000 }
{ "operation": "blast_radius", "target": "src/graph/types.rs::GraphNode" }
{ "operation": "file_graph", "target": "src/tui/mod.rs" }
{ "operation": "mutations", "target": "scroll_top" }
{ "operation": "stats" }`
          }
        ]
      },
      {
        eyebrow: "Swarm",
        title: "Multithread swarm architecture",
        body:
          "Versions 1.0.10 through 1.0.13 introduced context preservation, better default model routing, graceful execution management, and an opt-in multithreaded swarm architecture inspired by enterprise agent harnesses.",
        points: [
          "The default mode remains the stable serial monolithic loop.",
          "Swarm mode is opt-in through /multithread or /mt.",
          "Prompts prefixed with @worker spawn parallel background agents.",
          "Each worker has isolated memory, independent conversation history, independent context windows, and Trust Mode authorization through the coordinator.",
          "The coordinator reports worker spawn, tool signals, completion, token usage, and failures back into the main TUI.",
          "/multithread status lists running workers with IDs and task descriptions.",
          "/multithread stop aborts all background workers."
        ],
        code: [
          {
            title: "Worker prompts",
            language: "text",
            code: `@worker Deep dive into the Albot Video RAG ingestion pipeline and document the extraction logic.
@worker Find out why the Windows build is complaining about missing MSYS2 dependencies.
@worker Write a python script to parse the nginx error logs in the /scratch directory.`
          }
        ]
      },
      {
        eyebrow: "Hardening",
        title: "v1.0.15 architecture and skills overhaul",
        body:
          "Version 1.0.15 is the largest hardening pass in Forge-OSH. It replaces earlier assumptions with permission modes, extended thinking, schema validation, cancellation tokens, concurrency-safe tools, a file-state cache, precise token counting, structured compaction, expanded hooks, a failure circuit breaker, fuzzy resume, and a full Skills subsystem.",
        tables: [
          {
            title: "Permission modes",
            columns: ["Mode", "Effect"],
            rows: [
              ["Default", "ReadOnly tools auto-allow; other actions prompt or follow persistent permission rules."],
              ["Plan", "ReadOnly tools only; mutating, shell, network, and destructive tools are denied."],
              ["AcceptEdits", "File mutations auto-approve; destructive, shell, and network tools still prompt."],
              ["Bypass", "All tools auto-approve, matching legacy trust mode."]
            ]
          },
          {
            title: "Core hardening upgrades",
            columns: ["Upgrade", "Behavior"],
            rows: [
              ["Extended thinking", "Anthropic thinking budget can be toggled with /think or /think <tokens>."],
              ["Tool executor rewrite", "Cancellation, JSON schema validation, permission evaluation, permission decisioning, and tracing happen before execution."],
              ["JSON schema validation", "Invalid tool inputs are rejected before touching disk or shell state."],
              ["Cancellation tokens", "Ctrl+C cancels in-flight provider streams, tools, and backoff sleeps while preserving the app session."],
              ["Tool concurrency", "Read-only and safe tools can execute in parallel while preserving result order."],
              ["File-state cache", "SHA-256 fingerprints detect external edits before write/edit operations."],
              ["Tiktoken counting", "cl100k_base token counts replace rough chars/4 estimates."],
              ["Compaction rewrite", "Structured summaries preserve files, decisions, commands, errors, identifiers, state, and next steps."],
              ["Expanded hooks", "Lifecycle now includes UserPromptSubmit, SessionStart, SessionEnd, and PreCompact."],
              ["Failure circuit-breaker", "Repeated identical tool failures trigger a recovery instruction instead of looping forever."],
              ["Fuzzy resume", "--resume can load latest, exact ID, ID prefix, or session name."]
            ]
          }
        ],
        code: [
          {
            title: "Mode commands",
            language: "text",
            code: `/mode <plan|accept-edits|bypass|default>
/plan
/accept-edits
/bypass
/default
/think
/think 8000`
          }
        ]
      },
      {
        eyebrow: "Skills",
        title: "Skills architecture and UX",
        body:
          "Skills are reusable named workflows stored as SKILL.md files with YAML frontmatter. They can be discovered by the agent, invoked manually, scoped to allowed tools, run inline, or fork into isolated workers.",
        points: [
          "Skill sources are project, user, and bundled, with project skills taking highest precedence.",
          "Project skills live in ./.claude/skills/<name>/SKILL.md.",
          "User skills live in ~/.forge-osh/skills/<name>/SKILL.md.",
          "Bundled skills are compiled into the binary and provide safe defaults.",
          "Bundled skills include debug, review, refactor, and project-memory.",
          "Inline skills inject the workflow into the current conversation and narrow tool access through a skill scope.",
          "Forked skills run in an isolated worker and return a Skill Result message.",
          "The system prompt can list skills so the LLM can invoke them through invoke_skill.",
          "The status bar shows the active skill and clears when the turn ends or /skill off is used.",
          "Tab completion supports skill names for /skill, /skill show, /skill edit, and /skill delete."
        ],
        tables: [
          {
            title: "Skill sources",
            columns: ["Source", "Location", "Precedence"],
            rows: [
              ["Project", "./.claude/skills/<name>/SKILL.md", "Highest"],
              ["User", "~/.forge-osh/skills/<name>/SKILL.md", "Middle"],
              ["Bundled", "Compiled into the binary", "Lowest"]
            ]
          },
          {
            title: "Skill commands",
            columns: ["Command", "Description"],
            rows: [
              ["/skills", "List all skills grouped by source."],
              ["/skill <name> [args]", "Invoke a skill."],
              ["/skill show <name>", "Show frontmatter summary and full body."],
              ["/skill new <name>", "Scaffold a project skill and open editor."],
              ["/skill edit <name>", "Open an existing skill in editor."],
              ["/skill delete <name>", "Remove a project skill directory."],
              ["/skill reload", "Re-scan all skill directories."],
              ["/skill path", "Print all skill search paths."],
              ["/skill off", "Clear the active skill scope."]
            ]
          }
        ],
        code: [
          {
            title: "Skill configuration",
            language: "toml",
            code: `[agent]
skills_enabled = true
include_skills_in_system_prompt = true
max_skill_listed_in_prompt = 12`
          }
        ]
      },
      {
        eyebrow: "Reference",
        title: "CLI, configuration, and environment reference",
        tables: [
          {
            title: "CLI command groups",
            columns: ["Group", "Commands"],
            rows: [
              ["Configuration and keys", "config keys set/list/remove, config set/get"],
              ["Models and providers", "providers list/test, models list, models set"],
              ["Sessions", "sessions list/export/delete, --session, --resume"],
              ["Execution modes", "single-task prompt, pipe mode, --trust, --no-tools, --verbose, --no-color, --theme"]
            ]
          },
          {
            title: "Environment variables",
            columns: ["Variable", "Description"],
            rows: [
              ["FORGE_PROVIDER", "Override default provider."],
              ["FORGE_MODEL", "Override default model."],
              ["FORGE_TRUST", "Set to 1 for trust mode."],
              ["FORGE_THEME", "Override UI theme."],
              ["FORGE_NO_COLOR", "Disable all colors."],
              ["FORGE_CONFIG_DIR", "Override config directory."],
              ["FORGE_DATA_DIR", "Override data directory."],
              ["ANTHROPIC_API_KEY", "Anthropic API key."],
              ["OPENAI_API_KEY", "OpenAI API key."],
              ["GEMINI_API_KEY", "Google Gemini API key."],
              ["GROQ_API_KEY", "Groq API key."],
              ["XAI_API_KEY", "xAI API key."],
              ["OPENROUTER_API_KEY", "OpenRouter API key."],
              ["MISTRAL_API_KEY", "Mistral API key."],
              ["DEEPSEEK_API_KEY", "DeepSeek API key."],
              ["TOGETHER_API_KEY", "Together AI API key."],
              ["FIREWORKS_API_KEY", "Fireworks API key."],
              ["PERPLEXITY_API_KEY", "Perplexity API key."],
              ["COHERE_API_KEY", "Cohere API key."]
            ]
          }
        ],
        code: [
          {
            title: "Configuration defaults",
            language: "toml",
            code: `[general]
theme = "dark"
default_provider = "anthropic"
trust_mode = false
auto_save_sessions = true
max_session_history = 100
verbose = false
system_prompt_extra = ""

[agent]
max_tokens = 8192
temperature = 0.7
max_tool_iterations = 50
planning_mode = true
auto_summarize_at = 0.8
max_output_per_tool = 50000

[tools.bash]
timeout_seconds = 30
max_timeout_seconds = 300
blocked_commands = ["rm -rf /", "sudo rm -rf /", "mkfs", ":(){:|:&};:"]

[tools.web]
enabled = true
timeout_seconds = 15
max_content_length = 50000

[ui]
show_token_count = true
show_cost = true
show_spinner = true
syntax_highlight = true
diff_before_apply = true
compact_tool_output = true
max_conversation_lines = 1000`
          }
        ]
      },
      {
        eyebrow: "Roadmap",
        title: "Future roadmap, contribution, and contact",
        points: [
          "Advanced code generation with AST-aware modifications, unified diff previews, and multi-file edit transactions.",
          "Token usage optimization through shipped semantic graph context packing, future prompt caching, and stronger summarization.",
          "Intelligent checkpoint structure with local state-machine checkpointing, timeline branching, and visual rollback.",
          "Next-generation TUI improvements such as split panes, file previews, floating modals, minimaps, and richer visualization.",
          "Future integrations for VS Code, Cursor, Antigravity, desktop companion workflows, and REST API server mode.",
          "Contributions should start with an issue for large changes, then run cargo fmt, cargo clippy, and cargo test before submission.",
          "Forge-OSH is MIT licensed and maintained by Om Shah."
        ]
      }
    ]
  }
};
