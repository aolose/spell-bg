+function () {
    let syncB
    let y
    let fts = ''

    function render() {
        const v = x * y
        const l = filters.length
        const s = Math.floor(a.scrollTop / h) * x
        const mi = Math.max(0, s - v)
        const mx = Math.min(l, s + 2 * v)
        let tpm = ''
        for (let s = mi; s < mx; s++) {
            const {
                ico,
                nm,
                Name,
                Level,
                SpellType,
                SpellProperties = [],
                SpellSuccess = [],
                Icon
            } = spellArr[filters[s]]
            tpm += `<div class="c" role="listitem" id="${Name}" style="left:${(s % x) * w}px;top:${Math.floor(s / x) * h}px">
<i style="${ico}" role="img" aria-label="icon of the spell ${Name}" title="${Icon}"></i><span class="lv">LV. ${Level || "-"}</span><span class="tp">${SpellType}</span>
   <div><label>${nm}</label><div class="u"><ul class="po">${SpellProperties.map((p) => "<li>" + p + "</li>").join("")}</ul>
   <ul>${SpellSuccess.map((p) => "<li>" + p + "</li>").join("")}</ul>
</div></div></div>`
        }
        ctx.innerHTML = tpm
    }

    const run = () => {
        requestAnimationFrame(run)
        const f = JSON.stringify(ft)
        if (fts !== f) {
            fts = f
            filter()
        }
        if (syncA !== syncB) {
            syncB = syncA = 0
            render()
        }
    }

    a.onscroll = () => {
        syncA++
    }
    (window.onresize = () => {
        let m = Math.max(1, Math.floor((a.offsetWidth - 20) / w))
        let n = Math.ceil((a.offsetHeight - 20) / h)
        if (x !== m || y !== n) {
            x = m
            y = n
            syncA++
            sz()
        }
    })()
    run()
}()