---
name: vibe-engineering
description: Master workflow orchestrator for full-stack MERN and Django applications. Enforces AGENTS.md workflow, mandatory plan-approval gate in prompts/<name>.md, dynamic build roadmaps, and sub-skill coordination.
---

# Vibe Engineering (Stack-Guard Orchestrator)

This skill defines the default AI-assisted development workflow for building features, initializing codebases, and implementing core application functionality in MERN and Django projects.

---

## 1. Trigger Conditions

### Activate ONLY when:
- Building a new feature in a MERN (MongoDB, Express, React, Node) or Django application.
- Initializing a new project codebase or adding major application modules.
- Implementing core or secondary application functionality requiring multi-step file changes.
- Explicitly invoked via `@.agents/skills/vibe-engineering` or `/vibe-engineering`.

### DO NOT Activate when (Explicit Negative Examples):
- **Pure Q&A or Concepts**: Requests like "How does JWT auth work?", "Explain Django signals", or "What is useEffect?".
- **Single-Line / Trivial Edits**: Fixing a syntax typo, updating README, or tweaking CSS padding.
- **Unrelated Stacks**: Building iOS Swift apps, Rust CLI binaries, Flutter UI, or Go microservices (unless AGENTS.md explicitly overrides).
- **Standalone Sub-Tasks**: Code audits (use `gap-analysis`), post-mortems (use `post-mortem`), or research spikes (use `research-before-design`).

---

## 2. Core Workflow

Follow these steps in strict numerical order:

1. **Read AGENTS.md**: Inspect `AGENTS.md` at project root for constraints and out-of-scope lists.
2. **Read Sub-Skills**: Activate relevant sub-skills (`research-before-design`, `quality-gate`, `scope-guard`, `gap-analysis`, `post-mortem`) based on task type.
3. **Inspect Existing Code**: Search and view relevant code before writing any new code.
4. **Clarify Ambiguity**: Ask a focused question ONLY if there is blocking ambiguity.
5. **Write Implementation Plan**: Create a detailed plan saved at `prompts/<name>.md`.
6. **Seek Approval**: Request explicit user approval prior to code modification:
   > "I prepared the implementation prompt at prompts/<name>.md. Good to execute?"
7. **Implement**: Execute code changes ONLY after explicit approval.
8. **Run Quality Gate**: Run automated linting, type-checking, and test suites (`quality-gate`).
9. **Share Test Steps**: Provide exact, reproducible manual test steps.

---

## 3. Dynamic Build-Order Roadmaps

Choose the roadmap matching your project complexity:

### A. Micro / Minimal Feature Roadmap (1-3 files)
1. **API / Controller Logic**: Route definitions and request handlers.
2. **UI Component / View**: Render layout and state.
3. **Quality Gate**: Linting, type-check, and unit test pass.

### B. Standard MERN Feature Roadmap
1. **Schema & Database Model**: MongoDB Mongoose schema design and indexes.
2. **API & Auth Middleware**: Express controllers, routes, validation, and JWT/session middleware.
3. **Frontend Services & State**: API client calls, custom hooks, state management.
4. **UI Components & Layout**: React views, forms, error boundaries, styling.
5. **Testing & Quality Gate**: Jest/Vitest unit tests, integration tests, linting.
6. **Polish & Telemetry**: Error logging, loading states, UX edge-case verification.

### C. Standard Django Feature Roadmap
1. **Models & Migrations**: Django models, foreign key indexes, migrations (`python manage.py makemigrations`).
2. **Serializers & Views**: DRF serializers, ViewSets, API views, permissions.
3. **Templates / Admin**: Django admin registration, custom filters, templates (if SSR).
4. **URL Routing & Middleware**: App URL patterns, middleware wiring.
5. **Testing & Quality Gate**: `python manage.py test`, flake8/black, type hints (mypy).
6. **Optimization**: `select_related`/`prefetch_related` verification to eliminate N+1 queries.

---

## 4. Real MERN & Django Do's and Don'ts (Scar-Tissue Prevention)

### Do:
- **Index Database Query Fields**: Always add MongoDB compound indexes or Django `db_index=True`/`Meta.indexes` on foreign keys and queried fields.
- **Isolate Logic in Controllers/Services**: Keep React components for display only; put data transformations in services/selectors and backend logic in controllers/managers.
- **Use Atomic Database Mutations**: Use MongoDB `$set`/`$inc` or Django `F()` expressions to prevent race conditions during concurrent updates.
- **Batch Async DB Queries**: Use `Promise.all()` or `bulk_create()`/`bulk_update()` instead of awaiting DB calls inside loops.
- **Enforce Server-Only Secrets**: Keep private API keys and JWT secret keys strictly in server `.env`; never expose in Vite/React client bundles.

### Don't:
- **Don't Skip Migration Verification**: Never commit Django model changes without creating and verifying migration files.
- **Don't Swallow Async Errors**: Avoid empty `catch` blocks in Express routes or Django views; always pass errors to global error middleware.
- **Don't Over-engineer Abstractions**: Do not create abstract repositories or multi-layer wrappers for single-caller functions.
- **Don't Bypass Plan Approval**: Never edit codebase files before the user confirms approval on `prompts/<name>.md`.

---

## 5. Fallback Rule

**When in doubt**: Keep it small, use the relevant skill, ask a focused question.
