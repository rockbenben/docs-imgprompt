import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import sitemap from 'rspress-plugin-sitemap';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'IMGPrompt',
  icon: '/rspress-icon.png',
  logo: {
    light: '/light-logo.png',
    dark: '/dark-logo.png',
  },
  lang: 'zh',
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English',
    },
    {
      lang: 'zh',
      // 导航栏切换语言的标签
      label: '简体中文',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/rockbenben/img-prompt',
      },
    ],
  },
  plugins: [
    sitemap({
      domain: 'https://prompt.newzone.top',
      defaultChangeFreq: 'monthly',
      defaultPriority: '0.5',
    }),
  ],
});
