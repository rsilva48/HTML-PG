// vite.config.js
//HTTP with CA cert
//Rename this file to vite.config.js, and overwrite the self-signed config, put key and cert in project root

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import fs from 'fs';
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./privkey.pem'),
      cert: fs.readFileSync('./fullchain.pem')
    }
  },
  plugins: [vue()],
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

