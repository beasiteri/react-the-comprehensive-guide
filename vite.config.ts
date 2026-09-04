import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/books': 'http://localhost:3001',
      '/users': 'http://localhost:3001',
      '/products': 'http://localhost:3001',
    }
  }
})
