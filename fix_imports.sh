#!/bin/bash

# Fix component imports (.tsx)
sed -i "s|from '../imports/AppCube-2-477';|from '../imports/AppCube-2-477.tsx';|g" src/components/Shared/Background.tsx
sed -i "s|from '../../imports/FrontFace-16-236';|from '../../imports/FrontFace-16-236.tsx';|g" src/components/cube/LeftFace.tsx
sed -i "s|from '../../imports/RightFace-16-251';|from '../../imports/RightFace-16-251.tsx';|g" src/components/cube/RightFace.tsx
sed -i "s|from '../../imports/TopFace-16-245';|from '../../imports/TopFace-16-245.tsx';|g" src/components/cube/TopFaceCube.tsx

# Fix SVG imports (.ts)
sed -i 's|from "../../imports/svg-0q0nylxg4v";|from "../../imports/svg-0q0nylxg4v.ts";|g' src/components/sections/MapSection.tsx

# Fix version-specific imports in UI components
echo "Fixing version-specific imports in UI components..."
find src/components/ui -name "*.tsx" -type f -exec sed -i -E 's/@[0-9]+\.[0-9]+\.[0-9]+[^"]*//g' {} \;

echo "✅ Fixed all imports including version-specific ones in UI components"
sed -i 's|from "../../imports/svg-uxz7wvt32b";|from "../../imports/svg-uxz7wvt32b.ts";|g' src/components/sections/DiagnosticSection.tsx
sed -i 's|from "../imports/svg-15aegztapr";|from "../imports/svg-15aegztapr.ts";|g' src/components/Layout/WebsiteHeader.tsx
sed -i 's|from "../imports/svg-0o2cpb82qi";|from "../imports/svg-0o2cpb82qi.ts";|g' src/components/Layout/AppLayout.tsx
sed -i 's|from "../imports/svg-4ufkzakjbw";|from "../imports/svg-4ufkzakjbw.ts";|g' src/components/Layout/AppLayout.tsx
sed -i 's|from "../imports/svg-15aegztapr";|from "../imports/svg-15aegztapr.ts";|g' src/components/Layout/WebsiteLayout.tsx
