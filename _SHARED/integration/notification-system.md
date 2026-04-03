# Integration Spec — Notification System

> **Status: DRAFT — PARTIALLY RESOLVED (see Decision Map)**
> Assembled from existing branch documentation on 2026-03-31.
> Key decisions resolved; see "Questions for John — Resolution Status" section below.
> One decision deferred to Phase C; remaining questions pending clarification.

---

## 1. What This Covers

How notifications are created, stored, delivered, and displayed across the platform. Notifications are the primary way that actions in one section (e.g. instructor grading) surface in another section (e.g. parent home screen).

---

## 2. Notification Types

Every notification has a `type` that determines its content template, its icon, and where it can trigger actions.

| Type | Trigger | Recipient | Action Available |
|------|---------|-----------|-----------------|
| `grading_update` | Instructor confirms "Award all stripes" | Parent (all guardians in family) | View — no action required |
| `challenge_ready` | Student enters challenge_pending status | Parent (all guardians) | "Set Challenge" — opens challenge textarea |
| `belt_awarded` | Parent confirms challenge completion → belt awarded | Parent (all guardians) | View — celebratory |
| `challenge_confirmed` | Parent confirms challenge completion | Instructor | View — informational |
| `attendance_absent` | Parent reports student absent | Instructor | View — informational |
| `attendance_late` | Parent reports student running late | Instructor | View — amber indicator in register |
| `consecutive_absence` | System detects N consecutive absences | Instructor | View — alert on home screen |
| `transfer_request` | Parent requests class transfer | Instructor | Approve / Reject action |
| `transfer_outcome` | Instructor approves or rejects transfer | Parent | View — outcome confirmation |
| `enrolment_request` | Parent adds new student | Instructor + Admin | Review + activate action |
| `makeup_booked` | Parent books make-up class | Instructor | View — informational |
| `payment_failed` | Stripe reports failed charge | Parent | View — recovery action (link to billing) |

---

## 3. Notification Schema

| Field | Type | Notes |
|-------|------|-------|
| notification_id | UUID | Primary key |
| recipient_type | enum | `guardian` / `instructor` / `admin` |
| recipient_id | UUID | FK → guardians or instructors |
| type | enum | One of the types listed above |
| body | text | Human-readable summary |
| student_id | UUID (nullable) | FK → students — which child this relates to (null for system notifications) |
| class_id | UUID (nullable) | FK → classes — which class this relates to (null if not class-specific) |
| source_event_id | UUID (nullable) | FK → the event that created this (grading_event_id, attendance_id, etc.) |
| read_at | timestamp (nullable) | Set when recipient views the notification |
| created_at | timestamp | Auto — when the notification was created |

**Rules:**
- Notifications are **never deleted** — soft read via `read_at` only (non-negotiable rule #2)
- `read_at` is set on first view/tap — not on notification panel opening
- Notifications with `read_at = null` are "unread" and drive the badge count + gold tint

---

## 4. Delivery Channels

| Channel | Phase | Notes |
|---------|-------|-------|
| **In-app feed** | Phase 1 | Polling or on-screen-load fetch. Notifications panel in parent app. Alerts panel in instructor app. |
| **Push notification** | Phase C | Device-level push via APNs / FCM. Requires permission flow (parent app H7). |
| **Websocket / real-time** | Phase C | Optional upgrade for live in-app updates without polling. |

For Phase 1, notifications are created server-side and fetched by the client on screen load or pull-to-refresh. No real-time delivery.

---

## 5. Parent-Facing Display (from parent/ARCHITECTURE_MAP.md)

**Notification bell** (Home screen header):
- Gold tint when any notification has `read_at = null`
- Red badge with unread count
- Tap opens full-height right-side panel

**Notification panel:**
- Chronological feed (newest first)
- Filter chips: Challenges / Attendance / Grading / All
- Unread rows: gold background + gold dot
- Inline action buttons where applicable ("Set Challenge" / "Mark Complete")
- Never-delete policy — no swipe-to-dismiss, no archive

**Challenge banner** (Home screen, below student cards):
- Visible when any student has `status = challenge_pending`
- Persistent — non-dismissible except by completing the action
- Contains: student name, "Set a Two-Week Challenge" prompt
- On tap: expands textarea for challenge description
- After setting: shows challenge text + countdown + "Mark Complete" button
- On completion: banner fades out, belt_awarded notification created

---

## 6. Instructor-Facing Display (from instructor/ARCHITECTURE_MAP.md)

**Alerts panel** (Home screen):
- Belt challenges awaiting completion
- Consecutive absence alerts
- Low enrolment warnings
- Tappable — each links to the relevant screen

**Notification feed** (Home screen):
- New student enrolments
- Confirmed challenges (from parents)
- Grading session saved confirmations

**Running Late indicator** (Register screen):
- Amber row tint + badge for students whose parent reported "late"
- Late counter in register stats bar

---

## 7. Notification Body Templates

| Type | Template |
|------|----------|
| `grading_update` | "{student_name} earned {count} new stripe(s) in {class_name} on {date}: {element_list}" |
| `challenge_ready` | "{student_name} has completed all stripes for {belt_name}! Time to set a Two-Week Challenge." |
| `belt_awarded` | "Congratulations! {student_name} has earned their {belt_name}!" |
| `challenge_confirmed` | "{student_name}'s Two-Week Challenge has been confirmed by {guardian_name}." |
| `attendance_absent` | "{student_name} has been marked absent for {class_name} on {date}." |
| `attendance_late` | "{student_name} is running late for {class_name}." |
| `transfer_request` | "{guardian_name} has requested a class transfer for {student_name} from {from_class} to {to_class}." |
| `transfer_outcome` | "{student_name}'s transfer to {to_class} has been {approved/rejected}." |

---

## 8. Questions for John — Resolution Status

| # | Question | Status | Resolution |
|---|----------|--------|-----------|
| 1 | Polling interval for Phase 1 in-app feed — on load only, or timed? | **RESOLVED** | On screen load only for Phase 1. Client fetches notifications when notification panel is opened; no background polling. Upgrade to real-time delivery in Phase C. |
| 2 | Should notifications be batched? (e.g. one "grading_update" per session vs one per stripe) | **RESOLVED** | One notification per grading session. All stripes awarded in a single session generate one "grading_update" notification with a summary list of elements earned, not one per stripe. |
| 3 | Who receives notifications in a multi-guardian family — primary only or all? | **RESOLVED** | All guardians in the family receive notifications. Every guardian_id in the family receives a copy of each notification. |
| 4 | Notification preferences — per-type toggles or coarser grouping? | **RESOLVED** | Per-type toggles with mandatory exceptions. Mandatory (always on): challenge_ready, belt_awarded, payment_failed, grading_update, transfer_request, transfer_outcome. Optional (toggle, on by default): attendance_absent, attendance_late, makeup_booked, enrolment_request. |
| 5 | Push notification service — APNs + FCM directly, or a service like OneSignal? | **DEFERRED** | Deferred to Phase C. Phase 1 uses in-app feed only; push notification infrastructure and provider choice deferred to Phase C planning. |

---

*Ninja Learning — Notification System Integration Spec — DRAFT — 2026-03-31*
