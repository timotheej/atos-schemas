---
name: figma-creer-schema
description: Méthode pas à pas pour construire ou modifier un schéma Atos dans Figma avec le serveur MCP de Figma (use_figma, get_metadata, get_screenshot, search_design_system). À utiliser dès qu'un agent doit écrire dans le fichier des schémas.
---

# Construire un schéma dans Figma par MCP

Lire d'abord `atos-charte-schemas` (et `atos-marque` pour une diapositive).

## 0. Prérequis

- Serveur MCP de Figma connecté (`https://mcp.figma.com/mcp`), avec un compte
  Figma **Atos** ayant le droit d'édition sur le fichier. Un compte personnel
  n'a qu'un accès en lecture et le MCP refuse alors toute lecture.
- Fichier : clé `H5ceel5Su6KVtwpSFinpUI`.
- Police Raleway installée sur le poste.
- Avant le premier `use_figma`, charger la compétence Figma `figma-use`
  (ressource `skill://figma/figma-use/SKILL.md`) et respecter ses règles.

## 1. Lire avant d'écrire

1. `get_metadata` sans nœud : liste des pages.
2. Lire en entier, par `use_figma` en lecture seule, les textes des pages
   « Règles & méthode » et « Reprise & compte rendu » : décisions prises,
   points ouverts, pièges.
3. Lire la page « Composants » : propriétés exactes de chaque composant
   (`componentPropertyDefinitions`).
4. Repérer le cadre existant le plus proche du schéma voulu.

## 2. Partir de l'existant

- **Cloner** le cadre le plus proche (`node.clone()`), puis le restructurer :
  liaisons de variables, styles de texte, exports et calque `_legende` sont
  conservés. Partir de zéro oblige à tout relier à la main.
- Placer le nouveau cadre sur une rangée libre de la page, sans chevaucher
  les autres.
- Nommer le cadre selon la charte : « Code – Titre, A4 paysage ».

## 3. Variables et styles

- Les retrouver par `search_design_system`, en filtrant sur la librairie
  « Design system », puis `figma.variables.importVariableByKeyAsync(clé)`.
- Clés déjà utilisées :

| Variable | Clé |
| --- | --- |
| `gap/xs` (8) | `2bd19f991d5f8231e3102da370853d55dcc4c606` |
| `gap/xl` (24) | `91111254af0a1ae5d17f0aa1716b52d6a792545f` |
| `padding/xl` (24) | `5cb8c978b111dfa83ebf5208446045a53971e2a6` |
| `padding/lg` | `359a894da16abe0d970bc12e98f9d5777e89647b` |
| `padding/sm` | `4b906c4bfb75a9b807728b967d85167e8d46b2f4` |

- Le plus sûr reste de lire la variable déjà liée à un nœud voisin
  (`node.boundVariables`) et de la réutiliser.
- Lier, ne jamais recopier : `setBoundVariable('itemSpacing', variable)`,
  `textStyleId` pour le texte.

## 4. Construire

- Une section à la fois, avec une capture après chaque étape importante.
- Auto-layout partout ; seules les flèches et les repères sont en position
  absolue.
- Charger la police de chaque texte (`figma.loadFontAsync(t.fontName)`)
  avant d'en changer le contenu ou le dimensionnement.
- Flèches : vecteurs tracés après la mise en page, à partir des positions
  réelles des cartes (`absoluteBoundingBox` moins celle du cadre), par
  `setVectorNetworkAsync`, en reprenant la terminaison du premier et du
  dernier sommet de la flèche d'origine (`ARROW_LINES` en fin). Passer les
  repères au premier plan après les flèches.

## 5. Pièges vérifiés

- `get_screenshot` peut montrer un rendu **périmé**, ou paraître réduit :
  contrôler la géométrie réelle par `use_figma` avant de corriger.
- Une erreur dans un script `use_figma` annule tout le script : rien n'est
  écrit, on peut relancer.
- Supprimer un cadre supprime les instances qu'il contient : déplacer
  d'abord ce qu'on veut garder.
- Un nœud déplacé à l'intérieur d'un variant **cloné** perd ses liens de
  propriété : les reposer par `componentPropertyReferences`.
- Changer le variant d'une instance peut réinitialiser ses textes :
  réappliquer ses propriétés (`setProperties`) depuis l'original.
- Une instance déjà posée qui active un calque ajouté au composant peut
  garder son ancienne hauteur : recréer l'instance.
- `.textProp()` de `$fig` échoue sur un nœud ajouté à un composant
  existant : `addComponentProperty`, puis `componentPropertyReferences`.
- Un trait sur un seul côté compte dans la hauteur en auto-layout :
  `strokesIncludedInLayout = false`.
- Une instance d'icône garde 32 px : la redimensionner, et ne recolorer que
  ses vecteurs remplis.
- Un texte en auto-layout horizontal peut se couper au milieu d'un mot :
  mesurer le mot le plus long sur un clone en `WIDTH_AND_HEIGHT`, puis
  dimensionner la colonne.

## 6. Finir

1. Lancer la skill `controle-schema` sur le cadre.
2. Capture finale à la taille réelle du cadre, montrée à Timothée.
3. Après validation : remplir `_legende`, ajouter le texte alternatif et le
   cadre livré à la page « Reprise & compte rendu ».
