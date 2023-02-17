+function () {
    const ctx = document.getElementById("v");
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
        const v = x * y * 5
        const l = filters.length
        const s = Math.floor(a.scrollTop / h) * x
        const mi = Math.max(0, s - v)
        fx = mi * h
        picks = filters.slice(mi, Math.min(l, s + v))
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
        a.ico = ico(a.Icon, a.Name)
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

    function ps(o) {
        const v = Object.keys(o);
        let c = "";
        v.forEach((k) => {
            if (k === '_') return
            const d = o[k];
            let s;
            if (Array.isArray(d)) {
                const ss = d.map((u) => `<li>${u}</li>`).join("");
                s = `<ul>${ss}</ul>`;
            } else s = `<span>${d}</span>`;
            const cls = o._ && o._.has(k) ? '_' : ''
            c += `<div>
<label class="${cls}">${k}</label>${s}
</div>`;
        });
        return c;
    }

    const card = (o) => {
        const {ico, nm, Level, SpellType, SpellProperties = [], SpellSuccess = []} = o
        const v = el(`<div class="c"><i style="${ico}" title="${o.Icon}"></i>
   <span class="lv">LV. ${Level || "-"}</span>
   <span class="tp">${SpellType}</span>
   <div>
   <label>${nm}</label>
    <div class="u">
     <ul class="po">${SpellProperties.map((p) => "<li>" + p + "</li>").join("")}</ul>
   <ul>${SpellSuccess.map((p) => "<li>" + p + "</li>").join("")}</ul>
</div>
    </div></div>`);
        v.ico = () => {
            v.querySelector('i').style = o.ico
        }
        v.onclick = () => {
            b.className = 's';
            e.className = 's';
            b.innerHTML = ps(o);
        };
        v.d = o
        return v;
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
        const rm = []
        ns.forEach((a, i) => {
            const idx = picks.indexOf(a.d)
            if (idx === -1) {
                ns[i] = 0
                rm.push(a)
            } else {
                picks[idx] = a
            }
        })
        picks.forEach((o, i) => {
            const ex = o.d
            const v = ex ? o : card(o)
            if (!ex) ns.push(v)
            const s = v.style
            s.left = (i % x) * w + 'px'
            s.top = Math.floor(i / x) * h + fx + 'px'
            ctx.appendChild(v)
        })
        ns = ns.filter(a => a)
        rm.forEach(a=>ctx.removeChild(a))
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