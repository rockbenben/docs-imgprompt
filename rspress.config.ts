import * as path from "node:path";
import { defineConfig } from "@rspress/core";
import { pluginLlms } from "@rspress/plugin-llms";
import { pluginSitemap } from "@rspress/plugin-sitemap";

const SITE_URL = "https://prompt.newzone.top";
const SITE_NAME = "IMGPrompt";
const OG_IMAGE = `${SITE_URL}/rspress-icon.png`;

const META = {
  en: {
    title: "IMGPrompt: 5,000+ AI Art Prompts, Native-Language to Fluent English",
    description:
      "IMGPrompt lets you browse in your language and output polished English prompts. 5,000+ curated tags for style, lighting, composition, smart suggestions and translation, ready for Nano Banana, Midjourney, FLUX, Stable Diffusion, DALL·E, and more—copy and create instantly.",
    ogLocale: "en_US",
  },
  zh: {
    title: "IMGPrompt：5000+ AI 绘图提示词库，支持多语言一键生成",
    description: "IMGPrompt 帮你用母语浏览、英文输出，内置 5000+ 精选风格/灯光/构图标签，智能推荐与翻译，支持 Nano Banana、Midjourney、FLUX、Stable Diffusion、DALL·E 等，一键复制即可用。",
    ogLocale: "zh_CN",
  },
} as const;

const metaFor = (lang: string) => (lang === "en" ? META.en : META.zh);

const stripEnPrefix = (p: string) => p.replace(/^\/en(?=\/|$)/, "") || "/";
const zhUrlFor = (routePath: string) => `${SITE_URL}${stripEnPrefix(routePath)}`;
const enUrlFor = (routePath: string) => {
  const p = stripEnPrefix(routePath);
  return `${SITE_URL}/en${p === "/" ? "/" : p}`;
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: META.en.description,
  inLanguage: ["en", "zh-CN"],
};

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: SITE_NAME,
  applicationCategory: "DesignApplication",
  operatingSystem: "Web, Windows, macOS, Linux",
  description: META.en.description,
  url: "https://prompt.newzone.top/app/en",
  downloadUrl: "https://github.com/rockbenben/img-prompt/releases",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const isHomeRoute = (routePath: string) => routePath === "/" || routePath === "/en/";

const RESOURCES_ZH = [
  "## 相关资源",
  "",
  "- [Web App (简体中文)](https://prompt.newzone.top/app/zh)",
  "- [Web App (English)](https://prompt.newzone.top/app/en)",
  "- [桌面客户端下载](https://github.com/rockbenben/img-prompt/releases)",
  "- [开源仓库](https://github.com/rockbenben/img-prompt)",
  "",
].join("\n");

const RESOURCES_EN = [
  "## Resources",
  "",
  "- [Web App (English)](https://prompt.newzone.top/app/en)",
  "- [Web App (简体中文)](https://prompt.newzone.top/app/zh)",
  "- [Desktop downloads](https://github.com/rockbenben/img-prompt/releases)",
  "- [Source code](https://github.com/rockbenben/img-prompt)",
  "",
].join("\n");

export default defineConfig({
  root: path.join(__dirname, "docs"),
  icon: "/rspress-icon.png",
  logo: { light: "/light-logo.png", dark: "/dark-logo.png" },
  lang: "zh",
  locales: [
    { lang: "en", label: "English", title: META.en.title, description: META.en.description },
    { lang: "zh", label: "简体中文", title: META.zh.title, description: META.zh.description },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/rockbenben/img-prompt",
      },
    ],
  },
  head: [
    `<script defer src="https://s.newzone.top/tracker.js" data-website-id="3f8b2ed2-fea7-4c6f-b0ca-045c853b5c8f"></script>`,
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: SITE_NAME }],
    ["meta", { property: "og:image", content: OG_IMAGE }],
    ["meta", { name: "twitter:card", content: "summary" }],
    (route) => ["meta", { property: "og:title", content: metaFor(route.lang).title }],
    (route) => ["meta", { property: "og:description", content: metaFor(route.lang).description }],
    (route) => ["meta", { property: "og:locale", content: metaFor(route.lang).ogLocale }],
    (route) => ["meta", { property: "og:url", content: `${SITE_URL}${route.routePath}` }],
    (route) => ["link", { rel: "canonical", href: `${SITE_URL}${route.routePath}` }],
    (route) => ["link", { rel: "alternate", hreflang: "zh-CN", href: zhUrlFor(route.routePath) }],
    (route) => ["link", { rel: "alternate", hreflang: "en", href: enUrlFor(route.routePath) }],
    (route) => ["link", { rel: "alternate", hreflang: "x-default", href: zhUrlFor(route.routePath) }],
    (route) => ["meta", { property: "og:locale:alternate", content: route.lang === "en" ? "zh_CN" : "en_US" }],
    `<script type="application/ld+json">${JSON.stringify(websiteLd)}</script>`,
    (route) =>
      isHomeRoute(route.routePath)
        ? `<script type="application/ld+json">${JSON.stringify(softwareApplicationLd)}</script>`
        : undefined,
  ],
  plugins: [
    pluginLlms([
      {
        llmsTxt: {
          name: "llms.txt",
          onAfterLlmsTxtGenerate: (content) => `# ${SITE_NAME}\n\n> ${META.zh.description}\n\n${content}\n\n${RESOURCES_ZH}`,
        },
        llmsFullTxt: { name: "llms-full.txt" },
        mdFiles: {},
        include: ({ page }) => page.lang === "zh",
      },
      {
        llmsTxt: {
          name: "en/llms.txt",
          onAfterLlmsTxtGenerate: (content) => `# ${SITE_NAME}\n\n> ${META.en.description}\n\n${content}\n\n${RESOURCES_EN}`,
        },
        llmsFullTxt: { name: "en/llms-full.txt" },
        mdFiles: {},
        include: ({ page }) => page.lang === "en",
      },
    ]),
    pluginSitemap({
      siteUrl: SITE_URL,
      customMaps: {
        "/en/": { loc: `${SITE_URL}/en/`, priority: "1.0", changefreq: "monthly" },
      },
    }),
  ],
});
