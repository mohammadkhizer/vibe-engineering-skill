# Contributing Guidelines

Thank you for contributing to `create-stack-guard-skill`!

## Submitting New Skills or Templates

1. Place new skill templates in `templates/skills/<skill-name>/SKILL.md`.
2. Ensure every skill contains valid YAML frontmatter with `name` and `description`.
3. Include explicit positive trigger conditions and explicit negative examples in Section 1.
4. Keep skills zero-dependency and framework-agnostic where possible.

## Testing Changes Locally

Run the local test CLI helper:
```bash
npm test
```
Or execute CLI commands in a temporary test directory:
```bash
node /path/to/d/Skills/bin/index.js --help
node /path/to/d/Skills/bin/index.js --lite
```

## Pull Request Checklist

- [ ] Code follows standard Node.js ES6+ conventions.
- [ ] No external runtime npm dependencies introduced.
- [ ] `CHANGELOG.md` updated under `[Unreleased]`.
