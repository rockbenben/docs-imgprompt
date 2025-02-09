"use strict";(self.webpackChunkweb_docs_imgprompt=self.webpackChunkweb_docs_imgprompt||[]).push([["853"],{540:function(e,n,r){r.r(n),r.d(n,{default:()=>d});var s=r(5893),t=r(65);function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"提示词数据",children:["提示词数据",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#提示词数据",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["IMGPrompt 的提示词资源来源于网络收集、",(0,s.jsx)(n.a,{href:"https://promptomania.com/midjourney-prompt-builder/",target:"_blank",rel:"noopener noreferrer",children:"promptoMANIA"})," 以及 ",(0,s.jsx)(n.a,{href:"https://github.com/Physton/sd-webui-prompt-all-in-one/blob/main/group_tags/zh_CN.yaml",target:"_blank",rel:"noopener noreferrer",children:"sd-webui-prompt-all-in-one"}),"，并去重后整理了近五千条图像提示词。"]}),"\n",(0,s.jsxs)(n.h2,{id:"数据结构",children:["数据结构",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#数据结构",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["IMGPrompt 的提示词数据存储在 ",(0,s.jsx)(n.code,{children:"src/app/data"})," 目录下。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt"})," 子目录包含不同语言版本的提示词文件，例如英语（",(0,s.jsx)(n.code,{children:"prompt-en.json"}),"）、中文（",(0,s.jsx)(n.code,{children:"prompt-zh.json"}),"）和西班牙语（",(0,s.jsx)(n.code,{children:"prompt-es.json"}),"）等。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"constants.tsx"})," 文件包含应用常量，一般无需修改。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt-custom.json"})," 文件用于存储用户自定义的提示语，允许用户根据需求进行个性化设置，并且应用将在所有语言版本中默认加载 ",(0,s.jsx)(n.code,{children:"prompt-custom.json"})," 中的配置。"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"项目目录结构如下："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"src\n└── app\n    └── data\n        ├── prompt # 存放不同语言版本的提示词\n        │   ├── prompt-en.json # 英语提示词\n        │   ├── prompt-zh.json # 中文提示词\n        │   ├── prompt-es.json # 西班牙语提示词\n        │   └── ......         # 其他语言版本提示词\n        ├── constants.tsx # 应用常量\n        └── prompt-custom.json # 用户自定义提示词\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"自定义提示词",children:["自定义提示词",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义提示词",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果你想增加新的提示词数据，可以使用 ",(0,s.jsx)(n.a,{href:"https://tools.newzone.top/data-parser/img-prompt",target:"_blank",rel:"noopener noreferrer",children:"IMGPrompt 数据转换器"}),"，将自定义提示词转换为 IMGPrompt 格式。然后，将转换后的数据保存在自部署的 ",(0,s.jsx)(n.code,{children:"src/app/data/prompt-custom.json"})," 文件中。除了用于 AI 绘图，IMGPrompt 还可以用于管理专业提示词和多种数据编辑场景。"]}),"\n",(0,s.jsxs)(n.h3,{id:"修改示例",children:["修改示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改示例",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "displayName": "prompt1",\n    "langName": "提示词 1 翻译",\n    "object": "定制对象 1",\n    "attribute": "定制属性"\n  },\n  {\n    "displayName": "prompt2",\n    "langName": "提示词 2 翻译",\n    "object": "定制对象 1",\n    "attribute": "定制属性"\n  }\n]\n'})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fguide%2Fdata.md"]={toc:[{text:"数据结构",id:"数据结构",depth:2},{text:"自定义提示词",id:"自定义提示词",depth:2},{text:"修改示例",id:"修改示例",depth:3}],title:"提示词数据",headingTitle:"提示词数据",frontmatter:{}}}}]);