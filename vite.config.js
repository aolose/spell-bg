import { defineConfig } from 'vite';
import { bg3SpellBuildPlugin } from './src/plugin/index.js';
import path from 'path';

export default defineConfig({
  resolve:{
    alias:{
      '/': path.resolve(__dirname, '/public'),
    }
  },
  plugins: [
    bg3SpellBuildPlugin()
  ]
});
