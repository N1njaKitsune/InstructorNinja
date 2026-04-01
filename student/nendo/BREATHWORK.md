# Nendō — Breathwork Reference

**Last updated:** 2026-04-01
**Version:** 2.0
**Location:** `student/nendo/BREATHWORK.md` (canonical)
**Discipline:** Mushin — The Still Mind
**Parent:** `../nendo/ARCHITECTURE.md`

---

## Overview

All breathwork in the Nendō belongs to the **Mushin** discipline (無心 — The Still Mind). Breathing is framed as **active state management**: the ninja skill of choosing how to feel rather than being ruled by how you feel.

The library is structured as **4 elements × 4 technique families × 3 levels = 48 technique variants**. Each element contains four families ordered from Beginner to Expert. Each family contains three levels of increasing demand. Students progress through levels within a family via XP, and unlock the next family tier through a combination of XP and Aura stage.

The student never sees 48 options. They see their current technique and the next level just ahead.

---

## Pattern Notation

**Standard:** `Inhale – Hold – Exhale – Rest` (all values in seconds)
A value of `0` means that phase is skipped entirely.

**Segmented (v2.0):** `N×S` in any phase position = N discrete segments of S seconds each.
> `4×2 – 0 – 8 – 0` = four 2-second inhale steps (8s total), then one smooth 8-second exhale.

Segmented phases animate as discrete pulses — the circle steps up or down — rather than smooth continuous movement. See **Implementation Notes**.

---

## Master Grid

| Element | Tier | Ninja Name | Kanji | Family | Level 1 | Level 2 | Level 3 |
|---------|------|-----------|-------|--------|---------|---------|---------|
| 🌬️ Kaze | Beginner | Kaze no Iki | 風息 | Equal Breath | `3-0-3-0` | `4-0-4-0` | `5-0-5-0` ★ |
| 🌬️ Kaze | Intermediate | Shizen | 然 | Extended Exhale | `4-0-6-0` | `4-2-6-0` | `4-0-8-0` |
| 🌬️ Kaze | Advanced | Senri | 千里 | Long Wave | `5-0-8-0` | `7-0-11-0` | `8-0-13-0` |
| 🌬️ Kaze | Expert | Orochi | 大蛇 | Segmented Exhale | `5-0-3×1-0` | `6-0-4×2-0` | `8-0-5×2-0` |
| 🌍 Chi | Beginner | Tanden | 中 | Box Breath | `3-3-3-3` | `4-4-4-4` | `5-5-5-5` |
| 🌍 Chi | Intermediate | Daichi | 大地 | Extended Box | `5-3-5-3` | `6-4-6-4` | `7-5-7-5` |
| 🌍 Chi | Advanced | Noboru | 昇 | Staircase Inhale | `3×1-0-5-0` | `4×2-0-8-0` | `5×2-0-10-0` |
| 🌍 Chi | Expert | Hashigo | 梯子 | Dual Staircase | `3×1-0-3×1-0` | `4×2-0-4×2-0` | `5×2-0-5×2-0` |
| 🌊 Mizu | Beginner | Mizu | 水 | Deep Equal | `5-0-5-0` ★ | `6-0-6-0` | `7-0-7-0` |
| 🌊 Mizu | Intermediate | Tsuki | 月 | Hold & Release | `4-4-6-0` | `4-7-8-0` | `5-7-9-0` |
| 🌊 Mizu | Advanced | Nami | 波 | Wave Breath | `5-0-7-2` | `6-0-8-3` | `7-0-9-4` |
| 🌊 Mizu | Expert | Shizumi | 沈み | Exhale Hold | `4-0-6-4` | `5-0-7-5` | `6-0-8-6` |
| 🔥 Hi | Beginner | Hi no Iki | 火息 | Activation Breath | `2-0-3-0` | `2-0-4-0` | `2-0-6-0` |
| 🔥 Hi | Intermediate | Kazan | 火山 | Power Breath | `2-0-2-2` | `2-0-2-0` | `2-2-2-0` |
| 🔥 Hi | Advanced | Taka no Iki | 鷹の息 | Hawk's Breath | `3×1-0-6-0` | `4×1-0-8-0` | `5×1-0-10-0` |
| 🔥 Hi | Expert | Ryuhi | 龍火 | Dragon Fire | `2-2-4-0` | `2-4-4-0` | `2-6-4-0` |

★ **The Bridge** — Kaze no Iki Level 3 (`5-0-5-0`) and Mizu Level 1 (`5-0-5-0`) share the same pattern. Mastering Kaze Beginner unlocks Mizu Beginner automatically. This is intentional — the same breath, reframed from Wind (fast accessible calm) to Water (slow deliberate depth).

---

## 🌬️ KAZE — Wind — Calming · Releasing

*Kaze techniques prioritise flow and release. Inhale is never the challenge — the exhale carries the work. All four families are continuous (no segmented inhale) except the expert Orochi which segments the exhale.*

---

### K1 · Kaze no Iki · 風息 · Equal Breath · Beginner

| | |
|---|---|
| **Kanji** | 風息 |
| **Common name** | Equal / Rhythmic Breath |
| **Quality** | Immediately Calming |
| **Cue** | *"Steady as wind through tall grass."* |
| **Level 1** | `3-0-3-0` — 6s cycle · 10 breaths/min |
| **Level 2** | `4-0-4-0` — 8s cycle · 7.5 breaths/min |
| **Level 3** | `5-0-5-0` — 10s cycle · 6 breaths/min · **bridge to Mizu** |

The simplest technique in the library and the correct entry point for any student. Equal breathing with no holds creates an immediately predictable rhythm that is accessible even when the student is agitated or distracted. The symmetry of in/out activates the parasympathetic nervous system without requiring sustained breath control. Level 3 lands at the optimal HRV coherence rate — the student has unknowingly arrived at the scientific sweet spot.

**Appears in Shiho:** Scattered (position 1), Tired (position 2)
**Element runner:** K1 is position 1 of the Kaze runner

---

### K2 · Shizen · 然 · Extended Exhale · Intermediate

| | |
|---|---|
| **Kanji** | 然 |
| **Common name** | Extended Exhale |
| **Quality** | Deeply Calming · Releasing |
| **Cue** | *"Let the breath slide out long and slow."* |
| **Level 1** | `4-0-6-0` — gentle 1:1.5 ratio, no hold |
| **Level 2** | `4-2-6-0` — 2s hold added · vagal amplification |
| **Level 3** | `4-0-8-0` — longest exhale, 1:2 ratio · maximum release |

The extended exhale is the body's most direct physiological off-switch. A longer exhale than inhale increases vagal tone and signals safety to the nervous system. Level 1 introduces the ratio gently with no hold. Level 2 adds the hold (Shizen's original form). Level 3 removes the hold but extends the exhale to a 1:2 ratio — the most clinically validated anti-anxiety breath length. The progression teaches the student that the exhale is where regulation lives.

**Appears in Shiho:** Scattered (position 2), Clouded (position 2), Turbulent (position 2)
**Element runner:** K2 is position 2 of the Kaze runner

---

### K3 · Senri · 千里 · Long Wave · Advanced

| | |
|---|---|
| **Kanji** | 千里 |
| **Common name** | Thousand-Mile / Long Wave Breath |
| **Quality** | Deeply Therapeutic · Flowing |
| **Cue** | *"Far and unhurried. The path is long. The breath is longer."* |
| **Level 1** | `5-0-8-0` — asymmetric 1:1.6 ratio · gentle entry |
| **Level 2** | `7-0-11-0` — classic 7-11 breathing (NHS clinical standard) |
| **Level 3** | `8-0-13-0` — near 1:1.6 at maximum duration · ~3.2 breaths/min |

Built on the clinically established 7-11 breathing technique, widely used in NHS settings for anxiety management. The key quality of Senri is the very long sustained exhale with no hold to interrupt the release — nothing gets in the way. At Level 2, the student breathes fewer than 4 times per minute. The counting element (7 then 11) also occupies the thinking mind, preventing anxious drift. "Senri" means a thousand miles: the suggestion of a journey so long that only the very patient and very present traveller completes it.

**Source:** Human Givens Institute 7-11 breathing; NHS clinical breathwork protocols; extended exhale vagal research.

**Appears in Shiho:** Clear (position 1 or 3), Clouded (position 3), Turbulent (position 3)
**Element runner:** K3 is position 3 of the Kaze runner

---

### K4 · Orochi · 大蛇 · Segmented Exhale · Expert

| | |
|---|---|
| **Kanji** | 大蛇 |
| **Common name** | Serpent Breath |
| **Quality** | Controlled Releasing · Mastery |
| **Cue** | *"Fill up completely. Then let go in careful steps."* |
| **Level 1** | `5-0-3×1-0` — 3 one-second exhale steps · gentle introduction |
| **Level 2** | `6-0-4×2-0` — 4 two-second steps · full Orochi |
| **Level 3** | `8-0-5×2-0` — longer inhale, 5 exhale steps · maximum control |

The interrupted exhale — Viloma Pranayama Stage 2. Where Noboru (Chi) fragments the inhale to build focus, Orochi fragments the exhale to develop voluntary breath mastery. The urge to exhale fully and freely is strong; interrupting it is an advanced act of will. Each step extends the parasympathetic response in discrete increments. By the final step the release is deeper than any single continuous exhale produces. Named for the Yamata no Orochi — the great serpent of Japanese legend — not for menace but for its quality of patient, coiling, deliberate power.

**Animation:** Circle expands smoothly, then contracts in N discrete stepped pulses.

**Appears in Shiho:** Scattered (advanced position 3 close), Clear (precision practice)
**Element runner:** K4 is the expert extension of the Kaze runner

---

## 🌍 CHI — Earth — Grounding · Structural

*Chi techniques prioritise structure and deliberate effort. Every family has explicit phases — nothing flows loosely. The progression moves from equal four-phase control (Tanden) through heavier extended holds (Daichi) to voluntary segmentation of the inhale (Noboru) to segmenting both phases simultaneously (Hashigo).*

---

### C1 · Tanden · 中 · Box Breath · Beginner

| | |
|---|---|
| **Kanji** | 中 |
| **Common name** | Box Breathing |
| **Quality** | Grounding · Centering |
| **Cue** | *"Equal in all directions. The foundation."* |
| **Level 1** | `3-3-3-3` — 12s cycle · accessible entry |
| **Level 2** | `4-4-4-4` — 16s cycle · established standard |
| **Level 3** | `5-5-5-5` — 20s cycle · 3 breaths/min · demanding |

The most important technique in the library. Tanden appears in all five Shiho states and across all element runners because it can meet a student wherever they are. Four equal phases of sustained attention are the physiological equivalent of standing still in the centre of a storm. Level 1 makes it accessible when the student is very agitated; Level 3 is genuinely demanding, requiring full attention to hold all four 5-second phases. Used in military, surgical, and elite sport contexts. In the Nendō it is "the foundation" — the technique every ninja must master before advancing.

**Appears in Shiho:** All five states — Scattered (3), Clouded (1), Tired (3), Clear (2), Turbulent (1)
**Element runner:** C1 is position 1 of the Chi runner

---

### C2 · Daichi · 大地 · Extended Box · Intermediate

| | |
|---|---|
| **Kanji** | 大地 |
| **Common name** | Great Earth Breath |
| **Quality** | Deeply Grounding · Strengthening |
| **Cue** | *"Wide as the earth. Patient as stone. Hold your ground."* |
| **Level 1** | `5-3-5-3` — extended phases, manageable holds |
| **Level 2** | `6-4-6-4` — full Daichi · 19s cycle |
| **Level 3** | `7-5-7-5` — maximum extension · 24s cycle · ~2.5 breaths/min |

Tanden extended — the same square structure, heavier. Where Tanden builds focus, Daichi builds strength: longer phases demand greater CO₂ tolerance and more sustained voluntary control at both the full and empty lung positions. The dual holds create a felt sense of stillness under pressure — the ability to remain completely unmoved at both expansion and contraction. Reserved for students with reliable Tanden comfort.

**Source:** Extended Sama Vritti pranayama with kumbhaka; advanced box breathing protocols (military and elite performance).

**Appears in Shiho:** Clear (advanced centre position)
**Element runner:** C2 is position 2 of the Chi runner

---

### C3 · Noboru · 昇 · Staircase Inhale · Advanced

| | |
|---|---|
| **Kanji** | 昇 |
| **Common name** | Rising Breath |
| **Quality** | Focusing · Building |
| **Cue** | *"Four steps up. One long way down."* |
| **Level 1** | `3×1-0-5-0` — 3 quick 1s steps · gentle introduction |
| **Level 2** | `4×2-0-8-0` — 4 measured 2s steps · full Noboru |
| **Level 3** | `5×2-0-10-0` — 5 steps, longer exhale · maximum build |

The staircase inhale — Viloma Pranayama Stage 1. Rather than breathing in one continuous motion, the student takes N distinct inhale pulses, pausing between each before drawing in the next. The natural reflex is to breathe in a single flow, so interrupting it is an act of conscious will. Each pause builds mild CO₂ awareness and expands body-knowledge of the breath. The long smooth exhale provides a profound release by contrast. The Chi element association is earned — this is deliberate, structural breathing. Like laying foundations, one stone at a time.

**Animation:** Circle expands in N discrete stepped pulses, then contracts smoothly.

**Appears in Shiho:** Clouded (position 1 — demands attention, breaks fog), Clear (precision practice)
**Element runner:** C3 is position 3 of the Chi runner

---

### C4 · Hashigo · 梯子 · Dual Staircase · Expert

| | |
|---|---|
| **Kanji** | 梯子 |
| **Common name** | Ladder Breath |
| **Quality** | Complete Breath Mastery |
| **Cue** | *"Up in steps. Down in steps. The ladder runs both ways."* |
| **Level 1** | `3×1-0-3×1-0` — 3 short segments each direction |
| **Level 2** | `4×2-0-4×2-0` — 4 measured segments each direction |
| **Level 3** | `5×2-0-5×2-0` — 5 segments · full ladder · 40s cycle |

Viloma Pranayama Stage 3 — both inhale and exhale segmented. The most structurally demanding technique in the library. The student climbs the inhale in steps and descends the exhale in steps, maintaining voluntary control through the entire cycle without any smooth phase to rest in. Level 3 at a 40-second cycle produces fewer than 2 breaths per minute — the slowest breathing rate in the system. Hashigo is a genuine mastery technique; it should not be introduced until Noboru Level 3 and Orochi Level 3 are both established.

**Animation:** Circle expands in N discrete stepped pulses, then contracts in N discrete stepped pulses. Both phases are stepped — there is no smooth phase.

**Appears in Shiho:** Clear only (mastery deepening, expert students)
**Element runner:** C4 is the expert extension of the Chi runner

---

## 🌊 MIZU — Water — Deepening · Expanding

*Mizu techniques prioritise depth and patience. Where Kaze techniques release, Mizu techniques explore — going further into stillness than any other element. The progression moves from deep equal breathing through extended hold-and-release to wave rhythms to empty-lung retention. Water does not resist; it simply goes deeper.*

---

### M1 · Mizu · 水 · Deep Equal · Beginner

| | |
|---|---|
| **Kanji** | 水 |
| **Common name** | Ocean Breath / Deep Equal |
| **Quality** | Expanding · Settling |
| **Cue** | *"Slow like the tide. Strong like the deep."* |
| **Level 1** | `5-0-5-0` — 10s cycle · **bridge from Kaze** · HRV coherence zone |
| **Level 2** | `6-0-6-0` — 12s cycle · 5 breaths/min · optimal HRV rate |
| **Level 3** | `7-0-7-0` — 14s cycle · ~4.3 breaths/min · very deep |

The deep equal breath — the Water element's entry point and the natural landing from the Kaze element's mastery. Level 1 (`5-0-5-0`) is the same pattern as Kaze no Iki Level 3, but experienced through the Mizu framing: not quick and accessible, but slow and deliberate. Level 2 reaches the clinically optimal heart rate variability breathing rate (approximately 5 breaths/minute), producing maximum HRV coherence. The ocean metaphor is intentional — slow but full of power.

**Source:** Resonant frequency breathing research (Lehrer, Vaschillo et al.); HRV coherence science; optimal respiratory rate literature.

**Appears in Shiho:** Clouded (position 3), Clear (position 1)
**Element runner:** M1 is position 1 of the Mizu runner

---

### M2 · Tsuki · 月 · Hold & Release · Intermediate

| | |
|---|---|
| **Kanji** | 月 |
| **Common name** | 4-7-8 Breath / Moon Breath |
| **Quality** | Expanding · Deepening |
| **Cue** | *"Slow and deep. The moon waits for no one."* |
| **Level 1** | `4-4-6-0` — short hold, modest exhale · accessible entry |
| **Level 2** | `4-7-8-0` — 7s hold, 8s exhale · classic form |
| **Level 3** | `5-7-9-0` — longer inhale and exhale · maximum depth |

The hold-and-release family. Tsuki contains the longest inhale hold in the library — 7 seconds at Level 2. This extended breath retention builds CO₂ tolerance and creates a pronounced calming effect through mild hypercapnic response. Level 1 (`4-4-6-0`) is a genuinely different and more accessible technique: the hold is short and the exhale is manageable. Students should not attempt Level 2 without establishing comfort at Level 1. The image is lunar: patient, unhurried, enduring.

**Appears in Shiho:** Clear (position 3), Turbulent (position 3)
**Element runner:** M2 is position 2 of the Mizu runner

---

### M3 · Nami · 波 · Wave Breath · Advanced

| | |
|---|---|
| **Kanji** | 波 |
| **Common name** | Wave Breath |
| **Quality** | Rhythmically Calming · Expansive |
| **Cue** | *"Breathe in, breathe out — then wait for the wave."* |
| **Level 1** | `5-0-7-2` — 14s cycle · short rest |
| **Level 2** | `6-0-8-3` — 17s cycle · deepening rest |
| **Level 3** | `7-0-9-4` — 20s cycle · full wave rhythm |

A new family not found in the previous library. Nami uses a rest phase after the exhale — a hold at the empty-lung position — rather than the full-lung hold of Tsuki. The physiological experience is entirely different: where Tsuki's hold concentrates and builds, Nami's rest releases and waits. The brief stillness after a long exhale is the moment between waves — complete emptiness before the tide returns. This empty-lung pause gently stretches CO₂ tolerance without the intensity of a full inhale hold, making it more accessible than Tsuki while producing a deep wave-like sense of cyclical calm.

**Appears in Shiho:** Clear (deep session work), Turbulent (extended calming close)
**Element runner:** M3 is position 3 of the Mizu runner

---

### M4 · Shizumi · 沈み · Exhale Hold · Expert

| | |
|---|---|
| **Kanji** | 沈み |
| **Common name** | Sinking Breath |
| **Quality** | Deeply Settling · Stillness |
| **Cue** | *"Empty completely. Then sink into the silence."* |
| **Level 1** | `4-0-6-4` — equal rest and inhale |
| **Level 2** | `5-0-7-5` — extended |
| **Level 3** | `6-0-8-6` — 24s cycle · 2.5 breaths/min |

The exhale-hold family — Buteyko-derived empty-lung retention. Where Tsuki holds at full expansion (lungs filled), Shizumi holds at full contraction (lungs emptied). This is a fundamentally different physiological experience: holding at the empty position builds CO₂ tolerance from the contraction side, training the body to remain calm when the urge to inhale is strongest. The effect is a profound, grounded stillness — not the expansive alertness of Tsuki, but a deep, sinking quiet. "Shizumi" means sinking or submerging — the feeling of descending beneath the surface of the water and resting there.

**Source:** Buteyko method (empty-lung control pause); CO₂ tolerance development research.

**Appears in Shiho:** Clear only (advanced expert deepening)
**Element runner:** M4 is the expert extension of the Mizu runner

---

## 🔥 HI — Fire — Activating · Energising

*Hi techniques prioritise activation and controlled energy. They are the only element with techniques that deliberately raise arousal rather than lower it. The four families move from simple activation-then-release (Hi no Iki) through symmetric rapid breathing (Kazan) to rapid staccato gathering (Taka no Iki) to the most advanced: rapid activation with a lengthening hold that concentrates energy before releasing it (Ryuhi).*

*⚠️ Hi Intermediate Level 3 and Hi Advanced/Expert levels carry a caution flag — they involve rapid breathing patterns that can cause light-headedness. Not appropriate for students with anxiety, cardiac sensitivity, or below recommended aura stage.*

---

### H1 · Hi no Iki · 火息 · Activation Breath · Beginner

| | |
|---|---|
| **Kanji** | 火息 |
| **Common name** | Energising Breath |
| **Quality** | Activating · Awakening |
| **Cue** | *"Sharp and quick. Awaken the flame within."* |
| **Level 1** | `2-0-3-0` — slight exhale extension · gentlest activation |
| **Level 2** | `2-0-4-0` — standard Hi no Iki |
| **Level 3** | `2-0-6-0` — longer exhale · activation with deeper regulation |

The only activating technique accessible from Aura Stage 1. A short sharp inhale with a longer exhale raises energy slightly while the extended exhale provides immediate regulation — the student activates without tipping into anxiety. Level 1 is the gentlest possible version. Level 3's 6-second exhale means the regulating component is substantial — good for students who want energy without intensity. Always followed by calmer techniques in session sequences.

**Appears in Shiho:** Tired (position 1)
**Element runner:** H1 is position 1 of the Hi runner

---

### H2 · Kazan · 火山 · Power Breath · Intermediate

| | |
|---|---|
| **Kanji** | 火山 |
| **Common name** | Power / Volcano Breath |
| **Quality** | Powerfully Activating |
| **Cue** | *"Quick and fierce. Fan every flame inside you."* |
| **Level 1** | `2-0-2-2` — rapid equal with rest · controlled entry |
| **Level 2** | `2-0-2-0` — pure rapid symmetric · full Kazan |
| **Level 3** | `2-2-2-0` — adds brief hold · contained intensity ⚠️ |

Symmetric rapid breathing — no calming exhale extension. Unlike Hi no Iki, Kazan maintains activation throughout the cycle. Level 1 adds a brief rest phase, providing a small regulatory window between cycles. Level 2 removes it — pure rapid cycling. Level 3 adds a 2-second hold after the short sharp inhale, containing and concentrating the activation before release. The levels progress not by getting faster (which enters unsafe territory) but by adding or removing regulatory structure. Adapted from the Wim Hof rapid breathing phase and Bhastrika pranayama.

*⚠️ Level 3 should be gated behind a minimum Aura stage. Rapid breathing patterns can cause dizziness in younger students.*

**Appears in Shiho:** Tired (advanced position 1, deep fatigue only)
**Element runner:** H2 is position 2 of the Hi runner

---

### H3 · Taka no Iki · 鷹の息 · Hawk's Breath · Advanced

| | |
|---|---|
| **Kanji** | 鷹の息 |
| **Common name** | Hawk's Breath |
| **Quality** | Gathering · Releasing |
| **Cue** | *"Sharp and quick — gather everything. Then let it all go."* |
| **Level 1** | `3×1-0-6-0` — 3 quick sniffs, 6s release |
| **Level 2** | `4×1-0-8-0` — 4 sniffs, 8s release · full Taka no Iki |
| **Level 3** | `5×1-0-10-0` — 5 sniffs, 10s release · maximum arc |

The staccato inhale technique — rapid 1-second sniff pulses loading the lungs fully, then one long slow exhale. The contrast between the sharp, rapid gathering and the long controlled release is the defining quality: the student gathers and then fully releases, completing the arc in a single breath. This creates a unique dual effect: sympathetic spike (inhale) then parasympathetic drop (exhale) within one cycle. The hawk gathers in an instant and glides for a long time. As levels increase, both the gathering (more sniffs) and the release (longer exhale) extend.

**Animation:** Circle expands in N rapid 1-second pulses, then contracts in one long smooth motion.

*⚠️ Rapid staccato inhales can cause light-headedness. Appropriate minimum Aura stage required.*

**Appears in Shiho:** Tired (very advanced position 1), Turbulent (counter-intuitive position 2 — the sharp gather provides the hook that enables the long release)
**Element runner:** H3 is position 3 of the Hi runner

---

### H4 · Ryuhi · 龍火 · Dragon Fire · Expert

| | |
|---|---|
| **Kanji** | 龍火 |
| **Common name** | Dragon Fire Breath |
| **Quality** | Concentrated Energy · Controlled Power |
| **Cue** | *"Take it in sharp. Hold the fire. Then let it burn out slowly."* |
| **Level 1** | `2-2-4-0` — short hold after activation · intro |
| **Level 2** | `2-4-4-0` — medium hold · contained fire |
| **Level 3** | `2-6-4-0` — long hold · maximum concentration |

The only Hi technique that combines rapid activation with a sustained breath hold — the hold comes immediately after the short sharp inhale, trapping the energised state and building controlled intensity before the exhale releases it. Where Tsuki (Mizu) holds to achieve depth and stillness, Ryuhi holds to contain and concentrate fire. As the hold lengthens across levels, the felt experience intensifies: the student learns to remain calm while energy is building inside. This is advanced nervous system regulation — not avoiding activation, but mastering it while it is present.

*⚠️ Expert technique. Breath hold after rapid activation is physiologically demanding. Requires established Kazan and Taka no Iki mastery.*

**Appears in Shiho:** Clear only (for students who have mastered Hi regulation and wish to deepen it)
**Element runner:** H4 is the expert extension of the Hi runner

---

## Shiho — State to Session Mapping

The Shiho screen reads the student's current mental state and prescribes three technique families in sequence. With the new family structure, the Shiho prescribes **family keys** — the level used within each family is automatically the student's current unlocked level for that family.

| State | Kanji | Meaning | Slot 1 | Slot 2 | Slot 3 | Journey |
|-------|-------|---------|--------|--------|--------|---------|
| Scattered | 散 | Fragmented | K1 (Kaze no Iki) | K2 (Shizen) | C1 (Tanden) | Anchor → Calm → Centre |
| Clouded | 霧 | Foggy | C1 (Tanden) | K2 (Shizen) | M1 (Mizu) | Focus → Release → Open |
| Tired | 疲 | Low energy | H1 (Hi no Iki) | K1 (Kaze no Iki) | C1 (Tanden) | Activate → Steady → Centre |
| Clear | 清 | Settled | M1 (Mizu) | C1 (Tanden) | M2 (Tsuki) | Deepen → Anchor → Transcend |
| Turbulent | 嵐 | Overwhelmed | C1 (Tanden) | K2 (Shizen) | M2 (Tsuki) | Contain → Release → Still |

**Design principle:** C1 Tanden appears in four of five states because its equal four-phase structure can meet a student at any arousal level. It is the one technique every student will always have access to, regardless of element progression.

---

## Element Runners — Session Sequences

An element runner is a themed session through a single element's technique families, progressing from the student's current accessible level upward. Students select an element; the session moves through available families at the student's current level in each.

| Element | Beginner family | Intermediate family | Advanced family | Expert family |
|---------|----------------|--------------------|-----------------|----|
| 🌬️ Kaze | Kaze no Iki (K1) | Shizen (K2) | Senri (K3) | Orochi (K4) |
| 🌍 Chi | Tanden (C1) | Daichi (C2) | Noboru (C3) | Hashigo (C4) |
| 🌊 Mizu | Mizu (M1) | Tsuki (M2) | Nami (M3) | Shizumi (M4) |
| 🔥 Hi | Hi no Iki (H1) | Kazan (H2) | Taka no Iki (H3) | Ryuhi (H4) |

A standard runner session uses 3 families (positions 1–3). The expert family (position 4) is an extended session available to students who have unlocked it. Not every student will have access to all four families in their current Aura stage.

---

## ⚠️ Unlock & Progression Logic — PENDING DECISION

> **This section is illustrative only. The logic below is an example of how unlocking COULD work and has not been approved or finalised. It must be decided in collaboration with the curriculum and product teams before implementation.**

### What needs to be decided:
- Exact XP thresholds per level (how many sessions to advance L1 → L2 → L3)
- Which Aura stages gate which technique families
- Whether Hi Advanced and Expert require parental/guardian acknowledgement of the safety note
- Whether the Kaze→Mizu bridge at `5-0-5-0` is an automatic unlock or requires a Shiho confirmation
- How the Shiho routing adapts when a prescribed family is not yet unlocked for a student

### Example unlock logic (NOT finalised):

```
AURA STAGE 1 (entry)
  → Kaze Beginner (K1): available immediately — L1 unlocked by default
  → Hi Beginner (H1): L1 available for Shiho Tired state from day one
  → All other elements/families: locked

  Within K1: complete 3 sessions at L1 → unlock L2
             complete 3 sessions at L2 → unlock L3

AURA STAGE 2
  → Kaze Intermediate (K2) unlocks: requires K1 L3 mastered
  → Chi Beginner (C1) unlocks: requires Aura Stage 2
  → Mizu Beginner (M1) unlocks: automatic — same pattern as K1 L3 (the bridge)
  → Hi Beginner (H1) full levels available

AURA STAGE 3
  → Kaze Advanced (K3) unlocks: K2 L3 mastered
  → Chi Intermediate (C2) unlocks: C1 L3 mastered
  → Mizu Intermediate (M2) unlocks: M1 L3 mastered + Aura Stage 3
  → Hi Intermediate (H2) unlocks: H1 L3 mastered + Aura Stage 3

AURA STAGE 4
  → All Advanced families unlock (K4, C3, M3, H3)
  → Subject to individual family prerequisite L3 mastery

AURA STAGE 5
  → All Expert families unlock (Orochi, Hashigo, Shizumi, Ryuhi)
  → Hi Expert (Ryuhi) may require additional acknowledgement flag
```

*This is a starting framework only. XP numbers, exact Aura thresholds, and edge cases (e.g. student selects a Shiho state whose prescribed family is locked) all require product decisions.*

---

## Discipline and Curriculum Placement

All techniques belong exclusively to the **Mushin** discipline. There is no breathwork in Metsuke or Tachi.

| Discipline | Breathwork | Rationale |
|-----------|-----------|-----------|
| Metsuke (目付) | None | Perception training — visual and cognitive challenges |
| Tachi (太刀) | None | Strategy and speed training — logic, decision, numeracy |
| **Mushin (無心)** | **All 16 families** | State management — breathwork is the primary Mushin practice |

---

## Implementation Notes — Segmented Techniques

Four families use segmented phase animation (Noboru, Taka no Iki, Orochi, Hashigo). These require a stepped circle animation rather than smooth continuous movement.

**Data structure extension for segmented techniques:**
```javascript
{
  key: 'noboru',
  kanji: '昇', name: 'Noboru', realName: 'Rising Breath',
  pattern: [8, 0, 8, 0],             // total phase duration in seconds (for timer)
  segments: { inhale: 4, exhale: 0 }, // N segments per phase (0 = smooth)
  segmentDuration: { inhale: 2 },    // seconds per segment
  cue: 'Four steps up. One long way down.'
}
```

**CSS approach for stepped animation:**
```css
@keyframes breathSegIn-4 {
  0%   { transform: scale(1.00); }
  22%  { transform: scale(1.055); }
  25%  { transform: scale(1.055); } /* micro-pause */
  47%  { transform: scale(1.11);  }
  50%  { transform: scale(1.11);  }
  72%  { transform: scale(1.165); }
  75%  { transform: scale(1.165); }
  97%  { transform: scale(1.22);  }
  100% { transform: scale(1.22);  }
}
```

**Implementation priority for segmented families:**
1. Noboru (C3) — segmented inhale only
2. Orochi (K4) — segmented exhale only
3. Taka no Iki (H3) — rapid 1s segmented inhale (requires tight timing)
4. Hashigo (C4) — both phases segmented; build after 1 and 2 are stable

---

## Research Sources

**Equal breathing / HRV coherence (Kaze no Iki, Mizu):**
[Breathing at 5.5bpm increases HRV — PubMed](https://pubmed.ncbi.nlm.nih.gov/24380741/) · [Resonance breathing — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8924557/)

**Extended exhale / vagal activation (Shizen, Kumo → Shizen L3):**
[Longer exhalations hack the vagus nerve — Psychology Today](https://www.psychologytoday.com/us/blog/the-athletes-way/201905/longer-exhalations-are-an-easy-way-to-hack-your-vagus-nerve) · [Slow breathing for stress — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10395759/)

**7-11 breathing (Senri):**
[7:11 Breathing — Human Givens Institute](https://www.hgi.org.uk/articles/711-breathing-how-does-deep-breathing-make-you-feel-more-relaxed/) · [Breathing for stress/anxiety — PMC systematic review](https://pmc.ncbi.nlm.nih.gov/articles/PMC10741869/)

**Box breathing / Sama Vritti (Tanden, Daichi):**
[Sama Vritti Pranayama — Yoga Basics](https://www.yogabasics.com/practice/sama-vritti-pranayama/) · [Brief structured respiration — PubMed](https://pubmed.ncbi.nlm.nih.gov/36630953/)

**4-7-8 / hold-and-release (Tsuki):**
[4-7-8 Breathing — Medical News Today](https://www.medicalnewstoday.com/articles/324417)

**Viloma / segmented breathing (Noboru, Orochi, Hashigo):**
[Viloma Pranayama — Yoga With Subhash](https://yogawithsubhash.com/2022/06/29/viloma-pranayama/) · [Staircase Breathing — Vayu Yoga](https://www.vayu-yoga.co.uk/blog/soul-75gzj-6baz4-2amsb)

**Staccato / sharp inhale (Taka no Iki):**
[Breath of Joy — Yoga International](https://yogainternational.com/article/view/breath-of-joy/) · [Cyclic sighing — Stanford Medicine](https://med.stanford.edu/news/insights/2023/02/cyclic-sighing-can-help-breathe-away-anxiety.html)

**Wim Hof / rapid breathing (Kazan):**
[Wim Hof Method — wimhofmethod.com](https://www.wimhofmethod.com/breathing-exercises) · [Wim Hof effectiveness — Scientific Reports](https://www.nature.com/articles/s41598-023-44902-0)

**Buteyko / exhale hold (Shizumi):**
[Buteyko Breathing — Healthline](https://www.healthline.com/health/asthma/buteyko-breathing-technique) · [Buteyko Clinic International](https://buteykoclinic.com/blogs/buteyko-breathing-technique/buteyko-breathing-technique)

---

*Ninja Learning · Nendō Breathwork Reference · v2.0 · April 2026 · Confidential*
