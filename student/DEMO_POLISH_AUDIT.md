# StudentNinja — Demo Polish Audit

**Date:** 2026-04-02
**Purpose:** Identify and fix all rough edges so the prototype suite feels like a smooth, testable demo.

---

## Issue Summary

| # | Issue | Severity | Files Affected | Effort |
|---|-------|----------|----------------|--------|
| 1 | Dev mode persists via sessionStorage — testers get stuck in dev mode | High | 11 core screens | Low |
| 2 | Version labels visible on-screen in normal mode | Medium | 2 screens + Profile | Low |
| 3 | BreathEngine has always-visible dev panel | High | 1 file | Low |
| 4 | Nendo Entry has always-visible prototype controls | High | 1 file | Low |
| 5 | Screen doesn't always fit — `100vw` causes horizontal scrollbar | High | 6 files | Medium |
| 6 | Body padding pushes frame off-centre on smaller viewports | Medium | ~20 files | Medium |
| 7 | Viewport meta tags inconsistent across files | Medium | 11 files missing lock | Medium |
| 8 | ScreenIndex links broken (Kaze v4.0 → should be v4.1) | High | 1 file | Low |
| 9 | Canvas elements hardcoded 844x390 — don't resize | Low | 12 files | Low (demo-only) |
| 10 | No consistent overflow:hidden on body in non-dev mode | Medium | Most files | Medium |

---

## Category A: Dev Tools Showing

### A1 — Dev mode sticks via sessionStorage

**What happens:** If anyone opens a screen with `?dev` in the URL, `sessionStorage.ninja_dev` is set to `'1'`. Every screen they navigate to afterward also enters dev mode — showing the device toggle buttons, switcher bar, and grey background. There's no way to exit dev mode without clearing sessionStorage or closing the tab.

**Files affected:** All 11 core v4.0/v4.1 screens (Nendo_Home, MetsukeHub, MushinHub, TachiHub, Shiho, BreathTechniques, Runner_Kaze/Chi/Mizu/Hi, SessionComplete, StudentProfile).

**Fix approach:**
- Keep the `?dev` system (it's useful for us), but **don't persist to sessionStorage** — only activate dev mode if the current URL has `?dev`. This way navigating to the next screen without `?dev` returns to clean demo mode.
- Alternative: add a visible "Exit Dev Mode" button that clears the flag. But simplest is just removing the sessionStorage persistence.

### A2 — Version labels visible on-screen

**What happens:** Two screens show a subtle version label (e.g., "Nendo Home · v4.0") in the bottom-right corner, and StudentProfile shows "Student Profile v4.1" as a heading. These are fine for dev but shouldn't show in demo mode.

**Files affected:**
- `Nendo_Home_v4.0.html` — `.version-label` div (line 522)
- `Nendo_MetsukeHub_v4.0.html` — `.version-label` div (line 346)
- `StudentProfile_v4.1.html` — inline styled div (line 398)

**Fix approach:**
- Gate version labels behind dev mode: `html:not(.dev-mode) .version-label { display: none; }`
- For StudentProfile, either remove the "v4.1" text from the visible heading or gate it similarly.

### A3 — BreathEngine always-visible dev panel

**What happens:** `BreathEngine_v2.1.html` has a full interactive control panel (level selectors, session length toggle, navigation buttons, restart) that is always visible — no dev-mode gating at all.

**Fix approach:**
- Add the same dev-mode CSS gating used in other files. Panel hidden by default, shown with `?dev`.

### A4 — Nendo Entry always-visible prototype controls

**What happens:** `Nendo_Entry_v4.0_PaintedLayers.html` has device toggle buttons and layer visibility checkboxes outside the device frame — always visible.

**Fix approach:**
- Add dev-mode gating, same pattern as A3.

---

## Category B: Screen Doesn't Fit

### B1 — `100vw` causes horizontal scrollbar

**What happens:** Six files use `width: 100vw` on the body or a wrapper. On any browser where the scrollbar takes space (Windows Chrome, Firefox), `100vw` includes the scrollbar width, creating a horizontal overflow. This is the main cause of "the screen doesn't always fit."

**Files affected:**
- `Nendo_Entry_v4.0_PaintedLayers.html`
- `Nendo_Runner_Chi_v4.0.html`
- `Nendo_Runner_Hi_v4.0.html`
- `Nendo_Runner_Kaze_v4.1.html`
- `Nendo_Runner_Mizu_v4.0.html`
- `StudentProfile_v4.1.html`

**Fix approach:**
- Replace `width: 100vw` with `width: 100%` wherever it appears.
- Add `html, body { overflow-x: hidden; }` as a safety net in all files.

### B2 — Body padding without box-sizing awareness

**What happens:** Most files apply padding to `<body>` (e.g., `padding: 24px 24px 56px`) which, combined with the flex centering of the 844x390 device frame, works well on large screens. But on viewports close to frame size (e.g., an actual 844px-wide browser window), the padding makes the frame extend off-screen.

**Fix approach (non-dev mode only):**
- In the `html:not(.dev-mode) body` rule that already exists, set `padding: 0; overflow: hidden;` so the frame is the only thing visible.
- This is already partially done in some files but not all — needs to be consistent.

### B3 — Viewport meta inconsistency

**What happens:** 12 files lock zoom (`maximum-scale=1, user-scalable=no, viewport-fit=cover`) and 11 don't. This creates inconsistent pinch-zoom behaviour when navigating between screens.

**Fix approach:**
- Standardise all 14 current prototype files to the same viewport tag:
  `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no, viewport-fit=cover">`

### B4 — No overflow:hidden on body in clean mode

**What happens:** In non-dev mode, the frame should be the only visible element and there should be no scrolling. But most files don't explicitly set `overflow: hidden` on body in the non-dev rules.

**Fix approach:**
- Ensure the `html:not(.dev-mode) body` CSS block includes `overflow: hidden; margin: 0; padding: 0;` in every file.

---

## Category C: ScreenIndex & Navigation

### C1 — ScreenIndex links to Kaze v4.0 (file is now v4.1)

**What happens:** `StudentNinja_ScreenIndex_v1.0.html` line 386 links to `Nendo_Runner_Kaze_v4.0.html` but the current file is `Nendo_Runner_Kaze_v4.1.html`. Click leads to 404.

**Fix approach:**
- Update href to `Nendo_Runner_Kaze_v4.1.html` and update the version badge text.

### C2 — ScreenIndex not gated on dev mode

This file is the developer index page — it's meant for navigation during testing. No changes needed, but worth noting it should not be linked from any in-app screen.

---

## Fix Execution Log — All Complete ✅

**Executed:** 2026-04-02

### Phase 1: Quick wins ✅

1. ✅ **Removed sessionStorage persistence** from dev-mode activation — 12/12 files. Dev mode now activates only when `?dev` is in the current URL.
2. ✅ **Gated version labels behind dev-mode** — Nendo_Home, MetsukeHub (CSS rule), StudentProfile (removed "v4.1" from heading text).
3. ✅ **Fixed ScreenIndex Kaze link** — href and version badge updated to v4.1.
4. ✅ **Gated BreathEngine dev panel** — added dev-mode CSS + activation script.
5. ✅ **Gated Nendo Entry controls** — added dev-mode CSS + activation script.

### Phase 2: Viewport consistency ✅

6. ✅ **Replaced `100vw` with `100%`** in all non-dev frame rules (12 standard files) + Entry body.
7. ✅ **Standardised viewport meta tag** — BreathEngine and Entry updated to full locked viewport with `viewport-fit=cover`.
8. ✅ **Added `overflow: hidden; margin: 0;`** to `html:not(.dev-mode) body` in all 12 standard files.

### Phase 3: Verification ✅

9. ✅ Automated verification script confirmed: no sessionStorage, no 100vw, overflow:hidden present, viewport-fit=cover present, version labels gated, ScreenIndex links correct.
10. ⬜ **Manual browser walkthrough still recommended** — open ScreenIndex, click through full flow without `?dev`, then repeat with `?dev`.

---

## Out of Scope (noted, not fixing now)

- Canvas resize on tablet mode switch (only matters in dev mode)
- Component files (NavShell, ScreenTemplate) — these are reference implementations, not demo screens
- Exploration files — not part of demo
- iPad responsive frame switching — demo is iPhone landscape only
- z-index strategy standardisation — cosmetic, no visible impact on demo
