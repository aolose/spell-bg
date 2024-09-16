import cfg from '../../cfg.js';

export function bg3SpellBuildPlugin() {
  const { scripts, bgW, bgH, iconSiz, total, types, spellKeys } =
    require('./patch.js')?.default;
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
      if (/\/worker/.test(id)) {
        src = `const sk='${spellKeys}'.split(',');` + src;
      }
      if (/\/main/.test(id)) {
        src =
          `const sk='${spellKeys}'.split(',');` +
          src
            .replace('%%', cfg.version)
            .replace("'%types%'", JSON.stringify([...types]))
            .replace('9999', `${total}`);
      }
      return {
        code: src
      };
    }
  };
}
