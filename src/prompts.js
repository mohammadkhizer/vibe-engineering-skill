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

async function promptInteractiveMode() {
  console.log('\x1b[36m⚙ Choose installation mode:\x1b[0m');
  console.log('  1) Full Setup (Scaffold all 6 skills + starter AGENTS.md)');
  console.log('  2) Skills Only (Scaffold all 6 skills, skip AGENTS.md)');
  console.log('  3) Lite Mode (Pure skill install, zero root file changes)');
  console.log('  4) Cursor Rules Export (Export skills as .cursor/rules/*.mdc)\n');

  const choice = await askQuestion('Select mode (1-4) [Default: 1]: ');

  console.log('\n\x1b[36m🤖 Choose Target Agent Format:\x1b[0m');
  console.log('  1) Claude / Universal (.agents/skills/<name>/SKILL.md)');
  console.log('  2) Cursor (.cursor/rules/<name>.mdc)');
  console.log('  3) Codex / Custom (.codex/skills/<name>/SKILL.md)\n');

  const formatChoice = await askQuestion('Select format (1-3) [Default: 1]: ');

  return {
    mode: choice || '1',
    format: formatChoice || '1',
  };
}

module.exports = { askQuestion, promptInteractiveMode };
