import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { bg3SpellBuildPlugin } from './src/plugin/index.js';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import path from 'path';

export default defineConfig({
  plugins: [
    bg3SpellBuildPlugin(),
    VitePWA({
      injectRegister:null,
      includeAssets:['*.webp','c.svg'],
      manifest: {
        name: 'Baldur\'s Gate 3 - Spells and Passives',
        short_name: 'BG3 Spells',
        description: 'List of all spells and Passives in Baldur\'s Gate 3。Also provides command codes for adding and removing Spells and Passives.',
        theme_color: '#0a0c17',
        background_color:"#241c10",
        icons: [
          {
            src: 'i192.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'i512.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      }
    }),
    ViteMinifyPlugin({})
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        registerSW: path.resolve(__dirname, 'src/registerSW.js'),
      },
      output:{
        entryFileNames:({name})=>{
          if('registerSW'===name)return '[name].js'
          return  '[name]-[hash].js'
        },
        assetFileNames:'[name]-[hash].[ext]'
      }
    },
    minify: true
  }
});
