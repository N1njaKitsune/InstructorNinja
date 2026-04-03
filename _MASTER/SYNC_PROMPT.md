# Ninja Learning — MAINFRAME Sync Prompt

> **Use this at the start of any MAINFRAME session.**
> It pulls current status from the three section folders so you're working from live data,
> not from stale master-level summaries.

---

## Instructions

Before starting any work in this session, read the following files in order:

### 0. Event Log (read first — fastest way to see what changed)
- `EVENT_LOG.md`

Scan the last 20 entries. This tells you what happened across all sections since the last MAINFRAME session, without having to parse multiple status files.

### 1. Section Status (read all three)
- `../student/STATUS.md`
- `../instructor/STATUS.md`
- `../parent/STATUS.md`

### 2. Section Workflows (read all three)
- `../student/WORKFLOW.md`
- `../instructor/WORKFLOW.md`
- `../parent/WORKFLOW.md`

### 3. Handoff Notes (read if they exist)
- `../student/HANDOFF.md`
- `../instructor/HANDOFF.md`
- `../parent/HANDOFF.md`

These are written by sub-project sessions when they finish work.
If a HANDOFF.md exists, it contains the most recent changes that may not yet
be reflected in STATUS.md or WORKFLOW.md. Treat handoff notes as the freshest source.

### 3b. Transfer handoff events to the Event Log
If handoff notes contain events that aren't yet in the Event Log, append them now.
This ensures the Event Log stays complete as the canonical record.

### 4. Produce a Consolidated View

After reading all of the above, produce a brief summary covering:

1. **Each section's current stage and focus** (from STATUS.md)
2. **Active blockers** across all sections
3. **Recent completions** flagged in handoff notes
4. **Cross-section dependencies** — anything one section is waiting on from another
5. **Master-level actions** — infrastructure, git, or integration tasks that only MAINFRAME can do

Present this summary to the user before beginning work.

---

## Important

- **Section status files are the source of truth** for what's happening in each section.
  Do not rely on `_MASTER/STATUS.md` or `_MASTER/WORKFLOW.md` for section-level progress —
  those files track master-only infrastructure tasks.
- **Handoff notes are ephemeral.** Once their content has been absorbed into the section's
  STATUS.md and WORKFLOW.md, the handoff note can be cleared.
- **Do not overwrite sub-project files** based on master-level assumptions.
  If something looks wrong, verify with the user before changing it.

---

*Ninja Learning — MAINFRAME Sync Prompt — April 2026*
