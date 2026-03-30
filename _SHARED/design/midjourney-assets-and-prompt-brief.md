# Nendō · Complete Assets List & Prompt Brief
> **Scope:** Every Midjourney image needed — moodboard primers + production paintings
> **Pipeline:** Midjourney V7/V8 → single JPEG per screen → CSS atmosphere on top → semi-transparent UI floating above
> **Version:** 1.0 · March 2026

---

## Master Asset Summary

| Category | Count | Purpose |
|----------|-------|---------|
| Moodboard primers (existing) | 4 | Already in prompt sheet v2.0 — dojo feeling, lantern warmth, village, floor texture |
| Moodboard primers (new) | 10 | World-building, daytime light, elemental nature refs, light quality, emotional arc |
| Production hero paintings | 10 | One JPEG per screen (covers 17 screens via reuse) |
| **Total Midjourney generations** | **24** | 14 moodboard + 10 production |

---

## Phase 0 — Existing Moodboards (Already in Prompt Sheet v2.0)

| # | Name | Purpose | Status |
|---|------|---------|--------|
| M1 | Overall Dojo Feeling | Interior tone, night, embers | In prompt sheet |
| M2 | Lantern Warmth | Close-up light quality | In prompt sheet |
| M3 | Distant Village | World beyond the dojo | In prompt sheet |
| M4 | Wooden Floor Texture | Material palette, warmth | In prompt sheet |

---

## Phase 0.5 — New Moodboard Primers (See: midjourney-moodboard-primers.md)

| # | Name | Design Aim | Seeds Which Production Painting(s) |
|---|------|------------|-------------------------------------|
| P1 | Mountain Temple at Dusk | Exterior architecture, the dojo as place | bg-student-profile (outside→inside bridge) |
| P2 | **Dojo Courtyard Afternoon** | **DAYTIME — warm golden light, safe/familiar** | **bg-student-profile (daytime register)** |
| P3 | **Sunlit Forest Canopy** | **DAYTIME — green/gold overhead, living world** | **bg-session-complete, Chi palette in sunlight** |
| P4 | Bamboo Grove / Moonlight | Kaze wind element in nature | bg-runner-kaze |
| P5 | Still Forest Pond | Mizu water element in nature | bg-runner-mizu |
| P6 | Autumn Forest Floor | Chi earth element in nature | bg-runner-chi |
| P7 | Traditional Hearth Embers | Hi fire element in nature | bg-runner-hi |
| P8 | Shoji Screen Light Patterns | Interior light quality — diffused warmth | All interior paintings |
| P9 | Stone Lantern Path | Journey/threshold, approach to dojo | bg-student-profile |
| P10 | Dawn Over Mountains | Emotional resolution, accomplishment | bg-session-complete |

---

## Phase 1 — Production Hero Paintings

### Global Settings
All prompts use: `--ar 16:9 --s 750 --style raw`
Negative on all: `--no text watermark characters people`
**Moodboard must be active** before generating these.

---

### Painting 1 · `bg-student-profile.jpg`
**Screen:** Student Profile (Tier 1)
**Mood:** Warm, light, inviting — the world before the dojo
**Palette:** Warm afternoon amber, soft gold, gentle
**Reused by:** This screen only

```
A warm Japanese room seen from a child's perspective, soft afternoon
light filtering through shoji screens, a low wooden desk with a small
lantern, warm wooden floors, peaceful and inviting, hand-painted
watercolour style, Studio Ghibli, no characters, gentle warmth
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** `brightness(0.3) saturate(0.5)` — lighter than dojo interiors, warmer vignette

---

### Painting 2 · `bg-home-hub.jpg`
**Screen:** Nendō Home (Tier 2)
**Mood:** Mysterious, inviting — standing at a crossroads
**Palette:** Dark interior, three coloured glows (green, blue, warm red)
**Reused by:** This screen only

```
Interior of a traditional Japanese dojo at night, three doorways
visible along the far wall — one glowing soft green, one soft blue,
one soft warm red — dark wooden beams overhead, lanterns on the floor,
the viewer stands in the centre looking at all three doors, hand-painted
watercolour style, Studio Ghibli, mysterious and inviting, warm
candlelight atmosphere, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Standard dojo filter stack. Each door glow may get a subtle CSS radial-gradient boost.

---

### Painting 3 · `bg-breath-home.jpg`
**Screen:** BreathHome (Tier 2)
**Mood:** Intimate, meditative, contemplative
**Palette:** Soft green-tinted lantern light, deep calm
**Reused by:** ElementList, Technique (3 screens total — CSS tinting differentiates)

```
Interior of a traditional Japanese meditation room at night, low
ceiling with dark wooden beams, a circular open space in the centre
of a tatami floor, soft green-tinted lantern light, four small
alcoves visible in the walls, hand-painted watercolour style, Studio
Ghibli, deeply calm and contemplative, watercolour edges, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Base = green-tinted. ElementList shifts via `hue-rotate` per element. Technique deepens vignette.

---

### Painting 4 · `bg-session-shell.jpg`
**Screen:** Check-In (Tier 2)
**Mood:** Preparatory, calm, anticipatory — the dojo before practice
**Palette:** Warm candlelight, waiting atmosphere
**Reused by:** Sequence (2 screens total)

```
Close interior view of a Japanese dojo at night, warm dark wooden
floor in perspective, paper lanterns glowing softly on either side,
shoji screens in the background, a calm preparatory atmosphere,
the space is waiting, hand-painted watercolour style, Studio Ghibli,
warm candlelight, anticipation, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Standard stack. Sequence screen may add subtle brightness lift to suggest progression.

---

### Painting 5 · `bg-shiho.jpg`
**Screen:** Shiho Open (Tier 2)
**Mood:** Perfectly symmetrical, centred, absolute stillness — box breathing foundation
**Palette:** Balanced, neutral warm, architectural symmetry
**Reused by:** Shiho Close (2 screens — CSS shifts warmer/resolved for closing)

```
A perfectly symmetrical Japanese dojo interior at night, viewed
straight on, four wooden pillars framing the space equally, a single
lantern at dead centre on the floor, perfect balance and stillness,
dark wooden beams forming a square frame overhead, hand-painted
watercolour style, Studio Ghibli, absolute calm, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Open = cool neutral. Close = `saturate(1.2)` + warmer ambient glow to signal completion.

---

### Painting 6 · `bg-runner-kaze.jpg`
**Screen:** Runner — Kaze / Wind (Tier 2)
**Mood:** Cool, open, airy — breeze you can feel
**Palette:** Pale blue moonlight, indigo, silver
**Reused by:** This screen only

```
Interior of a Japanese dojo at night bathed in cool pale blue
moonlight, shoji screens open wide revealing a night sky, a gentle
breeze suggested by flowing translucent curtains, cool indigo and
silver tones, the space feels open and airy, hand-painted watercolour
style, Studio Ghibli, peaceful wind, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Cool indigo ambient glow. Particles = pale blue-white, faster drift to suggest breeze.

---

### Painting 7 · `bg-runner-chi.jpg`
**Screen:** Runner — Chi / Earth (Tier 2)
**Mood:** Grounded, heavy, solid, rooted
**Palette:** Deep amber, rich brown, gold
**Reused by:** This screen only

```
Interior of a Japanese dojo at night with deep warm amber lantern
light, heavy dark wooden beams prominent overhead, the floor feels
solid and grounded, rich brown and gold tones, earth and wood
textures everywhere, stable and rooted atmosphere, hand-painted
watercolour style, Studio Ghibli, deep warmth, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Warm amber ambient glow. Particles = gold-amber, slow drift downward to suggest weight.

---

### Painting 8 · `bg-runner-mizu.jpg`
**Screen:** Runner — Mizu / Water (Tier 2)
**Mood:** Deep, still, reflective, contemplative
**Palette:** Teal-blue, blue-green, reflected light
**Reused by:** This screen only

```
Interior of a Japanese dojo at night with deep teal-blue reflected
light, as if near still water, cool blue-green tones throughout,
the polished wooden floor reflects the light like a calm surface,
deep and contemplative atmosphere, hand-painted watercolour style,
Studio Ghibli, tranquil depth, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Cool teal ambient glow. Particles = deep blue, slow undulating drift like submerged.

---

### Painting 9 · `bg-runner-hi.jpg`
**Screen:** Runner — Hi / Fire (Tier 2)
**Mood:** Warm, bright, energised, alive — controlled fire energy
**Palette:** Orange-red, deep red, warm ember glow
**Reused by:** This screen only

```
Interior of a Japanese dojo at night lit by warm orange-red firelight,
multiple lanterns glowing intensely, warm embers floating in the air,
rich orange and deep red tones, the space feels energised and alive,
active warm glow throughout, hand-painted watercolour style, Studio
Ghibli, controlled fire energy, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Warm red-amber ambient glow. Particles = orange-ember, active upward drift with glow.

---

### Painting 10 · `bg-session-complete.jpg`
**Screen:** Summary (Tier 2)
**Mood:** Dawn, opening up, accomplishment, hopeful resolution
**Palette:** Golden-pink dawn light, warm and expansive
**Reused by:** This screen only

```
Wide view of a traditional Japanese dojo interior at dawn, warm
golden-pink light filtering through open shoji screens, the space
feels open and expansive, wooden beams above, polished floor reflecting
soft light, a sense of peaceful accomplishment, hand-painted
watercolour style, Studio Ghibli, warm and hopeful, no characters
--ar 16:9 --s 750 --style raw --no text watermark characters people
```

**CSS treatment:** Lighter filter than night paintings: `brightness(0.45) saturate(0.7)`. Dawn-tinted ambient glow.

---

## Reuse Map

| Hero JPEG | Screens Using It | CSS Differentiation |
|-----------|-----------------|---------------------|
| bg-student-profile | Student Profile | Lighter, warmer vignette |
| bg-home-hub | Nendō Home | Door glow radial-gradients |
| bg-breath-home | BreathHome, ElementList, Technique | Element hue-rotate, deeper vignette |
| bg-session-shell | Check-In, Sequence | Brightness lift for Sequence |
| bg-shiho | Shiho Open, Shiho Close | Warmer saturation for Close |
| bg-runner-kaze | Runner (Kaze) | Cool indigo particles |
| bg-runner-chi | Runner (Chi) | Gold-amber particles |
| bg-runner-mizu | Runner (Mizu) | Teal undulating particles |
| bg-runner-hi | Runner (Hi) | Orange ember particles |
| bg-session-complete | Summary | Lighter dawn filter |

**10 paintings → 17 screens**

---

## Generation Workflow

### Step 1 — Prime (est. 15 min)
Run 4 existing moodboards + 8 new primers → favourite best of each → add all 12 to Nendō moodboard.

### Step 2 — Produce (est. 25 min)
With moodboard active, run the 10 production prompts in order. Pick best generation per painting.

### Step 3 — Download & Place
Save each as JPEG → drop into `student/assets/backgrounds/` using the filenames above.

### Step 4 — Handoff to Claude
Once JPEGs are in the assets folder, Claude builds v4.0 prototypes for each screen using the Entry v4.0 template as the structural base.

---

## File Naming Convention

```
student/assets/backgrounds/
├── bg-student-profile.jpg
├── bg-home-hub.jpg
├── bg-breath-home.jpg
├── bg-session-shell.jpg
├── bg-shiho.jpg
├── bg-runner-kaze.jpg
├── bg-runner-chi.jpg
├── bg-runner-mizu.jpg
├── bg-runner-hi.jpg
└── bg-session-complete.jpg
```

---

*Assets List & Prompt Brief v1.0 · Creative Design + Ergonomics · March 2026*
