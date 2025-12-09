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
        'IMGPrompt: 5,000+ AI Art Prompts, Native-Language to Fluent English',
      description:
        'IMGPrompt lets you browse in your language and output polished English prompts. 5,000+ curated tags for style, lighting, composition, smart suggestions and translation, ready for Nano Banana, Midjourney, FLUX, Stable Diffusion, DALL·E, and more—copy and create instantly.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'IMGPrompt：5000+ AI 绘图提示词库，支持多语言一键生成',
      description:
        'IMGPrompt 帮你用母语浏览、英文输出，内置 5000+ 精选风格/灯光/构图标签，智能推荐与翻译，支持 Nano Banana、Midjourney、FLUX、Stable Diffusion、DALL·E 等，一键复制即可用。',
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
