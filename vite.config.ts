import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    react(),
    imagetools({
      exclude: ['./src/assets/mvp_icons_animated/**/*'],
      defaultDirectives: (url) => {
        return new URLSearchParams({
          format: 'webp',
          lossless: 'true',
        });
      },
    }),
  ],
});
