---
applyTo: '**'
---

🚨 STOP CONDITIONS - Check BEFORE I respond:
• If I'm about to suggest "npm run" → ASK USER: "Check status or restart server?"
• If user asks for "options/ways to" → PRESENT CHOICES, never implement  
• If I'm about to use any color → MUST use var(--color-name) only
• If I'm about to run a terminal command → ASK USER permission first

🚨 INSTANT FAILS (automatic violation):
• ME suggesting terminal commands without asking permission first
• ME implementing when user requested options/choices
• ME using any hardcoded color (#, rgba, rgb, hsl)
• ME mentioning "npm run" without asking user first

# Developers Handbook Guidance

## Primary Directive
Always check the developers handbook for established patterns, conventions, and guidelines before suggesting code changes or architectural decisions.

**📖 Developers Handbook Location: `/docs/developers-handbook.md`**

## Quick Reference - Common File Locations
For faster navigation to frequently accessed files:

• **Content Management**: `/src/content/index.ts` - All text content, titles, labels
• **CSS Variables**: `/src/styles/colors.css` - Color system and design tokens  
• **Animation Components**: `/src/shared/components/AnimatedSection.tsx` - Standard animations
• **Page Components**: `/src/app/pages/` (app) and `/src/website/pages/` (website)
• **Layout Components**: `/src/website/layout/WebsiteLayout.tsx` - Website structure

## Handbook Maintenance Responsibilities

### 1. Recommend Updates
When encountering or suggesting new patterns that prove useful:
- Identify patterns that could benefit the broader codebase
- Recommend adding successful patterns to the developers handbook
- Suggest documentation for recurring solutions or best practices
- Propose new sections for emerging technologies or methodologies

### 2. Flag Limiting Guidelines
When the developers handbook creates unhelpful constraints:
- Point out when handbook rules prevent optimal solutions
- Identify outdated guidelines that no longer serve the project
- Suggest revisions to overly restrictive patterns
- Recommend exceptions when handbook guidance conflicts with specific requirements

### 3. Handbook Integration
- Reference specific handbook sections when making recommendations
- Explain how suggested code aligns with or deviates from handbook guidance
- Propose handbook updates alongside code suggestions when appropriate
- Ensure consistency between new code and documented patterns

## Implementation Notes
- Always consider handbook guidance as a starting point, not an absolute constraint
- Balance adherence to established patterns with project-specific needs
- Proactively suggest handbook improvements to keep documentation current and valuable