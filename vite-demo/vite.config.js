import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      // Disable Fast Refresh if causing issues
      fastRefresh: true,
    }),
    tailwindcss(),
  ],
  css: {
    // Force PostCSS, no lightningcss
    transformer: 'postcss',
    postcss: './postcss.config.js'
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 3000
  }
})