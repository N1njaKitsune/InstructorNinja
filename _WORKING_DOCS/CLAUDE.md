# 🥷 NINJA LEARNING — CLAUDE OPERATING FILE
> **Read this at the start of every session before doing anything else.**
> **Then read the Working Doc for current status, decisions, and priorities.**

---

## What This Project Is

Ninja Learning is a production-ready martial arts school management platform for Ninja School, serving students, parents, instructors, and admins through a unified mobile and web app.

- **Target launch:** May 2026
- **Live URL:** http://35.176.192.161 (HTTP — HTTPS not yet configured)
- **Repos:**
  - Main app: https://github.com/N1njaKitsune/Ninja-Learning-App-Demo
  - Mental Dojo: https://github.com/N1njaKitsune/Mental-Dojo
- **Server:** AWS Lightsail, London (eu-west-2), Ubuntu 22.04
- **Project lead:** John Gunn

---

## How This Project Works

This is a single unified project with two active collaborators: **John Gunn** and **You**. Each works with their own Claude instance. The Working Doc is the shared source of truth that keeps both Claudes aligned.

| Role | Who | What |
|------|-----|-------|
| **Planning & Design** | You + your Claude | Fill spec gaps, define values, produce wireframes and instruction packs |
| **Build** | John + his Claude | Takes deliverables, implements live changes in the codebase |
| **Sign-off** | John Gunn | Reviews each Phase, approves before next Phase begins |

**Two repos — one project:**

| Repo | What it is |
|------|-----------|
| `Ninja-Learning-App-Demo` | Stage 1 — The Dojo Portal. Main platform. |
| `Mental-Dojo` | Stage 2 — The Mental Dojo. Built and tested separately, integrated later. |

These are parallel workstreams of the same product. They share the same non-negotiable rules, the same philosophy, and the same Working Doc structure.

---

## The Dual-Claude Sync Protocol

**The Working Doc is the contract between both Claudes.** Any decision made in one session must be recorded in the Working Doc before the session ends. The other Claude picks it up from the doc — not from conversation history.

Rules:
1. **Never act on a value that isn't in the Working Doc.** If it hasn't been written down, it hasn't been decided.
2. **When a decision is made — write it into the Working Doc in that session.** Do not defer.
3. **When a deliverable is completed — mark it COMPLETE in the Deliverables Tracker.**
4. **When a blocker is resolved — update its status in Pending Decisions.**
5. **If you find a conflict between the Working Doc and something said in conversation — flag it. The Working Doc wins.**

---

## Current Phase

**Stage 1 — Phase 1: Foundation Completion**

Schema and infrastructure only. No UI work. The Working Doc v2.0 holds the full task list and status.

**Stage 2 — Mental Dojo:** Active in parallel. Working Doc supplement tracks its own deliverables and decisions separately.

---

## Session Protocol

1. **Read this file first.** Every session.
2. **Read the Working Doc.** Check current status, pending decisions, and deliverables tracker before doing anything.
3. **Work from the Deliverables Tracker.** Top to bottom unless there's a reason not to.
4. **Resolve blockers before building.** If a task is BLOCKED, surface it — don't attempt it.
5. **One deliverable at a time.** Complete and review before starting the next.
6. **Update the Working Doc as you go.** Every decision, every completed deliverable, every resolved blocker — written in before the session ends.
7. **Flag spec conflicts immediately.** If anything conflicts with the non-negotiable rules, stop and raise it before proceeding.
8. **Log improvements, don't build them.** Anything outside the current phase goes to the Improvement Log. Good ideas do not derail launches.

---

## Non-Negotiable Rules — Apply to Both Workstreams

These apply to every deliverable produced. Flag immediately if anything conflicts.

**Core platform rules:**
1. No hard-coded grading logic — all thresholds live in `grading_rules` table
2. No hard deletes — soft delete via `status` flag only, everywhere, always
3. No client-side storage of sensitive data — never persist sensitive records in browser or app
4. No direct Stripe API calls from mobile client — all payment calls through backend only
5. No public student directory — student profiles are never publicly searchable
6. No card data stored — Stripe tokens only
7. No persistent video URLs — signed URLs with expiry windows only
8. Consent before student activation — family account consent must be signed before any student record is activated
9. Grading audit logs are immutable — corrections are additive, never overwrites
10. Safeguarding first — best interests of the child is the primary design principle at every decision
11. Derived values are computed, never stored — age, attendance %, promotion readiness always calculated at query time
12. Role-based access at field level — not just record level
13. No belt awarded without Two-Week Challenge completion
14. No automatic stripe awarding or automatic belt promotion — all grading is instructor-initiated
15. Double confirmation required for grading submission

**Mental Dojo additional rules:**
16. No belt language in the Mental Dojo — belts belong to the physical dojo
17. TEN, REN are physical practice names — never reuse in Mental Dojo
18. Landscape only — no portrait scroll on any Mental Dojo screen
19. All challenge content must be appropriate for 7–9 year olds
20. Mushin practice must never feel passive or boring — always active stillness

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | FastAPI (Python), SQLAlchemy |
| Database | PostgreSQL (`ninja_learning` db) |
| Frontend | React Native (Expo), exported as static web |
| Web Server | Nginx (reverse proxy) |
| Process Manager | systemd (`ninjaapp.service`) |
| Payments | Stripe (not yet integrated) |
| Auth | JWT tokens |
| Hosting | AWS Lightsail |

---

## Reference Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — operating instructions, sync protocol, non-negotiable rules |
| `NinjaLearning_WorkingDoc_v2.0.md` | Stage 1 master working doc — all decisions, schema, deliverables |
| `NinjaLearning_MentalDojo_WorkingDoc_v1.1.md` | Stage 2 supplement — Mental Dojo decisions and deliverables |
| `_COMPANY/Creative-Design-and-Ergonomics/visual-direction.md` | Mental Dojo visual direction — emotional target, atmospheric principles, the five visual layers. Read before any Mental Dojo visual or prototype work. |

---

*Ninja Learning — CLAUDE.md — Updated March 2026*
