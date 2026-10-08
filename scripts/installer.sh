#!/usr/bin/env bash
# Expose les skills de skills/ à Claude Code et à Copilot, et prépare les archives pour Claude.ai.
set -euo pipefail
cd "$(dirname "$0")/.."

for outil in .claude .github; do
  mkdir -p "$outil/skills"
  for s in skills/*/; do
    nom=$(basename "$s")
    ln -sfn "../../skills/$nom" "$outil/skills/$nom"
  done
done

mkdir -p dist
for s in skills/*/; do
  nom=$(basename "$s")
  rm -f "dist/$nom.zip"
  (cd skills && zip -qr "../dist/$nom.zip" "$nom")
done

echo "Skills liées dans .claude/skills et .github/skills ; archives Claude.ai dans dist/."
