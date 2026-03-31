# InstructorNinja — Workflow

## Active Tasks
- [x] Student profile tap-through from Directory — done in v4.2
- [x] Full Student Manager screens (profile, history, notes) — done in v4.2
- [x] Class management screens (enrolled roster + session history in class detail, context-aware student nav) — done in v4.3
- [x] Administration screens (weekly timetable + billing summary) — done in v4.4
- [ ] Grading → Student Profile push spec (coordinate with _SHARED/integration/) — John's task

## Backlog
- [x] Class management screens — done in v4.3
- [ ] Business dashboard data design
- [ ] Administration / scheduling screens
- [ ] Enrolment management flow

## Completed
- [x] Grading flow refinement (v2.0) — shipped in v4.1
- [x] Architecture map (ARCHITECTURE_MAP.md)
- [x] Instructor App v4.0 prototype
- [x] Instructor App UI Spec v1.0

## Working Notes
- v4.4 (2026-03-31): Admin tab (5th nav item) — Schedule view (weekly timetable by day, capacity rings, instructor, tap-through to class detail) + Billing view (collection rate, term target, payment breakdown, alerts)
- v4.3 (2026-03-31): Class detail — enrolled student roster (tier-grouped, tap-through to Student Manager with context-aware back nav), session history section; openSP now context-aware (class vs directory origin)
- v4.2 (2026-03-31): Student Manager full-screen tap-through from Directory — Profile tab (belt, skills, attendance, medical, contacts), History tab (belt progression timeline + grading awards from receipts), Notes tab (timestamped instructor log entries with add-note flow)
- v4.1 (2026-03-30): Register bulk actions, Running Late indicator, grading roster UX fixes, encoding cleanup, PWA block removed from prototype

## How to Push to InstructorNinja Public Repo
> ⚠️ This is done from the master project only.
> Run from master repo root:
> `git subtree push --prefix=instructor origin InstructorNinja`
