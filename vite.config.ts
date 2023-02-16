/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import viteSentry from 'vite-plugin-sentry'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      eslint(),
      viteSentry({
        url: 'https://sentry.inqool.cz/',
        authToken: '66a5fb88a62011ed9bf5d6a275274721',
        org: 'inqool',
        project: 'Numisdeal',
        deploy: {
          env: 'production',
        },
        setCommits: {
          auto: true,
        },
        sourceMaps: {
          include: ['./dist/assets'],
          ignore: ['node_modules'],
          urlPrefix: '~/assets',
        },
      }),
    ],
    build: {
      // required for sentry: tells vite to create source maps
      sourcemap: true,
    },
    server: {
      port: 3000,
    },
  }
})
