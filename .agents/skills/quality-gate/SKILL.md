---
name: quality-gate
description: Enforces mandatory verification standards (unit tests, integration tests, linting, type-checking, build validation) before marking any feature or task as done.
---

# Quality Gate Skill

Enforces strict verification and quality checks before code changes are declared complete.

## Trigger Conditions

Activate when:
- Completing feature implementation code.
- Preparing code for user review or pull request submission.
- Running automated check pipelines (ESLint, Prettier, TypeScript, Pytest, Django test).

## Verification Pipeline

1. **Type Checking**: Run `tsc --noEmit` or `mypy` to verify zero type errors.
2. **Linting**: Run `npm run lint`, `eslint`, or `flake8` to ensure style compliance.
3. **Automated Tests**: Run test suite (`npm test`, `pytest`, `python manage.py test`).
4. **Build Verification**: Run production build check (`npm run build` or `vite build`).
5. **Manual Test Steps**: Provide clear, step-by-step instructions for human verification.
