#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Copies a file into an assignment folder's attachments directory.
function addAttachment(assignmentName, filePath) {
  const repoRoot = path.resolve(__dirname, '../../../..');
  const src = path.resolve(filePath);
  const destDir = path.join(repoRoot, 'assignments', assignmentName, 'attachments');

  if (!fs.existsSync(src)) {
    console.error('Source file not found:', src);
    process.exit(1);
  }
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const dest = path.join(destDir, path.basename(src));
  fs.copyFileSync(src, dest);
  console.log('Copied', src, '->', dest);
}

if (require.main === module) {
  const [assignmentName, filePath] = process.argv.slice(2);
  if (!assignmentName || !filePath) {
    console.error('Usage: add-attachment.js <assignment-name> <path-to-file>');
    process.exit(1);
  }
  addAttachment(assignmentName, filePath);
}

module.exports = { addAttachment };
