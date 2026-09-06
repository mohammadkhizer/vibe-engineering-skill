# Implementation Plan: Repo Hygiene, README Badges, and Agent Approval Demo GIF/Video

## Overview
This plan addresses repo hygiene enhancements by adding npm version, license, and download badges to `README.md`, providing automated API scripts for GitHub repository metadata (description & topics), and recording an interactive 20-second demonstration asset of the agent stopping mid-task for user approval.

---

## Proposed Changes

### 1. `README.md`
- **Badges**: Insert standard Shields.io badges (npm version, monthly downloads, MIT license) directly below the main title.
- **Demo Asset Embedding**: Embed the recorded approval demo animation into the benchmark/workflow section.

### 2. GitHub Metadata Setup (Description + Topics)
- Create a helper script / `curl` command using GitHub REST API to set:
  - Description: `Operating rules & sub-skill CLI scaffolding for Node.js, MERN & AI integration codebases.`
  - Topics: `claude-skills`, `ai-agents`, `mern`, `vibe-engineering-skill`, `stack-guard`, `developer-tools`, `scaffolding`, `code-governance`

### 3. Agent Approval Demo Recording (Conversion Asset)
- Build an animated HTML/CSS terminal demo in `docs/demo-approval.html` illustrating:
  1. AI Agent receiving feature prompt (*"Add user bookmarking tab to MERN dashboard"*).
  2. Agent running `research-before-design` and inspecting codebase schemas.
  3. Agent generating `prompts/bookmark-tab.md`.
  4. Agent **stopping mid-task** and asking: `"I prepared the implementation prompt at prompts/bookmark-tab.md. Good to execute?"` with interactive prompt waiting for human input.
- Launch `browser_subagent` to capture and record the 20-second browser session into an artifact recording.

---

## Verification Plan
1. Test markdown rendering of badges in `README.md`.
2. Verify HTML demo animation loops smoothly and displays the approval stop point clearly.
3. Validate browser recording artifact output.
