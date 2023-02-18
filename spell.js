const fs = require('fs');
const arrayName = {};
const out = __dirname + '/out/'

const types = new Set()
const bk = []
const size = 80

if (!fs.existsSync(out)) fs.mkdirSync(out);
let scripts = ''
let s=0
const wsc = src => scripts += `<script onload="ok()" src='${src}.js' async></script>`
const wJs = (name, js) => {
    s++
    fs.writeFileSync(out + name + '.js', js, {flag: 'w+'});
    wsc(name)
}
try {
    fs.readdirSync(out).forEach(a => {
        fs.unlinkSync(out + a)
    })
} catch (e) {
    console.warn(e)
}
const fileParser = a => {
    const r = [];
    a.split(/\r?\n\r?\n/).forEach(v => {
        const e = {};
        v.split(/\r?\n/).forEach(n => {
            if (/^new entry/.test(n)) e.Name = JSON.parse(n.replace('new entry ', ''));
            else if (/^using/.test(n)) {
                e.Parent = n.substr(6).replace(/"/g, '')
            } else if (/^data/.test(n)) {
                const [, b, c] = /"([^"]+)" "([^"]+)"/gi.exec(n) || [];
                if (c) e[b] = /^\d+$/.test(c) ? +c : c;
                if (/;/.test(c)) arrayName[b] = 1;
            }
        });
        if (e.Name) r.push(e);
    });
    return r;
}

const parseSpells = (name, regex) => {
    const p = __dirname + '/' + name + '/'
    const arr = (fs.readdirSync(p) || [])
        .filter(a => {
            return regex.test(a)
        })
        .map(a => {
            return fileParser(fs.readFileSync(p + a).toString())
                .reduce((a, b) => a.concat(b), [])
        })
    let js = 0
    const ld = (n = size) => {
        if (bk.length >= n) {
            const nm = `${js++}`
            wJs(nm, `loadSpell(${JSON.stringify(bk)})`)
            bk.length = 0
        }
    }

    arr.forEach(ar => ar.forEach(o => {
        if (o) {
            const {SpellType} = o;
            types.add(SpellType)
            bk.push(o)
            ld()
            Object.keys(o).forEach(k => {
                if (arrayName[k]) {
                    if (o[k].split) {
                        o[k] = o[k].split(';').filter(a => a.replace(/[, ]/g, ''))
                    }
                }
            });
        }
    }))
    ld(1)
}

parseSpells('spells', /^Spell_/);

const icons = {};
const path = require('path');
const iconSiz = 50
const imgSize = iconSiz / 64 * 2048
const fx = (p) => {
    p = path.resolve(__dirname, p)
    const d = path.dirname(p)
    if (!fs.existsSync(d)) fs.mkdirSync(d, {recursive: !0})
    return p
}
const write = (p, d) => {
    fs.writeFileSync(fx(p), d, {flag: 'w+'})
}
const read = (p) => {
    return fs.readFileSync(fx(p)).toString()
}
read('./icon/Icons_Skills.lsx')
    .split('<node id="IconUV">')
    .forEach(v => {
        const o = {};
        let key = '';
        v.split(/\r?\n/).forEach(vv => {
            const [, a] = /id="MapKey" type="FixedString" value="(.*?)"/.exec(vv) || [];
            const [, t, n] = /id="(.*?)" type="float" value="(.*?)"/.exec(vv) || [];
            if (a) key = a;
            if (n) {
                o[t] = parseFloat((2048 * n).toFixed(2));
            }
        });
        if (key) icons[key] = o;
    });

const ico = 'i'
wJs(ico, `loadIcon(${JSON.stringify(icons, '', ' ')})`)
const icon = read('./icon/index.html')
    .replace(/2048px/g, imgSize + 'px')
    .replace(/64px/g, iconSiz + 'px')
    .replace('%%', new Date().toLocaleDateString())
    .replace('"%types%"', JSON.stringify([...types]))
    .replace('%scripts%', scripts)
    .replace('+0', `${s}`)
write('./out/index.html', icon)
const copy = a=>fs.copyFileSync(fx('./icon/'+a), fx('./out/'+a))
copy('Icons_Skills.png')
