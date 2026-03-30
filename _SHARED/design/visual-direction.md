# Creative Services — Visual Direction
# Nendō · Student-Facing Experience

> **Department:** Creative Design + Ergonomics
> **Owner:** Hazza (Design Lead)
> **Version:** 1.0 · March 2026
> **Status:** Active — informs all Nendō visual and prototype work

---

## What This Document Is

This is the creative north star for the Nendō's visual identity. It defines the emotional target, atmospheric principles, and the layered process for taking screens from functional UI to finished, living product.

Every prototype, every component, and every animation decision in the Nendō should be checked against this document. If a visual choice doesn't serve the direction described here, it needs justification.

This document does **not** override the Working Doc, the non-negotiable rules, or any schema decisions. It sits alongside them — it governs how things feel, not what they do.

---

## The Emotional Target

**Reference:** Studio Ghibli calm — warm, organic, hand-crafted. Gentle particle effects like embers or fireflies. Soft glows. A space that feels like a forest clearing at dusk, not a tech product.

**What this means in practice:**

The Nendō should feel like a place the student steps into — not a screen they tap through. Every visual layer should reinforce the sense that this environment is alive, breathing, and aware of the student. It is calm but never empty. Still but never static. Dark but never cold.

**What it is not:**

- Not flashy, not gamified-looking, not dopamine-engineered
- Not sterile minimalism — there must be warmth and texture
- Not busy or cluttered — every visual element earns its place
- Not cool/techy — this is wood and flame and candlelight, not glass and neon

---

## The Five Visual Layers

The Nendō moves from functional UI to living product through five progressive layers. Each builds on the last. No layer should be attempted before the one beneath it is solid.

### Layer 1 — Structural UI

**What it is:** Layout, navigation, colour tokens, typography, component hierarchy.

**Current status:** Largely complete. The dark canvas (#0A0A12), three-discipline card system, Cinzel/Crimson Pro typography, and landscape-only constraint are established and working.

**Standard:**
- Background: #0A0A12 (student-facing dark)
- Primary text: #F5F0E8
- Secondary text: rgba(245,240,232, 0.35–0.5)
- Borders: rgba(245,240,232, 0.07)
- Discipline colours: Metsuke #8DB8D4 (blue), Tachi #D4826A (red), Mushin #7AB89A (green)
- Element colours: Kaze #8DB8D4, Chi #C8A46A, Mizu #6A9CC8, Hi #D4826A
- Typography: Cinzel (titles, kanji, ceremony) + Crimson Pro (body, description)
- Layout: landscape-only, fixed full-screen shells

This layer is the blueprint. It is correct, functional, and navigable. But it does not yet feel like a place.

---

### Layer 2 — Environmental Atmosphere

**What it is:** The layer that turns a dark background into a living space. Depth, warmth, ambient light, texture, environmental particles.

**Principles:**

1. **Ambient light source.** The background should carry a very subtle warm gradient — not flat black, but a suggestion of warmth rising from below, like embers beneath wooden floors. This gradient should be barely perceptible (3–5% opacity shift) but present.

2. **Organic texture.** Behind panels and cards, a faint texture layer (paper grain, brushstroke noise, or wood grain) at 2–4% opacity. Enough to feel handcrafted. Not enough to distract.

3. **Environmental particles.** Tiny floating elements (ember-like dots, 1–2px) drifting slowly upward at breathing pace. Barely visible. Not decorative — ambient. Think fireflies at the edge of vision, not confetti. Rendered on canvas behind all UI elements.

4. **Depth cues.** Cards and interactive elements should feel like they float slightly above the environment — achieved through very subtle shadow (not drop-shadow, but a soft rgba glow beneath) and a barely-there parallax response on hover/focus.

**Per-discipline atmosphere:**

| Context | Ambient shift |
|---------|--------------|
| **Nendō hub** | Neutral warm — embers, low warmth, balanced |
| **Metsuke screens** | Cooler — particles drift more laterally, blue-tinted ambient glow |
| **Tachi screens** | Warmer — particles brighter, subtle red/amber ambient warmth |
| **Mushin screens** | Deepest calm — particles slowest, green-tinted, softest glow |

The atmosphere should shift gradually as the student moves between disciplines — not a hard cut, but a slow cross-fade that takes 600–800ms.

---

### Layer 3 — Responsive Motion

**What it is:** Animations and transitions that feel organic rather than mechanical. Motion that responds to meaning, not just state changes.

**Principles:**

1. **Organic easing.** Replace linear and standard ease curves with custom cubic-bezier that has slow starts and soft overshoots. Elements should arrive like a leaf settling on water — not snap into place.

   Recommended base curve: `cubic-bezier(0.22, 0.61, 0.36, 1)` (ease-out with gentle deceleration)
   Recommended entrance curve: `cubic-bezier(0.16, 1, 0.3, 1)` (slight overshoot, natural settle)

2. **Breathing-synced motion.** The base animation cycle for ambient elements (particles, glows, pulses) should use 4-second periods — matching a calm breathing rhythm. This creates a subliminal sense of the environment being alive.

3. **Context-aware motion.** Ambient particle speed should respond to the current discipline and activity:
   - Entering Mushin practice → particles slow to near-stillness
   - Fire element session (Hi) → particles drift faster, warmer colour
   - Completing a challenge → brief, subtle celebration (aura pulse, particles brighten momentarily)

4. **Screen transitions.** Screens should not just fade — they should breathe in. A new screen enters with a gentle opacity + translateY(4px) over 400ms, while the background atmosphere cross-fades to the new context.

5. **No animation for animation's sake.** Every moving element must serve the experience. If removing an animation makes the experience worse, it stays. If removing it makes no difference, it goes.

---

### Layer 4 — Progression Feedback

**What it is:** The visual layer that makes growth tangible. How the Aura system, stage advancement, and discipline progress feel to the student.

**Principles:**

1. **The aura is alive.** A student's aura colour should not be a static badge. It should gently pulse behind their avatar — softly in early stages, with growing confidence as they advance. The pulse rhythm matches the breathing cycle (4 seconds).

2. **Stage transitions feel like sunrise.** When a student crosses an aura stage threshold, the transition should be a slow, satisfying colour wash (1.5–2 seconds) — not a sudden swap. The environment should briefly acknowledge it: particles brighten, ambient warmth deepens for a moment.

3. **Discipline progress is visible.** Each discipline (Metsuke, Tachi, Mushin) should have a progress indicator that fills with its discipline colour. The fill should animate smoothly, and reaching a milestone should trigger a subtle glow expansion.

4. **The Aura colour palette (13 stages) is defined in the Working Doc (Section 4.2).** Visual implementation must follow those hex values exactly. The hybrid mechanic (Section 4.3) determines how discipline balance shifts the aura hue from Phase 3 onwards.

5. **Rewards are earned, never cheap.** No confetti, no star bursts, no slot-machine dopamine hits. Progression feedback should feel like a candle flame growing — dignified, warm, and real. This is the core philosophical commitment: growth that makes distraction lose its grip.

---

### Layer 5 — Polish and Soul

**What it is:** The final pass. The details that make someone say "this feels special." Applied last, only after Layers 1–4 are solid.

**Principles:**

1. **The room breathes.** When the breathing circle inhales during Mushin practice, the entire screen should brighten by 1–2% and the ambient particles should slow momentarily. The environment responds to the student's breath.

2. **Sound design (future).** Optional ambient tones — wind for Kaze sessions, water for Mizu, crackling for Hi, earth hum for Chi. Not music. Atmosphere. This is a future layer — do not implement before the visual layers are complete.

3. **Loading as ritual.** Loading states should not feel like waiting. A slow, intentional fade with the discipline's kanji appearing in large semi-transparent form, then settling into the screen. The student is not waiting for a page to load — they are entering a space.

4. **Elemental territory hints.** The design brief describes Stage 3 elemental territories (air mountains, fire volcanoes, water coastlines, earth forests). While those are future scope, the atmospheric shifts in Layer 2 should plant the seeds — the Kaze element should carry a faint sense of height and openness, Hi should carry volcanic warmth. These seeds grow into the full territories later.

5. **Touch feedback.** Interactive elements should respond with a brief, soft glow on the discipline colour when tapped — not a hard highlight, but a warm acknowledgement. 150ms duration, 30% opacity pulse.

---

## What This Means for Prototypes

All new Nendō prototypes should target **Layer 2 minimum.** The structural UI (Layer 1) is established. From this point forward, no prototype should ship as flat cards on a flat dark background.

The atmospheric layer (canvas particles, ambient gradient, texture) should be included in every new prototype as baseline.

Layer 3 (responsive motion) should be included where the prototype involves transitions or interactive elements.

Layers 4 and 5 are applied to specific features (aura display, breathing practice) as they are built.

---

## Relationship to Other Documents

| Document | How it relates |
|----------|---------------|
| **CLAUDE.md** | Operating rules. Visual direction never overrides non-negotiable rules. |
| **Nendō Working Doc v1.1** | Source of truth for system decisions (aura stages, discipline specs, progression). Visual direction governs *how* those decisions look and feel. |
| **Frontend Design Skill** | Build-level instructions for prototypes. This document informs the "why" — the skill handles the "how." |
| **Design Brief (Stages 1–3 PDF)** | The original vision document. This visual direction is the operational translation of that brief's emotional ambition into implementable creative principles. |

---

## Process for Visual Work

1. **Read this document** before starting any Nendō visual work.
2. **Check the Working Doc** for current system decisions and pending decisions that affect visual output.
3. **Build atmosphere first.** Start every screen with the environmental layer, not the content. The space comes before the furniture.
4. **Test at target resolution.** All Nendō screens are landscape-only. Test on phone landscape (approx 844 x 390) and tablet landscape (approx 1194 x 834).
5. **Review against the emotional target.** After building, ask: does this feel like a place the student steps into? Is it warm? Is it alive? Is it calm? If not, the atmosphere layer needs more work.

---

*Creative Services — Visual Direction v1.0 · March 2026 · Creative Design + Ergonomics*
