import { loadIcon, spells, merge, update } from './spells.js';

let act = null;
const skOrder = [
  'SpellID',
  'Using',
  'DisplayName',
  'Description',
  'ExtraDescription',
  'Level',
  'Icon',
  'UseCosts',
  'SpellType'
];

function setCount() {
  currentSpellLen.textContent = `${filters.length}`;
}

function getDesc(spell, field) {
  const params = spell[field + 'Params'];
  let s = spell[field];
  if (!s) return '';
  [].concat(params).forEach((a, i) => {
    s = s?.replace?.(`[${i + 1}]`, `${a}`);
  });
  return s;
}

let isMobile = 0;
const all = 9999;
let l = _ok;
const types = '%types%';
let syncA = 0;

_ok = null;
const cardHeight = 170;
const cardWidth = 320;
const spellArr = [];
const filters = [];
const filterOption = {};
const z = document.getElementById('z');
const list = document.querySelector('.ri');
const currentSpellLen = document.getElementById('tt');
const sidePanel = document.getElementById('b');
const sidePanelInner = document.getElementById('i');
const menu = document.getElementById('c');
const closeBtn = document.getElementById('e');
const ipt = document.getElementById('cp');
const ctx = document.getElementById('v');
let columns = Math.max(1, Math.floor((list.offsetWidth - 20) / cardWidth));
const sty = ctx.style;
const github = sidePanel.querySelector('a').style;

sidePanel.ontouchstart = gesture;

function gesture(e) {
  if (closeBtn.className !== 's') return;
  const cancel = () => {
    sidePanel.ontouchcancel = sidePanel.ontouchend = null;
  };
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  const t = Date.now();
  sidePanel.ontouchcancel = cancel;
  sidePanel.ontouchend = (e) => {
    const my = Math.abs(e.changedTouches[0].clientY - y);
    if (
      Date.now() - t < 600 &&
      e.changedTouches[0].clientX - x > Math.max(100, my)
    ) {
      closeBtn.onclick();
    }
    cancel();
  };
}

function resetListHeight() {
  const e = Math.ceil(filters.length / columns);
  sty.height = cardHeight * e + 20 + 'px';
}

const regexIfy = (e) => {
  const t = /^\/(.+?)\/([giy]*$)/.exec(e);
  if (t)
    try {
      return new RegExp(t[1], (t[2] || '').replace('i', '') + 'i');
    } catch (e) {}
};
let cpField;

function copy(str, cb) {
  ipt.value = str;
  ipt.select();
  ipt.setSelectionRange(0, 1000);
  navigator.clipboard.writeText(ipt.value).then(cb);
}

function copySpell(flag, spell) {
  const name = spell.SpellID;
  const type = flag === '+' ? 'AddSpell' : 'RemoveSpell';
  clearTimeout(cpField?.t);
  copy(`${type}(GetHostCharacter(),'${name}')`, () => {
    const v = (s) => {
      if (cpField) cpField.textContent = '';
      cpField = spell._el.querySelector('.cp span');
      cpField.innerText = s;
    };
    v(`${type.replace('S', ' S')} Copied!`);
    cpField.t = setTimeout(v, 3e3, '');
  });
}

function filter() {
  filters.length = 0;
  const { t: type, k: prop, l: value } = filterOption;
  spellArr.forEach((spellNAme) => {
    const spell = spells[spellNAme];
    const check = (e, t) => {
      const regExp = regexIfy(e);
      if (regExp) return regExp.test(t);
      if (/.\*|\*./.test(e))
        return new RegExp(e.replace(/\*/g, '.*'), 'ig').test(t);
      if ('-' === e) {
        if (t) return;
      } else if ('*' === e) {
        if (!t) return;
      } else if (/^>\d+$/.test(e)) {
        const n = +e.slice(1);
        if (!isNaN(n)) {
          let match = 0;
          [].concat(t).forEach((t) => {
            if (/^\d+$/.test(t)) {
              if (+t >= n) {
                match = 1;
              }
            } else {
              const l = /DealDamage\((\d+)d?(\d*)\+?(\d*),.*?\)/;
              const [, max, multi = 1, base = 0] = l.exec(t) || [];
              if (max * multi + +base >= n) {
                match = 1;
              }
            }
          });
          if (!match) return;
        }
      } else if (-1 === (t + '').toLowerCase().indexOf((e + '').toLowerCase()))
        return;
      return 1;
    };
    if (!type || type === spell.SpellType) {
      if (prop && value) {
        if ((!prop) in spell) {
          if ('*' === value) return;
          else if ('-' === value) return filters.push(spellNAme);
        }
        let e = 0;
        for (const spellProp in spell) {
          if ('mod' !== spellProp && /[a-z_]/.test(spellProp[0])) continue;
          const spellValue = spell[spellProp];
          const regExp = regexIfy(prop);
          const keyMatch =
            regExp?.test(spellProp) ||
            spellProp.toLowerCase() === prop.toLowerCase() ||
            (/\*/.test(prop) &&
              new RegExp(prop.replace(/\*/g, '.*'), 'gi').test(spellProp));
          if (keyMatch && check(value, spellValue)) {
            e = 1;
            break;
          }
        }
        if (!e) return;
      }
      filters.push(spellNAme);
    }
  });
  resetListHeight();
  setCount();
  syncA++;
}

window.ok = () => {
  const e = (100 * ++l) / all;
  z.style.width = e + '%';
  if (100 === e) {
    z.style.opacity = '0';
    window.ok = null;
  }
};

window.loadIcon = loadIcon;

window.loadSpell = async (str) => {
  const items = str.split('\x01');
  items.forEach((str) => {
    const fields = str.split('\x00');
    const n = fields.length / 2;
    const [ks, vs] = [fields.slice(0, n), fields.slice(n)];
    const o = {};
    ks.forEach((a, b) => {
      const v = vs[b].split('\x02');
      o[sk[a]] = v[1] === undefined ? v[0] : v;
    });
    if (merge(o)) {
      spellArr.push(o.SpellID);
    }
  });
  spellArr.sort((spellName0, spellName1) => {
    const [spell0, spell2] = [spells[spellName0], spells[spellName1]];
    const n = spell0.lv,
      l = spell2.lv;
    return n === l ? (spell0._nm > spell2._nm ? 1 : -1) : n > l ? 1 : -1;
  });
  filter();
  update();
};

function detail(spell) {
  if (act) act.classList.remove('a');
  act = spell._el;
  act.classList.add('a');
  github.display = 'none';
  let cpm = '';
  const render = (key) => {
    if (!/[A-Z]/.test(key[0])) return;
    let n;
    if (key === 'Description') n = getDesc(spell, 'Description');
    else if (key === 'TooltipUpcastDescription')
      n = getDesc(spell, 'TooltipUpcastDescription');
    else {
      n = spell[key];
    }
    let value;
    value =
      !isNaN(n) || n?.length
        ? Array.isArray(n)
          ? `<ul>${n
              .filter(Boolean)
              .map((e) => `<li>${e}</li>`)
              .join('')}</ul>`
          : `<span>${n}</span>`
        : '';
    const cls = spell.hasOwnProperty(key) ? '' : '_';
    if (value)
      cpm += `<div>\n<label class="${cls}">${key}</label>${value}\n</div>`;
  };
  skOrder.forEach(render);
  for (const i in spell) {
    if (!skOrder.includes(i)) render(i);
  }
  return cpm;
}

ctx.onclick = ({ target }) => {
  const children = ctx.children;
  const card = [].find.call(
    children,
    (child) => child === children || child.contains(target)
  );
  if (!card) return;
  if ('BUTTON' === target.tagName) {
    copySpell(target.textContent, card.spell);
    return;
  }
  sidePanel.className = 's';
  closeBtn.className = 's';
  if (card !== act) sidePanelInner.innerHTML = detail(card.spell);
};
closeBtn.onclick = function () {
  if (act) {
    act.classList.remove('a');
    act = null;
    github.display = '';
  }
  const cls = isMobile ? (sidePanel.className ? '' : 's') : '';
  sidePanel.className = closeBtn.className = cls;
  sidePanelInner.innerHTML = `<pre>
Content based on %%.
The filter supports regular expressions
and is case insensitive.

SpellID:
         The Property name of spell's data.
         'spell*' means start width spell.
         Or, you can type /^spell/.
 Value:
         The Property Value of spell's data .
         '-' means empty.
         '*' means not empty.
         '>5' means equal or bigger than 5.
        
 e.g
     No level limit spells:
     SpellID: level   Value: -
     Honour spells:
     SpellID: mod   Value: ho
     Spells Damage > 500:
     SpellID: spell*   Value: >500`;
};

const el = (e) => {
  const t = document.createElement('div');
  t.innerHTML = e;
  return t.children[0];
};
let t = -1;
const tbs = [];
const cg = (e, t) => {
  filterOption.t = t;
  tbs.forEach((t) => t.act(e));
};
[''].concat(types).forEach((e, t) => {
  const n = e || 'ALL';
  const ph =
    'M17.337 9.99h-.414l-.222-.146-3.186-3.187C13.092 6.234 ' +
    '12.598 6 12 6H0V5h12c.861 0 1.613.341 2.222.95l2.87 2.87 2.335-2.334.707' +
    '.707-2.797 2.797ZM34 6H23c-.861 0-1.516-.36-2.124-.97l-2.87-2.87-2.335 ' +
    '2.335-.707-.707L17.76.99h.414l.221.147 3.187 3.186c.423.423.82.677 ' +
    '1.417.677h11v1Z';
  const l = el(`
<div role="tab" aria-selected="true" aria-controls="spell-type" >
    <span>${n.toUpperCase()}</span>
    <span class="dc"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 34 10" height="10" width="34" data-v-f1544235="">
    <path fill="#ddc9a7" d="${ph}"> 
    </path>
    </svg></span>
</div>`);
  l.onclick = () => {
    cg(n, e);
  };
  l.act = (e) => {
    l.className = e === n ? 'act' : '';
    list.scrollTop = 0;
  };
  tbs.push(l);
  menu.appendChild(l);
});
const xx = (e, t, f = (a) => a) => {
  const n = document.getElementById(e);
  let l = -1;
  n.onfocus = () => {
    n.select();
    n.setSelectionRange(0, 9999);
  };
  n.oninput =
    n.onchange =
    n.onpaste =
    n.onblur =
      function () {
        clearTimeout(l);
        l = setTimeout(() => {
          filterOption[t] = f(n.value.replace(/^\s+|\s+$/, ''));
          syncA++;
        }, 200);
      };
};
xx('v0', 'k', (a) => (a ? a.replace(a[0], a[0].toUpperCase()) : a));
xx('v2', 'l');
cg('ALL', '');
let syncB,
  rows,
  n = '';
const run = () => {
  requestAnimationFrame(run);
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
        start = Math.floor(list.scrollTop / cardHeight) * columns,
        viewStart = Math.max(0, start - end),
        viewEnd = Math.min(total, start + 2 * end);
      const frm = document.createDocumentFragment();
      for (let idx = viewStart; idx < viewEnd; idx++) {
        spellCard(spells[filters[idx]], idx, frm);
      }
      displayed.forEach((a) => a.remove());
      displayed = added;
      added = new Set();
      ctx.appendChild(frm);
    }
  }
};
let displayed = new Set();
let added = new Set();
const spellCard = (spell, idx, frm) => {
  const left = `${(idx % columns) * cardWidth}px`;
  const top = `${Math.floor(idx / columns) * cardHeight}px`;
  const trans = `translate3d(${left},${top},0)`;
  let elm = spell._el;
  if (elm) {
    elm.style.transform = trans;
    if (!displayed.delete(elm)) frm.appendChild(elm);
  } else {
    const inner = (spell) => {
      const {
        SpellID,
        mod = '',
        nm,
        ico,
        DisplayName,
        Icon,
        Level,
        SpellType,
        SpellProperties = [],
        SpellSuccess = []
      } = spell;
      const desc = getDesc(spell, 'Description');
      return `<div class="bd"><i></i><i></i><i></i><i></i></div>
    <span title="${mod}" hidden>H</span>
    <i style="${ico}" role="img" aria-label="icon of the spell ${SpellID}" title="${Icon}"></i>
    <span class="lv">level ${Level || '-'}</span>
    <span class="tp">${SpellType}</span>
    <span class="cp"><span></span><button>+</button><button>-</button></span>
    <div class="l">
        <label>${DisplayName || nm}</label>
        <div class="u">
            <div class="w">
                <p>${desc}</p>
                <ul class="po">${SpellProperties.map((e) => '<li>' + e + '</li>').join('')}</ul>
                <ul>${SpellSuccess.map((e) => '<li>' + e + '</li>').join('')}</ul>
            </div>
        </div>
    </div>`;
    };
    elm = el(`
<div class="c" 
     role="listitem" 
     style="transform:translate3d(${left},${top},0)"
>${inner(spell)}</div>`);
    const id = spell.SpellID;
    elm.update = () => {
      const spell = spells[id];
      elm.spell = spell;
      elm.innerHTML = inner(spell);
    };
    frm.appendChild(elm);
    spell._el = elm;
    elm.spell = spell;
  }
  added.add(elm);
};
list.onscroll = () => syncA++;
window.onresize = () => {
  isMobile = window.innerWidth <= 768;
  let e = Math.max(1, Math.floor((list.offsetWidth - 20) / cardWidth)),
    n = Math.ceil((list.offsetHeight - 20) / cardHeight);
  if (columns !== e || rows !== n) {
    columns = e;
    rows = n;
    syncA++;
    resetListHeight();
  }
};
onresize();
if (!isMobile) closeBtn.onclick();
run();
if (_icons) {
  loadIcon(_icons);
  _icons = null;
}
if (_spells) {
  _spells.forEach(loadSpell);
  _spells = null;
}
const cpMark = el('<span class="cm"><span>✔</span></span>');
const cpSly = cpMark.children[0].style;
sidePanelInner.onclick = function ({ target }) {
  const tag = target.tagName;
  if ('LABEL'===tag) {
    clearTimeout(cpMark.t);
    cpMark.remove();
    const isLabel = tag[1] === 'A';
    copy(target.textContent, () => {
      cpSly[!isLabel ? 'right' : 'left'] = 'auto';
      cpSly[isLabel ? 'right' : 'left'] = '-13px';
      target.insertAdjacentElement(
        isLabel ? 'beforeend' : 'afterbegin',
        cpMark
      );
      cpMark.t = setTimeout(() => cpMark.remove(), 3e3);
    });
  }
};
