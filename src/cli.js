const fs = require('fs');
const path = require('path');
const { askQuestion, promptInteractiveMode } = require('./prompts');
const { computeDiff } = require('./diff');

async function run() {
  const args = process.argv.slice(2);
  const isUpdate = args.includes('--update');
  const isLite = args.includes('--lite');
  const isMinimal = args.includes('--minimal');
  const isHelp = args.includes('--help') || args.includes('-h');

  if (isHelp) {
    console.log('\x1b[36m🚀 create-stack-guard-skill CLI v2.0.0\x1b[0m\n');
    console.log('Usage:');
    console.log('  npx create-stack-guard-skill [options]\n');
    console.log('Options:');
    console.log('  --update      Safely update installed skills with diff verification');
    console.log('  --lite        Install skills only into .agents/skills without modifying AGENTS.md');
    console.log('  --minimal     Scaffold master skill + AGENTS.md');
    console.log('  --help, -h    Show help menu\n');
    return;
  }

  console.log('\x1b[36m🚀 Initializing Stack Guard Skill Scaffolding (v2.0.0)...\x1b[0m\n');

  const cwd = process.cwd();
  const templateSkillsDir = path.join(__dirname, '..', 'templates', 'skills');
  const templateAgentsPath = path.join(__dirname, '..', 'templates', 'AGENTS.md');

  // Discover template skills
  const availableSkills = fs.existsSync(templateSkillsDir)
    ? fs.readdirSync(templateSkillsDir).filter((f) => fs.statSync(path.join(templateSkillsDir, f)).isDirectory())
    : ['vibe-engineering'];

  let targetFormat = '1'; // 1: Claude (.agents/skills), 2: Cursor (.cursor/rules), 3: Codex (.codex/skills)
  let shouldCreateAgents = !isLite;

  if (!isUpdate && !isLite && !isMinimal) {
    const choices = await promptInteractiveMode();
    if (choices.mode === '3') {
      shouldCreateAgents = false;
    }
    targetFormat = choices.format;
  }

  // Determine destination paths based on format
  let destSkillBase = path.join(cwd, '.agents', 'skills');
  if (targetFormat === '2') {
    destSkillBase = path.join(cwd, '.cursor', 'rules');
  } else if (targetFormat === '3') {
    destSkillBase = path.join(cwd, '.codex', 'skills');
  }

  let installedCount = 0;
  let updatedCount = 0;

  for (const skillName of availableSkills) {
    const srcSkillPath = path.join(templateSkillsDir, skillName, 'SKILL.md');
    if (!fs.existsSync(srcSkillPath)) continue;

    const templateContent = fs.readFileSync(srcSkillPath, 'utf8');

    let targetSkillPath = path.join(destSkillBase, skillName, 'SKILL.md');
    if (targetFormat === '2') {
      // Cursor rule format
      targetSkillPath = path.join(destSkillBase, `${skillName}.mdc`);
    }

    fs.mkdirSync(path.dirname(targetSkillPath), { recursive: true });

    if (fs.existsSync(targetSkillPath)) {
      const existingContent = fs.readFileSync(targetSkillPath, 'utf8');
      const diff = computeDiff(existingContent, templateContent);

      if (diff.isIdentical) {
        console.log(`\x1b[36mℹ ${skillName}: Already up to date.\x1b[0m`);
      } else {
        console.log(`\n\x1b[33m⚠️ Diff detected for ${skillName}:\x1b[0m`);
        console.log(`   Added lines: \x1b[32m+${diff.addedCount}\x1b[0m | Removed lines: \x1b[31m-${diff.removedCount}\x1b[0m\n`);
        diff.diffLines.slice(0, 15).forEach((line) => console.log(`   ${line}`));
        if (diff.diffLines.length > 15) {
          console.log(`   \x1b[90m... (${diff.diffLines.length - 15} more lines)\x1b[0m`);
        }

        const overwrite = await askQuestion(
          `\n\x1b[33mOverwrite ${skillName} with v2 template? (y/N): \x1b[0m`
        );
        if (overwrite.toLowerCase() === 'y' || overwrite.toLowerCase() === 'yes') {
          fs.writeFileSync(targetSkillPath, templateContent, 'utf8');
          console.log(`\x1b[32m✔ Updated ${skillName}\x1b[0m`);
          updatedCount++;
        } else {
          console.log(`\x1b[31m✖ Skipped ${skillName}\x1b[0m`);
        }
      }
    } else {
      fs.writeFileSync(targetSkillPath, templateContent, 'utf8');
      console.log(`\x1b[32m✔ Installed ${skillName} (${path.relative(cwd, targetSkillPath)})\x1b[0m`);
      installedCount++;
    }
  }

  // Handle AGENTS.md
  const agentsPath = path.join(cwd, 'AGENTS.md');
  if (shouldCreateAgents) {
    if (!fs.existsSync(agentsPath)) {
      const agentsContent = fs.readFileSync(templateAgentsPath, 'utf8');
      fs.writeFileSync(agentsPath, agentsContent, 'utf8');
      console.log('\x1b[32m✔ Created starter AGENTS.md in project root\x1b[0m');
    } else {
      console.log('\x1b[36mℹ Existing AGENTS.md preserved in project root.\x1b[0m');
    }
  }

  console.log('\n\x1b[32m🎉 Success! Stack Guard skill suite configured.\x1b[0m\n');
  console.log(`Installed: ${installedCount} skills | Updated: ${updatedCount} skills`);
  console.log('Project skills directory:', path.relative(cwd, destSkillBase));
}

module.exports = { run };
