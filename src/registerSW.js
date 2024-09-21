if ('serviceWorker' in navigator) {
  let register;
  let worker;
  let promptTimer = -1;

  const prompt = document.getElementById('k');
  prompt.onclick = ({ target }) => {
    if ('B' === target.tagName[0]) {
      prompt.classList.remove('a');
      if (target.textContent[0] === 'R') {
        setTimeout(() => {
          location.reload();
        }, 200);
      }
    }
  };

  const untilWaitingInstalled = () => {
    if (worker.state !== 'installed') return true;
    clearInterval(promptTimer);
    worker.postMessage({ type: 'SKIP_WAITING' });
    prompt.classList.add('a');
  };

  const untilWaitingFound = () => {
    if (register.waiting) {
      worker = register.waiting;
      if (untilWaitingInstalled()) {
        worker.removeEventListener('statechange', untilWaitingInstalled);
        worker.addEventListener('statechange', untilWaitingInstalled);
      }
    } else return true;
  };

  const checkUpdate = () => {
    promptTimer = setTimeout(() => {
      register
        .update()
        .then(() => handle())
        .catch(checkUpdate);
    }, 5e3); // 5min loop
  };

  const handle = (r) => {
    if (r) register = r;
    if (!register) return;
    checkUpdate();
    if (untilWaitingFound()) {
      register.removeEventListener('updatefound', untilWaitingFound);
      register.addEventListener('updatefound', untilWaitingFound);
    }
  };

  navigator.serviceWorker
    .register(
      import.meta.env.MODE === 'production' ? '/sw.js' : '/dev-sw.js?dev-sw',
      { scope: '/' }
    )
    .then(handle)
    .catch(() => {
      clearTimeout(promptTimer);
      register?.waiting?.postMessage?.({ type: 'SKIP_WAITING' });
    });
}
