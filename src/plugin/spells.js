export const spellsCache = {};
const waitMerge = {};
const orders = ['Shared', 'Gustav', 'SharedDev', 'GustavDev', 'Honour'];

const sameIdSpell = (spellA, spellB) => {
  const oA = orders.indexOf(spellA.mod);
  const oB = orders.indexOf(spellB.mod);
  if (oA < oB) return sameIdSpell(spellB, spellA);
  const refs = (spellA.refs || []).concat(spellB.refs || []);
  refs.forEach((ref) => {
    if (ref) ref.__proto__ = spellA;
  });
  spellA.refs = refs.length ? refs : null;
  spellA.__proto__ = spellB;
  spellB.refs = null;
  return spellA;
};

export const merge = (spell) => {
  if (!spell) return;
  const { SpellID } = spell;
  const exist = spellsCache[SpellID];
  spell.refs = null;
  let addToSpells = 1;
  if (exist) {
    const lef = sameIdSpell(exist, spell);
    if (lef === exist) {
      addToSpells = 0;
    }
  }
  const { Using } = spell;
  const setPrototype = (proto, target) => {
    target.__proto__ = proto;
    (proto.refs = proto.refs || []).push(target);
  };
  if (Using && Using !== SpellID) {
    const proto = spellsCache[Using];
    if (proto) {
      setPrototype(proto, spell);
    } else (waitMerge[Using] = waitMerge[Using] || new Set()).add(spell);
  }
  if (addToSpells) spellsCache[SpellID] = spell;
  const waits = waitMerge[SpellID];
  if (waits) {
    waits.forEach((child) => {
      if (child && child !== spell) {
        child.__proto__ = spell;
        waits.delete(child);
      }
    });
    if (!waits.size) delete waitMerge[SpellID];
  }
  if (!exist) return spell;
};
