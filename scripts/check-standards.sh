#!/bin/bash

# LuvBox Standards Checker
# This script checks for compliance with LuvBox development standards

echo "🔍 LuvBox Standards Checker"
echo "=========================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track issues
ISSUES=0

echo ""
echo "🎨 Checking Color System Compliance..."

# Check for hardcoded hex colors
HEX_COLORS=$(grep -r "#[0-9a-fA-F]" src/ --exclude-dir=node_modules 2>/dev/null | grep -v ".css:" | wc -l)
if [ $HEX_COLORS -gt 0 ]; then
    echo -e "${RED}❌ Found $HEX_COLORS hardcoded hex colors:${NC}"
    grep -r "#[0-9a-fA-F]" src/ --exclude-dir=node_modules 2>/dev/null | grep -v ".css:" | head -5
    ISSUES=$((ISSUES + 1))
else
    echo -e "${GREEN}✅ No hardcoded hex colors found${NC}"
fi

# Check for hardcoded rgb colors
RGB_COLORS=$(grep -r "rgb(" src/ --exclude-dir=node_modules 2>/dev/null | grep -v ".css:" | wc -l)
if [ $RGB_COLORS -gt 0 ]; then
    echo -e "${RED}❌ Found $RGB_COLORS hardcoded rgb colors:${NC}"
    grep -r "rgb(" src/ --exclude-dir=node_modules 2>/dev/null | grep -v ".css:" | head -5
    ISSUES=$((ISSUES + 1))
else
    echo -e "${GREEN}✅ No hardcoded rgb colors found${NC}"
fi

echo ""
echo "📝 Checking Content Management Compliance..."

# Check for common hardcoded strings
HARDCODED_TEXT=$(grep -r -E "(Welcome|Login|Sign up|Submit|Cancel|Loading|Error|Success)" src/components/ src/app/ src/website/ 2>/dev/null | grep -v ".ts:" | grep -v "useContent" | wc -l)
if [ $HARDCODED_TEXT -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Found $HARDCODED_TEXT potential hardcoded text strings:${NC}"
    grep -r -E "(Welcome|Login|Sign up|Submit|Cancel|Loading|Error|Success)" src/components/ src/app/ src/website/ 2>/dev/null | grep -v ".ts:" | grep -v "useContent" | head -3
    echo -e "${YELLOW}   Please verify these use the content management system${NC}"
else
    echo -e "${GREEN}✅ No obvious hardcoded text found${NC}"
fi

echo ""
echo "📁 Checking Import Standards..."

# Check for relative imports that should use aliases
RELATIVE_IMPORTS=$(grep -r "import.*\.\./\.\./\.\." src/ 2>/dev/null | wc -l)
if [ $RELATIVE_IMPORTS -gt 0 ]; then
    echo -e "${RED}❌ Found $RELATIVE_IMPORTS deep relative imports (should use @ aliases):${NC}"
    grep -r "import.*\.\./\.\./\.\." src/ 2>/dev/null | head -3
    ISSUES=$((ISSUES + 1))
else
    echo -e "${GREEN}✅ No problematic relative imports found${NC}"
fi

echo ""
echo "🔧 Running TypeScript Check..."

# Run TypeScript check
if npx tsc --noEmit > /dev/null 2>&1; then
    echo -e "${GREEN}✅ TypeScript check passed${NC}"
else
    echo -e "${RED}❌ TypeScript errors found:${NC}"
    npx tsc --noEmit
    ISSUES=$((ISSUES + 1))
fi

echo ""
echo "🧹 Running ESLint..."

# Run ESLint
if npx eslint . > /dev/null 2>&1; then
    echo -e "${GREEN}✅ ESLint check passed${NC}"
else
    echo -e "${RED}❌ ESLint errors found:${NC}"
    npx eslint .
    ISSUES=$((ISSUES + 1))
fi

echo ""
echo "=========================="

if [ $ISSUES -eq 0 ]; then
    echo -e "${GREEN}🎉 All standards checks passed!${NC}"
    echo -e "${GREEN}✅ Ready to commit${NC}"
    exit 0
else
    echo -e "${RED}❌ Found $ISSUES compliance issues${NC}"
    echo -e "${YELLOW}📖 Review docs/DEVELOPER_HANDBOOK.md for guidelines${NC}"
    echo -e "${YELLOW}📋 Check docs/PRE_COMMIT_CHECKLIST.md before committing${NC}"
    exit 1
fi
