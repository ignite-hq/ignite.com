import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import { Buffer } from 'buffer'
import path from 'path'
import { defineConfig } from 'vite'
import { dynamicImport } from 'vite-plugin-dynamic-import'
import envCompatible from 'vite-plugin-env-compatible'
import { VitePWA } from 'vite-plugin-pwa'

const pathSrc = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },

  define: {
    global: {
      Buffer: Buffer
    }
  },
  plugins: [vue(), nodeResolve(), dynamicImport(), envCompatible(), VitePWA()],
  css: {
    postcss: `${pathSrc}/postcss.config.js`
  },

  optimizeDeps: {
    include: [
      'gradient-avatar',
      'crypto-js',
      'axios',
      'long',
      '@cosmjs/encoding'
    ]
  }
})
