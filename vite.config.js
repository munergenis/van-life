import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      pages: '/src/pages',
      components: '/src/components',
      assets: '/src/assets',
      utils: '/src/utils',
      hooks: '/src/hooks',
    }
  }
})
