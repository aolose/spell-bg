import { s2n } from './plugin/utils.js';

const dic = '%dic%'.split(',');
const unZipStr = (str) =>
  str.replace(/[\x03-\x07\x0e-\x1f\x7f-\xff]+/g, (a) => dic[s2n(a)]);
const spellProps = unZipStr('%spellKeys%').split(',');
const spellIds = unZipStr('%spellIds%').split(',');
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

const icons = unZipStr('%icons%').split(',');

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
const all = '%total%';
const types = unZipStr('%types%').split(',');
let syncA = 0;

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
const menus = document.getElementById('c');
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

function ico(icon) {
  const t = icons[icon];
  if (t) {
    const [x, n, y] = t;
    return `background-position:${x}% ${y}%;background-image:url(${n}.avif)`;
  }
  return 'background-size:cover';
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
      cpField = spell.el.querySelector('.cp span');
      cpField.innerText = s;
    };
    v(`${type.replace('S', ' S')} Copied!`);
    cpField.t = setTimeout(v, 3e3, '');
  });
}

function filter() {
  filters.length = 0;
  const { t: type, k: prop, l = '' } = filterOption;
  const value = l.toLowerCase();
  spellArr.forEach((spell) => {
    if (spell.hasOwnProperty('i')) return;
    const check = (e, t) => {
      const regExp = regexIfy(e);
      if (regExp) return regExp.test(t);
      if (/.\*|\*./.test(e))
        return new RegExp(e.replace(/\*/g, '.*'), 'ig').test(t);
      if ('-' === e) {
        if (t === 0 || t) return;
      } else if ('*' === e) {
        if (t === undefined || t === '') return;
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
      } else if (-1 === (t + '').indexOf(e + '')) return;
      return 1;
    };
    if (!type || type === spell.SpellType) {
      if (prop && value) {
        let e = 0;
        let mc = 0;
        for (const spellProp in spell) {
          if ('mod' !== spellProp && /[a-z_]/.test(spellProp[0])) continue;
          const v = spell[spellProp];
          const spellValue = typeof v === 'string' ? v.toLowerCase() : v;
          const regExp = regexIfy(prop);
          const keyMatch =
            regExp?.test(spellProp) ||
            spellProp.toLowerCase() === prop ||
            (/\*/.test(prop) &&
              new RegExp(prop.replace(/\*/g, '.*'), 'gi').test(spellProp));
          if (keyMatch) {
            mc = 1;
            if (check(value, spellValue)) {
              e = 1;
              break;
            }
          }
        }
        if (!e) {
          if (!mc && '-' === value) return filters.push(spell);
          return;
        }
      }
      filters.push(spell);
    }
  });
  resetListHeight();
  setCount();
  syncA++;
}

let loaded = 0;
const ok = () => {
  const e = (100 * ++loaded) / all;
  z.style.width = e + '%';
  if (100 === e) {
    z.style.opacity = '0';
    window.ok = null;
  }
};

const waitUpdate = {};
window.loadSpell = async (idx, str) => {
  ok();
  const items = str.split('\x01');
  const setProto = (o, p) => {
    o.__proto__ = p;
    p.refs = (p.refs || []).concat(o);
    o.Using = p.SpellID;
    o.update();
  };
  items.forEach((str, i) => {
    const fields = str.split('\x00');
    const [ks, vs] = [
      fields[0]
        .match(/[\xfd-\xff]?[\xd7-\xfc]?[\x03-\x07\x0e-\x1f\x7f-\xd6]/g)
        .map((a) => spellProps[s2n(a)]),
      fields.slice(1)
    ];
    const o = {};
    ks.forEach((a, b) => {
      const v = unZipStr(vs[b]).split('\x02');
      o[a] = v[1] === undefined ? v[0] : v;
    });
    o.refs = null;
    o.el = null;
    if (/^\d+$/.test(o.Icon)) {
      o.ico = o.Icon;
      o.Icon = icons[o.Icon];
    }
    const x = idx + i;
    if (o.Using) {
      const id = parseInt(o.Using, 36);
      const p = spellArr[id];
      if (p) {
        setProto(o, p);
      } else {
        waitUpdate[id] = (waitUpdate[id] || []).concat(o);
      }
    }
    o.update = function () {
      if (this.el) this.el.update();
      if (this.refs) this.refs.forEach((a) => a.update());
    };
    o.SpellID = spellIds[x] || spellIds[o.i];
    o.nm = o.SpellID.replace(o.SpellType + '_', '')
      .replace(/_/g, ' ')
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    spellArr[x] = o;
    const w = waitUpdate[x];
    if (w) {
      w.forEach((p) => {
        setProto(p, o);
      });
      delete waitUpdate[x];
    }
  });
  filter();
};

function detail(spell) {
  if (act?.el) act.el.classList.remove('a');
  act = spell;
  act.el.classList.add('a');
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
const pre = sidePanelInner.innerHTML;
closeBtn.onclick = function () {
  if (act) {
    act.el?.classList.remove('a');
    act = null;
    github.display = '';
  }
  const cls = isMobile ? (sidePanel.className ? '' : 's') : '';
  sidePanel.className = closeBtn.className = cls;
  sidePanelInner.innerHTML = pre;
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
  const menu = el(`
<button aria-label="${n}" role="menuitem">
    <span>${n.toUpperCase()}</span>
    <span class="dc"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 34 10" height="10" width="34" data-v-f1544235="">
    <path fill="#ddc9a7" d="${ph}"> 
    </path>
    </svg></span>
</button>`);
  menu.onclick = () => {
    cg(n, e);
  };
  menu.act = (e) => {
    menu.className = e === n ? 'act' : '';
    list.scrollTop = 0;
  };
  tbs.push(menu);
  menus.appendChild(menu);
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
xx('v0', 'k', (a) => a?.toLowerCase());
xx('v2', 'l');
cg('ALL', '');
let syncB,
  rows,
  n = '';
const frm = document.createDocumentFragment();
const run = () => {
  requestAnimationFrame(run);
  const s = JSON.stringify(filterOption);
  if (n !== s) {
    n = s;
    filter();
  }
  if (syncA !== syncB) {
    syncB = syncA = 0;
    const end = columns * rows,
      total = filters.length,
      start = Math.floor(list.scrollTop / cardHeight) * columns,
      viewStart = Math.max(0, start - end),
      viewEnd = Math.min(total, start + 2 * end);
    const wait = [];
    for (let idx = viewStart; idx < viewEnd; idx++) {
      const spell = filters[idx];
      if (displayed.delete(spell)) {
        spell.el.pos(idx);
        added.add(spell);
      } else wait.push([spell, idx]);
    }
    displayed.forEach((s) => {
      if (wait.length) {
        const [spell, i] = wait.pop();
        const el = s.el;
        const sp = el.spell;
        if (sp) {
          sp.el.spell = null;
          sp.el = null;
        }
        el.spell = spell;
        spell.el = el;
        el.update();
        el.pos(i);
        added.add(spell);
      } else {
        s.el.spell = null;
        s.el.remove();
        s.el = null;
      }
    });
    if (wait.length) {
      wait.forEach(([s, i]) => {
        added.add(s);
        spellCard(s, i, frm);
      });
      ctx.appendChild(frm);
    }
    displayed = added;
    added = new Set();
  }
};
let displayed = new Set();
let added = new Set();
const spellCard = (spell, idx, frm) => {
  const elm = el(`<div class="c" role="listitem" >
<div class="bd"><i></i><i></i><i></i><i></i></div>
    <span hidden>H</span>
    <i role="img"></i>
    <span class="lv">level -</span>
    <span class="tp"></span>
    <span class="cp"><span></span><button>+</button><button>-</button></span>
    <div class="l">
        <label></label>
        <div class="u">
            <div class="w">
                <p></p>
                <ul class="po"></ul>
                <ul></ul>
            </div>
        </div>
    </div></div>`);
  const titleEl = elm.querySelector('span[hidden]');
  const iconEl = titleEl.nextElementSibling;
  const lvEl = iconEl.nextElementSibling;
  const tpEl = lvEl.nextElementSibling;
  const nmEl = tpEl.nextElementSibling.nextElementSibling.firstElementChild;
  const dscEl = nmEl.nextElementSibling.firstElementChild.firstElementChild;
  const pmEl = dscEl.nextElementSibling;
  const smEl = pmEl.nextElementSibling;
  spell.el = elm;
  elm.spell = spell;
  elm.pos = (idx) => {
    const left = `${(idx % columns) * cardWidth}px`;
    const top = `${Math.floor(idx / columns) * cardHeight}px`;
    elm.style.transform = `translate3d(${left},${top},0)`;
  };
  elm.update = function () {
    const old = (this._ = this._ || {});
    const spell = this.spell;
    const {
      SpellID,
      mod = '',
      nm,
      ico = '',
      DisplayName,
      Icon = '',
      Level,
      SpellType,
      SpellProperties = [],
      SpellSuccess = []
    } = spell;
    if(act===spell)this.classList.add('a')
    else this.classList.remove('a')
    const desc = getDesc(spell, 'Description');
    if (mod !== old.mod) {
      old.mod = titleEl.title = mod;
    }
    if (old.SpellID !== SpellID) {
      iconEl.ariaLabel = `icon of the spell ${SpellID}`;
      if (old.DisplayName !== DisplayName) {
        old.DisplayName = DisplayName;
      }
      nmEl.textContent = DisplayName || nm;
    }
    if (old.ico !== ico) {
      old.Icon = Icon;
      const s = iconEl.style;
      iconEl.ariaLabel = `icon of ${Icon}`;
      if (ico) {
        const v = ico % 128;
        s.backgroundPositionX = -v * 48 + 'px';
        s.backgroundImage = `url(/${(ico - v) / 128}.webp)`;
      } else {
        s.backgroundPositionX = 0;
        s.backgroundImage = '';
      }
      iconEl.alt = Icon;
    }
    if (old.Level !== Level) {
      old.Level = Level;
      lvEl.textContent = `level ${Level ?? '-'}`;
    }
    if (SpellType !== old.SpellType) {
      old.SpellType = tpEl.textContent = SpellType;
    }
    if (old.desc !== desc) {
      old.desc = dscEl.innerHTML = desc;
    }
    if (old.SpellProperties !== SpellProperties) {
      old.SpellProperties = SpellProperties;
      pmEl.innerHTML = []
        .concat(SpellProperties)
        .map((e) => '<li>' + e + '</li>')
        .join('');
    }
    if (old.SpellSuccess !== SpellSuccess) {
      old.SpellSuccess = SpellSuccess;
      smEl.innerHTML = []
        .concat(SpellSuccess)
        .map((e) => '<li>' + e + '</li>')
        .join('');
    }
  };
  elm.update();
  elm.pos(idx);
  frm.appendChild(elm);
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
run();
if (_spells) {
  _spells.forEach(([a, b]) => loadSpell(a, b));
  _spells = null;
}
const cpMark = el('<span class="cm"><span>✔</span></span>');
const cpSly = cpMark.children[0].style;
sidePanelInner.onclick = function ({ target }) {
  const tag = target.tagName;
  if ('LABEL' === tag) {
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
