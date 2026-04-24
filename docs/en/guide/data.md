---
head:
  - - meta
    - property: og:title
      content: 'IMGPrompt Prompt Data Structure & Customization Guide'
description: 'IMGPrompt prompt data schema explained: displayName, langName, object, attribute, description, and preview fields with image guidelines; import custom prompts in bulk via the data converter to extend your AI art library.'
---

# Prompt Data

IMGPrompt's prompt library is compiled from online sources, [promptoMANIA](https://promptomania.com/midjourney-prompt-builder/), [sd-webui-prompt-all-in-one](https://github.com/Physton/sd-webui-prompt-all-in-one/blob/main/group_tags/zh_CN.yaml), and [awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) (CC BY 4.0). After deduplication, standardization, and localization across 18 languages, we have **5,000+ entries** across 16 main categories and hundreds of subcategories.

## Data Structure

All prompt data lives under `src/app/data`:

```yaml
src
└── app
    └── data
        ├── prompt              # Prompts in 18 languages
        │   ├── prompt-zh.json  # Simplified Chinese (source of truth; others derived from it)
        │   ├── prompt-en.json  # English
        │   ├── prompt-ja.json  # Japanese
        │   └── ......          # 15 other languages
        └── prompt-custom.json  # User-defined prompts (loaded for all languages)
```

Each prompt is a JSON object:

```json
{
  "displayName": "portrait",
  "langName": "Portrait",
  "object": "Character",
  "attribute": "Basics",
  "description": "(Optional) description or author credit",
  "preview": "(Optional) preview image URL"
}
```

### Field Reference

| Field         | Required | Description                                                                            |
| ------------- | -------- | -------------------------------------------------------------------------------------- |
| `displayName` | ✅ Yes   | Unique English prompt — the actual text inserted into the prompt box                   |
| `langName`    | ✅ Yes   | Localized label shown in the UI                                                        |
| `object`      | ✅ Yes   | Main category (e.g., Character, Environment, Photography, Art Style)                   |
| `attribute`   | ✅ Yes   | Subcategory (e.g., Basics, Expression, Camera Focus, Portrait)                         |
| `description` | ❌ No    | Tooltip text on hover (e.g., author credits, usage notes)                              |
| `preview`     | ❌ No    | Preview image URL — shown inside the hover tooltip and **clickable to open a lightbox** |

> 💡 The `preview` field powers the hover-to-preview + click-to-zoom experience. Entries with a preview image get a small indicator icon and stand out visually.

### Data Hygiene Tips

- Keep `displayName` unique — duplicates are ignored and reduce suggestion quality.
- Reuse the same `object` / `attribute` values across languages so navigation stays consistent.
- Keep `langName` concise to avoid chip truncation.
- For `preview`, WebP ≤ 150 KB with a 1:1 (square) aspect ratio renders best inside the tooltip.

## Adding Custom Prompts

Use the [IMGPrompt Data Converter](https://tools.newzone.top/data-parser/img-prompt) to convert your data to the standard shape, then save to `src/app/data/prompt-custom.json`. This file is loaded at startup and applies to all languages.

Example:

```json
[
  {
    "displayName": "cyberpunk cityscape",
    "langName": "Cyberpunk Cityscape",
    "object": "Environment",
    "attribute": "Scene"
  },
  {
    "displayName": "cinematic lighting",
    "langName": "Cinematic Lighting",
    "object": "Lighting",
    "attribute": "Basics",
    "description": "Soft directional light + rim light for depth",
    "preview": "https://example.com/preview/cinematic.webp"
  }
]
```

Custom entries follow the exact same display rules as built-ins: include a `preview` to enable the hover-preview + click-to-zoom treatment.
