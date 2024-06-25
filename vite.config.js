import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@redux": path.resolve(__dirname, './src/redux'),
      "@assets": path.resolve(__dirname, './src/assets'),
      "@hooks": path.resolve(__dirname, './src/hooks'),
      "@shared": path.resolve(__dirname, './src/shared'),
      sharedStyles: path.resolve(__dirname, './src/styles/sharedStyles.scss'), 
    }
  }
});
