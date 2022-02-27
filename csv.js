const fs = require('fs');
const fileParser = a => {
    const r = [];
    a.split(/\r?\n\r?\n/).forEach(v => {
        const e = {};
        v.split(/\r?\n/).forEach(n => {
            if (/^new entry/.test(n)) e.name = JSON.parse(n.replace('new entry ', ''));
            else if(/^using/.test(n)){
                e.using = n.substr(6)
            } else if (/^data/.test(n)) {
                const [, b, c] = /"([ \w-_]+)" ("[ ,()a-z0-9-_:><.;]+")/gi.exec(n) || [];
                if (c) e[b] = /^\d+$/.test(c) ? +c : c;
            }
        });
        if (e.name) r.push(e);
    });
    return r;
}

const toCvs = (dir,name, regex, title,re) => {
    let s = [];
    const p = __dirname+ dir;
    const arr = (fs.readdirSync(p) || [])
        .filter(a => regex.test(a))
        .map(a => fileParser(
            fs.readFileSync(p+'/'+a).toString())
            .reduce((a, b) => a.concat(b), []))

    arr.forEach(o => {
        o.forEach(a => {
            if(re&&!a[re]){
                return ;
            }
            const v = [];
            title.forEach(n => {
                let vv = a[n];
                if (vv === undefined) vv = '';
                v.push(vv);
            })
            s.push(v);
        })
    })
    s.forEach(a => a.length = title.length);
    const txt = [title].concat(s)
        .map(a => a.join(','))
        .join('\n');
    if(!fs.existsSync(__dirname+'/out')) fs.mkdirSync(__dirname+'/out');
    fs.writeFileSync(__dirname+'/out/'+name + '.csv', txt);
}



// toCvs('/spells','spells',/^Spell_/,["name","SpellType","UseCosts","SpellSuccess"]);
toCvs('/wpn','armor',/^Armor/,["name","RootTemplate","Rarity","ValueOverride","Boosts"],'RootTemplate');
toCvs('/wpn','weapon',/^Weapon/,["name","RootTemplate","Rarity","Damage","Damage Type","ValueOverride","Boosts"],'RootTemplate');
toCvs('/wpn','object',/^Object/,["name","RootTemplate","using","Weight"],'RootTemplate');
