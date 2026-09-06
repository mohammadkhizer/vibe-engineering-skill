# Implementation Plan: Add Detailed "How to Use" Section to README.md

## Overview
This plan details the addition of a comprehensive, highly detailed "How to Use" section to `README.md`. The section will walk developers through installation, interactive CLI options, AI agent governance workflow (from research to plan approval to quality verification), real-world scenario examples, and project-level customization of `AGENTS.md`.

---

## Proposed Changes

### `README.md`
Expand Section 4 ("Quick Start & Usage") or replace it with a comprehensive, step-by-step **How to Use** guide structured into clear subsections:

#### 1. CLI Scaffolding & Setup Workflow
- **Interactive Setup (`npx vibe-engineering-skill`)**:
  - Format Selection: Claude/Universal (`.agents/skills`), Cursor IDE (`.cursor/rules`), Codex (`.codex/skills`).
  - Installation Modes: Standard (Skills + root `AGENTS.md`), Minimal (Master skill + `AGENTS.md`), Lite (`--lite` for skills only).
- **CLI Options Reference**:
  - `npx vibe-engineering-skill` (Default interactive setup)
  - `npx vibe-engineering-skill --lite` (Install skills without modifying root `AGENTS.md`)
  - `npx vibe-engineering-skill --minimal` (Install master skill and starter `AGENTS.md` only)
  - `npx vibe-engineering-skill --update` (Run diff engine to update installed skills safely without overwriting local modifications)
  - `npx vibe-engineering-skill --help` (View CLI flags and usage)

#### 2. The 6-Step AI Governance Workflow
Detailed breakdown of how developers interact with AI agents (Claude, Cursor, Codex) using `vibe-engineering-skill`:
1. **Prompting the Agent**: Pointing the agent to read `AGENTS.md` and relevant skills.
2. **Research & Mapping (`research-before-design`)**: Agent inspects codebase architecture, Mongoose schemas, API routes, and dependencies before proposing changes.
3. **Plan Generation & Human Approval (`prompts/<feature>.md`)**: Agent writes a dedicated implementation plan and asks for user approval (`"Good to execute?"`).
4. **Controlled Implementation (`vibe-engineering-skill` & `scope-guard`)**: Agent writes code strictly according to approved scope; out-of-scope features are blocked.
5. **Quality Verification (`quality-gate`)**: Agent executes linting, type-checking, building, and automated tests.
6. **Retrospective & Auditing (`post-mortem` & `gap-analysis`)**: Documenting architectural ADRs and checking edge cases.

#### 3. Practical Usage Examples & Scenarios
- **Scenario A: Adding a MERN Feature** (e.g., User Authentication or API Endpoint).
- **Scenario B: Cursor IDE Integration** (`.cursor/rules` format and `.mdc` files).
- **Scenario C: Upgrading Installed Skills** (Handling diff prompts with `--update`).

#### 4. Team Customization & Best Practices
- Tailoring `AGENTS.md` (defining tech stack, in-scope/out-of-scope rules, data models, and API contracts).
- Version controlling `prompts/` directory for transparent AI development history.

---

## Verification Plan
1. Validate Markdown formatting and structure of `README.md`.
2. Ensure links and file references render cleanly.
3. Verify all CLI flags mentioned (`--update`, `--lite`, `--minimal`, `--help`) match `src/cli.js`.
