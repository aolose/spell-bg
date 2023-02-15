const icons = {};
const fs = require('fs');
const path = require('path');
const iconSiz = 50
const imgSize= iconSiz/64*2048
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

write('./out/icons.js', `icons=${JSON.stringify(icons, '', ' ')}`);
const icon = read('./icon/index.html')
    .replace(/2048px/g, imgSize+'px')
    .replace(/64px/g, iconSiz+'px')
    .replace('%%', new Date().toLocaleDateString())
write('./out/index.html', icon)
fs.copyFileSync(fx('./icon/Icons_Skills.png'), fx('./out/Icons_Skills.png'))
