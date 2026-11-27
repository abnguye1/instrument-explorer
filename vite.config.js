import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative paths so the build works from any GitHub Pages subfolder (e.g. WebProgramming/10/)
  base: './',
  build: {
    // The Firebase SDK alone is ~450 kB, so the default 500 kB warning is expected here
    chunkSizeWarningLimit: 700,
  },
})
