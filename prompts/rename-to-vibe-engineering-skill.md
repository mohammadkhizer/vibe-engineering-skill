# Implementation Plan: Rename Skill Package to `vibe-engineering-skill`

This plan outlines all changes required to rename the package, binary CLI commands, skill directories, skill definitions, documentation, and references across the codebase to `vibe-engineering-skill`.

## Manual Tasks & Recommendations (User Action Required)

### 1. Git Remote / GitHub Repository Rename (Manual Task)
- **Action on GitHub**: Go to repository Settings on GitHub.com and rename the repo to `vibe-engineering-skill`.
- **Local Git Remote Update**: Run:
  ```bash
  git remote set-url origin <new-repo-url>
  ```

### 2. npm Publishing Strategy
- **Recommendation (Option A)**: Publish `vibe-engineering-skill` as a fresh npm package. If `create-vibe-engineering-skill` or `create-stack-guard-skill` were previously published on npm, deprecate the old package using:
  ```bash
  npm deprecate create-vibe-engineering-skill "Package renamed to vibe-engineering-skill. Please use npx vibe-engineering-skill instead."
  ```
- **Alternative (Option B)**: Keep `create-vibe-engineering-skill` on npm as a thin wrapper/stub package that invokes `vibe-engineering-skill` via `npx` or dependency re-export.

---

## Detailed File & Occurrence Inventory

### 1. `package.json`
- **`name`**: Change `"create-stack-guard-skill"` → `"vibe-engineering-skill"`
- **`bin`**: Update keys to map binary command `vibe-engineering-skill`:
  ```json
  "bin": {
    "vibe-engineering-skill": "bin/index.js",
    "create-vibe-engineering-skill": "bin/index.js",
    "create-stack-guard-skill": "bin/index.js"
  }
  ```
- **`keywords`**: Replace `"vibe-engineering"` with `"vibe-engineering-skill"`
- **`description`**: Update description to reference `vibe-engineering-skill`

### 2. File & Directory Renames (Folder Structure)
- Rename `.agents/skills/vibe-engineering/` → `.agents/skills/vibe-engineering-skill/`
- Rename `templates/skills/vibe-engineering/` → `templates/skills/vibe-engineering-skill/`

### 3. Skill Metadata & Content (`SKILL.md` files)
- **`templates/skills/vibe-engineering/SKILL.md`** (moving to `templates/skills/vibe-engineering-skill/SKILL.md`):
  - Line 2: `name: vibe-engineering` → `name: vibe-engineering-skill`
  - Line 6: `# Vibe Engineering (Stack-Guard Orchestrator)` → `# Vibe Engineering Skill`
  - Line 18: `@.agents/skills/vibe-engineering` → `@.agents/skills/vibe-engineering-skill`
  - Line 18: `/vibe-engineering` → `/vibe-engineering-skill`
- **`.agents/skills/vibe-engineering/SKILL.md`** (moving to `.agents/skills/vibe-engineering-skill/SKILL.md`):
  - Line 2: `name: vibe-engineering` → `name: vibe-engineering-skill`
- **`templates/SKILL.md`**:
  - Line 2: `name: vibe-engineering` → `name: vibe-engineering-skill`

### 4. CLI Source Code (`src/cli.js`)
- Line 14: Title message `🚀 vibe-engineering-skill CLI v2.0.0`
- Line 16: Usage string `npx vibe-engineering-skill [options]`
- Line 25: Banner log `🚀 Initializing Vibe Engineering Skill Scaffolding (v2.0.0)...`
- Line 34: Fallback skill array default `['vibe-engineering-skill']`
- Line 116: Success log `🎉 Success! Vibe Engineering skill suite configured.`

### 5. Documentation & Meta Files
- **`README.md`**:
  - Line 1: Header `# vibe-engineering-skill`
  - Line 9, 24, 34, 42, 48: Update package name and CLI invocation examples (`npx vibe-engineering-skill`)
  - Line 64: Update skill list item to `vibe-engineering-skill`
  - Line 78: Update topic tags
- **`CONTRIBUTING.md`**: Line 3 update package name reference
- **`CHANGELOG.md`**: Update titles and log entries
- **`docs/BACKLOG.md`**, **`docs/walkthrough.md`**, **`docs/index.html`**, **`docs/report.html`**:
  - Update references, file paths, and tree structures from `vibe-engineering` / `create-stack-guard-skill` to `vibe-engineering-skill`

### 6. `package-lock.json`
- Regenerate `package-lock.json` cleanly using `npm install --package-lock-only` (no manual hand-editing).

---

## Verification Plan
1. Test CLI execution locally (`node bin/index.js --help`).
2. Run test installation (`node bin/index.js --lite`).
3. Verify directory creation under `.agents/skills/vibe-engineering-skill/SKILL.md`.
4. Verify `package-lock.json` consistency.
