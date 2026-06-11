#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Simple helper to register a new assignment in config.json
function registerAssignment(assignmentName) {
  const repoRoot = path.resolve(__dirname, '../../../..');
  const configPath = path.join(repoRoot, 'config.json');

  if (!fs.existsSync(configPath)) {
    console.error('config.json not found at', configPath);
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  config.assignments = config.assignments || [];

  if (!config.assignments.includes(assignmentName)) {
    config.assignments.push(assignmentName);
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
    console.log('Registered assignment:', assignmentName);
  } else {
    console.log('Assignment already registered:', assignmentName);
  }
}

if (require.main === module) {
  const name = process.argv[2];
  if (!name) {
    console.error('Usage: update-config.js <assignment-name>');
    process.exit(1);
  }
  registerAssignment(name);
}

module.exports = { registerAssignment };
