# Ninja Learning Instructor App — QA Bug Report v2
**File reviewed:** NinjaLearning_InstructorApp_v4.4.html (1,080 lines)
**Report updated:** 31 March 2026
**Method:** Full source code review — every line read and execution flow traced

---

## Summary

The initial report (v1) contained 20 bugs. After tracing actual execution flow in the code, **11 of those 20 were misdiagnosed** — the code handles them correctly. The real issue list is 10 items:

| Category | Count |
|---|---|
| Fixed in v4.5 (code errors) | 8 |
| Flag for backend (requires infrastructure) | 2 |
| Misdiagnosed — not real bugs | 10 |

---

## FIXED IN v4.5

### FIX-01 · `closeStudent()` — stale class detail on return · Medium

**What was wrong:** When a user opened a student profile from the class roster (class context), then tapped Back, `closeStudent()` called `goClasses('class-detail')` to show the class detail screen — but never called `renderCD(curCls)` to re-render it. The class detail content was stale (e.g. if attendance had been taken since the screen was last rendered, it wouldn't reflect the updated grading button state).

**Fix:** Added `renderCD(curCls)` immediately after `goClasses('class-detail')` in the class-context branch of `closeStudent()`.

---

### FIX-02 · `addNote()` — silent failure on empty save · Medium

**What was wrong:** If the instructor tapped "Save note" with an empty textarea, the function silently returned `if(!txt)return;` with no visual feedback. Instructors had no indication of why nothing happened.

**Fix:** Textarea border flashes red (`#F09595`) for 1.2 seconds before returning, giving clear visual feedback that the field is empty.

---

### FIX-03 · `tgMed()` — dead code · Low

**What was wrong:** `tgMed()` (line 944, v4.4) was defined but never called. It referenced element IDs `med-cont` and `med-btn` which don't exist in the DOM (the correct IDs are `spmed-cont` and `spmed-btn`, used by `tgMedSP()`). Leftover from v4.2 refactoring.

**Fix:** Function removed entirely. `tgMedSP()` preserved.

---

### FIX-04 · Topbar subtitle static within Classes sub-views · Low

**What was wrong:** `switchTab('classes')` hardcodes the topbar to "Classes / Spring term 2026" and nothing updates it as the user navigates deeper — into a specific class, register, or grading mode. This was mildly misleading context in the header.

**Fix:** Three functions now update the topbar on entry:
- `renderCD(id)` → shows class name and day/time
- `openRegister(id, fh)` → shows "Register / [Class name · Day]"
- `openGradeRoster(id)` → shows "Grade students / [Class name · Day]"

---

### FIX-05 · Tier label missing in grade screen student cards · Low

**What was wrong:** In the stripe selection screen (grade-screen), each student card showed name and belt level but not their tier group (Shokyu / Chokyu / Jokyu). In the grade roster the tier headers make it clear; in the individual cards it was absent.

**Fix:** Tier label added to the belt sub-line on each student card in `renderGS()`.

---

### FIX-06 · Encoding artifacts — lock emoji and star character · Low

**What was wrong:** Two characters were double-encoded UTF-8 (mojibake) — encoding failures from a prior file save/edit step that treated UTF-8 bytes as Latin-1 before re-encoding:
- Grading button lock icon (U+1F512 🔒) — rendered as `ð` + control characters
- Belt promotion timeline active dot (U+2605 ★) — rendered as `â` + control characters

**Fix:** Both replaced with correctly encoded UTF-8 bytes at the binary level.

---

### FIX-07 · `pending` variable shadow in `renderBilling()` · Low

**What was wrong:** `renderBilling()` declared `const pending=15` (billing count), which shadowed the global `pending` array used throughout the grading flow. No functional crash in current code since the scopes don't interact, but this was a latent risk — any future code reading the global `pending` inside `renderBilling` would silently get the number 15 instead of the array.

**Fix:** Billing variable renamed to `pendingPay` throughout `renderBilling()`.

---

### FIX-08 · Hardcoded receipt date in `finalAwardAll()` · Medium

**What was wrong:** When awarding stripes, the grading receipt was created with `date: 'Wednesday 25 March 2026'` — a hardcoded string. Any session awarded on a different date would generate a receipt with the wrong date.

**Fix:** Date now generated dynamically: `new Date().toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long', year:'numeric'})`.

---

## FLAG FOR BACKEND

These cannot be fixed in the prototype without significant architectural work. Both are expected prototype limitations — flagged here for when real infrastructure is built.

### BACK-01 · No data persistence · Medium

**What it is:** All state — grading records, register attendance, instructor notes, receipts — is held in JavaScript memory only. A page reload wipes everything. `receipts`, `regSt`, `staged`, `NOTES` are all in-memory arrays/objects.

**What's needed:** Backend API + database (student records, grading history, receipts). Could be prototyped short-term with `localStorage` but the real fix is a proper data layer.

**Affects:** Grading history, register, notes, everything.

---

### BACK-02 · Hardcoded instructor identity · Low (prototype scope)

**What it is:** The entire app assumes a single user — "Harry Bovill". The instructor name is hardcoded in topbar, receipts, `INST_MAP`, and class sub-heading text. No login, no session, no role.

**What's needed:** Auth system — login/session, instructor profile fetch, role-based UI.

**Not a prototype blocker** — but worth flagging before any multi-instructor testing.

---

## MISDIAGNOSED — NOT REAL BUGS

The following were reported in v1 but traced to be non-issues:

| v1 Bug ID | Claim | Reality |
|---|---|---|
| BUG-001 | `openSP()` crashes on invalid ID | IDs only come from the generated `STUDS` array; no external input. Defensive null check would be nice but this won't crash in practice. |
| BUG-002 | Grading shows wrong attendance if register skipped | The "Start grading" button is `disabled` until `regSt` has at least one `'P'` value. You cannot reach grading without the register. Guard works. |
| BUG-003 | `onclick` string escaping breaks stripe buttons | Keys are always `'0-f'`, `'1-h'`, `'a-0'` etc. — no quotes or backslashes. Escaping is redundant but harmless. |
| BUG-004 | Home tab blank on load | `renderHW()` IS called at init (line 1077). Home week strip and class cards render correctly on startup. |
| BUG-005 | Classes tab empty on load | `renderCL()` IS called at init, and again inside `goClasses('overview')`. Class list is populated before the user ever clicks the Classes tab. |
| BUG-006 | Context parameter missing in Directory links | Directory rows correctly call `openSP(s.id)` without context, which defaults to `'directory'` — the correct behaviour for directory entry points. Class roster rows correctly pass `'class'` context. |
| BUG-008 | Late student badge never rendered | `lb` IS included in `row.innerHTML` on line 711 (v4.4). Running late badge renders correctly. Late row styling also applies via `rowSt='L'`. |
| BUG-009 | Selection count goes stale after row click | `renderGR()` calls `usc()` and `ubadges()` internally. The onclick also calls `usc()`. Count updates correctly. |
| BUG-010 | Register screen badge shows wrong value | The Summary button badge on the register screen shows staged stripe count — intentional, as it links to the grading summary from any screen in the grading flow. |
| BUG-013 | DOM leak from receipt panel | `openRec()` checks `document.getElementById('ovp-receipt')` before creating the panel — creates it once, reuses it. No accumulation. |
| BUG-014 | Admin schedule shows `undefined` for dates | `shortDay` maps full day names → 3-letter keys, which match exactly the keys in `TERM_DATES`. No undefined. |

---

## Files

| File | Description |
|---|---|
| `prototypes/NinjaLearning_InstructorApp_v4.4.html` | Original — unchanged |
| `prototypes/NinjaLearning_InstructorApp_v4.5.html` | Fixed — all 8 code fixes applied |
| `QA_BUG_REPORT.md` | Initial report (superseded) |
| `QA_BUG_REPORT_v2.md` | This document |
