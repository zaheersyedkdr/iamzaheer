// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://zaheersyedkdr.github.io',
  base: '/iamzaheer',
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
