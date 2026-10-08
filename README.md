# schemas-atos

Des skills pour que n'importe quel LLM produise des schémas et des
diapositives **au rendu Atos**, identiques d'une personne à l'autre.

Les règles pour les agents sont dans [AGENTS.md](AGENTS.md). Ce fichier-ci
explique comment installer.

## Contenu

| Dossier | Rôle |
| --- | --- |
| `skills/atos-charte-schemas/` | Règles graphiques des schémas (formats A4, typo, couleurs, composants, flèches) |
| `skills/atos-marque/` | Identité Atos tirée du brandbook 2026 (couleurs, contrastes, Curves of Progress, logo, diapositives) |
| `skills/figma-creer-schema/` | Méthode pas à pas pour construire un schéma dans Figma par MCP, avec les pièges vérifiés |
| `skills/controle-schema/` | Audit automatique d'un cadre (`audit.js`) et relecture avant livraison |
| `scripts/installer.sh` | Expose les skills aux outils et prépare les archives Claude.ai |

## Installer

Prérequis communs :

- un compte Figma **Atos** avec accès en édition au fichier
  « Schémas Cédric – IA MCPS & UO-PIL » ;
- la librairie « Design system » activée dans ce fichier ;
- la police Raleway installée.

Puis, une fois :

```bash
./scripts/installer.sh
```

### Claude Code

Ouvrir le dossier dans un terminal et lancer `claude`. Il lit `CLAUDE.md`,
trouve les skills dans `.claude/skills/` et le serveur MCP de Figma dans
`.mcp.json` (première connexion : `/mcp` pour s'authentifier).

### GitHub Copilot dans VS Code

Ouvrir le dossier dans VS Code. Copilot lit
`.github/copilot-instructions.md` et les skills de `.github/skills/` ; le
serveur MCP de Figma est déclaré dans `.vscode/mcp.json` (le démarrer depuis
ce fichier).

### Claude.ai ou Claude Desktop

Paramètres, Capacités, Skills : importer chaque archive de `dist/`. Le
serveur MCP de Figma s'ajoute dans les connecteurs.

## Premier message à donner à l'agent

> Tu travailles sur les schémas Atos. Lis AGENTS.md, puis la skill qui
> correspond à ma demande. Dans Figma, lis d'abord les pages « Règles &
> méthode » et « Reprise & compte rendu ». Montre-moi une capture avant de
> continuer.

## Faire évoluer

Une règle change : modifier la skill concernée **et** la page Figma
« Règles & méthode » dans la même session, puis relancer
`./scripts/installer.sh`.
