---
name: vibe-engineering-skill
description: Operating rules for AI coding agents (Claude, Cursor, Copilot, etc.) working in Node.js / MERN / AI-integration codebases. Covers workflow discipline, token efficiency, and version control hygiene.
---

# vibe-engineering-skill

Operating rules for AI coding agents (Claude, Cursor, Copilot, etc.) working in
Node.js / MERN / AI-integration codebases. Covers workflow discipline, token
efficiency, and version control hygiene.

## When to invoke
Any task involving: writing/editing code in this repo, making git commits,
calling LLM APIs, or working across multiple files/turns.

---

## 1. Core Workflow (Plan → Approve → Execute → Verify)
1. Inspect relevant files before proposing changes — never guess file contents.
2. Write a short implementation plan (3-6 bullets) before editing code.
3. Wait for explicit approval on non-trivial changes (new deps, schema
   changes, deleting files, >100 line diffs).
4. Execute the approved plan in small, reviewable chunks.
5. Run existing tests/lint after changes; report pass/fail, don't assume.
6. Summarize what changed and how to manually verify it.

## 2. Token Management
- Before reading a whole file/repo, check if a summary or partial read
  (relevant function/section only) is sufficient.
- Never re-read a file you already have in context this session — reference
  it instead of re-fetching.
- For repos >2000 lines, summarize modules once, then work from the summary;
  re-fetch only the specific file being edited.
- Cap single-turn context pulls: if a request would require reading >5 files,
  ask which are actually relevant instead of pulling all of them.
- Prefer diffs/patches over full-file rewrites when editing existing files.
- When calling LLM APIs from app code (not just the coding agent itself):
  - Set explicit `max_tokens` based on expected output size, never leave default.
  - Chunk large inputs (>8k tokens) and summarize incrementally rather than
    sending full context every call.
  - Cache system prompts / repeated context where the SDK supports it.
  - Log token usage per request; flag any single call exceeding a set budget
    (e.g., 20k tokens) before sending.

## 3. Version Control
- Never commit directly to `main`/`master` — branch per feature/fix:
  `feat/<name>`, `fix/<name>`, `chore/<name>`.
- Commit messages follow Conventional Commits:
  `feat: add token budget check`, `fix: handle null user in auth middleware`.
- One logical change per commit — no bundling unrelated edits.
- Before opening a PR: rebase on latest main, run lint + tests, write a
  description with what changed and why (not just what).
- Semantic versioning for npm publishes:
  - PATCH: bug fixes, no API change
  - MINOR: new backward-compatible feature
  - MAJOR: breaking change
- Update `CHANGELOG.md` on every version bump — one line per notable change.
- Tag releases (`git tag vX.Y.Z`) matching `package.json` version.

## 4. MERN-Specific Rules
- **Mongo/Mongoose**: never change a schema in place without a migration
  note; validate required fields explicitly.
- **Express**: keep route handlers thin — business logic in services/controllers,
  not inline in route files.
- **React**: colocate component + styles + test; no logic in JSX beyond
  simple conditionals — extract to hooks/utils.
- **Env/secrets**: never hardcode API keys; always read from `.env`, confirm
  `.env` is gitignored before first commit.

## 5. Do's and Don'ts
✅ Do ask before large/destructive changes
✅ Do keep diffs minimal and reviewable
✅ Do track token spend on multi-step agent tasks
❌ Don't re-fetch context already available in the session
❌ Don't commit secrets, `node_modules`, or `.env` files
❌ Don't skip tests/lint because "it's a small change"
