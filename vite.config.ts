import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AP-Website/',         // <--- Add this line!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
