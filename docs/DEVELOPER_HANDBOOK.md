# LuvBox Developer Handbook

## 🚨 MUST READ - CRITICAL RULES (AI AGENTS)

### **❌ ABSOLUTE MUST-NOTS - STOP IMMEDIATELY IF YOU SEE THESE:**

1. **🎨 HARDCODED COLORS** - NEVER use:
   - `rgba(255,255,255,0.1)` 
   - `#ffffff` or any hex codes
   - `bg-blue-500` or Tailwind color classes
   - **✅ ONLY USE:** `var(--color-name)` from CSS variables

2. **🚀 IMPLEMENTING WITHOUT PERMISSION** - NEVER:
   - Choose an option for the user when they ask for "options"
   - Implement complex solutions without user approval
   - Add animations/effects beyond what was requested
   - **✅ ALWAYS:** Present options first, wait for user choice

3. **📝 OVERENGINEERING** - NEVER add:
   - Complex CSS animations without explicit request
   - Multiple new files/hooks for simple tasks
   - Background effects, glows, or visual enhancements not asked for
   - **✅ KEEP IT:** Simple, minimal, exactly what was requested

4. **🔧 BREAKING ESTABLISHED LUVBOX HOUSE STYLING** - NEVER:
   - Prioritize shadcn/ui component styling over LuvBox house style
   - Use shadcn/ui components without restyling to match LuvBox design
   - Keep minimal/flat styling when LuvBox house style has gradients/shadows
   - **✅ ALWAYS:** Apply LuvBox house style (/styles/) over shadcn/ui defaults

5. **⚡ DEVELOPMENT SERVER** - NEVER:
   - Run `npm run dev` without checking if server exists
   - Start multiple servers on same port
   - **✅ ALWAYS:** Use `npm run dev:check` (smart start)

### **🎯 COMPONENT STYLING PRIORITY ORDER - CRITICAL:**

**HIGHEST PRIORITY:** LuvBox house style (/styles/) consistency
1. **Use LuvBox CSS classes FIRST** (.luvmap-button, .form-button-primary, etc.)
2. **Restyle shadcn/ui components** to match LuvBox house style when using them
3. **Prioritize gradients, shadows, LuvBox visual identity** over flat shadcn/ui defaults
4. **Use `/styles/` as the source of truth** for visual design
5. **Only use shadcn/ui for behavior/structure**, restyle for LuvBox appearance

**LOWER PRIORITY:** shadcn/ui component defaults (must be restyled to LuvBox house style)

### **📋 MANDATORY COMPONENT AUDIT STEPS:**
Before changing any component:
- [ ] Does this follow LuvBox house style (/styles/) visual design?
- [ ] Are shadcn/ui components being restyled to match LuvBox appearance?
- [ ] Does the component use LuvBox gradients, shadows, and visual identity?
- [ ] Does the component use `var(--color-name)` CSS variables consistently?
- [ ] Would applying LuvBox styling improve visual consistency?

### **🎯 BEFORE EVERY CODE CHANGE - ASK:**
- [ ] Am I using `var(--color-name)` for ALL colors?
- [ ] Did the user explicitly ask for this complexity?
- [ ] Am I presenting options or implementing without permission?
- [ ] Can I use /assets/ui/ components instead of custom styling?
- [ ] Am I removing legacy CSS classes that conflict with component defaults?
- [ ] Should I check if dev server is running before starting new one?

### **🔍 MANDATORY VALIDATION STEPS:**
1. **Color Check:** Search your code for `rgba(`, `#`, `rgb(`, `hsl(` - If found, STOP and use CSS variables
2. **Component Check:** Search for shadcn/ui components without LuvBox styling - MUST restyle to house style
3. **Permission Check:** If user said "options" or "how can we", present choices - DO NOT implement
4. **Complexity Check:** Count new files/hooks being created - If >1 for simple task, STOP and simplify
5. **Pattern Check:** Grep existing codebase for similar solutions - Use LuvBox house style patterns first

### **🚫 INSTANT FAIL CONDITIONS:**
- Any hardcoded color value (automatic violation)
- Using shadcn/ui components without restyling to LuvBox house style
- Prioritizing flat/minimal styling over LuvBox gradients and visual identity
- Implementing when user requested options/choices
- Implementing when user asked for "options" or "ways to"
- Creating new animation systems when LuvBox ones exist
- Adding visual effects not explicitly requested
- Bypassing established component patterns
- Running `npm run dev` without checking existing server first

---

## 🚀 Quick Start - What Do You Need?

### 🤖 AI Agent Quick Lookup
**Instant keyword-based navigation for AI agents:**

| **Keywords/Intent** | **Go To** | **Key Info** |
|---------------------|-----------|--------------|
| `color`, `styling`, `hex`, `background` | [🎨 Color System](#-color-system-standards) | Use `var(--color-name)`, never hardcoded colors |
| `animation`, `motion`, `scroll`, `fade`, `slide` | [🎬 Animation Standards](#-animation--motion-standards) | Use `<AnimatedSection>`, respect `prefers-reduced-motion` |
| `font`, `text`, `typography`, `size` | [🔤 Typography](#-typography-system-standards) | Use `text-app-*` or `text-web-*` classes |
| `form`, `input`, `button`, `UI`, `interface`, `height`, `component` | [🎯 LuvBox Design System](#-luvbox-design-system) + [📘 Component Styling Guide](COMPONENT_STYLING_GUIDE.md) | CSS design tokens, universal classes, component showcase |
| `consistent`, `styling`, `design`, `tokens`, `variables` | [🎯 LuvBox Design System](#-luvbox-design-system) | Central design control via CSS variables |
| `component`, `create`, `new`, `build` | [🧩 Component Development](#-component-development-standards) + [📘 Component Styling Guide](COMPONENT_STYLING_GUIDE.md) | Follow template, use TypeScript, consistent styling patterns |
| `dev server`, `npm run`, `port`, `terminal` | [⚡ Development Server](#-development-server-standards) | Check existing server first, use smart restart commands |
| `folder`, `import`, `path`, `organize` | [📁 Folder Structure](#-folder-structure-standards) | `shared/` for reusable, `app/` vs `website/` specific |
| `css`, `styles`, `class`, `globals` | [📝 CSS Organization](#-css-organization-standards) | Use CSS variables, follow naming conventions |
| `content`, `text`, `copy`, `strings` | [📄 Content Management](#-content-management-standards) | Centralized in `/content`, no hardcoded text |
| `icon`, `image`, `asset`, `svg` | [🖼️ Asset Management](#-asset-management-standards) | Organized by category, optimized formats |

### 🎯 Decision Trees for AI Agents

#### **"I need to style something"**
```
1. Is it a button/form/modal? → Use LuvBox house style (.luvmap-button, .form-button-primary, etc.) FIRST
2. If using shadcn/ui components → MUST restyle to match LuvBox visual identity  
3. Is it a color? → Use var(--color-name) from Color System
4. Is it text? → Use text-app-* or text-web-* from Typography  
5. Is it layout? → Follow LuvBox house style, ensure gradients/shadows match
6. Is it animation? → Use AnimatedSection from Animation Standards
```

#### **"I need to create something"**
```
1. Does LuvBox house style already have it? → Use .luvmap-*, .form-*, .modal-* classes first
2. Do I need shadcn/ui behavior? → Use component but restyle to LuvBox appearance
3. Does it already exist in shared/components? → Extend with LuvBox styling  
4. Is it reusable? → Put in shared/components with LuvBox house style
5. Is it app-specific? → Put in app/components, use LuvBox visual identity
6. Is it website-specific? → Put in website/components, follow LuvBox design system
```

#### **"User wants animation"**
```
1. Accessibility check: Does it respect prefers-reduced-motion? → YES required
2. Performance check: Does it use transform/opacity only? → YES required  
3. Implementation: Use AnimatedSection with predefined animation types
4. If new type needed: Extend existing components, don't create new
```

### Task-Based Navigation
## Overview
This handbook ensures all developers follow### 📋 Before You Start Checklist
- [ ] I know which section(s) to read for my task
- [ ] I've checked if a similar component already exists
- [ ] I understand the folder structure for my changes
- [ ] I know which color system and typography scale to use

### 📑 Complete Table of Contents
**Full handbook navigation for comprehensive reading:**

1. **[📁 Folder Structure Standards](#-folder-structure-standards)** - File organization, path mapping, component hierarchy
2. **[🎨 Color System Standards](#-color-system-standards)** - OKLCH palette, transparency, CSS variables usage
3. **[🔤 Typography System Standards](#-typography-system-standards)** - Dual-scale system, app vs website typography
4. **[🎯 UI & Form Standards](#-ui--form-standards)** - Interactive element sizing, accessibility, user experience
5. **[🧩 Component Development Standards](#-component-development-standards)** - Creation patterns, TypeScript, file naming
6. **[⚡ Development Server Standards](#-development-server-standards)** - Server management, port usage, efficient workflows
6. **[🎬 Animation & Motion Standards](#-animation--motion-standards)** - Performance, accessibility, animation components
7. **[📝 CSS Organization Standards](#-css-organization-standards)** - CSS structure, naming conventions, modularity
8. **[📄 Content Management Standards](#-content-management-standards)** - Centralized content, text management
9. **[🖼️ Asset Management Standards](#-asset-management-standards)** - Icons, images, fonts organization

---

## 📁 Folder Structure Standards established organizational practices for consistency, maintainability, and quality. **Always follow these guidelines rather than creating ad-hoc solutions.**

## � Quick Start - What Do You Need?

### Task-Based Navigation
**Jump directly to what you need based on your current task:**

| 🎯 **I'm doing...** | 📖 **Read these sections** | ⏱️ **Time** |
|---------------------|----------------------------|-------------|
| **Creating a new component** | [🧩 Component Development](#-component-development-standards) → [🎨 Color System](#-color-system-standards) → [🔤 Typography](#-typography-system-standards) | 5 min |
| **Adding animations** | [🎬 Animation Standards](#-animation--motion-standards) → [📝 CSS Organization](#-css-organization-standards) | 3 min |
| **Styling existing elements** | [🎨 Color System](#-color-system-standards) → [🔤 Typography](#-typography-system-standards) | 2 min |
| **Organizing files/folders** | [📁 Folder Structure](#-folder-structure-standards) | 2 min |
| **Working with content/text** | [📄 Content Management](#-content-management-standards) | 3 min |
| **Adding icons/images** | [🖼️ Asset Management](#-asset-management-standards) | 2 min |
| **Writing CSS** | [📝 CSS Organization](#-css-organization-standards) → [🎨 Color System](#-color-system-standards) | 4 min |
| **Setting up imports** | [📁 Folder Structure](#-folder-structure-standards) → [🧩 Component Development](#-component-development-standards) | 2 min |

### 🔍 Quick Reference Cheat Sheet

#### Essential Color Variables
```css
/* Primary Colors */
--lime-500        /* Brand primary */
--blue-500        /* Links, info */
--pink-500        /* Accents */
--purple-500      /* Interactive */
--lb-black-600    /* Main text */
--lb-black-0      /* Light text/backgrounds */

/* Status Colors */
--success-green-500  /* Success states */
--caution-red-500    /* Error states */
```

#### Essential Typography Classes
```css
/* App Scale (Compact) */
.text-app-hero     /* 2.5rem - Main headings */
.text-app-heading  /* 1.5rem - Section titles */
.text-app-body     /* 1rem - Body text */
.text-app-caption  /* 0.875rem - Small text */

/* Website Scale (Marketing) */
.text-web-hero     /* 4rem - Hero headings */
.text-web-heading  /* 2rem - Marketing headings */
.text-web-body     /* 1.125rem - Marketing body */
.text-web-caption  /* 1rem - Marketing captions */
```

#### Essential Animation Components
```tsx
/* Basic animations */
<AnimatedSection animation="fade|slideUp|slideDown|slideLeft|slideRight" delay={0}>
  <Content />
</AnimatedSection>

/* Staggered animations */
<StaggeredAnimatedSection staggerDelay={100} animation="slideUp">
  {items.map(item => <Item key={item.id} />)}
</StaggeredAnimatedSection>
```

### 📋 Instant Code Examples (Copy-Paste Ready)

#### Color Usage Patterns
```tsx
// ✅ Correct color usage
<div style={{ backgroundColor: 'var(--lime-500)', color: 'var(--lb-black-0)' }}>
<button style={{ backgroundColor: 'var(--purple-500)' }}>Click me</button>
<span style={{ color: 'var(--caution-red-600)' }}>Error message</span>
```

#### Typography Patterns  
```tsx
// ✅ App typography
<h1 className="text-app-hero">Main Title</h1>
<p className="text-app-body">Body text</p>

// ✅ Website typography  
<h1 className="text-web-hero">Marketing Hero</h1>
<p className="text-web-body">Marketing copy</p>
```

#### Component Creation Template
```tsx
// ✅ Standard component structure
interface ComponentProps {
  title: string;
  onClick?: () => void;
}

const Component: React.FC<ComponentProps> = ({ title, onClick }) => {
  return (
    <div 
      className="text-app-body"
      style={{ backgroundColor: 'var(--lime-100)', color: 'var(--lb-black-600)' }}
    >
      <span>{title}</span>
      {onClick && (
        <button 
          onClick={onClick}
          style={{ backgroundColor: 'var(--purple-500)', color: 'var(--lb-black-0)' }}
        >
          Action
        </button>
      )}
    </div>
  );
};

export default Component;
```

#### Animation Patterns
```tsx
// ✅ Basic scroll animation
<AnimatedSection animation="slideUp" delay={200}>
  <ContentBlock />
</AnimatedSection>

// ✅ Fade-only (preserves existing transforms)
<AnimatedSection animation="fade" delay={300}>
  <div className="transform -translate-x-1/2">
    <CenteredContent />
  </div>
</AnimatedSection>

// ✅ Staggered cards
<StaggeredAnimatedSection staggerDelay={150} animation="slideUp">
  {cards.map(card => <Card key={card.id} {...card} />)}
</StaggeredAnimatedSection>
```

#### Import Patterns
```tsx
// ✅ Correct imports using path mapping
import { AnimatedSection } from '@/shared/components';
import { Button } from '@/shared/components';
import { useScrollAnimation } from '@/shared/hooks';
import { CONTENT } from '@/content';
```

#### File Organization Quick Rules
```
✅ shared/components/    → Reusable across app & website
✅ app/components/       → App-specific only  
✅ website/components/   → Website-specific only
✅ Use index.ts          → For barrel exports
✅ PascalCase.tsx        → Component file names
```

#### Documentation Organization
```
✅ README.md            → Keep in project root (main project info)
✅ docs/                → All development documentation
✅ docs/DEVELOPER_HANDBOOK.md → Primary development guide
❌ Root-level .md files → Move to docs/ (except README.md)

Examples:
✅ docs/IMPLEMENTATION_NOTES.md
✅ docs/REFACTOR_SUMMARY.md  
✅ docs/ARCHITECTURE_DECISIONS.md
❌ CUBE_REFACTOR_SUMMARY.md (in root)
❌ IMPLEMENTATION_NOTES.md (in root)
```

### 🚨 Common Gotchas - Check These First
- ❌ **Never use hardcoded colors** (`#ffffff`, `bg-blue-500`)
- ❌ **Never use hardcoded fonts** (`font-family: Arial`)
- ❌ **Never create custom animations** without checking existing components
- ❌ **Never ignore `prefers-reduced-motion`** in animations
- ✅ **Always use CSS variables** (`var(--lime-500)`)
- ✅ **Always use typography classes** (`text-app-body`)
- ✅ **Always check existing components** before creating new ones

### 🤖 AI Agent Rules (Priority Order)

#### **BEFORE suggesting ANY code:**
1. **Check existing components** - Don't recreate what exists
2. **Verify accessibility** - Must respect `prefers-reduced-motion` for animations  
3. **Use established patterns** - Follow templates above, don't invent new approaches
4. **Reference handbook sections** - Point to relevant documentation

#### **WHEN user requests styling:**
1. **LuvBox House Style**: Use `/styles/` classes first (.luvmap-button, .form-*, .modal-*, etc.)
2. **Colors**: Use `var(--color-name)` from Color System cheat sheet
3. **Text**: Use `text-app-*` or `text-web-*` classes  
4. **Animation**: Use `<AnimatedSection>` components only
5. **shadcn/ui**: If using, MUST restyle to match LuvBox visual identity (gradients, shadows, etc.)
6. **Layout**: Follow LuvBox house style, ensure visual consistency

#### **WHEN user requests new component:**
1. **Location**: Determine shared/ vs app/ vs website/ placement
2. **Template**: Use Component Creation Template above
3. **Exports**: Add to appropriate index.ts barrel export
4. **TypeScript**: Always include proper interface

#### **WHEN user requests animation:**
1. **Accessibility**: MUST include `prefers-reduced-motion` respect
2. **Performance**: MUST use only `transform` and `opacity`  
3. **Components**: Use `AnimatedSection` or `StaggeredAnimatedSection`
4. **Extensions**: If new animation type needed, extend existing vs create new

#### **CRITICAL - Always Recommend Handbook Updates When:**
- User requests patterns not covered in examples
- New successful patterns emerge that should be documented
- Existing patterns prove insufficient or limiting
- Performance or accessibility requirements evolve

#### **COMPONENT STYLING MIGRATION PRIORITY:**
When encountering any components (shadcn/ui or legacy):
1. **IMMEDIATE ACTION:** Apply LuvBox house style from `/styles/` over any other styling
2. **PRESERVE:** shadcn/ui component behavior and accessibility features
3. **RESTYLE:** Visual appearance to match LuvBox gradients, shadows, visual identity
4. **REPLACE:** Flat/minimal styling with LuvBox rich visual design
5. **DOCUMENT:** Update this handbook if new LuvBox styling patterns emerge

**LuvBox House Style Priority:**
- `.luvmap-button` with gradients/shadows → Keep over flat shadcn/ui buttons
- `.form-button-primary` with LuvBox styling → Keep over minimal button variants
- `.modal-*` classes with LuvBox design → Apply to shadcn/ui Dialog components
- Custom styling that matches LuvBox visual identity → Prioritize over external defaults

### 📋 Before You Start Checklist
- [ ] I know which section(s) to read for my task
- [ ] I've checked if a similar component already exists
- [ ] I understand the folder structure for my changes
- [ ] I know which color system and typography scale to use

---

## �📁 Folder Structure Standards

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

## � LuvBox Design System

### **🎨 Design Token Architecture**

**THE SINGLE SOURCE OF TRUTH**: All component styling flows from CSS design tokens in `/src/styles/colors.css`

```css
/* Form Elements - ALL use these tokens */
--form-height: 40px;           /* Universal form element height */
--form-radius: 12px;           /* Universal border radius (rounded-xl) */
--form-bg: var(--lb-black-0);  /* Form background color */
--form-border: var(--lb-black-200); /* Form border color */
--form-border-focus: var(--blue-500); /* Focus state color */

/* Interactive Elements - tabs, toggles, menubar */
--interactive-height: 40px;    /* Consistent with forms */
--interactive-radius: 12px;    /* Consistent border radius */

/* Buttons - Only elements that can have different heights */
--button-height-small: 40px;   /* Small button height */
--button-height-large: 48px;   /* Large button height */

/* Cards & Containers */
--card-radius: 12px;           /* Card border radius */
--card-border: var(--lb-black-200); /* Card border color */

/* Dialogs & Modals */
--dialog-radius: 16px;         /* Slightly larger for prominence */
--dialog-overlay: rgba(0, 0, 0, 0.5); /* Modal overlay */
```

### **📏 Universal CSS Classes**

**USE THESE CLASSES** instead of individual component styling:

```css
/* Form Elements */
.luvbox-form-base          /* Standard input styling */
.luvbox-select-trigger     /* Select dropdown trigger */
.luvbox-select-content     /* Select dropdown content */
.luvbox-select-item        /* Select dropdown items */

/* Interactive Elements */
.luvbox-interactive-base   /* Tabs, toggles, menubar */

/* Buttons */
.luvbox-button-base        /* Button foundation */
.luvbox-button-small       /* 40px height button */
.luvbox-button-large       /* 48px height button */
.luvbox-button-primary     /* Primary button colors */
.luvbox-button-secondary   /* Secondary button colors */

/* Containers */
.luvbox-card-base          /* Card styling */
.luvbox-dialog-base        /* Dialog/modal styling */
.luvbox-dropdown-base      /* Dropdown/menu styling */
```

### **🎯 Component Height Standards**

| **Component Type** | **Height** | **Reason** |
|-------------------|------------|------------|
| **Form Elements** | `40px` | Consistent input experience |
| `input`, `select`, `command`, `input-otp` | `40px` | All form inputs same height |
| **Interactive Elements** | `40px` | Consistent with forms |
| `tabs`, `toggle`, `menubar` | `40px` | User expects same height as inputs |
| **Buttons** | `40px` OR `48px` | Only elements with size options |
| Small buttons | `40px` | Matches form elements |
| Large buttons | `48px` | More prominent CTAs |
| **Variable Height** | As needed | Content-dependent |
| `textarea`, `card`, `dialog` | Variable | Content determines height |

### **🔧 Implementation Workflow**

#### **1. Adding New Components**
```tsx
// ❌ DON'T: Individual styling
<input className="h-10 rounded-xl border-gray-300 px-3" />

// ✅ DO: Use universal class
<input className="luvbox-form-base" />
```

#### **2. Making Global Changes**
```css
/* Change ALL form elements at once */
:root {
  --form-height: 44px; /* Changed from 40px */
}
/* Every form element updates automatically! */
```

#### **3. Testing Component Consistency**
**Location**: Settings → Component Showcase  
**Purpose**: Visual testing ground for ALL components  
**Use**: Verify height consistency, focus states, styling  

### **🚨 CRITICAL RULES**

#### **Component Styling Priority Order:**
1. **LuvBox CSS Design Tokens** (highest priority)
2. **LuvBox Universal Classes** 
3. **Component-specific classes** (if needed)
4. **shadcn/ui defaults** (lowest priority - must be overridden)

#### **Height Consistency Rules:**
- **ALL form elements**: Must be 40px (`--form-height`)
- **ALL interactive elements**: Must be 40px (`--interactive-height`) 
- **Buttons only**: Can be 40px OR 48px (`--button-height-*`)
- **Variable elements**: `textarea`, `card`, `dialog` can vary

#### **Before Every Component Update:**
- [ ] Does it use CSS design tokens instead of hardcoded values?
- [ ] Does it follow the height standards above?
- [ ] Have I tested it in the Component Showcase?
- [ ] Will this change affect other components?

### **📱 Component Showcase Page**

**Access**: Settings → Component Showcase  
**Purpose**: Visual testing and design token validation  

**Features**:
- Live preview of ALL form elements at 40px height
- Focus state testing across components  
- Real-time design token display
- Interactive examples for consistency testing

**Use Cases**:
- Test global design token changes
- Verify new component consistency
- Debug styling inconsistencies
- Demo design system to stakeholders

### **🎨 Design Token Updates**

**When to Update Design Tokens:**
- User reports height inconsistencies
- Adding new component categories  
- Major design system changes
- Brand guideline updates

**How to Update:**
1. **Update tokens** in `/src/styles/colors.css`
2. **Test changes** in Component Showcase  
3. **Verify consistency** across all affected components
4. **Update handbook** if new patterns emerge

**Example Global Update:**
```css
/* Update all form heights globally */
:root {
  --form-height: 42px;        /* Changed from 40px */
  --interactive-height: 42px; /* Keep consistent */
  --button-height-small: 42px; /* Keep consistent */
}
/* All 60+ form elements update automatically! */
```

---

## �🎨 Color System Standards

### 🚨 CRITICAL: NO HARDCODED COLORS ALLOWED
**ANY hardcoded color is a VIOLATION of LuvBox standards:**
- ❌ `rgba(255,255,255,0.1)` 
- ❌ `#ffffff`, `#3d3535`, or ANY hex codes
- ❌ `bg-blue-500`, `text-red-600`, or ANY Tailwind color classes
- ❌ `backgroundColor: 'white'` or ANY color strings
- ✅ **ONLY ALLOWED:** `var(--color-name)` CSS variables

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

### 🛡️ Standards Enforcement & Checking

#### Automated Validation Commands
```bash
# Check for hardcoded colors (should return NO matches)
grep -r "rgba\|#[0-9a-fA-F]\|bg-\(blue\|red\|green\|yellow\|purple\)" src/

# Type checking (should pass without errors)
npm run type-check

# Find usage patterns before creating new ones
grep -r "AnimatedSection\|StaggeredAnimatedSection" src/
```

#### Pre-Implementation Checklist
Before writing ANY code, verify:
- [ ] **Color usage**: Will I use ONLY `var(--color-name)` CSS variables?
- [ ] **Permission**: Did user explicitly request implementation, or just ask for options?
- [ ] **Existing patterns**: Have I searched for existing solutions first?
- [ ] **Complexity**: Am I adding the minimum needed to solve the problem?

#### Code Review Red Flags
**Automatic rejection criteria:**
- Any color that's not `var(--color-name)`
- New files/hooks for simple modifications
- Visual effects beyond explicit requirements
- Implementing when user asked for "options" or "ways to"

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

## 📱 Responsive Design Standards

### Philosophy: Mobile-First, Accessibility-Focused
**All components and pages must work seamlessly across all device sizes without content overflow or usability issues. Prioritize touch-friendly interfaces and readable content on all screen sizes.**

### 🚨 CRITICAL RESPONSIVE RULES FOR AI AGENTS

#### **❌ NEVER CREATE:**
- Pages that add extra padding (`px-4 sm:px-6 lg:px-8`) on top of layout padding
- Components with fixed widths that don't scale down
- Content that extends beyond container edges on small screens
- Touch targets smaller than 44px on mobile devices
- Text that becomes unreadable on mobile

#### **✅ ALWAYS ENSURE:**
- **Layout Padding**: Use the app layout's built-in responsive padding system
- **Container Strategy**: Use `max-w-*` classes WITHOUT additional `px-*` for page-level containers
- **Content Fit**: Test all components at 320px width (smallest mobile)
- **Touch Targets**: Minimum 44px hit area for all interactive elements
- **Readable Text**: Minimum 16px font size on mobile to prevent zoom

### 📏 Responsive Layout Guidelines

#### **Page Container Strategy**
```tsx
// ✅ CORRECT - Let layout handle padding
<div className="max-w-4xl mx-auto">
  <div className="w-full max-w-2xl">
    {/* Content */}
  </div>
</div>

// ❌ WRONG - Double padding causes overflow
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content may overflow on small screens */}
</div>
```

#### **Responsive Breakpoints**
- **Mobile**: `max-width: 640px` - Priority for touch interaction
- **Tablet**: `641px - 1023px` - Hybrid touch/mouse interface  
- **Desktop**: `1024px+` - Full feature set with sidebar

#### **Testing Requirements**
- [ ] **320px width**: Content fits without horizontal scroll
- [ ] **Touch targets**: All interactive elements ≥ 44px
- [ ] **Text readability**: No text smaller than 16px on mobile
- [ ] **Container overflow**: No content extends beyond edges
- [ ] **Navigation usability**: All features accessible on mobile

### 🎯 Quick Validation Checklist

Before implementing any page or component:

- [ ] **No extra padding**: Component relies on layout's responsive padding
- [ ] **Container strategy**: Uses `max-w-*` without `px-*` for page containers  
- [ ] **Mobile testing**: Verified at 320px, 640px, and 1024px widths
- [ ] **Touch friendly**: All buttons/links meet 44px minimum
- [ ] **Accessible text**: Minimum 16px font size maintained on mobile

## 🎯 UI & Form Standards

### Philosophy: Accessibility-First Interactive Design
**Interactive elements should be generous in size, easy to interact with, and feel confident and professional. Prioritize user experience over visual minimalism.**

### 🚨 CRITICAL SIZING RULES FOR AI AGENTS

#### **❌ NEVER CREATE:**
- Form inputs shorter than 40px height
- Buttons smaller than 40px in any dimension
- Touch targets smaller than 44px (mobile requirement)
- Text smaller than 16px in form labels/inputs
- Cramped spacing between form elements

#### **✅ ALWAYS ENSURE:**
- **Minimum heights**: 40-48px for all interactive elements
- **Comfortable padding**: `px-4 py-3` minimum for buttons/inputs
- **Generous spacing**: `space-y-6` or `space-y-8` between form sections
- **Large text**: `text-lg` minimum for form elements
- **Clear visual hierarchy**: Bold labels, high contrast

### 📏 Standard Sizing Guidelines

#### **Using CSS Utility Classes (Recommended)**
```tsx
// ✅ Use predefined form classes for consistency
<input className="form-input" />
<textarea className="form-textarea" />
<button className="form-button-primary">Submit</button>
<button className="form-button-secondary">Cancel</button>

// ✅ Form layout classes
<div className="form-section">
  <label className="form-label">Field Label</label>
  <div className="form-field">
    <input className="form-input" />
    <p className="form-helper-text">Helper text</p>
  </div>
</div>
```

#### **Manual Styling (When Classes Don't Fit)**
```tsx
// ✅ Standard input sizing
<input 
  className="w-full px-4 py-3 text-lg rounded-lg"
  style={{ 
    minHeight: '48px',
    border: '2px solid var(--lb-black-200)',
    backgroundColor: 'var(--lb-black-0)'
  }}
/>

// ✅ Standard textarea sizing  
<textarea
  className="w-full min-h-[160px] p-4 text-lg rounded-lg resize-none"
  style={{
    border: '2px solid var(--lb-black-200)',
    backgroundColor: 'var(--lb-black-0)'
  }}
  rows={6}
/>

// ✅ Standard select sizing
<Select>
  <SelectTrigger 
    className="w-full text-lg"
    style={{ 
      height: '48px',
      border: '2px solid var(--lb-black-200)',
      backgroundColor: 'var(--lb-black-0)'
    }}
  >
</Select>
```

#### **Button Elements**
```tsx
// ✅ Primary button sizing
<button
  className="px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:opacity-90"
  style={{ 
    minHeight: '48px',
    backgroundColor: 'var(--purple-500)', 
    color: 'var(--lb-black-0)'
  }}
>
  Submit
</button>

// ✅ Secondary button sizing
<button
  className="px-6 py-3 text-lg rounded-lg transition-all"
  style={{ 
    minHeight: '40px',
    border: '2px solid var(--lb-black-300)',
    backgroundColor: 'var(--lb-black-0)',
    color: 'var(--lb-black-800)'
  }}
>
  Cancel
</button>
```

#### **Form Layout & Spacing**
```tsx
// ✅ Generous form spacing
<form className="space-y-8">
  <div className="space-y-4">
    <label className="text-lg font-medium" style={{ color: 'var(--lb-black-800)' }}>
      Field Label
    </label>
    {/* Input element */}
  </div>
  
  <div className="flex items-center justify-between pt-6">
    {/* Support text and submit button */}
  </div>
</form>
```

### 🎨 Visual Design Standards

#### **Color & State Management**
- **Default state**: `border: '2px solid var(--lb-black-200)'`
- **Focus state**: `border: '2px solid var(--purple-500)'` + `focus:ring-3 focus:ring-purple-200`
- **Error state**: `border: '2px solid var(--red-500)'`
- **Disabled state**: `opacity-50 cursor-not-allowed`

#### **Typography in Forms**
- **Labels**: `text-lg font-medium` minimum
- **Input text**: `text-lg` minimum
- **Helper text**: `text-base` minimum
- **Error messages**: `text-base` with error color

#### **Spacing Hierarchy**
- **Between sections**: `space-y-8` (32px)
- **Within sections**: `space-y-4` (16px)  
- **Between related elements**: `space-y-3` (12px)
- **Internal padding**: `p-4` (16px) minimum

### 🔍 Why These Standards Exist

#### **Accessibility Benefits**
- **Touch targets**: 44px minimum meets WCAG AA standards
- **Text size**: 16px+ prevents zoom on mobile devices
- **Color contrast**: 2px borders ensure visibility
- **Focus states**: Clear keyboard navigation

#### **User Experience Benefits**
- **Confidence**: Larger elements feel more trustworthy
- **Efficiency**: Easier to tap/click accurately
- **Readability**: Generous spacing reduces cognitive load
- **Professional feel**: Substantial UI elements convey quality

#### **Technical Benefits**
- **Mobile-first**: Works well across all device sizes
- **Consistency**: Standardized sizing creates coherent interface
- **Maintainability**: Clear rules prevent ad-hoc sizing decisions

### ❌ Common Mistakes to Avoid

#### **Size-Related**
- Using `h-8` (32px) or smaller for interactive elements
- `text-sm` or `text-base` for important form elements
- `space-y-2` or `space-y-3` for major form sections
- `px-2 py-1` padding on buttons

#### **Visual Hierarchy**
- Same text size for labels and inputs
- Insufficient contrast between states
- Cramped layouts that feel crowded
- Missing focus states or hover feedback

### 🎯 Quick Validation Checklist

Before implementing any form or interactive element:

- [ ] **Height check**: All interactive elements ≥ 40px
- [ ] **Text size**: All form text ≥ `text-lg` (18px)
- [ ] **Spacing**: Major sections use `space-y-6` or larger
- [ ] **Padding**: Buttons have `px-6 py-3` minimum
- [ ] **States**: Focus, hover, and disabled states defined
- [ ] **Colors**: Only CSS variables used
- [ ] **Mobile**: Touch targets ≥ 44px
- [ ] **Accessibility**: Labels associated with inputs

## ⚡ Development Server Standards

### Server Management Philosophy
**Never waste resources or create port conflicts. Always check for existing servers before starting new ones.**

### 🚨 CRITICAL RULES FOR AI AGENTS

#### **❌ NEVER DO:**
- Run `npm run dev` without checking if server already exists
- Start multiple development servers on same port
- Ignore existing running processes
- Kill terminals with running servers unnecessarily

#### **✅ ALWAYS DO:**
- Check server status before starting new one
- Use `npm run dev:restart` when you need to restart
- Use `npm run dev:check` for smart server management
- Preserve existing server sessions when possible

### 🔧 Available Commands

#### **Smart Development Commands**
```bash
# ✅ Preferred: Check if server running, start only if needed
npm run dev:check

# ✅ Check server status without starting
npm run dev:status  

# ✅ Force restart when needed (kills existing + starts new)
npm run dev:restart

# ❌ Avoid: Blind start (may conflict with existing server)
npm run dev
```

#### **Manual Server Management**
```bash
# Check if server is running
curl -s http://localhost:8080 > /dev/null && echo "Running" || echo "Stopped"

# Find development server process
ps aux | grep -E "(vite|node.*vite)" | grep -v grep

# Kill existing server (if restart needed)
pkill -f 'vite'
```

### 🎯 AI Agent Decision Tree

#### **"User wants to see changes/run development server"**

**ALWAYS present options first - never auto-execute terminal commands**
```
1. Present choice → "I can check server status or restart it. Which would you prefer?"
2. If user chooses check → Use npm run dev:status  
3. If user chooses restart → Use npm run dev:restart
4. If user specifies → Follow their exact preference
```

**Option details:**
- **Check status**: `npm run dev:status` - shows if server is running
- **Smart start**: `npm run dev:check` - starts only if not running  
- **Force restart**: `npm run dev:restart` - kills existing and starts fresh
```
1. Direct restart → Use npm run dev:restart
2. Skip status check when user is certain
```

#### **"Making code changes"**
```
1. Server running? → Changes auto-reload, no action needed
2. Server not running? → Offer: npm run dev:check or npm run dev:restart
3. Server issues? → Offer: npm run dev:restart or npm run dev:status first
```

#### **"User Reports Server Issues"**
```
Present options:
- "Check status first": npm run dev:status
- "Force restart": npm run dev:restart
- "Smart start": npm run dev:check
```

### 📋 Port Configuration
- **Development Server**: Port 8080 (configured in `vite.config.ts`)
- **Host**: `::` (all interfaces, includes IPv4/IPv6)
- **URL**: http://localhost:8080

### 🚀 Best Practices for AI Agents
1. **Always check first**: Use `npm run dev:status` or `dev:check` instead of blind `npm run dev`
2. **Preserve sessions**: Don't kill running servers unless necessary
3. **Use smart commands**: Leverage the helper scripts in `package.json`
4. **Inform users**: Tell them the server URL when it's running
5. **Resource efficiency**: Avoid duplicate servers consuming system resources

## 🎬 Animation & Motion Standards

### Animation Philosophy
LuvBox prioritizes **clean, accessible, and performant animations** that enhance user experience without overwhelming or excluding users. All animations must be **scalable, consistent, and respectful of user preferences**.

### Core Animation Principles

#### 1. Accessibility First
- **ALWAYS respect `prefers-reduced-motion`**
- Provide immediate fallbacks for users with motion sensitivity
- Never use animations that could trigger vestibular disorders
- Ensure animations don't interfere with screen readers

#### 2. Performance Guidelines
- **GPU-accelerated properties only**: `transform`, `opacity`, `filter`
- **Avoid animating**: `layout` properties (width, height, margin, padding)
- **Use hardware acceleration**: `will-change`, `transform: translateZ(0)`
- **Intersection Observer**: For scroll-triggered animations (not scroll listeners)

#### 3. Timing & Easing Standards
```css
/* LuvBox Standard Easing */
.luvbox-animation {
  transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Durations */
- Quick UI feedback: 150-300ms
- Content transitions: 400-600ms  
- Page transitions: 600-800ms
- Complex sequences: 800-1200ms
```

### Animation Architecture

#### Core Animation Components
**Always use these established components instead of creating custom solutions:**

```tsx
// Basic scroll-triggered animation
<AnimatedSection animation="slideUp" delay={200}>
  <YourContent />
</AnimatedSection>

// Staggered animations for lists/grids
<StaggeredAnimatedSection staggerDelay={100} animation="fade">
  {items.map(item => <Item key={item.id} />)}
</StaggeredAnimatedSection>

// Custom scroll animations
const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.1,
  triggerOnce: true
});
```

#### Animation Types & Usage

| Animation Type | Use Case | Implementation |
|---------------|----------|----------------|
| `fade` | Non-disruptive reveals, overlay content | `AnimatedSection animation="fade"` |
| `slideUp` | Cards, content blocks, sections | `AnimatedSection animation="slideUp"` |
| `slideDown` | Dropdowns, notifications | `AnimatedSection animation="slideDown"` |
| `slideLeft` | Content reveals, sidebars | `AnimatedSection animation="slideLeft"` |
| `slideRight` | Content reveals, navigation | `AnimatedSection animation="slideRight"` |

### Implementation Standards

#### ✅ CORRECT - Follow Established Patterns
```tsx
// Use provided animation components
<AnimatedSection animation="slideUp" delay={300}>
  <FeatureCard title="..." description="..." />
</AnimatedSection>

// Respect existing transforms
<AnimatedSection animation="fade"> {/* fade doesn't override transforms */}
  <div className="transform -translate-x-1/2"> {/* existing positioning preserved */}
    <TickerTape />
  </div>
</AnimatedSection>

// Accessibility-conscious timing
<AnimatedSection 
  animation="slideUp" 
  delay={0}        // No artificial delays for core content
  threshold={0.1}  // Trigger when 10% visible
>
  <ImportantContent />
</AnimatedSection>
```

#### ❌ WRONG - Avoid These Approaches
```tsx
// Never create custom animation logic
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
  // Custom scroll listener - BAD!
  window.addEventListener('scroll', handleScroll);
}, []);

// Never use non-GPU accelerated properties
<div style={{ 
  transition: 'width 300ms', // BAD - causes layout thrashing
  width: isOpen ? '300px' : '0px' 
}} />

// Never ignore accessibility
<div className="animate-bounce"> {/* No reduced motion consideration */}
  <FlashingContent />
</div>

// Never hardcode animation values
<div style={{ 
  transition: 'opacity 0.3s ease-in-out' // Use established classes instead
}} />
```

### Scalability Guidelines

#### When Adding New Animation Types
1. **Extend existing components** rather than creating new ones
2. **Add to `AnimatedSection` animation union type**
3. **Include CSS classes in `globals.css`** animation section
4. **Update this handbook** with new patterns
5. **Consider performance impact** on lower-end devices

#### Cross-Browser Compatibility Matrix
```css
/* LuvBox supports animations on: */
✅ Chrome 90+ (GPU acceleration, all features)
✅ Firefox 88+ (GPU acceleration, all features)  
✅ Safari 14+ (GPU acceleration, all features)
✅ Edge 90+ (GPU acceleration, all features)
⚠️ iOS Safari 13+ (reduced motion respected, basic animations)
⚠️ Android Chrome 88+ (performance varies by device)
❌ IE 11 (animations disabled, fallback content shown)
```

#### Animation Debugging
```css
/* Add to development builds for debugging */
.debug-animations * {
  animation-duration: 3s !important;
  transition-duration: 3s !important;
  outline: 2px solid red;
}
```

### Performance Monitoring

#### Animation Performance Checklist
- [ ] **No layout thrashing**: Animations only use `transform` and `opacity`
- [ ] **60fps maintained**: Test on slower devices (throttled CPU)
- [ ] **Reduced motion respected**: Test with `prefers-reduced-motion: reduce`
- [ ] **Intersection Observer used**: No scroll event listeners for triggers
- [ ] **GPU acceleration confirmed**: Check devtools layers panel
- [ ] **Memory usage stable**: No animation-related memory leaks
- [ ] **Battery impact minimal**: Test on mobile devices

### Future Animation Roadmap
When LuvBox grows, consider these scalable additions:
- **Page transitions** between routes (React Router integration)
- **Loading states** with skeleton animations
- **Micro-interactions** for form validation
- **Parallax scrolling** for marketing sections (performance-conscious)
- **Gesture animations** for mobile interactions

### Animation Handbook Maintenance
**This section should be updated when:**
- New animation components are added
- Performance requirements change
- Browser support matrix evolves
- Accessibility standards update
- New animation patterns prove successful

**Always consult this section before implementing animations.** If proposed animations don't fit these patterns, discuss architectural improvements rather than creating one-off solutions.

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
1. Does this follow LuvBox house style (/styles/) visual design?
2. If using shadcn/ui, am I restyling it to match LuvBox appearance?
3. Am I prioritizing LuvBox gradients/shadows over flat styling?
4. Am I using the established color system?
5. Am I using the established typography system?
6. Am I using the content management system?
7. Am I following the folder structure?
8. Am I using proper TypeScript types?

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

---

## 🤖 AI Agent Behavioral Guidelines

### Response Patterns for Common Scenarios

#### When User Asks "How can we..." or "Options for..."
```
❌ WRONG: Choose and implement an option
✅ CORRECT: Present 2-3 clear options with pros/cons, wait for choice
```

#### When User Requests Animation/Visual Effects
```
❌ WRONG: Add extra effects like glows, shadows, complex animations
✅ CORRECT: Implement exactly what was requested using existing LuvBox patterns
```

#### When Styling is Needed
```
❌ WRONG: Use any hardcoded color (#ffffff, rgba(), bg-blue-500)
✅ CORRECT: Use ONLY var(--color-name) from established CSS variables
```

#### When Creating New Components
```
❌ WRONG: Create from scratch without checking existing patterns  
✅ CORRECT: Search for similar components, extend existing patterns
```

### Recovery Actions for Violations

If you catch yourself about to violate these rules:
1. **STOP immediately** - Do not complete the violating action
2. **Acknowledge the mistake** - "I was about to use hardcoded colors, let me fix that"
3. **Use correct approach** - Find the appropriate CSS variable or existing pattern
4. **Verify compliance** - Double-check your solution follows all handbook rules

### Success Metrics for AI Agents
- **Zero hardcoded colors** in any code changes
- **Present options first** when user asks for choices or alternatives  
- **Use existing patterns** rather than creating new ones
- **Minimal complexity** - simplest solution that meets requirements
- **User permission** obtained before implementing complex features
