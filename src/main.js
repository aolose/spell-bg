import Worker from './worker.js?worker';

const currentSpellLen = document.getElementById('tt');
const elementB = document.getElementById('b');
const elementC = document.getElementById('c');
const elementE = document.getElementById('e');
const elementInput = document.getElementById('cp');
const elementCtx = document.getElementById('v');
const elementZ = document.getElementById('z');
const list = document.querySelector('.ri');
const types = '%types%';
const all = 9999;
const checkAct = 0;
const setAct = 1;
const refresh = 2;
const resize = 3;
const loadIco = 4;
const setSpells = 5;
const render = 6;
const filterOption = 0;
let l = _ok;
_ok = null;

const sty = elementCtx.style;
const msgFields = [currentSpellLen, sty, elementB, elementCtx];
const fns = [setIco];
const myWorker = new Worker();
myWorker.onmessage = function ({ data }) {
  const { prop, val, target, fn, args } = JSON.parse(data);
  if (target !== undefined) {
    msgFields[target][prop] = val;
  } else {
    fns[fn](...args);
  }
};
const set = (target, prop, val) => {
  myWorker.postMessage(
    JSON.stringify({
      target,
      prop,
      val
    })
  );
};
const invoke = (fn, ...args) => {
  myWorker.postMessage(
    JSON.stringify({
      fn,
      args
    })
  );
};
const timer = {};

function copy(flag, key) {
  const name = key.replace(/^Honor/, '');
  const type = flag === '+' ? 'AddSpell' : 'RemoveSpell';
  elementInput.value = `${type}(GetHostCharacter(),'${name}')`;
  elementInput.select();
  elementInput.setSelectionRange(0, 1000);
  clearTimeout(timer[key]);
  navigator.clipboard.writeText(elementInput.value).then(() => {
    const v = (s) => {
      const a = document.getElementById(key)?.querySelector('.cp span');
      if (a) a.innerText = s;
    };
    v(`${type.replace('S', ' S')} Copied!`);
    timer[key] = setTimeout(v, 3e3, '');
  });
}

window.ok = () => {
  const e = (100 * ++l) / all;
  elementZ.style.width = e + '%';
  100 === e && (elementZ.style.opacity = '0');
};

function setIco(o) {
  elementCtx.querySelectorAll('i').forEach((e) => {
    const t = e.parentElement.id;
    e.style = o[t]?.ico;
  });
}

window.loadIcon = (arr) => {
  invoke(loadIco, arr);
};

window.loadSpell = (items) => {
  invoke(setSpells, items);
};

elementCtx.onclick = async ({ target }) => {
  const n = elementCtx.children;
  const card = [].find.call(n, (e) => e === n || e.contains(target));
  const key = card && card.id;
  if ('BUTTON' === target.tagName) {
    copy(target.textContent, key);
    return;
  }
  if (key) {
    elementB.className = 's';
    elementE.className = 's';
    invoke(checkAct, key);
  }
};
elementE.onclick = function () {
  invoke(setAct, '');
  elementB.className = '';
  elementE.className = '';
  elementB.innerHTML = `<pre>
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
elementE.onclick(null);
const el = (e) => {
  const t = document.createElement('div');
  t.innerHTML = e;
  return t.children[0];
};

const tbs = [];
const setCategory = (name, type) => {
  set(filterOption, 't', type);
  tbs.forEach((t) => t.act(name));
};

[''].concat(types).forEach((e, t) => {
  const n = e || 'ALL';
  const l = el(`
<div role="tab" aria-selected="true" aria-controls="spell-type" >
    ${n.toUpperCase()}
</div>`);
  l.onclick = () => {
    setCategory(n, e);
  };
  l.act = (e) => {
    l.className = e === n ? 'act' : '';
  };
  tbs.push(l);
  elementC.appendChild(l);
});

const setInputEl = (id, prop, fixProp = (a) => a) => {
  const n = document.getElementById(id);
  let timer = -1;
  n.oninput =
    n.onchange =
    n.onpaste =
    n.onblur =
      function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          set(filterOption, prop, fixProp(n.value.replace(/^\s+|\s+$/, '')));
          invoke(refresh);
        }, 200);
      };
};
setInputEl('v0', 'k', (a) => (a ? a.replace(a[0], a[0].toUpperCase()) : a));
setInputEl('v2', 'l');
setCategory('ALL', '');

list.onscroll = () => invoke(refresh);
const ons = () => {
  invoke(resize, list.offsetWidth, list.offsetHeight);
};
ons();
window.onresize = ons;
if (_icons) {
  loadIcon(_icons);
  _icons = null;
}
if (_spells) {
  _spells.forEach(loadSpell);
  _spells = null;
}
const run = () => {
  requestAnimationFrame(run);
  invoke(render, list.scrollTop);
};
run();
