import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-paloma/', // <- o nome do repositório
  plugins: [react()],
})