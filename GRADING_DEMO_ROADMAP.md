# Grading Demo — Build Roadmap
**Target:** `NinjaLearning_GradingDemo_v1.0.html`
**Purpose:** A self-contained, iPad-ready grading session tool for use in the physical dojo.
**Created:** 2026-03-31
**Based on:** `prototypes/NinjaLearning_InstructorApp_v4.1.html`

---

## What We're Building

A single HTML file that runs across three phases:

1. **Import** — load 40–50 real students from a simple CSV (name, age, belt only)
2. **Prime** — tap through each student and record which stripes they already have on their belt; export an updated CSV to use on the day
3. **Grade** — import the primed CSV on Thursday; take the register; award new stripes; Call Out Mode; printable receipt

No parent push, no live profile updates, no multi-class complexity. Self-contained, offline-capable.

---

## Three-Phase Workflow

```
BEFORE THURSDAY
──────────────────────────────────────────────────────────
Phase 1 — Setup
  Fill in CSV: name, age, belt (3 columns only)
  Import into app

Phase 2 — Prime
  App enters Prime Mode
  Instructor taps through each student and marks
  which stripes they already have on their belt
  App exports an updated CSV (now includes stripe columns)
  Save that CSV — this is your Thursday file

ON THURSDAY
──────────────────────────────────────────────────────────
Phase 3 — Grade
  Import Thursday CSV (the one exported from Prime Mode)
  App loads with correct stripe state for every student
  Take register → Grade → Call Out Mode → Award → Receipt
```

---

## Confirmed Decisions

| Decision | Answer |
|----------|--------|
| Belt system | Matches current app (Shiro → Mushin, 11 belts) |
| Class structure | Single class / single session |
| Initial CSV | 3 columns only: name, age, belt |
| Stripe priming | Done in-app (Prime Mode), exported as updated CSV |
| Thursday CSV | 7 columns: name, age, belt, air, earth, water, fire |
| Summary save | Print to PDF (native iPad) + Download HTML button |

---

## CSV Formats

### Phase 1 CSV — Initial Import (fill this in)

3 columns. One row per student.

```csv
name,age,belt
Amir Hassan,7,Shiro Belt
Bella Thompson,8,Kiiro Belt
Carlos Diaz,10,Honoo Belt
```

### Phase 2 CSV — Exported after Prime Mode (app generates this)

7 columns. App fills in the stripe columns based on your priming.

```csv
name,age,belt,air,earth,water,fire
Amir Hassan,7,Shiro Belt,1,0,0,0
Bella Thompson,8,Kiiro Belt,1,1,0,0
Carlos Diaz,10,Honoo Belt,0.5,0.5,0,0
```

Stripe values: `0` = not earned · `0.5` = first half earned · `1` = fully earned

### Valid belt names (exact spelling required in your CSV)
```
Shiro Belt       Kiiro Belt       Taiyo Belt
Kazan Belt       Honoo Belt       Shin Honoo Belt
Mori Belt        Shin Mori Belt   Kage Belt
Shin Kage Belt   Mushin Belt
```

---

## Stripe Eligibility Rules

| Tier | Belts | Rule |
|------|-------|------|
| Beginner (Shokyu) | Shiro → Kazan | Any missing full stripe can be awarded |
| Intermediate (Chukyu) | Honoo → Shin Mori | All 4 first-halves must be earned before full stripes unlock |
| Advanced (Jokyu) | Kage → Mushin | One stripe awarded per session (next incomplete only) |

---

## Screen Map

```
PHASE 1 + 2 (before Thursday)
[1. Import] → [2. Prime Mode] → [Export CSV]

PHASE 3 (Thursday)
[1. Import] → [2. Register] → [3. Grading Roster] → [3b. Grade Screen]
                                                              ↓
[6. Receipt] ← [5. Call Out Mode] ← [4. Summary]
```

---

### Screen 1 — Import
- App title + Ninja School branding
- Two modes offered after load: **Prime Mode** or **Grading Session**
  - If CSV has no stripe columns → Prime Mode is suggested
  - If CSV has stripe columns → Grading Session is suggested
- Paste CSV textarea OR file upload button
- Download Template button (3-column blank CSV)
- Parse + validate → show student count + any errors
- Instructor name field (pre-filled "Harry Bovill", editable)
- "Continue →" button

---

### Screen 2a — Prime Mode
- Header: "Prime stripes — mark what students already have"
- Student list, one at a time or scrollable
- Each student card shows: name, belt pip, belt name
- 4 stripe buttons (Air / Earth / Water / Fire) — tap to toggle on/off
- For intermediates: shows half-stripe toggle too (first half / full)
- Visual: belt pip + earned stripes light up as you tap
- Progress: "12 of 45 primed"
- "Export primed CSV →" button (generates 7-column CSV, triggers download)
- Clear note: "Save this file — import it on Thursday for grading"

---

### Screen 2b — Register (Thursday)
- Header: session date + student count
- Bulk action bar: All Present / All Absent / Clear
- Student rows sorted by belt tier (Beginner → Intermediate → Advanced)
- Each row: belt pip, name, age, belt name, P / A toggle
- Stats bar: Present X · Absent Y · Unmarked Z · X/Y marked
- "Confirm Register →" button

---

### Screen 3 — Grading Roster
- Present-only students
- Multi-select (tap to toggle)
- Select All / Deselect All
- Each row: checkbox, belt pip, name, belt name, stripe eligibility dots
- Summary badge showing staged stripes count
- "Grade X students →" button

---

### Screen 3b — Grade Screen
- One card per selected student
- Name, belt pip, eligible stripe buttons
- Tap stripe to toggle pending
- "Add X to summary →" → confirmation modal → staged
- Back to roster to grade more students

---

### Screen 4 — Summary
- Sections per element (Air / Earth / Water / Fire)
- Each section: staged full + half stripes, student names, remove button
- Session totals card
- "Call Out Mode →" button
- "Back to grading" to select more students

---

### Screen 5 — Call Out Mode (Presentation)
- Full dark screen
- One student at a time — large name, large belt pip
- Their awarded stripe icons shown large below the name
- "Next →" advances to next student
- Progress indicator: "3 of 12"
- After last student: "Award all X stripes →" confirmation button

---

### Screen 6 — Receipt
- Clean print-optimised layout
- Session details: date, instructor
- Per-element breakdown with all student names
- Totals
- "Print / Save as PDF" → `window.print()` (iOS saves to Files as PDF)
- "Download Receipt" → saves as .html file
- "New Session" → confirm → reset → back to Import

---

## Build Steps

### Step 1 — Project Setup
- [ ] Create `prototypes/NinjaLearning_GradingDemo_v1.0.html`
- [ ] Copy base CSS from v4.1 (design tokens, typography, belt/stripe visuals)
- [ ] Add `@media print` block for receipt
- [ ] Remove all unneeded screens (home, classes list, directory, overview, promotions)

### Step 2 — CSV Parser (handles both 3-col and 7-col)
- [ ] `parseCSV(text)` — trims, handles empty rows, normalises headers
- [ ] Detects whether stripe columns are present (3-col vs 7-col)
- [ ] `validateCSV(rows)` — checks belt names, stripe values, missing fields
- [ ] `buildStudents(rows)` — assigns IDs, maps belt → bi, derives tier, generates avatar colours
- [ ] If 3-col: initialises all stripes to 0

### Step 3 — Import Screen
- [ ] Paste textarea + file upload (`<input type="file">` for iOS)
- [ ] Live parse-on-change with error display
- [ ] Mode detection (Prime vs Grading) based on CSV type
- [ ] Download Template button (3-col blank CSV)
- [ ] Instructor name field
- [ ] "Continue →" button

### Step 4 — Prime Mode Screen
- [ ] Student list with stripe toggle cards
- [ ] Per-student: 4 element buttons, half/full logic for intermediates
- [ ] Visual feedback: stripe icons light up when tapped
- [ ] Progress counter
- [ ] "Export primed CSV →" → generates 7-col CSV with current stripe state → download

### Step 5 — Register Screen
- [ ] Port from v4.1, remove class-specific logic
- [ ] Bulk action bar
- [ ] Stats bar
- [ ] Confirm → Grading Roster

### Step 6 — Grading Flow (Roster + Grade Screen)
- [ ] Port from v4.1, wire to single student array
- [ ] Eligibility logic using real stripe data
- [ ] Confirm-to-summary modal

### Step 7 — Summary Screen
- [ ] Port from v4.1
- [ ] Add "Call Out Mode →" button

### Step 8 — Call Out Mode
- [ ] Full-screen dark presentation view
- [ ] Ordered list of students being awarded
- [ ] One-at-a-time carousel: large name + belt pip + stripe icons
- [ ] Next / progress indicator
- [ ] Final: "Award all →" confirmation

### Step 9 — Receipt + Save
- [ ] Print-optimised layout
- [ ] `window.print()` for iOS PDF
- [ ] Download Receipt → Blob → .html file
- [ ] New Session → reset all state

### Step 10 — iPad Polish
- [ ] Viewport meta correct
- [ ] All tap targets ≥ 44px
- [ ] No hover-only interactions
- [ ] File upload works on iOS Safari
- [ ] Session date auto-populates (no hardcoded dates)
- [ ] End-to-end test with 45-row CSV

---

## Files To Create / Modify

| Action | File |
|--------|------|
| **Create** | `prototypes/NinjaLearning_GradingDemo_v1.0.html` |
| **Create** | `student-template.csv` (3-col blank template) |
| **Update** | `ARCHITECTURE_MAP.md` |
| **Update** | `WORKFLOW.md` |

---

## What This Does NOT Include

- Parent push / profile updates
- Multi-class support
- Belt promotions
- Login / auth
- Cloud persistence (state lives in memory; receipt + primed CSV are the save mechanism)

---

## Definition of Done

- [ ] 3-col CSV loads cleanly, Prime Mode activates
- [ ] Primed CSV exports correctly with all 7 columns
- [ ] Thursday: 7-col CSV loads with correct stripe state per student
- [ ] Register works, grading flow awards stripes correctly
- [ ] Call Out Mode displays one student at a time on iPad
- [ ] Receipt saves as PDF via iOS print sheet
- [ ] Download Receipt button produces a readable file
- [ ] Entire session runs without internet

---

*Updated: 2026-03-31 — added three-phase workflow (Setup → Prime → Grade)*
*Next action: Step 1 — create the file and begin the build*
