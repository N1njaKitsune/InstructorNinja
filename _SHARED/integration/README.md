# Integration — Cross-Section Data Flows

This folder documents everything that connects the three sections.
When a feature in one section affects another, the spec lives here.

> **IMPORTANT: All specs in this folder are DRAFT — UNCONFIRMED.**
> They were assembled from existing branch documentation on 2026-03-31
> and have not yet been reviewed or signed off by John Gunn.
> Do not implement against any spec until it has been confirmed.
> Each spec contains open questions that need resolving before build.

## Core Flows

- [x] **Grading Pipeline** — `grading-pipeline.md` — DRAFT
  Instructor submits grade → Student Profile updated → Parent notified
- [x] **Notification System** — `notification-system.md` — DRAFT
  Types, triggers, delivery channels, display per section
- [x] **Shared Data Model** — `shared-data-model.md` — DRAFT
  Core entities, field ownership, access matrix, derived values
- [ ] **Session Logging** — Student completes Nendō session → data stored → visible to Instructor
- [ ] **Authentication** — How the three user types log in, session management

## Convention

Each integration spec is its own file. All specs follow the same structure:
1. What it covers
2. The flow (step by step)
3. Data created at each step
4. Validation rules
5. What each section needs to build
6. Open questions for John

## Review Process

When John reviews a spec:
1. Resolve all open questions
2. Remove the UNCONFIRMED banner
3. Update this README (change DRAFT → CONFIRMED)
4. Record the decision in the Working Doc
