import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      'next/link': path.resolve(__dirname, './src/next-link-compat.tsx'),
      'next/navigation': path.resolve(__dirname, './src/next-nav-compat.tsx'),
    },
  },
});
