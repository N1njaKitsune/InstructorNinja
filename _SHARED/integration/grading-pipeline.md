# Integration Spec — Grading Pipeline

> **Status: DRAFT — PARTIALLY RESOLVED (see Decision Map)**
> This spec was assembled from existing branch documentation on 2026-03-31.
> Key decisions resolved; see "Questions for John — Resolution Status" section below.
> Some decisions deferred to Phase C; remaining open questions pending clarification.

---

## 1. What This Covers

The end-to-end flow from an instructor awarding stripes in the dojo through to the student profile updating and the parent being notified. This is the single most important cross-section data flow in the platform — it touches all three sections.

---

## 2. The Flow

```
INSTRUCTOR SECTION
──────────────────────────────────────────────────────────
1. Instructor opens a class and takes the register
   → Attendance records created (student_id, class_id, status, reported_at)

2. Instructor enters grading mode (present students only)
   → Selects students for grading
   → Awards element stripes per student
   → Stripes staged to summary (profiles NOT updated yet)

3. Instructor enters Call Out Mode
   → Each student's name and awards presented to the class

4. Instructor confirms "Award all stripes"
   → Double confirmation required (non-negotiable rule #15)
   → Session closed — cannot be reopened

                              ↓
                    GRADING EVENT CREATED
                              ↓

STUDENT SECTION
──────────────────────────────────────────────────────────
5. Student profile updated
   → belt_progression record updated with new stripe values
   → If all stripes complete for current belt:
       → Student status changes to "challenge_pending"
       → Two-Week Challenge flow triggers (see step 7)
   → If stripes incomplete: no status change, profile reflects new stripes

6. If student uses Nendō:
   → Student Profile screen reflects updated belt + stripe badges
   → No Aura change from grading (Aura is Nendō-only progression)

                              ↓

PARENT SECTION
──────────────────────────────────────────────────────────
7. Parent notification created
   → Notification type: "grading_update"
   → Body includes: student name, stripe(s) awarded, element name(s), date
   → Appears in notification panel (chronological feed)
   → Bell icon shows unread indicator (gold tint + red count badge)

8. If student entered challenge_pending:
   → Additional notification type: "challenge_ready"
   → Challenge banner becomes visible on Home screen (persistent, non-dismissible)
   → Parent sets a two-week personal challenge (freetext description)
   → Timer begins

9. Parent confirms challenge completion
   → challenge_confirmed = true
   → challenge_confirmed_by = guardian UUID
   → Belt award event created
   → Student status returns to "active" with new belt
   → Notification type: "belt_awarded" sent to parent
   → Instructor notified (notification type: "challenge_confirmed")
```

---

## 3. Data Created at Each Step

### Step 4 — Grading Event (immutable, non-negotiable rule #9)

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| grading_event_id | UUID | Auto-generated | Primary key |
| class_id | UUID | Instructor session | Which class was being graded |
| instructor_id | UUID | Authenticated user | Who performed the grading |
| session_date | date | Auto (server clock) | Date of the grading session |
| created_at | timestamp | Auto | When the record was created |

### Step 4 — Grading Awards (one per stripe per student, immutable)

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| award_id | UUID | Auto-generated | Primary key |
| grading_event_id | UUID | FK → grading_events | Links to the session |
| student_id | UUID | FK → students | Who received the award |
| element | enum | Instructor selection | Air / Earth / Water / Fire |
| stripe_value | decimal | Derived from tier rules | 0.5 (half) or 1 (full) |
| belt_at_time | string | Student's current belt | Snapshot — belt at time of award |

### Step 5 — Belt Progression Update

| Field | Type | Change | Notes |
|-------|------|--------|-------|
| student_id | UUID | — | Student being updated |
| air | decimal | 0→0.5, 0.5→1, or 0→1 | Depends on tier rules |
| earth | decimal | Same as above | |
| water | decimal | Same as above | |
| fire | decimal | Same as above | |

**Stripe update rules (from Working Doc §2.5):**

| Tier | Rule |
|------|------|
| Shokyu (belts 1–4) | Full stripes only. One per element, any order. All four to complete belt. |
| Chokyu (belts 5–8) | Half stripes first, then full. All four halves before any full unlocks. All eight to complete belt. |
| Jokyu (belts 9–11) | Four full Air stripes per belt. Strictly left to right, one at a time. |

### Step 5 — If Belt Complete → Challenge Record

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| challenge_id | UUID | Auto-generated | |
| student_id | UUID | FK → students | |
| challenge_assigned_date | date | Auto (server clock) | When challenge_pending status was set |
| challenge_description | text | Parent (set later) | Null until parent sets it |
| challenge_confirmed | boolean | Default false | Set to true by parent |
| challenge_confirmed_by | UUID | FK → guardians | Null until confirmed |
| challenge_confirmed_at | timestamp | Null until confirmed | |

### Step 7–9 — Notifications

| Field | Type | Notes |
|-------|------|-------|
| notification_id | UUID | Auto-generated |
| guardian_id | UUID | FK → guardians — which parent receives this |
| type | enum | grading_update / challenge_ready / belt_awarded / challenge_confirmed |
| body | text | Human-readable summary |
| student_id | UUID | FK → students — which child this relates to |
| read_at | timestamp (nullable) | Set when parent taps/views — soft read only, never deleted |
| created_at | timestamp | Auto |

---

## 4. Validation Rules

These are derived from the non-negotiable rules in the Working Doc (§5):

1. **No automatic stripe awarding** — all grading is instructor-initiated (rule #14)
2. **Double confirmation required** for grading submission (rule #15)
3. **No belt awarded without Two-Week Challenge completion** (rule #13)
4. **Grading audit logs are immutable** — corrections are additive, never overwrites (rule #9)
5. **No hard deletes** — soft delete via status flag only (rule #2)
6. **Derived values computed, never stored** — age, attendance %, promotion readiness calculated at query time (rule #11)
7. **All grading thresholds live in grading_rules table** — no hard-coded logic (rule #1)

---

## 5. What Each Section Needs to Build

### Instructor Section (sender)

| Item | Status | Notes |
|------|--------|-------|
| Grading UI (roster → grade → summary → call out → confirm) | ✅ Built | v4.1+ prototype complete |
| POST /api/grading-events endpoint | ❌ Not built | Backend — John's scope |
| Grading receipt generation | ✅ Built | Prototype generates receipt; needs API backing |
| Attendance POST endpoint | ❌ Not built | Backend — John's scope |

### Student Section (receiver)

| Item | Status | Notes |
|------|--------|-------|
| Student Profile displays belt + stripe badges | ✅ Built | v4.1 prototype |
| belt_progression table | ❌ Not built | Schema task #9 in Working Doc |
| Status change to challenge_pending | ❌ Not built | Schema task #12 in Working Doc |
| Aura is NOT affected by grading | ✅ Confirmed | Aura is Nendō-only (Working Doc §2, Nendō doc §4) |

### Parent Section (receiver)

| Item | Status | Notes |
|------|--------|-------|
| Notification panel with chronological feed | ✅ Built | v1.3+ prototype |
| Challenge banner (persistent, non-dismissible) | ✅ Built | v1.3+ prototype |
| Challenge set flow (textarea, confirm) | ✅ Built | v1.3+ prototype |
| Challenge mark-complete flow | ✅ Built | v1.3+ prototype |
| parent_notifications table | ❌ Not built | Schema task #13 in Working Doc |
| Push notification delivery | ❌ Not built | Phase C item |

---

## 6. Questions for John — Resolution Status

| # | Question | Status | Resolution |
|---|----------|--------|-----------|
| 1 | Should grading_events and grading_awards be one table or two? | **RESOLVED** | Two tables: grading_events (session-level) + grading_awards (per-stripe). This separates session metadata from individual stripe awards, enabling cleaner queries and audit trails. |
| 2 | Challenge schema — standalone table or fields on student/promotion record? (Pending Decision #10 in Working Doc) | **OPEN** | Skipped — pending further clarification on promotion record design. |
| 3 | How are corrections handled? Additive records — but what does the correction record look like? | **RESOLVED** | Corrections are additive. New grading_awards row with `correction_type` enum (e.g., 'correction', 'appeal', 'override') and `supersedes_award_id` FK pointing to the original award. Original award remains immutable. |
| 4 | Notification delivery — polling, websocket, or push? | **DEFERRED** | Deferred to Phase C. Phase 1 uses on-screen-load fetching (see Notification System spec). |
| 5 | Does the grading POST endpoint return the receipt, or is the receipt generated client-side? | **RESOLVED** | Server generates receipt. POST /api/grading-events returns receipt in response body, client caches and displays it. |
| 6 | Belt promotion after challenge — is this a separate API call or automatic on challenge_confirmed? | **RESOLVED** | Automatic on challenge_confirmed. When parent confirms challenge via API, belt award is triggered server-side; student status updates to active with new belt. No separate promotion endpoint. |

---

*Ninja Learning — Grading Pipeline Integration Spec — DRAFT — 2026-03-31*
