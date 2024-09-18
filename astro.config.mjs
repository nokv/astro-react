import fs from 'fs';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

const cert = fs.readFileSync('./localhost.pem');
const key = fs.readFileSync('./localhost-key.pem');

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react()],
  site: 'https://example.com',
  vite: {
    server: {
      https: {
        cert,
        key,
      },
    },
  },
});
