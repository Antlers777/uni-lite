# Uni-Lite Template

<p align="center">
  <img src="./src/static/logo.svg" width="120" height="120" alt="Uni-Lite Logo">
</p>

<p align="center">
  <strong>极致轻量 / 企业级 / 现代化的 Uni-App 开发模版</strong>
</p>

<p align="center">
  基于 Vue 3 + TypeScript + Vite + UnoCSS，剔除厚重的 UI 库，回归高性能开发的本质。
</p>

<p align="center">
  🌐 **在线演示：** [https://uni-lite.vercel.app/](https://uni-lite.vercel.app/)
</p>

<p align="center">
  <img src="./src/static/uni-lite.vercel.app.png" width="120" height="120" alt="Uni-Lite Logo">
</p>
## 🚀 特色功能

- **⚡️ 极致性能**：全量采用 UnoCSS 原子化 CSS，零冗余样式，包体积极小，渲染速度飞快。
- **🎨 动态主题**：支持通过 `.env` 环境变量一键修改全局主题色，打通 UnoCSS 与 JS 变量，实现“单一事实来源”。
- **🛡️ 强力类型**：全量 TypeScript 支持，内置环境变量、全局响应体、Vue 组件的完整类型提示。
- **🔌 优雅封装**：
    - **Request**：基于 Promise 的 `uni.request` 拦截器，支持自动加载、Token 注入、状态码业务分发。
    - **Permission**：手写原生的 API 路由拦截器，支持页面访问白名单。
- **📦 精美组件**：内置自研的 `lite-loading`、`lite-empty`、`lite-back` 等组件，拒绝臃肿的第三方 UI 框架。
- **🏗️ 布局系统**：采用 `lite-page` 容器化布局，自动集成 Loading、返回按钮、状态管理。
- **📏 工程规范**：内置 ESLint + Prettier + Husky + Commitlint，强制约束代码风格与 Git 提交信息。

## 🛠️ 技术栈

- **框架**：[Uni-App](https://uniapp.dcloud.net.cn/) (Vue 3)
- **脚本**：[TypeScript](https://www.typescriptlang.org/)
- **构建**：[Vite](https://vitejs.dev/)
- **样式**：[UnoCSS](https://unocss.dev/) (Preset-Applet)
- **规范**：ESLint / Prettier / Commitlint / Husky

## 📂 项目结构

```text
src/
├── api/             # 接口请求中心
├── components/      # 自研轻量级组件库
├── composables/     # 组合式逻辑 Hooks
├── config/          # 业务配置文件 (主题、网络)
├── hooks/           # 灵活hook
├── pages/           # 页面视图
├── static/          # 静态资源
├── styles/          # 主题与全局样式声明
├── types/           # 全局 TypeScript 声明中心
├── utils/           # 工具函数封装 (Request, Storage, Permission)
├── App.vue          # 全局生命周期与动态变量注入
└── main.ts          # 入口文件
```

## 🏁 快速开始

### 1. 克隆并安装

```bash
# 克隆项目
git clone https://github.com/Antlers777/uni-lite.git

# 进入目录
cd uni-lite-template

# 安装依赖 (推荐 pnpm)
pnpm install
```

### 2. 环境配置

在根目录 `.env` 文件中修改配置：

```env
VITE_APP_TITLE=Uni-Lite
VITE_BASE_URL=https://api.example.com
VITE_APP_THEME=#61affe  # 在这里修改你的全局主题色
```

### 3. 运行项目

```bash
# 运行到微信小程序
pnpm dev:mp-weixin

# 运行到 H5
pnpm dev:h5
```

## 💡 开发核心指南

### 如何使用主题色？

- **HTML**: 直接使用 UnoCSS 类名，如 `text-primary` 或 `bg-primary`。
- **JS/TS**: 引入 `@/styles/theme` 中的 `themeColors`。
- **CSS**: 使用 `var(--primary-color)`。

### 如何使用网络请求？

```typescript
import api from '@/api'

const fetchDetail = async () => {
    const res = await api.test.detail({ id: 1 })
    // 数据已在拦截器中处理完毕，直接使用
}
```

### 路由权限

在 `src/config/permission.config.ts` 中添加白名单，拦截器会自动处理未登录跳转。

## 🤝 贡献指南

1. Fork 本仓库
2. 新建分支 (`git checkout -b feat/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feat/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 开源协议

本项目基于 [MIT](./LICENSE) 协议开源。

---

<p align="center">如果你觉得这个项目对你有帮助，请给一个 ⭐️ 以示鼓励！</p>

---
