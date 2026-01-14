// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css' // 引入刚才创建的样式

export default {
    extends: DefaultTheme,
    // 如果你以后有自定义组件也可以在这里注册
    enhanceApp({ app }) {
        // ...
    }
}
