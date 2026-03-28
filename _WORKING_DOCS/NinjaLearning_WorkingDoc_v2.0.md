# NINJA LEARNING — Project Working Document

**Stage 1 — The Dojo Portal · Version 2.0 · March 2026**

Shared source of truth for both Claude instances

---

## 0. How This Project Works

This is a single unified project with two active collaborators — John and You — each working with their own Claude instance. The Working Doc is the shared source of truth that keeps both Claudes aligned.

| Layer | Who | What |
|-------|-----|------|
| **Planning & Design** | You + your Claude | Fill spec gaps, define values, produce wireframes and instruction packs |
| **Build** | John + his Claude | Takes deliverables, implements live changes in the codebase |
| **Sign-off** | John Gunn | Reviews each Phase, approves before next Phase begins. No exceptions. |

### 0.1 The Dual-Claude Sync Protocol

The Working Doc is the contract between both Claudes. Any decision made in one session must be recorded here before the session ends. The other Claude picks it up from the doc — not from conversation history.

- Never act on a value that is not in this document. If it is not written down, it has not been decided.
- When a decision is made — write it in immediately. Do not defer.
- When a deliverable is completed — mark it COMPLETE in the Deliverables Tracker.
- When a blocker is resolved — update its status in Pending Decisions.
- If a conflict exists between this document and anything said in conversation — flag it. This document wins.

### 0.2 Two Repos — One Project

Both repos are parallel workstreams of the same product. They are built separately and integrated later.

| Repo | What it is |
|------|-----------|
| **Ninja-Learning-App-Demo** | Stage 1 — The Dojo Portal. Main platform. Live on AWS. |
| **Mental-Dojo** | Stage 2 — The Mental Dojo. Built and tested separately, integrated post-launch. |

### 0.3 Infrastructure

| Component | Detail |
|-----------|--------|
| **Live server** | 35.176.192.161 — AWS Lightsail, London (eu-west-2) |
| **SSH** | `ssh -i ~/path-to-key.pem ubuntu@35.176.192.161` |
| **DB access** | `sudo -u postgres psql ninja_learning` |
| **Backend service** | `sudo systemctl status ninjaapp` |
| **Nginx** | `sudo systemctl status nginx` |
| **Backend logs** | `sudo journalctl -u ninjaapp -n 50` |
| **Env file** | `/home/ubuntu/NinjaApp/backend/.env` |

---

## 1. Project Overview

| Field | Value |
|-------|-------|
| **Target launch** | May 2026 |
| **Live URL** | http://35.176.192.161 (HTTP only — HTTPS not yet configured) |
| **Main repo** | https://github.com/N1njaKitsune/Ninja-Learning-App-Demo |
| **Mental Dojo repo** | https://github.com/N1njaKitsune/Mental-Dojo |
| **Server** | AWS Lightsail, London (eu-west-2), Ubuntu 22.04, $7/month |
| **Project Lead** | John Gunn — spec sign-off, Phase gate approvals |
| **Database** | PostgreSQL (ninja_learning) |
| **Backend** | FastAPI (Python) + SQLAlchemy |
| **Frontend** | React Native (Expo), exported as static web |
| **Web Server** | Nginx reverse proxy |
| **Auth** | JWT tokens |
| **Payments** | Stripe (not yet integrated) |

---

## 2. Defined Values & Schema Decisions

All values in this section have been explicitly confirmed and are ready to be handed to John for implementation.

### 2.1 Student — membership_type

| Value | Display Name | Notes |
|-------|-------------|-------|
| **monthly_rolling** | Monthly Rolling | Recurring monthly payment via Stripe |
| **termly** | Termly | Payment per school term |

### 2.2 Student — status

| Value | Display Name | Meaning |
|-------|-------------|---------|
| **active** | Active | Currently enrolled and attending |
| **inactive** | Inactive / Paused | Temporarily not attending — record preserved |
| **archived** | Archived | Has left the school — record retained for audit |
| **challenge_pending** | Challenge Pending | All stripes earned. Two-Week Challenge assigned. Belt withheld until challenge confirmed. |

### 2.3 Belt System — Full 11-Belt Specification

All 11 belts are fully defined. Names, colours, stripe conventions, and tier rules are locked.

Stripe convention: Centre horizontal stripe, full width of belt, ~35% belt height, vertically centred.

| # | Belt Name | Belt Colour | Stripe | Tier |
|---|-----------|-------------|--------|------|
| 1 | **Shiro Belt** | #E8E8E8 — white | None | Shokyu — Beginner |
| 2 | **Kiiro Belt** | #F0C830 — yellow | None | Shokyu — Beginner |
| 3 | **Taiyo Belt** | #E8702A — orange | None | Shokyu — Beginner |
| 4 | **Kazan Belt** | #E8702A — orange | #CC2222 red centre | Shokyu — Beginner |
| 5 | **Honoo Belt** | #C42020 — red | None | Chokyu — Intermediate |
| 6 | **Shin Honoo Belt** | #C42020 — red | #888888 grey centre | Chokyu — Intermediate |
| 7 | **Mori Belt** | #2E7D22 — green | None | Chokyu — Intermediate |
| 8 | **Shin Mori Belt** | #2E7D22 — green | #888888 grey centre | Chokyu — Intermediate |
| 9 | **Kage Belt** | #888888 — grey | None | Jokyu — Advanced |
| 10 | **Shin Kage Belt** | #888888 — grey | #1A1A1A black centre | Jokyu — Advanced |
| 11 | **Mushin Belt** | #1A1A1A — black | #F0F0F0 white centre | Jokyu — Advanced |

### 2.4 Element Stripe System

| Element | Fill (dark) | Stroke (dark) | Fill (light) | Symbol |
|---------|------------|---------------|-------------|--------|
| **Air** | #2A2A3A | #FFFFFF | #F0F0F8 | Two curved wind lines + dot |
| **Earth** | #1A4010 | #5ACD30 | #EAF3DE | Downward triangle + midbar |
| **Water** | #0E2260 | #4488FF | #E6F1FB | Teardrop + wave |
| **Fire** | #6A1A05 | #FF6A20 | #FAECE7 | Abstracted flame |

### 2.5 Grading Tier Stripe Rules

| Tier | Rule |
|------|------|
| **Shokyu** | Full stripes only. One per element in any order. All four required to complete belt. |
| **Chokyu** | Half stripes first, then full. All four first-halves required before any second-half unlocks. Both halves of all four elements required to complete belt. |
| **Jokyu** | Four full Air stripes per belt. Strictly left to right one at a time. |

### 2.6 Two-Week Personal Challenge

Applies to every belt across all tiers without exception. Upon completion of all stripe requirements, student enters challenge_pending state. Parent sets a two-week personal challenge. If completed and confirmed: belt awarded. If not completed: belt withheld until completion.

**Schema requirements:**

- challenge_assigned_date — stored on promotion record
- challenge_description — text, set by parent
- challenge_confirmed — boolean
- challenge_confirmed_by — parent UUID
- Belt award event only created after challenge_confirmed = true

### 2.7 Instructor App — UI Decisions (locked)

All decisions below were confirmed during the March 2026 wireframing sessions and are implemented in NinjaLearning_InstructorApp_v4.0.html.

| Decision | Value |
|----------|-------|
| **Navigation model** | Bottom nav: Home / Classes / Directory / Overview |
| **Theme — live class tools** | Dark (#1A1A2E) — register, grading, grade roster |
| **Theme — management screens** | Light (#F4F4F0) — class list, detail, summary, directory, overview |
| **Class list filters** | By Day / By Class Type / My Classes (Harry's 9 assigned classes only) |
| **Register grouping** | Shokyu / Chokyu / Jokyu, belt order within tier |
| **Register present row** | Deep forest green #0F3306, pale green #D4F0B8 text |
| **Register absent row** | Deep red #3D0A0A, pale pink #FFD0D0 text |
| **Grade roster grouping** | Shokyu / Chokyu / Jokyu, belt order within tier. Present students only. |
| **Grading — stripe staging** | Stripes confirmed to summary. Profiles NOT updated until Award all confirmed. |
| **Session close** | Once Award all stripes confirmed — session closed, cannot be reopened |
| **Grading receipts — class** | Previous grading sessions section on class detail screen |
| **Grading receipts — school** | Grading History tab in Overview (separate from Stats tab) |
| **Instructor** | Harry Bovill, Lead Instructor, 9 classes, 5 days |

### 2.8 Parent App / Family Profile — UI Decisions (locked)

All decisions below were confirmed during the March 2026 Family Profile design session and are implemented in NinjaLearning_ParentApp_v1.3.html.

| Decision | Value |
|----------|-------|
| **Lock screen entry model** | Student tiles (no passcode) direct to Student Profile. Family Account button triggers 4-digit passcode. |
| **Navigation model** | Bottom nav: Home / Attendance / Family / Billing / Shop |
| **Theme — Home hero** | Dark (#1A1A2E) — greeting, student cards, challenge banner |
| **Theme — management screens** | Light (#F7F7FA) — Family, Billing, Shop, scrollable content |
| **Challenge flow** | Home banner (persistent, non-dismissible until set) + Bell notifications + Push notification at trigger |
| **Notifications entry point** | Bell icon top-right of Home header. Gold-tinted when unread. Red badge with count. Slides full-height panel. |
| **Make-up eligibility** | No backend enforcement. Contextual message only. Non-qualifying: neutral explanation, no block. |
| **Make-up allowance framing** | 4 make-up classes included each term — benefit framing, not restriction framing |
| **Make-up pip colour** | Blue (healthy), amber (1 remaining) |
| **Element stripe badges** | Circular SVG badges, 28px. Full / Half (50/50 gradient) / Ghost. Air, Earth, Water, Fire fixed order L-R. |
| **Membership pricing** | 1 class/week: £49.99/month. 2 classes/week: £65.00/month. |
| **Class transfer** | Parent requests. Instructor must confirm. Age-appropriate classes with available space shown only. |
| **Add new student** | Consent notice shown before submission. No student record activated until all guardian consent signed. |
| **Pause membership** | Sets student status = inactive. Place held up to 8 weeks. Instructor notified. |

### 2.9 Membership Pricing

| Tier | Classes/week | Price/month |
|------|-------------|-------------|
| **Standard** | 1 | £49.99 |
| **Plus** | 2 | £65.00 |

---

## 3. Pending Decisions

Items marked URGENT must be resolved before Phase 1 can go live.

| # | Decision Required | Blocks | Owner | Status |
|---|-------------------|--------|-------|--------|
| 1 | Grading reference doc | Phase 1 grading schema | John Gunn | **RESOLVED** |
| 2 | AES-256 key management | Field encryption (Task 6) | John + Legal | **PENDING** |
| 3 | WhatsApp integration model | Comms Phase 2/3 | John Gunn | **PENDING** |
| 4 | JWT secret & DB password rotation | Security Phase 1 go-live | John Gunn | **URGENT** |
| 5 | Field-level RBAC matrix | Role access Phase 2 | Us | **PENDING** |
| 6 | GDPR audit — family consent validity | Phase 4 onboarding | John + Legal | **PHASE 4** |
| 7 | Avatar placeholder for Phase 1 | Avatar component | John Gunn | **PENDING** |
| 8 | XP system values | XP bar on student profile | John Gunn | **PENDING** |
| 9 | Fifth element (Chokyu) | Chokyu stripe UI 5th slot | John Gunn | **PENDING** |
| 10 | Two-Week Challenge — standalone table vs fields | Challenge Pending impl. | Us | **PENDING** |

---

## 4. Phase 1 — Foundation Build Plan

Phase 1 is schema and infrastructure only. No UI work begins until Phase 1 is signed off by John Gunn.

| # | Task | Priority | Status | Deliverable |
|---|------|----------|--------|-------------|
| 1 | Rotate JWT_SECRET and DB password | URGENT | **NOT STARTED** | Step-by-step server instructions |
| 2 | Set up HTTPS via Certbot | Critical | **NOT STARTED** | Step-by-step server instructions |
| 3 | Make GitHub repo accessible for Claude | Critical | **NOT STARTED** | John action — repo settings |
| 4 | Complete Parent schema | Critical | **NOT STARTED** | Schema spec + migration script |
| 5 | Complete Student schema | Critical | **NOT STARTED** | Schema spec + migration script |
| 6 | Add AES-256 encryption for sensitive fields | Critical | **BLOCKED** | Blocked — Pending Decision #2 |
| 7 | Implement soft deletes across all tables | Critical | **NOT STARTED** | Migration script + model updates |
| 8 | Create grading_events table | Critical | **NOT STARTED** | Schema spec + migration — UNBLOCKED |
| 9 | Add half-stripe support to belt_progression | Critical | **NOT STARTED** | Schema update — UNBLOCKED |
| 10 | Add element_category to belt_progression | Critical | **NOT STARTED** | Schema update — UNBLOCKED |
| 11 | Create grading_rules table — all 11 belts | Critical | **NOT STARTED** | Schema spec — UNBLOCKED |
| 12 | Create Two-Week Challenge schema | Critical | **NOT STARTED** | Schema spec + migration |
| 13 | Create parent_notifications table | Critical | **NOT STARTED** | Schema spec + migration |
| 14 | Create makeup_bookings table | Critical | **NOT STARTED** | Schema spec + migration |
| 15 | Create LMS tables — weekly_training + technique_library | High | **NOT STARTED** | Schema spec |
| 16 | Set up automated daily database backups | Critical | **NOT STARTED** | Server setup instructions |
| 17 | Schema review and sign-off — Phase 2 gate | Gate | **NOT STARTED** | John sign-off required |

---

## 5. Non-Negotiable Rules

| # | Rule | Why |
|---|------|-----|
| 1 | No hard-coded grading logic — all thresholds in grading_rules table | Configurable without code changes |
| 2 | No hard deletes — soft delete via status flag only | Audit trail, GDPR, legal retention |
| 3 | No client-side storage of sensitive records | Security and GDPR |
| 4 | No direct Stripe API calls from mobile client | PCI compliance |
| 5 | No public student directory | Safeguarding — child data |
| 6 | No card data stored — Stripe tokens only | PCI compliance |
| 7 | No persistent video URLs — signed URLs only | Access control |
| 8 | Consent signed before student record activated | GDPR — child data |
| 9 | Grading audit logs immutable — corrections additive only | Legal audit trail integrity |
| 10 | Safeguarding first — child best interests at every decision | Child protection |
| 11 | Derived values computed at query time — never stored | Data integrity, no stale values |
| 12 | Role-based access at field level, not just record level | Data minimisation — GDPR |
| 13 | No belt awarded without Two-Week Challenge completion | Core grading philosophy |
| 14 | No automatic stripe awarding or automatic belt promotion | All grading is instructor-initiated |
| 15 | Double confirmation required for grading submission | Error prevention |

---

## 6. Deliverables Tracker

| # | Deliverable | Type | Ph | Status | Notes |
|---|-------------|------|-----|--------|-------|
| 1 | HTTPS / Certbot setup instructions | Server guide | 1 | **TO BUILD** | First deliverable — security prerequisite |
| 2 | JWT + DB password rotation instructions | Server guide | 1 | **TO BUILD** | Security prerequisite |
| 3 | Parent schema spec + migration | Schema + SQL | 1 | **TO BUILD** | Values defined |
| 4 | Student schema spec + migration | Schema + SQL | 1 | **TO BUILD** | Includes challenge_pending |
| 5 | Soft delete migration — all tables | Schema + SQL | 1 | **TO BUILD** | Global rule |
| 6 | grading_events table spec + migration | Schema + SQL | 1 | **TO BUILD** | Immutability rules explicit |
| 7 | belt_progression — half-stripe + element_category | Schema update | 1 | **TO BUILD** | 5th element slot required |
| 8 | grading_rules table — all 11 belts | Schema + SQL | 1 | **TO BUILD** | Unblocked |
| 9 | Two-Week Challenge schema | Schema + SQL | 1 | **TO BUILD** | |
| 10 | parent_notifications table | Schema + SQL | 1 | **TO BUILD** | |
| 11 | makeup_bookings table | Schema + SQL | 1 | **TO BUILD** | |
| 12 | LMS tables spec | Schema spec | 1 | **TO BUILD** | Schema only |
| 13 | Automated backup setup instructions | Server guide | 1 | **TO BUILD** | Before live data |
| 14 | Field encryption implementation guide | Technical guide | 1 | **BLOCKED** | Pending Decision #2 |
| 15 | Student Profile UI Spec v1.0 | UI spec doc | 1 | **COMPLETE** | Delivered prior session |
| 16 | Instructor App UI Spec v1.0 | UI spec doc | 1 | **COMPLETE** | Delivered prior session |
| 17 | Instructor App HTML prototype v4.0 | Interactive HTML | 1 | **COMPLETE** | Delivered prior session |
| 18 | Family Profile UI Spec v1.0 | UI spec doc | 1 | **COMPLETE** | Delivered prior session |
| 19 | Parent App HTML prototype v1.3 | Interactive HTML | 1 | **COMPLETE** | Delivered prior session |

---

## 7. Risks & Watch Items

| Risk | Impact | Mitigation | Status |
|------|--------|-----------|--------|
| HTTPS not configured | CRITICAL | First deliverable for John | **OPEN** |
| JWT secret and DB password are default/weak | CRITICAL | Must be rotated — Pending Decision #4 | **OPEN** |
| AES-256 key management not decided | HIGH | Requires UK GDPR/legal review | **OPEN** |
| Encryption key loss = permanent data loss | SEVERE | Key backup strategy required in implementation | **OPEN** |
| Frontend screens placeholder with no real API connections | HIGH | Full audit required before Phase 2 | **OPEN** |
| May 2026 deadline is tight | HIGH | Strict Phase discipline, no feature creep | **OPEN** |
| App Store review takes 1-2 weeks (Apple) | MEDIUM | Begin Expo build prep in Phase 3 | **OPEN** |
| GDPR compliance requires audit before go-live | HIGH | Built into Phase 4 timeline | **OPEN** |
| Single server — no failover | MEDIUM | Accepted for Stage 1. Review for Stage 2. | **ACCEPTED** |

---

## 8. Improvement Log

Good ideas that belong to a later phase. Logged here so they are not lost and do not derail the current phase.

| Date | Suggestion | Source | Assessment |
|------|-----------|--------|-----------|
| Mar 2026 | Onboarding UX — registration in one session, progress indicators, minimal field count | Planning session | Phase 2 — not in scope for Phase 1 |
| Mar 2026 | Soft background animation for ninja village scene (lanterns swaying, mist drifting) | UI session | Phase 2 — static in Phase 1 |
| Mar 2026 | Avatar customisation screen (Stumble Guys-style character personalisation) | UI session | Phase 2 feature — placeholder in Phase 1 |
| Mar 2026 | Parent app passcode lockout after N failed attempts | Security review | Phase 2 security hardening |
| Mar 2026 | Shop checkout flow with basket and payment | Family Profile session | Phase 2 — shop illustrative only in Phase 1 |

---

## 9. Reference Documents

| Document | Purpose | Status |
|----------|---------|--------|
| Stage 1 — The Dojo Portal: Technical Build Overview | Product specification | Available |
| Stage 1 — Technical Architecture & Data Specification | Technical architecture — takes precedence in conflicts | Available |
| Ninja School Grading System Master Specification | Grading logic reference — all tiers, all belts | Received & incorporated |
| NinjaApp_AWS_Setup_Guide.docx | Server setup reference | Available |
| NinjaLearning_StudentProfile_UISpec_v1.0.docx | Student profile UI specification | Delivered |
| NinjaLearning_InstructorProfile_UISpec_v1.0.docx | Instructor app UI specification | Delivered |
| NinjaLearning_InstructorApp_v4.0.html | Interactive instructor app prototype | Delivered |
| NinjaLearning_FamilyProfile_UISpec_v1.0.docx | Family profile / parent app UI specification | Delivered |
| NinjaLearning_ParentApp_v1.3.html | Interactive parent app prototype | Delivered |
| NinjaLearning_WorkingDoc_v2.0.md | Stage 1 — planning layer source of truth | Active |
| NinjaLearning_MentalDojo_WorkingDoc_v1.1.md | Stage 2 — Mental Dojo planning source of truth | Active |
| CLAUDE.md | Operating instructions — read at start of every session | Active |

---

*Ninja Learning · Working Document v2.0 · March 2026 · Confidential*
