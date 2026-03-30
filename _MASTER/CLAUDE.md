# Ninja Learning Project — Master Context

This is the **master project** for the Ninja Learning App by Ninja School Ltd.
It is the single source of truth and the only workspace with git authority.

## The App
One integrated app with three user-facing sections:
- **Student** — Nendō curriculum (NEN, Metsuke, Tachi, Mushin, Aura, Profile)
- **Parent** — Progress visibility, notifications, family management
- **Instructor** — Class management, grading, administration, business overview

These sections are interconnected. Instructor grading updates Student profiles
and triggers Parent notifications. See `_SHARED/integration/` for data flow specs.

## Project Structure
| Folder | Purpose |
|--------|---------|
| `student/` | Student section — UI, prototypes, assets |
| `parent/` | Parent section — UI, prototypes |
| `instructor/` | Instructor section — UI, prototypes |
| `_SHARED/` | Cross-section: design system, infrastructure, integration specs, archive |
| `_MASTER/` | This folder — master workflow, architecture, status |
| `_REPOS/` | Local clones of public GitHub repos |

## Public Repos (view/test only — pushed from here)
- StudentNinja → https://github.com/N1njaKitsune/StudentNinja
- ParentNinja → https://github.com/N1njaKitsune/ParentNinja
- InstructorNinja → https://github.com/N1njaKitsune/InstructorNinja

## Git Rules
- All commits and pushes originate from this master project only
- Sub-project Cowork sessions never run git commands
- Push to public repos using git subtree (see WORKFLOW.md)
