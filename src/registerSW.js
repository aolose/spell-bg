const { serviceWorker } = navigator;
!(async function () {
  if (serviceWorker) {
    const prompt = document.getElementById('k');
    prompt.onclick = ({ target }) => {
      if ('B' === target.tagName[0]) {
        prompt.classList.remove('a');
        if (target.textContent[0] === 'R') {
          location.reload();
        }
      }
    };
    let register = await serviceWorker.getRegistration();
    if (!register) {
      const sw =
        import.meta.env.MODE === 'production' ? '/sw.js' : '/dev-sw.js?dev-sw';
      register = await serviceWorker.register(sw, { scope: '/' });
      let updated;
      register.onupdatefound = () => {
        if (updated) prompt.classList.add('a');
        updated = 1;
      };
    } else
      setInterval(() => {
        const worker = register.waiting;
        if (worker?.state === 'installed') {
          worker.postMessage({ type: 'SKIP_WAITING' });
          prompt.classList.add('a');
        }
      }, 5e3);

    setInterval(() => {
      if (!register.waiting) register.update().catch(console.error);
    }, 12e4); // 2min
  }
})();
