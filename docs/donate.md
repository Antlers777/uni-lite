# 初心与赞赏

## 为什么会有 Uni-Lite？

在 Uni-app 生态日益丰富的今天，我们发现市面上的模版越来越“重”——动辄数 MB 的插件包、过度封装的逻辑、难以拆解的 UI 组件。对于**初学者**而言，这增加了学习成本；对于**追求极致性能的开发者**而言，这背离了开发的本质。

**Uni-Lite 诞生的初衷很简单：**

1. **拒绝臃肿**：为那些厌倦了繁琐配置、想要一个“干干净净”起点的开发者提供选择。
2. **助力成长**：为刚入行、想要学习 Uni-app + Vue3 + TS 最佳实践的朋友提供一个清晰、标准、可读性高的参考模版。
3. **回归本质**：证明不依赖厚重的 UI 框架，依然能写出精美且高性能的跨端应用。

---

## 关于赞赏

Uni-Lite 是一个**完全开源且非营利**的项目。我的初衷是**帮助**而非**获利**。

如果你觉得这个模版让你少走了弯路，或者在学习过程中给了你一些启发，亦或是它在你的商业项目中起到了提效作用，欢迎通过下方的二维码请作者喝一杯咖啡 ☕️。

**所有的赞赏都将被视为对“开源精神”的一种鼓励，也是我持续优化、解答社群疑问的动力。**

<div class="donate-container">
  <div class="donate-item">
    <img src="/wechat-qr.jpg" alt="微信支付" />
    <text>微信支付</text>
  </div>
  <div class="donate-item">
    <img src="/alipay-qr.jpg" alt="支付宝支付" />
    <text>支付宝支付</text>
  </div>
</div>

<div class="thanks-msg">
  无论是否赞赏，都感谢你使用 Uni-Lite。愿每一个开发者都能保持纯粹，享受编程的乐趣。
</div>

<style scoped>
.donate-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
}

.donate-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.donate-item img {
  width: 240px;
  height: 330px; /* 匹配你收款码的长宽比 */
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-3);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.donate-item img:hover {
  transform: scale(1.05);
}

.donate-item text {
  margin-top: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.thanks-msg {
  margin-top: 40px;
  padding: 20px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  color: var(--vp-c-text-2);
  font-style: italic;
  text-align: center;
  font-size: 0.9em;
}

@media (max-width: 640px) {
  .donate-item img {
    width: 200px;
    height: 275px;
  }
}
</style>
