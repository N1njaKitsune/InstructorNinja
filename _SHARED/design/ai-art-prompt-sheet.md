# AI Art Prompt Sheet
# Nendō · Environment Assets

> **Pipeline:** Midjourney only (V7 Standard / V8 Alpha)
> **Principle:** Materials not scenes — generate separated layers, composite in code
> **Background removal:** Midjourney Editor (Smart Select + Erase Background) or macOS Copy Subject
> **Version:** 2.0 · March 2026

---

## How to Use This Sheet

**Midjourney** handles the entire pipeline — mood boards, production assets, and post-processing. No second tool needed.

**Workflow per layer:**
1. Run the production prompt on the **Create** page
2. Pick the best generation → open in **Editor**
3. For transparent layers: **Smart Select** the subject → **Erase Background** → **Download Image** (exports transparent PNG)
4. For solid layers (sky, floor): download directly — no editor step needed

**Isolated element assets** (lanterns, props, individual objects): prompt on a **white background** at **square aspect ratio (1:1)**. This gives the cleanest mask for both Midjourney's Erase Background and Apple's built-in Copy Subject / Remove Background.

---

## Style Anchors

Append these fragments to every production prompt for visual consistency:

```
Studio Ghibli, hand-painted, watercolour edges, warm candlelight atmosphere,
traditional Japanese architecture, night scene, soft focus, muted palette,
no text, no UI, no characters
```

Negative prompt (add with `--no`):
```
--no photorealistic, 3D render, neon, modern, bright colours, harsh shadows,
cartoon, chibi, anime eyes, text, watermark, border, frame
```

---

## Standard Parameters

Use these on every prompt unless noted otherwise:

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `--ar` | `16:9` (scenes) or `1:1` (isolated objects) | Landscape for environment layers, square for clean bg removal |
| `--s` | `750` | High stylization — pushes the painterly feel |
| `--style` | `raw` | Less Midjourney "opinion", more prompt fidelity |
| `--no` | See negative prompt above | Excludes unwanted elements |

**Optional V8 Alpha parameters** (if testing on alpha.midjourney.com):
- `--hd` — native 2K resolution output
- `--q 4` — extra coherence pass (costs 4x but useful for hero assets)

---

## Aesthetics Setup

Before running prompts, configure these in the settings panel (gear icon):

- **Personalize:** Toggle ON if you've rated 200+ images — tunes all output toward your taste
- **Moodboard:** Select your "My First Moodboard" (the Japanese dojo collection) — this applies persistent style guidance across all generations

---

## Phase 1 — Mood Boards (Direction Only)

These set the tone. Run each, save your favourites to your Moodboard. They are *not* production assets.

### Mood 1 · Overall Dojo Feeling
```
A traditional Japanese dojo interior at night, viewed from inside looking
outward through open shoji screens, distant mountain village glowing faintly,
warm lantern light on wooden beams, embers floating gently in the air,
Studio Ghibli style, hand-painted, watercolour texture, calm contemplative
atmosphere, no characters --ar 16:9 --s 750 --style raw
```

### Mood 2 · Lantern Warmth
```
Close-up of two paper lanterns hanging from dark wooden beams in a Japanese
dojo, warm amber glow spilling onto polished wood floor, soft bokeh,
hand-painted style, Studio Ghibli atmosphere, watercolour edges,
night interior --ar 16:9 --s 750 --style raw
```

### Mood 3 · Distant Village at Night
```
A tiny Japanese mountain village seen from far away at night, warm glowing
windows dotting dark silhouettes of pagodas and traditional houses, misty
mountains behind, deep indigo sky, Studio Ghibli painting style,
peaceful solitude, hand-painted --ar 16:9 --s 750 --style raw
```

### Mood 4 · Wooden Floor Texture
```
Extreme close-up of aged Japanese wooden floorboards, warm brown tones,
subtle grain texture, faint reflected lantern light, hand-painted
watercolour style, overhead perspective --ar 16:9 --s 250 --style raw
```

---

## Phase 2 — Production Assets

Each prompt generates one composition layer. Transparency is achieved in the Editor after generation (see workflow above).

### L0 · Night Sky
> **Needs transparency:** No — full background
> **Aspect ratio:** `--ar 16:9`
> **Post-processing:** None — download direct
```
A gradient night sky, deep indigo at top fading to dark warm purple near
the horizon, very subtle scattered stars, hand-painted watercolour style,
Studio Ghibli, no clouds, no moon, no foreground elements, painterly soft,
muted palette, overhead warmth
--ar 16:9 --s 750 --style raw --no clouds moon landscape buildings
```

### L1 · Distant Mountains (optional)
> **Needs transparency:** Yes — mountains only
> **Aspect ratio:** `--ar 16:9`
> **Post-processing:** Editor → Smart Select mountains → Erase Background → Download
```
Silhouette of layered mountain ridges at night, two depth levels,
closest mountains slightly lighter than furthest, very subtle blue-grey
tones on dark indigo sky, hand-painted edges, watercolour texture,
no trees no buildings, Studio Ghibli
--ar 16:9 --s 750 --style raw --no trees buildings foreground
```

### L2 · Village Silhouette
> **Needs transparency:** Yes — buildings only
> **Aspect ratio:** `--ar 16:9`
> **Post-processing:** Editor → Smart Select village → Erase Background → Download
```
Silhouette of a small traditional Japanese village at night, pagoda rooftops
and sloped traditional houses, tiny warm amber dots for window lights,
dark profile against slightly lighter sky, hand-painted style,
no foreground, Studio Ghibli
--ar 16:9 --s 750 --style raw --no foreground ground floor
```

### L3 · Dojo Frame (combined structure)
> **Needs transparency:** Yes — frame only, centre open
> **Aspect ratio:** `--ar 16:9`
> **Post-processing:** Editor → Smart Select dojo frame structure → Erase Background (preserves transparency in centre opening) → Download
```
Interior of a traditional Japanese dojo seen from inside, dark wooden beams
framing the top, thick wooden pillars on left and right, shoji screen panels
with faint warm light filtering through, floor lanterns glowing at base of
pillars, the centre is an open view outward, hand-painted watercolour style,
Studio Ghibli, warm candlelight, aged dark wood
--ar 16:9 --s 750 --style raw --no characters furniture modern
```

### L4 · Wooden Floor
> **Needs transparency:** No — full panel
> **Aspect ratio:** `--ar 16:9`
> **Post-processing:** None — download direct
```
Traditional Japanese wooden dojo floor seen in perspective from standing
height, warm dark brown aged planks running left to right, subtle
reflected amber lantern light, fading to darkness at the far edge,
hand-painted watercolour style, Studio Ghibli, no walls no objects
no furniture, overhead warmth
--ar 16:9 --s 750 --style raw --no walls furniture objects characters
```

### L5 · Lantern (single asset, placed twice in code)
> **Needs transparency:** Yes
> **Aspect ratio:** `1:1` (square — for clean background removal)
> **Background:** White
> **Post-processing:** Smart Select lantern → Erase Background → Download **or** download and use macOS Copy Subject
```
A single traditional Japanese paper lantern hanging from above, warm amber
glow, soft radial light emanating outward, hand-painted watercolour style,
Studio Ghibli, no other objects, white background, centred composition
--ar 1:1 --s 750 --style raw --no background scenery
```

### L6 · Paper Texture Overlay
> **Needs transparency:** Semi — used at very low opacity in CSS
> **Aspect ratio:** `16:9`
> **Post-processing:** Download direct — applied as overlay at ~5-10% opacity
```
Subtle handmade Japanese washi paper texture, very fine grain, neutral warm
tone, slightly uneven surface, watercolour paper feel, flat even lighting,
no folds no creases, seamless tileable
--ar 16:9 --s 250 --style raw
```

---

## Element Atmosphere Variants

When the student enters an elemental session, the environment shifts. Use **Retexture mode** in the Editor to create element-specific versions of the base dojo:

| Element | Atmosphere Shift | Particle Colour | Ambient Tint |
|---------|-----------------|-----------------|--------------|
| **Kaze** (wind) | Cool, open, airy | Pale blue-white | Cool indigo wash |
| **Chi** (earth) | Warm, grounded, amber | Gold-amber | Warm amber wash |
| **Mizu** (water) | Deep, still, reflective | Deep blue | Cool teal wash |
| **Hi** (fire) | Warm, bright, active | Orange-ember | Warm red-amber wash |

### Retexture workflow:
1. Open the approved L3 Dojo Frame in Editor
2. Switch to **Retexture** tab
3. Enter element-specific prompt:
```
[ELEMENT ATMOSPHERE], traditional Japanese dojo, hand-painted,
Studio Ghibli, watercolour --style raw
```
Replace `[ELEMENT ATMOSPHERE]` with:
- **Kaze:** `cool blue-indigo moonlight washing through, airy, wind-swept, pale blue lantern glow`
- **Chi:** `warm amber golden hour light, earthy grounded tones, deep wood grain visible`
- **Mizu:** `deep teal reflected light, still water feeling, cool blue-green lantern glow`
- **Hi:** `warm orange-red firelight, embers floating, active warm glow throughout`

4. Submit Retexture — same composition, different mood
5. Erase Background + Download as per standard workflow

---

## Niji 7 (Optional — Anime Style Test)

Midjourney's dedicated anime model now supports Moodboards and Personalization. Worth testing for the Ghibli aesthetic — it may produce even closer results for our art direction.

To use: add `--niji 7` to any prompt instead of `--style raw`. Note that niji has its own aesthetic tendencies, so test a mood board prompt first before committing to production.

---

## Quality Checklist

Before accepting any asset into the build:

- [ ] Transparent background where specified (check in Preview or Finder Quick Look — not just visually in browser)
- [ ] No text, watermarks, or signatures anywhere
- [ ] Consistent colour temperature with other accepted layers
- [ ] Hand-painted / watercolour feel — not photorealistic, not flat vector
- [ ] Correct aspect ratio for its layer position
- [ ] No characters, faces, or figures
- [ ] Edges are clean after background removal (zoom to 200% and check)
- [ ] Isolated element assets (lanterns, props) have no residual white fringe

---

## Integration Notes

Once assets are generated and approved:

1. Drop each PNG/JPG into `student/assets/environment/`
2. Name convention: `L0-sky.jpg`, `L2-village.png`, `L3-dojo-frame.png`, `L5-lantern.png`, etc.
3. Solid backgrounds (L0 sky, L4 floor) → `.jpg` for smaller file size
4. Transparent layers (L2 village, L3 dojo, L5 lantern) → `.png` to preserve alpha
5. Replace placeholder layers in the composition proof with `<img>` or CSS `background-image` references
6. Apply CSS filters for tonal matching: `filter: brightness(0.3) saturate(0.5)` on sky, `brightness(0.55) saturate(0.8)` on dojo frame
7. Test: toggle each layer on/off to verify blending before committing

---

## Tool Quick Reference

| Task | Where | How |
|------|-------|-----|
| Generate an asset | Create page | Paste prompt → Generate |
| Apply mood board style | Create page | Click image ref icon → Style References → select moodboard image |
| Remove background | Editor → Edit tab | Smart Select subject → Erase Background → Download |
| Restyle for element variant | Editor → Retexture tab | Enter new atmosphere prompt → Submit Retexture |
| Batch remove bg (props) | macOS Finder | Right-click PNG → Quick Actions → Remove Background |
| Clean isolation (props) | Prompt technique | Use `white background` + `--ar 1:1` for cleanest mask |
| Organise generations | Organize page | Create folders per layer (L0, L1, etc.) |
| Build style profile | Style Creator (Beta) | Enter prompt → pick favourites → get reusable style code |

---

*AI Art Prompt Sheet v2.0 · Midjourney-Only Pipeline · Creative Design + Ergonomics · March 2026*
