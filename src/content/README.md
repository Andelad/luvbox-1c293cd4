# Content Management System

This project uses a centralized content management system to make text updates easier and more maintainable.

## Overview

All text content is stored in `/src/content/` and accessed through React hooks for type safety and consistency.

## File Structure

```
src/content/
├── types.ts     # TypeScript interfaces for content structure
├── index.ts     # Main content definitions
└── README.md    # This file
```

## How to Use

### 1. Accessing Content in Components

```tsx
import { usePageContent, useNavigation, useCommonContent } from '@/shared/hooks/useContent';

function MyComponent() {
  // Get content for a specific page
  const content = usePageContent('feedback');
  
  // Get navigation labels
  const navigation = useNavigation();
  
  // Get common text like "Loading", "Cancel", etc.
  const common = useCommonContent();
  
  return (
    <div>
      <h1>{content.title}</h1>
      <button>{navigation.feedback}</button>
      <span>{common.loading}</span>
    </div>
  );
}
```

### 2. Available Hooks

- `useContent()` - Get all content
- `usePageContent(page)` - Get content for a specific page
- `useNavigation()` - Get navigation labels
- `useWebsiteContent()` - Get website-specific content
- `useCommonContent()` - Get common/shared text

### 3. Updating Text Content

To update any text in the application:

1. Open `/src/content/index.ts`
2. Find the relevant section
3. Update the text value
4. Save the file

Example:
```ts
// Before
feedback: {
  title: "Feedback",
  description: "We'd love to hear your thoughts..."
}

// After
feedback: {
  title: "Share Feedback", 
  description: "Tell us what you think about your experience..."
}
```

### 4. Adding New Content

1. **Add type definition** in `/src/content/types.ts`:
```ts
export interface NewPageContent extends PageContent {
  specialField: string;
  buttons: {
    save: string;
    cancel: string;
  };
}
```

2. **Add to main content structure** in `/src/content/index.ts`:
```ts
export const CONTENT: AppContent = {
  // ... existing content
  pages: {
    // ... existing pages
    newPage: {
      title: "New Page",
      description: "Description for new page",
      specialField: "Special content",
      buttons: {
        save: "Save Changes",
        cancel: "Cancel"
      }
    }
  }
};
```

3. **Update AppContent interface** in `/src/content/types.ts`:
```ts
export interface AppContent {
  // ... existing properties
  pages: {
    // ... existing pages
    newPage: NewPageContent;
  };
}
```

## Benefits

- ✅ **Single source of truth** for all text content
- ✅ **Type safety** with TypeScript interfaces
- ✅ **Easy updates** without touching component code
- ✅ **Consistent structure** across the application
- ✅ **Ready for internationalization** (i18n) if needed later
- ✅ **Version control** for content changes

## Migration Path

This system can easily be extended to support:
- Multiple languages (i18n)
- Content management systems (CMS)
- Dynamic content loading
- A/B testing for text variations

## Best Practices

1. **Use descriptive keys** that explain the context
2. **Group related content** logically in the type definitions
3. **Keep content concise** but descriptive
4. **Test changes** after updating content
5. **Use TypeScript** to ensure all required fields are provided
