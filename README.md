# create-vibe-engineering-skill

A lightweight CLI tool to scaffold the **vibe-engineering** Claude Skill and starter `AGENTS.md` project rules into any repository.

## Installation & Usage

Run directly using `npx` in any project root:

```bash
npx create-vibe-engineering-skill
```

## What Gets Created

The CLI creates the following structure in your working directory:

```text
my-project/
├── .agents/
│   └── skills/
│       └── vibe-engineering/
│           └── SKILL.md
└── AGENTS.md (optional starter template)
```

- `.agents/skills/vibe-engineering/SKILL.md`: The complete `vibe-engineering` skill encoding workflow rules, build order, and do's/don'ts.
- `AGENTS.md`: Starter project rules file created if one does not already exist in your root folder.

## How to Use

After installation, reference the skill in your AI agent prompts:

```markdown
Build <FEATURE_NAME>. Use @.agents/skills/vibe-engineering.
```

The AI agent will read the skill and automatically follow the core workflow (inspecting code, creating implementation plans in `prompts/`, requesting approval, executing, running checks, and sharing manual test steps).

## License

[MIT](LICENSE)
