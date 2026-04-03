# BreathEngine: v2.1 → v2.6 Agentic Build Prompt

## Context

You are building the NinjaApp student-facing breathing engine. The current working file is:

`/sessions/happy-confident-knuth/mnt/student/prototypes/BreathEngine_v2.1.html`

This is a standalone HTML/CSS/JS prototype — no frameworks, no build tools. It contains:
- All 16 breathing technique families across 4 elements (Kaze, Chi, Mizu, Hi)
- 3 levels per family (48 total variants)
- Smooth and segmented phase engine
- Depth-scaled circle expansion (proportional to breath duration)
- Vertical fill bar for staircase inhale/exhale techniques
- Phase quality cues, arc progress ring, idle/rest-hold ring states
- Element switcher tabs, dev panel (level + jump controls)

The canonical technique reference is:
`/sessions/happy-confident-knuth/mnt/student/nendo/BREATHWORK.md`

The prototype manifest is:
`/sessions/happy-confident-knuth/mnt/student/prototypes/MANIFEST.md`

---

## Agent Roles

Run these roles in sequence per version. Each role hands off to the next before the version is finalised.

### 🔍 ANALYSER
Read the current version file. Identify: visual bugs, UX friction, missing pedagogical cues, engine edge cases, and any code issues. Produce a concise written brief of findings — max 20 lines. Do NOT write any code.

### 🏗️ BUILDER
Receive the analyser brief and version spec. Write the complete new HTML file to disk. No placeholders. No TODOs. The file must be fully functional and self-contained. Save to the correct versioned path.

### 🧪 TESTER
Read the newly built file. Verify: all 16 families are present and correct against BREATHWORK.md, no JS errors are obvious from code inspection, pattern data matches the master grid exactly, fill bar appears only on segmented techniques, depth ring sizing is proportional. Write a pass/fail report per check. If any check fails, brief the builder with the exact fix needed and re-run the builder.

### ✍️ WRITER
After each version passes testing: update `HANDOFF.md` and `MANIFEST.md` in the student folder. Log the version event. Keep it factual and brief.

---

## Version Targets

Work through each version in order. Do not skip ahead. Each version has a specific focus — do not over-engineer beyond the stated scope.

---

### v2.2 — Engine Stability + UX Tightening

**Focus:** Fix v2.1 rough edges before adding new features.

**Acceptance criteria:**
- [ ] The depth ring does not flicker or jump when transitioning between phases
- [ ] The fill bar correctly resets between techniques when jumping via the dev panel
- [ ] Segmented exhale (Orochi K4, Hashigo C4 exhale) starts the fill bar fully filled and drains correctly top-to-bottom
- [ ] Segmented inhale (Noboru C3, Taka H3, Hashigo C4 inhale) starts empty and fills bottom-to-top
- [ ] The circle does not snap visibly when a new technique is loaded via Jump or Continue
- [ ] The phase cue text fades in cleanly — no pop
- [ ] Hi element colour (warm amber) renders correctly on arc, cycle dots, and continue button
- [ ] Rest-hold ring pulse (gold) triggers correctly on: Tanden hold, Daichi hold+rest, Nami rest, Shizumi rest
- [ ] Complete overlay appears after 3 cycles of the last technique in the session
- [ ] Restart correctly resets all state including fill bar, depth ring, arc, and cycle dots

**File:** `BreathEngine_v2.2.html`

---

### v2.3 — Technique Introduction Layer

**Focus:** Give students a moment to understand a technique before breathing starts. Currently tapping immediately launches. Students need context.

**New feature: Technique intro state**

When a technique loads (on session start or Continue advance), show an intro state before the student taps:

- Display the technique name (Cinzel, large), element kanji, tier badge
- Show the pattern as a visual rhythm diagram: a horizontal row of phase blocks, each proportional in width to its duration. Segmented phases show sub-divisions. Colours match phase type (inhale=element colour, hold=gold, exhale=dim element, rest=grey).
- Show the technique cue in italic below
- Show the first phase cue word ("Sharp", "Sniff in", "Deep", etc.) with a small arrow pointing to the circle
- "Tap to begin" hint pulses gently (not just static opacity)
- Once tapped, the intro state fades out and breathing begins immediately

**Pattern rhythm diagram spec:**
- Width: 200px max, height: 14px
- Each phase block: width proportional to duration (or segs×dur for segmented), min 8px
- Phase 0 (inhale): filled element colour
- Phase 1 (hold full): gold `rgba(201,169,110,0.7)`
- Phase 2 (exhale): dim element colour
- Phase 3 (rest empty): `rgba(107,104,128,0.4)`
- Segmented phases: same colour but with internal dividers (vertical lines every 1/N width)
- Phases with value 0 are omitted (zero width)
- Rounded corners on outer edges only

**File:** `BreathEngine_v2.3.html`

---

### v2.4 — Circle Visual Upgrade + Element Atmosphere

**Focus:** The circle needs more presence. It is the heart of the experience. Currently it is a simple radial gradient with a border. Upgrade the visual language.

**Circle improvements:**
- Replace flat radial gradient with a layered inner glow: a soft bright core (30% opacity element colour) surrounded by a larger dimmer halo (15% opacity). Both scale with the circle.
- On inhale: the inner glow intensifies as the circle expands (smooth CSS transition tied to scale)
- On exhale: glow dims as circle contracts
- On hold (full lungs): a very slow inner pulse (2s loop) while the circle stays at peak — suggests life/energy contained
- On rest (empty): glow nearly gone, just a faint outline

**Depth ring upgrade:**
- Change from dashed border to a very faint solid ring with a soft glow matching the element colour
- Appears 0.4s before the phase starts (brief preview) then fades when the phase begins
- Ring stays at the target diameter — does not animate

**Element atmosphere:**
- Add a very subtle radial background gradient behind the circle area (not the whole page):
  - Kaze: faint blue vignette `rgba(139,184,212,0.04)` centred on the circle
  - Chi: faint green vignette `rgba(155,191,130,0.04)`
  - Mizu: faint teal vignette `rgba(104,168,196,0.04)`
  - Hi: faint amber vignette `rgba(212,145,106,0.04)`
- Transitions smoothly when switching elements (0.8s ease)
- Does NOT appear on the page background — only within the centre column

**File:** `BreathEngine_v2.4.html`

---

### v2.5 — Session Summary + Flow Completion

**Focus:** The session end state is currently a bare overlay. Make it meaningful.

**Session summary screen:**

Replace the current complete overlay with a richer end-of-session summary:

- Element kanji (large, faint, element colour) as background
- "Session Complete" in Cinzel
- A summary row for each technique practiced: technique name, level, cycle count (should always be 3), and a check mark
- Total session time (calculated from actual pattern durations × 3 cycles, not wall-clock time — compute from pattern data)
- A motivational line drawn from the element theme:
  - Kaze: "The breath that releases is the breath that strengthens."
  - Chi: "Stillness is not absence. It is presence."
  - Mizu: "Depth is not distance. It is clarity."
  - Hi: "Control is not restriction. It is mastery."
- "Begin Again" button (same as current)
- "Change Element" button — closes overlay and activates the element tab strip

**Session time calculation:**
For each technique in the session, compute: sum of all phase durations (treating segmented as segs×dur) × CYCLES_PER_TECHNIQUE. Sum across all techniques. Display as "X min Y sec".

**File:** `BreathEngine_v2.5.html`

---

### v2.6 — Integration Ready

**Focus:** Prepare the engine for embedding into the four production element runners (Kaze, Chi, Mizu, Hi v4.1 files). The engine must be clean, documented, and overlay-ready.

**Code cleanup:**
- Remove dev panel from the HTML (move to a separate `<!-- DEV PANEL -->` comment block that can be stripped when embedding)
- Add a `DEV_MODE` constant at the top of the JS. When `false`: dev panel is hidden, Jump buttons are removed, level controls are hidden. Session length is fixed at 3.
- Add JSDoc comments to all public engine functions: `startBreath`, `stopBreath`, `switchElement`, `jumpToFamily`, `restartSession`
- Remove all injected `<style>` keyframe elements after use (clean up DOM on each animation cycle)
- Ensure no global variable name conflicts (prefix all globals with `BE_`)

**Overlay CSS:**
- Extract all circle-stage and engine CSS into a clearly marked `/* ── BREATH ENGINE CORE ── */` block
- Verify all colours use `var(--el)` / `var(--el-glow)` / `var(--el-dim)` so the element theme drops in by setting three CSS variables
- The engine layout must work at 240px circle stage width inside a container of any width (no fixed-width assumptions from the page)
- Add a CSS class `.be-overlay` to the engine wrap that sets `position: relative` and `z-index: 10` for overlay use

**Integration test:**
The tester must verify: loading the file with `DEV_MODE = false` hides all dev controls and functions correctly as a clean session player.

**File:** `BreathEngine_v2.6.html`

---

## Quality Gates

Between each version, the tester must confirm:

1. **Pattern integrity** — spot-check 4 families (one per element) against BREATHWORK.md. Pattern arrays must match exactly.
2. **Segmented engine** — Hashigo C4 L2 (`4×2-0-4×2-0`) must complete both staircase phases correctly. Fill bar must drain then fill (or vice versa) in the correct direction.
3. **No console errors** — inspect JS for obvious syntax or runtime errors (read the file carefully).
4. **Jump navigation** — jumping between techniques via dev panel must cleanly reset all visual state.
5. **Element switching** — switching element mid-session must stop any running breath, reset state, and apply the correct colour theme.

If any gate fails, the builder fixes it before the writer logs the version.

---

## File Naming Convention

All files go to: `/sessions/happy-confident-knuth/mnt/student/prototypes/`

- `BreathEngine_v2.2.html`
- `BreathEngine_v2.3.html`
- `BreathEngine_v2.4.html`
- `BreathEngine_v2.5.html`
- `BreathEngine_v2.6.html`

Each version supersedes the previous. The previous version is NOT archived (they live alongside each other for reference).

## MANIFEST update

After each version, update `/sessions/happy-confident-knuth/mnt/student/prototypes/MANIFEST.md`:
- Add the new file under "Current Prototypes — Breathing Engine"
- Note the previous version as superseded (do not move it)

## HANDOFF update

After the full run (v2.6 complete), write `/sessions/happy-confident-knuth/mnt/student/HANDOFF.md`:
- What was done (all versions v2.2–v2.6)
- What changed (key decisions per version)
- What's next (embed engine into Kaze, Chi, Mizu, Hi production runners)
- Escalations (none expected)
- Event log entries for each version completion
