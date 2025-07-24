# Recommended Project Structure

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
├── assets/             # Static assets
│   ├── icons/         # SVG icons
│   ├── images/        # Images
│   └── fonts/         # Fonts
└── styles/            # Global styles
```

## Path Mapping Rules:
- `@/` → `src/`
- `@/components/*` → `src/shared/components/*`
- `@/app/*` → `src/app/*`
- `@/website/*` → `src/website/*`
- `@/assets/*` → `src/assets/*`
- `@/icons/*` → `src/assets/icons/*`
