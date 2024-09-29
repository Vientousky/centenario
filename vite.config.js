import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acceso desde otros dispositivos en la red local
    port: 3000, // Cambia el puerto si lo deseas
  }
})