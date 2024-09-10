const fs = require('fs');
const xmlParser = require('xml2json');
const path = require('path');
const unpackData = 'D:/Program Files (x86)/GOG Galaxy/Games/bg3mmd/UnpackedData/'
const langFile = 'English/Localization/English/english.loca.xml'
const tooltips = {}
const lang = {}
const spells = [
    'Gustav/Public/GustavDev/Stats/Generated/Data',
    'Shared/Public/Shared/Stats/Generated/Data',
    'Gustav/Public/Honour/Stats/Generated/Data'
]
const iconsData = [
    'Shared/Public/Shared/GUI/Icons_Skills.lsx',
    'Shared/Public/SharedDev/GUI/Icons_Skills.lsx'
]
const arrayName = {};
const out = __dirname + '/out/'
const types = new Set()
const bk = []
const size = 80
const sliceH = 128
const iconSiz = 48
const imgW = 1024
const scale = iconSiz / 64
const bgW = scale * 2048
const bgH = bgW / imgW * sliceH
if (!fs.existsSync(out)) fs.mkdirSync(out);
let scripts = ''
let s = 0
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

const fx = (p) => {
    p = /:/.test(p) ? p : path.resolve(__dirname, p)
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
const parseTooltip = () => {
    const o = JSON.parse(xmlParser
        .toJson(fs.readFileSync(
            path.resolve(unpackData, 'Shared/Public/Shared/TooltipExtras/TooltipUpcastDescriptions.lsx')
        ).toString(), {}))
    o.save.region.node.children.node.forEach(a => {
        const d = {}
        a.attribute.forEach(({id, value, handle}) => {
            if (id === 'UUID') tooltips[value] = d
            else d[id] = value || lang[handle] || handle
        })
    })
}
const fileParser = a => {
    const r = [];
    a.split(/\r?\n\r?\n/).forEach(v => {
        const e = {};
        v.split(/\r?\n/).forEach(n => {
            if (/^new entry/.test(n)) e.Name = JSON.parse(n.replace('new entry ', ''));
            else if (/^using/.test(n)) {
                e.Using = n.slice(6).replace(/"/g, '')
            } else if (/^data/.test(n)) {
                const [, b, c] = /"([^"]+)" "([^"]+)"/gi.exec(n) || [];
                if (c) {
                    if (b === 'TooltipUpcastDescription') {
                        e[b] = tooltips[c].Name+'<br>'+tooltips[c].Text
                    } else if (['DisplayName','Description'].includes(b)) {
                        const d = c.replace(/;\d+$/, '')
                        e[b] = lang[d] || d
                    } else {
                        if (/;/.test(c)) arrayName[b] = 1;
                        e[b] = /^\d+$/.test(c) ? +c : c === "unknown" ? "" : c;
                    }
                }
            }
        });
        if (e.Name) r.push(e);
    });
    return r;
}

const parseLang = () => {
    const str = fs.readFileSync(path.resolve(unpackData, langFile)).toString().split('<content')
        .filter(a => /contentuid/.test(a))
    str.forEach(a => {
        const [k, v] = a.replace(/[\n\r]/g,'')
            .match(/(?<=contentuid=")(\w+)|(?<=>)(.*?)(?=<\/content)/g)
        lang[k] = v.replace(/&gt;/g,'<').replace(/&lt;/g,'<')
    })
}

const parseSpells = (regex) => {
    const arr = []
    spells.forEach((name) => {
        const p = path.resolve(unpackData, name)
        fs.readdirSync(p).filter(a => /^Spell_/.test(a))
            .forEach(a => arr.push(fileParser(fs.readFileSync(path.resolve(p, a)).toString())
                .reduce((a, b) => a.concat(b), [])))
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

parseLang()
parseTooltip()
parseSpells()

const icons = {};

const cIcon = (str, i = 0) => {
    str.split('<node id="IconUV">')
        .forEach(v => {
            const o = {};
            let key = '';
            v.split(/\r?\n/).forEach(vv => {
                const [, a] = /id="MapKey" type="FixedString" value="(.*?)"/.exec(vv) || [];
                const [, t, n] = /id="(.*?)" type="float" value="(.*?)"/.exec(vv) || [];
                if (a) key = a;
                if (n) {
                    switch (t) {
                        case'U1':
                            if (n) o.x = parseFloat((2048 * n * 100 / (2048 - 64)).toFixed(2))
                        case'V1':
                            o.n = Math.floor(imgW * n / sliceH)
                            o.y = parseFloat(((bgW * n % bgH) * 100 / (bgH - iconSiz)).toFixed(2))
                    }
                }
            });
            if (key) icons[key] = o
            if (i) o.n = (+o.n || 0) + (i * 8)
        });
}
iconsData.forEach((a, i) => {
    cIcon(read(path.resolve(unpackData, a)), i)
})
const ico = 'i'
wJs(ico, `loadIcon(${JSON.stringify(icons, '', ' ')})`)
const copy = (a, b) => fs.copyFileSync(fx('./icon/' + a), fx('./out/' + (b || a)))
fs.readdirSync('./icon/img').forEach((a) => copy('img/' + a, a))
const icon = read('./icon/index.tmpl')
    .replace('%scripts%', scripts)
    .replace('css', read('./icon/0.scss')
        .replace('2048px 2048px', `${bgW}px ${bgH}px`)
        .replace(/64px/g, iconSiz + 'px')
    )
    .replace('js', read('./icon/0.js')
        .replace('%%', new Date().toLocaleDateString())
        .replace('"%types%"', JSON.stringify([...types]))
        .replace('9999', `${s}`)
    )
write('./out/index.html', icon)