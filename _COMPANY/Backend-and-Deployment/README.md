# Backend & Deployment

> **Department type:** Active
> **Owner:** John Gunn (Build Lead)
> **Division:** Backend & Infrastructure

---

## Purpose

This department is responsible for everything that runs on the server: database schema, API endpoints, business logic, database migrations, and the FastAPI application layer. It takes deliverables from the design departments and turns them into working, deployed code.

---

## Specialist Skills

These are available to this department in addition to the shared tools (`docx`, `file-reading`, `pdf`):

| Skill | Purpose |
|-------|---------|
| `xlsx` | Schema planning spreadsheets, data mapping tables, migration tracking |
| `pdf` | Schema deliverable packs, API documentation, handoff documents |

---

## Scope

**In scope:**
- PostgreSQL schema design and migrations (`ninja_learning` database)
- FastAPI endpoint implementation
- SQLAlchemy models and query logic
- Business logic (grading rules, attendance, enrolment, consent flows)
- API documentation
- Schema deliverable packs for handoff

**Out of scope:**
- UI design or prototyping (→ UI & Prototypes)
- UX philosophy or content design (→ Creative Design + Ergonomics)
- Server setup, HTTPS, or deployment mechanics (→ Infrastructure & Security)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | FastAPI (Python) |
| ORM | SQLAlchemy |
| Database | PostgreSQL |
| Auth | JWT tokens |
| Payments | Stripe (not yet integrated — backend-only calls, never from client) |

---

## Non-Negotiable Rules (Backend-Specific)

These are drawn from `_WORKING_DOCS/CLAUDE.md` and are especially relevant to this department:

1. No hard-coded grading logic — all thresholds live in `grading_rules` table
2. No hard deletes — soft delete via `status` flag only, everywhere, always
3. No direct Stripe API calls from mobile client — all payment calls through backend only
4. No card data stored — Stripe tokens only
5. No persistent video URLs — signed URLs with expiry windows only
6. Consent before student activation — family consent must be signed first
7. Grading audit logs are immutable — corrections are additive, never overwrites
8. Derived values are computed, never stored — age, attendance %, promotion readiness calculated at query time
9. Role-based access at field level — not just record level
10. No belt awarded without Two-Week Challenge completion
11. No automatic belt promotion — all grading is instructor-initiated
12. Double confirmation required for grading submission

---

## Key Outputs

| Output | Location |
|--------|----------|
| Schema deliverables | `Stage-1_Dojo-Portal/Schema-Deliverables/` |
| Server guides | `Stage-1_Dojo-Portal/Server-Guides/` |
| Working codebase | `_REPOS/Ninja-Learning-App-Demo/` and `_REPOS/Mental-Dojo/` |

---

## Sub-Agents (Planned)

- **Schema Architect** — generates and validates schema changes against the Working Doc
- **Migration Runner** — produces and verifies Alembic migration scripts

These do not exist yet.

---

## Reporting

This department reports to the Build Lead (John Gunn). All schema decisions and API changes must be recorded in the Working Doc before the session ends, per the dual-Claude sync protocol.

---

*Backend & Deployment — Department README — March 2026*
