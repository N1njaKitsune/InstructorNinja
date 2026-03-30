# Ninja Learning Project — Master Architecture

## Vision
One integrated app serving three user types within the Ninja School ecosystem.
Launched as three separate interfaces, converging into a unified platform at go-live.

## The Three Sections
- **Student** → Nendō (NEN curriculum, Aura progression, Student Profile)
- **Parent** → ParentNinja (progress view, notifications, family management)
- **Instructor** → InstructorNinja (class management, grading, business overview)

## Cross-Section Data Flows
```
Instructor grades student
    → Student Profile updated (belt level, Aura stage)
    → Parent notified (grading summary, milestone alerts)

Student completes Nendō session
    → Session data logged to Student Profile
    → Instructor can view session activity

Parent views dashboard
    → Reads Student Profile data (read-only)
    → Receives push notifications from grading events
```
Full integration specs → `_SHARED/integration/`

## Tech Stack
_To be confirmed with John — see `_SHARED/infrastructure/`_

## Repo Structure
- Private master: `Ninja-Learning-Project` (local + GitHub, you + John)
- Public student: `StudentNinja` (pushed via git subtree from `student/`)
- Public parent: `ParentNinja` (pushed via git subtree from `parent/`)
- Public instructor: `InstructorNinja` (pushed via git subtree from `instructor/`)

## Go-Live Integration Strategy
Three interfaces are designed to converge. Shared data model and API contracts
(maintained in `_SHARED/integration/`) ensure the sections can be unified
without redesign when the time comes.
