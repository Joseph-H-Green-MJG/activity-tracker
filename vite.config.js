import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/activity-tracker/',
  server: {
    open: true,
    port: 8008
  }
})