import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração enxuta e estável.
// Abre o navegador automaticamente na porta 5173.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true
  }
})
