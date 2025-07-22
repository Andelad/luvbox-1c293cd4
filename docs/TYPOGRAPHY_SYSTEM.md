# LuvBox Typography System

## Overview
The LuvBox typography system provides consistent, scalable text styling across both the app and website. It uses a **responsive rem-based system** that automatically scales typography based on screen size:

- **Mobile (< 768px)**: 14px root font size
- **Desktop (≥ 768px)**: 16px root font size

All typography scales proportionally with the root font size, ensuring optimal readability across all devices.

## Font Families

### Primary Fonts
- **EB Garamond** (serif) - Headlines, display text, elegant content
- **Source Sans 3** (sans-serif) - Body text, UI elements, readable content  
- **Spline Sans Mono** (monospace) - Code, technical content, data

### Usage Guidelines
```css
/* ✅ CORRECT - Use font family variables */
font-family: 'EB Garamond', serif;
font-family: 'Source Sans 3', sans-serif;
font-family: 'Spline Sans Mono', monospace;

/* ❌ INCORRECT - Don't use generic or hardcoded fonts */
font-family: Arial, sans-serif;
font-family: "Times New Roman", serif;
```

## Typography Scales

### App Typography (Compact Scale)
Optimized for app interface - compact sizing that scales responsively.

| Class | Size | Mobile (14px root) | Desktop (16px root) | Line Height | Use Case |
|-------|------|-------------------|---------------------|-------------|----------|
| `text-app-xs` | 0.75rem | 10.5px | 12px | 1rem | Fine print, metadata |
| `text-app-sm` | 0.875rem | 12.25px | 14px | 1.25rem | Captions, labels |
| `text-app-base` | 1rem | 14px | 16px | 1.5rem | Body text, paragraphs |
| `text-app-lg` | 1.125rem | 15.75px | 18px | 1.75rem | Emphasized text |
| `text-app-xl` | 1.25rem | 17.5px | 20px | 1.875rem | Subheadings |
| `text-app-2xl` | 1.5rem | 21px | 24px | 2rem | Section headings |
| `text-app-3xl` | 1.875rem | 26.25px | 30px | 2.25rem | Page titles |

### Website Typography (Generous Scale)
Larger scale for website content - optimized for reading and marketing content.

| Class | Size | Mobile (14px root) | Desktop (16px root) | Line Height | Use Case |
|-------|------|-------------------|---------------------|-------------|----------|
| `text-web-xs` | 1rem | 14px | 16px | 1.5rem | Fine print, metadata |
| `text-web-sm` | 1.125rem | 15.75px | 18px | 1.75rem | Captions, labels |
| `text-web-base` | 1.25rem | 17.5px | 20px | 2rem | Body text, paragraphs |
| `text-web-lg` | 1.375rem | 19.25px | 22px | 2.125rem | Emphasized text |
| `text-web-xl` | 1.625rem | 22.75px | 26px | 2.375rem | Subheadings |
| `text-web-2xl` | 2rem | 28px | 32px | 2.75rem | Section headings |
| `text-web-3xl` | 2.5rem | 35px | 40px | 3rem | Page titles |
| `text-web-4xl` | 3.25rem | 45.5px | 52px | 1.2 | Hero headings |

## Semantic Typography Classes

### App Semantic Classes
```css
.text-app-display    /* Large titles - EB Garamond, 1.875rem (26.25px → 30px), semibold */
.text-app-heading    /* Section headers - EB Garamond, 1.5rem (21px → 24px), semibold */
.text-app-subheading /* Subsection headers - EB Garamond, 1.25rem (17.5px → 20px), medium */
.text-app-body       /* Body text - Source Sans 3, 1rem (14px → 16px), normal */
.text-app-caption    /* Small text - Source Sans 3, 0.875rem (12.25px → 14px), normal */
.text-app-code       /* Code text - Spline Sans Mono, 0.875rem (12.25px → 14px), normal */
```

### Website Semantic Classes
```css
.text-web-hero       /* Hero headings - EB Garamond, 3.25rem (45.5px → 52px), semibold */
.text-web-display    /* Large titles - EB Garamond, 2.5rem (35px → 40px), semibold */
.text-web-heading    /* Section headers - EB Garamond, 2rem (28px → 32px), semibold */
.text-web-subheading /* Subsection headers - EB Garamond, 1.625rem (22.75px → 26px), medium */
.text-web-body       /* Body text - Source Sans 3, 1.25rem (17.5px → 20px), normal */
.text-web-caption    /* Small text - Source Sans 3, 1.125rem (15.75px → 18px), normal */
.text-web-code       /* Code text - Spline Sans Mono, 1.125rem (15.75px → 18px), normal */
```

## Usage Examples

### ✅ Correct Usage
```tsx
// App components
<h1 className="text-app-display">Dashboard</h1>
<p className="text-app-body">This is body text (14px mobile, 16px desktop).</p>
<code className="text-app-code">console.log('hello')</code>

// Website components  
<h1 className="text-web-hero">Welcome to LuvBox</h1>
<p className="text-web-body">This is body text (17.5px mobile, 20px desktop).</p>
<small className="text-web-caption">© 2025 LuvBox</small>

// Direct Tailwind usage with custom sizes (automatically responsive)
<span className="text-app-lg font-sans">Custom sized text</span>
<span className="text-web-xl font-serif font-medium">Website emphasis</span>
```

### ❌ Incorrect Usage
```tsx
// Don't hardcode font sizes
<p style={{ fontSize: '16px' }}>Body text</p>

// Don't use generic fonts
<h1 className="font-serif">Title</h1> // Use specific semantic classes

// Don't mix app/website scales inappropriately
<div className="app-context">
  <p className="text-web-body">This is too large for app UI</p>
</div>
```

## Responsive Typography System

### Root Font Size Scaling
```css
/* Mobile: Base font size */
html {
  font-size: 14px;
}

/* Desktop: Scaled up for better readability */
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}
```

All rem-based typography automatically scales with these breakpoints, providing:
- **Better mobile experience** with compact, readable text
- **Enhanced desktop readability** with larger, more comfortable sizing
- **Consistent proportional relationships** across all screen sizes

### Custom Properties Reference

### Font Size Variables
```css
/* App Scale - Scales with root font size */
--app-text-xs: 0.75rem;
--app-text-sm: 0.875rem;
--app-text-base: 1rem;
--app-text-lg: 1.125rem;
--app-text-xl: 1.25rem;
--app-text-2xl: 1.5rem;
--app-text-3xl: 1.875rem;

/* Website Scale - Scales with root font size */
--web-text-xs: 1rem;
--web-text-sm: 1.125rem;
--web-text-base: 1.25rem;
--web-text-lg: 1.375rem;
--web-text-xl: 1.625rem;
--web-text-2xl: 2rem;
--web-text-3xl: 2.5rem;
--web-text-4xl: 3.25rem;
```

### Line Height Variables
```css
/* App Leading - Scales with root font size */
--app-leading-xs: 1rem;
--app-leading-sm: 1.25rem;
--app-leading-base: 1.5rem;
--app-leading-lg: 1.75rem;
--app-leading-xl: 1.875rem;
--app-leading-2xl: 2rem;
--app-leading-3xl: 2.25rem;

/* Website Leading - Scales with root font size */
--web-leading-xs: 1.5rem;
--web-leading-sm: 1.75rem;
--web-leading-base: 2rem;
--web-leading-lg: 2.125rem;
--web-leading-xl: 2.375rem;
--web-leading-2xl: 2.75rem;
--web-leading-3xl: 3rem;
--web-leading-4xl: 1.2;
```

### Font Weight Variables
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
```

## Component Context Guidelines

### When to Use App Scale
- App dashboard and interface components
- Dense information displays
- Forms and input fields
- Navigation menus
- Data tables and lists

### When to Use Website Scale  
- Marketing pages and landing pages
- Blog posts and articles
- About pages and content pages
- Hero sections
- Call-to-action sections

## Integration with Design System

### Color Integration
Typography classes work seamlessly with the OKLCH color system:

```tsx
<h1 className="text-web-hero text-[var(--lime-700)]">
  Colored Heading
</h1>

<p className="text-app-body text-[var(--lb-black-800)]">
  Body text with semantic color
</p>
```

### Responsive Typography
Use Tailwind's responsive prefixes with the custom scales:

```tsx
<h1 className="text-app-lg md:text-app-xl lg:text-app-2xl">
  Responsive App Heading
</h1>

<h1 className="text-web-xl md:text-web-2xl lg:text-web-hero">
  Responsive Website Heading
</h1>
```

## Maintenance Guidelines

### Adding New Typography Scales
1. Add CSS custom properties to `src/styles/globals.css`
2. Update Tailwind config in `tailwind.config.ts`
3. Create semantic classes if needed
4. Update this documentation
5. Update the developers handbook

### Performance Considerations
- **Responsive root font sizing** provides optimal reading experience across devices
- **Rem-based system** ensures consistent scaling and accessibility compliance
- Fonts are loaded with `font-display: swap` for optimal performance
- Font files are hosted by Google Fonts with optimized loading
- Only necessary font weights are loaded (400, 500, 600)
- **Automatic scaling** reduces need for responsive typography overrides

---

## Quick Reference

### Typography Checklist
- [ ] Use semantic classes (`text-app-body`, `text-web-heading`) when possible
- [ ] Use app scale for app interface components
- [ ] Use website scale for marketing/content pages
- [ ] Reference CSS custom properties for custom implementations
- [ ] Combine with OKLCH color system variables
- [ ] Test responsive behavior across breakpoints

### When in Doubt
- Check existing similar components for typography patterns
- Use semantic classes over direct font size classes
- Follow the app vs website scale guidelines
- Consult this documentation and the developers handbook
