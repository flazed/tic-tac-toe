import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tic-tac-toe/',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@store': path.resolve(__dirname, './src/store'),
      '@icons': path.resolve(__dirname, './src/icons'),
      '@services': path.resolve(__dirname, './src/services'),
    },
    extensions: ['.ts', '.tsx'],
  },
  plugins: [react()],
})
