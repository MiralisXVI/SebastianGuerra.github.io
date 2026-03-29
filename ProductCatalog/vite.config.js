import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: true,
    open: false,
    hmr: true
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "vuetify/styles";`
      }
    }
  }
})
