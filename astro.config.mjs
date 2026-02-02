import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://JimmyKphotos.github.io/my-portfolio/',
  base: '/my-portfolio/',
  vite: {
    plugins: [tailwindcss()]
  }
});
