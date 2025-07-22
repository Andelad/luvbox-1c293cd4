# LuvBox Color System Implementation

## Overview
This document outlines the comprehensive color system implemented for LuvBox using OKLCH color space for better color consistency and accessibility.

## Color Palette

### Lime (Primary Green)
```css
--lime-900: oklch(21.75% 0.064 147);
--lime-800: oklch(30.23% 0.064 149.82);
--lime-700: oklch(38.71% 0.062 149.71);
--lime-600: oklch(47.25% 0.06 149.58);
--lime-500: oklch(55.81% 0.056 149.47);
--lime-400: oklch(64.43% 0.054 149.35);
--lime-300: oklch(73.09% 0.052 149.24);
--lime-200: oklch(81.82% 0.05 149.13);
--lime-100: oklch(90.61% 0.048 149.02);
--lime-50: oklch(97.05% 0.0481 148.92);
```

### Blue
```css
--blue-900: oklch(22.44% 0.021 216.51);
--blue-800: oklch(31.34% 0.03 216.51);
--blue-700: oklch(39.7% 0.037 216.51);
--blue-600: oklch(48.33% 0.046 216.51);
--blue-500: oklch(56.99% 0.053 216.51);
--blue-400: oklch(65.56% 0.062 216.51);
--blue-300: oklch(74.53% 0.07 216.51);
--blue-200: oklch(86.26% 0.0519 216.51);
--blue-100: oklch(91.36% 0.029 216.51);
--blue-50: oklch(95.76% 0.012 216.51);
```

### Pink
```css
--pink-900: oklch(22.71% 0.0582 52.29);
--pink-800: oklch(31.48% 0.0691 41.48);
--pink-700: oklch(40.18% 0.0833 41.77);
--pink-600: oklch(48.84% 0.0918 42.16);
--pink-500: oklch(57.46% 0.0955 42.5);
--pink-400: oklch(66.06% 0.0943 42.77);
--pink-300: oklch(74.62% 0.0865 42.97);
--pink-200: oklch(83.14% 0.0707 43.07);
--pink-100: oklch(92% 0.0435 43.03);
--pink-50: oklch(95.79% 0.0193 42.91);
```

### Purple
```css
--purple-900: oklch(23% 0.046 287);
--purple-800: oklch(31.96% 0.07 286.6);
--purple-700: oklch(40.88% 0.086 286.2);
--purple-600: oklch(49.77% 0.098 285.8);
--purple-500: oklch(58.36% 0.1 285.3);
--purple-400: oklch(66.6% 0.096 284.8);
--purple-300: oklch(74.89% 0.086 284.3);
--purple-200: oklch(79.31% 0.072 283.75);
--purple-100: oklch(91.57% 0.042 284.9);
--purple-50: oklch(95.77% 0.01 287.43);
```

### LB Black (Primary Neutral)
```css
--lb-black-900: oklch(22.47% 0.0067 17.75);
--lb-black-800: oklch(33.74% 0.0114 17.73);
--lb-black-700: oklch(39.78% 0.0134 17.73);
--lb-black-600: oklch(48.42% 0.0163 17.73);
--lb-black-500: oklch(57.07% 0.0192 17.73);
--lb-black-400: oklch(65.67% 0.0175 17.76);
--lb-black-300: oklch(74.24% 0.012 17.81);
--lb-black-200: oklch(82.82% 0.0073 17.84);
--lb-black-100: oklch(91.41% 0.0029 17.86);
--lb-black-50: oklch(95.7% 0.0012 17.87);
```

### Success Green
```css
--success-green-900: oklch(22.22% 0.0191 131.5);
--success-green-800: oklch(30.65% 0.0392 132.87);
--success-green-700: oklch(39.13% 0.054 133.08);
--success-green-600: oklch(47.64% 0.0659 133.09);
--success-green-500: oklch(56.14% 0.0776 133.09);
--success-green-400: oklch(64.65% 0.0893 133.08);
--success-green-300: oklch(76.09% 0.1051 133.08);
--success-green-200: oklch(81.7% 0.1095 133);
--success-green-100: oklch(90.36% 0.1043 132.61);
--success-green-50: oklch(95.26% 0.0417 131.16);
```

### Caution Red
```css
--caution-red-900: oklch(22.4% 0.065 17);
--caution-red-800: oklch(31.19% 0.091 17);
--caution-red-700: oklch(39.62% 0.116 17);
--caution-red-600: oklch(48.23% 0.141 16.5);
--caution-red-500: oklch(56.91% 0.1663 16);
--caution-red-400: oklch(65.44% 0.173 15.5);
--caution-red-300: oklch(74.43% 0.115 15.5);
--caution-red-200: oklch(82.32% 0.069 15.5);
--caution-red-100: oklch(91.31% 0.027 16);
--caution-red-50: oklch(95.74% 0.011 17);
```

## Semantic Color Mappings

### Text & Foreground
- **Primary Text**: `var(--lb-black-800)` - Main body text and UI elements
- **Heading Text**: `var(--lb-black-900)` - Headers and emphasis
- **Muted Text**: `var(--lb-black-500)` - Secondary information
- **Icon Color**: `var(--lb-black-800)` - All icons use this consistent color

### Backgrounds
- **Card Background**: `#ffffff` - Pure white for content areas
- **Muted Background**: `var(--lb-black-100)` - Subtle background areas
- **Input Background**: `var(--lb-black-50)` - Form inputs

### Interactive Elements
- **Primary**: `var(--lb-black-900)` - Primary buttons and actions
- **Secondary**: `var(--purple-50)` - Secondary buttons
- **Accent**: `var(--purple-100)` - Accent elements
- **Destructive**: `var(--caution-red-500)` - Delete/error actions

### Borders & Separators
- **Default Border**: `var(--lb-black-200)` - Standard borders
- **Strong Border**: `oklch(33.74% 0.0114 17.73 / 0.4)` - Emphasized borders
- **Ring**: `var(--purple-300)` - Focus indicators

## Gradient Applications

### Main Background
**Radial Gradient**: Purple 200 → Pink 100 → White
```css
radialGradient: var(--purple-200) → var(--pink-100) → white
```

### Sidebar Background
**Linear Gradient**: Lime 50 → Pink 50 (top to bottom)
```css
background: linear-gradient(to bottom, var(--lime-50), var(--pink-50));
```

### Cube Face Gradients
**Linear Gradient**: Lime 50 → White (bottom to top)
```css
background: linear-gradient(to top, var(--lime-50), white);
```

## Chart Colors
For data visualization, use the 400-level colors from each palette:
- **Chart 1**: `var(--lime-400)`
- **Chart 2**: `var(--blue-400)`
- **Chart 3**: `var(--purple-400)`
- **Chart 4**: `var(--pink-400)`
- **Chart 5**: `var(--success-green-400)`

## Usage Guidelines

### In CSS
```css
.my-element {
  color: var(--lb-black-800);
  background: var(--lime-50);
  border: 1px solid var(--lb-black-200);
}
```

### In React Components
```tsx
// For inline styles
style={{ color: 'var(--lb-black-800)' }}

// For gradients with opacity
style={{ 
  background: 'linear-gradient(to right, oklch(92% 0.0435 43.03 / 0.12), oklch(74.89% 0.086 284.3 / 0.12))' 
}}
```

### For SVG Icons
```tsx
<svg>
  <path fill="var(--text-color)" />
  <line stroke="var(--text-color)" />
</svg>
```

## Files Modified

### Core System
- `/src/styles/globals.css` - Added color variables and semantic mappings

### Background & Gradients
- `/src/assets/icons/AppCube-2-477.tsx` - Main background gradient
- `/src/styles/globals.css` - Sidebar gradient
- `/src/shared/components/cube/EqualizerFace.tsx` - Cube face gradient
- `/src/shared/components/cube/EqualizerFaceWithStorage.tsx` - Cube face gradient

### Component Colors
- `/src/website/pages/ContactPage.tsx` - Header gradient
- `/src/assets/icons/FrontFace-16-236.tsx` - Face gradient

### Border Updates
- Multiple border colors updated to use LB Black with appropriate opacity

## Benefits

1. **Consistency**: All colors reference the same palette
2. **Accessibility**: OKLCH provides better color perception
3. **Maintainability**: Easy to update colors from central variables
4. **Scalability**: Easy to add new color variations
5. **Brand Coherence**: Unified visual identity across the application

## Future Considerations

- Consider adding dark mode variants
- Add color contrast validation
- Implement design tokens for different themes
- Add color accessibility testing
