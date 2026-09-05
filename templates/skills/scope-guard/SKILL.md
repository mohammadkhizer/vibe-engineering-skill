---
name: scope-guard
description: Strict enforcement of the Out-of-Scope list in AGENTS.md. Blocks over-engineering, unrequested features, speculative refactoring, and feature creep.
---

# Scope Guard Skill

Protects the project from over-engineering, unnecessary abstractions, and unrequested feature additions.

## Trigger Conditions

Activate when:
- Drafting or reviewing implementation plans.
- Evaluating feature prompt requests against `AGENTS.md`.
- Preventing scope creep during code implementation.

## Governance Rules

1. **Check Out-of-Scope List**: Review `AGENTS.md` Section 2 ("Out of scope"). Reject any work on out-of-scope items.
2. **One Feature per Prompt**: Keep changes tightly scoped to the single requested capability.
3. **No Unrequested Refactoring**: Do not refactor unrelated modules, utility files, or styles.
4. **No Speculative Abstractions**: Avoid generic interfaces or factory patterns unless 2+ distinct implementations exist.
