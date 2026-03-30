# InstructorNinja — Architecture

## Overview
The instructor section is the internal tool for Ninja School Ltd staff.
It enables class management, student grading, administration, and provides
a full business overview. Grading actions here trigger updates in student profiles
and parent notifications.

## Sections
- **Class Overview** — Live class view, student list, session management
- **Grading** — Belt assessment, skill grading, progression sign-off
- **Student Manager** — Individual student profiles, history, notes
- **Administration** — Scheduling, enrolments, billing overview
- **Business Dashboard** — Attendance, retention, revenue overview

## Key Prototype Files
| File | Description |
|------|-------------|
| NinjaLearning_InstructorApp_v4.0.html | Stage-1 instructor app (most advanced) |
| NinjaLearning_Instructor.html | Demo repo version |

## Cross-Section Connections
- Instructor submits grade → Student Profile updated → Parent notified
- Class data → feeds business dashboard metrics
- See `../_SHARED/integration/` for data flow specs
