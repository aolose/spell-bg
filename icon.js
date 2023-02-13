const icons = {};
require('fs')
    .readFileSync('./icon/Icons_Skills.lsx')
    .toString()
    .split('<node id="IconUV">')
    .forEach(v => {
        const o = {};
        let key='';
        v.split(/\r?\n/).forEach(vv => {
            const [, a] = /id="MapKey" type="FixedString" value="(.*?)"/.exec(vv) || [];
            const [, t, n] = /id="(.*?)" type="float" value="(.*?)"/.exec(vv) || [];
            if (a) key=a;
            if (n) {
                o[t]=parseFloat((2048*n).toFixed(2));
            }
        });
        if(key)icons[key]=o;
    });
require('fs').writeFileSync('./out/icons.js',`icons=${JSON.stringify(icons,'',' ')}`);
const icon = require('fs').readFileSync('./icon/index.html').toString()
    .replace('%%',new Date().toLocaleDateString())
require('fs').writeFileSync('./out/index.html',icon)
require('fs').copyFileSync('./icon/Icons_Skills.png','./out/Icons_Skills.png')
