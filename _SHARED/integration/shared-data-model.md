# Integration Spec — Shared Data Model

> **Status: DRAFT — PARTIALLY RESOLVED (see Decision Map)**
> Assembled from existing branch documentation on 2026-03-31.
> Key decisions resolved; see "Questions for John — Resolution Status" section below.
> Remaining open questions deferred pending further clarification.

---

## 1. What This Covers

The core entities that are shared across sections — what fields exist, who can read them, and who can write them. This is the contract that prevents sections from making conflicting assumptions about the data.

---

## 2. Student Record

The Student is the central entity. All three sections touch it.

| Field | Type | Read By | Written By | Notes |
|-------|------|---------|------------|-------|
| student_id | UUID | All | System | Primary key, auto-generated |
| full_name | string | All | Parent (initial), Admin (edit) | |
| dob | date | Instructor, Parent | Parent (initial) | |
| age | integer | All | **Computed, never stored** (rule #11) | Derived from dob at query time |
| belt_id | FK → belts | All | System (on belt award) | Current belt — updated only after Two-Week Challenge confirmed |
| element_stripes | JSON or related table | All | System (on grading confirm) | Current stripe state: air, earth, water, fire values |
| status | enum | All | System | active / inactive / archived / challenge_pending |
| class_schedule | FK → classes | All | Admin, Instructor (transfer) | Which class(es) the student attends |
| membership_type | enum | Parent, Admin | Parent (initial), Admin (edit) | monthly_rolling / termly |
| aura_stage | integer | Student, Parent | System (Nendō progression) | 1–13, updated by Nendō session completions only |
| created_at | timestamp | Admin | System | |
| updated_at | timestamp | Admin | System | |

**Key rules:**
- `age` is always computed from `dob` — never stored (non-negotiable rule #11)
- `belt_id` only changes after `challenge_confirmed = true` — never on stripe award alone
- `status = challenge_pending` is set by the grading pipeline when all stripes are complete
- `aura_stage` is Nendō-only — grading does NOT affect it (Nendō Working Doc §4)

---

## 3. Belt Progression Record

Tracks stripe state per student per belt level.

| Field | Type | Read By | Written By | Notes |
|-------|------|---------|------------|-------|
| progression_id | UUID | All | System | Primary key |
| student_id | FK → students | All | System | |
| belt_id | FK → belts | All | System | Which belt these stripes belong to |
| air | decimal | All | System (grading) | 0 / 0.5 / 1 |
| earth | decimal | All | System (grading) | 0 / 0.5 / 1 |
| water | decimal | All | System (grading) | 0 / 0.5 / 1 |
| fire | decimal | All | System (grading) | 0 / 0.5 / 1 |

**Display states per element:**
- `0` → Ghost badge (outline only)
- `0.5` → Half badge (50/50 gradient fill)
- `1` → Full badge (solid fill)

**Element order is fixed:** Air, Earth, Water, Fire (left to right in all UI).

---

## 4. Family / Guardian Records

| Field | Type | Read By | Written By | Notes |
|-------|------|---------|------------|-------|
| family_id | UUID | Parent, Admin | System | |
| family_name | string | All | Parent | |
| passcode | string (hashed) | None (auth only) | Parent | 4-digit, hashed server-side |
| guardian_id | UUID | Parent, Instructor (contact), Admin | System | |
| name | string | Parent, Instructor | Parent | |
| role | enum | Parent, Admin | Admin | primary / guardian |
| email | string | Parent, Admin | Parent | |
| phone | string | Parent, Instructor | Parent | Emergency contact visible to instructor |
| emergency_contact | string | Instructor, Admin | Parent | |
| notification_pref | JSON | Parent | Parent | Per-type toggle preferences |

---

## 5. Class Record

| Field | Type | Read By | Written By | Notes |
|-------|------|---------|------------|-------|
| class_id | UUID | All | Admin | |
| class_name | string | All | Admin | |
| instructor_id | FK → instructors | All | Admin | |
| schedule | JSON | All | Admin | Day, time, recurrence |
| capacity | integer | Instructor, Admin | Admin | Max 30 per class |
| age_range | string | All | Admin | Used for age-gating in transfers and make-ups |

---

## 6. Access Matrix Summary

| Entity | Student Section | Parent Section | Instructor Section |
|--------|----------------|----------------|--------------------|
| Student profile | Read + Nendō writes (aura) | Read | Read + Grading writes (stripes, belt) |
| Belt progression | Read | Read (badges) | Write (via grading) |
| Challenge record | — | Read + Write (set + confirm) | Read (challenge status) |
| Attendance | — | Write (report) | Read + Write (register) |
| Notifications | — | Read | Read |
| Family / Guardian | — | Read + Write (own family) | Read (contact info only) |
| Class | — | Read | Read + Write (admin functions) |

**Field-level RBAC** (non-negotiable rule #12): Access is at field level, not just record level. The matrix above is record-level — field-level restrictions are noted in the individual field tables. Full RBAC matrix is Pending Decision #5 in the Working Doc.

---

## 7. Derived Values (never stored)

These values appear in UI across multiple sections but must be computed at query time (non-negotiable rule #11):

| Value | Formula | Used In |
|-------|---------|---------|
| Student age | `today - dob` (in years) | Student cards, register, directory, class age-gating |
| Attendance percentage | `present_count / total_scheduled * 100` | Instructor home, class detail, student profile |
| Promotion readiness | All stripes complete for current belt? | Instructor grading flow (eligibility check) |
| Term sessions attended | Count of present records in current term | Parent home hero stats |
| Term stripes earned | Count of grading awards in current term | Parent home hero stats |
| Make-up allowance remaining | `4 - makeup_bookings_count` for current term | Parent make-up tab pips |

---

## 8. Questions for John — Resolution Status

| # | Question | Status | Resolution |
|---|----------|--------|-----------|
| 1 | Element stripes — JSON column on student vs separate belt_progression table? | **RESOLVED** | Separate belt_progression table (per Section 3). This table tracks air/earth/water/fire per student per belt level. |
| 2 | Field-level RBAC — middleware enforcement or application-level? (Pending Decision #5) | **RESOLVED** | Application-level RBAC. Field-level access control enforced at the application layer, not via database middleware. |
| 3 | Soft delete — single `status` enum or separate `deleted_at` timestamp? | **OPEN** | Deferred — pending further clarification. |
| 4 | Student ↔ Family relationship — many-to-many (blended families) or one family per student? | **OPEN** | Deferred — pending further clarification. |
| 5 | Aura stage — integer on student record or separate nendo_progression table? | **RESOLVED** | Integer field on student record (per Section 2, line 31). Nendō progression stored directly on the student record; updated only by Nendō session completions. |

---

*Ninja Learning — Shared Data Model Integration Spec — DRAFT — 2026-03-31*
