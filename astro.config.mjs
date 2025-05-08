// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://SamuelGomezG.github.io',
  base: '/astro-landing-fazt',
  vite: {
    plugins: [tailwindcss()]
  }
});