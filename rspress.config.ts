import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'IMGPrompt',
  icon: '/rspress-icon.png',
  logo: {
    light: '/light-logo.png',
    dark: '/dark-logo.png',
  },
  lang: 'en',
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
});
