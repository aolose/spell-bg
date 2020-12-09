const data1 = require('./merged0.json')
const data2 = require('./merged2.json')
let str = `"Name","Type","Stats","ID","EquipmentSlots"\n`;
[data1, data2].forEach(data => {
    const {save: {regions: {Templates: {GameObjects: items}}}} = data;
    items.forEach((i) => {
        const {
            Name: {value: v0 = ""} = {},
            Type: {value: v1 = ""} = {},
            Stats: {value: v2 = ""} = {}
            , MapKey: {value: v3 = ""} = {}
        } = i
        v4="";
        if(Array.isArray(i.Equipment)){
           try {
               v4=i.Equipment[0].EquipmentSlots.value
           }catch (e){}
        }
        str += `"${v0}","${v1}","${v2}","${v3}","${v4}"\n`
    })
})
require('fs').writeFileSync("./out/rootTemplate.csv", str)
