# 核心架构

## 环境变量与主题

Uni-Lite 实现了 **单一事实来源 (Single Source of Truth)** 的主题管理方案。

### 工作原理

1. **配置源**：开发者在 `.env` 文件中修改 `VITE_APP_THEME`。
2. **UnoCSS 联动**：`unocss.config.ts` 实时读取该变量，生成 `text-primary`、`bg-primary` 等原子类。
3. **JS/TS 联动**：通过 `src/styles/theme.ts` 导出对象，供原生弹窗（confirmColor）或动态逻辑使用。

---

## 网络请求封装

位于 `src/utils/request/index.ts`，这是基于原生 `uni.request` 的深度封装，不引入 Axios 以保持极致轻量。

### 功能亮点

- **自动 Loading**：集成 `lite-loading`，请求发起自动显示，结束自动隐藏。
- **状态码拦截**：统一处理 `401` (登录失效)、`4005` (密码过期) 等业务逻辑。
- **类型安全**：支持全量泛型传递，实现从接口到页面的完整代码提示。

---

## 路由权限拦截

Uni-Lite 通过拦截 `uni.navigateTo` 等原生跳转 API 实现了一套轻量级的路由守卫。

### 逻辑说明

- **配置白名单**：在 `src/config/permission.config.ts` 中定义无需登录即可访问的页面。
- **权限检查**：跳转非白名单页面时，自动检查 `storage` 中的 Token。
- **自动重定向**：若校验失败，系统将拦截跳转并引导用户至登录页。
