let act = '';

function rd() {
  tt.textContent = `${filters.length}`;
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
let l = to;
to=null
const types = '%types%',
  spells = {};
let syncA = 0,
  icons = {};
const h = 170,
  w = 330,
  spellArr = [],
  filters = [],
  ft = {},
  z = document.getElementById('z'),
  list = document.querySelector('.ri'),
  tt = document.getElementById('tt'),
  b = document.getElementById('b'),
  c = document.getElementById('c'),
  e = document.getElementById('e'),
  ctx = document.getElementById('v');

let columns = Math.max(1, Math.floor((list.offsetWidth - 20) / w));
function resetListHeight() {
  const e = Math.ceil(filters.length / columns);
  sty.height = h * e + 20 + 'px';
}

const regexIfy = (e) => {
  const t = /^\/(.+?)\/([giy]*$)/.exec(e);
  if (t)
    try {
      return new RegExp(t[1], (t[2] || '').replace('i', '') + 'i');
    } catch (e) {
    }
};

function filter() {
  filters.length = 0;
  const { t: e, k: t, l: n } = ft;
  spellArr.forEach((l, s) => {
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
          let e = 0;
          if (
            ([].concat(t).forEach((t) => {
              if (/^\d+$/.test(t)) +t >= n && (e = 1);
              else {
                const l = /DealDamage\((\d+)d(\d+)\+?(\d*),.*?\)/,
                  [, s, c, o] = l.exec(t) || [];
                c && s * c + (+o || 0) >= n && (e = 1);
              }
            }),
              !e)
          )
            return;
        }
      } else if (-1 === (t + '').toLowerCase().indexOf((e + '').toLowerCase()))
        return;
      return 1;
    };
    if (!e || e === l.SpellType) {
      if (t && n) {
        if (!l.hasOwnProperty(t)) {
          if ('*' === n) return;
          else if ('-' === n) return filters.push(s);
        }
        let e = 0;
        for (const [s, o] of Object.entries(l)) {
          const l = regexIfy(t);
          if (
            (l?.test(s) ||
              s.toLowerCase() === t.toLowerCase() ||
              (/\*/.test(t) &&
                new RegExp(t.replace(/\*/g, '.*'), 'gi').test(s))) &&
            check(n, o)
          ) {
            e = 1;
            break;
          }
        }
        if (!e) return;
      }
      filters.push(s);
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
  rd();
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

window.ok = () => {
  const e = (100 * ++l) / all;
  z.style.width = e + '%';
  100 === e && (z.style.opacity = '0');
};

window.loadIcon = (arr) => {
  const n = arr.length / 4;
  const [ks, vs] = [arr.slice(0, n), arr.slice(n)];
  ks.forEach((k, i) => {
    icons[k] = vs.slice(i * 3, (i + 1) * 3);
  });
  Object.values(spells).forEach(spell => (spell.ico = ico(spell.Icon)));
  ctx.querySelectorAll('i').forEach((e) => {
    const t = e.parentElement.id;
    const n = spells[t];
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
    const t = (o._flag || '') + o.Name;
    spells[t] = o;
    spellArr.push(o);
  });
  Object.values(spells).forEach((a) => {
    merge(a);
    patchParams(a);
  });
  filter();
};
if(ti){
  loadIcon(ti)
  ti=null
}
if(ts){
  ts.forEach(loadSpell)
  ts=null
}
const sty = ctx.style;

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
  n.forEach((t) => {
    if ('-' === t) return;
    const n = e[t];
    let s;
    s =
      t !== '_flag' && (!isNaN(n) || n?.length)
        ? Array.isArray(n)
          ? `<ul>${n
            .filter(Boolean)
            .map((e) => `<li>${e}</li>`)
            .join('')}</ul>`
          : `<span>${n}</span>`
        : '';
    const c = e._ && e._[t] ? '_' : '';
    if (s) cpm += `<div>\n<label class="${c}">${t}</label>${s}\n</div>`;
  });
  return cpm;
}

ctx.onclick = (t) => {
  const n = ctx.children,
    l = t.target,
    s = [].find.call(n, (e) => e === n || e.contains(l)),
    f = (s && s._flag) || '',
    c = s && s.id;
  if (c) {
    b.className = 's';
    e.className = 's';
    if (spells[f + c].Name !== act) b.innerHTML = ps(spells[f + c]);
  }
};
e.onclick = function() {
  act = '';
  syncA++;
  b.className = '';
  e.className = '';
  b.innerHTML = `<pre>
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
e.onclick(null);
const el = (e) => {
  const t = document.createElement('div');
  t.innerHTML = e;
  return t.children[0];
};
let t = -1;
const tbs = [];
const cg = (e, t) => {
  ft.t = t;
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
  };
  tbs.push(l);
  c.appendChild(l);
});
const xx = (e, t, f = (a) => a) => {
  const n = document.getElementById(e);
  let l = -1;
  n.oninput =
    n.onchange =
      n.onpaste =
        n.onblur =
          function() {
            clearTimeout(l);
            l = setTimeout(() => {
              ft[t] = f(n.value.replace(/^\s+|\s+$/, ''));
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
  const s = JSON.stringify(ft);
  if (n !== s) {
    n = s;
    filter();
  }
  if (syncA !== syncB) {
    syncB = syncA = 0;
    {
      const end = columns * rows,
        total = filters.length,
        start = Math.floor(list.scrollTop / h) * columns,
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
     style="left:${(idx % columns) * w}px;top:${Math.floor(idx / columns) * h}px"
>
    <span title="${_flag}" hidden>H</span>
    <i style="${ico}" role="img" aria-label="icon of the spell ${Name}" title="${DisplayName || Description}"></i>
    <span class="lv">level ${Level || '-'}</span>
    <span class="tp">${SpellType}</span>
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
      ctx.innerHTML = tmpl;
    }
  }
};
list.onscroll = () => syncA++;
window.onresize = () => {
  let e = Math.max(1, Math.floor((list.offsetWidth - 20) / w)),
    n = Math.ceil((list.offsetHeight - 20) / h);
  if (columns !== e || rows !== n) {
    columns = e;
    rows = n;
    syncA++;
    resetListHeight();
  }
};
onresize(null);
run();
