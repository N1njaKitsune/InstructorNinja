# Ninja Learning Project — Master Workflow

## How This Works
This master workflow is the bird's-eye view. It is updated by reading
the three section workflows and synthesising the overall picture.

Sub-section workflows live at:
- `../student/WORKFLOW.md`
- `../parent/WORKFLOW.md`
- `../instructor/WORKFLOW.md`

## Current Sprint
_Update this at the start of each working session._

### Student
- [ ] TachiHub v2.0
- [ ] Nendō ↔ Student Profile data flow spec

### Parent
- [ ] Dashboard screen design
- [ ] Notification system design

### Instructor
- [ ] Grading flow v2.0
- [ ] Class management screens

## Infrastructure Tasks (Master Only)
- [ ] Rename GitHub repo: Mental-Dojo → StudentNinja
- [ ] Create GitHub repo: ParentNinja
- [ ] Create GitHub repo: InstructorNinja (split from Ninja-Learning-App-Demo)
- [ ] Set up git subtree for all three public repos
- [ ] Set up three Cowork sub-projects
- [ ] Brief John on restructure

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
