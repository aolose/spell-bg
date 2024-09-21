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
      includeAssets:['*.avif','mu.webp','bg.avif','a.webp','h.webp','logo.webp','c.svg','un.webp'],
      manifest: {
        name: 'Baldur\'s Gate 3 Spells',
        short_name: 'BG3 Spells',
        description: 'The Stats of Baldur\'s Gate 3 Spells',
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
