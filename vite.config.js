import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default {
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: '',
    rollupOptions: {
      input: 'src/main.jsx',
    },
  },
};