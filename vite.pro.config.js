import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { bg3SpellBuildPlugin } from './src/plugin/index.js';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    bg3SpellBuildPlugin(),
    VitePWA({
      includeAssets:['*.avif','mu.webp','bg.avif','a.webp','h.webp','logo.webp','c.svg'],
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
    minify: true
  }
});
