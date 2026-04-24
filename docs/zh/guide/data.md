---
head:
  - - meta
    - property: og:title
      content: IMGPrompt 提示词数据结构与自定义指南
description: IMGPrompt 提示词数据结构详解：displayName、langName、object、attribute、description、preview 字段说明与预览图配置规范；支持数据转换器批量导入自定义条目，扩展 AI 绘图素材库。
---

# 提示词数据

IMGPrompt 的提示词资源来源于网络收集、[promptoMANIA](https://promptomania.com/midjourney-prompt-builder/)、[sd-webui-prompt-all-in-one](https://github.com/Physton/sd-webui-prompt-all-in-one/blob/main/group_tags/zh_CN.yaml)，以及 [awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts)（CC BY 4.0）。经过去重、标准化、18 种语言本地化处理后，共整理出 **5000+ 条** 图像/视频生成提示词，分布在 16 个主分类和数百个子分类下。

## 数据结构说明

所有提示词数据存储于项目目录 `src/app/data` 下，结构如下：

```yaml
src
└── app
    └── data
        ├── prompt              # 18 种语言版本的提示词
        │   ├── prompt-zh.json  # 简体中文（基准，其他语言从它派生）
        │   ├── prompt-en.json  # 英语
        │   ├── prompt-ja.json  # 日语
        │   └── ......          # 其他 15 种语言
        └── prompt-custom.json  # 用户自定义提示词（全语言加载）
```

每条提示词对应一个 JSON 对象：

```json
{
  "displayName": "portrait",
  "langName": "肖像",
  "object": "人物",
  "attribute": "基础",
  "description": "（可选）说明或作者署名",
  "preview": "（可选）预览图 URL"
}
```

### 字段说明

| 字段          | 是否必填 | 说明                                                                   |
| ------------- | -------- | ---------------------------------------------------------------------- |
| `displayName` | ✅ 是    | 英文提示词（唯一），实际插入到提示词框的内容                           |
| `langName`    | ✅ 是    | 母语/目标语言翻译，UI 中显示在标签上                                   |
| `object`      | ✅ 是    | 主分类（如 人物 / 环境 / 摄影 / 艺术风格）                             |
| `attribute`   | ✅ 是    | 子分类（如 基础 / 表情 / 镜头聚焦 / 肖像）                             |
| `description` | ❌ 否    | 鼠标悬停时 tooltip 中的附加说明（如作者署名、用法提示等）              |
| `preview`     | ❌ 否    | 预览图 URL，悬停标签时在 tooltip 内展示，**点击可进入 lightbox 放大**  |

> 💡 `preview` 字段是"悬停预览 + 点击放大"功能的数据源。有预览图的条目在标签右上角会有小图标提示，视觉上也更醒目。

### 数据维护小贴士

- `displayName` 必须唯一，重复项会被忽略，也会影响推荐质量。
- 多语言请复用同样的 `object` / `attribute`，保持界面分类一致。
- 让 `langName` 尽量简洁，避免标签显示被截断。
- `preview` 推荐用 WebP 格式、≤ 150 KB、方形构图（1:1），在 tooltip 中显示效果最佳。

## 添加自定义提示词

如需扩展提示词内容，可使用 [IMGPrompt 数据转换器](https://tools.newzone.top/zh/data-parser/img-prompt) 将自定义数据转换为标准格式。转换后的结果保存至 `src/app/data/prompt-custom.json`，应用启动时自动加载并适用于所有语言环境。

示例：

```json
[
  {
    "displayName": "cyberpunk cityscape",
    "langName": "赛博朋克城市",
    "object": "环境",
    "attribute": "场景"
  },
  {
    "displayName": "cinematic lighting",
    "langName": "电影感光线",
    "object": "光影",
    "attribute": "基础",
    "description": "柔和方向光 + 边缘光增强立体感",
    "preview": "https://example.com/preview/cinematic.webp"
  }
]
```

自定义条目和内置条目展示规则完全一致：带 `preview` 的会获得悬停预览 + 点击放大能力。
