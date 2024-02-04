import { fileURLToPath, URL } from 'url';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  json: {
    stringify: true,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  plugins: [
    splitVendorChunkPlugin(),
    react(),
    imagetools({
      exclude: ['./src/assets/mvp_icons_animated/**/*'],
      defaultDirectives: (url) => {
        return new URLSearchParams({
          format: 'webp',
          lossless: 'false',
        });
      },
    }),
    VitePWA({
      injectRegister: false,
      registerType: 'autoUpdate',
      devOptions: {
        enabled: process.env.NODE_ENV === 'development',
      },
      manifest: {
        short_name: 'MVP Timer',
        name: 'Ragnarok MVP Timer',
        lang: 'en',
        description: 'app to track ragnarok mvp respawn',
        display: 'standalone',
        theme_color: '#f89200',
        background_color: '#F6F8FA',
        related_applications: [
          {
            platform: 'web',
            url: 'https://ragnarok-mvp-timer.com',
          },
        ],
        icons: [
          {
            src: '/icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: '/screenshots/site-screenshot.webp',
            sizes: '1903x1079',
            type: 'image/webp',
            form_factor: 'wide',
            label: 'Main page',
          },
          {
            src: '/screenshots/desktop-servers-screenshot.webp',
            sizes: '1903x1079',
            type: 'image/webp',
            form_factor: 'wide',
            label: 'Server selection',
          },
          {
            src: '/screenshots/mobile-screenshot.webp',
            sizes: '320x736',
            type: 'image/webp',
            form_factor: 'narrow',
            label: 'Main page on mobile',
          },
          {
            src: '/screenshots/mobile-servers-screenshot.webp',
            sizes: '320x736',
            type: 'image/webp',
            form_factor: 'narrow',
            label: 'Server selection on mobile',
          },
        ],
      },
    }),
  ],
});
