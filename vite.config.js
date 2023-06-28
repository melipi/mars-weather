import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // added below for WSL compatability
  server: {
    watch: {
        usePolling: true
    }
  }
});
