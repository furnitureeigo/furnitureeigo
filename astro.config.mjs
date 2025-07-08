import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://furnitureeigo.workers.dev',
  output: 'server',
  adapter: cloudflare(),
});