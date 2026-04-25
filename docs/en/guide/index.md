---
head:
  - - meta
    - property: og:title
      content: "IMGPrompt Guide: Getting Started with the AI Art Prompt Editor"
description: "IMGPrompt user guide: 5,000+ bilingual AI prompts, hover (desktop) or long-press (touch) to preview images, click to zoom in a lightbox, dual tag modes, shareable URLs, and 18-language smart suggestions — works with Nano Banana, Midjourney, FLUX, Veo, and more."
---

# Introduction

In AI image and video generation, the right prompt is everything. For non-native English speakers, the hardest part is finding the right English phrasing. **IMGPrompt** removes that barrier with a native-language-first prompt editor built for Nano Banana, GPT-Image-2, Midjourney, FLUX, Seedance, Veo, Kling and other image/video models (also compatible with Stable Diffusion and DALL·E).

With over **5,040 curated prompt tags**, a clean interface, native-language translations for every term, and instant image previews for tagged entries, you can browse, click, and compose the perfect English prompt in seconds.

[Try IMGPrompt now and boost your creative workflow.](https://prompt.newzone.top/app/en)

![IMGPrompt UI](https://img.newzone.top/2024-10-23-18-31-38.png?imageMogr2/format/webp)

## Why IMGPrompt

- Browse in your own language, output fluent English, works with all mainstream image/video models.
- 5,000+ curated tags across 16 main categories — styles, lighting, composition, camera, artists, and more.
- Visual click-to-compose with hover (desktop) / long-press (touch) previews to keep you in creative flow.

## How It Works

1. Browse 16 main categories in your native language.
2. Drill down: main category → subcategory.
3. Click a tag to insert it; hover (desktop) or long-press for ~0.5s (touch) to preview the example; click the thumbnail to zoom.
4. Copy the generated English prompt into any AI tool.

## Features

### 🏆 5,000+ Native-to-English Library

16 main categories, hundreds of subcategories, and every tag paired with a native-language label so you know what you're picking.

### 🖼️ Hover / Long-Press to Preview, Click to Zoom

Entries with example images surface a preview popover (native-language name, thumbnail, description). On desktop it appears on hover; **on touch devices, long-press the tag for ~0.5 seconds** to open it. Click / tap the thumbnail to enter the lightbox:

- **Zoom in/out** with scroll or buttons to see detail.
- **Rotate** at 45° / 90° increments for multiple angles.
- **Download** to save to your local reference library.
- **Keyboard**: `Esc` closes; arrow keys navigate (where applicable).

Closing the lightbox preserves your browsing and selection state — no flow interruption.

> On touch devices, a quick tap still **adds / removes** the tag — long-press is the preview gesture, so the two never collide.

### 🎨 Dual Modes: Multicolor vs Monochrome

- **Multicolor** uses category-based color blocks — strong visual hierarchy, great for browsing and inspiration.
- **Monochrome** maximizes information density — great for quick scanning and comparison.
- Toggle lives in the top-right of the tag section; preference is saved locally.

### 🔗 Share Your Current View

The URL carries your current browsing state as `?object=<main>&attribute=<sub>`. Send the link to a teammate and they open to the exact same category — perfect for team workflows and tutorials.

### 🤖 Smart Suggestions & Translation

- Type in any of 18 languages to get up to 10 matching tag suggestions.
- Built-in translator converts arbitrary text to English; multi-service fallback (Google → Youdao → MyMemory) with race protection.
- 1.5s debounce to avoid spamming APIs.

![Smart Suggestion Demo](https://img.newzone.top/gif/imgprompt-ai-suggestions.webp)

![Translation Demo](https://img.newzone.top/gif/imgprompt-translate.webp)

### 🧩 One-Click Templates & Cleanup

- Quick insert: portrait lighting, quality polish, negative prompts.
- Comma-based tagging: comma input triggers auto-dedup, grouping, and chip rendering.
- Random color swap: replace color words at random to spark fresh ideas.

### 📊 Character Counter

Real-time length counter — keep prompts **under ~380 characters** for better model reproducibility.

### 🌓 Light / Dark Theme

Light, Dark, and Follow-System modes, powered by the antd 6 token system — easy on the eyes at night.

### 🔒 Fully Local, Fully Private

Everything runs in the browser. No login, no upload, no backend. State persists across tab switches.

### 📂 Open & Customizable Data

Prompt data lives in open JSON (`src/app/data/prompt/*.json`). Edit directly or use the [IMGPrompt Data Converter](https://tools.newzone.top/data-parser/img-prompt) for bulk import.

### 🖥️ Cross-Platform Client

Prefer desktop? Grab Windows, macOS (Intel + Apple Silicon), or Linux builds from [GitHub Releases](https://github.com/rockbenben/img-prompt/releases).

### 🌍 18 Languages

UI and prompt database in: English, Simplified/Traditional Chinese, Japanese, Korean, Spanish, French, German, Portuguese, Russian, Arabic, Hindi, Bengali, Indonesian, Vietnamese, Thai, Turkish, Italian.
