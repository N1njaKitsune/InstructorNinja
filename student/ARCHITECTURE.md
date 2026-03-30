# StudentNinja — Architecture

## Overview
The student section is the Nendō curriculum interface. Students access it to train
Attention & Intention (NEN) skills across three disciplines: Metsuke, Tachi, and Mushin.
Progress is tracked via the Aura system and reflected in the Student Profile.

## Sections
- **Entry / Onboarding** — First run and returning entry screens
- **Home Hub** — Navigation centre for the three disciplines
- **Metsuke Hub** — The Reading Mind (perception, comprehension, pattern recognition)
- **Tachi Hub** — The Striking Mind (strategy, speed, decision-making)
- **Mushin Practice** — The Still Mind (focus, regulation, breathing)
- **Check-In** — Mood and state capture before sessions
- **Breath / Shiho** — Breathing exercise screens
- **Aura Progression** — 13-stage visual progress system
- **Student Profile** — Aggregated student data, belt level, Aura display

## Key Prototype Files
| File | Description |
|------|-------------|
| Nendo_Home_v3.0.html | Latest home hub |
| Nendo_Entry_v4.0_PaintedLayers.html | Latest entry screen |
| Nendo_MetsukeHub_v3.0.html | Latest Metsuke hub |
| Nendo_TachiHub_v3.0.html | Latest Tachi hub |
| Nendo_MushinPractice_v1.0.html | Mushin practice |
| StudentProfile_v3.4.html | Latest student profile |
| Nendo_AuraProgression_v1.0.html | Aura system |

## Cross-Section Connections
- Instructor grades → updates Student Profile belt/aura data
- Student progress data → visible to Parent section
- See `../_SHARED/integration/` for data flow specs
