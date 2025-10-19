
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pricing: resolve(__dirname, 'pages/pricing.html'),
        about: resolve(__dirname, 'pages/about.html'),
        features: resolve(__dirname, 'pages/features.html'),
        agents: resolve(__dirname, 'pages/agents.html'),
        howwork: resolve(__dirname, 'pages/how-work.html'),
        partners: resolve(__dirname, 'pages/partners.html'),
      },
    },
  },
})
