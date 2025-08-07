import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // 确保使用正确的资源引用方式
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // 确保JS文件使用.js扩展名
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})