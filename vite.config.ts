import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import { Buffer } from 'buffer'
import { defineConfig } from 'vite'
import { dynamicImport } from 'vite-plugin-dynamic-import'
import envCompatible from 'vite-plugin-env-compatible'
import path from 'path'

const pathSrc = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {
      Buffer: Buffer
    }
  },
  plugins: [vue(), nodeResolve(), dynamicImport(), envCompatible()],
  css: {
    postcss: `${pathSrc}/postcss.config.js`
  },
  optimizeDeps: {
    include: [
      'gradient-avatar',
      'crypto-js',
      'axios',
      'qrcode',
      'long',
      '@cosmjs/encoding'
    ]
  }
})
