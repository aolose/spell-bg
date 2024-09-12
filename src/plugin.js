export function bg3SpellBuildPlugin() {
  return {
    name: 'bg3-spell-build,plugin',
    transformIndexHtml: {
      enforce: 'pre',
      transform(html) {
        console.log(html);
        return ``;
      }
    },
    transform(src, id) {
      console.log(id);
    }
  };
}
