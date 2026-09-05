#!/usr/bin/env node

const { run } = require('../src/cli');

run().catch((err) => {
  console.error('\x1b[31mError:\x1b[0m', err.message);
  process.exit(1);
});
