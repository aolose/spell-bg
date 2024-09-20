import { defineConfig } from 'vite';import { bg3SpellBuildPlugin } from './src/plugin/index.js';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  resolve: {
    alias: {
      '/': path.resolve(__dirname, '/public')
    }
  },
  plugins: [
    bg3SpellBuildPlugin(),
    VitePWA({
      injectRegister:null,
      manifest:{
        name: 'Baldur\'s Gate 3 Spells',
        short_name: 'BG3 Spells',
        theme_color:"#fff",
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ]
});
