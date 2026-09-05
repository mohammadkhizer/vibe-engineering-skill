#!/usr/bin/env node

const { run } = require('../src/cli');

run().catch((err) => {
  console.error('\x1b[31mFatal error during skill scaffolding:\x1b[0m', err);
  process.exit(1);
});
