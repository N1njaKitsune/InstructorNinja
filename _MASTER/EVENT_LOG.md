# Ninja Learning — Event Log

> **Purpose:** Append-only record of significant events across all sections.
> Every agent appends here. Nobody edits or deletes existing entries.
> MAINFRAME reads this to reconstruct current state without relying on mutable status files.
>
> **Rules:**
> 1. **Append only** — never edit or remove previous entries.
> 2. **One event per line** — use the format below.
> 3. **Agents write here at session end** — before writing HANDOFF.md.
> 4. **MAINFRAME reads on sync** — this supplements (does not replace) SYNC_PROMPT.md.
> 5. **Dates are absolute** — never "today" or "yesterday."

---

## Format

```
[YYYY-MM-DD] [section] [type] — description
```

**Sections:** `student`, `parent`, `instructor`, `master`, `shared`, `infrastructure`
**Types:** `completed`, `decision`, `blocker`, `escalation`, `fix`, `created`, `archived`

---

## Log

[2026-04-02] master created — Event log system established as part of repo reorganization.

[2026-04-02] master completed — Prototype lifecycle system implemented: MANIFEST.md added to student/, parent/, instructor/ prototypes. Version discipline and archive rules defined.

[2026-04-02] student archived — 10 superseded prototype files moved to _archive/ (v1.0-v3.0 files superseded by v4.x series).

[2026-04-02] instructor fix — index.html redirect updated from v4.4 to v4.8 (was 3 versions stale).

[2026-04-02] master decision — _REPOS/ to be restructured as unified production codebase. Old Ninja-Learning-App-Demo preserved as _archive. Backend build begins 2026-04-03 (Friday).

[2026-04-02] instructor completed — v4.6: QoL improvements (Finance tab, Admin renamed to Manage, enrolment alerts).

[2026-04-02] instructor completed — v4.7: Role switcher + Enrolment Manager, Waitlist, Trial Tracker, Absence Follow-up.

[2026-04-02] instructor completed — v4.8: Staff section, Document compliance, Class cancellation/cover, Term setup, Revenue per class.

[2026-04-02] instructor escalation — 6 items for MAINFRAME: role model (4 tiers agreed), Finance ownership, Assistant grading permissions, Admin roles, Staff entity schema, Compliance data model.

[2026-04-01] parent completed — v1.6: Parent Summary View rebuilt with student profile, belt context, NEN Aura. Content spec (PARENT_CONTEXT_SPEC.md) written with 8 context moments.

[2026-04-01] parent fix — v1.6 screen-student white screen bug fixed (unclosed div in screen-shop).

[2026-04-02] master completed — Governance docs updated: SESSION_PROMPT, SYNC_PROMPT, all three CLAUDE.md files now reference Event Log, MANIFEST.md, and prototype lifecycle rules.

[2026-04-02] master completed — Schema Architect skill created at _SHARED/infrastructure/skills/schema-architect/SKILL.md. Includes all resolved decisions from DECISION_MAP, non-negotiable rules, and structured output format.

[2026-04-02] master archived — Drift audit (2026-03-31) moved to _SHARED/archive/. 12 of 14 items resolved. Y6 accepted as-is, Y7 informational.

[2026-04-02] master decision — Removed separate Nendo/ repo placeholder from _REPOS/. Nendo is the student section of the unified app, not a separate codebase. All sections live together in _REPOS/Ninja-Learning-App/.

[2026-04-02] master archived — Old demo repo (_old-demo-archive/) deleted. All content superseded by current prototypes and BREATHWORK.md v2.0. Git history preserved on GitHub at N1njaKitsune/Ninja-Learning-App-Demo.

[2026-04-02] shared created — Integration demo (_REPOS/index.html) built. Loads all 3 section prototypes (Instructor v4.8, Parent v1.6, Student v4.1) in a unified shell with mock API contracts for 4 data flows: Grading Pipeline, Two-Week Challenge, Nendo Session, Attendance. Designed as API contract reference for backend build starting 2026-04-03.
