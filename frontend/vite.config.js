import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Changes the local dev port if needed
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Useful for clean absolute imports
    },
  },
})