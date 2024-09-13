import cfg from '../../cfg.js';

export function bg3SpellBuildPlugin() {
  const { scripts, bgW, bgH, iconSiz, total, types } = require('../data/patch.js')?.default;
  return {
    name: 'bg3-spell-build,plugin',
    transformIndexHtml: {
      enforce: 'pre',
      transform(html) {
        return html.replace(
          '%style%',
          `--bgW:${bgW}px;--bgH:${bgH}px;--iconSiz:${iconSiz}px`
        );
      }
    },
    transform(src, id) {
      if (/main/.test(id)) {
        src =
          src
            .replace('%%', cfg.version)
            .replace("'%types%'", JSON.stringify([...types]))
            .replace('9999', `${total}`) + scripts;
      }
      return {
        code: src
      };
    }
  };
}
