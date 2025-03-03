import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/', // Set the base URL to root
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
    // Ensure the favicon is copied to the dist directory during build
    assetsInclude: ['**/*.svg'],
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', 'recharts'],
          utils: ['lodash', 'papaparse']
        }
      }
    }
  },
  css: {
    // Ensure CSS preprocessing happens
    postcss: './postcss.config.js', // Point to your PostCSS config
  },
  // Ensure static assets from public folder are served properly
  publicDir: 'public'
})