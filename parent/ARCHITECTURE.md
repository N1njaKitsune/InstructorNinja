# ParentNinja — Architecture

> **The full screen-by-screen inventory is in `ARCHITECTURE_MAP.md`.**
> This file provides a high-level summary. For build status, gap analysis, and component detail, always refer to ARCHITECTURE_MAP.md.

## Overview
The parent section gives parents visibility into their child's progress,
receives notifications from instructor grading events, and manages family profile settings.

## Screens
- **Lock Screen** — Family authentication gate (student tiles or 4-digit passcode)
- **Home** — Family overview: student cards, challenge banner, notifications panel
- **Attendance** — Report attendance, book make-up classes, view history
- **Family Account** — Manage students, guardians, consent documents, class transfers
- **Billing** — Membership costs, payment method, payment history
- **Shop** — Browse merchandise, camps, learning materials
- **Student Profile** — Individual student progress, belt history, session log, instructor notes
- **Settings** — ❌ Not yet built

## Key Prototype Files
| File | Description | Version |
|------|-------------|---------|
| NinjaLearning_ParentApp_v1.5.html | Current prototype — Phase B partial | Latest |
| NinjaLearning_ParentApp_v1.4.html | Phase A foundation (empty/error/loading states, lockout) | Superseded |
| NinjaLearning_ParentApp_v1.3.html | Original Stage-1 parent app prototype | Superseded |
| NinjaLearning_Parent.html | Demo repo version | Demo |

## Cross-Section Connections
- Instructor grades student → parent receives notification
- Student Profile data → surfaces in parent progress view and student cards
- See `../_SHARED/integration/` for data flow specs
