# Prompt Data

The prompt resources for **IMGPrompt** are collected from online sources, including [promptoMANIA](https://promptomania.com/midjourney-prompt-builder/) and [sd-webui-prompt-all-in-one](https://github.com/Physton/sd-webui-prompt-all-in-one/blob/main/group_tags/zh_CN.yaml). After deduplication and standardization, nearly 5,000 prompts have been compiled. These can be used in various AI image generation and text-to-video scenarios.

## Data Structure Overview

All prompt data is stored in the project directory under `src/app/data` with the following structure:

```yml
src
└── app
    └── data
        ├── prompt             # Stores prompts in various languages
        │   ├── prompt-en.json # English prompts
        │   ├── prompt-zh.json # Chinese prompts
        │   ├── prompt-es.json # Spanish prompts
        │   └── ......         # Prompts in other languages
        ├── constants.tsx      # Application constants (usually no need to modify)
        └── prompt-custom.json # User-defined custom prompts (loaded for all languages by default)
```

Each prompt corresponds to a JSON object with the following structure:

```json
{
  "displayName": "prompt1",        // English prompt (must be unique)
  "langName": "Localized translation", // Name shown in the UI
  "object": "Main category",       // Primary classification for organization
  "attribute": "Subcategory",      // Secondary classification or tag
  "description": "Optional description of the prompt" // (Optional) Tooltip explanation
}
```

Explanation:

| Field         | Required | Description                                                |
| ------------- | -------- | ---------------------------------------------------------- |
| `displayName` | ✅ Yes    | Unique English prompt                   |
| `langName`    | ✅ Yes    | Name displayed in the UI (localized or custom translation) |
| `object`      | ✅ Yes    | Main category or type, e.g., "Character", "Style", etc.    |
| `attribute`   | ✅ Yes    | Subcategory or descriptive tag for further classification  |
| `description` | ❌ No     | Tooltip text shown on hover to provide more context        |

## Adding Custom Prompts

To expand the prompt list, you can use the [IMGPrompt Data Converter](https://tools.newzone.top/zh/data-parser/img-prompt) to convert your custom data into the standard format. The converted results should be saved to the path `src/app/data/prompt-custom.json`. This file is automatically loaded at app startup and applies to all language settings.

Here is an example of the `prompt-custom.json` format:

```json
[
  {
    "displayName": "prompt1",
    "langName": "Translation of Prompt 1",
    "object": "Main Category",
    "attribute": "Subcategory"
  },
  {
    "displayName": "prompt2",
    "langName": "Translation of Prompt 2",
    "object": "Main Category",
    "attribute": "Subcategory",
    "description": "Optional description"
  }
]
```
