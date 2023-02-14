const fs = require('fs');
const arrayName = {};
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

const toJS = (name, regex) => {
    const p = __dirname+'/'+name+'/'
    const arr = (fs.readdirSync(p) || [])
        .filter(a => {
            return regex.test(a)
        })
        .map(a => {
            return fileParser(fs.readFileSync(p+a).toString())
                .reduce((a, b) => a.concat(b), [])
        })

    const spells = {}
    const types = {}
    arr.forEach(ar => ar.forEach(o => {
        if (o) {
            const {SpellType, Name} = o;
            types[SpellType] = 1;
            spells[Name] = o;
            Object.keys(o).forEach(k => {
                if (arrayName[k]) {
                    if(o[k].split){
                        o[k] = o[k].split(';').filter(a => a.replace(/, /g,''))
                    }
                }
            });
        }
    }))
    const js = `data = ${JSON.stringify({spells,types},'',' ')}`;
    const o = __dirname+'/out/'
    if (!fs.existsSync(o)) fs.mkdirSync(o);
    fs.writeFileSync(o + name + '.js', js,{ flag: 'w+' });
}

toJS('spells', /^Spell_/);

