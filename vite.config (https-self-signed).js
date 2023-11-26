// vite.config.js
//HTTPS with self signed certificate
//Rename this file to vite.config.js, and overwrite the default config to use https with self signed certificate

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import postcssNesting from 'postcss-nesting';
import mkcert from 'vite-plugin-mkcert';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert(), eslint(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    }
  })],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  }
})

