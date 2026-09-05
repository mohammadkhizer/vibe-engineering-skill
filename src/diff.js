const fs = require('fs');

/**
 * Compares existing file content against template file content line by line.
 * Returns { isIdentical, diffOutput, addedLines, removedLines }
 */
function computeDiff(existingContent, templateContent) {
  const existingLines = existingContent.split(/\r?\n/);
  const templateLines = templateContent.split(/\r?\n/);

  let isIdentical = existingContent.trim() === templateContent.trim();
  let diffLines = [];
  let addedCount = 0;
  let removedCount = 0;

  const maxLen = Math.max(existingLines.length, templateLines.length);

  for (let i = 0; i < maxLen; i++) {
    const existing = existingLines[i];
    const template = templateLines[i];

    if (existing === template) {
      if (existing !== undefined) {
        diffLines.push(`  ${existing}`);
      }
    } else {
      if (existing !== undefined) {
        diffLines.push(`\x1b[31m- ${existing}\x1b[0m`);
        removedCount++;
      }
      if (template !== undefined) {
        diffLines.push(`\x1b[32m+ ${template}\x1b[0m`);
        addedCount++;
      }
    }
  }

  return {
    isIdentical,
    diffLines,
    addedCount,
    removedCount,
  };
}

module.exports = { computeDiff };
