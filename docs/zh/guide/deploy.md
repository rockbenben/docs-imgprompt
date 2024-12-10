# 项目部署

## 部署说明

System Requirements:

- [Node.js 18.17](https://nodejs.org/) or later.
- macOS, Windows (including WSL), and Linux are supported.

### Vercel 部署

点击下方按钮，一键将 IMGPrompt 部署到 Vercel 平台：

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2Fimg-prompt%2Ftree%2Fmain)

通过 Vercel，你可以快速将项目托管，并且可以自动处理构建和部署，适合没有复杂服务器配置需求的用户。

### 本地部署

确保你已安装 [Node.js](https://nodejs.org/)。

```shell
# Installation
yarn

# Local Development
yarn dev

# build and start
yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Docker 部署

如果你更倾向于在容器环境中运行应用程序，可以使用以下方法通过 Docker 容器运行 IMGPrompt：

```shell
# ghcr.io
docker run -d -p 5666:5666 --name imgprompt ghcr.io/rockbenben/img-prompt:latest

# docker hub
docker run -d -p 5666:5666 --name imgprompt rockben/img-prompt:latest
```

运行容器后，你可以在浏览器中访问 [http://localhost:5666](http://localhost:5666) 来使用该应用。
