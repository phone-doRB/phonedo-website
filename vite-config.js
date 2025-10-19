
import { defineConfig } from 'vite'
import { resolve } from 'path'

// IMPORTANT: base must be your repo name for GitHub Pages
// If your repo is named `phonedo-landing`, this is correct.
export default defineConfig({
  base: '/phonedo-landing/',
  build: {
    rollupOptions: {
      // Multi-page site: include ONLY files that actually exist
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
