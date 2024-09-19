const updates = new Set();
const waitMerge = {};
const icons = {};
const orders = ['Shared', 'Gustav', 'SharedDev', 'GustavDev', 'Honour'];
const emptyIconSpells = new Set();

function ico(spell) {
  const t = icons[spell.Icon];
  if (t) {
    const [x, n, y] = t;
    return `background-position:${x}% ${y}%;background-image:url(${n}.avif)`;
  }
  emptyIconSpells.add(spell.SpellID);
  return 'background-size:cover';
}

function sameIdSpell(spellA, spellB) {
  const oA = orders.indexOf(spellA.mod);
  const oB = orders.indexOf(spellB.mod);
  if (oA < oB) return sameIdSpell(spellB, spellA);
  const refs = (spellA.refs || []).concat(spellB.refs || []);
  refs.forEach((ref) => {
    if (ref) ref.__proto__ = spellA;
  });
  spellA.refs = refs.length ? refs : null;
  if(spellB._el)spellA._el = spellB._el;
  spellA.__proto__ = spellB;
  spellB._el = null;
  spellB.refs = null;
  return spellA;
}

const patchSpell = (spell) => {
  const { SpellProperties, SpellSuccess } = spell;
  if ('string' == typeof SpellProperties)
    spell.SpellProperties = [SpellProperties];
  if ('string' == typeof SpellSuccess) spell.SpellSuccess = [SpellSuccess];
};

export function merge(spell) {
  const { SpellID } = spell;
  const exist = spells[SpellID]
  spell.refs = null;
  spell._el = null;
  let addToSpells = 1
  if(exist){
    const lef=sameIdSpell(exist,spell)
    if (lef === exist) {
      addToSpells = 0
      exist.emit();
    }
  }
  patchSpell(spell);
  spell.nm = spell.SpellID.replace(spell.SpellType + '_', '')
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  spell._nm = spell.nm.toLowerCase();
  spell.emit = function () {
    if (spell._el) updates.add(SpellID);
    spell.refs?.forEach((k) => {
      k.emit();
    });
  };
  spell.update = function () {
    this._el?.update?.();
  };
  Object.defineProperties(spell, {
    lv: {
      get() {
        return +this.Level || 99;
      }
    },
    ico: {
      get() {
        return ico(this);
      }
    }
  });
  const { Using } = spell;
  const setPrototype = (proto, target) => {
    target.__proto__ = proto;
    (proto.refs = proto.refs || []).push(target);
  };
  if (Using && Using !== SpellID) {
    const proto = spells[Using];
    if (proto) {
      setPrototype(proto, spell);
    } else (waitMerge[Using] = waitMerge[Using] || new Set()).add(spell);
  }
  if(addToSpells)spells[SpellID] = spell;
  const waits = waitMerge[SpellID];
  if (waits) {
    waits.forEach(child => {
      if (child && child !== spell) {
        child.__proto__ = spell;
        waits.delete(child);
      }
      child.emit();
    });
    if (!waits.size) delete waitMerge[SpellID];
  }
  if (!exist) return spell;
  else spell.emit()
}

export function loadIcon(arr) {
  const n = arr.length / 4;
  const [ks, vs] = [arr.slice(0, n), arr.slice(n)];
  ks.forEach((k, i) => {
    icons[k] = vs.slice(i * 3, (i + 1) * 3).map(Number);
  });
  emptyIconSpells.forEach((a) => spells[a].update());
}
export const update = ()=>{
  if (updates.size) {
    updates.forEach((a) => {
      spells[a].update();
    });
    updates.clear();
  }
}
export const spells = {};
