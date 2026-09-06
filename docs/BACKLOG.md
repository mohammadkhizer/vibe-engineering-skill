# P3 Future Backlog

This document tracks future planned features and architectural enhancements for `vibe-engineering-skill`.

## Tracked Backlog Items

1. **Independent Content Versioning**:
   - Decouple skill schema versioning (e.g. `v1.2.0`) from the CLI tool version (e.g. `v2.0.0`) to allow skill updates without CLI package releases.

2. **GitHub Action CI Plan-Gate Checker**:
   - Provide an official `.github/workflows/verify-plan-gate.yml` action that verifies PR commits contain a corresponding approved `prompts/<name>.md` file prior to merging.

3. **Community Skill Marketplace / Registry Index**:
   - Allow fetching custom skill packs from community GitHub repositories or registry indexes via `npx vibe-engineering-skill --add <repo-url>`.
