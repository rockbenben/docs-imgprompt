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
        'IMGPrompt - Your Creative AI Art Assistan | Nano Banana, Midjourney, FLUX, SD, DALL·E Prompt Builder',
      description:
        'Free online AI art prompt generator for Nano Banana, Midjourney, FLUX, Stable Diffusion, and DALL·E. Smart tag selection, one-click professional prompts, with built-in portrait lighting and quality optimization templates.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title:
        'IMGPrompt - AI绘画提示词生成器 | Nano Banana/Midjourney/FLUX/SD/DALL·E 提示词助手',
      description:
        '免费在线AI绘画提示词生成工具，支持Nano Banana、Midjourney、FLUX、Stable Diffusion、DALL·E。智能标签选择、一键生成专业级提示词，内置人像布光、画质优化模板，让你的AI艺术作品轻松出圈。',
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
