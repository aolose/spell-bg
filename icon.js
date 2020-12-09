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
require('fs').writeFileSync('./out/icons.js',`const icons=${JSON.stringify(icons,'',' ')}`);
