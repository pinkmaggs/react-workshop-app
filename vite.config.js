import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    port: 5000,
    https: true
  }
})