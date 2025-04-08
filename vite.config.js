import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 This is the key part
    port: 5173,       // optional but good to be explicit
    strictPort: true  // avoids port auto-switching
  }
})
