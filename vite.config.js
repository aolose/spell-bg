import { defineConfig } from 'vite';
import { bg3SpellBuildPlugin } from './src/plugin/index.js';
import { buildImg } from './src/plugin/dds.js';
import { parseData } from './src/plugin/parse.js';

buildImg();
parseData()

export default defineConfig({
  plugins: [
    bg3SpellBuildPlugin()
  ]
});
