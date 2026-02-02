// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://JimmyKphotos.github.io/your-repo-name/', // ← your GitHub Pages URL
  base: '/your-repo-name/', // ← important for GitHub Pages
  vite: {
    plugins: [tailwindcs]()
