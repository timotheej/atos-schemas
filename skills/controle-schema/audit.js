// Audit en lecture seule d'un cadre de schéma Atos. À coller dans use_figma.
// Remplacer CADRE_ID par l'identifiant du cadre (ex. '47:719').
const CADRE_ID = 'CADRE_ID';
const FORMATS = ['1400x990', '900x1273', '1600x900'];
const TAILLE_MIN = 16;

const cadre = await figma.getNodeByIdAsync(CADRE_ID);
if (!cadre || cadre.type !== 'FRAME') throw new Error('Cadre introuvable : ' + CADRE_ID);
let page = cadre.parent;
while (page.type !== 'PAGE') page = page.parent;
await figma.setCurrentPageAsync(page);

const R = Math.round;
const pb = cadre.absoluteBoundingBox;
const constats = [];
const ajoute = (gravite, regle, noeud, detail) =>
  constats.push({ gravite, regle, noeud: noeud ? noeud.name + ' (' + noeud.id + ')' : '', detail });

const format = R(cadre.width) + 'x' + R(cadre.height);
if (!FORMATS.includes(format)) ajoute('bloquant', 'format', cadre, format + ' hors formats ' + FORMATS.join(', '));

const ex = (cadre.exportSettings || []).map((e) => e.format + (e.constraint ? '@' + e.constraint.value : ''));
for (const attendu of ['PNG@2', 'SVG', 'PDF']) if (!ex.includes(attendu)) ajoute('mineur', 'exports', cadre, 'manque ' + attendu);

const legende = cadre.children.find((n) => n.name === '_legende');
if (!legende || legende.type !== 'TEXT' || !legende.characters.trim()) ajoute('mineur', '_legende', cadre, 'absent ou vide');

const visible = (n) => { for (let x = n; x && x !== cadre; x = x.parent) if (x.visible === false) return false; return true; };
const dansInstance = (n) => { for (let x = n.parent; x && x !== cadre; x = x.parent) if (x.type === 'INSTANCE') return true; return false; };
const tous = cadre.findAll(() => true).filter(visible);

for (const n of tous) {
  const ids = [];
  for (const [k, v] of Object.entries(n.boundVariables || {})) for (const a of (Array.isArray(v) ? v : [v])) if (a && a.id) ids.push(a.id);
  for (const id of ids) { const v = await figma.variables.getVariableByIdAsync(id); if (v && v.remote) ajoute('majeur', 'liaison vers la librairie', n, v.name); }
  if (n.type === 'INSTANCE') { const m = await n.getMainComponentAsync(); if (m && m.remote) ajoute('majeur', 'composant de la librairie', n, m.name); }
  if (n.type === 'TEXT' && typeof n.textStyleId === 'string' && n.textStyleId) { const s = await figma.getStyleByIdAsync(n.textStyleId); if (s && s.remote) ajoute('majeur', 'style de la librairie', n, s.name); }

  const bb = n.absoluteRenderBounds || n.absoluteBoundingBox;
  if (bb && (bb.x < pb.x - 0.5 || bb.y < pb.y - 0.5 || bb.x + bb.width > pb.x + pb.width + 0.5 || bb.y + bb.height > pb.y + pb.height + 0.5))
    ajoute('bloquant', 'débordement', n, 'sort du cadre');

  if (n.type === 'TEXT') {
    if (typeof n.fontSize === 'number' && n.fontSize < TAILLE_MIN) ajoute('bloquant', 'taille de texte', n, n.fontSize + ' px');
    if (!n.textStyleId) ajoute(n.fontName && n.fontName.style === 'Italic' ? 'info' : 'majeur', 'style de texte', n, 'aucun style lié');
  }

  if (!dansInstance(n)) {
    for (const prop of ['fills', 'strokes']) {
      const paints = n[prop];
      if (Array.isArray(paints)) for (const p of paints) if (p.type === 'SOLID' && p.visible !== false && !(p.boundVariables && p.boundVariables.color))
        ajoute('majeur', 'couleur non liée', n, prop);
    }
    if ('layoutMode' in n && n.layoutMode !== 'NONE') {
      const bv = n.boundVariables || {};
      for (const k of ['itemSpacing', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])
        if (n[k] > 0 && !bv[k]) ajoute('majeur', 'espacement non lié', n, k + ' = ' + n[k]);
    }
    if ('cornerRadius' in n && typeof n.cornerRadius === 'number' && n.cornerRadius > 0) ajoute('majeur', 'coin arrondi', n, n.cornerRadius + ' px');
    if (n.type === 'FRAME' && /^(Carte|Badge|Encart|Rôle|Risque-Mesure)\//.test(n.name)) ajoute('majeur', 'instance détachée ?', n, 'cadre nommé comme un composant');
  }
}

const parGravite = {};
for (const c of constats) parGravite[c.gravite] = (parGravite[c.gravite] || 0) + 1;
return { cadre: cadre.name, format, exports: ex, total: constats.length, parGravite, constats: constats.slice(0, 60) };
