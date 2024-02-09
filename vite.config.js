import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';

// https://ja.vitejs.dev/config/
export default defineConfig({
  base: '/nekopon-advanced/',
  server: {
    host: true, // IPアドレス有効化
    open: true,
    port: 8080,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
  plugins: [
    // https://vituum.dev/
    vituum(),
    pug({
      root: './src',
    }),
    sassGlobImports(),
  ],
});
