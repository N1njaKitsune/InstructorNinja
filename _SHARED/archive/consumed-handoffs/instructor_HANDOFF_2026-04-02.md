# Instructor — Session Handoff
**Date:** 2026-04-02
**Session focus:** QoL improvements, Admin section strategy, role/permission model, Manage tab build-out

---

## 1. What was done

### v4.6 — QoL improvements (local check copy)
- Overview: Finance tab added (Stats | Finance | Grading). Billing content moved here from Admin
- Overview Stats: 4th stat card changed from "35% Female" to "89% Retention — term on term"
- Admin tab renamed to "Manage" throughout (nav label + topbar title)
- Admin/Manage tab: billing tab removed — schedule-only pending new features
- Home alerts: low-enrolment alert now tappable → Manage tab
- Classes nav: amber badge for pending belt challenges (2)
- Class detail: enrolled students section open by default (was collapsed)
- Student profile back nav: shows actual class name when accessed from a class
- Register confirm button: stays always available (reverted — freely updatable was the right call)

### v4.7 — Phase 1: Manage tab core features
- **Role switcher scaffolding** — "View as" dropdown in topbar (Administrator / Lead Instructor / Instructor / Assistant). Toggles nav visibility, adapts content by role. Default: Administrator.
- **Enrolment manager** — Summary cards (enrolled, capacity, spots, classes full) + class list with capacity rings + tap-through enrolled roster + "Move" student between classes with validation and confirmation
- **Waitlist** — 4 sample waitlisted students. Summary + list grouped by status (Waiting/Offered/Enrolled/Declined) + tap-through detail + "Offer place" and "Offer alternative" actions
- **Trial tracker** — 4 sample trial students. Summary cards (active, decision due, converted, conversion rate) + list grouped by status + "Convert to enrolled" and "Trial ended" actions
- **Absence follow-up** — Derived from existing student data (consecutive absences flag). Summary + list grouped by pending/contacted/resolved + tap-through with "Mark contacted", "Log note", "Mark resolved"

### v4.8 — Phase 2: Manage tab advanced features
- **Staff section** — 4 staff members (Harry Bovill, Sophie Clarke, James Wright, Priya Sharma). Summary + staff list with compliance status dots + tap-through profiles with classes, pay/hours (admin-only visibility), DBS/First Aid/Safeguarding status and expiry tracking
- **Document compliance** — 4 document types (Consent, Photo, Medical, GDPR). Per-student compliance generated at init. Summary + overview by doc type with stacked bars + student list with status dots + "Show incomplete only" filter + "Mark as received" actions
- **Class cancellation and cover** — Cancellations list + Cover arrangements list + "Cancel a session" and "Arrange cover" forms
- **Term setup** — Current term card with progress + upcoming term with editable-style fields + holiday management + "Publish term" action
- **Revenue per class** — Added to Overview → Finance tab. All classes with enrolled count, revenue, estimated cost, margin (colour coded), total row

### Build stats
| Version | Lines | Size | Features added |
|---------|-------|------|----------------|
| v4.6 | 1,113 | 122K | QoL improvements |
| v4.7 | 1,497 | 143K | Role switcher + 4 Manage features |
| v4.8 | 1,918 | 166K | 5 more Manage features + Revenue per class |

---

## 2. What changed

### Manage tab — fully populated
Manage now has 9 sub-views: Enrolments | Waitlist | Trials | Follow-up | Schedule | Staff | Compliance | Cover | Term. All built and functional in v4.8.

### Finance tab ownership
Finance (billing, collection rate, payment breakdown, alerts, revenue per class) lives in **Overview → Finance tab**. Access gated by Admin privileges.

### Role switcher — functional in prototype
Four roles implemented with a topbar dropdown. Nav visibility, content adaptation, and pay/hours visibility all respond to role changes. This is prototype scaffolding — real auth will replace it.

### Role and permission model — agreed
Four tiers, with Admin privileges as a **flag** on Lead Instructor accounts:

| Role | Admin privileges | Access |
|------|-----------------|--------|
| Administrator | Always on | Full app — all tabs including Finance, Staff, full Manage |
| Lead Instructor + Admin flag | On | Identical to Administrator |
| Lead Instructor (no flag) | Off | All Classes, Directory, Overview (Stats + Grading only), no Manage |
| Instructor | N/A | Own classes only, full Directory, Overview Stats only |
| Assistant Instructor | N/A | Own classes, own students in Directory, no Overview, Training tab (future) |

**Harry Bovill** = Lead Instructor + Admin privileges on.

### Staff — new data entity
Staff profiles now exist in the prototype with: role, class assignments, pay, hours, phone, email, DBS/First Aid/Safeguarding status and expiry. 4 staff members seeded. Pay section is role-gated (admin only).

---

## 3. What's next

**Review needed:**
- Hazza to review v4.6, v4.7, v4.8 locally — open each in browser and test flows
- Decision: promote to a single consolidated version or iterate further

**Not yet built (from brainstorm):**
- Parent communications — announcements to class groups or individual families
- Grading / belt ceremony calendar — formal event planning
- Retention risk — students showing churn signals (proactive alerts)
- Training tab for Assistant Instructors
- "Propose grade" flow for Assistants (countersign model)

**Architecture:**
- HTML architecture map (deferred from start of session — should be built next)
- Build spec document created at `/sessions/relaxed-friendly-dirac/BUILD_SPEC.md` — reusable for future phases

---

## 4. Escalations for MAINFRAME

**[ESCALATE] Role and permission model**
Agreed and prototyped. Needs to be in the Working Doc — affects auth system, data model, parent section, student section, grading push spec.

**[ESCALATE] Finance tab ownership confirmed as Overview**
Reversal of v4.4 decision. Finance in Overview, gated by Admin privileges. Needs updating in Working Doc.

**[ESCALATE] Assistant Instructor grading flow**
"Propose grade" countersign model not yet built but agreed. Different data model from direct-award. Coordinate with `_SHARED/integration/`.

**[ESCALATE] Non-instructor Administrator**
Open question: does a pure business/office admin role exist? Priya Sharma is prototyped as Administrator with no classes — suggests yes. Decision needed before auth model.

**[ESCALATE] Staff — new data entity**
Staff profiles are a new top-level entity not in the Shared Data Model. Pay data requires Admin-only access control. Needs adding to `_SHARED/integration/` spec.

**[ESCALATE] Document compliance — data model**
Per-student document status (4 doc types × all students) needs a storage model. Currently mocked. Legal/GDPR implications for storing consent records.
