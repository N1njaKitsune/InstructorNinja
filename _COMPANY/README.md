# Ninja Learning — Company Structure

> **This directory defines the permanent organisational structure for Ninja Learning.**
> Departments are permanent. Project phases are temporary.
> Every Claude agent session should read this file and its department README before starting work.

---

## What This Is

Ninja Learning is a martial arts school management platform built for [Ninja School](https://www.ninjaschool.org.uk/) — a developmental MMA & Coordination School in London serving children aged 3–16. The business scope extends beyond the app itself into content, design philosophy, infrastructure, and operational tooling.

This `_COMPANY` directory is the organisational scaffold. It tells each Claude agent which department it belongs to, what tools it has, who it reports to, and how it fits into the wider team. It sits alongside the project — not inside any phase.

---

## Shared Tools

The following skills are available to **every department** and do not need to be listed per-department:

| Skill | Purpose |
|-------|---------|
| `docx` | Create, read, edit Word documents |
| `file-reading` | Read and inspect any file type |
| `pdf` | Create, extract, merge, split PDF files |

These are general-purpose tools. Departments also have their own specialist skills listed in their individual READMEs.

---

## Departments

### Design & Frontend — owned by Hazza (Design Lead)

| Department | Responsibility | Specialist Skills |
|------------|---------------|-------------------|
| **UI & Prototypes** | Screens, wireframes, interactive HTML prototypes | `frontend-design`, `pptx` |
| **Creative Design + Ergonomics** | UX philosophy, age-appropriate design, content systems, skill creation | `skill-creator`, `docx` |

### Backend & Infrastructure — owned by John Gunn (Build Lead)

| Department | Responsibility | Specialist Skills |
|------------|---------------|-------------------|
| **Backend & Deployment** | Schema design, API logic, database migrations, FastAPI | `xlsx`, `pdf` |
| **Infrastructure & Security** | Server setup, HTTPS, credentials, backups, deployment | Domain knowledge only — no skill files |

---

## Future Departments

These will be stood up as the business grows. They are listed here for planning purposes only — no folders or agents exist for them yet.

- **Testing & QA** — automated testing, manual QA, regression tracking
- **Content Production** — challenge content, curriculum materials, media assets
- **Payments & Billing** — Stripe integration, subscription logic, invoicing
- **Compliance & Safeguarding** — GDPR, child protection policy, data handling audits

---

## How This Relates to the Project

```
Ninja App/
├── _COMPANY/                ← You are here. Permanent structure.
│   ├── README.md            ← This file. Company overview.
│   ├── UI-and-Prototypes/
│   ├── Creative-Design-and-Ergonomics/
│   ├── Backend-and-Deployment/
│   └── Infrastructure-and-Security/
│
├── _WORKING_DOCS/           ← Shared source of truth (CLAUDE.md, Working Docs)
├── _REPOS/                  ← Local clones of GitHub repos
├── _ARCHIVE/                ← Superseded document versions
├── Stage-1_Dojo-Portal/     ← Phase work: prototypes, specs, deliverables
└── Stage-2_Mental-Dojo/     ← Phase work: Mental Dojo prototypes and content
```

Departments are permanent. Stage folders are temporary and will evolve as phases complete. The `_WORKING_DOCS/CLAUDE.md` file remains the operational contract for the dual-Claude workflow — this company structure does not replace it, it sits alongside it.

---

## Rules

All non-negotiable rules from `_WORKING_DOCS/CLAUDE.md` apply across every department. The most critical:

1. **Safeguarding first** — best interests of the child is the primary design principle at every decision.
2. **The Working Doc wins** — if anything conflicts with the Working Doc, flag it immediately.
3. **Departments don't skip phases** — good ideas go to the Improvement Log, not into the current sprint.

---

*Ninja Learning — Company Structure — March 2026*
