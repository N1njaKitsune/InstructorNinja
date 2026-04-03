# StudentNinja — Prototype Manifest

**Last updated:** 2026-04-02 (BreathEngine v2.2–v2.6 build run)
**Root authority:** This file lists all current prototypes. If it's not listed here, it's archived or experimental.

---

## Current Prototypes

These are the latest working versions. Open these for review or development.

| Screen | File | Version | State |
|--------|------|---------|-------|
| Student Profile | `StudentProfile_v4.1.html` | v4.1 | 🔵 Phase 2 |
| Nendo Home | `Nendo_Home_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Metsuke Hub | `Nendo_MetsukeHub_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Mushin Hub | `Nendo_MushinHub_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Tachi Hub | `Nendo_TachiHub_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Shiho (Mood Check-In) | `Nendo_Shiho_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Breath Techniques | `Nendo_BreathTechniques_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Runner — Kaze (Wind) | `Nendo_Runner_Kaze_v4.1.html` | v4.1 | 🔵 Phase 2 |
| Runner — Chi (Earth) | `Nendo_Runner_Chi_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Runner — Mizu (Water) | `Nendo_Runner_Mizu_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Runner — Hi (Fire) | `Nendo_Runner_Hi_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Session Complete | `Nendo_SessionComplete_v4.0.html` | v4.0 | 🔵 Phase 2 |
| Nendo Entry (Painted) | `Nendo_Entry_v4.0_PaintedLayers.html` | v4.0 | 🔵 Phase 2 |
| Breath Engine | `BreathEngine_v2.6.html` | v2.6 | 🔵 Phase 2 |
| Breath Engine (superseded) | `BreathEngine_v2.5.html` | v2.5 | superseded by v2.6 |
| Breath Engine (superseded) | `BreathEngine_v2.4.html` | v2.4 | superseded by v2.5 |
| Breath Engine (superseded) | `BreathEngine_v2.3.html` | v2.3 | superseded by v2.4 |
| Breath Engine (superseded) | `BreathEngine_v2.2.html` | v2.2 | superseded by v2.3 |
| Breath Engine (superseded) | `BreathEngine_v2.1.html` | v2.1 | superseded by v2.2 |

## Components (`Components/`)

Reusable building blocks. These are reference implementations, not screens.

| Component | File | Version |
|-----------|------|---------|
| Aura Orb | `Components/AuraOrb_v1.0.html` | v1.0 |
| Mood Check-In | `Components/CheckInMood_v1.0.html` | v1.0 |
| Nav Shell | `Components/NavShell_v1.0.html` | v1.0 |
| Particle System | `Components/ParticleSystem_v1.0.html` | v1.0 |
| Screen Template | `Components/ScreenTemplate_v1.0.html` | v1.0 |
| Shiho Breathing | `Components/ShihoBreathing_v1.0.html` | v1.0 |

## Explorations (`Explorations/`)

Experimental prototypes. Not promoted to current — kept for reference.

| Exploration | File |
|-------------|------|
| Mushin Line | `Explorations/MushinLine_Exploration_v1.0.html` |
| Student Profile | `Explorations/StudentProfile_Exploration_v1.0.html` |

## Lifecycle Rules

1. When a new version is created (e.g., v4.1 → v4.2), the old version moves to `_archive/`.
2. Update this manifest in the same session.
3. Only files listed here are considered current.
4. `_archive/` is for superseded versions. `_backups/` is for session-specific recovery snapshots.
5. Files in `_archive/` older than 2 major versions may be deleted in a maintenance pass.
