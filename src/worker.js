let act = '';
const spells = {};
let syncA = 0;
const icons = {};
const filterOption = {};
const cardHeight = 170;
const cardWidth = 330;
const spellArr = [];
const filters = [];
let columns = 1;
let t = -1;
const setIco = 0;
const elementB = 2;
const elementCtx = 3;
const objFields = [filterOption];
const fnFields = [
  checkAct,
  setAct,
  refresh,
  resize,
  loadIco,
  setSpells,
  render
];
const invoke = (fn, ...args) => {
  self.postMessage(
    JSON.stringify({
      fn,
      args
    })
  );
};

self.onmessage = function ({ data }) {
  const { prop, val, target, fn, args } = JSON.parse(data);
  if (target !== undefined) {
    objFields[target][prop] = val;
  } else {
    fnFields[fn](...args);
  }
};

function render(top) {
  const s = JSON.stringify(filterOption);
  if (n !== s) {
    n = s;
    filter();
  }
  if (syncA !== syncB) {
    syncB = syncA = 0;
    {
      const end = columns * rows,
        total = filters.length,
        start = Math.floor(top / cardHeight) * columns,
        viewStart = Math.max(0, start - end),
        viewEnd = Math.min(total, start + 2 * end);
      let tmpl = '';
      for (let idx = viewStart; idx < viewEnd; idx++) {
        const {
          nm,
          ico,
          DisplayName,
          Description = '',
          Name,
          _flag = '',
          Level,
          SpellType,
          SpellProperties = [],
          SpellSuccess = []
        } = spellArr[filters[idx]];
        tmpl += `
<div class="c${act === Name ? ' a' : ''}" 
     role="listitem" 
     id="${_flag + Name}" 
     style="left:${(idx % columns) * cardWidth}px;top:${Math.floor(idx / columns) * cardHeight}px"
>
    <span title="${_flag}" hidden>H</span>
    <i style="${ico}" role="img" aria-label="icon of the spell ${Name}" title="${DisplayName || Description}"></i>
    <span class="lv">level ${Level || '-'}</span>
    <span class="tp">${SpellType}</span>
    <span class="cp"><span></span><button>+</button><button>-</button></span>
    <div class="l">
        <label>${DisplayName || nm}</label>
        <div class="u">
            <div class="w">
                <p>${Description}</p>
                <ul class="po">${SpellProperties.map((e) => '<li>' + e + '</li>').join('')}</ul>
                <ul>${SpellSuccess.map((e) => '<li>' + e + '</li>').join('')}</ul>
            </div>
        </div>
    </div>
</div>`;
      }
      set(elementCtx, 'innerHTML', tmpl);
    }
  }
}

function setSpells(items) {
  items.forEach((fields) => {
    const n = fields.length / 2;
    const [ks, vs] = [fields.slice(0, n), fields.slice(n)];
    const o = {};
    ks.forEach((a, b) => {
      o[sk[a]] = vs[b];
    });
    const t = (o._flag || '') + o.Name;
    spells[t] = o;
    spellArr.push(o);
  });
  Object.values(spells).forEach((spell) => {
    merge(spell);
    patchParams(spell);
  });
  filter();
}

function loadIco(arr) {
  const n = arr.length / 4;
  const [ks, vs] = [arr.slice(0, n), arr.slice(n)];
  ks.forEach((k, i) => {
    icons[k] = vs.slice(i * 3, (i + 1) * 3).map(Number);
  });
  const o = {};
  Object.values(spells).forEach((spell) => {
    o[(spell._flag || '') + spell.Name] = spell.ico = ico(spell.Icon);
  });
  invoke(setIco, o);
}

function resize(w, h) {
  let e = Math.max(1, Math.floor((w - 20) / cardWidth)),
    n = Math.ceil((h - 20) / cardHeight);
  if (columns !== e || rows !== n) {
    columns = e;
    rows = n;
    syncA++;
    resetListHeight();
  }
}

function refresh() {
  syncA++;
}

const sty = 1;
const currentSpellLen = 0;

const set = (target, prop, val) => {
  self.postMessage(
    JSON.stringify({
      target,
      prop,
      val
    })
  );
};

function setAct(a) {
  act = a;
  syncA++;
}

function resetListHeight() {
  const e = Math.ceil(filters.length / columns);
  set(sty, 'height', cardHeight * e + 20 + 'px');
}

function setCount() {
  set(currentSpellLen, 'textContent', filters.length);
}

const regexIfy = (str) => {
  const t = /^\/(.+?)\/([giy]*$)/.exec(str);
  if (t)
    try {
      return new RegExp(t[1], (t[2] || '').replace('i', '') + 'i');
    } catch (e) {}
};

function patchParams(spell) {
  ['TooltipUpcastDescriptionParams', 'DescriptionParams'].forEach((a) => {
    if (!spell[a]) return;
    const d = a.replace(/Params$/, '');
    if (!spell[d]) return delete spell[a];
    []
      .concat(spell[a])
      .forEach((a, i) => (spell[d] = spell[d].replace(`[${i + 1}]`, `${a}`)));
  });
}

function filter() {
  filters.length = 0;
  const { t: type, k: prop, l: value } = filterOption;
  spellArr.forEach((spell, index) => {
    const check = (filterValue, spellValue) => {
      const regExp = regexIfy(filterValue);
      if (regExp) return regExp.test(spellValue);
      if (/.\*|\*./.test(filterValue))
        return new RegExp(filterValue.replace(/\*/g, '.*'), 'ig').test(
          spellValue
        );
      if ('-' === filterValue) {
        if (spellValue) return;
      } else if ('*' === filterValue) {
        if (!spellValue) return;
      } else if (/^>\d+$/.test(filterValue)) {
        const targetVal = +filterValue.slice(1);
        let match = [].concat(spellValue).find((val) => {
          if (/^\d+$/.test(val)) return +val >= targetVal;
          else {
            const mc =
              val.match(/(?<=DealDamage\(.*?)(\d+(d\d+)?(\+\d+)?)/g) || [];
            return mc.find((a) => {
              const [c, d = 1] = a.split('d');
              return +c * d > targetVal;
            });
          }
        });
        if (!match) return;
      } else if (
        -1 ===
        (spellValue + '')
          .toLowerCase()
          .indexOf((filterValue + '').toLowerCase())
      )
        return;
      return 1;
    };
    if (!type || type === spell.SpellType) {
      if (prop && value) {
        if (!spell.hasOwnProperty(prop)) {
          if ('*' === value) return;
          else if ('-' === value) return filters.push(index);
        }
        let e = 0;
        for (const [spellProp, spellValue] of Object.entries(spell)) {
          if (spellProp !== '_flag' && /[a-z_]/.test(spellProp[0])) continue;
          const l = regexIfy(prop);
          if (
            (l?.test(spellProp) ||
              spellProp.toLowerCase() === prop.toLowerCase() ||
              (/\*/.test(prop) &&
                new RegExp(prop.replace(/\*/g, '.*'), 'gi').test(spellProp))) &&
            check(value, spellValue)
          ) {
            e = 1;
            break;
          }
        }
        if (!e) return;
      }
      filters.push(index);
    }
  });
  filters.sort((e, t) => {
    e = spellArr[e];
    t = spellArr[t];
    const n = e.lv,
      l = t.lv;
    return n === l ? (e._nm > t._nm ? 1 : -1) : n > l ? 1 : -1;
  });
  resetListHeight();
  setCount();
  syncA++;
}

function merge(spell) {
  if (!spell) return;
  if (!spell._) {
    Object.keys(spell).forEach((t) => {
      spell[t] || delete spell[t];
    });
    spell._ = {};
  }
  const { Using: t, _flag: f = '' } = spell;
  const z = t && (spells[t] || spells[f + t]);
  if (z && z !== spell) {
    const parent = merge(z);
    parent &&
      Object.keys(parent).forEach((t) => {
        if (!spell.hasOwnProperty(t)) {
          spell[t] = parent[t];
          spell._[t] = 1;
        }
      });
  }
  spell.nm = spell.Name.replace(spell.SpellType + '_', '')
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  spell._nm = spell.nm.toLowerCase();
  spell.lv = +spell.Level || 99;
  spell.ico = ico(spell.Icon);
  const { SpellProperties, SpellSuccess } = spell;
  if ('string' == typeof SpellProperties)
    spell.SpellProperties = [SpellProperties];
  if ('string' == typeof SpellSuccess) spell.SpellSuccess = [SpellSuccess];
  return spell;
}

function ico(e) {
  const t = icons[e];
  if (t) {
    const [x, n, y] = t;
    return `background-position:${x}% ${y}%;background-image:url(${n}.webp)`;
  }
  return 'background-size:cover';
}

function checkAct(key) {
  if (spells[key].Name !== act) set(elementB, 'innerHTML', ps(spells[key]));
}

function ps(e) {
  act = e.Name;
  syncA++;
  const t = [
    'SpellType',
    'UseCosts',
    'Icon',
    'Level',
    'ExtraDescription',
    'Description',
    'DisplayName',
    'Using',
    'Name'
  ];
  const n = Object.keys(e).filter(
    (e) => -1 === ['ico', 'nm', '_nm', 'lv'].indexOf(e)
  );
  n.sort((e, n) => {
    const l = t.indexOf(e);
    const s = t.indexOf(n);
    return l === s ? (e > n ? 1 : -1) : s - l;
  });
  let cpm = '';
  n.forEach((key) => {
    if ('-' === key) return;
    const n = e[key];
    let value;
    value =
      key !== '_flag' && (!isNaN(n) || n?.length)
        ? Array.isArray(n)
          ? `<ul>${n
              .filter(Boolean)
              .map((e) => `<li>${e}</li>`)
              .join('')}</ul>`
          : `<span>${n}</span>`
        : '';
    const cls = e._ && e._[key] ? '_' : '';
    if (value)
      cpm += `<div>\n<label class="${cls}">${key}</label>${value}\n</div>`;
  });
  return cpm;
}

let syncB,
  rows,
  n = '';
