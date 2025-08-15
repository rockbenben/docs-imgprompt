import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import sitemap from 'rspress-plugin-sitemap';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  icon: '/rspress-icon.png',
  logo: { light: '/light-logo.png', dark: '/dark-logo.png' },
  lang: 'zh',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title:
        'IMGPrompt: Your Creative AI Art Assistant | Master FLUX, Midjourney, DALL·E, Sora&Stable Diffusion',
      description:
        'Struggling with prompts for AI art? IMGPrompt offers a vast library of quality prompts, smart suggestions, and multi-language translation to help you create stunning images. Master tools like FLUX, Midjourney and Sora, and unleash your creativity.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title:
        'IMGPrompt: 创意 AI 绘图助手 | 轻松驾驭 FLUX、Midjourney、Sora、DALL·E&Stable Diffusion）',
      description:
        '在为AI绘图提示词烦恼吗？IMGPrompt是你的创意AI绘图助手，提供海量灵感、智能推荐和翻译，支持FLUX等工具。告别语言障碍，立即提升你的创作效率。',
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
