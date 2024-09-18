import { defineConfig } from 'vite';
import { bg3SpellBuildPlugin } from './src/plugin/index.js';

export default defineConfig({
  plugins: [
    bg3SpellBuildPlugin()
  ]
});
