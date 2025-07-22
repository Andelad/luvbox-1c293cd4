# Content Management System

## Overview
The LuvBox application now uses a centralized content management system that makes text updates easy and maintainable.

## How It Works

### 1. Content Structure
All text content is centralized in `/src/content/index.ts` with the following structure:

```typescript
export const CONTENT = {
  navigation: {
    theBox: "The Box",
    theMap: "The Map",
    mySnapshots: "My Snapshots",
    // ... etc
  },
  pages: {
    feedback: {
      title: "Feedback",
      subtitle: "Help us improve LuvBox",
      // ... etc
    },
    settings: {
      title: "Settings",
      // ... etc
    }
  },
  website: {
    header: {
      logoText: "LuvBox",
      // ... etc
    }
  },
  common: {
    buttons: {
      submit: "Submit",
      cancel: "Cancel",
      // ... etc
    }
  }
};
```

### 2. Type Safety
Content is fully typed using TypeScript interfaces defined in `/src/content/types.ts`. This ensures:
- Compile-time validation
- IntelliSense support
- Prevention of typos and missing content

### 3. Usage in Components
Components import and use content directly:

```typescript
import { CONTENT } from '@/content';

function FeedbackPage() {
  const content = CONTENT.pages.feedback;
  
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
    </div>
  );
}
```

## Making Text Updates

### Easy Updates
To update any text in the application:

1. Open `/src/content/index.ts`
2. Find the relevant section (navigation, pages, website, or common)
3. Update the text value
4. Save the file - changes will appear immediately in development

### Adding New Content
To add new content:

1. Add the TypeScript interface in `/src/content/types.ts`
2. Add the content values in `/src/content/index.ts`
3. Use the content in your components

### Example: Updating Page Title
```typescript
// In /src/content/index.ts
pages: {
  feedback: {
    title: "Send Us Your Feedback", // ← Update this
    subtitle: "We'd love to hear from you!",
    // ... rest of content
  }
}
```

## Benefits

✅ **Centralized**: All text in one place  
✅ **Type-safe**: Prevents errors and typos  
✅ **Maintainable**: Easy to find and update content  
✅ **Scalable**: Easy to add new languages or content  
✅ **Developer-friendly**: IntelliSense and autocomplete support  

## File Structure
```
src/
├── content/
│   ├── types.ts      # TypeScript interfaces
│   └── index.ts      # Content definitions
└── [components use CONTENT directly]
```

## Troubleshooting

### Common Issues
- **Missing content**: Check that the content exists in `/src/content/index.ts`
- **TypeScript errors**: Ensure the content structure matches the interfaces in `types.ts`
- **Import errors**: Make sure to import from `@/content` or the correct relative path

### Development Tips
- Use the TypeScript compiler to catch content-related errors
- The dev server will hot-reload when content changes
- Build the project (`npm run build`) to verify everything compiles correctly

## Migration Notes

The system was migrated from hardcoded strings throughout components to this centralized approach. The implementation uses direct imports rather than React hooks for better performance and simpler debugging.
