import cfg from '../../cfg.js';

export function bg3SpellBuildPlugin() {
  const { scripts, dic, icons, total, types, spellKeys, spellIds } =
    require('./patch.js')?.default;
  return {
    name: 'bg3-spell-build,plugin',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const registerSW =
          process.env.NODE_ENV === 'production'
            ? 'src="/registerSW.js"'
            : 'src="./src/registerSW.js" type="module"';
        return html
          .replace('rel=registerSW', registerSW)
          .replace('%script%', scripts);
      }
    },
    transform(src, id) {
      if (/main/.test(id)) {
        src = src
          .replace('%time%', Date.now())
          .replace('%spellKeys%', spellKeys)
          .replace('%dic%', dic)
          .replace('%spellIds%', spellIds)
          .replace('%icons%', icons)
          .replace('%%', cfg.version)
          .replace('%types%', types)
          .replace("'%total%'", `${total}`);
      }
      return {
        code: src
      };
    }
  };
}
