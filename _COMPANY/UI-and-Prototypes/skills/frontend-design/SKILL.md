---
name: frontend-design
description: "Interactive HTML prototype builder for Ninja Learning. Use this skill whenever creating, editing, or iterating on single-file HTML prototypes that simulate app screens — student profiles, parent portals, instructor dashboards, admin views, or Mental Dojo interfaces. Trigger on any mention of 'prototype', 'wireframe', 'screen', 'mockup', 'HTML demo', or when a UI spec needs to be turned into a clickable artefact. Also trigger when reviewing or comparing prototypes against UI specs."
---

# Frontend Design — Interactive HTML Prototyping

This skill guides the creation of single-file, self-contained HTML prototypes for the Ninja Learning platform. These prototypes are the primary design artefact — they're what Hazza reviews, what John builds from, and what gets iterated on until the screen is right.

## What You're Building

Every prototype is a **single `.html` file** that contains all HTML, CSS, and JavaScript inline. No external dependencies, no build steps, no frameworks. Open the file in a browser and it works.

These prototypes simulate real app screens at full fidelity — they look and feel like the final product, but they're static (data is hard-coded, interactions are simulated with JS state).

## Core Conventions

All Ninja Learning prototypes follow these patterns (derived from the existing codebase):

### Layout & Viewport

- **Landscape-first** for all screens (especially Mental Dojo, which is landscape-only per non-negotiable rule #18)
- Use `position: fixed; inset: 0;` shell pattern for full-viewport layouts
- Mobile-responsive with `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">`
- Use percentage-based widths and `aspect-ratio` for fluid layouts

### Visual Language

```css
:root {
  /* Backgrounds */
  --bg: #f4f4f0;  --surf: #fff;  --surf2: #f8f8f5;
  --bdr: #e0e0d8;  --bdr2: #ccc;

  /* Text */
  --tx: #1a1a2e;  --tx2: #555;  --tx3: #999;

  /* Gold accent (belts, highlights) */
  --gold: #B8720F;  --gb: #FAEEDA;  --gt: #5C3205;

  /* Green (success, progress) */
  --grn: #1B4D2E;  --gnb: #E0F0E8;  --gnt: #1B4D2E;

  /* Red (alerts, warnings) */
  --red: #6B1A1A;  --rb: #F5E0E0;  --rt: #6B1A1A;

  /* Blue (info, links) */
  --blu: #0C447C;  --bb: #E6F1FB;  --bt: #0C447C;

  /* Dark theme (student profile, Mental Dojo) */
  --dk: #0c1f0c;  --dk2: #091609;  --dk3: #061006;

  /* Radii */
  --r: 10px;  --rs: 6px;
}
```

- Dark backgrounds (`#061006` family) for student-facing screens and Mental Dojo
- Light backgrounds (`#f4f4f0` family) for parent/instructor/admin screens
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`
- Border radius: `10px` for cards, `6px` for smaller elements
- Gold (`#B8720F`) as the primary accent colour

### Screen System

Prototypes use a class-based screen system for multi-screen flows:

```html
<div class="scr on" id="scr-home">...</div>
<div class="scr" id="scr-detail">...</div>
```

```javascript
function showScreen(id) {
  document.querySelectorAll('.scr').forEach(s => s.classList.remove('on'));
  document.getElementById('scr-' + id).classList.add('on');
}
```

### File Naming

Follow the established pattern:
- `NinjaLearning_[ScreenName].html` — Stage 1 prototypes
- `MentalDojo_[ScreenName]_v[X.Y].html` — Stage 2 prototypes

Version numbers are included when iterating: `_v1.0`, `_v1.3`, `_v4.0`, etc.

### File Locations

- Stage 1 prototypes → `Stage-1_Dojo-Portal/Prototypes/`
- Stage 2 prototypes → `Stage-2_Mental-Dojo/Prototypes/`

## Age-Appropriate Design

Remember who you're designing for. The three tiers have different needs:

- **Ninja Cubs (3–5):** Large touch targets (minimum 48px), minimal text, visual/audio cues, bright and friendly
- **Ninja School (5–10):** Core audience. Balanced text and visuals, gamified elements (XP bars, belt badges, challenges), clear navigation
- **11+ (Secondary):** More information density, reduced gamification, structured layouts

When building a prototype, always confirm which age tier it serves and adapt accordingly.

## Mental Dojo Specifics

If building a Mental Dojo prototype, these non-negotiable rules apply:

1. **Landscape only** — no portrait scroll, ever
2. **No belt language** — use "Aura" progression, not belts
3. **No TEN/REN labels** — those are physical practice names
4. **Content for 7–9 year olds** — age-appropriate language and concepts
5. **Mushin = active stillness** — never passive or boring; use interactive breathing, guided focus, visual engagement

## Prototype Checklist

Before delivering any prototype, verify:

- [ ] Single file, self-contained (no external deps)
- [ ] Opens correctly in browser without a server
- [ ] Landscape layout works on mobile viewport
- [ ] Correct colour variables used (dark for student/Mental Dojo, light for parent/admin)
- [ ] Screen navigation works (if multi-screen)
- [ ] File named correctly and placed in the right directory
- [ ] Matches the relevant UI spec (if one exists in `UI-Specs/`)
- [ ] No safeguarding concerns with displayed content

## Working From a UI Spec

When a `.docx` UI spec exists for the screen you're building:

1. Read the spec first using the `docx` skill
2. Extract the layout, components, data fields, and interaction notes
3. Build the prototype to match — the spec is the contract
4. If the spec is ambiguous, flag it rather than guessing
5. If the spec conflicts with non-negotiable rules, stop and raise it

## Reference: Existing Prototypes

Before starting a new prototype, review the existing ones for consistency:

- `Stage-1_Dojo-Portal/Prototypes/NinjaLearning_StudentProfile.html` — student-facing, dark theme, landscape
- `Stage-1_Dojo-Portal/Prototypes/NinjaLearning_ParentApp_v1.3.html` — parent-facing
- `Stage-1_Dojo-Portal/Prototypes/NinjaLearning_InstructorApp_v4.0.html` — instructor-facing
- `Stage-2_Mental-Dojo/Prototypes/MentalDojo_AuraProgression_v1.0.html` — Mental Dojo, landscape-only
