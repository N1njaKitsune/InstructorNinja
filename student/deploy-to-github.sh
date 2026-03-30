#!/bin/bash
# Deploy Nendō prototype to GitHub Pages
# Run this from Terminal: bash ~/Documents/Claude/Ninja\ App/student/deploy-to-github.sh

set -e

REPO_DIR="/tmp/Nendo-deploy"
PROTOTYPE="$HOME/Documents/Claude/Ninja App/student/prototypes/PaintingExploration.html"

echo "🥷 Nendō — Deploy to GitHub Pages"
echo "========================================="

# Clean previous deploy folder if exists
rm -rf "$REPO_DIR"

# Clone the repo
echo "📥 Cloning repo..."
git clone https://github.com/N1njaKitsune/Nendo.git "$REPO_DIR"
cd "$REPO_DIR"

# Replace index.html with our prototype
echo "📄 Replacing index.html with updated prototype..."
cp "$PROTOTYPE" "$REPO_DIR/index.html"

# Stage, commit, push
echo "🚀 Pushing to GitHub..."
git add -A
git commit -m "Update Nendō prototype — dual-state breathing techniques

- Breathing practice now happens within element pages (no separate runner)
- Begin/Cancel share one button position
- Technique detail card below technique list
- Back button goes directly to Hub from element pages
- 4 elements: Kaze, Chi, Mizu, Hi with full technique data
- Progress tracker with 2 cycles × 7 breaths
- All 7 paintings embedded as base64 WebP

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"

git push origin main

echo ""
echo "✅ Done! Your prototype is live at:"
echo "   https://n1njakitsune.github.io/Nendo/"
echo ""
echo "   (GitHub Pages may take 1-2 minutes to update)"
