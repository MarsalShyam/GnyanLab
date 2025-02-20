import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  base:'/GnyanLab/',
  build: {
    outDir: "dist"
  },
  // The base path must match your repository name (GnyanLab) and include a trailing slash (/).
  plugins: [react(),
    tailwindcss(),autoprefixer(),],
})
