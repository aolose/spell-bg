import fs from 'fs';
import xmlParser from 'xml2json';
import path from 'path';
import cfg from '../../cfg.js';
const spellKeys = []
const miniIco = (o)=>{
  return Object.keys(o).concat(Object.values(o)).flat().join()
}
const miniSpell = (o)=>{
    if(Array.isArray(o)){
      const b = []
      o.forEach(n=>{
        const x = []
        const m = []
        for(const [k,v] of Object.entries(n)){
          const i = spellKeys.indexOf(k)
          if(i>-1)x.push(i)
          else {
            x.push(spellKeys.length)
            spellKeys.push(k)
          }
          m.push(v)
        }
        b.push(x.concat(m))
      })
      return JSON.stringify(b)
    }
}

export const parseData = () => {
  const { resolve } = path;
  const { unpackDir, english, spells } = cfg;
  const tooltips = {};
  const lang = {};
  const arrayName = {};
  const assets = 'public';
  const types = new Set();
  const bk = [];
  const size = 300;
  const sliceH = 128;
  const iconSiz = 48;
  const imgW = 1024;
  const scale = iconSiz / 64;
  const bgW = scale * 2048;
  const bgH = (bgW / imgW) * sliceH;

  if (!fs.existsSync(assets)) fs.mkdirSync(assets);
  let scripts = '';
  let total = 0;
  const wsc = (src, isIcon) =>
    (scripts += `<script src='${src}.js' onload='ok()' async></script>`);

  const wJs = (name, js) => {
    total++;
    fs.writeFileSync(resolve(assets, name + '.js'), js, { flag: 'w+' });
    wsc(name, name === 'i');
  };
  const fx = (p) => {
    const d = path.dirname(p);
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: !0 });
    return p;
  };
  const write = (p, d) => {
    fs.writeFileSync(fx(p), d, { flag: 'w+' });
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
      const e = { _flag: flag };
      v.split(/\r?\n/).forEach((n) => {
        if (/^new entry/.test(n))
          e.Name = JSON.parse(n.replace('new entry ', ''));
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
      if (e.Name) r.push(e);
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
    let js = 0;
    const ld = (n = size) => {
      if (bk.length >= n) {
        const nm = `${js++}`;
        wJs(nm, `loadSpell(${miniSpell(bk)})`);
        bk.length = 0;
      }
    };

    arr.forEach((ar) =>
      ar.forEach((o) => {
        if (o) {
          const { SpellType } = o;
          types.add(SpellType);
          bk.push(o);
          ld();
          Object.keys(o).forEach((k) => {
            if (arrayName[k]) {
              if (o[k].split) {
                o[k] = o[k].split(';').filter((a) => a.replace(/[, ]/g, ''));
              }
            }
          });
        }
      })
    );
    ld(1);
  };

  try {
    fs.readdirSync('public').forEach((a) => {
      if (/^\d+\.js/.test(a)) fs.unlinkSync(path.resolve(cfg.assets, a));
    });
  } catch (e) {
    console.warn(e);
  }

  parseLang();
  parseTooltip();
  parseSpells();

  const icons = {};

  const cIcon = (str, i = 0) => {
    str.split('<node id="IconUV">').forEach((v) => {
      const o = [];
      let key = '';
      v.split(/\r?\n/).forEach((vv) => {
        const [, a] =
        /id="MapKey" type="FixedString" value="(.*?)"/.exec(vv) || [];
        const [, t, n] = /id="(.*?)" type="float" value="(.*?)"/.exec(vv) || [];
        if (a) key = a;
        if (n) {
          switch (t) {
            case 'U1':
              if (n)
                o[0] = parseFloat(((2048 * n * 100) / (2048 - 64)).toFixed(2));
              break
            case 'V1':
              o[1] = Math.floor((imgW * n) / sliceH);
              o[2] = parseFloat(
                ((((bgW * n) % bgH) * 100) / (bgH - iconSiz)).toFixed(2)
              );
          }
        }
      });
      if (key) icons[key] = o;
      if (i) o[1] = (+o[1] || 0) + i * 8;
    });
  };
  cfg.icons.forEach((a, i) => {
    cIcon(read(resolve(unpackDir, a)), i);
  });
  const ico = 'i';
  wJs(ico, `loadIcon('${miniIco(icons)}'.split(','))`);
  fs.writeFileSync('src/plugin/patch.js', `export default ${JSON.stringify({
    scripts,
    bgW,
    bgH,
    iconSiz,
    total,
    spellKeys:spellKeys.join(),
    types: [...types]
  }).replace(/"(\w+?)":/g,'$1:')}`);
};
