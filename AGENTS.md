# Schémas Atos : instructions pour tout agent

Ce dépôt donne à un LLM (Claude Code, GitHub Copilot, Claude.ai) ce qu'il faut
pour produire des schémas, infographies et diapositives **au rendu Atos**,
identiques quelle que soit la personne qui les lance.

Il ne contient pas les schémas eux-mêmes : ils vivent dans Figma.

| Ressource | Où |
| --- | --- |
| Fichier des schémas | Figma « Schémas Cédric – IA MCPS & UO-PIL », clé `H5ceel5Su6KVtwpSFinpUI` |
| Charte (variables, styles, icônes) | **Locale au fichier des schémas** depuis le 8 octobre 2026 : collections « Schémas · Couleurs », « Schémas · Typographie », « Schémas · Mise en page », recopiées de la librairie « Design system » (Atos), qui n'est plus utilisée |
| Charte de marque | Brandbook Atos 2026 (PDF du 2 mars 2026), à demander à Timothée, pas versionné ici |

## Les skills

Lire la skill qui correspond à la tâche **avant** d'agir :

| Skill | Quand |
| --- | --- |
| `atos-charte-schemas` | Toute création ou modification d'un schéma : formats, typographie, couleurs, composants, flèches |
| `atos-marque` | Diapositive, couverture, infographie, tout support « vitrine » ; choix de couleurs pleines, Curves of Progress, logo |
| `figma-creer-schema` | Construire un schéma dans Figma par le serveur MCP, pas à pas |
| `controle-schema` | Auditer un cadre avant de le livrer |

## Règles qui ne se discutent pas

1. **Aucune valeur inventée.** Couleur, taille, espacement, rayon, épaisseur :
   une variable ou un style **local** du fichier des schémas, lié et jamais
   recopié. Si la valeur voulue n'existe pas, s'arrêter et demander. Une
   variable ajoutée doit citer sa source dans sa description (librairie
   « Design system » ou brandbook, avec la page).
2. **Ne jamais toucher à la librairie « Design system »**, ni à son dépôt de
   code (`codeconnect`), et ne pas la réactiver dans le fichier des schémas :
   le fichier est indépendant.
3. **Un schéma à la fois** : construire, capturer, faire valider par
   Timothée, puis passer au suivant.
4. **Formats A4** : paysage 1400 × 990, portrait 900 × 1273. On simplifie un
   schéma qui déborde, on n'agrandit jamais le cadre.
5. **Après chaque livraison**, mettre à jour la page « Reprise & compte
   rendu » du fichier Figma.

## Écriture en français

- Phrases courtes, vocabulaire du document source, pas de jargon non défini.
- Jamais de tiret long ni de tiret demi-cadratin dans un texte : virgule,
  deux-points, parenthèses, ou deux phrases. Le trait d'union des mots
  composés reste normal. Seule exception : les noms de cadres et de pages
  Figma existants, cités tels quels.
- Majuscule en début de libellé seulement.

## Maintenir ce dépôt

Les skills sont la source des règles. La page Figma « Règles & méthode » en
est la version lisible dans le fichier : quand une règle change, modifier la
skill **et** la page, dans la même session.
