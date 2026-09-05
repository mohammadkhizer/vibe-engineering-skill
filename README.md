# create-stack-guard-skill (formerly create-vibe-engineering-skill)

> **Scaffolds MERN & Django architectural enforcement, modular sub-skills, and AGENTS.md governance into any repository.**

---

## 1. What Problem This Solves

AI coding agents frequently jump straight into writing code without inspecting existing architecture or schemas. In full-stack MERN and Django applications, this leads to missing database indexes, client-side API secret leaks, unhandled promise rejections, bloated dependencies, and unrequested scope creep. `create-stack-guard-skill` scaffolds lightweight governance rules (`AGENTS.md`) and 6 modular sub-skills that force coding agents to perform technical research, draft implementation plans, seek explicit user approval, and pass automated quality gates before modifying codebase files.

---

## 2. What This Tool Does NOT Do (Non-Goals)

- **Does NOT pollute `package.json`**: Zero runtime dependencies installed into your application codebase.
- **Does NOT lock you into a monolithic workflow**: All 6 sub-skills operate both as an orchestrated suite and as standalone skills.
- **Does NOT bypass user approval**: Code implementation is strictly blocked until the user approves the generated plan in `prompts/<name>.md`.
- **Does NOT force rigid build orders**: Dynamic roadmaps adjust automatically between micro features, full MERN stacks, and Django projects.

---

## 3. Real Before / After Benchmark Example

| Feature Request | Output WITHOUT Skill (Plain Prompt) | Output WITH `create-stack-guard-skill` |
|---|---|---|
| *"Add user bookmarking tab to MERN dashboard"* | • Writes 6 frontend components immediately.<br>• Installs an unneeded external NPM helper.<br>• Omits MongoDB index on `user_id` + `post_id`.<br>• Fails silently on duplicate bookmarks. | • Inspects Mongoose schema & existing controllers.<br>• Drafts plan at `prompts/bookmark-tab.md`.<br>• Requests user approval before code write.<br>• Implements atomic `$addToSet` with index.<br>• Executes `quality-gate` tests. |

---

## 4. Quick Start & Usage

### Initializing in Any Repository
```bash
npx create-stack-guard-skill
# or legacy alias:
npx create-vibe-engineering-skill
```

### Safe Update Engine (Diff Warning)
Update your installed skills to the latest template version without clobbering local modifications:
```bash
npx create-stack-guard-skill --update
```

### Pure Skill Installation (Lite Mode)
Scaffold skills without modifying or creating root `AGENTS.md`:
```bash
npx create-stack-guard-skill --lite
```

---

## 5. Multi-Agent & Format Support

The CLI interactively exports skills in your agent's preferred format:
- **Claude / Universal**: `.agents/skills/<skill-name>/SKILL.md`
- **Cursor IDE**: `.cursor/rules/<skill-name>.mdc`
- **Codex / Custom**: `.codex/skills/<skill-name>/SKILL.md`

---

## 6. Included Modular Skills

1. **`vibe-engineering`**: Master orchestrator enforcing AGENTS.md workflow and plan approval gates.
2. **`research-before-design`**: Architectural research and dependency mapping.
3. **`quality-gate`**: Mandatory lint, type-check, build, and test verification.
4. **`scope-guard`**: Out-of-scope protection and anti-creep enforcement.
5. **`post-mortem`**: Post-build retrospectives and ADR documentation.
6. **`gap-analysis`**: Code audits for unhandled errors, missing indexes, and test gaps.

---

## ⚠️ Repository Hygiene & GitHub Metadata Flag

*Note: GitHub CLI/API cannot set repository topics and description automatically without administrative OAuth scopes. Please visit your GitHub repository settings on github.com and configure:*

- **Repository Description**: `Opinionated workflow & sub-skill CLI scaffolding for full-stack MERN & Django AI development.`
- **Topics**: `claude-skills`, `ai-agents`, `mern`, `django`, `vibe-engineering`, `stack-guard`, `developer-tools`, `scaffolding`, `code-governance`
