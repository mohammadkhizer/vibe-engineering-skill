# vibe-engineering-skill

> **Scaffolds MERN & AI-integration architectural enforcement, token efficiency rules, version control hygiene, sub-skills, and AGENTS.md governance into any repository.**

---

## 1. What Problem This Solves

AI coding agents frequently jump straight into writing code without inspecting existing architecture or schemas. In Node.js, MERN, and AI-integration codebases, this leads to missing database indexes, client-side API secret leaks, unhandled promise rejections, bloated context token usage, and unrequested scope creep.

`vibe-engineering-skill` scaffolds lightweight governance rules (`AGENTS.md`) and 6 modular sub-skills that force coding agents to perform technical research, manage token budgets, draft implementation plans, seek explicit user approval, and pass automated quality gates before modifying codebase files.

---

## 2. What This Tool Does NOT Do (Non-Goals)

- **Does NOT pollute `package.json`**: Zero runtime dependencies installed into your application codebase.
- **Does NOT lock you into a monolithic workflow**: All 6 sub-skills operate both as an orchestrated suite and as standalone skills.
- **Does NOT bypass user approval**: Code implementation is strictly blocked until the user approves the generated plan in `prompts/<name>.md`.
- **Does NOT force rigid build orders**: Dynamic roadmaps adjust automatically between micro features, full MERN stacks, and AI integrations.

---

## 3. Core Operating Rules (`vibe-engineering-skill`)

When installed, `vibe-engineering-skill` enforces 5 core discipline pillars across all AI agent interactions:

| Pillar | Rules Enforced |
|---|---|
| **1. Core Workflow** | Plan → Approve → Execute → Verify loop. Inspect files before proposing edits. Require explicit approval on non-trivial diffs. |
| **2. Token Management** | Check file summaries first; never re-fetch context in session; cap single-turn reads to 5 files; log LLM token budgets; set explicit `max_tokens`. |
| **3. Version Control** | Branch per fix/feature (`feat/`, `fix/`); Conventional Commits (`feat:`, `fix:`); update `CHANGELOG.md` & semver release tags. |
| **4. MERN Standards** | Mongoose schema validation & migration notes; thin Express controllers; colocate React components/styles/tests; strictly `.env` for secrets. |
| **5. Do's & Don'ts** | Ask before large changes; keep diffs minimal; track token spend; never commit secrets, `node_modules`, or `.env` files. |

---

## 4. Real Before / After Benchmark Example

| Feature Request | Output WITHOUT Skill (Plain Prompt) | Output WITH `vibe-engineering-skill` |
|---|---|---|
| *"Add user bookmarking tab to MERN dashboard"* | • Writes 6 frontend components immediately.<br>• Installs an unneeded external NPM helper.<br>• Omits MongoDB index on `user_id` + `post_id`.<br>• Fails silently on duplicate bookmarks. | • Inspects Mongoose schema & existing controllers.<br>• Drafts plan at `prompts/bookmark-tab.md`.<br>• Requests user approval before code write.<br>• Implements atomic `$addToSet` with index.<br>• Executes `quality-gate` tests. |

---

## 4. Quick Start & Usage

### Step 1: Scaffolding into Your Repository

Run the CLI at your project root to initialize governance rules and modular sub-skills:

```bash
npx vibe-engineering-skill
```

### Command-Line Options

| Command / Flag | Purpose |
|---|---|
| `npx vibe-engineering-skill` | Standard interactive wizard. Asks format preference (Claude, Cursor, Codex) and scaffolds skills + root `AGENTS.md`. |
| `npx vibe-engineering-skill --update` | Runs the **Safe Update Engine**. Compares installed skills against latest template versions, shows line-by-line diffs, and prompts before overwriting. |
| `npx vibe-engineering-skill --lite` | Installs skills into `.agents/skills` without creating or modifying root `AGENTS.md`. |
| `npx vibe-engineering-skill --minimal` | Installs master `vibe-engineering-skill` and starter `AGENTS.md` only. |
| `npx vibe-engineering-skill --help`, `-h` | Displays CLI usage summary and available flags. |

---

### Step 2: Multi-Agent & Target IDE Formats

During interactive setup, choose the format matching your AI coding agent:
- **Claude Code / Universal Format**: Exports skills to `.agents/skills/<skill-name>/SKILL.md`.
- **Cursor IDE Format**: Exports rules to `.cursor/rules/<skill-name>.mdc`.
- **Codex / Custom Format**: Exports skills to `.codex/skills/<skill-name>/SKILL.md`.

---

### Step 3: The 6-Step AI Governance Workflow

Once installed, your AI coding agent adheres to a strict 6-step lifecycle for all non-trivial feature requests and refactors:

1. **Governance Check (`AGENTS.md`)**:
   - The agent reads `AGENTS.md` and appropriate sub-skills before writing any code.
2. **Technical Research (`research-before-design`)**:
   - The agent inspects existing schemas (e.g. Mongoose models), API routes, and dependencies to map architecture and prevent breaking changes.
3. **Implementation Plan & Approval (`prompts/<feature>.md`)**:
   - The agent writes a detailed prompt plan in `prompts/<feature-name>.md` and asks:
     > *"I prepared the implementation prompt at prompts/<feature-name>.md. Good to execute?"*
   - Code editing is strictly blocked until you respond with explicit approval.
4. **Controlled Implementation (`vibe-engineering-skill` & `scope-guard`)**:
   - Upon approval, the agent executes code changes strictly scoped to the plan. Out-of-scope refactoring or unrequested dependencies are automatically blocked.
5. **Automated Verification (`quality-gate`)**:
   - The agent runs tests, lint checks, type checks, and build validation commands before marking the task complete.
6. **Retrospective & Hardening (`post-mortem` & `gap-analysis`)**:
   - The agent captures architectural discoveries into project docs (ADRs) and audits potential edge cases or test coverage gaps.

---

### Step 4: Included Modular Skills

1. **`vibe-engineering-skill`**: Master operating rules for AI coding agents covering workflow discipline, token efficiency, version control hygiene, and MERN standards.
2. **`research-before-design`**: Architectural research and dependency mapping before design/coding.
3. **`quality-gate`**: Mandatory lint, type-check, build, and test verification before completion.
4. **`scope-guard`**: Out-of-scope protection and anti-creep enforcement.
5. **`post-mortem`**: Post-build retrospectives and architectural decision records (ADRs).
6. **`gap-analysis`**: Code audits for unhandled errors, missing indexes, and test gaps.

---

## 5. Development & Testing

Run tests locally:
```bash
npm test
```

Execute local CLI in non-interactive lite mode:
```bash
node bin/index.js --lite
```

---

### Step 5: Practical Usage Scenarios

#### Scenario A: Adding a New MERN Endpoint
1. Prompt your AI agent: *"Add POST /api/v1/bookmarks endpoint with rate limiting."*
2. The agent reads `AGENTS.md` and `research-before-design` to check Mongoose models and Express router setup.
3. The agent generates `prompts/add-bookmarks-endpoint.md` and pauses for your approval.
4. Once approved, the agent implements the controller, adds database indexes, runs `npm test`, and presents exact manual test steps.

#### Scenario B: Upgrading Installed Skills Safely
When template skills are updated in the package:
1. Run `npx vibe-engineering-skill --update`.
2. The CLI detects local modifications and displays a line-by-line diff preview (`+Added` / `-Removed`).
3. Confirm `y/N` per skill to accept or skip updates selectively.

---

### Step 6: Customizing Governance Rules (`AGENTS.md`)

Tailor the root `AGENTS.md` to enforce project-specific boundaries:
- **Product Scope**: List explicit *In scope* and *Out of scope* boundaries to prevent feature creep.
- **Tech Stack**: Specify allowed libraries and forbidden alternatives.
- **Data Models**: Detail required fields and constraints before records are persisted.
- **API Contracts**: Define explicit HTTP route paths and response schemas.
- **Security Protocols**: Mark server-side secrets and privileged operations off-limits to browser code.

---

## ⚠️ Repository Hygiene & GitHub Metadata Flag

*Note: GitHub CLI/API cannot set repository topics and description automatically without administrative OAuth scopes. Please visit your GitHub repository settings on github.com and configure:*

- **Repository Name**: `vibe-engineering-skill`
- **Repository Description**: `Operating rules & sub-skill CLI scaffolding for Node.js, MERN & AI integration codebases.`
- **Topics**: `claude-skills`, `ai-agents`, `mern`, `vibe-engineering-skill`, `stack-guard`, `developer-tools`, `scaffolding`, `code-governance`
