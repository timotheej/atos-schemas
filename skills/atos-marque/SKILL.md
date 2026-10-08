---
name: atos-marque
description: Identité de marque Atos tirée du brandbook 2026 (couleurs officielles, contrastes autorisés, Biennale et Raleway, Curves of Progress, logo, icônes, présentations, data visualisation). À lire pour toute diapositive, couverture, infographie ou support vitrine, et pour faire passer un schéma d'un rendu « interface » à un rendu « marque ».
---

# Marque Atos (brandbook 2026)

Source : *Atos brandbook 2026*, PDF du 2 mars 2026, 148 pages. Les numéros de
page sont cités entre crochets. Contact marque : branding.atos@atos.net.

La charte du fichier des schémas vient d'une librairie pensée pour des
**interfaces** : surfaces claires, bordures fines, petits badges. Un schéma
construit seulement avec elle a l'air d'un écran d'application. Une
diapositive Atos, elle, repose sur des **aplats de couleur vive, une
typographie très grasse, de grandes compositions et les Curves of Progress**
[2]. Ce qui suit dit comment passer de l'un à l'autre.

## 1. Couleurs officielles [46]

Disponibles en aplat dans la collection locale `Schémas · Couleurs`,
groupe `marque/` (valeurs de la page 46, sourcées dans la description de
chaque variable).

| Couleur | Hex | Variable locale |
| --- | --- | --- |
| Atos Blue | `#0073e6` | `marque/atos-blue` (même valeur que `background/brand/base`) |
| Atos Light Blue | `#3dc7ff` | `marque/light-blue` |
| Atos Deep Blue | `#00005c` | `marque/deep-blue` |
| Atos Pink | `#ef5e82` | `marque/pink` |
| Atos Green | `#4aa82d` | `marque/green` |
| Atos Purple | `#663894` | `marque/purple` |
| Atos Orange | `#f56a00` | `marque/orange` |
| Blanc | `#ffffff` | `marque/blanc` |

Les teintes claires de ces couleurs (fonds de carte, badges) restent les
variables sémantiques (`background/decorative/1/subtler`, etc.). Les
paliers intermédiaires du brandbook (Blue 90 à 10, etc. [68]) ne sont pas
encore dans le fichier : les ajouter depuis la page 68 si un graphique en a
besoin, en citant la page dans la description.

## 2. Texte sur couleur [47 à 53]

- WCAG AA : 4,5:1 pour le texte courant, 3:1 pour le grand texte (24 px et
  plus, ou 18 px gras et plus) et pour les éléments graphiques.
- Couleurs de texte à privilégier : **blanc, Atos Blue, Deep Blue** [48].
- Combinaisons recommandées [48] :
  - blanc sur Atos Blue (4,6:1) ;
  - blanc ou Light Blue sur Deep Blue (18,2:1 et 9,4:1) ;
  - Deep Blue sur Light Blue (9,4:1) ;
  - Atos Blue ou Deep Blue sur blanc.
- Atos Blue sur Light Blue, ou l'inverse : grand texte seulement (4:1).
- Pink, Green, Purple, Orange en texte : **grand texte seulement** [51].
- Titres sur fond coloré : blanc ou Deep Blue [52]. Texte courant sur un
  bloc coloré : seulement les combinaisons de la page 53, aucune autre.

## 3. Typographie [39 à 44]

- **Biennale** : police principale, titres et print. **Raleway** : son
  substitut pour le numérique (PowerPoint, web), et la police du fichier
  des schémas. Dans Figma et PowerPoint, on utilise Raleway.
- Biennale : Black et Bold pour titres et sous-titres, Medium et Regular
  pour le texte [41].
- Raleway, hiérarchie de référence [44] (rapports à garder, pas les valeurs
  absolues, pensées pour l'affiche) : H1 Extra Bold, H2 et H3 Bold, H4 Medium,
  corps Medium.
- Styles locaux du fichier : `md` (16) à `11xl` (72), en `bold`,
  `semi-bold`, `medium`, `regular`. Pas d'Extra Bold : utiliser `*/bold`. Le
  corps de texte d'une diapositive est en `*/medium`.
- Esprit : « bold design mindset » [39]. Titres grands et gras, peu de mots.

## 4. Curves of Progress [31 à 38]

Le symbole graphique de la marque : un quart de cercle épais inscrit dans un
carré.

- Objet fini : ne jamais créer sa propre forme, ni étirer, ni déformer, ni
  changer l'épaisseur relative, ni utiliser en contour [32, 34].
- Rotation par quarts de tour seulement (quatre orientations) [33].
- Composition sur une grille de carrés : ni chevauchement, ni décalage, ni
  emboîtement [35].
- Une courbe **entre ou sort par au moins un bord** de la zone ; seule
  exception, les guillemets [36].
- Peut être zoomée, coupée par le bord ; motifs possibles avec une courbe par
  carré de grille [38].
- Le fichier ne contient pas de Curve : demander le fichier source à
  Timothée ou au service marque. Ne jamais la redessiner.

## 5. Logo [22 à 30]

- Blanc sur toute couleur, image ou vidéo ; Atos Blue sur fond blanc
  seulement. Aucune autre combinaison [24].
- Zone de protection à respecter [23]. Fichier officiel uniquement, jamais
  redessiné ni recoloré.
- Co-branding : règles pages 27 à 30 (alliances, partenaires, clients).

## 6. Icônes [106 à 109]

- Style de la bibliothèque d'icônes Atos ; jamais d'icône de banque d'images.
- Épaisseur de trait proportionnelle d'une taille à l'autre.
- Sur fond coloré, toutes les couleurs Atos sont possibles.

## 7. Diapositives [58 à 66]

- Présentation **interne** : utiliser le modèle PowerPoint fourni par Atos.
- Présentation **commerciale** : s'inspirer des mises en page [59 à 63] :
  - couverture sur Deep Blue, titre blanc gras, sous-titre Light Blue, date,
    grande Curve Light Blue qui sort du cadre, logo blanc en bas à droite ;
  - pages de contenu : grand titre en haut à gauche, sous-titre, texte court
    en colonne ;
  - grand chiffre (« 347M », « 57 % ») dans une couleur secondaire, avec une
    ligne d'explication ;
  - citation en grand, couleur secondaire ou blanc sur Deep Blue ;
  - photo recadrée par une Curve ;
  - pied de page discret : « 00 - Titre - date » à gauche, logo à droite.
- **Aucun coin arrondi**, en aucun cas [56].
- Étiquettes de document [64, 65] : « White papers » en Deep Blue dans un
  cadre blanc ; « Executive summary » en blanc dans un cadre Deep Blue.

## 8. Data visualisation [67 à 72]

- Palette : Blue, Light Blue, Deep Blue, chacune de 100 à 10 % ; puis les
  couleurs secondaires [68].
- Graphiques simples, lisibles vite ; contours pour la reconnaissance et
  l'accessibilité [69, 71]. Versions claire et sombre.
- Tableaux de synthèse : icône, titre, puces de couleur [72].

## 9. Schéma ou diapositive : ce qui change

| | Schéma (Word, A4) | Diapositive (1600 × 900) |
| --- | --- | --- |
| But | expliquer, se lire seul | porter un message en quelques secondes |
| Fond | clair, neutre | aplat `marque/deep-blue`, `marque/atos-blue` ou blanc |
| Titre | 20 à 24 px | 40 px et plus (`5xl/bold` à `11xl/bold`) |
| Texte | 16 px, dense possible | 20 à 28 px (`xl` à `3xl`, en `medium`), peu de mots |
| Blocs | cartes bordées, couloirs | aplats sans bordure, grands espaces |
| Décor | aucun | une Curve of Progress, qui sort du cadre |
| Chiffres | dans le texte | un grand chiffre par message |

Un « encart » de schéma devient en diapositive : un aplat de couleur, un
titre court, une phrase, et éventuellement un grand chiffre. Pas de bordure,
pas de badge, pas de liste de plus de trois points.
