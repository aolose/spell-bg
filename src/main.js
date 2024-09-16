let act = null;
let spellKeyMap = {};

function setCount() {
  currentSpellLen.textContent = `${filters.length}`;
}

function patchParams(e) {
  ['TooltipUpcastDescriptionParams', 'DescriptionParams'].forEach((a) => {
    if (!e[a]) return;
    const d = a.replace(/Params$/, '');
    if (!e[d]) return delete e[a];
    []
      .concat(e[a])
      .forEach((a, i) => (e[d] = e[d].replace(`[${i + 1}]`, `${a}`)));
  });
}

const all = 9999;
let l = _ok;
const types = '%types%';
let syncA = 0;
const icons = {};
_ok = null;
const cardHeight = 170;
const cardWidth = 330;
const spellArr = [];
const filters = [];
const filterOption = {};
const z = document.getElementById('z');
const list = document.querySelector('.ri');
const currentSpellLen = document.getElementById('tt');
const sidePanel = document.getElementById('b');
const menu = document.getElementById('c');
const closeBtn = document.getElementById('e');
const ipt = document.getElementById('cp');
const ctx = document.getElementById('v');
let columns = Math.max(1, Math.floor((list.offsetWidth - 20) / cardWidth));
const sty = ctx.style;

sidePanel.ontouchstart = gesture;

function gesture(e) {
  if (closeBtn.className !== 's') return;
  const x = e.touches[0].clientX;
  const t = Date.now();
  const cancel = () => {
    sidePanel.ontouchcancel = sidePanel.ontouchend = null;
  };
  sidePanel.ontouchcancel = cancel;
  sidePanel.ontouchend = (e) => {
    if (Date.now() - t < 500 && e.changedTouches[0].clientX - x > 100) {
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

function copy(flag, spell) {
  const name = spell.Name;
  const type = flag === '+' ? 'AddSpell' : 'RemoveSpell';
  ipt.value = `${type}(GetHostCharacter(),'${name}')`;
  ipt.select();
  ipt.setSelectionRange(0, 1000);
  clearTimeout(cpField?.t);
  navigator.clipboard.writeText(ipt.value).then(() => {
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
  spellArr.forEach((spell, s) => {
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
                debugger;
              }
            } else {
              const l = /DealDamage\((\d+)d?(\d*)\+?(\d*),.*?\)/;
              const [, max, multi = 1, base = 0] = l.exec(t) || [];
              if (max * multi + +base >= n) {
                debugger;
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
        if (!spell.hasOwnProperty(prop)) {
          if ('*' === value) return;
          else if ('-' === value) return filters.push(s);
        }
        let e = 0;
        for (const [spellProp, spellValue] of Object.entries(spell)) {
          if ('_flag' !== spellProp && /[a-z_]/.test(spellProp[0])) continue;
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
      filters.push(s);
    }
  });
  resetListHeight();
  setCount();
  syncA++;
}

const getParentSpell = (spell) => {
  const { Using } = spell;
  const list = [].concat(spellKeyMap[Using]);
  for (const k of list) {
    if (k !== undefined) {
      const p = spellArr[k];
      if (p !== spell) return p;
    }
  }
};

function merge(spell) {
  if (!spell) return;
  if (!spell._) {
    Object.keys(spell).forEach((t) => {
      spell[t] || delete spell[t];
    });
    spell._ = {};
  }
  let parent = getParentSpell(spell);
  if (parent) {
    parent = merge(parent);
    parent &&
      Object.keys(parent).forEach((t) => {
        if (/[A-Z]/.test(t)) {
          if (!spell.hasOwnProperty(t)) {
            spell[t] = parent[t];
            spell._[t] = 1;
          }
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

window.ok = () => {
  const e = (100 * ++l) / all;
  z.style.width = e + '%';
  if (100 === e) {
    z.style.opacity = '0';
    window.ok = null;
  }
};

window.loadIcon = (arr) => {
  const n = arr.length / 4;
  const [ks, vs] = [arr.slice(0, n), arr.slice(n)];
  ks.forEach((k, i) => {
    icons[k] = vs.slice(i * 3, (i + 1) * 3).map(Number);
  });
  spellArr.forEach((spell) => (spell.ico = ico(spell.Icon)));
  ctx.querySelectorAll('i').forEach((e) => {
    const n = e.parentElement.spell;
    e.style = n.ico;
  });
};
window.loadSpell = (items) => {
  items.forEach((fields) => {
    const n = fields.length / 2;
    const [ks, vs] = [fields.slice(0, n), fields.slice(n)];
    const o = {};
    ks.forEach((a, b) => {
      o[sk[a]] = vs[b];
    });
    spellArr.push(o);
  });
  spellArr.forEach((a) => {
    merge(a);
    patchParams(a);
  });
  spellArr.sort((e, t) => {
    const n = e.lv,
      l = t.lv;
    return n === l ? (e._nm > t._nm ? 1 : -1) : n > l ? 1 : -1;
  });
  spellKeyMap = {};
  spellArr.forEach((a, i) => {
    a._k = i;
    const t = a.Name;
    const v = spellKeyMap[t];
    if (v !== undefined) {
      spellKeyMap[t] = [v, i];
    } else spellKeyMap[t] = i;
  });
  filter();
};

function ps(e) {
  if (act) act.classList.remove('a');
  act = e._el;
  act.classList.add('a');
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
      /[A-Z]/.test(key[0]) && (!isNaN(n) || n?.length)
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

ctx.onclick = ({ target }) => {
  const children = ctx.children;
  const card = [].find.call(
    children,
    (child) => child === children || child.contains(target)
  );
  if (!card) return;
  if ('BUTTON' === target.tagName) {
    copy(target.textContent, card.spell);
    return;
  }
  sidePanel.className = 's';
  closeBtn.className = 's';
  if (card !== act) sidePanel.innerHTML = ps(card.spell);
};
closeBtn.onclick = function () {
  if (act) {
    act.classList.remove('a');
    act = null;
  }
  syncA++;
  sidePanel.className = '';
  closeBtn.className = '';
  sidePanel.innerHTML = `<pre>
Content based on %%.
The filter supports regular expressions
and is case insensitive.

Name:
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
     Name: level   Value: -
     Honour spells:
     Name: _flag   Value: *
     Spells Damage > 500:
     Name: spell*   Value: >500
 </pre><a href='https://github.com/aolose/spell-bg' target='_blank'>
 <img alt='github' src='https://github.githubassets.com/favicons/favicon.svg'/></a>`;
};
closeBtn.onclick(null);
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
  const l = el(`
<div role="tab" aria-selected="true" aria-controls="spell-type" >
    ${n.toUpperCase()}
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
        spellCard(spellArr[filters[idx]], idx, frm);
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
  let elm = spell._el;
  if (elm) {
    elm.style.left = left;
    elm.style.top = top;
    if (!displayed.delete(elm)) frm.appendChild(elm);
  } else {
    const {
      Name,
      _flag = '',
      nm,
      ico,
      DisplayName,
      Description = '',
      Level,
      SpellType,
      SpellProperties = [],
      SpellSuccess = []
    } = spell;
    elm = el(`
<div class="c" 
     role="listitem" 
     style="left:${left};top:${top}"
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
</div>`);
    frm.appendChild(elm);
    spell._el = elm;
    elm.spell = spell;
  }
  added.add(elm);
};
list.onscroll = () => syncA++;
window.onresize = () => {
  let e = Math.max(1, Math.floor((list.offsetWidth - 20) / cardWidth)),
    n = Math.ceil((list.offsetHeight - 20) / cardHeight);
  if (columns !== e || rows !== n) {
    columns = e;
    rows = n;
    syncA++;
    resetListHeight();
  }
};
onresize(null);
run();
if (_icons) {
  loadIcon(_icons);
  _icons = null;
}
if (_spells) {
  _spells.forEach(loadSpell);
  _spells = null;
}
