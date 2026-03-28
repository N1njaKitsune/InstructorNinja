# NINJA LEARNING — Project Working Document — Stage 2 Supplement

**The Mental Dojo · Version 1.1 · March 2026**

Shared source of truth for both Claude instances

---

## 1. Mental Dojo — Project Overview

The Mental Dojo is a Stage 2 educational feature within NinjaApp, initially built and tested as a standalone product before being integrated into the main platform. It is the mental training counterpart to the physical dojo — a place where students develop cognitive skills framed within the school's NEN philosophy.

**Relationship to Stage 1:**

- Mental Dojo is built in its own repo (github.com/N1njaKitsune/Mental-Dojo) and developed in parallel with Stage 1.
- It integrates into the main NinjaApp after both sides have reached launch readiness.
- Both Claude instances must stay in sync — this document is the source of truth for all Mental Dojo decisions.

**Core concept:**

- Physical dojo trains the body. Mental Dojo trains the mind. A ninja without both is only half complete.
- Grounded in the school's NEN philosophy — mastery of Attention and Intention.
- Target audience: 7–9 year olds primarily, designed to feel like play not school.
- UI constraint: landscape only — full screen takeover within student profile.
- Must work on both phone landscape and tablet landscape.

---

## 2. Philosophical Foundation — NEN

The Mental Dojo is built on the school's NEN framework. NEN is described to students as the mastery of Attention and Intention — the skill of bending reality into their will. It is the philosophical core of why mental training is not separate from physical training but prerequisite to it.

NEN goes beyond intelligence. What the mind can do, the body can do.

The TRN Energy Navigation system — TEN (containment), REN (refinement), NEN (noticing) — underpins the school's broader methodology. The Mental Dojo draws on this philosophy without reusing its practice names, which belong to the physical training system.

---

## 3. The Three Disciplines

The Mental Dojo is organised around three disciplines. Each represents a genuine cognitive state of mind to practise. All three are required for full mental mastery — none is optional.

### 3.1 Metsuke — The Reading Mind

| Field | Detail |
|-------|--------|
| **Japanese** | 目付 |
| **Meaning** | The ninja's gaze — disciplined perception |
| **Colour** | Blue — cool, perceptive, clear |
| **Cognitive focus** | Perception and comprehension — intake quality |
| **Mantra** | The untrained eye sees. The ninja's eye reads. |

**Child-facing explanation:**

"Before a ninja moves, they read. They look at everything — not just what's obvious, but what's hidden. They notice the detail others walk past. They read the scroll, count the guards, spot the trap. A ninja who misses something important makes a dangerous mistake. Metsuke is training your eyes and mind to see the truth of what is in front of you."

Challenge types: Pattern recognition, spot the difference, comprehension tasks, hidden detail, reading and finding relevant information, memory sequences.

### 3.2 Tachi — The Striking Mind

| Field | Detail |
|-------|--------|
| **Japanese** | 太刀 |
| **Meaning** | The draw and strike — committed action |
| **Colour** | Red — warm, decisive, intense |
| **Cognitive focus** | Strategy and speed — output quality |
| **Mantra** | The untrained mind rushes or freezes. The ninja's mind is always ready. |

**Child-facing explanation:**

"A ninja doesn't just act — they act at the right moment, in the right way. Sometimes that means thinking carefully, planning three moves ahead. Sometimes it means responding in a flash — no time to think, just trust your training. Tachi is both. It is the mind that plans well and strikes true."

Challenge types: Logic puzzles, route-finding, strategy tasks, timed quick-fire responses, decision under pressure, numeracy challenges.

### 3.3 Mushin — The Still Mind

| Field | Detail |
|-------|--------|
| **Japanese** | 無心 |
| **Meaning** | No mind — the state of readiness |
| **Colour** | Green — the bridge, stillness between heat and cool |
| **Cognitive focus** | Focus and regulation — state management |
| **Mantra** | The untrained mind is full of noise. The ninja's mind is full of space. |

**Child-facing explanation:**

"The most powerful ninja secret isn't a technique — it's a state. When your mind is noisy, worried, or rushing, nothing works properly. You can't see clearly. You can't think straight. You can't strike true. Mushin is the practice of clearing all of that. Breathing. Settling. Arriving. Every ninja must learn to find this state. It makes all the others possible."

Challenge types: Breath pacing exercises, focus holds, guided regulation moments, stillness tasks, pre-session rituals.

### 3.4 The Relationship Between the Three

| Dimension | Discipline | Core skill |
|-----------|-----------|------------|
| **Intake** | Metsuke | How well you receive information |
| **Output** | Tachi | How well you act on it |
| **State** | Mushin | How well you manage yourself |

**Student introduction to all three:**

"A ninja's greatest weapon is their mind. But the mind must be trained in three ways. First you must learn to READ — to see clearly and miss nothing. Then you must learn to STRIKE — to think well and act decisively. But beneath both of these is something more important than either. You must learn to BE STILL — because a noisy mind cannot read, and a panicked mind cannot strike. The three are one. This is the Mental Dojo."

---

## 4. Aura Progression System

The Mental Dojo uses an Aura system for progression — not belts, which belong to the physical dojo. The aura is a hybrid system: there is one overall aura influenced by all three disciplines. Each discipline contributes differently to the aura's colour and depth.

Structure: 13 stages across 4 phases plus one singular final stage standing alone.

**The colour story:**

Light becomes warmth, warmth becomes fire, fire becomes mastery — and mastery at its absolute peak becomes something fire cannot explain.

### 4.1 Phase Structure

| Phase | Stages | Colour family | Character |
|-------|--------|--------------|-----------|
| **1 — Kindling** | 1–2 | Warm whites | The aura awakens. Faint, warm, barely there. |
| **2 — Rising** | 3–6 | Golds and ambers | Energy builds. The aura warms and brightens. Most beginners live here. |
| **3 — Burning** | 7–10 | Oranges into deep red | The fire intensifies. Something is being forged. |
| **4 — Forging** | 11–12 | Crimson bleeding to violet-red | The aura begins to transform. A hint of what lies beyond. |
| **13 — Alone** | 13 | Deep dark violet | Beyond fire. Singular. Currently unnamed. |

### 4.2 The 13 Stages — Full Specification

| # | Name | Phase | Meaning | Hex |
|---|------|-------|---------|-----|
| 1 | **Tomoshibi** | Kindling | A single small flame — the first flicker of awareness | #FAF6EE |
| 2 | **Hikari** | Kindling | Warm light — the aura becomes visible for the first time | #F5EDD0 |
| 3 | **Kogane** | Rising | Gold — energy builds, the aura warms and brightens | #F0D060 |
| 4 | **Kohaku** | Rising | Amber — the gold deepens, intention strengthens | #E8B830 |
| 5 | **Kagayaki** | Rising | Radiance — the aura is visible at a distance | #D89018 |
| 6 | **Moeru** | Rising | Smouldering — heat building toward combustion | #C86C08 |
| 7 | **Akane** | Burning | Red-orange — fire finding its true form | #C05020 |
| 8 | **Honoo** | Burning | Full flame — total combustion, nothing held back | #A83018 |
| 9 | **Homura** | Burning | Blaze — the fire at its most intense | #8A1A10 |
| 10 | **Shinku** | Burning | Deep crimson — fire condensing into mastery | #6A0808 |
| 11 | **Kurenai** | Forging | Ancient crimson bleeding toward violet — power transforming | #4A0A28 |
| 12 | **Tasogare** | Forging | Twilight — the moment between fire and something beyond | #2A0535 |
| 13 | **— (unnamed)** | Alone | Beyond the system. Those who reach it do not need a name. | #1A0535 |

### 4.3 The Hybrid Mechanic

The overall aura is influenced by all three disciplines. In Phase 1 and 2 the aura follows the standard progression for all students. From Phase 3 onwards, the student's balance of Metsuke, Tachi and Mushin begins to subtly shift the aura's hue:

- Strong Metsuke — pulls the aura toward cooler, bluer tones.
- Strong Tachi — carries more red-warmth through the burning phase.
- Strong Mushin — shifts the aura toward deeper, greener mid-tones.

By Stage 12 the paths converge — the aura is deep enough that individual colour differences begin to dissolve. Stage 13 is the same for every student. The disciplines have been fully integrated.

---

## 5. Pending Decisions

| # | Decision required | Blocks | Owner | Status |
|---|-------------------|--------|-------|--------|
| 1 | Stage 13 — named or deliberately unnamed? | Aura system finalisation | John Gunn | **PENDING** |
| 2 | Japanese kanji accuracy review — Metsuke, Tachi, Mushin | UI build, all discipline screens | John Gunn | **PENDING** |
| 3 | Five progress stages within each discipline — names and unlock criteria | Progress system build | Us | **PENDING** |
| 4 | Hybrid aura formula — exact weighting of each discipline | Aura display logic | Us | **PENDING** |
| 5 | XP or points system — how challenges earn aura progression | Challenge build | Us | **PENDING** |
| 6 | Content volume — minimum challenge bank before launch | Content production | John Gunn | **PENDING** |
| 7 | Avatar placeholder — how aura colour displays on student profile | Profile integration | Us | **PENDING** |

---

## 6. Deliverables Tracker

| # | Deliverable | Type | Ph | Status | Notes |
|---|-------------|------|-----|--------|-------|
| 1 | Mental Dojo home screen — landscape prototype | Interactive HTML | 2 | **COMPLETE** | Delivered prior session |
| 2 | Aura progression system — visual reference | Interactive HTML | 2 | **COMPLETE** | Delivered prior session |
| 3 | Mental Dojo UI Spec v1.0 | UI spec doc | 2 | **TO BUILD** | Next deliverable |
| 4 | Metsuke challenge set — v1 content bank | Content + HTML | 2 | **TO BUILD** | |
| 5 | Tachi challenge set — v1 content bank | Content + HTML | 2 | **TO BUILD** | |
| 6 | Mushin practice set — v1 content bank | Content + HTML | 2 | **TO BUILD** | |
| 7 | Aura display component — student profile integration spec | UI spec | 2 | **TO BUILD** | Pending decision #7 |
| 8 | Progress stage system — names, unlock criteria, schema spec | Schema + spec | 2 | **TO BUILD** | Pending decision #3 |

---

## 7. Non-Negotiable Rules — Mental Dojo

| # | Rule | Why |
|---|------|-----|
| 1 | No belt language in the Mental Dojo — belts belong to the physical dojo | Maintains clear distinction between physical and mental training |
| 2 | TEN, REN are physical practice names — never reuse in Mental Dojo | Avoids collision with the school's existing TRN framework |
| 3 | Landscape only — no portrait scroll on any Mental Dojo screen | UI constraint locked — full screen takeover within student profile |
| 4 | Mushin (the discipline) and Stage 13 must remain named distinctly | Prevents naming collision in the system |
| 5 | All challenge content must be appropriate for 7–9 year olds | Primary target audience — safeguarding and age appropriateness |
| 6 | Mushin practice must never feel passive or boring — always active stillness | 7–9 year olds need active framing even for mindfulness content |

---

*Ninja Learning · Mental Dojo Working Document v1.1 · March 2026 · Confidential*
