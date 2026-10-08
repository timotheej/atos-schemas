---
name: controle-schema
description: Contrôle avant livraison d'un schéma Atos dans Figma. Lance un audit automatique en lecture seule (format A4, débordements, tailles de texte, styles, couleurs et espacements non liés, coins arrondis, exports, calque _legende), puis une relecture visuelle. À utiliser avant de montrer ou d'envoyer un schéma.
---

# Contrôler un schéma avant livraison

## 1. Audit automatique

1. Lire [audit.js](audit.js).
2. Remplacer `'CADRE_ID'` par l'identifiant du cadre (ex. `'47:719'`).
3. Exécuter le script tel quel par `use_figma` sur le fichier
   `H5ceel5Su6KVtwpSFinpUI`. Il ne modifie rien.
4. Lire le rapport :

| Gravité | Sens | Exemple |
| --- | --- | --- |
| bloquant | ne pas livrer | cadre hors format A4, nœud qui sort du cadre, texte sous 16 px |
| majeur | à corriger | texte sans style, couleur ou espacement non lié, coin arrondi, instance détachée |
| mineur | à compléter | export manquant, `_legende` vide |
| info | exception connue | mention de statut en italique de la Carte |

Pour corriger un espacement non lié : lier la variable de même valeur dans
`2c. semantic.layout` (4 : `padding/2xs` ou `gap/2xs` ; 8 : `padding/xs` ou
`gap/xs` ; 12 : `padding/sm` ou `gap/sm` ; 24 : `padding/xl` ou `gap/xl` ;
32 : `padding/2xl`). Si aucune variable n'a la valeur, ne pas en inventer :
changer la valeur pour un palier existant, ou demander.

## 2. Relecture visuelle

Capture du cadre à sa taille réelle (`get_screenshot`, `maxDimension` égal au
plus grand côté), puis vérifier à l'œil ce que le script ne voit pas :

- aucun mot coupé en fin de ligne, aucun texte tronqué ;
- flèches dans des couloirs libres, pointes avant les cartes, repères
  lisibles au-dessus des traits ;
- marge basse visible, rien de collé au bord ;
- une couleur garde un seul sens ; la légende explique chaque badge,
  pictogramme et repère ;
- contenu fidèle au document source, « À confirmer » sur toute supposition.

Si la capture semble incohérente avec le script, elle est sans doute
périmée : relancer la capture plutôt que de corriger.

## 3. Rendre compte

Donner à Timothée : le nom du cadre, le nombre de constats par gravité, ce
qui a été corrigé, et ce qui reste à trancher. Ne pas déclarer un schéma
prêt tant qu'il reste un constat bloquant ou majeur.
