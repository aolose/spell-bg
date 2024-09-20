import cfg from '../../cfg.js';

export function bg3SpellBuildPlugin() {
  const {
    scripts,
    bgW,
    dic,
    bgH,
    icons,
    iconSiz,
    total,
    types,
    spellKeys,
    spellIds
  } = require('./patch.js')?.default;
  return {
    name: 'bg3-spell-build,plugin',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html
          .replace('%script%', scripts)
          .replace(
            '%style%',
            `--bgW:${bgW}px;--bgH:${bgH}px;--iconSiz:${iconSiz}px`
          );
      }
    },
    transform(src, id) {
      if (/main/.test(id)) {
        src = src
          .replace('%spellKeys%', spellKeys)
          .replace('%dic%', dic)
          .replace('%spellIds%', spellIds)
          .replace('%icons%', icons)
          .replace('%%', cfg.version)
          .replace('%types%', types)
          .replace('9999', `${total}`);
      }
      return {
        code: src
      };
    }
  };
}
