import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // New Tailwind Vite plugin
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/data': '/src/data',
      '@/hooks': '/src/hooks',
      '@/types': '/src/types',
      '@/utils': '/src/utils',
    },
  },
  // Development optimizations
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Build optimizations
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
