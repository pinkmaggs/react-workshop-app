import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: '',
    rollupOptions: {
      input: 'src/index.jsx',
    },
  },
};