# Mainframe Drift Audit — 2026-03-31

> **Purpose:** Cross-reference every sub-branch document against the _MASTER mainframe to identify inconsistencies, stale data, terminology drift, and structural misalignment.
>
> **Audited by:** Claude (Cowork session)
> **Scope:** All .md files in `parent/`, `student/`, `instructor/`, `_SHARED/`, and `_MASTER/`

---

## Severity Key

| Level | Meaning |
|-------|---------|
| **RED** | Factual contradiction with mainframe — could cause build errors or wrong implementation |
| **AMBER** | Stale or outdated content — not wrong yet, but will mislead the next agent or session |
| **YELLOW** | Structural inconsistency or minor terminology mismatch — should be cleaned up |

---

## RED — Contradictions with Mainframe

### R1. Tier name typo in Grading Demo Roadmap
- **File:** `instructor/GRADING_DEMO_ROADMAP.md` — Stripe Eligibility Rules table
- **Issue:** Intermediate tier is labelled **"Chukyu"** but the mainframe Working Doc v2.0 (§2.5) uses **"Chokyu"**
- **Impact:** Any agent or build reading this file will use the wrong tier name. CSV validation, UI labels, and schema values could all drift.
- **Fix:** Change "Chukyu" → "Chokyu" in the Grading Demo Roadmap.

### R2. Instructor ARCHITECTURE_MAP.md is significantly stale
- **File:** `instructor/ARCHITECTURE_MAP.md`
- **Last updated:** 2026-03-30
- **Issue:** The map says **Student Manager is "not yet started" (0 built, 6 not started)** and **Administration is "not yet started" (0 built, 7 not started)**. But `instructor/WORKFLOW.md` records that Student Manager was completed in v4.2, Class Management in v4.3, and Administration in v4.4 — all on 2026-03-31.
- **Impact:** The architecture map is the working source of truth for the instructor section. Any agent reading it will think 19 features are unbuilt when many are now complete. The summary table (38 built / 3 in progress / 19 not started) is wrong.
- **Fix:** Full update of ARCHITECTURE_MAP.md to reflect v4.2, v4.3, and v4.4 completions. Update the summary table and priority order.

---

## AMBER — Stale Content

### A1. Parent WORKFLOW.md is completely outdated
- **File:** `parent/WORKFLOW.md`
- **Issue:** Active tasks still list "Parent dashboard screen design (v1.0)" and "Define parent-visible student data fields" as open. The app is actually at v1.5 with Phase A complete and Phase B partially done. The backlog still lists "Family profile management screens" as unstarted — these were built in v1.3.
- **Impact:** Any agent reading WORKFLOW.md will start the wrong work.
- **Fix:** Rewrite WORKFLOW.md to match the current state reflected in STATUS.md and ARCHITECTURE_MAP.md.

### A2. Parent AGENT_DEPLOY_PROMPT.md references completed work as TODO
- **File:** `parent/AGENT_DEPLOY_PROMPT.md`
- **Issue:** The build order lists Phase A items (A1–A4) and Phase B items (B1, B7, B8) as unchecked `[ ]`, but all of these were completed on 2026-03-31 (v1.4 and v1.5). The "How to Start" script still suggests starting with Phase A.
- **Impact:** An agent deploying from this prompt will re-attempt work that's already done.
- **Fix:** Mark completed items as `[x]` and update the "How to Start" script to reflect current position (Phase B remaining items).

### A3. Instructor ARCHITECTURE_MAP.md build version is behind
- **File:** `instructor/ARCHITECTURE_MAP.md`
- **Issue:** Header says "Version: v4.1" but current prototype is v4.4. The v4.1 changelog is included but v4.2, v4.3, v4.4 changes are absent.
- **Fix:** Update version to v4.4 and add changelogs for v4.2–v4.4 (content is available in WORKFLOW.md working notes).

### A4. _SHARED/integration/ has no actual specs
- **File:** `_SHARED/integration/README.md`
- **Issue:** All five core integration flows are listed as unchecked `- [ ]`. No spec files have been created. Multiple sub-branches (parent, instructor, student) reference `_SHARED/integration/` for data flow specs that don't exist.
- **Impact:** Cross-section integration work is flying blind. The "Grading Pipeline" spec is particularly critical — it's referenced as a blocker in both instructor/WORKFLOW.md and parent/STATUS.md.
- **Fix:** This isn't drift so much as a gap. Flag as a priority to begin documenting, starting with the Grading Pipeline.

### A5. Parent ARCHITECTURE.md is too minimal
- **File:** `parent/ARCHITECTURE.md`
- **Issue:** Lists only 4 sections (Dashboard, Progress View, Notifications, Family Profile) with minimal detail. The actual app has 8+ screens (Lock Screen, Home, Attendance, Family Account, Billing, Shop, Student Profile, Notifications Panel). The ARCHITECTURE_MAP.md is comprehensive, but ARCHITECTURE.md hasn't kept pace.
- **Fix:** Either expand ARCHITECTURE.md to match ARCHITECTURE_MAP.md, or add a redirect note pointing to ARCHITECTURE_MAP.md as the authoritative document (similar to what student/ARCHITECTURE.md does).

---

## YELLOW — Structural & Terminology Issues

### Y1. SESSION_PROMPT.md directory layout is outdated
- **File:** `_MASTER/SESSION_PROMPT.md` — §6 Directory Layout
- **Issue:** The directory tree shows `student/` twice (once for Stage 1, once for Stage 2) instead of showing the actual three-section layout (`student/`, `parent/`, `instructor/`). References `student/Prototypes/`, `student/UI-Specs/`, `student/Server-Guides/` with capitalised folder names, but actual folders use lowercase (`prototypes/`, `ui-specs/`).
- **Fix:** Update the directory tree to match the real layout.

### Y2. COMPANY_README.md directory layout has same issue
- **File:** `_MASTER/COMPANY_README.md` — directory tree
- **Issue:** Shows `student/` twice where it should show `student/`, `parent/`, `instructor/`. The tree was likely copied from SESSION_PROMPT.md and shares the same staleness.
- **Fix:** Update to match real directory structure.

### Y3. Infrastructure README references wrong output location
- **File:** `_SHARED/infrastructure/README.md` — Key Outputs
- **Issue:** Says server guides are in `student/Server-Guides/` but no such folder exists in the current structure. Server guides (if they exist) would be in `_SHARED/infrastructure/` or possibly `_REPOS/`.
- **Fix:** Confirm correct location and update.

### Y4. UI & Prototypes README has duplicate output paths
- **File:** `_SHARED/ui-processes/README.md` — Key Outputs
- **Issue:** Lists `student/prototypes/` twice in the output locations (appears to be a copy-paste from when the layout was different).
- **Fix:** Should list `student/prototypes/`, `parent/prototypes/`, and `instructor/prototypes/`.

### Y5. Mainframe Working Doc repo names vs CLAUDE.md repo names
- **File:** `_MASTER/CLAUDE.md` vs `_MASTER/SESSION_PROMPT.md`
- **Issue:** CLAUDE.md references public repos as `StudentNinja`, `ParentNinja`, `InstructorNinja`. SESSION_PROMPT.md references `Ninja-Learning-App-Demo` and `Nendo`. Both are correct (different repos for different purposes) but the relationship isn't clear to a new agent — it looks like conflicting information.
- **Fix:** Add a brief note in SESSION_PROMPT.md distinguishing the main dev repos from the public sub-project repos.

### Y6. Student ARCHITECTURE.md is a redirect stub
- **File:** `student/ARCHITECTURE.md`
- **Issue:** Just redirects to `nendo/ARCHITECTURE.md` and `PRODUCT_MAP.md`. This is intentional (noted as "backwards compatibility") but differs from how parent/ and instructor/ use their ARCHITECTURE.md files (as actual content documents).
- **Impact:** Minor — the redirect works, but the inconsistency in document roles across branches could confuse an agent.
- **Fix:** Acceptable as-is, but consider noting in PRODUCT_MAP.md that it replaces ARCHITECTURE.md for the student section.

### Y7. Mainframe pending decision #9 (Fifth Element) not reflected anywhere
- **File:** `_MASTER/NinjaLearning_WorkingDoc_v2.0.md` — Pending Decision #9
- **Issue:** "Fifth element (Chokyu)" is listed as pending — whether Chokyu belts get a 5th element stripe slot. Deliverable #7 also references "5th element slot required." Neither the parent ARCHITECTURE_MAP.md nor the instructor grading logic mention this possibility. If it's decided, it would affect stripe badge UI across all three sections.
- **Impact:** Low for now (it's pending), but worth flagging so it doesn't get forgotten during integration.

---

## Summary Table

| ID | Severity | Branch | File | Issue (short) |
|----|----------|--------|------|---------------|
| R1 | RED | instructor | GRADING_DEMO_ROADMAP.md | "Chukyu" should be "Chokyu" |
| R2 | RED | instructor | ARCHITECTURE_MAP.md | Student Manager + Admin shown as unbuilt (actually complete) |
| A1 | AMBER | parent | WORKFLOW.md | Active tasks completely stale |
| A2 | AMBER | parent | AGENT_DEPLOY_PROMPT.md | Build order shows completed items as TODO |
| A3 | AMBER | instructor | ARCHITECTURE_MAP.md | Version says v4.1, actual is v4.4 |
| A4 | AMBER | _SHARED | integration/README.md | No integration specs exist despite being referenced everywhere |
| A5 | AMBER | parent | ARCHITECTURE.md | Too minimal vs actual app complexity |
| Y1 | YELLOW | _MASTER | SESSION_PROMPT.md | Directory tree outdated |
| Y2 | YELLOW | _MASTER | COMPANY_README.md | Directory tree outdated (same issue) |
| Y3 | YELLOW | _SHARED | infrastructure/README.md | Wrong output folder path |
| Y4 | YELLOW | _SHARED | ui-processes/README.md | Duplicate output paths |
| Y5 | YELLOW | _MASTER | SESSION_PROMPT.md + CLAUDE.md | Repo name relationship unclear |
| Y6 | YELLOW | student | ARCHITECTURE.md | Redirect stub (intentional but inconsistent) |
| Y7 | YELLOW | _MASTER | WorkingDoc v2.0 | Fifth element decision not surfaced to branches |

---

## Resolution Status (updated 2026-04-01)

| ID | Status | Notes |
|----|--------|-------|
| R1 | ✅ Resolved | "Chukyu" → "Chokyu" fixed in GRADING_DEMO_ROADMAP.md |
| R2 | ✅ Resolved | ARCHITECTURE_MAP.md updated to v4.4 with full inventory |
| A1 | ✅ Resolved | Parent WORKFLOW.md rewritten to reflect Phase B state |
| A2 | ✅ Resolved | Phase A/B checkboxes updated; agent template v1.3→v1.5 reference fixed |
| A3 | ✅ Resolved | ARCHITECTURE_MAP.md version updated to v4.4 |
| A4 | ✅ Partially resolved | 3 of 5 specs drafted (grading-pipeline, notification-system, shared-data-model); Session Logging + Authentication still needed |
| A5 | ✅ Resolved | Parent ARCHITECTURE.md expanded to list all 8 screens with redirect to ARCHITECTURE_MAP.md |
| Y1 | ✅ Resolved | SESSION_PROMPT.md directory tree updated to 3-section layout |
| Y2 | ✅ Resolved | COMPANY_README.md directory tree updated |
| Y3 | ✅ Resolved | Infrastructure README Key Outputs corrected |
| Y4 | ✅ Resolved | UI README now lists all three section prototype folders |
| Y5 | ✅ Resolved | SESSION_PROMPT.md now distinguishes dev repos from public sub-project repos |
| Y6 | — | Accepted as-is (intentional redirect stub) |
| Y7 | — | Informational — pending decision, no action needed yet |

## Original Recommended Fix Priority (for reference)

1. **R1** — One-word fix. Do it now.
2. **R2 + A3** — Same file. Full update of instructor ARCHITECTURE_MAP.md to v4.4 state.
3. **A1** — Rewrite parent WORKFLOW.md.
4. **A2** — Update parent AGENT_DEPLOY_PROMPT.md checkboxes and start script.
5. **Y1 + Y2** — Update directory trees in SESSION_PROMPT.md and COMPANY_README.md together.
6. **A4** — Begin the Grading Pipeline integration spec (first real spec in _SHARED/integration/).
7. **Everything else** — Batch in a maintenance pass.

---

*Audit complete. No critical philosophical drift detected — the NEN/TRN methodology, belt system, grading rules, non-negotiable rules, and Nendō constraints are consistent across all branches. The drift is operational: stale status documents and one terminology typo.*

---

*Ninja Learning — Drift Audit — 2026-03-31*
