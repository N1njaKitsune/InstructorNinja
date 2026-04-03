# Ninja Learning Project — Master Workflow

## How This Works

This workflow covers **master-level tasks only** — infrastructure, git operations,
cross-section coordination, and integration work that sub-projects cannot perform.

Section-level work (what's being built, what's next, current priorities) is tracked
in each section's own `WORKFLOW.md`:
- `../student/WORKFLOW.md`
- `../parent/WORKFLOW.md`
- `../instructor/WORKFLOW.md`

Run `SYNC_PROMPT.md` at the start of each MAINFRAME session to pull a consolidated
view from all three sections before beginning work.

---

## Infrastructure Tasks (Master Only)

- [ ] Rename GitHub repo: Mental-Dojo → StudentNinja
- [ ] Create GitHub repo: ParentNinja
- [ ] Create GitHub repo: InstructorNinja (split from Ninja-Learning-App-Demo)
- [ ] Set up git subtree for all three public repos
- [ ] Brief John on restructure
- [ ] Address remaining drift audit items (see `DRIFT_AUDIT_2026-03-31.md` — R1, R2, A1, A3, A5, Y1, Y2, Y5 resolved)

## Git Setup — One-Time Remote Configuration

Run these once in your local master repo to register the three public repos:
```bash
git remote add StudentNinja https://github.com/N1njaKitsune/StudentNinja.git
git remote add ParentNinja https://github.com/N1njaKitsune/ParentNinja.git
git remote add InstructorNinja https://github.com/N1njaKitsune/InstructorNinja.git
```

## Git Push Commands (run from repo root when ready to publish)

```bash
# Push student section to public StudentNinja repo
git subtree push --prefix=student StudentNinja main

# Push parent section to public ParentNinja repo
git subtree push --prefix=parent ParentNinja main

# Push instructor section to public InstructorNinja repo
git subtree push --prefix=instructor InstructorNinja main
```

---

## Cross-Section Coordination

Tasks that require MAINFRAME because they span multiple sections:

- [ ] Grading Pipeline integration spec — DRAFT exists, awaiting John's review (`_SHARED/integration/grading-pipeline.md`)
- [ ] Notification System spec — DRAFT exists, awaiting John's review (`_SHARED/integration/notification-system.md`)
- [ ] Shared Data Model spec — DRAFT exists, awaiting John's review (`_SHARED/integration/shared-data-model.md`)
- [ ] Session Logging spec — draft needed (`_SHARED/integration/`)
- [ ] Authentication spec — draft needed (`_SHARED/integration/`)

---

*Ninja Learning — Master Workflow — April 2026*
