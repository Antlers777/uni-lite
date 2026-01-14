# 内置组件

Uni-Lite 的组件设计原则是：**零外部依赖、样式完全可控、性能最优**。

## Loading 全局加载

具有毛玻璃质感的平滑加载组件，用于提升请求等待体验。

- **调用方式**：通过 `$loading` 工具类。
- **集成**：已深度集成在 Request 请求链路中，无需页面级调用。

```typescript
import { $loading } from '@/utils/loading'

$loading.show('处理中...')
$loading.hide()
```

## Empty 缺省状态

用于处理业务中的异常反馈场景，如空数据、报错、断网等。

- 语义化：通过 type 属性快速切换状态。
- 可扩展：支持按钮操作回调及默认插槽。

```bash
<!-- 基础用法 -->
<lite-empty type="data" />

<!-- 带重试按钮 -->
<lite-empty type="network" show-button @retry="onRetry" />
```

## Back 返回按钮

自动适配异形屏和状态栏高度的悬浮返回键。

- 智能显示：组件挂载时自动判断页面栈深度（getCurrentPages().length），仅在二级页面显示。
- 毛玻璃效果：在复杂背景下依然保持清晰且具现代感。
- 布局容器：建议配合 lite-page 容器组件使用，实现自动适配。

## Tabbar 底部导航

高度可自定义的底部导航组件，弥补了原生 Tabbar 样式僵硬、无法动态扩展的不足。

#### 核心特性

- 自由配置：支持传入数组动态生成 3 至 5 个导航项。
- 中间凸起：通过 isAction 属性可一键开启中间按钮悬浮凸起设计，常用于扫码、发布等核心功能。
- 主题同步：自动关联全局主题色，支持激活态与未激活态颜色配置。
- 安全适配：内置 iPhone 底部安全区域（Safe Area）感应，确保布局不被黑条遮挡。

#### 使用示例

```bash
<lite-tabbar
  v-model="currentTab"
  :list="tabList"
  @actionTap="handleAction"
/>
```

#### 数据结构

```
const tabList = [
  { title: "首页", icon: "home", path: "/pages/index" },
  { title: "扫码", isAction: true }, // 开启中间突出模式
  { title: "我的", icon: "person", path: "/pages/mine" }
]
```

## LitePage 页面容器

Uni-Lite 的标准页面底座。

- 全自动：默认集成 lite-back、lite-loading 和 lite-empty。
- 一键开发：开发者只需关注业务逻辑，无需在每个页面重复引入基础 UI 组件。
