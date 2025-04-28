import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
import react from '@vitejs/plugin-react'

// import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env, // Ensures process.env works in Vite
  },
  plugins: [
    react(),
    // tailwindcss(),
  ],
})
