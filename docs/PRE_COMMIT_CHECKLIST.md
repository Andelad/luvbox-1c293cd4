# LuvBox Pre-Commit Checklist

Run this checklist before committing any code to ensure compliance with LuvBox standards.

## 🔍 Automated Checks

### 1. Run Type Check
```bash
npm run type-check
```
- [ ] No TypeScript errors
- [ ] All imports resolve correctly
- [ ] Content types are up to date

### 2. Run Linting
```bash
npm run lint
```
- [ ] No ESLint errors
- [ ] Import order is correct
- [ ] No unused imports

### 3. Run Build
```bash
npm run build
```
- [ ] Build completes successfully
- [ ] No build warnings

## 🎨 Color System Compliance

### Manual Review
- [ ] No hardcoded hex colors (search for `#[0-9a-fA-F]`)
- [ ] No hardcoded rgb/rgba values
- [ ] All colors use CSS custom properties (`var(--color-name)`)
- [ ] New colors added to OKLCH system if needed

### Quick Search Commands
```bash
# Find hardcoded colors
grep -r "#[0-9a-fA-F]" src/ --exclude-dir=node_modules
grep -r "rgb(" src/ --exclude-dir=node_modules
grep -r "rgba(" src/ --exclude-dir=node_modules
```

## 📝 Content Management Compliance

### Manual Review
- [ ] No hardcoded text strings in components
- [ ] All user-facing text uses content hooks
- [ ] New content added to `/src/content/index.ts`
- [ ] Content types updated in `/src/content/types.ts`

### Quick Search Commands
```bash
# Find potential hardcoded strings (common patterns)
grep -r "Welcome\|Login\|Sign up\|Submit\|Cancel" src/components/ src/app/ src/website/
```

## 📁 Folder Structure Compliance

### Manual Review
- [ ] Components placed in correct folders
- [ ] Shared components in `/src/shared/components/`
- [ ] App components in `/src/app/components/`
- [ ] Website components in `/src/website/components/`
- [ ] Using path aliases (`@/` instead of relative paths)
- [ ] Barrel exports updated where needed

## 🧩 Component Standards

### Code Review
- [ ] Component follows established patterns
- [ ] Props have TypeScript interfaces
- [ ] No duplicate functionality
- [ ] Responsive design considered
- [ ] Accessibility attributes included

### Documentation
- [ ] Complex components have JSDoc comments
- [ ] README updated if new patterns introduced
- [ ] Examples provided for reusable components

## 🔧 Import Standards

### Manual Review
- [ ] Imports follow correct order (React → Libraries → Internal → Relative → Types)
- [ ] Using path aliases consistently
- [ ] No unused imports
- [ ] No circular dependencies

## 📋 Final Checks

### Before Commit
- [ ] All automated checks pass
- [ ] Manual reviews completed
- [ ] Documentation updated if needed
- [ ] Commit message is descriptive

### Commit Message Format
```
type(scope): brief description

- What was changed
- Why it was changed
- Any breaking changes

Follows: Color system ✅ | Content system ✅ | Folder structure ✅
```

### Example Good Commit
```
feat(website): add new pricing section

- Add pricing cards using established component patterns
- Use OKLCH color system throughout
- Content managed through centralized system
- Responsive design with existing grid utilities

Follows: Color system ✅ | Content system ✅ | Folder structure ✅
```

### Example Bad Commit (Don't Do This)
```
fix stuff

- changed some colors
- added text
```

## 🚨 Red Flags to Check For

### Immediate Rejection Criteria
- [ ] Hardcoded colors (#hex, rgb values)
- [ ] Hardcoded text strings
- [ ] Components in wrong folders
- [ ] Direct relative imports instead of aliases
- [ ] Duplicate existing functionality
- [ ] Missing TypeScript types

### Warning Signs
- [ ] New CSS classes without documentation
- [ ] Complex inline styles
- [ ] Components with many props (might need refactoring)
- [ ] Very large files (consider splitting)

## 📞 When You Need Help

### Before Creating Something New
1. Check existing components first
2. Review this checklist and developer handbook
3. Search for similar patterns in codebase
4. Ask team for guidance

### Resources
- `docs/DEVELOPER_HANDBOOK.md` - Complete development standards
- `docs/COLOR_SYSTEM.md` - Color usage guide  
- `docs/CONTENT_MANAGEMENT.md` - Content system guide
- `src/content/README.md` - Content usage examples

---

**Remember: It's better to ask questions than to create inconsistent code!**
