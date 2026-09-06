---
name: post-mortem
description: Captures architectural learnings, edge-case discoveries, bug root causes, and workflow friction points into project documentation after feature completion.
---

# Post-Mortem Skill

Captures post-build learnings, bug root causes, and architectural decisions into project documentation.

## Trigger Conditions

Activate when:
- Resolving a complex bug or regression.
- Completing a multi-phase feature build.
- Documenting architectural decision records (ADRs) or friction points.

## Post-Mortem Template

Document in `docs/retrospectives/<date>-<feature>.md`:
1. **Summary**: What was built/fixed.
2. **Root Cause / Discovery**: Unexpected edge cases or API behaviors discovered.
3. **Prevention Strategy**: Rule or check added to `AGENTS.md` to prevent recurrence.
4. **Impact**: Test coverage or stability metrics gained.
