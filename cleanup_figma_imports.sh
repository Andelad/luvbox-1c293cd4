#!/bin/bash

# Cleanup script for unused Figma imports
# This removes files that are not referenced by the application

echo "🧹 Cleaning up unused Figma import files..."

# Files that are NOT being used (safe to delete)
UNUSED_FILES=(
    "AppCube-11-543.tsx"
    "AppCube.tsx"
    "AppHeader-8-159.tsx"
    "Frame3.tsx"
    "Frame42.tsx"
    "FrontFace.tsx"
    "HomePage-2-221.tsx"
    "HomePage.tsx"
    "Section-40-148.tsx"
    "Section-40-160.tsx"
    "Section-40-60.tsx"
    "Section.tsx"
    "Sidebar-6-591.tsx"
    "TopFace.tsx"
    "svg-38n03yjgjj.ts"
    "svg-rvn5wkv9ve.ts"
    "svg-rxvqx08dxy.ts"
    "svg-ubzgyp1llw.ts"
    "svg-x3k22qd8ut.ts"
)

# Remove unused files
for file in "${UNUSED_FILES[@]}"; do
    if [ -f "src/imports/$file" ]; then
        echo "Deleting: src/imports/$file"
        rm "src/imports/$file"
    else
        echo "Not found: src/imports/$file"
    fi
done

echo "✅ Cleanup completed!"
echo ""
echo "📁 Remaining files in src/imports/ (still used by the app):"
ls -la src/imports/

echo ""
echo "🎯 These remaining files are still being used by:"
echo "  - svg-*.ts files: Used by layouts and components for SVG paths"
echo "  - *-16-*.tsx files: Used by 3D cube components"
echo "  - AppCube-2-477.tsx: Used by background component"
