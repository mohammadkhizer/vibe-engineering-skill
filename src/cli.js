const fs = require('fs');
const path = require('path');
const readline = require('readline');

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans.trim());
    })
  );
}

async function run() {
  const cwd = process.cwd();
  const skillDir = path.join(cwd, '.agents', 'skills', 'vibe-engineering');
  const skillPath = path.join(skillDir, 'SKILL.md');
  const agentsPath = path.join(cwd, 'AGENTS.md');

  const templateSkillPath = path.join(__dirname, '..', 'templates', 'SKILL.md');
  const templateAgentsPath = path.join(__dirname, '..', 'templates', 'AGENTS.md');

  console.log('\x1b[36m🚀 Initializing vibe-engineering skill scaffolding...\x1b[0m\n');

  // Check if SKILL.md already exists
  if (fs.existsSync(skillPath)) {
    const answer = await askQuestion(
      `\x1b[33mWarning:\x1b[0m File .agents/skills/vibe-engineering/SKILL.md already exists. Overwrite? (y/N): `
    );
    if (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'yes') {
      console.log('\x1b[31mOperation cancelled. SKILL.md was not overwritten.\x1b[0m');
      return;
    }
  }

  // Create directory
  fs.mkdirSync(skillDir, { recursive: true });

  // Copy SKILL.md template
  const skillContent = fs.readFileSync(templateSkillPath, 'utf8');
  fs.writeFileSync(skillPath, skillContent, 'utf8');
  console.log('\x1b[32m✔ Created .agents/skills/vibe-engineering/SKILL.md\x1b[0m');

  // Handle AGENTS.md
  if (!fs.existsSync(agentsPath)) {
    const createAgents = await askQuestion(
      `No AGENTS.md found in project root. Create starter AGENTS.md? (Y/n): `
    );
    if (createAgents.toLowerCase() !== 'n') {
      const agentsContent = fs.readFileSync(templateAgentsPath, 'utf8');
      fs.writeFileSync(agentsPath, agentsContent, 'utf8');
      console.log('\x1b[32m✔ Created starter AGENTS.md in project root\x1b[0m');
    }
  } else {
    console.log('\x1b[36mℹ Found existing AGENTS.md in project root.\x1b[0m');
  }

  // Success summary
  console.log('\n\x1b[32m🎉 Success! vibe-engineering skill installed successfully.\x1b[0m\n');
  console.log('Project layout:');
  console.log('  ├── .agents/');
  console.log('  │   └── skills/');
  console.log('  │       └── vibe-engineering/');
  console.log('  │           └── SKILL.md');
  if (fs.existsSync(agentsPath)) {
    console.log('  └── AGENTS.md');
  }
  console.log('\n\x1b[36mHow to use:\x1b[0m');
  console.log('Reference the skill in your prompts using:');
  console.log('  \x1b[33m@.agents/skills/vibe-engineering\x1b[0m\n');
}

module.exports = { run };
