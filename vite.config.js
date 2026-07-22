import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages project site: replace REPO_NAME with your repository name.
  // If you use a custom domain (e.g. www.codryn.com), remove this line or set base: '/'.
  base: '/REPO_NAME/',
  plugins: [react(), tailwindcss()],
})
