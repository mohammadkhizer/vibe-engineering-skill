---
name: research-before-design
description: Performs deep technical research, architectural exploration, and codebase dependency mapping before creating implementation plans or writing UI/backend code.
---

# Research Before Design Skill

Use this skill when exploring codebase patterns, evaluating third-party dependencies, or inspecting API contracts prior to drafting an implementation plan.

## Trigger Conditions

Activate when:
- Evaluating new third-party npm/pip libraries.
- Investigating existing codebase data models, schemas, or controller patterns.
- Analyzing architectural trade-offs (e.g. Celery vs Django-Q2, Redux vs Zustand).
- Auditing existing API endpoints before adding new routes.

## Workflow

1. **Inspect Codebase**: Search existing files to identify current patterns and conventions.
2. **Verify Dependencies**: Check `package.json` or `requirements.txt` before suggesting new libraries.
3. **Compare Options**: Document 2-3 architectural options with pros, cons, and performance trade-offs.
4. **Output Findings**: Summarize recommendations cleanly before writing the implementation plan.
