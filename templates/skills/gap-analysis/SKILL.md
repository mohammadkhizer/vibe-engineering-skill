---
name: gap-analysis
description: Audits codebases or PRs for missing test coverage, edge-case vulnerabilities, broken API contracts, unhandled errors, and drift between specs and code.
---

# Gap Analysis Skill

Audits codebases for missing error handling, unhandled edge cases, missing DB indexes, and test gaps.

## Trigger Conditions

Activate when:
- Auditing existing code before production deployment.
- Searching for missing test coverage in MERN or Django modules.
- Inspecting API route error paths and contract compliance.

## Audit Checklist

1. **Error Path Coverage**: Check for unhandled promise rejections, missing try/catch blocks, and raw 500 error leaks.
2. **Database Performance**: Identify missing indexes on MongoDB ObjectIds / Django foreign keys and N+1 query patterns.
3. **Security Boundaries**: Verify JWT validation, CSRF headers, rate limiting, and CORS configuration.
4. **Test Gaps**: Highlight untested edge cases, boundary inputs, and error states.
