// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://iamzaheer.com',
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
