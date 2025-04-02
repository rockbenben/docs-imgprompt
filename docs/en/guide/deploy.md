# Project Deployment

IMGPrompt can be deployed on Cloudflare, Vercel, or any server.

## Deployment Instructions

**System Requirements:**

- [Node.js 18.18](https://nodejs.org/) or later.
- macOS, Windows (including WSL), and Linux are supported.

### Vercel Deployment

Click the button below to deploy IMGPrompt to the Vercel platform with a single click:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2Fimg-prompt%2Ftree%2Fmain)

With Vercel, you can quickly host your project, and it will automatically handle building and deployment. This option is ideal for users with no complex server configuration needs.

### Local Deployment

Ensure you have [Node.js](https://nodejs.org/) installed.

```shell
# Installation
yarn

# Local Development
yarn dev

# Build and start
yarn build && yarn start

# Deploy for a single language
yarn build:lang en
yarn build:lang zh
yarn build:lang zh-hant
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying the `src/app/[locale]/page.tsx` file. The page will auto-update as you make changes.

## Docker Deployment

If you prefer to run the application in a containerized environment, you can use the following method to run IMGPrompt via Docker:

```shell
# ghcr.io
docker run -d -p 5666:5666 --name imgprompt ghcr.io/rockbenben/img-prompt:latest

# docker hub
docker run -d -p 5666:5666 --name imgprompt rockben/img-prompt:latest
```

Once the container is running, you can access the application in your browser at [http://localhost:5666](http://localhost:5666).
