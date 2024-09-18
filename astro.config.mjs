import fs from 'fs';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react()],
  site: 'https://example.com',
  vite: {
    server: {
      https: import.meta.env.DEV && {
        cert: fs.readFileSync('./localhost.pem'),
        key: fs.readFileSync('./localhost-key.pem'),
      },
    },
  },
});
