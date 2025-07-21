// Example of the hybrid approach:

// 1. Path mapping for major directories
import { Button } from '@/components/ui/button';  // → src/shared/components/ui/button
import { useAuth } from '@/hooks/useAuth';        // → src/shared/hooks/useAuth

// 2. Index files for asset collections
import { UserIcon, HomeIcon } from '@/icons';    // → src/assets/icons/index.ts

// 3. Index files for component libraries
import { Card, CardContent } from '@/components/ui';  // → src/shared/components/ui/index.ts

// This gives you:
// ✅ No relative paths ever
// ✅ Clean, consistent imports
// ✅ Easy refactoring
// ✅ Logical groupings
