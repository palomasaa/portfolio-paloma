import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração para dev e GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-paloma/', // nome EXATO do repositório
  server: { port: 5173, open: true, host: true },
})
