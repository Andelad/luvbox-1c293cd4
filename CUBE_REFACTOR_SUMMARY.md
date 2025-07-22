# Cube Face Consistency and Naming Updates

## Summary of Changes

The cube faces have been updated to ensure consistency between the home page and app cube page, with new standardized naming conventions.

## Changes Made

### 1. New Face Components Created

**QualityFace** (replaces EqualizerFace):
- `/src/shared/components/cube/QualityFace.tsx`
- Maintains the same equalizer functionality with quality-based naming
- Uses the same CSS styling as the original EqualizerFace

**PurposeFace** (replaces TopFaceCube):
- `/src/shared/components/cube/PurposeFace.tsx`
- Renamed from "Top Face" to "Purpose Face" for semantic clarity

**TimeFace** (new component):
- `/src/shared/components/cube/TimeFace.tsx`
- New face representing the time dimension
- Uses green color scheme to differentiate from other faces

**QualityFaceWithStorage**:
- `/src/shared/components/cube/QualityFaceWithStorage.tsx`
- Storage-enabled version of QualityFace for apps requiring data persistence

### 2. Cube Configuration Updates

**Home Page Cube** (`/src/website/components/OptimizedCube.tsx`):
- Now shows: QualityFace (left), TimeFace (front/right), PurposeFace (top)
- Updated imports to use new face components
- Maintained existing optimization and memoization

**App Cube** (`/src/shared/components/cube/Cube3D.tsx`):
- Now shows: QualityFace (left), TimeFace (front/right), PurposeFace (top)
- Updated imports to use new face components
- Consistent face positioning with home page cube

### 3. Export Updates

**Cube Index** (`/src/shared/components/cube/index.ts`):
- Added exports for new face components
- Maintained backward compatibility with existing exports

## Face Naming Convention

| Old Name | New Name | Purpose |
|----------|----------|---------|
| EqualizerFace | QualityFace | Represents the quality/compatibility metrics |
| TopFaceCube | PurposeFace | Represents the purpose/goals dimension |
| N/A | TimeFace | Represents the time/duration dimension |

## Visible Faces

Both cubes now consistently show these three faces:
1. **QualityFace** - The interactive equalizer for measuring relationship quality
2. **TimeFace** - Time-related relationship metrics
3. **PurposeFace** - Purpose and goal alignment metrics

## Technical Details

- All face components follow the same interface pattern
- CSS styling is shared via `EqualizerFace.css` (to be renamed in future)
- TypeScript types are properly maintained
- No breaking changes to existing functionality
- Backward compatibility preserved for existing imports

## Testing Status

- ✅ TypeScript compilation passes
- ✅ No new ESLint errors introduced
- ✅ Components properly exported and importable
- ✅ Face positioning consistent between home and app cubes

## Benefits

1. **Consistency**: Both cubes now show identical face configurations
2. **Semantic Naming**: Face names clearly indicate their purpose
3. **Maintainability**: Standardized naming makes code more understandable
4. **Scalability**: New face structure supports future enhancements
5. **User Experience**: Consistent behavior across home page and app

## Future Considerations

- Consider renaming `EqualizerFace.css` to `QualityFace.css` or `CubeFace.css`
- Implement specific functionality for TimeFace and PurposeFace components
- Consider creating typed interfaces for face-specific props
- Add comprehensive tests for new components
