import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Uni-Lite',
    description: '极致轻量、企业级的 Uni-App 开发模版',
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: '指南', link: '/guide' },
            { text: '组件', link: '/components' },
            { text: '打赏', link: '/donate' },
            { text: '在线演示', link: 'https://uni-lite.vercel.app/' }
        ],
        sidebar: [
            {
                text: '介绍',
                items: [
                    { text: '什么是 Uni-Lite?', link: '/guide' },
                    { text: '快速开始', link: '/guide#快速开始' }
                ]
            },
            {
                text: '核心架构',
                items: [
                    { text: '环境变量与主题', link: '/architecture#环境变量与主题' },
                    { text: '网络请求封装', link: '/architecture#网络请求封装' },
                    { text: '路由权限拦截', link: '/architecture#路由权限拦截' }
                ]
            },
            {
                text: '内置组件',
                items: [
                    { text: 'Loading 全局加载', link: '/components#loading-全局加载' },
                    { text: 'Empty 缺省状态', link: '/components#empty-缺省状态' },
                    { text: 'Back 返回按钮', link: '/components#back-返回按钮' },
                    { text: 'Tabbar 底部导航', link: '/components#tabbar-底部导航' },
                    { text: 'LitePage 页面容器', link: '/components#litepage-页面容器' }
                ]
            },
            {
                text: '其他',
                items: [{ text: '赞赏支持', link: '/donate' }]
            }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/Antlers777/uni-lite' }],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026-present Uni-Lite Team'
        }
    }
})
