# 提示词数据

IMGPrompt 的提示词资源来源于网络收集、[promptoMANIA](https://promptomania.com/midjourney-prompt-builder/) 以及 [sd-webui-prompt-all-in-one](https://github.com/Physton/sd-webui-prompt-all-in-one/blob/main/group_tags/zh_CN.yaml)。经过去重与标准化处理，共整理出近 5000 条图像/视频生成提示词，可用于多种 AI 绘图、文生视频等场景。

## 数据结构说明

所有提示词数据存储于项目目录 `src/app/data` 下，结构如下：

```yaml
src
└── app
    └── data
        ├── prompt             # 存放不同语言版本的提示词
        │   ├── prompt-en.json # 英语提示词
        │   ├── prompt-zh.json # 中文提示词
        │   ├── prompt-es.json # 西班牙语提示词
        │   └── ......         # 其他语言版本提示词
        ├── constants.tsx      # 应用常量文件（一般无需修改）
        └── prompt-custom.json # 用户自定义提示词（默认全语言加载）
```

每条提示词对应一个 JSON 对象，结构如下：

```json
{
  "displayName": "prompt1",        // 英文提示词（唯一）
  "langName": "提示词母语翻译",     // 用户界面中显示的本地化名称
  "object": "提示词主分类",         // 一级分类，用于组织结构
  "attribute": "提示词子分类",      // 二级分类或属性标签
  "description": "该提示词的描述"   // （可选）悬停时显示的补充说明
}
```

说明：

| 字段              | 是否必填 | 说明                        |
| ------------- | ---- | ------------------------- |
| `displayName` | ✅ 是  | 英文提示词（唯一）     |
| `langName`    | ✅ 是  | 显示在界面上的提示词名称（母语或定制语言翻译）       |
| `object`      | ✅ 是  | 提示词所属的分类或对象，例如“人物”、“风格”等  |
| `attribute`   | ✅ 是  | 提示词的特征或标签，用于进一步分类         |
| `description` | ❌ 否  | 鼠标悬停显示的说明文本，用于补充解释该提示词的用途 |

## 添加自定义提示词

如需扩展提示词内容，可使用 [IMGPrompt 数据转换器](https://tools.newzone.top/zh/data-parser/img-prompt) 将自定义数据转换为标准格式。转换后的结果应保存至路径 `src/app/data/prompt-custom.json`。该文件中的内容将在应用启动时自动加载，并适用于所有语言环境。

以下是 `prompt-custom.json` 的内容示例：

```json
[
  {
    "displayName": "prompt1",
    "langName": "提示词 1 翻译",
    "object": "所属主分类",
    "attribute": "所属子分类"
  },
  {
    "displayName": "prompt2",
    "langName": "提示词 2 翻译",
    "object": "所属主分类",
    "attribute": "所属子分类",
    "description": "描述（可选）"
  }
]
```
