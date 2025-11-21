import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/hey-noodles-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
      },
    },
  },
});
