+function () {
    const sty = ctx.style
    let syncB = 0
    let fx = 0
    const spellArr = []
    const m = 10
    const w = 400 + m
    const h = 160 + m
    let x = Math.floor((a.offsetWidth - 20) / w)
    let y = Math.ceil((a.offsetHeight - 20) / h)
    let filters = []
    let picks = []
    let fts = JSON.stringify(ft)
    const cc = t => t === undefined || t === 'unknown'

    function filter() {
        const {t, k, l} = ft;
        filters = spellArr.filter(o => {
            const f = (k, va) => {
                if (typeof va === 'string') {
                    va = va.replace(/unknown/gi, '');
                }
                if (k) {
                    if (k === '-') {
                        if (va) return;
                    } else if (k === '*') {
                        if (!va) return;
                    } else if (/^>\d+$/.test(k)) {
                        const g = +k.substr(1);
                        if (!isNaN(g)) {
                            let n = 0;
                            [].concat(va).forEach((v) => {
                                if (/^\d+$/.test(v)) {
                                    if (+v >= g) n = 1;
                                } else {
                                    const r = /DealDamage\((\d+)d(\d+),.*?\)/;
                                    const [, a, b] = r.exec(v) || [];
                                    if (b) {
                                        if (a * b >= g) n = 1;
                                    }
                                }
                            });
                            if (!n) return;
                        }
                    } else {
                        const v0 = (va + '').toLowerCase();
                        if (v0.indexOf((k + '').toLowerCase()) === -1) return;
                    }
                }
                return 1
            };
            if (t && t !== o.SpellType) return
            if (k && l) {
                for (const [kk, v] of Object.entries(o)) {
                    if (kk.toLowerCase() === k.toLowerCase()) {
                        if (!f(l, v)) return
                    }
                }
            }
            return 1
        })
        filters.sort((a, b) => {
            const la = a.lv
            const lb = b.lv
            if (la === lb) return a._nm > b._nm ? 1 : -1
            return la > lb ? 1 : -1
        })
        const y = Math.ceil(filters.length / x)
        sty.height = h * y + 20 + 'px'
        syncA++
    }

    function pick() {
        const v = x * y
        const l = filters.length
        const s = Math.floor(a.scrollTop / h) * x
        const mi = Math.max(0, s - v)
        fx = mi * h
        picks = filters.slice(mi, Math.min(l, s + 2*v))
    }

    const get = (o, k) => {
        let t = o[k]
        let tt
        if (cc(t)) {
            const {Parent} = o;
            if (Parent) {
                tt = get(Parent, k)
            }
        }
        return (cc(tt) ? t : tt) || ''
    }

    function mg(a) {
        if (!a) return
        if (!a._) {
            Object.keys(a).forEach(k => {
                if (!a[k]) delete a[k]
            })
            a._ = new Set()
        }
        const {Parent} = a
        if (Parent) {
            const pp = mg(spells[Parent]);
            if (pp) Object.keys(pp).forEach(k => {
                if (!a.hasOwnProperty(k)) {
                    a[k] = pp[k]
                    a._.add(k)
                }
            })
        }
        a.nm = a.Name.replace(a.SpellType + "_", "")
            .replace(/_/g, " ")
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        a._nm = a.nm.toLowerCase()
        a.lv = +a.Level || 99
        const {SpellProperties, SpellSuccess} = a
        if (typeof SpellProperties === 'string') a.SpellProperties = [SpellProperties]
        if (typeof SpellSuccess === 'string') a.SpellSuccess = [SpellSuccess]
        a.ico = ico(a.Icon, a.Name)
        return a
    }
    let tpm = ''
    const card = (o,x=0,y=0) => {
        const {ico, nm, Name,Level, SpellType, SpellProperties = [], SpellSuccess = []} = o
        tpm+=`<div class="c" id="${Name}" style="left:${x}px;top:${y}px"><i style="${ico}" title="${o.Icon}"></i>
   <span class="lv">LV. ${Level || "-"}</span>
   <span class="tp">${SpellType}</span>
   <div>
   <label>${nm}</label>
    <div class="u">
     <ul class="po">${SpellProperties.map((p) => "<li>" + p + "</li>").join("")}</ul>
   <ul>${SpellSuccess.map((p) => "<li>" + p + "</li>").join("")}</ul>
</div></div></div>`
    };
    const run = () => {
        requestAnimationFrame(run)
        if (task.length) {
            task.forEach(arr => {
                arr.forEach(a => {
                    const name = a.Name
                    spells[name] = a
                    spellArr.push(a)
                })
            })
            Object.values(spells).forEach(mg)
            task.length = 0
            fts = '-'
        }
        const f = JSON.stringify(ft)
        if (fts !== f) {
            fts = f
            filter()
        }
        if (syncA !== syncB) {
            syncB = syncA = 0
            pick()
            render()
        }
    }

    const render = () => {
        tpm=''
        picks.forEach((o, i) => {
            card(o,(i % x) * w,Math.floor(i / x) * h + fx)
        })
        ctx.innerHTML=tpm
    }
    a.onscroll = () => {
        syncA++
    }
    window.onresize = () => {
        let m = Math.floor((a.offsetWidth - 20) / w)
        let n = Math.ceil((a.offsetHeight - 20) / h)
        if (x !== m) {
            x = m
            syncA++
        }
        if (n !== y) {
            y = n
            syncA++
        }
    }
    run()
}()