const fs = require('fs');
const arrayKey = {};
const fileParser = a => {
    const r = [];
    a.split(/\r?\n\r?\n/).forEach(v => {
        const e = {};
        v.split(/\r?\n/).forEach(n => {
            if (/^new entry/.test(n)) e.Key = JSON.parse(n.replace('new entry ', ''));
            else if (/^using/.test(n)) {
                e.Parent = n.substr(6).replace(/"/g, '')
            } else if (/^data/.test(n)) {
                const [, b, c] = /"([ \w-_]+)" "([ ,()a-z0-9-_:><.;]+)"/gi.exec(n) || [];
                if (c) e[b] = /^\d+$/.test(c) ? +c : c;
                if (/;/.test(c)) arrayKey[b] = 1;
            }
        });
        if (e.Key) r.push(e);
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
            const {SpellType, Key} = o;
            (types[SpellType] = (types[SpellType] || [])).push(Key);
            spells[Key] = o;
            Object.keys(o).forEach(k => {
                if (arrayKey[k]) {
                    o[k] = o[k].split(';').filter(a => a)
                }
            });
        }
    }))
    const js = `const data = ${JSON.stringify({spells,types},'',' ')};
const parse = o=>{
const {Parent} = o;
const p = data.spells[Parent];
if(p) {
 delete o.Parent;
 const pp = parse(p);
 Object.keys(pp).forEach(k=>{
    if(!o.hasOwnProperty(k)){
       o[k]=pp[k]
    }
 })
} 
return o;
}
Object.values(data.spells).forEach(parse);
    `;
    const o = __dirname+'/out/'
    if (!fs.existsSync(o)) fs.mkdirSync(o);
    fs.writeFileSync(o + name + '.js', js);
}


toJS('spells', /^Spell_/);

