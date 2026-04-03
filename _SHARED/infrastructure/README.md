# Infrastructure & Security

> **Department type:** Active
> **Owner:** John Gunn (Build Lead)
> **Division:** Backend & Infrastructure

---

## Purpose

This department is responsible for the physical and network infrastructure that keeps the platform running: server provisioning, HTTPS configuration, credential management, backups, deployment pipelines, and security hardening.

This is a domain-knowledge department. It operates on expertise and procedures rather than skill files.

---

## Specialist Skills

**None.** This department relies on domain knowledge rather than skill files. It has access to the shared tools (`docx`, `file-reading`, `pdf`) for documentation purposes.

---

## Scope

**In scope:**
- AWS Lightsail server provisioning and maintenance
- Nginx reverse proxy configuration
- HTTPS/TLS certificate setup and renewal
- systemd service management (`ninjaapp.service`)
- SSH key management and credential rotation
- Database backup strategy and execution
- GitHub Actions deployment pipelines (`.github/workflows/deploy.yml`)
- Security hardening (firewall rules, access controls, rate limiting)
- Monitoring and uptime

**Out of scope:**
- Application code or API logic (→ Backend & Deployment)
- UI or design work (→ UI & Prototypes / Creative Design + Ergonomics)

---

## Current Infrastructure

| Component | Detail |
|-----------|--------|
| Server | AWS Lightsail, London (eu-west-2), Ubuntu 22.04 |
| Live URL | `http://35.176.192.161` (HTTP — HTTPS not yet configured) |
| Web server | Nginx (reverse proxy) |
| Process manager | systemd (`ninjaapp.service`) |
| CI/CD | GitHub Actions → deploy workflow |
| Repos | `github.com/N1njaKitsune/Ninja-Learning-App-Demo`, `github.com/N1njaKitsune/Nendo` |

---

## Non-Negotiable Rules (Infrastructure-Specific)

1. No client-side storage of sensitive data — never persist sensitive records in browser or app
2. No public student directory — student profiles are never publicly searchable
3. No card data stored — Stripe tokens only
4. No persistent video URLs — signed URLs with expiry windows only
5. Safeguarding first — infrastructure decisions must protect child data above all else

---

## Key Outputs

| Output | Location |
|--------|----------|
| Server guides | `_SHARED/infrastructure/` |
| Deployment configs | `_REPOS/Ninja-Learning-App-Demo/.github/workflows/` |

---

## Sub-Agents (Planned)

- **Deploy Monitor** — checks deployment status and flags failures
- **Security Auditor** — reviews configurations against hardening checklist

These do not exist yet.

---

## Reporting

This department reports to the Build Lead (John Gunn). All infrastructure changes and security decisions must be recorded in the Working Doc before the session ends.

---

*Infrastructure & Security — Department README — March 2026*
