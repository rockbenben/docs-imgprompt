import { defineConfig } from 'rspress/config';
import sitemap from 'rspress-plugin-sitemap';

export default defineConfig({
  plugins: [
    sitemap({
      domain: 'https://prompt.newzone.top',
      defaultChangeFreq: 'monthly',
      defaultPriority: '0.5',
    }),
  ],
});
