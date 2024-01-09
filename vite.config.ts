import { fileURLToPath, URL } from 'url';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

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
  ],
});
