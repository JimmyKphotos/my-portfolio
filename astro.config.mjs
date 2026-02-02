// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://JimmyKphotos.github.io/my-portfolio/', // ← your GitHub Pages URL
  base: '/my-portfolio/', // ← important for GitHub Pages
  vite: {
    plugins: [tailwindcss()] // ← fix the typo here (was "tailwindcs()")
  }
});
