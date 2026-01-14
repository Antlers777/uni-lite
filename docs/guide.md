# 介绍

## 什么是 Uni-Lite?

**Uni-Lite** 是一款为追求极致性能和工程化规范的开发者打造的 Uni-app 轻量级、扁平化开发模版。

在当前 UI 框架日益厚重的环境下，Uni-Lite 选择做“减法”。我们拒绝引入数 MB 大小的第三方 UI 库，转而使用原子化 CSS 和精简的自研原生组件，旨在为企业级应用提供一个**极速、规范、扁平、高度可定制**的开发起点。

### 核心价值

- **⚡️ 极速**：全量 UnoCSS，包体积比传统模版减小 60% 以上。
- **🛡️ 规范**：严格的 TS 声明与 Git 提交约束，代码即文档。
- **🌈 灵活**：打通环境变量与样式的深度集成，一键换肤。
- **📱 原生**：不依赖厚重框架，在低端设备上依然保持丝滑体验。

---

## 快速开始

### 1. 环境准备

确保你的开发环境已安装 [Node.js](https://nodejs.org/) (推荐 v18+) 和 [pnpm](https://pnpm.io/)。

### 2. 克隆项目

```bash
git clone https://github.com/Antlers777/uni-lite.git
cd uni-lite
pnpm install
```

### 3. 环境配置

修改根目录 .env 文件中的配置：

```bash
VITE_APP_TITLE=Uni-Lite
VITE_BASE_URL=https://api.example.com
VITE_APP_THEME=#42b883  # 修改此处可同步修改全站主题色
```

### 4. 运行项目

```bash
pnpm dev:mp-weixin  # 运行到微信小程序
pnpm dev:h5         # 运行到 H5 浏览器
```
