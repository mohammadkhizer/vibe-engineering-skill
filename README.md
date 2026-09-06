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

## 5. Quick Start & Usage

### Initializing in Any Repository
```bash
npx vibe-engineering-skill
# or legacy aliases:
npx create-vibe-engineering-skill
npx create-stack-guard-skill
```

### Command-Line Options

| Flag | Purpose |
|---|---|
| `(none)` | Interactive prompt for setup mode (Full, Skills-only, Lite, or Cursor export) |
| `--update` | Safely update installed skills with line-by-line diff verification before overwriting |
| `--lite` | Install skills only into `.agents/skills` without modifying or creating root `AGENTS.md` |
| `--minimal` | Scaffold master skill + starter `AGENTS.md` |
| `--help`, `-h` | Display CLI help menu |

---

## 6. Multi-Agent & Format Export

The CLI interactively exports skills in your preferred AI agent format:

- **Claude Code / Universal Agent**: `.agents/skills/<skill-name>/SKILL.md`
- **Cursor IDE**: `.cursor/rules/<skill-name>.mdc`
- **Codex / Custom**: `.codex/skills/<skill-name>/SKILL.md`

---

## 7. Included Modular Sub-Skills

1. **`vibe-engineering-skill`**: Operating rules for AI coding agents covering workflow discipline, token efficiency, version control hygiene, and MERN standards.
2. **`research-before-design`**: Architectural research and dependency mapping before design or code execution.
3. **`quality-gate`**: Mandatory linting, type-checking, build validation, and automated test verification.
4. **`scope-guard`**: Out-of-scope protection and anti-creep enforcement based on `AGENTS.md`.
5. **`post-mortem`**: Post-build retrospectives, root-cause analysis, and ADR documentation.
6. **`gap-analysis`**: Code audits for unhandled promise rejections, missing database indexes, and test gaps.

---

## 8. Development & Testing

Run tests locally:
```bash
npm test
```

Execute local CLI in non-interactive lite mode:
```bash
node bin/index.js --lite
```

---

## ⚠️ Repository Hygiene & GitHub Metadata Flag

*Note: GitHub CLI/API cannot set repository topics and description automatically without administrative OAuth scopes. Please visit your GitHub repository settings on github.com and configure:*

- **Repository Name**: `vibe-engineering-skill`
- **Repository Description**: `Operating rules & sub-skill CLI scaffolding for Node.js, MERN & AI integration codebases.`
- **Topics**: `claude-skills`, `ai-agents`, `mern`, `vibe-engineering-skill`, `stack-guard`, `developer-tools`, `scaffolding`, `code-governance`
