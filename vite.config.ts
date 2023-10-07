import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import css from 'vite-plugin-css-injected-by-js'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: resolve('src', 'overlay-scrollbar', 'index.tsx'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [react(), css(), dts({ entryRoot: './src/overlay-scrollbar' })],
})
