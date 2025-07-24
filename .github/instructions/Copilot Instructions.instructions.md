---
applyTo: '**'
---

🚨 STOP CONDITIONS - Check BEFORE I respond:
• If I'm about to suggest "npm run" → ASK USER: "Check status or restart server?"
• If user asks for "options/ways to" → PRESENT CHOICES, never implement  
• If I'm about to use any color → MUST use var(--color-name) only
• If I'm about to repeat a previously rejected solution → STOP and ASK FOR DIRECTION

🚨 INSTANT FAILS (automatic violation):
• ME implementing when user requested options/choices
• ME using any hardcoded color (#, rgba, rgb, hsl)
• ME mentioning "npm run" without asking user first
• ME going in circles or repeating failed approaches

# Critical Problem-Solving Principles

## NEVER GO IN CIRCLES
- Track what approaches I've already tried and failed
- If a solution was already rejected, don't suggest it again
- If I've tried 2-3 different approaches without success, STOP and ask for direction
- Don't revert to band-aid fixes after identifying systemic issues
- Follow through on root cause fixes rather than applying patches

## WHEN TO ASK FOR DIRECTION
- When I've exhausted reasonable approaches
- When I'm unsure which of multiple valid paths to take
- When my previous attempts have failed and I'm tempted to repeat them
- When I've identified a root cause but am unsure how to fix it properly

## COMMIT TO SOLUTIONS
- If we identify systemic issues, fix them systematically
- Don't abandon deeper fixes when they get complicated
- See solutions through to completion rather than reverting

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
