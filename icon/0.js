const all=9999;let l=0;const types="%types%",spells={};let syncA=0,icons={};const h=170,w=410,spellArr=[],filters=[],ft={},z=document.getElementById("z"),a=document.getElementById("a"),b=document.getElementById("b"),c=document.getElementById("c"),e=document.getElementById("e"),ctx=document.getElementById("v");function sz(){const e=Math.ceil(filters.length/x);sty.height=h*e+20+"px"}const re=e=>{const t=/^\/(.+?)\/([giy]*$)/.exec(e);if(t)try{return new RegExp(t[1],(t[2]||"").replace("i","")+"i")}catch(e){}};function filter(){filters.length=0;const{t:e,k:t,l:n}=ft;spellArr.forEach(((l,s)=>{const c=(e,t)=>{const n=re(e);if(n)return n.test(t);if(/\*/.test(e))return new RegExp(e.replace(/\*/g,".*"),"ig").test(t);if("string"==typeof t&&(t=t.replace(/unknown/gi,"")),"-"===e){if(t)return}else if("*"===e){if(!t)return}else if(/^>\d+$/.test(e)){const n=+e.substr(1);if(!isNaN(n)){let e=0;if([].concat(t).forEach((t=>{if(/^\d+$/.test(t))+t>=n&&(e=1);else{const l=/DealDamage\((\d+)d(\d+)\+?(\d*),.*?\)/,[,s,c,o]=l.exec(t)||[];c&&s*c+(+o||0)>=n&&(e=1)}})),!e)return}}else if(-1===(t+"").toLowerCase().indexOf((e+"").toLowerCase()))return;return 1};if(!e||e===l.SpellType){if(t&&n){if(!l.hasOwnProperty(t)&&"*"===n)return;let e=0;for(const[s,o]of Object.entries(l)){const l=re(t);if((l&&l.test(s)||s.toLowerCase()===t.toLowerCase()||/\*/.test(t)&&new RegExp(t.replace(/\*/g,".*"),"gi").test(s))&&c(n,o)){e=1;break}}if(!e)return}filters.push(s)}})),filters.sort(((e,t)=>{e=spellArr[e],t=spellArr[t];const n=e.lv,l=t.lv;return n===l?e._nm>t._nm?1:-1:n>l?1:-1})),sz(),syncA++}function mg(e){if(!e)return;e._||(Object.keys(e).forEach((t=>{e[t]||delete e[t]})),e._={});const{Parent:t}=e;if(t){const n=mg(spells[t]);n&&Object.keys(n).forEach((t=>{e.hasOwnProperty(t)||(e[t]=n[t],e._[t]=1)}))}e.nm=e.Name.replace(e.SpellType+"_","").replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"),e._nm=e.nm.toLowerCase(),e.lv=+e.Level||99;const{SpellProperties:n,SpellSuccess:l}=e;return"string"==typeof n&&(e.SpellProperties=[n]),"string"==typeof l&&(e.SpellSuccess=[l]),e.ico=ico(e.Icon),e}function ok(){const e=100*++l/all;z.style.width=e+"%",100===e&&(z.style.opacity="0")}function ico(e){const t=icons[e];if(t){const{x:e,y:n,n:l}=t;return`background-position:${e}% ${n}%;background-image:url(${l}.webp)`}return"background-image:none"}function loadIcon(e){icons=e,Object.values(spells).forEach((e=>e.ico=ico(e.Icon))),[].forEach.call(ctx.querySelectorAll("i"),(e=>{const t=e.parentElement.id,n=spells[t];e.style=n.ico}))}function loadSpell(e){e.forEach((e=>{const t=e.Name;spells[t]=e,spellArr.push(e)})),Object.values(spells).forEach(mg),filter()}let x=Math.max(1,Math.floor((a.offsetWidth-20)/w));const sty=ctx.style;function ps(e){const t=["Parent","UseCosts","Icon","SpellType","Level","Name"],n=Object.keys(e).filter((e=>-1===["ico","nm","_nm","lv"].indexOf(e)));n.sort(((e,n)=>{const l=t.indexOf(e),s=t.indexOf(n);return l===s?e>n?1:-1:s-l}));let l="";return n.forEach((t=>{if("_"===t)return;const n=e[t];let s;s=Array.isArray(n)?`<ul>${n.map((e=>`<li>${e}</li>`)).join("")}</ul>`:`<span>${n}</span>`;const c=e._&&e._[t]?"_":"";l+=`<div>\n<label class="${c}">${t}</label>${s}\n</div>`})),l}ctx.onclick=t=>{const n=ctx.children,l=t.target,s=[].find.call(n,(e=>e===n||e.contains(l))),c=s&&s.id;c&&(b.className="s",e.className="s",b.innerHTML=ps(spells[c]))},(e.onclick=function(){b.className="",e.className="",b.innerHTML="<pre>\n  Last build at %%\n  filter ignore case.\n  support regex.\n\n· Label:\n         The Property name of the spell.\n         `spell*` means start width spell.\n         You can also use /^spell/.\n· Value:\n         The Value of the Property.\n         '-' means empty.\n         '*' means not empty.\n         '>5' means equal or bigger than 5.\n· e.g:\n    Label: level  Value:-\n</pre>"})();const el=e=>{const t=document.createElement("div");return t.innerHTML=e,t.children[0]};let t=-1;const tbs=[],cg=(e,t)=>{ft.t=t,tbs.forEach((t=>t.act(e)))};[""].concat(types).forEach(((e,t)=>{const n=e||"ALL",l=el(`<div role="tab" aria-selected="true" aria-controls="spell-type" >${n.toUpperCase()}</div>`);l.onclick=()=>{cg(n,e)},l.act=e=>{l.className=e===n?"act":""},tbs.push(l),c.appendChild(l)}));const xx=(e,t)=>{const n=document.getElementById(e);n.oninput=n.onchange=n.onpaste=n.onblur=function(){ft[t]=n.value.replace(/^\s+|\s+$/,""),syncA++}};xx("v0","k"),xx("v2","l"),cg("ALL",""),function(){let e,t,n="";const l=()=>{requestAnimationFrame(l);const s=JSON.stringify(ft);n!==s&&(n=s,filter()),syncA!==e&&(e=syncA=0,function(){const e=x*t,n=filters.length,l=Math.floor(a.scrollTop/h)*x,s=Math.max(0,l-e),c=Math.min(n,l+2*e);let o="";for(let e=s;e<c;e++){const{ico:t,nm:n,Name:l,Level:s,SpellType:c,SpellProperties:r=[],SpellSuccess:i=[],Icon:a}=spellArr[filters[e]];o+=`<div class="c" role="listitem" id="${l}" style="left:${e%x*w}px;top:${Math.floor(e/x)*h}px">\n<i style="${t}" role="img" aria-label="icon of the spell ${l}" title="${a}"></i><span class="lv">LV. ${s||"-"}</span><span class="tp">${c}</span>\n   <div><label>${n}</label><div class="u"><ul class="po">${r.map((e=>"<li>"+e+"</li>")).join("")}</ul>\n   <ul>${i.map((e=>"<li>"+e+"</li>")).join("")}</ul>\n</div></div></div>`}ctx.innerHTML=o}())};a.onscroll=()=>{},(window.onresize=()=>{let e=Math.max(1,Math.floor((a.offsetWidth-20)/w)),n=Math.ceil((a.offsetHeight-20)/h);x===e&&t===n||(x=e,t=n,syncA++,sz())})(),l()}();