# Integration — Cross-Section Data Flows

This folder documents everything that connects the three sections.
When a feature in one section affects another, the spec lives here.

## Core Flows to Document
- [ ] **Grading Pipeline** — Instructor submits grade → Student Profile updated → Parent notified
- [ ] **Session Logging** — Student completes Nendō session → data stored → visible to Instructor
- [ ] **Shared Data Model** — What fields exist on a Student record, who can read/write each
- [ ] **Notification System** — Types, triggers, delivery (push/in-app), parent vs student
- [ ] **Authentication** — How the three user types log in, session management

## Convention
Each integration spec should be its own file:
`grading-pipeline.md`, `notification-system.md`, `shared-data-model.md` etc.
