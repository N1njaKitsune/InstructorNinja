# InstructorNinja — Architecture Map
**Last updated:** 2026-03-30
**Stage:** Stage 1 — Advanced Prototype
**Version:** v4.1

---

## Overview

This document is the full inventory of the InstructorNinja section — what has been built, what is in progress, and what is not yet started. It covers all screens, sub-views, features, and files.

---

## File Inventory

| File | Type | Status | Notes |
|------|------|--------|-------|
| `prototypes/NinjaLearning_InstructorApp_v4.1.html` | Prototype | ✅ Built | Current primary prototype — grading flow v2.0 |
| `prototypes/NinjaLearning_InstructorApp_v4.0.html` | Prototype | ✅ Built | Previous version — superseded by v4.1 |
| `prototypes/NinjaLearning_Instructor.html` | Prototype | ✅ Built | Demo/repo version |
| `ui-specs/NinjaLearning_InstructorApp_UISpec_v1.0.docx` | Spec | ✅ Built | UI spec v1.0 |
| `ARCHITECTURE.md` | Doc | ✅ Built | High-level section overview |
| `WORKFLOW.md` | Doc | ✅ Built | Active tasks and backlog |
| `STATUS.md` | Doc | ✅ Built | Live section status |
| `CLAUDE.md` | Doc | ✅ Built | AI context for this section |
| `ARCHITECTURE_MAP.md` | Doc | ✅ This file | Full development inventory |

**Missing files (not yet created):**

| File | Type | Notes |
|------|------|-------|
| `ui-specs/NinjaLearning_InstructorApp_UISpec_v2.0.docx` | Spec | Grading flow v2.0 spec — not yet written |
| `ui-specs/Administration_UISpec.docx` | Spec | Administration section spec — not yet started |
| `ui-specs/StudentProfile_UISpec.docx` | Spec | Full student profile spec — not yet started |
| `integration/grading-push-spec.md` | Spec | Grading → Student Profile push — to coordinate with `_SHARED/integration/` |

---

## Screen & Feature Inventory

### ✅ Home Screen (`scr-home`)
The instructor's personal dashboard — the default landing view.

| Feature | Status | Notes |
|---------|--------|-------|
| Next class card (countdown, student count, capacity %, attendance %) | ✅ Built | |
| "Go to class" and "View roster" quick actions | ✅ Built | |
| Instructor details panel (name, role, class count, students, term) | ✅ Built | |
| Alerts panel (belt challenges, consecutive absences, low enrolment) | ✅ Built | Tappable — links to relevant screens |
| Weekly schedule strip | ✅ Built | |
| This week's classes list | ✅ Built | |
| Notifications feed (new students, confirmed challenges, grading saved) | ✅ Built | |

---

### ✅ Classes Screen (`scr-classes`)
The core class management and grading area. Contains multiple nested sub-views.

#### Class Overview
| Feature | Status | Notes |
|---------|--------|-------|
| School summary banner (total students, capacity %, attendance %) | ✅ Built | Tappable — opens school detail |
| Term progress bar | ✅ Built | |
| View toggle: By day / By class type / My classes | ✅ Built | |
| Class list cards | ✅ Built | |

#### School Detail View
| Feature | Status | Notes |
|---------|--------|-------|
| Enrolment ring chart | ✅ Built | |
| Attendance ring chart | ✅ Built | |
| Student growth bar chart (term on term) | ✅ Built | |
| Classes with available spaces (alerts) | ✅ Built | |
| Consecutive absences alerts | ✅ Built | |
| Belt distribution chart | ✅ Built | |

#### Class Detail View
| Feature | Status | Notes |
|---------|--------|-------|
| Class header (name, mat, time, instructor) | ✅ Built | |
| Student stats (present, capacity, attendance %) | ✅ Built | |
| Open register action | ✅ Built | |
| Start grading action | ✅ Built | |

#### Register / Attendance
| Feature | Status | Notes |
|---------|--------|-------|
| Student list with present / absent marking | ✅ Built | |
| Stats bar (present, absent, unmarked counts) | ✅ Built | |
| Confirm attendance action | ✅ Built | |
| Session summary panel | ✅ Built | |

#### Grading — Roster Selection
| Feature | Status | Notes |
|---------|--------|-------|
| Present-students-only roster | ✅ Built | |
| Multi-select for grading | ✅ Built | |
| Grade mode banner | ✅ Built | |
| Grade action (with count) | ✅ Built | |
| Session summary panel | ✅ Built | |

#### Grading — Stripe Award Screen
| Feature | Status | Notes |
|---------|--------|-------|
| Per-student stripe selection UI | ✅ Built | |
| Award count indicator | ✅ Built | |
| Confirm to summary action | ✅ Built | |
| Session summary panel | ✅ Built | |

#### Grading — Summary & Confirmation
| Feature | Status | Notes |
|---------|--------|-------|
| Grading summary review | ✅ Built | |
| Submit / confirm grading | ✅ Built | |
| Grading receipt / audit trail | ✅ Built | |

#### Belt Promotions
| Feature | Status | Notes |
|---------|--------|-------|
| Belt challenge list | ✅ Built | |
| Individual promotion detail view | ✅ Built | |
| Award belt confirmation | ✅ Built | |
| Award success screen | ✅ Built | |
| Grading flow v2.0 refinements | ✅ Built | Completed in v4.1 — see notes below |

---

### ✅ Directory Screen (`scr-directory`)
Whole-school student directory.

| Feature | Status | Notes |
|---------|--------|-------|
| Student list (all students) | ✅ Built | |
| Search by name | ✅ Built | |
| Sort: A–Z / Class / Belt / Age | ✅ Built | |
| Student count display | ✅ Built | |
| Individual student profile tap-through | ❌ Not built | Directory is a flat list — no full profile view yet |

---

### ✅ Overview Screen (`scr-overview`)
Business-level data dashboard.

| Feature | Status | Notes |
|---------|--------|-------|
| Student growth chart (5-term trend) | ✅ Built | |
| Belt distribution chart | ✅ Built | |
| Grading history list | ✅ Built | |
| Grading receipt detail view | ✅ Built | Accessible from grading history |
| Revenue metrics | ❌ Not built | Listed in ARCHITECTURE.md — not yet started |
| Retention metrics | ❌ Not built | Listed in ARCHITECTURE.md — not yet started |
| Full business dashboard data design | 🔄 In progress | Data design needed — in WORKFLOW.md backlog |

> **v4.1 Grading flow changes (2026-03-30):**
> - Register bulk actions: All present / All absent / Clear all
> - Running Late indicator (parent app feed, display-only) with amber row tint and badge
> - Late counter added to register stats bar
> - Progress counter on register ("X/Y marked") and grading roster ("X present")
> - Select All / Deselect All on grading roster
> - Summary "Back to grading" now returns to a fresh roster with all students deselected
> - Grading roster selection: green tick only, no row background change
> - Stripe button hover toned down (no white flash)
> - Grade students mode bar: solid dark background (no transparency bleed on scroll)
> - Service worker / PWA block removed from prototype (deployment-only)
> - 136 character encoding errors fixed throughout

---

### ❌ Student Manager (not yet started)
Full individual student profile area.

| Feature | Status | Notes |
|---------|--------|-------|
| Student profile view (personal details, contact, notes) | ❌ Not built | |
| Belt/stripe progression history | ❌ Not built | |
| Attendance history | ❌ Not built | |
| Instructor notes | ❌ Not built | |
| Parent contact details | ❌ Not built | |
| Flag / alert system (per student) | ❌ Not built | |

---

### ❌ Administration Section (not yet started)
Scheduling, enrolment, and billing overview for Ninja School Ltd staff.

| Feature | Status | Notes |
|---------|--------|-------|
| Class scheduling screens | ❌ Not built | In WORKFLOW.md backlog |
| Enrolment management flow | ❌ Not built | In WORKFLOW.md backlog |
| New student onboarding | ❌ Not built | |
| Billing overview | ❌ Not built | Listed in ARCHITECTURE.md |
| Term / season management | ❌ Not built | |
| Instructor assignment | ❌ Not built | |
| Waitlist management | ❌ Not built | |

---

## Cross-Section Integration

These are items that connect the instructor section to other parts of the wider Ninja Learning App.

| Integration | Status | Notes |
|-------------|--------|-------|
| Grading → Student Profile push | ❌ Not built | Coordinate with `../_SHARED/integration/` |
| Class data → Business dashboard metrics | 🔄 Partial | Data is mocked in prototype; live integration not yet designed |
| Student profile → Parent notification trigger | ❌ Not built | Downstream of Student Profile work |
| Grading push spec | ❌ Not written | Needs to be created and shared with _SHARED team |

---

## Summary

| Category | Built | In Progress | Not Started |
|----------|-------|-------------|-------------|
| Home | 7 | 0 | 0 |
| Classes | 23 | 1 | 0 |
| Directory | 4 | 0 | 1 |
| Overview / Business | 4 | 1 | 2 |
| Student Manager | 0 | 0 | 6 |
| Administration | 0 | 0 | 7 |
| Cross-section Integration | 0 | 1 | 3 |
| **Total** | **38** | **3** | **19** |

---

## Priority Order (suggested)

1. **Grading flow v2.0** — refinement of existing work (in progress, highest impact)
2. **Grading → Student Profile push spec** — needed to unblock cross-section integration
3. **Student profile tap-through from Directory** — low effort, high value for usability
4. **Full Student Manager** — individual profiles, history, notes
5. **Business dashboard data design** — flesh out Overview with real metrics
6. **Administration section** — scheduling, enrolment, billing
