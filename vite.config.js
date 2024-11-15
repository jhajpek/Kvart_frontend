import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://skatom2.onrender.com",
        //changeOrigin: true, // This helps in handling the CORS issue
        //secure: false,      // If your server has self-signed SSL certificates
      },
    },
  },
});


