import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import sitemap from 'rspress-plugin-sitemap';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  icon: '/rspress-icon.png',
  logo: {
    light: '/light-logo.png',
    dark: '/dark-logo.png',
  },
  lang: 'zh',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title:
        'IMGPrompt: Creative AI Art Assistant, Image and Video Generation Prompt Editor (Stable Diffusion、Midjourney、DALL·E、FLUX、Sora)',
      description:
        'IMGPrompt is an AI prompt editor designed specifically for image generation tools like Stable Diffusion, Midjourney, DALL·E, FLUX, and video generation tools such as Sora. With its clean and intuitive interface, users can easily view and combine the prompts they need. Each prompt also comes with translations in the user’s native language, allowing you to quickly select or combine keywords with just a click or input, simplifying the prompt creation process and boosting your creative efficiency.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title:
        'IMGPrompt：创意 AI 绘图助手，图像与视频生成提示编辑器（Stable Diffusion、Midjourney、DALL·E、FLUX、Sora）',
      description:
        'IMGPrompt 是一款专为图像生成工具（如 Stable Diffusion、Midjourney、DALL·E、FLUX）和视频生成工具（如 Sora）设计的直观AI提示编辑器。通过简洁且易于使用的界面，用户可以轻松查看并组合所需的提示。每个提示都附有用户母语的翻译，让您只需点击或输入即可快速选择或组合关键词，从而简化提示创建过程，提升创作效率。',
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
