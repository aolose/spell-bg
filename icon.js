const icons = {};
const fs = require('fs');
const path = require('path');

fs
    .readFileSync('./icon/Icons_Skills.lsx')
    .toString()
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

const fx = (p)=>{
    p=path.resolve(__dirname,p)
    const d = path.dirname(p)
    if(!fs.existsSync(d))fs.mkdirSync(d,{recursive:!0})
    return p
}
const write = (p, d) => {
    fs.writeFileSync(fx(p), d, {flag: 'w+'})
}
const read = (p) => {
    return fs.readFileSync(fx(p)).toString()
}

write('./out/icons.js', `icons=${JSON.stringify(icons, '', ' ')}`);
const icon = read('./icon/index.html')
    .replace('%%', new Date().toLocaleDateString())
write('./out/index.html', icon)
fs.copyFileSync(fx('./icon/Icons_Skills.png'), fx('./out/Icons_Skills.png'))
