const data1 = require('./merged0.json')
const data2 = require('./merged2.json')


const fs = require('fs')
const m={}
const nm=fs.readFileSync(__dirname+"/english.xml").toString()
nm.split(/\r?\n+/).forEach(v=>{
    if(v){
        const [,k,vv] = /contentuid="(\w+)" version="1">(.+?)</.exec(v) || [];
        if(k&&vv){
            m[k]=vv
        }
    }
})

let str = `"ID","Name","Type","Stat","Desc"\n`;
[data1, data2].forEach(data => {
    const {save: {regions: {Templates: {GameObjects: items}}}} = data;
    items.forEach((i) => {
        let {
            MapKey: {value: v0 = ""} = {},
            DisplayName: {handle: v1 = ""} = {},
            Type: {value: v2 = ""} = {},
            Stats: {value: v3 = ""} = {},
            Description: {handle: v4 = ""} = {}
        } = i
        if(v1)v1=m[v1]||v1;
        if(v4)v4=m[v4]||v4;
        str += `"${v0}","${v1}","${v2}","${v3}","${v4}"\n`
    })
})
require('fs').writeFileSync("./scripts/out/rootTemplate.csv", str)
