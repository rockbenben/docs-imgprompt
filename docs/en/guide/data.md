# Prompt Data

The IMGPrompt prompts is sourced from various online collections, including [promptoMANIA](https://promptomania.com/midjourney-prompt-builder/) and [sd-webui-prompt-all-in-one](https://github.com/Physton/sd-webui-prompt-all-in-one/blob/main/group_tags/zh_CN.yaml). After removing duplicates, nearly 5,000 image prompts have been organized.

## Data Structure

The IMGPrompt data is stored in the `src/app/data` directory.

- The `prompt` subdirectory contains prompt files in different languages, such as English (`prompt-en.json`), Chinese (`prompt-zh.json`), Spanish (`prompt-es.json`), and more.
- The `constants.tsx` file contains application constants, which generally do not need to be modified.
- The `prompt-custom.json` file is used to store custom user prompts, allowing users to personalize their settings. The application will automatically load the configurations from `prompt-custom.json` across all language versions.

The project directory structure is as follows:

```yml
src
└── app
    └── data
        ├── prompt  # Contains different language versions of the prompts
        │   ├── prompt-en.json  # English prompts
        │   ├── prompt-zh.json  # Chinese prompts
        │   ├── prompt-es.json  # Spanish prompts
        │   └── ......          # Other language versions of prompts
        ├── constants.tsx  # Application constants
        └── prompt-custom.json  # User-customized prompts
```

## Custom Prompts

If you want to add new prompt, you can use the [IMGPrompt Data Converter](https://tools.newzone.top/en/data-parser/img-prompt) to convert custom prompts into the IMGPrompt format. The converted data should be saved in the `src/app/data/prompt-custom.json` file of your self-hosted version. In addition to AI image generation, IMGPrompt can also be used to manage professional prompts and data editing in various scenarios.

### Example of Modification

```json
[
  {
    "displayName": "prompt1",
    "langName": "Translation of Prompt 1",
    "object": "Custom Object 1",
    "attribute": "Custom Attribute"
  },
  {
    "displayName": "prompt2",
    "langName": "Translation of Prompt 2",
    "object": "Custom Object 1",
    "attribute": "Custom Attribute"
  }
]
```
