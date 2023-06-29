import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import babelMacros from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    babelMacros(),
    react({
      babel: {
        //TODO: investigate SC transient props warning
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
