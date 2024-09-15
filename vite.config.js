import { defineConfig } from 'vite';
import { bg3SpellBuildPlugin } from './src/plugin/index.js';
import cfg from './cfg.js';

import fs from 'fs';

if (fs.existsSync(cfg.unpackDir)) {
  const { buildImg } = require('./src/plugin/dds.js');
  const { parseData } = require('./src/plugin/parse.js');
  parseData();
  await buildImg();
}

export default defineConfig({
  plugins: [
    bg3SpellBuildPlugin()
  ]
});
