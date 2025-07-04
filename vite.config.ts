import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Path aliases for clean imports
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/data': '/src/data',
      '@/hooks': '/src/hooks',
      '@/types': '/src/types',
      '@/utils': '/src/utils',
      '@/pages': '/src/pages',
    },
  },

  // Use relative paths for Ionos webspace upload
  base: './',

  // Development optimizations
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },

  // Build configuration for Ionos static hosting
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,

    rollupOptions: {
      output: {
        // Separate vendor chunk for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
