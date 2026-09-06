# Changelog

All notable changes to the `vibe-engineering-skill` (formerly `create-vibe-engineering-skill` / `create-stack-guard-skill`) CLI package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-09-06

### Added
- **Package Renaming**: Renamed package to `vibe-engineering-skill` with backwards-compatible `create-vibe-engineering-skill` and `create-stack-guard-skill` binary aliases.
- **Enhanced `vibe-engineering-skill` Rules**: Updated master skill with Operating Rules for AI coding agents (Node.js / MERN / AI integrations), Token Management budgets, and Version Control hygiene.
- **Modular Sub-Skill Architecture**: Split monolithic skill into 6 focused skills:
  - `vibe-engineering-skill` (master orchestrator)
  - `research-before-design`
  - `quality-gate`
  - `scope-guard`
  - `post-mortem`
  - `gap-analysis`
- **Safe Update Engine (`--update`)**: Introduced line-by-line diff engine that warns users before overwriting customized skill files.
- **Interactive CLI Setup**: Prompt runner supporting Full Setup, Skills-Only, Lite Mode, and Cursor `.cursor/rules/*.mdc` exports.
- **Dynamic Build Roadmaps**: Added micro-feature, MERN, and Django specific build-order roadmaps.
- **MERN & Django Scar-Tissue Rules**: Embedded real-world failure prevention rules (missing indexes, client secret leaks, unbatched DB queries).

### Changed
- **Tightened Skill Triggers**: Rewrote YAML frontmatter and added explicit negative trigger suppression rules (Q&A requests, single-line edits, unrelated stacks).
- **Overhauled README**: Added concrete problem statement, non-goals, side-by-side evidence matrix, and GitHub metadata setup instructions.
