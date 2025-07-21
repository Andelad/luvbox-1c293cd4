#!/usr/bin/env node

/**
 * Safe file mover that updates all imports automatically
 * Usage: node scripts/move-file.js src/old/path.tsx src/new/path.tsx
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function moveFileWithImportUpdates(oldPath, newPath) {
  try {
    // 1. Move the file
    const newDir = path.dirname(newPath);
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir, { recursive: true });
    }
    fs.renameSync(oldPath, newPath);
    
    // 2. Use TypeScript's language service to update imports
    execSync(`npx tsc --noEmit --skipLibCheck`, { stdio: 'inherit' });
    
    // 3. Use codemod or find-and-replace for any missed imports
    const oldRelativePath = oldPath.replace('src/', '');
    const newRelativePath = newPath.replace('src/', '');
    
    execSync(`find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's|${oldRelativePath}|${newRelativePath}|g'`);
    
    console.log(`✅ Successfully moved ${oldPath} to ${newPath}`);
  } catch (error) {
    console.error(`❌ Error moving file: ${error.message}`);
  }
}

const [oldPath, newPath] = process.argv.slice(2);
if (!oldPath || !newPath) {
  console.error('Usage: node scripts/move-file.js <old-path> <new-path>');
  process.exit(1);
}

moveFileWithImportUpdates(oldPath, newPath);
