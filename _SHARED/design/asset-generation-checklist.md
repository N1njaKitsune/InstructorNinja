# Asset Generation Checklist
# Nendō · Midjourney Production Run

> **Time budget:** 30–45 minutes
> **Target:** ~24 new assets (5 already exist)
> **Tool:** Midjourney V7 (Standard, Raw mode, Fast speed)
> **Moodboard:** Select "My First Moodboard" before starting

---

## Quick Reference — Format Rules

| Format | When | Why |
|--------|------|-----|
| **JPG** | Full backgrounds, no transparency needed | Smaller file size |
| **PNG** | Anything that layers over other content | Preserves transparency |
| **16:9** | Environment layers, backgrounds, wide scenes | Matches landscape screen |
| **1:1 + white bg** | Isolated objects (lanterns, icons, props) | Cleanest bg removal |

---

## Style Anchors (copy-paste into every prompt)

```
Studio Ghibli, hand-painted, watercolour edges, warm candlelight atmosphere,
traditional Japanese architecture, night scene, soft focus, muted palette,
no text, no UI, no characters
```

**Standard params (append to all):**
```
--s 750 --style raw
```

**Negative (append to all):**
```
--no photorealistic, 3D render, neon, modern, bright colours, cartoon, chibi, text, watermark
```

---

## BATCH 1 — Environment Base Layers (5 assets, 3 need generating)

These are shared across EVERY screen in the Nendō.

| # | Filename | Format | AR | BG | Status | Post-Processing |
|---|----------|--------|----|----|--------|-----------------|
| 1 | `L0-sky.jpg` | JPG | 16:9 | N/A | ✅ HAVE | — |
| 2 | `L2-village.png` | PNG | 16:9 | Transparent | ✅ HAVE | — |
| 3 | `L3-dojo-frame.png` | PNG | 16:9 | Transparent | ✅ HAVE (as L3-shoji) | Rename |
| 4 | `L4-floor.jpg` | JPG | 16:9 | N/A | ✅ HAVE | — |
| 5 | `L5-lantern.png` | PNG | 1:1 | Transparent | ✅ HAVE | — |
| 6 | `L6-paper-texture.jpg` | JPG | 16:9 | N/A | ❌ NEED | Download direct |
| 7 | `L0-sky-warm.jpg` | JPG | 16:9 | N/A | ❌ NEED | Download direct |
| 8 | `L0-sky-cool.jpg` | JPG | 16:9 | N/A | ❌ NEED | Download direct |

### Prompts:

**#6 · L6-paper-texture.jpg**
```
Subtle handmade Japanese washi paper texture, very fine grain, neutral warm tone, slightly uneven surface, watercolour paper feel, flat even lighting, no folds no creases, seamless, Studio Ghibli, hand-painted, muted palette --ar 16:9 --s 250 --style raw --no text watermark
```

**#7 · L0-sky-warm.jpg** (warm variant for Chi/Hi element sessions)
```
A gradient night sky, deep amber-orange at the horizon fading to dark indigo at top, warm atmosphere, very subtle scattered stars, hand-painted watercolour style, Studio Ghibli, no clouds, no moon, no foreground elements, painterly soft --ar 16:9 --s 750 --style raw --no clouds moon landscape buildings
```

**#8 · L0-sky-cool.jpg** (cool variant for Kaze/Mizu element sessions)
```
A gradient night sky, deep cool teal-blue at the horizon fading to dark indigo at top, cool moonlit atmosphere, very subtle scattered stars, hand-painted watercolour style, Studio Ghibli, no clouds, no moon, no foreground elements, painterly soft --ar 16:9 --s 750 --style raw --no clouds moon landscape buildings
```

---

## BATCH 2 — Discipline Doors (3 assets)

These are the three entry points on the Nendō Home hub screen. Each is a stylised Japanese door/gateway glowing with the discipline's colour.

| # | Filename | Format | AR | BG | Post-Processing |
|---|----------|--------|----|----|-----------------|
| 9 | `door-mushin.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 10 | `door-metsuke.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 11 | `door-tachi.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |

### Prompts:

**#9 · door-mushin.png** (green — The Still Mind)
```
A traditional Japanese sliding shoji door panel, slightly ajar, soft green-jade glow emanating from within, dark wooden frame, hand-painted watercolour style, Studio Ghibli, mysterious calm light, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery landscape
```

**#10 · door-metsuke.png** (blue — The Reading Mind)
```
A traditional Japanese sliding shoji door panel, slightly ajar, soft cool blue glow emanating from within, dark wooden frame, hand-painted watercolour style, Studio Ghibli, mysterious perceptive light, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery landscape
```

**#11 · door-tachi.png** (red — The Striking Mind)
```
A traditional Japanese sliding shoji door panel, slightly ajar, soft warm red-amber glow emanating from within, dark wooden frame, hand-painted watercolour style, Studio Ghibli, mysterious intense light, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery landscape
```

---

## BATCH 3 — Element Icons (5 assets)

Used on the BreathHome diamond layout (Mushin) and throughout element-themed sessions. Currently SVG — replacing with painted versions.

| # | Filename | Format | AR | BG | Post-Processing |
|---|----------|--------|----|----|-----------------|
| 12 | `icon-kaze.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 13 | `icon-chi.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 14 | `icon-mizu.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 15 | `icon-hi.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 16 | `icon-shiho.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |

### Prompts:

**#12 · icon-kaze.png** (Wind — pale blue)
```
A simple hand-painted symbol of wind, gentle flowing curved lines suggesting a breeze, pale blue-white colour, watercolour brush strokes, Studio Ghibli style, delicate, minimal, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

**#13 · icon-chi.png** (Earth — amber gold)
```
A simple hand-painted symbol of earth, a small triangular mountain shape with gentle curves, warm amber-gold colour, watercolour brush strokes, Studio Ghibli style, grounded, minimal, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

**#14 · icon-mizu.png** (Water — deep blue)
```
A simple hand-painted symbol of water, a single flowing water droplet with gentle ripple lines, deep blue colour, watercolour brush strokes, Studio Ghibli style, still, minimal, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

**#15 · icon-hi.png** (Fire — orange)
```
A simple hand-painted symbol of fire, a single gentle flame shape, warm orange colour, watercolour brush strokes, Studio Ghibli style, warm, minimal, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

**#16 · icon-shiho.png** (Box breathing — centre/white-gold)
```
A simple hand-painted symbol of a square, four gentle brushstroke lines forming an open square shape, warm white-gold colour, watercolour brush strokes, Studio Ghibli style, balanced, minimal, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

---

## BATCH 4 — Check-In State Icons (4 assets)

Used on the Check-In screen where students identify their mental state before a Mushin session.

| # | Filename | Format | AR | BG | Post-Processing |
|---|----------|--------|----|----|-----------------|
| 17 | `state-stormy.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 18 | `state-flat.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 19 | `state-scattered.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 20 | `state-clear.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |

### Prompts:

**#17 · state-stormy.png** (Restless, busy — blue)
```
A hand-painted watercolour cloud with swirling wind lines, stormy blue-grey colour, restless energy, Studio Ghibli style, expressive brush strokes, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

**#18 · state-flat.png** (Low energy, heavy — red)
```
A hand-painted watercolour stone sitting still on the ground, muted warm red-brown colour, heavy and low, Studio Ghibli style, gentle brush strokes, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

**#19 · state-scattered.png** (Distracted, unfocused — amber)
```
A hand-painted watercolour of several small leaves scattered in different directions, warm amber-gold colour, drifting apart, Studio Ghibli style, loose brush strokes, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

**#20 · state-clear.png** (Calm, ready — green)
```
A hand-painted watercolour of a single still water surface with one gentle ripple, soft green-jade colour, serene and clear, Studio Ghibli style, minimal brush strokes, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

---

## BATCH 5 — Discipline Hub Motifs (2 assets)

Signature visual elements for the Metsuke and Tachi hub screens.

| # | Filename | Format | AR | BG | Post-Processing |
|---|----------|--------|----|----|-----------------|
| 21 | `motif-metsuke.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 22 | `motif-tachi.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |

### Prompts:

**#21 · motif-metsuke.png** (The Reading Mind — perception, the gaze)
```
A hand-painted watercolour of an ancient Japanese scroll partially unrolled, soft cool blue tones, wisdom and perception, Studio Ghibli style, delicate brush strokes, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text characters
```

**#22 · motif-tachi.png** (The Striking Mind — strategy, decisive action)
```
A hand-painted watercolour of a single Japanese wooden bokken practice sword resting diagonally, warm red-amber tones, decisive and strong, Studio Ghibli style, bold brush strokes, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text characters
```

---

## BATCH 6 — Decorative & UI Elements (4 assets)

Small atmospheric touches that elevate every screen.

| # | Filename | Format | AR | BG | Post-Processing |
|---|----------|--------|----|----|-----------------|
| 23 | `deco-embers.png` | PNG | 16:9 | Black → remove | Smart Select embers → Erase BG |
| 24 | `deco-incense.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |
| 25 | `deco-hanging-scroll.png` | PNG | 3:4 | White → remove | Smart Select → Erase BG |
| 26 | `deco-bonsai.png` | PNG | 1:1 | White → remove | Smart Select → Erase BG |

### Prompts:

**#23 · deco-embers.png** (floating particles overlay)
```
Tiny glowing amber embers and particles floating gently upward against a pure black background, scattered randomly, warm orange-gold specks of light, hand-painted watercolour style, Studio Ghibli, no other elements --ar 16:9 --s 750 --style raw --no text watermark scenery
```

**#24 · deco-incense.png** (atmospheric prop)
```
A single Japanese incense holder with a thin wisp of smoke rising gently, dark ceramic on wooden base, hand-painted watercolour style, Studio Ghibli, warm tones, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

**#25 · deco-hanging-scroll.png** (wall decoration for dojo)
```
A traditional Japanese hanging scroll kakemono with an abstract brushstroke circle ensō painted on it, dark ink on cream paper, wooden roller at bottom, hand-painted watercolour style, Studio Ghibli, white background, centred composition --ar 3:4 --s 750 --style raw --no background scenery text
```

**#26 · deco-bonsai.png** (atmospheric prop)
```
A small Japanese bonsai tree in a dark ceramic pot, delicate branches with tiny green leaves, hand-painted watercolour style, Studio Ghibli, gentle and aged, white background, centred composition --ar 1:1 --s 750 --style raw --no background scenery text
```

---

## Generation Order (optimised for speed)

Work through batches in this order. Each batch uses the same aspect ratio and settings so you can stay in flow without changing config.

### Round 1 — All 1:1 white background assets (15 prompts)
Set: `Square` aspect ratio in settings. These all get the same post-processing.

```
#9   door-mushin.png
#10  door-metsuke.png
#11  door-tachi.png
#12  icon-kaze.png
#13  icon-chi.png
#14  icon-mizu.png
#15  icon-hi.png
#16  icon-shiho.png
#17  state-stormy.png
#18  state-flat.png
#19  state-scattered.png
#20  state-clear.png
#21  motif-metsuke.png
#22  motif-tachi.png
#24  deco-incense.png
#26  deco-bonsai.png
```

### Round 2 — All 16:9 landscape assets (3 prompts)
Set: `Landscape` aspect ratio in settings.

```
#6   L6-paper-texture.jpg
#7   L0-sky-warm.jpg
#8   L0-sky-cool.jpg
#23  deco-embers.png
```

### Round 3 — Special aspect ratios (1 prompt)
Set: Portrait / custom 3:4.

```
#25  deco-hanging-scroll.png
```

---

## Post-Processing Checklist

After all generations are done, open each in the Editor:

**For every 1:1 white background asset:**
1. Open in Editor
2. Smart Select the subject
3. Erase Background
4. Download Image (saves as transparent PNG)
5. Rename to the exact filename from this list

**For #23 deco-embers.png (black background):**
1. Open in Editor
2. Smart Select the bright embers/particles
3. Erase Background (removes the black, keeps the glowing specks)
4. Download Image

**For JPG assets (#6, #7, #8):**
1. Download directly — no editor step needed
2. Rename to exact filename

---

## Upload Folder Structure

When uploading to the project, place files here:

```
student/assets/
├── environment/          ← Backgrounds & layers
│   ├── L0-sky.jpg          (have)
│   ├── L0-sky-warm.jpg     (new)
│   ├── L0-sky-cool.jpg     (new)
│   ├── L2-village.png       (have)
│   ├── L3-dojo-frame.png   (rename from L3-shoji.png)
│   ├── L4-floor.jpg         (have)
│   ├── L5-lantern.png       (have)
│   └── L6-paper-texture.jpg (new)
├── doors/                ← Discipline entry doors
│   ├── door-mushin.png
│   ├── door-metsuke.png
│   └── door-tachi.png
├── icons/                ← Element & discipline icons
│   ├── icon-kaze.png
│   ├── icon-chi.png
│   ├── icon-mizu.png
│   ├── icon-hi.png
│   ├── icon-shiho.png
│   ├── motif-metsuke.png
│   └── motif-tachi.png
├── states/               ← Check-in mental state icons
│   ├── state-stormy.png
│   ├── state-flat.png
│   ├── state-scattered.png
│   └── state-clear.png
└── decorative/           ← Atmospheric props & overlays
    ├── deco-embers.png
    ├── deco-incense.png
    ├── deco-hanging-scroll.png
    └── deco-bonsai.png
```

---

## Total Count

| Category | New | Have | Total |
|----------|-----|------|-------|
| Environment layers | 3 | 5 | 8 |
| Discipline doors | 3 | 0 | 3 |
| Element icons | 5 | 0 | 5 |
| Check-in states | 4 | 0 | 4 |
| Discipline motifs | 2 | 0 | 2 |
| Decorative props | 4 | 0 | 4 |
| **TOTAL** | **21** | **5** | **26** |

---

*Asset Generation Checklist v1.0 · Nendō · March 2026*
