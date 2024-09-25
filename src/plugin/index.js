import cfg from '../../cfg.js';

export function bg3SpellBuildPlugin() {
  const { scripts, dic, icons, total, types, spellKeys, spellIds } =
    require('./patch.js')?.default;
  return {
    name: 'bg3-spell-build,plugin',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const gtag = process.env.GTAG
        if (gtag)html=html.replace('<!--gtag-->',gtag)
        const registerSW =
          process.env.NODE_ENV === 'production'
            ? 'src="/registerSW.js"'
            : 'src="./src/registerSW.js" type="module"';
        return html
          .replace('%version%', cfg.version)
          .replace('%date%', new Date().toISOString())
          .replace('rel=registerSW', registerSW)
          .replace('%script%', scripts);
      }
    },
    transform(src, id) {
      if (/main/.test(id)) {
        src = src
          .replace('%spellKeys%', spellKeys)
          .replace('%dic%', dic)
          .replace('%spellIds%', spellIds)
          .replace('%icons%', icons)
          .replace('%types%', types)
          .replace("'%total%'", `${total}`);
      }
      return {
        code: src
      };
    }
  };
}
