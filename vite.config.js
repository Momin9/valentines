import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external access
    port: 5173, // Ensure it matches your local dev server
    strictPort: true, // Ensures it always runs on the specified port
    allowedHosts: ["d601-103-150-208-94.ngrok-free.app"], // Allows any subdomain of ngrok-free.app
  }
})
