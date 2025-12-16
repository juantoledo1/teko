import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    // Configuración para optimización de imágenes usando la nueva API
    domains: ['localhost', 'www.tekohatech.com'],
  },
});