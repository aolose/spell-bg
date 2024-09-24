import fs from 'fs';
import xmlParser from 'xml2json';
import path from 'path';
import cfg from '../../cfg.js';
import { merge } from './spells.js';
import { compressor, n2s } from './utils.js';

const splitWords = (str) => str.split(/(?=[^a-zA-Z0-9\-])|(?<=[^a-zA-Z0-9\-])/);
const { parse, zip, sort, dic } = compressor(splitWords);

const hash = (str) => {
  let h = 0,
    i,
    chr;
  if (str.length === 0) return '0000';
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    h = (h << 5) - h + chr;
    h |= 0;
  }
  return h.toString(32).replace(/-/g, '').slice(0, 5);
};
const spellIds = [];
const spellKeys = [];
const usedIcons = [];
const miniSpell = (o) => {
  const b = [];
  o.forEach((n) => {
    let x = '';
    const m = [];
    for (const [k, c] of Object.entries(n)) {
      const v = [].concat(c).join('\x02');
      let i = spellKeys.indexOf(k);
      if (i === -1) {
        i = spellKeys.length;
        spellKeys.push(k);
      }
      x += n2s(i);
      m.push(v);
    }
    b.push([x].concat(m).join('\x00'));
  });
  return '"' + b.join('\x01').replace(/"/g, '\\"') + '"';
};
const task = [];

export const parseData = () => {
  const { resolve } = path;
  const { unpackDir, english, spells } = cfg;
  const tooltips = {};
  const lang = {};
  const arrayName = {};
  const assets = 'public';
  const types = new Set();
  const bk = [];
  const spellsFileCount = 5;

  if (!fs.existsSync(assets)) fs.mkdirSync(assets);
  let scripts = '';
  let total = 0;
  const wsc = (src) => (scripts += `<script src='${src}' async></script>`);

  const wJs = (name, js) => {
    total++;
    const hs = hash(js);
    name = `${name}.${hs}.js`;
    parse(js);
    task.push([resolve(assets, name), js]);
    wsc(name);
  };
  const fx = (p) => {
    const d = path.dirname(p);
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: !0 });
    return p;
  };
  const read = (p) => {
    return fs.readFileSync(fx(p)).toString();
  };
  const parseTooltip = () => {
    const o = JSON.parse(
      xmlParser.toJson(
        fs
          .readFileSync(
            resolve(
              unpackDir,
              'Shared/Public/Shared/TooltipExtras/TooltipUpcastDescriptions.lsx'
            )
          )
          .toString(),
        {}
      )
    );
    o.save.region.node.children.node.forEach((a) => {
      const d = {};
      a.attribute.forEach(({ id, value, handle }) => {
        if (id === 'UUID') tooltips[value] = d;
        else d[id] = value || lang[handle] || handle;
      });
    });
  };
  const fileParser = (a, flag) => {
    const r = [];
    a.split(/\r?\n\r?\n/).forEach((v) => {
      const e = { mod: flag };
      v.split(/\r?\n/).forEach((n) => {
        if (/^new entry/.test(n))
          e.SpellID = JSON.parse(n.replace('new entry ', ''));
        else if (/^using/.test(n)) {
          e.Using = n.slice(6).replace(/"/g, '');
        } else if (/^data/.test(n)) {
          const [, b, s] = /"([^"]+)" "([^"]+)"/gi.exec(n) || [];
          if (s) {
            const c = s.replace(
              /([a-zA-Z]+\([0-9',.+\-a-zA-Z \/\\()_]*\))/gi,
              '<b>$1</b>'
            );
            if (b === 'TooltipUpcastDescription') {
              e[b] = tooltips[c].Name + '<br>' + tooltips[c].Text;
            } else if (
              ['DisplayName', 'Description', 'ExtraDescription'].includes(b)
            ) {
              const d = c.replace(/;\d+$/, '');
              e[b] = lang[d] || d;
            } else {
              if (/;/.test(c)) arrayName[b] = 1;
              e[b] = /^\d+$/.test(c) ? +c : c === 'unknown' ? '' : c || '';
            }
          }
        }
      });
      if (e.SpellType) types.add(e.SpellType);
      if (e.SpellID) r.push(e);
    });
    return r;
  };

  const parseLang = () => {
    const str = fs
      .readFileSync(resolve(unpackDir, english))
      .toString()
      .split('<content')
      .filter((a) => /contentuid/.test(a));
    str.forEach((a) => {
      const [k, v] = a
        .replace(/[\n\r]/g, '')
        .match(/(?<=contentuid=")(\w+)|(?<=>)(.*?)(?=<\/content)/g);
      lang[k] = v
        .replace(/(&lt;br&gt;)+/g, '<br>')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/LSTag.*?\/>/g, '')
        .replace(/LSTag.*?>/g, 'b>');
    });
  };

  const parseSpells = () => {
    const arr = [];
    spells.forEach(([name, flag]) => {
      const p = resolve(unpackDir, name);
      fs.readdirSync(p)
        .filter((a) => /^Spell_/.test(a))
        .forEach((a) =>
          arr.push(
            fileParser(fs.readFileSync(resolve(p, a)).toString(), flag).reduce(
              (a, b) => a.concat(b),
              []
            )
          )
        );
    });

    const cache = [];
    arr.flat().forEach((a) => {
      const ic = a.Icon;
      if (ic && 'unkown' !== ic && icons[ic]) {
        let i = usedIcons.indexOf(ic);
        if (i === -1) {
          i = usedIcons.length;
          usedIcons.push(ic);
        }
        a.Icon = i;
      }
      const o = merge(a);
      if (o) cache.push(o);
    });

    cache.sort((spell0, spell2) => {
      const n = +(spell0.Level ?? 99),
        l = +(spell2.Level ?? 99);
      return n === l
        ? spell0.SpellID.replace(spell0.SpellType + '_', '').toLowerCase() >
          spell2.SpellID.replace(spell2.SpellType + '_', '').toLowerCase()
          ? 1
          : -1
        : n > l
          ? 1
          : -1;
    });
    const extra = [];
    const pt = {}.__proto__;
    const len = cache.length;

    const patchUsing = (a) => {
      if ('string' !== typeof a.Using) return;
      const p = a.__proto__;
      if (p.mod) {
        let idx = cache.indexOf(p);
        if (idx === -1) {
          p.i = spellIds.indexOf(p.SpellID);
          const b = extra.indexOf(p);
          if (b === -1) {
            idx = len + extra.length;
            extra.push(p);
          } else {
            idx = len + b;
          }
        }
        a.Using = idx.toString(36);
        a.__proto__ = pt;
        patchUsing(p);
      }
    };

    cache.forEach((a) => {
      spellIds.push(a.SpellID);
      delete a.SpellID;
    });
    cache.forEach(patchUsing);
    extra.forEach((a) => {
      if (a.i === -1 || a.i === undefined)
        throw new Error('not Found Key ' + a.SpellID);
      delete a.SpellID;
    });
    let js = 0;
    let idx = 0;
    const ld = (n = Math.ceil(arr.flat().length / spellsFileCount)) => {
      if (bk.length >= n) {
        const nm = `${js++}`;
        wJs(nm, `${idx},${miniSpell(bk)})`);
        idx += bk.length;
        bk.length = 0;
      }
    };

    cache.concat(extra).forEach((o) => {
      delete o.refs;
      bk.push(o);
      Object.keys(o).forEach((k) => {
        if (arrayName[k]) {
          if (o[k].split) {
            o[k] = o[k].split(';').filter((a) => a.replace(/[, ]/g, ''));
          }
        }
      });
      ld();
    });
    ld(1);
  };

  try {
    fs.readdirSync('public').forEach((a) => {
      if (/^(\d+|i)\.\w+\.js/.test(a))
        fs.unlinkSync(path.resolve(cfg.assets, a));
    });
  } catch (e) {
    console.warn(e);
  }

  const icons = {};
  const parseIcon = (str, i = 0) => {
    str.split('<node id="IconUV">').forEach((v) => {
      const o = [0, 0, i];
      let key = '';
      v.split(/\r?\n/).forEach((vv) => {
        const [, a] =
          /id="MapKey" type="FixedString" value="(.*?)"/.exec(vv) || [];
        const [, t, n] = /id="(.*?)" type="float" value="(.*?)"/.exec(vv) || [];
        if (a) key = a;
        if (n) {
          switch (t) {
            case 'U1':
              if (n) o[0] = Math.floor((n * 2048) / 64);
              break;
            case 'V1':
              o[1] = Math.floor((n * 2048) / 64);
          }
        }
      });
      if (key) icons[key] = o;
    });
  };
  cfg.icons.forEach((a, i) => {
    parseIcon(read(resolve(unpackDir, a)), i);
  });
  parseLang();
  parseTooltip();
  parseSpells();

  const sk = spellKeys.join();
  const si = spellIds.join();
  const ic = usedIcons.join();
  const tp = [...types].join();
  parse(tp);
  parse(sk);
  parse(si);
  parse(ic);
  task.forEach((a) => {
    parse(a[1]);
  });

  sort();

  task.forEach(([p, d]) => {
    fs.writeFileSync(p, zip('loadSpell(' + d), { flag: 'w+' });
  });

  const patch = {
    scripts,
    total,
    dds: usedIcons.map((a) => {
      const v = icons[a];
      if (!v) console.log(a);
      return v;
    }),
    spellIds: zip(si),
    spellKeys: zip(sk),
    icons: zip(ic),
    dic: dic,
    types: zip(tp)
  };

  fs.writeFileSync(
    'src/plugin/patch.js',
    `export default ${JSON.stringify(patch).replace(/"(\w+?)":/g, '$1:')}`
  );
  return patch;
};
