import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  
  ],
  server:{
    allowedHosts:[
      "8191-2806-10a6-9-8768-508f-a6d3-dc24-f01a.ngrok-free.app"
    ]
  }
})
