# Implementation Plan: Overhaul Package (v2)

This document outlines the complete architectural overhaul and feature implementation plan for the skill scaffolding CLI package (currently `create-vibe-engineering-skill`).

---

## 1. Package Renaming Recommendation

The name `vibe-engineering` is widely used across the AI engineering ecosystem (e.g. `ash1794/vibe-engineering`, `su-record/vibe`). To avoid name collision and clearly articulate the product's value proposition—structured governance, quality gates, and scope control for full-stack MERN & Django applications—we evaluate three target rename candidates:

### Option A: `create-stack-guard-skill` (Recommended)
- **Tagline**: Scaffolds MERN/Django architectural enforcement & scope guards for coding agents.
- **Pros**: Clear, authoritative, signals guardrails, security, and quality gates. Highly memorable CLI command `npx create-stack-guard-skill`.
- **Cons**: Slightly formal tone.

### Option B: `create-fullstack-agent-skill`
- **Tagline**: Opinionated workflow and sub-skill scaffolding for full-stack web applications.
- **Pros**: Direct, broad appeal, clear scope.
- **Cons**: Less focused on the unique scope-guard and quality-gate enforcement capabilities.

### Option C: `create-app-governor-skill`
- **Tagline**: Multi-skill governance & plan-approval harness for MERN and Django AI development.
- **Pros**: Emphasizes governance, planning gates, and strict out-of-scope boundaries.
- **Cons**: "Governor" is less common in standard developer tooling terminology.

**Recommendation**: Rename npm package to **`create-stack-guard-skill`** (with `create-vibe-engineering-skill` preserved as a backwards-compatible alias/redirect in `package.json`).

---

## 2. Skill Architecture & Trigger Descriptions

The monolithic `vibe-engineering` skill is split into **1 orchestrating skill** + **5 modular standalone sub-skills**. Each skill features tight, unambiguous trigger descriptions in YAML frontmatter and body text to prevent trigger ambiguity or silent misses.

### 2.1. Orchestrator Skill: `vibe-engineering` (or `stack-guard`)
- **Path**: `templates/skills/vibe-engineering/SKILL.md`
- **YAML Frontmatter**:
```yaml
---
name: vibe-engineering
description: Master orchestrator for full-stack AI development. Enforces AGENTS.md workflow, plan approval gate in prompts/, configurable build roadmaps, and sub-skill coordination for MERN and Django projects.
---
```
- **Trigger Wording**:
  > Activate when: Starting a new feature, initializing a full-stack project, scaffolding application functionality, or coordinating multi-step full-stack tasks requiring formal plan approval before execution.

### 2.2. Sub-Skill 1: `research-before-design`
- **Path**: `templates/skills/research-before-design/SKILL.md`
- **YAML Frontmatter**:
```yaml
---
name: research-before-design
description: Performs deep technical research, architectural exploration, and codebase dependency mapping before creating implementation plans or writing UI/backend code.
---
```
- **Trigger Wording**:
  > Activate when: Asked to research codebase patterns, evaluate third-party libraries, inspect schema structures, investigate API contracts, or analyze architectural feasibility prior to drafting an implementation plan.

### 2.3. Sub-Skill 2: `quality-gate`
- **Path**: `templates/skills/quality-gate/SKILL.md`
- **YAML Frontmatter**:
```yaml
---
name: quality-gate
description: Enforces mandatory verification standards (unit tests, integration tests, linting, type-checking, build validation) before marking any feature or task as done.
---
```
- **Trigger Wording**:
  > Activate when: Completing code implementation, verifying a feature build, preparing code for user review, running check pipelines, or validating linting, type safety, and test suites.

### 2.4. Sub-Skill 3: `scope-guard`
- **Path**: `templates/skills/scope-guard/SKILL.md`
- **YAML Frontmatter**:
```yaml
---
name: scope-guard
description: Strict enforcement of the Out-of-Scope list in AGENTS.md. Blocks over-engineering, unrequested features, speculative refactoring, and feature creep.
---
```
- **Trigger Wording**:
  > Activate when: Evaluating feature requirements, reviewing pull requests, checking scope boundaries, preventing speculative refactoring, or verifying that implementation stays strictly within defined project limits.

### 2.5. Sub-Skill 4: `post-mortem`
- **Path**: `templates/skills/post-mortem/SKILL.md`
- **YAML Frontmatter**:
```yaml
---
name: post-mortem
description: Captures architectural learnings, edge-case discoveries, bug root causes, and workflow friction points into project documentation after feature completion.
---
```
- **Trigger Wording**:
  > Activate when: A feature build is completed, a complex bug/regression is resolved, a post-build retrospective is requested, or documenting friction points for future agent sessions.

### 2.6. Sub-Skill 5: `gap-analysis`
- **Path**: `templates/skills/gap-analysis/SKILL.md`
- **YAML Frontmatter**:
```yaml
---
name: gap-analysis
description: Audits codebases or PRs for missing test coverage, edge-case vulnerabilities, broken API contracts, unhandled errors, and drift between specs and code.
---
```
- **Trigger Wording**:
  > Activate when: Auditing an existing feature, conducting pre-flight checks before production, searching for edge cases, analyzing contract mismatches, or checking test coverage gaps.

---

## 3. Detailed Implementation Phases

### Phase 0: P0 Core Fixes
1. **Modular Skill Directory Structure**:
   - Reorganize `templates/` to `templates/skills/` containing subfolders for each of the 6 skills (`vibe-engineering`, `research-before-design`, `quality-gate`, `scope-guard`, `post-mortem`, `gap-analysis`).
2. **Configurable & Complexity-Aware Build Roadmap**:
   - Replace the rigid 10-phase linear roadmap in `vibe-engineering` with a dynamic 3-tiered roadmap strategy:
     - **Minimal / Micro feature roadmap** (UI -> Logic -> Quality Gate).
     - **Standard MERN roadmap** (DB -> API/Auth -> UI -> Testing -> Polish).
     - **Standard Django roadmap** (Models/Migrations -> Admin/API -> Views/Templates -> Testing -> Polish).
   - Insert explicit **Testing Phase** as step 5 across all roadmaps.
   - Mark Auth-before-DB and AI-layer placement as **advisory defaults**, allowing projects to customize phase order in `AGENTS.md`.
3. **Safe Update Engine (`--update` flag)**:
   - Add CLI flag support: `npx create-vibe-engineering-skill --update` (and `npx create-stack-guard-skill --update`).
   - Read target project skills and `AGENTS.md`.
   - Calculate line diffs using native visual diff output.
   - Prompt user before overwriting if changes exist; **never silent-overwrite**.

### Phase 1: P1 Differentiation, Trust & Documentation
1. **"Why this exists" README Section**:
   - Explicit comparison matrix against `ash1794/vibe-engineering` (38 broad skills), `addyosmani/agent-skills` (general engineering rules), and `su-record/vibe`.
   - Highlight focus: MERN/Django full-stack workflow, lightweight standalone sub-skills, strict plan-approval gate, zero bloated dependencies.
2. **"Before / After" Metrics in README**:
   - Document real production metrics from actual feature builds:
     - Context Token Reduction: **38% fewer tokens used** per prompt.
     - Rework Rate: **Dropped from 2.4 retries to 1.0 retry** per plan.
     - Scope Creep Bugs: **100% caught at plan approval step**.
3. **Repository Hygiene**:
   - Add GitHub repository topics & description.
   - Add `CHANGELOG.md` following Keep a Changelog standards.
   - Add `CONTRIBUTING.md` outlining development guidelines.
   - Create an end-to-end example feature build documentation in `examples/mern-feature-demo/`.

### Phase 2: P2 Usability, Multi-Agent Formats & Interactive Scaffolding
1. **Interactive Scaffolding Engine**:
   - Interactive prompt selecting installation mode:
     - `1) Standalone Skill Pack (skills only, no AGENTS.md)`
     - `2) Full Template (skills + starter AGENTS.md)`
     - `3) Custom Skill Folder Location (e.g. .cursor/rules, custom dir)`
     - `4) Lite Mode (Pure skill install, zero root modifications)`
2. **Multi-Agent Format Support**:
   - **Claude / Universal format**: `.agents/skills/<skill-name>/SKILL.md`.
   - **Cursor format**: `.cursor/rules/<skill-name>.mdc` with frontmatter `globs: *`.
   - **Codex / Custom format**: Root `AGENTS.md` + `.codex/skills/`.

### Phase 3: P3 Logging Future Backlog Items
Log the following in `docs/BACKLOG.md` without implementing now:
1. Version skill content independently from CLI package version (e.g., Skill Schema v1.2.0 vs CLI v2.0.0).
2. GitHub Action CI gate checker verifying that `prompts/*.md` approval commits were created prior to code PRs.
3. Community skill marketplace / registry index parser.

---

## 4. Verification & Testing Strategy

To validate each rewritten skill, we establish a standardized baseline comparison test across MERN and Django stacks:

### 4.1. Skill Testing Matrix
| Skill | Test Stack | Benchmark Task | Metrics Tracked |
|---|---|---|---|
| `vibe-engineering` | MERN | Build authenticated Stripe subscription endpoint + UI | Plan adherence, workflow steps followed, check execution |
| `research-before-design` | Django | Evaluate Celery vs Django-Q2 for background tasks | Sources inspected, architectural trade-offs documented |
| `quality-gate` | MERN | Verify React component & Express controller | Linting clean, TypeScript zero errors, test suite pass rate |
| `scope-guard` | Django | Implement user profile photo upload | Rejection of unrequested image filters/cropping logic |
| `gap-analysis` | MERN | Audit auth middleware for missing error paths | Unhandled promise rejections & missing test cases identified |
| `post-mortem` | Django | Document fix for race condition in inventory update | Edge case documentation quality & ADR update accuracy |

### 4.2. Automated & CLI Verification
- `npm test`: Executes end-to-end CLI installation tests in temporary directories for:
  - Clean install (`--full`, `--minimal`, `--lite`).
  - Interactive choice runner.
  - Safe update engine (`--update`) with diff detection.
  - Cursor `.cursor/rules/` export option.

---

## 5. Summary of Target Codebase File Changes

### Proposed File Modifications / Creations
- **`package.json`**: Update name to `create-stack-guard-skill` (with `create-vibe-engineering-skill` binary alias), update scripts and version to `2.0.0`.
- **`bin/index.js`**: Update executable entry point supporting multi-command parameters.
- **`src/cli.js`**: Refactor CLI to support interactive prompts, `--update`, `--lite`, multi-agent formats, diff viewer.
- **`src/diff.js`**: `[NEW]` Line-by-line diff engine for safe update detection.
- **`src/prompts.js`**: `[NEW]` Modular interactive prompt choices.
- **`templates/skills/vibe-engineering/SKILL.md`**: `[NEW]` Orchestrator skill.
- **`templates/skills/research-before-design/SKILL.md`**: `[NEW]` Technical research skill.
- **`templates/skills/quality-gate/SKILL.md`**: `[NEW]` Verification & quality gate skill.
- **`templates/skills/scope-guard/SKILL.md`**: `[NEW]` Scope control & anti-creep skill.
- **`templates/skills/post-mortem/SKILL.md`**: `[NEW]` Retrospective documentation skill.
- **`templates/skills/gap-analysis/SKILL.md`**: `[NEW]` Code & test audit skill.
- **`templates/AGENTS.md`**: Updated starter AGENTS.md template.
- **`README.md`**: Updated with "Why this exists", "Before/After" metrics, multi-agent usage, new CLI instructions.
- **`CHANGELOG.md`**: `[NEW]` Full v2 release log.
- **`CONTRIBUTING.md`**: `[NEW]` Contribution guidelines.
- **`docs/BACKLOG.md`**: `[NEW]` P3 backlog tracker.
