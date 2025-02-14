import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/GnyanLab/',
  // The base path must match your repository name (GnyanLab) and include a trailing slash (/).
  plugins: [react(),
    tailwindcss()],
})
