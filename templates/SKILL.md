---
name: vibe-engineering
description: Enforces the default AI-assisted development workflow for building new features, starting projects, and implementing app functionality.
---

# Vibe Engineering Skill

This skill defines the default AI-assisted development process to follow when building new features, starting new projects, or implementing application functionality.

## 1. Trigger Conditions

Activate this skill whenever:
- Building new features in an application
- Starting a new project or codebase from scratch
- Implementing core or secondary application functionality
- Executing feature requests or user-defined build tasks

---

## 2. Core Workflow

Follow these steps in strict numerical order:

1. **Read AGENTS.md**: Check for and read `AGENTS.md` at the project root if it exists to understand project guidelines and constraints.
2. **Read Relevant Skills**: Read any skills explicitly named in the prompt, plus any supporting skills clearly needed for the task.
3. **Inspect Existing Code**: Thoroughly search and view relevant existing code before writing or editing any code.
4. **Clarify Ambiguity**: Ask a focused question ONLY if there is real, blocking ambiguity. Otherwise, proceed directly.
5. **Write Implementation Plan**: Create a detailed implementation plan document saved at `prompts/<name>.md`.
6. **Seek Approval**: Request explicit user approval before writing code with the exact prompt:
   > "I prepared the implementation prompt at prompts/<name>.md. Good to execute?"
7. **Implement**: Execute code changes ONLY after receiving explicit user approval.
8. **Run Checks**: Run all available automated checks, linters, builds, and test suites.
9. **Share Test Steps**: Provide the user with exact, reproducible manual test steps to verify the changes.

---

## 3. AGENTS.md Template

Use the following template when creating or recommending an `AGENTS.md` file for a repository:

```markdown
# AGENTS.md

You are a principal-level engineer building <PRODUCT>, a <ONE-LINE DESCRIPTION>.
Your job: understand the request, use the right skills, write a clear implementation prompt, get approval, then implement.

## 1. Workflow
1. Read AGENTS.md.
2. Read the skills named in the prompt + any clearly needed supporting skills.
3. Inspect relevant code.
4. Ask a focused question only if there's real ambiguity.
5. Write a detailed prompt file in prompts/<name>.md.
6. Ask: "I prepared the implementation prompt at prompts/<name>.md. Good to execute?"
7. Implement only after approval.
8. Run available checks.
9. Share exact test steps.

## 2. Product
<what it is, in two lines>
In scope: <list>
Out of scope: <list> ← this list matters most. Do not overbuild.

## 3. Architecture
<where each kind of logic lives; UI displays data only; secrets stay server-side>

## 4. Tech Stack
Use: <tools, one line each on what each does>
Do not use: <explicit alternatives to avoid>

## 5. Data Model
<tables, key fields, and what's REQUIRED before saving a record>

## 6. API Contracts
<route paths + HTTP methods>

## 7. Security
Never expose to the browser: <secrets/keys>
Never run from the browser: <privileged operations>

## 8. Code Standards
Small functions. Explicit types. No unrelated refactors. No overengineering.

## 9. Fallback Rule
When in doubt, keep it small, use the relevant skill, ask a focused question.
```

---

## 4. Build-Order Roadmap for New Apps

When building a new application from scratch, follow this exact linear sequence:

1. **Design System**: Set up typography, color palette, design tokens, and global layout structures.
2. **Core UI Screens**: Build primary application screens using placeholder/mock data.
3. **Authentication**: Implement user identity, session management, and auth flows.
4. **Database & Data Model**: Schema design, migrations, and database setup.
5. **Seed & Config Data**: Populate initial seed data, configuration constants, and environment setups.
6. **Read Path**: Connect UI screens to fetch and display real data from the database.
7. **Core Engine**: Implement business logic, write path, data mutations, and state management.
8. **Intelligence & AI Layer**: Add LLM integrations, embeddings, vector search, or smart features.
9. **Automation**: Implement background workers, scheduled jobs, webhooks, and notifications.
10. **Deploy & Polish**: Production deployment, CI/CD, performance optimization, and final UX polish.

---

## 5. Do's and Don'ts

### Do
- **One feature per prompt**: Keep work focused on a single logical feature per iteration.
- **Keep rules in AGENTS.md**: Place reusable project rules in `AGENTS.md` rather than re-explaining them in every prompt.
- **Approve plans before code**: Require explicit approval on plan files in `prompts/` prior to writing implementation code.
- **Build in order**: Follow the structured build-order roadmap sequentially without skipping phases.
- **Maintain out-of-scope lists**: Explicitly document out-of-scope items to prevent scope creep.

### Don't
- **Hand-write long prompts**: Avoid redundant prompt text when rules belong in `AGENTS.md`.
- **Approve unread plans**: Never begin implementation without reviewing and receiving user confirmation for the plan.
- **Let AI make rule decisions**: Do not let AI guess architectural choices that should be governed by `AGENTS.md`.
- **Mix tool docs into AGENTS.md**: Keep tool-specific documentation and skill details in dedicated skill files.
- **Skip checks and test steps**: Never consider work complete without running available verification and providing test steps.

---

## 6. Fallback Rule

**When in doubt**: Keep it small, use the relevant skill, ask a focused question.
