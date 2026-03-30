# Nendō · V4.0 Visual Rollout Plan
> **Goal:** Bring every priority screen to the visual standard of Nendo_Entry_v4.0
> **Strategy:** One hero JPEG per screen + CSS atmosphere + floating UI
> **Version:** 1.1 · March 2026 — Updated to reflect asset completion status

---

## What "V4.0 Standard" Means

Every screen at v4.0 has exactly this stack:

| Layer | Source | Example |
|-------|--------|---------|
| 1. Hero background | Midjourney JPEG (16:9, full scene) | The dojo interior painting |
| 2. Darkening filter | CSS `filter: brightness(0.3) saturate(0.5)` | Tones the painting down |
| 3. Vignette | CSS radial-gradient overlay | Darkens edges, draws focus |
| 4. Paper texture | CSS noise or grain overlay at 3-5% opacity | Adds tactile warmth |
| 5. Ambient glow | CSS radial-gradient, warm or element-tinted | Soft light from centre |
| 6. Particle animation | CSS keyframes (embers, dust motes) | Floating movement |
| 7. UI components | HTML/CSS, semi-transparent dark panels | Cards, buttons, text |

**What Midjourney produces:** One JPEG per screen. No transparency. No background removal. No isolated objects.

**What CSS produces:** All atmosphere, motion, tinting, and mood shifts.

**What the UI layer does:** Semi-transparent panels, text, interactive elements floating on top.

---

## Screen Priority Map

### TIER 1 — Student Profile + Entry (The Front Door)

| Screen | Status | JPEG Needed | Description |
|--------|--------|-------------|-------------|
| Student Profile | REBUILD | `bg-student-profile.webp` ✅ | The student's home base in the main app. Warmer, lighter than the dojo. |
| Nendō Entry | ✅ DONE (v4.0) | Already have | Entry ritual — profile → kanji → home hub. The visual benchmark. |

**JPEGs: 1 new ✅ GENERATED**

### TIER 2 — Mushin Flow (The Core Experience)

These screens form the complete breathing practice journey.

| Screen | Status | Asset | Description |
|--------|--------|-------|-------------|
| Nendō Home | ✅ IMAGE DONE | `bg-home-hub.webp` ✅ | Three discipline doorways in dojo interior. |
| BreathHome | ✅ IMAGE DONE | `bg-breath-home.webp` ✅ | The Mushin practice space. Intimate meditative interior. |
| ElementList | ✅ IMAGE DONE | REUSE `bg-breath-home.webp` ✅ | CSS tinting shifts per element. |
| Technique | ✅ IMAGE DONE | REUSE `bg-breath-home.webp` ✅ | Deeper vignette for focus. |
| Check-In | ✅ IMAGE DONE | `bg-session-shell.webp` ✅ | Preparatory, calm. |
| Sequence | ✅ IMAGE DONE | REUSE `bg-session-shell.webp` ✅ | Same preparatory space. |
| Shiho Open | ✅ IMAGE DONE | `bg-shiho.webp` ✅ | Symmetrical, centred, still. |
| Shiho Close | ✅ IMAGE DONE | REUSE `bg-shiho.webp` ✅ | CSS shifts warmer/resolved for closing. |
| Runner (Kaze) | ✅ IMAGE DONE | `bg-runner-kaze.webp` ✅ | Wind — cool blue moonlight. |
| Runner (Chi) | ✅ IMAGE DONE | `bg-runner-chi.webp` ✅ | Earth — deep amber, grounded. |
| Runner (Mizu) | ✅ IMAGE DONE | `bg-runner-mizu.webp` ✅ | Water — teal-blue reflections. |
| Runner (Hi) | ✅ IMAGE DONE | `bg-runner-hi.webp` ✅ | Fire — orange-red firelight, embers. |
| Summary | ✅ IMAGE DONE | `bg-session-complete.webp` ✅ | Dawn light, accomplishment. |

**All 10 hero paintings generated. 13 screens covered via reuse.**

### TIER 2b — Discipline Hubs (Metsuke & Tachi)

These screens exist in the prototypes (v3.0) with painting slots but **no hero background yet**. Added to plan.

| Screen | Status | Asset Needed | Description |
|--------|--------|--------------|-------------|
| Metsuke Hub | ❌ IMAGE NEEDED | `bg-metsuke-hub.webp` | The Reading Mind. Cool blue tones — a Japanese scroll library/study room at night. Perception, awareness, stillness. |
| Tachi Hub | ❌ IMAGE NEEDED | `bg-tachi-hub.webp` | The Striking Mind. Warm red/amber — a training space with wooden weapons, firelight. Decisive energy, controlled power. |

**JPEGs: 2 new needed — priority for next generation run**

### TIER 3 — Cross-Cutting Components

| Component | Status | JPEG Needed | Notes |
|-----------|--------|-------------|-------|
| Navigation Shell | NEED | None | Pure CSS/UI component — no unique background. |
| Aura Display | NEED | None | CSS orb with glow — no image asset needed. |

**JPEGs: 0**

### TIER 4 — Smaller Assets (Batch Run)

| Batch | Assets | Status |
|-------|--------|--------|
| Environment layers | L0-sky, L0-sky-warm, L0-sky-cool, L2-village, L3-dojo-frame, L4-floor, L5-lantern, L6-paper-texture | ✅ ALL DONE |
| Check-in states | state-stormy, state-flat, state-scattered, state-clear | ✅ ALL DONE |
| Discipline doors | door-mushin, door-metsuke, door-tachi | ❌ NOT GENERATED |
| Element icons | icon-kaze, icon-chi, icon-mizu, icon-hi, icon-shiho | ❌ NOT GENERATED |
| Discipline motifs | motif-metsuke, motif-tachi | ❌ NOT GENERATED |
| Decorative props | deco-embers, deco-incense, deco-hanging-scroll, deco-bonsai | ❌ NOT GENERATED |

---

## Total Midjourney Asset Count

| Tier | Unique Images | Screens Covered | Status |
|------|--------------|-----------------|--------|
| Tier 1 (Profile + Entry) | 2 | 2 screens | ✅ DONE |
| Tier 2 (Mushin Flow) | 9 | 13 screens | ✅ DONE |
| Tier 2b (Discipline Hubs) | 2 | 2 screens | ❌ NEEDED |
| Tier 3 (Cross-cutting) | 0 | 2 components | — |
| Tier 4 (Smaller assets) | 14 | Various UI elements | ❌ NEEDED |
| **TOTAL** | **12 new paintings + 14 assets** | **19 screens/components** | |

**Progress: 10/12 hero paintings done. 9/26 smaller assets done.**

---

## The Ten Paintings

### 1. `bg-student-profile.jpg`
> The student's world before the dojo. Warmer, lighter.

```
A warm Japanese room seen from a child's perspective, soft afternoon
light filtering through shoji screens, a low wooden desk with a small
lantern, warm wooden floors, peaceful and inviting, hand-painted
watercolour style, Studio Ghibli, no characters, gentle warmth
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 2. `bg-home-hub.jpg`
> Three glowing doorways in a dojo. The crossroads.

```
Interior of a traditional Japanese dojo at night, three doorways
visible along the far wall — one glowing soft green, one soft blue,
one soft warm red — dark wooden beams overhead, lanterns on the floor,
the viewer stands in the centre looking at all three doors, hand-painted
watercolour style, Studio Ghibli, mysterious and inviting, warm
candlelight atmosphere, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 3. `bg-breath-home.jpg`
> The Mushin practice space. Intimate, meditative.

```
Interior of a traditional Japanese meditation room at night, low
ceiling with dark wooden beams, a circular open space in the centre
of a tatami floor, soft green-tinted lantern light, four small
alcoves visible in the walls, hand-painted watercolour style, Studio
Ghibli, deeply calm and contemplative, watercolour edges, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 4. `bg-session-shell.jpg`
> The dojo before practice begins. Choosing, preparing.

```
Close interior view of a Japanese dojo at night, warm dark wooden
floor in perspective, paper lanterns glowing softly on either side,
shoji screens in the background, a calm preparatory atmosphere,
the space is waiting, hand-painted watercolour style, Studio Ghibli,
warm candlelight, anticipation, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 5. `bg-shiho.jpg`
> The ritual space. Centred, still, grounded. Box breathing.

```
A perfectly symmetrical Japanese dojo interior at night, viewed
straight on, four wooden pillars framing the space equally, a single
lantern at dead centre on the floor, perfect balance and stillness,
dark wooden beams forming a square frame overhead, hand-painted
watercolour style, Studio Ghibli, absolute calm, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 6. `bg-runner-kaze.jpg`
> Wind element. Cool, open, airy.

```
Interior of a Japanese dojo at night bathed in cool pale blue
moonlight, shoji screens open wide revealing a night sky, a gentle
breeze suggested by flowing translucent curtains, cool indigo and
silver tones, the space feels open and airy, hand-painted watercolour
style, Studio Ghibli, peaceful wind, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 7. `bg-runner-chi.jpg`
> Earth element. Warm, grounded, amber.

```
Interior of a Japanese dojo at night with deep warm amber lantern
light, heavy dark wooden beams prominent overhead, the floor feels
solid and grounded, rich brown and gold tones, earth and wood
textures everywhere, stable and rooted atmosphere, hand-painted
watercolour style, Studio Ghibli, deep warmth, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 8. `bg-runner-mizu.jpg`
> Water element. Deep, still, reflective.

```
Interior of a Japanese dojo at night with deep teal-blue reflected
light, as if near still water, cool blue-green tones throughout,
the polished wooden floor reflects the light like a calm surface,
deep and contemplative atmosphere, hand-painted watercolour style,
Studio Ghibli, tranquil depth, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 9. `bg-runner-hi.jpg`
> Fire element. Warm, bright, active energy.

```
Interior of a Japanese dojo at night lit by warm orange-red firelight,
multiple lanterns glowing intensely, warm embers floating in the air,
rich orange and deep red tones, the space feels energised and alive,
active warm glow throughout, hand-painted watercolour style, Studio
Ghibli, controlled fire energy, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

### 10. `bg-session-complete.jpg`
> Session complete. The space opens up, dawn warmth.

```
Wide view of a traditional Japanese dojo interior at dawn, warm
golden-pink light filtering through open shoji screens, the space
feels open and expansive, wooden beams above, polished floor reflecting
soft light, a sense of peaceful accomplishment, hand-painted
watercolour style, Studio Ghibli, warm and hopeful, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

---

## Build Order (Updated — March 2026)

### Phase 1: Hero Paintings ✅ COMPLETE
All 10 original hero paintings generated and in `Assets/backgrounds/`.

### Phase 1b: Discipline Hub Paintings ❌ IN PROGRESS
Generate 2 remaining hero paintings for the Metsuke and Tachi hub screens.
All use `--ar 16:9 --s 750 --style raw`. Set Landscape in settings.

1. bg-metsuke-hub — The Reading Mind (cool blue, scroll library/study room)
2. bg-tachi-hub — The Striking Mind (warm red/amber, training space)

Upload to `Assets/backgrounds/` as .webp.

### Phase 2: Smaller Asset Batches ❌ IN PROGRESS
Run the remaining batch prompts from `asset-generation-checklist.md`.

**Round 1 — All 1:1 white background (12 prompts):**
- Discipline doors: door-mushin, door-metsuke, door-tachi
- Element icons: icon-kaze, icon-chi, icon-mizu, icon-hi, icon-shiho
- Discipline motifs: motif-metsuke, motif-tachi
- Decorative: deco-incense, deco-bonsai

**Round 2 — 16:9 landscape (1 prompt):**
- deco-embers (black background, smart-select post-processing)

**Round 3 — 3:4 portrait (1 prompt):**
- deco-hanging-scroll

Upload to correct subfolders in `Assets/`.

### Phase 3: Wire up remaining runners in Thread2
Thread2 currently only plays bg-runner-kaze. Update Thread2 to rotate through all 4 element runners based on selected element.

### Phase 4: Build Metsuke & Tachi Hub v4.0 Prototypes
Once bg-metsuke-hub and bg-tachi-hub are generated, upgrade MetsukeHub_v3.0 and TachiHub_v3.0 to painted v4.0 standard.

### Phase 5: Cross-cutting Polish
- Standardise navigation shell across all screens
- Aura orb component (CSS/canvas, no image needed)

---

## File Structure After Completion

```
student/
├── Assets/
│   ├── backgrounds/           ← NEW: hero JPEGs
│   │   ├── bg-student-profile.jpg
│   │   ├── bg-home-hub.jpg
│   │   ├── bg-breath-home.jpg
│   │   ├── bg-session-shell.jpg
│   │   ├── bg-shiho.jpg
│   │   ├── bg-runner-kaze.jpg
│   │   ├── bg-runner-chi.jpg
│   │   ├── bg-runner-mizu.jpg
│   │   ├── bg-runner-hi.jpg
│   │   └── bg-session-complete.jpg
│   ├── environment/           ← EXISTING: layer assets (kept for Entry v4.0)
│   └── ...
├── Prototypes/
│   ├── Nendo_Entry_v4.0_PaintedLayers.html     ✅ DONE
│   ├── Nendo_Home_v4.0_Painted.html             Phase 2
│   ├── Nendo_BreathHome_v4.0_Painted.html       Phase 2
│   ├── Nendo_ShihoOpen_v4.0_Painted.html        Phase 2
│   ├── Nendo_CheckIn_v4.0_Painted.html          Phase 2
│   ├── Nendo_Sequence_v4.0_Painted.html         Phase 2
│   ├── Nendo_Runner_v4.0_Painted.html           Phase 2
│   ├── Nendo_Summary_v4.0_Painted.html          Phase 2
│   └── Nendo_StudentProfile_v4.0_Painted.html   Phase 2
└── UI-Specs/
    └── Nendo_Architecture_v1.0.html              Reference
```

---

*V4.0 Visual Rollout Plan · v1.0 · March 2026*
