# Integration Decision Map — All Open Questions

> **Purpose:** Single consolidated view of every integration decision.
> Resolved items show the confirmed answer. Open items still need a decision before John can build.
>
> **Created:** 2026-04-01
> **Last updated:** 2026-04-01 — 15 of 23 resolved, 3 deferred, 2 referred to John, 3 still open
> **Status:** ACTIVE

---

## How to Read This Map

Each question has a **status**, a **source** (where it was raised), and an **impact** rating. Questions are grouped by theme.

**Status key:**
- ✅ **RESOLVED** — Decision made, ready for John to build against
- ⏳ **OPEN** — Still needs a decision
- 🔀 **DEFERRED** — Intentionally pushed to a later phase
- 👉 **JOHN** — Referred to John for his domain expertise

**Impact key:**
- **BLOCKING** — John cannot start the relevant backend work until this is answered
- **SHAPING** — John can start but will need to refactor if the answer changes
- **DETAIL** — Can be resolved during implementation without rework

---

## A. Schema Design Decisions

These determine the shape of the database tables John builds.

| # | Question | Status | Answer | Impact | Source |
|---|----------|--------|--------|--------|--------|
| A1 | Element stripes — JSON column or separate table? | ✅ RESOLVED | **Separate `belt_progression` table.** One row per student per belt level (student_id, belt_id, air, earth, water, fire). Keeps stripe history per belt, cleaner queries, matches grading pipeline spec structure. | BLOCKING | Shared Data Model Q1 |
| A2 | Aura stage — integer on student or separate table? | ✅ RESOLVED | **Integer field on student record.** Aura is a simple linear 1–13 progression — doesn't need table complexity. Can be migrated to a table in Stage 2 if Nendō progression gets complex. | BLOCKING | Shared Data Model Q5 |
| A3 | Soft delete convention — `status` enum or `deleted_at` timestamp? | ⏳ OPEN | — | BLOCKING | Shared Data Model Q3 |
| A4 | Student ↔ Family relationship — many-to-many or one family per student? | ⏳ OPEN | — | BLOCKING | Shared Data Model Q4 |
| A5 | Grading events and grading awards — one table or two? | ✅ RESOLVED | **Two tables.** `grading_events` (session-level: class, instructor, date) + `grading_awards` (per-stripe: student, element, value, FK to event). Matches the real-world flow — one session produces many awards. Cleaner audit trail, simpler per-student and per-session queries. | SHAPING | Grading Pipeline Q1 |
| A6 | Challenge schema — standalone table or fields on student record? | ⏳ OPEN | — | BLOCKING | Grading Pipeline Q2 + Working Doc PD#10 |
| A7 | Fifth element for Chokyu — 5th stripe slot? | ✅ RESOLVED | **Yes — plan for five now.** Add a nullable 5th column to `belt_progression`. Keep badge UI flexible for 4–5 elements. Column stays null until the 5th element is designed and named. Near-zero cost now, avoids retrofitting all three apps in 6–12 months. | SHAPING | Working Doc PD#9 |

---

## B. Authentication & Access Control

These determine how users get in and what they can see.

| # | Question | Status | Answer | Impact | Source |
|---|----------|--------|--------|--------|--------|
| B1 | Field-level RBAC — middleware or application-level? | ✅ RESOLVED | **Application-level.** Each API endpoint/serializer explicitly includes or excludes fields based on user role. Faster to build, easier to debug. With only three roles and a clear access matrix already defined, app-level is sufficient. | BLOCKING | Shared Data Model Q2 + Working Doc PD#5 |
| B2 | JWT secret and DB password rotation | 👉 JOHN | **Flagged for John — URGENT.** Must happen before any live data. Secrets stored in environment variables, not code. John has SSH access. | BLOCKING | Working Doc PD#4 |
| B3 | AES-256 key management | 👉 JOHN | **Referred to John — must-have for Phase 1 launch.** Key management decision and backup strategy needed. May need legal/GDPR input. Cannot be deferred past launch. | BLOCKING | Working Doc PD#2 |
| B4 | Avatar placeholder for Phase 1 | ✅ RESOLVED | **Generic ninja silhouette.** Small ninja character SVG icon. Full avatar design system to be completed before go-live. | DETAIL | Working Doc PD#7 |

---

## C. API & Data Flow Decisions

These determine how the three sections talk to each other through the backend.

| # | Question | Status | Answer | Impact | Source |
|---|----------|--------|--------|--------|--------|
| C1 | Grading corrections — what does the correction record look like? | ✅ RESOLVED | **Supersedes FK.** New `grading_awards` row with `correction_type` enum (e.g. 'revoke', 'amend') and `supersedes_award_id` FK pointing to the original. Original stays untouched. System reads latest non-superseded award as truth. Fully honours rule #9 (immutable audit logs). | SHAPING | Grading Pipeline Q3 |
| C2 | Grading receipt — server-generated or client-generated? | ✅ RESOLVED | **Server-generated.** The POST endpoint returns the receipt as part of the response. One source of truth — receipt always matches what the database recorded. Instructor app just displays what comes back. | SHAPING | Grading Pipeline Q5 |
| C3 | Belt promotion after challenge — automatic or separate call? | ✅ RESOLVED | **Automatic on confirm.** When parent taps "Mark Complete," server sets challenge_confirmed=true AND promotes belt in one transaction. One button, one call, done. No risk of confirmed challenge sitting in limbo. | BLOCKING | Grading Pipeline Q6 |
| C4 | XP system values | 🔀 DEFERRED | **Deferred to post-launch.** XP is motivational/gamification, not core. Belt and stripe progression drives the student journey. John builds XP bar component with placeholder logic; real values defined after launch based on student engagement data. | SHAPING | Working Doc PD#8 |

---

## D. Notification & Delivery Decisions

These determine how information flows to users.

| # | Question | Status | Answer | Impact | Source |
|---|----------|--------|--------|--------|--------|
| D1 | Phase 1 polling — on load or timed? | ✅ RESOLVED | **On screen load only.** Notifications refresh when parent opens Home screen or pulls to refresh. Simplest to build, lowest server load. Real-time added in Phase C. | SHAPING | Notification System Q1 |
| D2 | Notification batching — per session or per stripe? | ✅ RESOLVED | **One per grading session.** Single notification summarising all stripes awarded: "Kai earned 3 new stripes in Tuesday Beginners: Air, Earth, Water." Cleaner feed, less noise. | SHAPING | Notification System Q2 |
| D3 | Multi-guardian notifications — primary or all? | ✅ RESOLVED | **All guardians.** Every guardian in the family receives notifications. Each gets their own row with independent `read_at` tracking. Fairer for shared-parenting situations. | BLOCKING | Notification System Q3 |
| D4 | Notification preferences — per-type or grouped? | ✅ RESOLVED | **Per-type toggles with mandatory exceptions.** Mandatory (always on, no toggle): `challenge_ready`, `belt_awarded`, `payment_failed`, `grading_update`, `transfer_request`, `transfer_outcome`. Optional (toggle, on by default): `attendance_absent`, `attendance_late`, `makeup_booked`, `enrolment_request`. | DETAIL | Notification System Q4 |
| D5 | Push notification service — direct or third-party? | 🔀 DEFERRED | **Deferred to Phase C.** Notification schema works with any delivery method. Decision doesn't affect current build. | SHAPING | Notification System Q5 |
| D6 | Real-time delivery method | 🔀 DEFERRED | **Deferred to Phase C.** Schema is delivery-agnostic. Architecture decision made when Phase C begins. | SHAPING | Grading Pipeline Q4 |

---

## E. Missing Specs (Gaps)

| # | Spec | Status | What It Needs to Cover |
|---|------|--------|----------------------|
| E1 | **Session Logging** | ⏳ OPEN | How Nendō session data is logged → Student Profile updated → Instructor can view session activity. No schema, no API contract, no validation rules yet. |
| E2 | **Authentication** | ⏳ OPEN | JWT token lifecycle, role definitions, parent passcode → auth mapping, session management, field-level RBAC enforcement (now confirmed as app-level), token refresh strategy. |

---

## Resolution Summary

| Status | Count | IDs |
|--------|-------|-----|
| ✅ RESOLVED | 15 | A1, A2, A5, A7, B1, B4, C1, C2, C3, D1, D2, D3, D4 |
| ⏳ OPEN | 3 | A3, A4, A6 |
| 🔀 DEFERRED | 3 | C4, D5, D6 |
| 👉 JOHN | 2 | B2, B3 |
| **Total** | **23** | |

---

*Ninja Learning — Integration Decision Map — Updated 2026-04-01*
