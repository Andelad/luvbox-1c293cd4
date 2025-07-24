# LuvBox Component Styling Guide

> **⚠️ SOURCE OF TRUTH**: For current implementation details, always check:
> - **Components**: `/src/styles/components.css` 
> - **Colors**: `/src/styles/colors.css`
> - **Typography**: `/src/styles/typography.css`
> - **Button Component**: `/src/elements/button.tsx`
>
> This guide provides patterns and examples but CSS files contain the definitive implementation.

## Quick Navigation

### 🎯 Find What You Need:
- **Button styling**: Search `.form-button-` in `/src/styles/components.css`
- **Form styling**: Search `.form-input` in `/src/styles/components.css`  
- **Modal styling**: Search `.modal-` in `/src/styles/components.css`
- **Color variables**: Browse `/src/styles/colors.css`
- **Typography classes**: Browse `/src/styles/typography.css`

## Button System

### Primary Usage: Use the Updated shadcn/ui Button Component

```tsx
import { Button } from "@/elements/button";

// Primary button (success green)
<Button variant="primary" size="large">Save Changes</Button>
<Button variant="primary" size="small">Quick Action</Button>

// Secondary button (lb-black variations)
<Button variant="secondary" size="large">Cancel</Button>
<Button variant="secondary" size="small">Close</Button>

// Other variants available
<Button variant="outline">Outline Style</Button>
<Button variant="ghost">Minimal Style</Button>
<Button variant="destructive">Delete Action</Button>
<Button variant="link">Link Style</Button>
```

### CSS Classes Alternative (for non-React contexts)

```css
/* Large buttons (48px height) */
.form-button-primary          /* Primary green */
.form-button-secondary        /* Secondary lb-black */

/* Small buttons (40px height) */
.form-button-primary-small    /* Primary green, smaller */
.form-button-secondary-small  /* Secondary lb-black, smaller */
```

### Color Usage
- **See current implementation**: `/src/styles/colors.css` for all available variables
- **Button colors**: Check `/src/elements/button.tsx` for exact usage
- **Form colors**: Search `.form-` classes in `/src/styles/components.css`

## Form Components

### Input Fields

```tsx
// Use consistent CSS classes
<input className="form-input" placeholder="Enter text..." />
<textarea className="form-textarea" placeholder="Enter description..." />
<select className="form-select">
  <option>Choose option</option>
</select>
```

### Labels

```tsx
<label className="form-label">Regular Label</label>
<label className="form-label-large">Large Label</label>
```

### Form Characteristics
- **Minimum height**: 48px for accessibility
- **Border**: 2px solid `var(--lb-black-200)`, changes to `var(--blue-500)` on focus
- **Focus ring**: 2px `var(--blue-200)` ring for visual feedback
- **Disabled state**: Gray background with reduced opacity

## Modal/Dialog System

### Consistent Dialog Structure

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/elements/dialog";

<Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="modal-content">
    <DialogHeader className="modal-header">
      <DialogTitle className="modal-title">Dialog Title</DialogTitle>
      <DialogDescription className="modal-description">
        Dialog description text
      </DialogDescription>
    </DialogHeader>
    <div className="modal-footer">
      <Button variant="secondary" size="large">Cancel</Button>
      <Button variant="primary" size="large">Confirm</Button>
    </div>
  </DialogContent>
</Dialog>
```

### Modal Characteristics
- **Background**: `var(--lb-black-0)` (white)
- **Border**: 2px solid `var(--lb-black-200)` with rounded corners (0.75rem)
- **Footer**: Flex layout with consistent button spacing
- **Responsive**: Stacks buttons on mobile, side-by-side on desktop

## Design Principles

### 1. Accessibility First
- Minimum 48px touch targets for buttons and interactive elements
- High contrast ratios using lb-black color variations
- Focus rings for keyboard navigation
- Proper ARIA attributes through shadcn/ui components

### 2. Consistent Color Usage
- **Success Green**: `var(--success-green-500)` for primary actions
- **LB Black Variations**: From `var(--lb-black-100)` to `var(--lb-black-900)` for secondary elements
- **Blue accents**: `var(--blue-500)` for focus states and links
- **No hardcoded colors**: Always use CSS variables

### 3. Size Standards
- **Large buttons**: 48px height (default for most use cases)
- **Small buttons**: 40px height (for compact interfaces)
- **Form inputs**: 48px minimum height for touch accessibility

### 4. Responsive Design
- Button layouts stack on mobile, side-by-side on desktop
- Form elements scale appropriately across breakpoints
- Modal content adapts to screen size

## Migration Guide

### Updating Existing Components

1. **Replace custom button styles** with `<Button>` component:
   ```tsx
   // Old
   <button className="custom-button-style">Click me</button>
   
   // New
   <Button variant="primary" size="large">Click me</Button>
   ```

2. **Update form inputs** to use consistent classes:
   ```tsx
   // Old
   <input className="custom-input-style" />
   
   // New
   <input className="form-input" />
   ```

3. **Standardize modals** using new CSS classes:
   ```tsx
   // Old
   <DialogContent className="custom-modal-styles">
   
   // New
   <DialogContent className="modal-content">
   ```

### Common Patterns

#### Confirm/Cancel Dialog
```tsx
<div className="modal-footer">
  <Button variant="secondary" size="large" onClick={onCancel}>
    Cancel
  </Button>
  <Button variant="primary" size="large" onClick={onConfirm}>
    Confirm
  </Button>
</div>
```

#### Form with Submit
```tsx
<form className="space-y-6">
  <div>
    <label className="form-label">Name</label>
    <input className="form-input" type="text" />
  </div>
  <div className="modal-footer">
    <Button variant="secondary" size="large" type="button">
      Cancel
    </Button>
    <Button variant="primary" size="large" type="submit">
      Save
    </Button>
  </div>
</form>
```

## Special Cases

### CTA Buttons (Homepage)
Keep existing custom CTA button styling as requested - these remain separate from the standard button system.

### Icon Buttons
```tsx
<Button variant="ghost" size="icon">
  <IconComponent />
</Button>
```

## Quality Checklist

Before implementing new components, ensure:

- [ ] Uses `var(--color-name)` instead of hardcoded colors
- [ ] Follows 48px minimum height for interactive elements
- [ ] Implements proper focus states
- [ ] Uses consistent button variants (primary/secondary)
- [ ] Follows responsive design patterns
- [ ] Maintains accessibility standards
