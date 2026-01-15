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
          text: 扫码预览
          link: '#qr-preview'
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

<!-- 二维码展示区域 -->
<div id="qr-preview" class="qr-container">
  <div class="qr-card">
    <div class="qr-info">
      <h3>微信小程序体验</h3>
      <p>扫码直接在真机运行演示项目</p>
      <div class="qr-badges">
        <span class="badge">原生体验</span>
        <span class="badge">快速响应</span>
      </div>
    </div>
    <div class="qr-image-wrapper">
      <img src="/qr-code.jpg" alt="小程序二维码" class="qr-code-img" />
      <div class="qr-scan-line"></div>
    </div>
  </div>
</div>

<style>
:root {
  --vp-c-brand: #42b883;
  --vp-c-brand-light: #52c193;
  --vp-c-brand-lighter: #62ca9f;
  --vp-c-brand-dark: #33a06f;
  --vp-c-brand-darker: #267752;
  --vp-home-hero-image-background-image: linear-gradient( -45deg, #42b883 50%, #35495e 50% );
  --vp-home-hero-image-filter: blur(150px);
}

/* 二维码容器样式 */
.qr-container {
  display: flex;
  justify-content: center;
  padding: 40px 24px;
  background: transparent;
}

.qr-card {
  display: flex;
  align-items: center;
  gap: 40px;
  background: var(--vp-c-bg-soft);
  padding: 30px 50px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.qr-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(66, 184, 131, 0.1);
}

.qr-info h3 {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: var(--vp-c-text-1);
}

.qr-info p {
  color: var(--vp-c-text-2);
  margin-bottom: 20px;
}

.qr-badges {
  display: flex;
  gap: 10px;
}

.badge {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 500;
}

/* 二维码图片及动效 */
.qr-image-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
  background: white;
  padding: 8px;
  border-radius: 12px;
  overflow: hidden;
}

.qr-code-img {
  width: 100%;
  height: 100%;
  display: block;
}

/* 扫描线动画 */
.qr-scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--vp-c-brand), transparent);
  animation: scan 3s linear infinite;
  box-shadow: 0 0 8px var(--vp-c-brand);
}

@keyframes scan {
  0% { top: 0; }
  100% { top: 100%; }
}

/* 响应式适配 */
@media (max-width: 640px) {
  .qr-card {
    flex-direction: column;
    text-align: center;
    padding: 30px;
    gap: 20px;
  }
  .qr-badges {
    justify-content: center;
  }
}

.VPFeature:hover {
  border-color: var(--vp-c-brand) !important;
}
</style>
