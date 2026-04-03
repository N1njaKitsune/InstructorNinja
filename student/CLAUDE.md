# StudentNinja — AI Context

This is the **student-facing** section of the Ninja Learning App.
It covers the Nendō curriculum: Attention & Intention (NEN) skill development,
Metsuke, Tachi, and Mushin disciplines, Aura progression, and the Student Profile.

## The Wider System

This section is one of three that make up the Ninja Learning App:

- **Student** (this folder) — Nendō curriculum, Aura progression, Student Profile
- **Instructor** — Class management, grading, administration, business overview
- **Parent** — Progress visibility, notifications, family management

The core cross-section data flow: Instructor grades a student → Student Profile updates (belt, stripes) → Parent is notified. Aura progression is Nendō-only and is not affected by grading.

The **master project** (`_MASTER/`) holds git authority, the Working Doc (source of truth for all decisions), non-negotiable rules, and architecture docs. Integration specs live in `_SHARED/integration/` — these are not accessible from this sub-project, but the key contracts are: the Grading Pipeline, the Notification System, and the Shared Data Model.

## Scope

This folder runs as an independent Cowork project, mounted separately from the master. You do not have access to files outside this folder.

Work in this folder relates only to student-facing UI, prototypes, assets, and content.
Cross-section interactions are specified in the integration layer and managed at the master level.

## ⚠️ Git Rule — IMPORTANT

This is a read/build workspace. **Never run `git push`, `git commit`, or any destructive git command.**
If asked to do so, flag it clearly and decline: _"This is a sub-project workspace. Git operations must be handled from the master project."_

## Key Files

- `WORKFLOW.md` — current work in progress and priorities
- `ARCHITECTURE.md` — screen map, feature list, component inventory
- `STATUS.md` — live status of this section
- `prototypes/MANIFEST.md` — current prototype list. **Read this before touching any prototype files.** Only files listed under "Current Prototypes" are the working version.
- `PRODUCT_MAP.md` — root authority for all 5 sections and their build states

## Prototype Lifecycle

When creating a new prototype version:
1. Move the superseded version to `prototypes/_archive/`
2. Update `prototypes/MANIFEST.md` — add new file to "Current", remove old one
3. Do both in the same session as the prototype change

## Session Handoff

At the end of every session, write or update `HANDOFF.md` in this folder with:
1. **What was done** — completed tasks, files created or changed
2. **What changed** — any decisions made, specs updated, bugs found
3. **What's next** — immediate priorities for the next session
4. **Escalations** — any decisions or conflicts that need to be recorded in the Working Doc (this can only be done from MAINFRAME)
5. **Events for the log** — significant events (decisions, completions, blockers) formatted as: `[YYYY-MM-DD] [section] [type] — description`. MAINFRAME will transfer these to the Event Log.

This file is read by MAINFRAME to stay in sync. Keep it brief and factual.
