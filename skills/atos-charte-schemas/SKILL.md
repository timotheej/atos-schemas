---
name: atos-charte-schemas
description: Règles graphiques des schémas Atos (frises, tableaux, organigrammes, matrices risques et mesures) produits dans Figma avec la librairie « Design system ». À lire avant de créer, modifier ou relire un schéma : formats A4, typographie, couleurs, espacements, composants, flèches, structure d'un cadre.
---

# Charte des schémas Atos

Un schéma explique : il doit se lire imprimé en A4, sans zoom. Ces règles
viennent des schémas déjà validés (sujets A et B du fichier Figma) et de la
librairie « Design system ». Pour une diapositive ou un support vitrine, lire
aussi la skill `atos-marque`.

## 1. Principe

- **Aucune valeur inventée** : toujours une variable ou un style de la
  librairie, lié (`setBoundVariable`, `textStyleId`), jamais sa valeur
  recopiée. Si la valeur manque, s'arrêter et demander.
- Un même nom de variable existe dans plusieurs collections : toujours filtrer
  par collection (`2a. semantic.color`, `2b. semantic.typography`,
  `2c. semantic.layout`).
- Toujours une **instance** de la page « Composants », jamais un dessin à la
  main ni une instance détachée.
- Contenu repris du document source, condensé mais jamais réinventé. Toute
  information supposée porte « À confirmer ».

## 2. Formats

| Usage | Cadre | Lecture |
| --- | --- | --- |
| A4 paysage (Word, PDF) | 1400 × 990 | texte de 16 px à environ 8 pt |
| A4 portrait (Word) | 900 × 1273 | texte de 16 px à environ 8 pt |
| Diapositive, écran | 1600 × 900 | voir `atos-marque` |

- 8 pt imprimé est la limite basse de lecture : d'où les deux formats A4. Un
  cadre plus grand, réduit pour tenir sur la page, fait tomber le texte
  en dessous.
- Un schéma qui ne tient pas se **simplifie** : cartes en disposition
  Compacte, détail renvoyé vers un tableau, renvois écrits au lieu de traits.
  On n'agrandit jamais le cadre.
- Nom du cadre : code du sujet et numéro, titre, puis le format. Exemple :
  « B1 – Frise IA MCPS, A4 portrait ».
- Exports réglés sur chaque cadre : PNG @2x, SVG (texte gardé en texte,
  Raleway requise), PDF.

## 3. Typographie (`2b. semantic.typography`)

- Raleway, variable `family/sans`, toujours au travers d'un **style de
  texte** de la librairie. Aucun texte sans style.
- **16 px minimum** (styles `md/*`).

| Rôle | Style | Taille |
| --- | --- | --- |
| Titre de cadre ou de bloc | `2xl/bold`, `xl/bold` | 24, 20 |
| Libellé de couloir, de phase ; titre de carte | `lg/bold`, `lg/semi-bold` | 18 |
| Texte courant, légende, badge | `md/regular`, `md/medium`, `md/semi-bold`, `md/bold` | 16 |
| Grand chiffre (gain, indicateur) | `3xl/bold` à `5xl/bold` | 28 à 36 |

- Textes en vrais calques texte, jamais vectorisés.
- Aucun mot coupé en fin de ligne : élargir le bloc ou raccourcir le libellé.
- Exception connue : la mention de statut de la Carte (« À confirmer »,
  « POC en cours ») en Raleway Italic 16 px, sans style équivalent.

## 4. Couleurs (`2a. semantic.color`)

| Rôle | Variable |
| --- | --- |
| Fond du cadre | `background/neutral/extra-subtle` |
| Couloirs, zones | `background/neutral/subtlest` |
| Libellés de couloir | `background/neutral/subtler` |
| Texte principal / secondaire | `text/neutral/strongest` / `text/neutral/base` |
| Bordure de carte | `border/neutral/subtler` |
| Trait appuyé, flèches | `border/neutral/base` |
| Marque | `background/brand/base` + `text/static/light` ; accents `background/brand/subtler`, `text/brand/stronger` |
| Accent | `decorative/1` (vert : `background/decorative/1/subtler`, `text/decorative/1/stronger`) |
| Risque (seulement) | `background/system/error/subtler`, `border/system/error/subtler`, `text/system/error/stronger`, `icon/system/error/base` |

- Pas de teal : il n'existe pas dans la librairie.
- Une couleur garde un seul sens dans tout le fichier.

## 5. Espacements, rayons, traits (`2c. semantic.layout`)

| Usage | Variable | Valeur |
| --- | --- | --- |
| Marge du cadre | `padding/2xl`, ou `padding/xl` si la largeur manque | 32, 24 |
| Entre blocs | `gap/xs` | 8 |
| Dans une carte | `gap/2xs`, `padding/2xs` | 4 |
| Couloir de circulation des flèches | `gap/xl` au minimum | 24 |
| Rayon | `radius/surface` | 0 (angles droits) |
| Bordure / flèche | `border/xs` / `border/md` | 1 / 3 |

## 6. Composants (page « Composants » du fichier)

| Composant | Propriétés | Usage |
| --- | --- | --- |
| Badge | Type = Agent, Prompt, Skill | Mode d'usage de l'IA, toujours expliqué en légende |
| Carte | Statut = Standard, À confirmer, POC en cours ; Disposition = Empilée, Compacte ; Numéro, Titre, Second badge, Note, Texte note | Une étape. Compacte quand la place manque (portrait) |
| Flèche/Lien | Type = Couloir, Dépendance | Flux de fond ; exemple de trait en légende |
| Flèche/Repère | Numéro | Numéro posé sur une flèche de dépendance |
| Encart | Titre ; emplacement libre Contenu | Bloc de texte titré |
| Risque-Mesure | Type = Risque, Mesure ; Code, Texte, Renvoi, Détail | Gabarit « risques → traitements » (A2, A5, A6) |
| Rôle | Type = Interne, Externe | Carte d'organigramme (A3) |

Si un besoin revient deux fois, créer ou étendre un composant, avec ses
propriétés, plutôt que de détacher une instance.

## 7. Flèches et liens

- Une flèche passe dans un espace vide d'au moins `gap/xl`, jamais sur une
  carte ni sur un texte.
- Angles droits uniquement ; la pointe s'arrête 3 px avant la carte visée et
  ne cache pas son numéro.
- Deux flèches issues de la même carte partagent un tronc, puis se séparent.
- Chaque flèche porte un Flèche/Repère posé **au-dessus** du trait ; la
  légende l'explique.
- Ce sont des vecteurs posés en absolu : si une carte bouge, les retracer.
- Si les traits deviennent illisibles, préférer des renvois écrits
  (« → M4, M5 »), comme dans A2, A5 et A6.

## 8. Structure d'un cadre

- Auto-layout vertical ; légende des badges et pictogrammes en bas.
- Un calque masqué `_legende` en tête : légende proposée pour Word, et
  passage du document source qu'il remplace.
- Un texte alternatif par schéma, ajouté à la page « Reprise & compte rendu ».
