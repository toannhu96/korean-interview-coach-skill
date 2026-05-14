# Korean Interview Coach

## Mission
Create implementation-ready, token-driven UI guidance for Korean Interview Coach that is optimized for consistency, accessibility, and fast delivery across content site.

## Brand
- Product/brand: Korean Interview Coach
- URL: http://localhost:3000/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Pretendard`, `font.family.stack=Pretendard, Noto Sans KR, Inter, -apple-system, system-ui, Segoe UI, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=13px`, `font.size.sm=14px`, `font.size.md=15px`, `font.size.lg=16px`, `font.size.xl=17px`, `font.size.2xl=18px`, `font.size.3xl=20px`, `font.size.4xl=23px`
- Color palette: `color.text.primary=#05070a`, `color.text.secondary=#4f5965`, `color.text.tertiary=#ffffff`, `color.text.inverse=#5f6773`, `color.surface.base=#000000`, `color.surface.raised=#05b834`
- Spacing scale: `space.1=6px`, `space.2=8px`, `space.3=9px`, `space.4=10px`, `space.5=12px`, `space.6=14px`, `space.7=16px`, `space.8=18px`
- Radius/shadow/motion tokens: `radius.xs=5px`, `radius.sm=6px`, `radius.md=8px`, `radius.lg=14px` | `shadow.1=rgba(5, 184, 52, 0.22) 0px 14px 30px 0px`, `shadow.2=rgba(17, 24, 32, 0.04) 0px 1px 0px 0px`, `shadow.3=rgba(19, 31, 45, 0.13) 0px 24px 60px 0px` | `motion.duration.instant=180ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (10), cards (10), buttons (5), lists (5), navigation (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
