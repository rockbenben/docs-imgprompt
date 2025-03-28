# 提示词数据

IMGPrompt 的提示词资源来源于网络收集、[promptoMANIA](https://promptomania.com/midjourney-prompt-builder/) 以及 [sd-webui-prompt-all-in-one](https://github.com/Physton/sd-webui-prompt-all-in-one/blob/main/group_tags/zh_CN.yaml)，并去重后整理了近五千条图像提示词。

## 数据结构

IMGPrompt 的提示词数据存储在 `src/app/data` 目录下。

- `prompt` 子目录包含不同语言版本的提示词文件，例如英语（`prompt-en.json`）、中文（`prompt-zh.json`）和西班牙语（`prompt-es.json`）等。
- `constants.tsx` 文件包含应用常量，一般无需修改。
- `prompt-custom.json` 文件用于存储用户自定义的提示语，允许用户根据需求进行个性化设置，并且应用将在所有语言版本中默认加载 `prompt-custom.json` 中的配置。

项目目录结构如下：

```yml
src
└── app
    └── data
        ├── prompt # 存放不同语言版本的提示词
        │   ├── prompt-en.json # 英语提示词
        │   ├── prompt-zh.json # 中文提示词
        │   ├── prompt-es.json # 西班牙语提示词
        │   └── ......         # 其他语言版本提示词
        ├── constants.tsx # 应用常量
        └── prompt-custom.json # 用户自定义提示词
```

## 自定义提示词

如果你想增加新的提示词数据，可以使用 [IMGPrompt 数据转换器](https://tools.newzone.top/zh/data-parser/img-prompt)，将自定义提示词转换为 IMGPrompt 格式。然后，将转换后的数据保存在自部署的 `src/app/data/prompt-custom.json` 文件中。除了用于 AI 绘图，IMGPrompt 还可以用于管理专业提示词和多种数据编辑场景。

### 修改示例

```json
[
  {
    "displayName": "prompt1",
    "langName": "提示词 1 翻译",
    "object": "定制对象 1",
    "attribute": "定制属性"
  },
  {
    "displayName": "prompt2",
    "langName": "提示词 2 翻译",
    "object": "定制对象 1",
    "attribute": "定制属性"
  }
]
```
