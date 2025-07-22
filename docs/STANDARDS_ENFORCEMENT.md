# LuvBox Standards Enforcement System

## 🎯 Quick Start

To ensure you follow LuvBox's established practices, use these tools and follow this workflow:

### 1. Before You Code
```bash
# Read the standards
cat docs/DEVELOPER_HANDBOOK.md
```

### 2. While You Code
- VS Code will auto-format and organize imports
- IntelliSense will suggest OKLCH colors and content hooks
- TypeScript will catch missing types

### 3. Before You Commit
```bash
# Run all standards checks
npm run standards-check

# Or use the detailed script
./scripts/check-standards.sh
```

## 📋 Available Tools

### Documentation
| File | Purpose |
|------|---------|
| `docs/DEVELOPER_HANDBOOK.md` | Complete development standards |
| `docs/PRE_COMMIT_CHECKLIST.md` | Step-by-step commit checklist |
| `docs/COLOR_SYSTEM.md` | OKLCH color system documentation |
| `docs/CONTENT_MANAGEMENT.md` | Content system usage guide |

### Scripts
| Command | Purpose |
|---------|---------|
| `npm run standards-check` | Check all compliance rules |
| `npm run check:colors` | Find hardcoded colors |
| `npm run check:hardcoded-text` | Find hardcoded text |
| `npm run type-check` | TypeScript validation |
| `npm run lint` | ESLint validation |
| `npm run lint:fix` | Auto-fix linting issues |
| `./scripts/check-standards.sh` | Comprehensive standards check |

### VS Code Integration
- `.vscode/settings.json` - Auto-formatting and import organization
- IntelliSense for OKLCH colors and content hooks
- Automatic import path suggestions using aliases

## 🚦 Enforcement Levels

### 🔴 Blocking Issues (Must Fix)
- Hardcoded hex colors in components
- TypeScript errors  
- ESLint errors
- Missing content system usage

### 🟡 Warning Issues (Should Fix)
- Deep relative imports (use @ aliases)
- Potential hardcoded text
- Components in wrong folders

### 🟢 Good Practices (Nice to Have)
- JSDoc comments on complex functions
- Consistent naming conventions
- Proper component organization

## 🔄 Workflow Integration

### Daily Development
1. **Start:** Review `docs/DEVELOPER_HANDBOOK.md` for patterns
2. **Code:** VS Code enforces formatting and suggests proper imports
3. **Test:** Run `npm run standards-check` before committing
4. **Commit:** Use `docs/PRE_COMMIT_CHECKLIST.md` for final review

### Adding New Features
1. **Plan:** Check existing components first
2. **Design:** Use established color system and content management
3. **Build:** Follow folder structure and naming conventions
4. **Document:** Update relevant documentation
5. **Validate:** Run full standards check

### Code Review Process
1. **Automated:** CI runs standards check on PR
2. **Manual:** Reviewer checks against handbook guidelines
3. **Approval:** Only when standards are met

## 📊 Standards Compliance Dashboard

### Color System ✅
- [x] OKLCH variables defined in globals.css
- [x] No hardcoded colors in components
- [x] Semantic color mappings available
- [x] Documentation complete

### Content Management ✅  
- [x] Centralized content in /src/content/
- [x] TypeScript interfaces for all content
- [x] React hooks for accessing content
- [x] No hardcoded text in components

### Folder Structure ✅
- [x] Clear separation: app/ website/ shared/
- [x] Path aliases configured (@/ mappings)
- [x] Barrel exports for clean imports
- [x] Components in appropriate folders

### TypeScript ✅
- [x] Strict type checking enabled
- [x] Interfaces for all props
- [x] Content types auto-generated
- [x] Import/export validation

## 🎓 Learning Resources

### For New Developers
1. Start with `docs/DEVELOPER_HANDBOOK.md`
2. Review existing components in `src/shared/components/`
3. Practice with `docs/PRE_COMMIT_CHECKLIST.md`
4. Use `./scripts/check-standards.sh` frequently

### For Experienced Developers
1. Quick reference: `docs/DEVELOPER_HANDBOOK.md` → "Quick Reference" section
2. Standards validation: `npm run standards-check`
3. Pattern updates: Review and update documentation when adding new patterns

### For Code Reviewers
1. Use `docs/PRE_COMMIT_CHECKLIST.md` as review guide
2. Verify automated checks pass
3. Ensure new patterns are documented

## 🔧 Customization

### Adding New Standards
1. Update `docs/DEVELOPER_HANDBOOK.md`
2. Add checks to `scripts/check-standards.sh`
3. Update package.json scripts if needed
4. Communicate changes to team

### Modifying Existing Standards
1. Document reasoning for change
2. Update all relevant documentation
3. Create migration plan for existing code
4. Update enforcement tools

## 🚨 When Standards Are Violated

### If You Find Violations
1. **Don't ignore them** - fix or report
2. **Use boy scout rule** - leave code better than you found it
3. **Update patterns** - if current standard doesn't work, improve it

### If Standards Are Blocking You
1. **Review documentation** - solution might already exist
2. **Ask for guidance** - don't create ad-hoc solutions
3. **Propose improvements** - standards should help, not hinder

---

## 🎯 Success Metrics

You know the standards are working when:
- ✅ No hardcoded colors or text in new code
- ✅ Consistent folder structure across features
- ✅ New developers can quickly understand patterns
- ✅ Code reviews focus on logic, not style/structure
- ✅ Maintenance is easier due to predictable organization

**Remember: These standards exist to make development faster and more consistent, not to slow you down. When in doubt, ask for guidance rather than guessing!**
