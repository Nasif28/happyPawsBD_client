import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000, // Adjust this value to the desired limit in KB
  },
  server: {
    open: true, // Automatically open the app in the browser
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material', '@mui/x-date-pickers', '@emotion/react', '@emotion/styled'],
  },
})
