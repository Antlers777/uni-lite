---
layout: home

hero:
    name: 'Uni-Lite'
    text: '回归 Uni-App 开发本质'
    tagline: 极致轻量 / 企业级 / 零冗余的现代化开发模版
    image:
        src: /logo.svg
        alt: Uni-Lite
    actions:
        - theme: brand
          text: 快速开始
          link: /guide
        - theme: alt
          text: 查看演示
          link: https://demo.uni-lite.cn/

features:
    - icon: 🎨
      title: UnoCSS
      details: 原子化样式引擎。抛弃传统 CSS，实现极速开发与极小包体积，支持动态主题编译。
    - icon: 📱
      title: Tabbar
      details: 自定义底部导航栏。支持中间按钮凸起设计，完美适配全面屏安全区域，零依赖高性能。
    - icon: 🌐
      title: 网络请求
      details: 统一 Request 封装。内置 Promise 拦截器，支持自动 Loading、Token 注入及业务代码分发。
    - icon: ⏳
      title: 定制加载
      details: 全局 Loading 组件。重写原生加载体验，支持毛玻璃质感与平滑动画，无缝集成于请求链路。
    - icon: 📭
      title: 缺省状态
      details: 业务反馈系统。预设空数据、接口报错、断网、搜索无结果等多种语义化状态页面。
    - icon: 🌈
      title: 主题演示
      details: 响应式主题系统。打通 Vite 环境变量与 UnoCSS 运行时，实现全站配色一键切换。
---

<style>
:root {
  /* 主色调：Logo 的绿色 */
  --vp-c-brand: #42b883;
  --vp-c-brand-light: #52c193;
  --vp-c-brand-lighter: #62ca9f;
  --vp-c-brand-dark: #33a06f;
  --vp-c-brand-darker: #267752;

  /* 首页大图背景光晕颜色，匹配你的渐变色 */
  --vp-home-hero-image-background-image: linear-gradient( -45deg, #42b883 50%, #35495e 50% );
  --vp-home-hero-image-filter: blur(150px);
}

/* 如果用户切换到深色模式，可以微调绿色亮度 */
.dark {
  --vp-c-brand: #42b883;
  --vp-c-brand-light: #52c193;
}

/* 装饰：让首页的 Feature 卡片在悬停时边框变色 */
.VPFeature:hover {
  border-color: var(--vp-c-brand) !important;
}
</style>
