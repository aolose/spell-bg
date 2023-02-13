const data1 = require('./_merged.json')
const data2 = require('./_merged1.json')


const fs = require('fs')
const m = {}
const nm = fs.readFileSync(__dirname + "/english.xml").toString()
nm.split(/\r?\n+/).forEach(v => {
    if (v) {
        const [, k, vv] = /contentuid="(\w+)" version="\d">(.+?)</.exec(v) || [];
        if (k && vv) {
            m[k] = vv
        }
    }
})
const ct = {}
const cd = `1  Gloves
2  Necklace
3  Helmet
4  Ring
f0953501-75b1-43a3-9986-d5e2d18fe801  LightCrossbow
5e004b79-461d-4617-0fbb-f0eeaee03212  Glaive
edb9b30a-3db2-4a36-7db7-fbfdda5ef450  ShortSword 
59075318-8af3-41ed-e7be-583c7bc39add  HandAxe
2b95bdd2-317f-41c1-c09e-a05f888b0a8b  Sickle
fac6dd3a-6ceb-40fc-e891-396f3cc38ad9  Shield
59075318-8af3-41ed-e7be-583c7bc39add  HandAxe
bcba31b8-507e-483a-2990-b02d3d0b5166  WarPick
cb322434-365d-47bf-5783-f2e2df0229b1  Spear 
520bf44f-b723-4e61-598d-ba19a747cac1  ShortBow 
b428632e-3137-47aa-8fae-ffddc26fc87c  Quarterstaff
98a38628-79fa-4f24-4e90-54deeff4ae03  Halberd
62ff4f7c-0724-43fa-7b99-0cef6a487355  GreatAxe
4d500520-1818-4a5e-b983-4932e2576929  Rapier
ff959027-4390-44e3-63b3-ac0e13c8a64b  Pike
cb322434-365d-47bf-5783-f2e2df0229b1  Trident
ab54402e-d3f3-497d-819b-9b51af1827b8  WarHammer
edda8fbb-6456-4514-ccb3-a23667bc314c  HeavyCrossbow
4df07ab5-44a3-421e-bcb4-8c59d649c8cf  GreatClub
2fc3e6f9-120c-4adf-c3b7-9078d7ae12c3  LightHammer
ccab7523-374c-49b4-c796-f38bb9e5cac1  Flail
8ac2eb82-8563-4657-4c8c-07153957d778  GreatSword
f0953501-75b1-43a3-9986-d5e2d18fe801  LightCrossbow
4135c6a5-78b6-4c6d-df85-7df72cf575e7  Club 
c9f1412d-51e6-4606-4fab-5204342056af  Javelin
cef94292-4854-4085-43b3-045c92194d23  Morningstar
7883d641-2b8b-40dc-d885-7551d41dbc2b  Mace
edda8fbb-6456-4514-ccb3-a23667bc314c  HeavyCrossbow
7c6a4c59-273f-4b9a-59b1-29bf82f16af4  Maul
87fbc05b-c870-4bc1-fb95-ea56cb3f229e  HandCrossbow
2d85d633-d496-44a1-43a6-950e87ef6d9a  Dagger
12b80df8-aaf1-4543-fa84-46c4e422b551  Scimitar
2b95bdd2-317f-41c1-c09e-a05f888b0a8b  Sickle
4135c6a5-78b6-4c6d-df85-7df72cf575e7  Torch
b428632e-3137-47aa-8fae-ffddc26fc87c  MagicStaff
bf90a760-4f63-416d-9d96-c10e7228d5e8  LongBow
04c50c6f-4a08-4b42-2382-a9f2b56d9cf4  Sling
896f8a20-7dda-4bff-26b7-c308ccda7bcc  Battleaxe
0ab1deb9-c2fb-491a-7ab9-77e811b55f8a  DummyForEquipment
f85002a2-8e0e-4a49-0faa-2ef57d983a3a  Longsword`
cd.split(/\r?\n+/).forEach(a => {
    const [k, n] = a.split(/  /) || [];
    if (k && n) {
        ct[k.replace(/ /g, '')] = n.replace(/ /g, '')
    }
})
let str = `"ID","Name","Type","Stat","MaybeISEquip","Slot","Desc"\n`;

const fx = o => {
    if (Array.isArray(o)) {
        return o.map(fx)
    } else if ('object' === typeof o) {
        if (o.hasOwnProperty('type') && (
            o.hasOwnProperty('value') ||
            o.hasOwnProperty('handle')
        )) {
            return o.handle || o.value
        }
        Object.keys(o).forEach(k => {
            o[k] = fx(o[k])
        })
    }
    return o
}
const All = {};
const extend = o => {
    const {ParentTemplateId} = o;
    if (ParentTemplateId) {
        const b = All[ParentTemplateId];
        if (b) {
            const n = Object.assign({}, extend(b), o);
            Object.assign(o, n)
        }
    }
}

[data1, data2].forEach(data => {
    const {save: {regions: {Templates: {GameObjects: items}}}} = data;
    items.forEach((i) => {
        const o = fx(i);
        const {MapKey} = o
        All[MapKey] = o;
    });
    Object.keys(All).forEach(k => extend(All[k]))
})


Object.values(All).forEach(items => {
    let {
        MapKey: v0 = "",
        DisplayName: v1 = "",
        Type: v2 = "",
        Stats: v3 = "",
        Description: v4 = "",
        Equipment: e,
        EquipSound: s,
        EquipmentTypeID: d
    } = items
    let v5 = ""
    let v6 = (d || s || /ARM_|WPN_|UNI_/.test(v3)) ? "Y" : ""
    if (d) {
        v5 = ct[d] || d
    }
    Object.values(ct).forEach(n=>{
        if(new RegExp(n,'i').test(v3)){
            v5 = n
        }
    });
    if (e && Array.isArray(e)) {
        e.find(o => {
            const {
                Slot: [{Object: v} = {}] = [],
                EquipmentSlots: vv
            } = o
            v5 = v || v5;
            if (vv) {
                v5 = {
                    1024: "Glove",
                    2: "Body",
                    512: "Shoes"
                }[vv] || v5
            }
            return 1
        })
    }
    if (v5) {
        v6 = "Y"
    }
    if (v1) v1 = m[v1] || v1;
    if (v4) v4 = m[v4] || v4;
    str += `"${v0}","${v1}","${v2}","${v3}","${v6}","${v5}","${v4}"\n`
});
require('fs').writeFileSync("./out/rootTemplate.csv", str)
