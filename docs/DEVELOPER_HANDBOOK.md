# LuvBox Developer Handbook

## Overview
This handbook ensures all developers follow LuvBox's established organizational practices for consistency, maintainability, and quality. **Always follow these guidelines rather than creating ad-hoc solutions.**

## 📁 Folder Structure Standards

### Project Architecture
```
src/
├── app/                    # Private app functionality
│   ├── components/        # App-specific components
│   ├── pages/            # App pages
│   ├── hooks/            # App-specific hooks
│   └── layout/           # App layouts
├── website/              # Public website
│   ├── components/       # Website-specific components
│   ├── pages/           # Website pages
│   └── layout/          # Website layouts
├── shared/              # Shared across app & website
│   ├── components/      # Reusable components
│   ├── hooks/          # Shared hooks
│   ├── lib/            # Utilities
│   └── types/          # TypeScript types
├── content/             # Centralized content management
├── assets/             # Static assets
│   ├── icons/         # SVG icons (organized by category)
│   ├── images/        # Images
│   └── fonts/         # Fonts
└── styles/            # Global styles
```

### Path Mapping Rules
- `@/` → `src/`
- `@/components/*` → `src/shared/components/*`
- `@/app/*` → `src/app/*`
- `@/website/*` → `src/website/*`
- `@/assets/*` → `src/assets/*`
- `@/icons/*` → `src/assets/icons/*`
- `@/content` → `src/content`

### Component Organization
- **Always use the established folder structure**
- Place components in the most specific applicable folder
- Use barrel exports (`index.ts`) for clean imports
- Follow the shared > app/website hierarchy

## 🎨 Color System Standards

### OKLCH Color Palette
LuvBox uses a **7-color OKLCH system** defined in `globals.css`. **Never use hardcoded colors**.

#### Primary Color Families
1. **Lime** (`--lime-50` to `--lime-900`) - Brand primary
2. **Blue** (`--blue-50` to `--blue-900`) - Informational, links
3. **Pink** (`--pink-50` to `--pink-900`) - Accent, highlights
4. **Purple** (`--purple-50` to `--purple-900`) - Interactive elements
5. **LB Black** (`--lb-black-0` to `--lb-black-900`) - Text, backgrounds
6. **Success Green** (`--success-green-50` to `--success-green-900`) - Success states
7. **Caution Red** (`--caution-red-50` to `--caution-red-900`) - Error/warning states

#### Transparency Variants
Use predefined transparency variants with `color()` function:
- `--lb-black-900-alpha-25` (25% opacity)
- `--purple-200-alpha-40` (40% opacity)
- etc.

### Component Color Standards

#### ✅ CORRECT - Use CSS Variables
```tsx
// Inline styles for dynamic colors
<div style={{ backgroundColor: 'var(--blue-500)', color: 'var(--lb-black-0)' }}>
  Content
</div>

// CSS classes for predefined combinations
<div className="bg-primary text-primary-foreground">
  Content
</div>
```

#### ❌ WRONG - Never Use These
```tsx
// Hardcoded hex colors
<div className="bg-[#3d3535]" />

// Tailwind color classes
<div className="bg-blue-500" />

// Hardcoded RGBA
<div style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
```

## 🔤 Typography System Standards

### Dual-Scale Typography
LuvBox uses **two typography scales** defined in `globals.css`:

#### App Scale (Compact Interface)
- `text-app-display` - Large headings
- `text-app-heading` - Section headings  
- `text-app-subheading` - Subsection headings
- `text-app-body` - Body text
- `text-app-caption` - Small text
- `text-app-code` - Code/monospace

#### Website Scale (Marketing Content)
- `text-web-hero` - Hero headings
- `text-web-display` - Large headings
- `text-web-heading` - Section headings
- `text-web-subheading` - Subsection headings
- `text-web-body` - Body text
- `text-web-caption` - Small text
- `text-web-code` - Code/monospace
- `text-web-mono` - Monospace (scaled down 10%)

### Typography Rules
1. **Always use semantic typography classes** instead of hardcoded font properties
2. **Choose the appropriate scale**: App for interface elements, Website for marketing content
3. **Font families are built into the classes** - no need to specify separately

#### ✅ CORRECT
```tsx
<h1 className="text-app-heading">Dashboard Title</h1>
<p className="text-app-body">Interface text</p>
<h1 className="text-web-hero">Marketing Hero</h1>
```

#### ❌ WRONG
```tsx
<h1 className="font-['EB_Garamond'] text-2xl font-semibold">Title</h1>
<p style={{ fontFamily: 'Source Sans 3', fontSize: '16px' }}>Text</p>
```

## 🧩 Component Development Standards

### Component Creation Pattern
**Every new component MUST follow this standardized pattern:**

#### 1. Color Usage
- **Use CSS variables**: `var(--color-name)`
- **Apply via inline styles** for dynamic colors
- **Use semantic classes** for common patterns
- **Never hardcode** hex, RGB, or Tailwind color classes

#### 2. Typography Usage  
- **Use typography classes**: `text-app-*` or `text-web-*`
- **Choose appropriate scale** based on context
- **Never hardcode** font properties

#### 3. Component Structure Template
```tsx
interface ComponentProps {
  // Define props with proper TypeScript types
}

const Component: React.FC<ComponentProps> = ({ ...props }) => {
  return (
    <div 
      className="layout-classes typography-class"
      style={{ 
        backgroundColor: 'var(--color-family-shade)',
        color: 'var(--text-color-family-shade)'
      }}
    >
      <span className="text-app-body">Content</span>
      <button 
        className="px-4 py-2 rounded transition-colors hover:opacity-90"
        style={{ 
          backgroundColor: 'var(--button-color)', 
          color: 'var(--button-text-color)' 
        }}
      >
        Action
      </button>
    </div>
  );
};

export default Component;
```

#### 4. Component Guidelines Checklist
- [ ] Uses only CSS variables for colors
- [ ] Uses typography classes (no hardcoded fonts)
- [ ] Follows responsive design patterns
- [ ] Includes proper TypeScript types
- [ ] Uses semantic HTML elements
- [ ] Includes hover/focus states with `transition-colors`
- [ ] Exports as default from file
- [ ] Includes in barrel export (`index.ts`) if shared

#### 5. File Naming Conventions
- **PascalCase**: `ComponentName.tsx`
- **Descriptive names**: `UserProfileCard.tsx` not `Card.tsx`
- **Location-specific**: Place in appropriate folder hierarchy

## 📝 CSS Organization Standards

### CSS File Size Guidelines
- **Single CSS file acceptable up to 2000 lines** (current: ~1520 lines)
- **Well-organized sections with clear comments**
- **Consider modularization at 2000+ lines**

### CSS Structure Hierarchy (globals.css)
1. **Font imports and @font-face**
2. **CSS custom properties (:root)**
3. **Color families (OKLCH values)**
4. **Transparency variants**
5. **Typography scales**
6. **Semantic mappings**
7. **Base styles (@layer base)**
8. **Component classes**
9. **Layout systems**
10. **Performance optimizations**

### CSS Modularization Strategy (Future)
When `globals.css` exceeds 2000 lines:
- `globals.css` - Core variables and base styles
- `components.css` - Component-specific styles  
- `layout.css` - Layout and grid systems
- `utilities.css` - Utility classes

### State Management Patterns
**NEVER use hardcoded colors.** Always use CSS custom properties from our OKLCH system:

#### Available Color Families
- **Lime** (Primary): `--lime-50` to `--lime-900`
- **Blue**: `--blue-50` to `--blue-900`
- **Pink**: `--pink-50` to `--pink-900`
- **Purple**: `--purple-50` to `--purple-900`
- **LB Black** (Grays): `--lb-black-50` to `--lb-black-900`
- **Success Green**: `--success-green-50` to `--success-green-900`
- **Caution Red**: `--caution-red-50` to `--caution-red-900`

#### Usage Guidelines
```css
/* ✅ CORRECT - Use CSS custom properties */
.my-component {
  background-color: var(--lime-100);
  border: 1px solid var(--lb-black-200);
  color: var(--lb-black-800);
}

/* ❌ INCORRECT - Never use hardcoded colors */
.my-component {
  background-color: #f0f9ff;
  border: 1px solid #e5e7eb;
  color: #1f2937;
}
```

#### Semantic Color Mappings
Use semantic variables for consistent theming:
- `var(--text-color)` for primary text
- `var(--background)` for backgrounds
- `var(--border)` for borders
- `var(--primary)` for primary actions

## 📝 Typography System Standards

### Three-Font System
**NEVER use hardcoded fonts or generic font families.** Always use our established font system:

#### Font Families
- **EB Garamond** (serif) - Headlines, display text, elegant content
- **Source Sans 3** (sans-serif) - Body text, UI elements, readable content
- **Spline Sans Mono** (monospace) - Code, technical content, data

#### Responsive Rem System
Our typography uses a **responsive rem-based system** that automatically scales:
- **Mobile (< 768px)**: 14px root font size
- **Desktop (≥ 768px)**: 16px root font size

All typography scales proportionally, ensuring optimal readability across devices without manual responsive overrides.

#### App vs Website Scales
- **App Scale** - Compact typography for app interface (smaller relative sizes)
- **Website Scale** - Generous typography for website content (larger relative sizes)

Both scales automatically adapt to screen size through the responsive rem system.

#### Usage Guidelines
```tsx
// ✅ CORRECT - Use semantic typography classes
<h1 className="text-app-heading">App Section Title</h1>
<p className="text-app-body">App interface content</p>
<h1 className="text-web-hero">Website Hero Title</h1>
<p className="text-web-body">Website marketing content</p>

// ✅ CORRECT - Use Tailwind with custom scales
<span className="text-app-lg font-serif font-medium">Custom app text</span>
<span className="text-web-xl font-sans">Custom website text</span>

// ❌ INCORRECT - Never hardcode fonts or sizes
<h1 style={{ fontSize: '24px', fontFamily: 'Arial' }}>Title</h1>
<p className="text-lg">Generic size without context</p>
```

#### Available Semantic Classes
**App Typography:** (Automatically responsive)
- `text-app-display` - Large titles (EB Garamond, 1.875rem)
- `text-app-heading` - Section headers (EB Garamond, 1.5rem)
- `text-app-subheading` - Subsections (EB Garamond, 1.25rem)
- `text-app-body` - Body text (Source Sans 3, 1rem)
- `text-app-caption` - Small text (Source Sans 3, 0.875rem)
- `text-app-code` - Code text (Spline Sans Mono, 0.875rem)

**Website Typography:** (Automatically responsive)
- `text-web-hero` - Hero headings (EB Garamond, 3.25rem)
- `text-web-display` - Large titles (EB Garamond, 2.5rem)
- `text-web-heading` - Section headers (EB Garamond, 2rem)
- `text-web-subheading` - Subsections (EB Garamond, 1.625rem)
- `text-web-body` - Body text (Source Sans 3, 1.25rem)
- `text-web-caption` - Small text (Source Sans 3, 1.125rem)
- `text-web-code` - Code text (Spline Sans Mono, 1.125rem)

## 📝 Content Management Standards

### Centralized Content System
**NEVER hardcode text in components.** Always use the centralized content management system.

#### Content Structure
All content is organized in `/src/content/index.ts`:
```typescript
export const CONTENT = {
  navigation: { /* navigation labels */ },
  pages: { /* page-specific content */ },
  website: { /* website content */ },
  common: { /* shared text */ }
};
```

#### How to Add New Content
1. Add content to `/src/content/index.ts`
2. Update TypeScript types in `/src/content/types.ts`
3. Use content hooks in components:

```tsx
// ✅ CORRECT - Use content hooks
import { usePageContent } from '@/shared/hooks/useContent';

function MyComponent() {
  const content = usePageContent('myPage');
  return <h1>{content.title}</h1>;
}

// ❌ INCORRECT - Never hardcode text
function MyComponent() {
  return <h1>My Page Title</h1>;
}
```

#### Available Content Hooks
- `usePageContent(pageName)` - Page-specific content
- `useNavigation()` - Navigation labels
- `useCommonContent()` - Shared text like "Loading", "Cancel"
- `useWebsiteContent()` - Public website content

## 🎯 Component Standards

### Component Creation Rules
1. **Check existing components first** - Don't recreate what exists
2. **Use TypeScript interfaces** for all props
3. **Follow naming conventions**:
   - PascalCase for components
   - camelCase for functions and variables
   - UPPER_CASE for constants

### Icon Management
Icons are organized by category in `/src/assets/icons/`:
- Always use existing icons when possible
- Create category-specific files (e.g., `NavigationIcons.tsx`)
- Export through barrel files (`index.ts`)

### Styling Standards
1. **Use Tailwind classes** for styling when possible
2. **Use CSS custom properties** for colors
3. **Add custom CSS** to `globals.css` for complex styles
4. **Follow responsive design** patterns

## 🔧 Import Standards

### Import Order
1. React imports
2. Third-party libraries
3. Internal imports (using @ aliases)
4. Relative imports
5. Type imports (separate from value imports)

```tsx
// ✅ CORRECT import order
import { useState, useEffect } from 'react';
import { Button } from '@/assets/ui/button';
import { usePageContent } from '@/shared/hooks/useContent';
import { LocalComponent } from './LocalComponent';
import type { MyType } from '@/shared/types';
```

### Barrel Exports
Use index.ts files for clean imports:
```typescript
// src/shared/components/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Modal } from './Modal';
```

## 📋 Development Workflow

### Before Adding New Features
1. **Check existing documentation** (this handbook, COLOR_SYSTEM.md, etc.)
2. **Review similar components** in the codebase
3. **Use established patterns** rather than creating new ones
4. **Update content system** if adding new text

### Code Review Checklist
- [ ] Uses established folder structure
- [ ] Uses OKLCH color system (no hardcoded colors)
- [ ] Uses content management system (no hardcoded text)
- [ ] Follows TypeScript best practices
- [ ] Uses proper import structure
- [ ] Includes proper documentation

### When to Create New Patterns
Only create new patterns when:
1. Existing patterns don't solve the problem
2. You've discussed with the team
3. You've documented the new pattern
4. You've updated this handbook

## 🚨 Common Anti-Patterns to Avoid

### ❌ Don't Do This
```tsx
// Hardcoded colors
style={{ backgroundColor: '#f0f9ff' }}

// Hardcoded text
<h1>Welcome to LuvBox</h1>

// Direct component imports without aliases
import { Button } from '../../../shared/components/Button';

// Inline styles for complex layouts
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

// Creating duplicate components
function MyCustomButton() { /* reinventing existing Button */ }
```

### ✅ Do This Instead
```tsx
// Use CSS custom properties
className="bg-[var(--lime-100)]"

// Use content system
const content = usePageContent('welcome');
<h1>{content.title}</h1>

// Use path aliases
import { Button } from '@/components';

// Use CSS classes for complex layouts
className="staggered-grid"

// Extend existing components
<Button variant="custom" className="my-specific-styles">
```

## 📚 Documentation Requirements

### When Adding New Features
1. **Update relevant documentation** (this handbook, component READMEs)
2. **Add TypeScript comments** for complex functions
3. **Update content types** when adding new content
4. **Document new CSS classes** in globals.css

### File Headers
Add clear comments to new files:
```typescript
/**
 * ComponentName
 * 
 * Brief description of what this component does
 * 
 * @example
 * <ComponentName prop="value" />
 */
```

## 🔄 Maintenance Practices

### Regular Audits
- Review for hardcoded colors/text quarterly
- Update documentation when patterns change
- Consolidate duplicate code
- Remove unused imports and components

### Migration Strategy
When updating existing code:
1. Follow the boy scout rule: leave it better than you found it
2. Update one pattern at a time
3. Test thoroughly after changes
4. Update documentation

## 📖 Key Documentation Files

Always reference these files before making changes:
- `docs/COLOR_SYSTEM.md` - Complete color documentation
- `docs/TYPOGRAPHY_SYSTEM.md` - Complete typography documentation
- `docs/CONTENT_MANAGEMENT.md` - Content system details
- `PROJECT_STRUCTURE.md` - Folder organization
- `src/content/README.md` - Content usage examples

---

## 🎯 Quick Reference

### Before Writing Any Code
1. Does this component already exist?
2. Am I using the established color system?
3. Am I using the established typography system?
4. Am I using the content management system?
5. Am I following the folder structure?
6. Am I using proper TypeScript types?

### When in Doubt
- Check existing similar components
- Review this handbook
- Follow established patterns
- Ask for guidance rather than guessing

## 🎨 CSS Organization Standards

### File Size Management
**Current Guidelines:**
- `globals.css` up to **1500 lines**: ✅ Acceptable with good organization
- `globals.css` approaching **2000 lines**: ⚠️ Consider modularization
- Individual component sections > **200 lines**: 🔄 Extract to separate files

### File Structure Standards
**Current Organization** (maintain this structure):
```css
/* 1. Imports & Performance Optimizations */
@import statements, font-display, @keyframes

/* 2. Root Variables & Color System */
:root { /* color families, transparency variants */ }

/* 3. Typography System */
/* App scale, website scale, semantic classes */

/* 4. Theme Variables */
/* Light/dark theme mappings */

/* 5. Base Layer Styles */
@layer base { /* resets, typography defaults */ }

/* 6. Component Styles */
/* Custom components (LuvMap, sidebar, buttons, etc.) */

/* 7. Layout Components */
/* App layout, website layout, header, footer */

/* 8. Page-Specific Styles */
/* Homepage, specific page components */

/* 9. Performance Optimizations */
/* Hardware acceleration, reduced motion */
```

### Modularization Strategy (Future)
When `globals.css` exceeds 2000 lines, break into:
```
src/styles/
├── globals.css              # Core variables, reset, base styles
├── components/              # Component-specific styles
│   ├── buttons.css         # All button variations  
│   ├── layout.css          # Layout components
│   ├── sidebar.css         # Sidebar styles
│   └── typography.css      # Typography utilities
└── sections/               # Page-specific styles
    ├── homepage.css        # Homepage-specific styles
    └── app.css            # App-specific layout
```

### CSS Quality Standards
**✅ Required:**
- Clear section headers with visual separators (`/* ========== */`)
- Logical grouping (colors → typography → components → layout)
- Consistent naming conventions (BEM-style for components)
- Good documentation within the file
- Zero hardcoded colors (use color system variables)
- Zero hardcoded fonts (use typography system)

**❌ Avoid:**
- Inline styles in components (use CSS classes)
- Magic numbers without explanation
- Duplicate styles across sections
- Overly specific selectors
- Important declarations without justification

### CSS Writing Guidelines
```css
/* ✅ CORRECT - Well organized component */
.luvmap-button {
  /* Layout properties first */
  display: flex;
  position: relative;
  
  /* Box model */
  padding: 16px 28px;
  border: none;
  border-radius: 12px;
  
  /* Visual properties */
  background: linear-gradient(to right, var(--blue-200), var(--purple-200));
  box-shadow: 0px 4px 12px 0px var(--lb-black-900-alpha-25);
  
  /* Typography */
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 600;
  color: var(--text-color);
  
  /* Interaction */
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ❌ INCORRECT - Poor organization and hardcoded values */
.bad-button {
  cursor: pointer;
  background: #47aaff; /* hardcoded color */
  font-family: Arial; /* hardcoded font */
  color: #333 !important; /* unnecessary !important */
  padding: 16px 28px;
  position: relative;
}
```

**Remember: Consistency is key to maintainable code. Always follow established patterns rather than creating new ones.**
