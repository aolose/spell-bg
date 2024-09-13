(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const z="_flag,Name,SpellType,SpellProperties,TargetFloor,TargetRadius,SpellRoll,SpellSuccess,SpellFail,TargetConditions,ProjectileCount,Trajectories,Icon,DisplayName,Description,TooltipDamageList,TooltipAttackSave,PreviewCursor,CastTextEvent,AlternativeCastTextEvents,CycleConditions,UseCosts,DualWieldingUseCosts,SpellAnimation,DualWieldingSpellAnimation,VerbalIntent,WeaponTypes,SpellFlags,HitAnimationType,SpellAnimationIntentType,SpellSoundMagnitude,Sheathing,Using,PrepareEffect,CastEffect,DamageType,Cooldown,ExtraDescription,ExtraDescriptionParams,CastSound,SpellStyleGroup,RequirementConditions,ExplodeRadius,TooltipStatusApply,PositionEffect,DescriptionParams,RechargeValues,AreaRadius,ForkChance,MaxForkCount,ForkLevels,ForkingConditions,TooltipOnMiss,HitCosts,TooltipSpellDCAbilities,SpellContainerID,TooltipPermanentWarnings,Level,SpellSchool,TooltipUpcastDescription,TooltipUpcastDescriptionParams,MemoryCost,ContainerSpells,RootSpellID,PowerLevel,AmountOfTargets,HitEffect,MaximumTargets,PrepareSound,PrepareLoopSound,CastTargetHitDelay,TooltipOnSave,FollowUpOriginalSpell,ConcentrationSpellID,Angle,CombatAIOverrideSpell,TargetCeiling,AddRangeFromAbility,ProjectileTerrainOffset,SpellActionType,SpellCategory,SpellJumpType,MinJumpDistance,Requirements,TargetEffect,DeathType,AIFlags,TargetProjectiles,ProjectileDelay,Height,Template,ProjectileType,Distribution,HitRadius,MovementSpeed,PreviewEffect,HitExtension,StopAtFirstContact,OnlyHit1Target,TargetSound,VocalComponentSound,CinematicArenaFlags,RitualCosts,InterruptPrototype,Autocast,RequirementEvents,SpellEffect,InstrumentComponentPrepareSound,InstrumentComponentLoopingSound,InstrumentComponentCastSound,InstrumentComponentImpactSound,SpellAnimationType,BeamEffect,AoEConditions,SteerSpeedMultipler,LineOfSightFlags,DisappearEffect,HighlightConditions,MaximumTotalTargetHP,SourceLimbIndex,Acceleration,OriginSpellProperties,OriginTargetConditions,TeleportSelf,TeleportSurface,ThrowableSpellRoll,ThrowableSpellSuccess,ThrowableTargetConditions,SurfaceType,SurfaceLifetime,SurfaceGrowStep,SurfaceGrowInterval,Shape,FrontOffset,Range,Base,ImpactEffect,StrikeCount,SingleSource,ForceTarget,MaxDistance,ItemWall,ItemWallStatus,TargetHitEffect,PreviewStrikeHits,Shuffle,ShortDescriptionParams,IgnoreTeleport,OriginSpellRoll,OriginSpellSuccess,OriginSpellFail,ThrowOrigin,ThrowableSpellProperties,Lifetime,SurfaceRadius".split(",");let w="";function G(){X.textContent=`${p.length}`}function J(e){["TooltipUpcastDescriptionParams","DescriptionParams"].forEach(o=>{if(!e[o])return;const r=o.replace(/Params$/,"");if(!e[r])return delete e[o];[].concat(e[o]).forEach((n,t)=>e[r]=e[r].replace(`[${t+1}]`,`${n}`))})}const Z=57;let K=to;to=null;const Q=["Projectile","ProjectileStrike","Rush","Shout","Target","Teleportation","Throw","Zone","Wall"],u={};let f=0,k={};const E=170,D=330,S=[],p=[],x={},A=document.getElementById("z"),y=document.querySelector(".ri"),X=document.getElementById("tt"),b=document.getElementById("b"),Y=document.getElementById("c"),P=document.getElementById("e"),T=document.getElementById("v");function H(){const e=Math.ceil(p.length/m);ee.height=E*e+20+"px"}const L=e=>{const o=/^\/(.+?)\/([giy]*$)/.exec(e);if(o)try{return new RegExp(o[1],(o[2]||"").replace("i","")+"i")}catch{}};function R(){p.length=0;const{t:e,k:o,l:r}=x;S.forEach((n,t)=>{const i=(l,s)=>{const a=L(l);if(a)return a.test(s);if(/.\*|\*./.test(l))return new RegExp(l.replace(/\*/g,".*"),"ig").test(s);if(l==="-"){if(s)return}else if(l==="*"){if(!s)return}else if(/^>\d+$/.test(l)){const c=+l.slice(1);if(!isNaN(c)){let d=0;if([].concat(s).forEach(g=>{if(/^\d+$/.test(g))+g>=c&&(d=1);else{const h=/DealDamage\((\d+)d(\d+)\+?(\d*),.*?\)/,[,v,C,O]=h.exec(g)||[];C&&v*C+(+O||0)>=c&&(d=1)}}),!d)return}}else if((s+"").toLowerCase().indexOf((l+"").toLowerCase())===-1)return;return 1};if(!e||e===n.SpellType){if(o&&r){if(!n.hasOwnProperty(o)){if(r==="*")return;if(r==="-")return p.push(t)}let l=0;for(const[s,a]of Object.entries(n)){const c=L(o);if((c!=null&&c.test(s)||s.toLowerCase()===o.toLowerCase()||/\*/.test(o)&&new RegExp(o.replace(/\*/g,".*"),"gi").test(s))&&i(r,a)){l=1;break}}if(!l)return}p.push(t)}}),p.sort((n,t)=>{n=S[n],t=S[t];const i=n.lv,l=t.lv;return i===l?n._nm>t._nm?1:-1:i>l?1:-1}),H(),G(),f++}function _(e){if(!e)return;e._||(Object.keys(e).forEach(l=>{e[l]||delete e[l]}),e._={});const{Using:o,_flag:r=""}=e,n=o&&(u[o]||u[r+o]);if(n&&n!==e){const l=_(n);l&&Object.keys(l).forEach(s=>{e.hasOwnProperty(s)||(e[s]=l[s],e._[s]=1)})}e.nm=e.Name.replace(e.SpellType+"_","").replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2"),e._nm=e.nm.toLowerCase(),e.lv=+e.Level||99,e.ico=F(e.Icon);const{SpellProperties:t,SpellSuccess:i}=e;return typeof t=="string"&&(e.SpellProperties=[t]),typeof i=="string"&&(e.SpellSuccess=[i]),e}function F(e){const o=k[e];if(o){const[r,n,t]=o;return`background-position:${r}% ${t}%;background-image:url(${n}.webp)`}return"background-size:cover"}window.ok=()=>{const e=100*++K/Z;A.style.width=e+"%",e===100&&(A.style.opacity="0")};window.loadIcon=e=>{const o=e.length/4,[r,n]=[e.slice(0,o),e.slice(o)];r.forEach((t,i)=>{k[t]=n.slice(i*3,(i+1)*3)}),Object.values(u).forEach(t=>t.ico=F(t.Icon)),T.querySelectorAll("i").forEach(t=>{const i=t.parentElement.id,l=u[i];t.style=l.ico})};window.loadSpell=e=>{e.forEach(o=>{const r=o.length/2,[n,t]=[o.slice(0,r),o.slice(r)],i={};n.forEach((s,a)=>{i[z[s]]=t[a]});const l=(i._flag||"")+i.Name;u[l]=i,S.push(i)}),Object.values(u).forEach(o=>{_(o),J(o)}),R()};ti&&(loadIcon(ti),ti=null);ts&&(ts.forEach(loadSpell),ts=null);let m=Math.max(1,Math.floor((y.offsetWidth-20)/D));const ee=T.style;function te(e){w=e.Name,f++;const o=["SpellType","UseCosts","Icon","Level","ExtraDescription","Description","DisplayName","Using","Name"],r=Object.keys(e).filter(t=>["ico","nm","_nm","lv"].indexOf(t)===-1);r.sort((t,i)=>{const l=o.indexOf(t),s=o.indexOf(i);return l===s?t>i?1:-1:s-l});let n="";return r.forEach(t=>{if(t==="-")return;const i=e[t];let l;l=t!=="_flag"&&(!isNaN(i)||i!=null&&i.length)?Array.isArray(i)?`<ul>${i.filter(Boolean).map(a=>`<li>${a}</li>`).join("")}</ul>`:`<span>${i}</span>`:"";const s=e._&&e._[t]?"_":"";l&&(n+=`<div>
<label class="${s}">${t}</label>${l}
</div>`)}),n}T.onclick=e=>{const o=T.children,r=e.target,n=[].find.call(o,l=>l===o||l.contains(r)),t=n&&n._flag||"",i=n&&n.id;i&&(b.className="s",P.className="s",u[t+i].Name!==w&&(b.innerHTML=te(u[t+i])))};P.onclick=function(){w="",f++,b.className="",P.className="",b.innerHTML=`<pre>
Content based on Patch 7.
The filter supports regular expressions
and is case insensitive.

Name:
         The Property name of spell's data.
         'spell*' means start width spell.
         Or, you can type /^spell/.
 Value:
         The Property Value of spell's data .
         '-' means empty.
         '*' means not empty.
         '>5' means equal or bigger than 5.
        
 e.g
     No level limit spells:
     Name: level   Value: -
     Honour spells:
     Name: _flag   Value: *
     Spells Damage > 500:
     Name: spell*   Value: >500
 </pre><a href='https://github.com/aolose/spell-bg' target='_blank'>
 <img alt='github' src='https://github.githubassets.com/favicons/favicon.svg'/></a>`};P.onclick(null);const oe=e=>{const o=document.createElement("div");return o.innerHTML=e,o.children[0]},j=[],U=(e,o)=>{x.t=o,j.forEach(r=>r.act(e))};[""].concat(Q).forEach((e,o)=>{const r=e||"ALL",n=oe(`
<div role="tab" aria-selected="true" aria-controls="spell-type" >
    ${r.toUpperCase()}
</div>`);n.onclick=()=>{U(r,e)},n.act=t=>{n.className=t===r?"act":""},j.push(n),Y.appendChild(n)});const B=(e,o,r=n=>n)=>{const n=document.getElementById(e);let t=-1;n.oninput=n.onchange=n.onpaste=n.onblur=function(){clearTimeout(t),t=setTimeout(()=>{x[o]=r(n.value.replace(/^\s+|\s+$/,"")),f++},200)}};B("v0","k",e=>e&&e.replace(e[0],e[0].toUpperCase()));B("v2","l");U("ALL","");let N,$,M="";const W=()=>{requestAnimationFrame(W);const e=JSON.stringify(x);if(M!==e&&(M=e,R()),f!==N){N=f=0;{const o=m*$,r=p.length,n=Math.floor(y.scrollTop/E)*m,t=Math.max(0,n-o),i=Math.min(r,n+2*o);let l="";for(let s=t;s<i;s++){const{nm:a,ico:c,DisplayName:d,Description:g="",Name:h,_flag:v="",Level:C,SpellType:O,SpellProperties:q=[],SpellSuccess:V=[]}=S[p[s]];l+=`
<div class="c${w===h?" a":""}" 
     role="listitem" 
     id="${v+h}" 
     style="left:${s%m*D}px;top:${Math.floor(s/m)*E}px"
>
    <span title="${v}" hidden>H</span>
    <i style="${c}" role="img" aria-label="icon of the spell ${h}" title="${d||g}"></i>
    <span class="lv">level ${C||"-"}</span>
    <span class="tp">${O}</span>
    <div class="l">
        <label>${d||a}</label>
        <div class="u">
            <div class="w">
                <p>${g}</p>
                <ul class="po">${q.map(I=>"<li>"+I+"</li>").join("")}</ul>
                <ul>${V.map(I=>"<li>"+I+"</li>").join("")}</ul>
            </div>
        </div>
    </div>
</div>`}T.innerHTML=l}}};y.onscroll=()=>f++;window.onresize=()=>{let e=Math.max(1,Math.floor((y.offsetWidth-20)/D)),o=Math.ceil((y.offsetHeight-20)/E);(m!==e||$!==o)&&(m=e,$=o,f++,H())};onresize(null);W();
