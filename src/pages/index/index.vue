<template>
    <view class="container">
        <!-- 顶部 Logo 与 标题 -->
        <view class="header">
            <image class="logo" src="/static/logo.svg" />
            <view class="text-area">
                <text class="title">{{ title }}</text>
                <text class="subtitle">轻量级 Uni-App 开发模版</text>
            </view>
        </view>

        <!-- 模块导航网格 -->
        <view class="nav-grid">
            <!-- UnoCSS -->
            <view class="nav-item" @click="goTo('/pages/unocss/index')" style="--bg-color: #3b82f6">
                <view class="icon-wrapper">
                    <text class="icon">🎨</text>
                </view>
                <text class="nav-label">UnoCSS</text>
                <text class="nav-desc">原子化样式</text>
            </view>

            <!-- Tabbar -->
            <view class="nav-item" @click="goTo('/pages/tabbar/index')" style="--bg-color: #10b981">
                <view class="icon-wrapper">
                    <text class="icon">📱</text>
                </view>
                <text class="nav-label">Tabbar</text>
                <text class="nav-desc">自定义底部栏</text>
            </view>

            <!-- 网络请求 -->
            <view
                class="nav-item"
                @click="goTo('/pages/request/index')"
                style="--bg-color: #f59e0b"
            >
                <view class="icon-wrapper">
                    <text class="icon">🌐</text>
                </view>
                <text class="nav-label">网络请求</text>
                <text class="nav-desc">Request 封装</text>
            </view>

            <!-- 定制加载 -->
            <view
                class="nav-item"
                @click="goTo('/pages/loading/index')"
                style="--bg-color: #8b5cf6"
            >
                <view class="icon-wrapper">
                    <text class="icon">⏳</text>
                </view>
                <text class="nav-label">定制加载</text>
                <text class="nav-desc">Loading 动画</text>
            </view>

            <!-- 状态页面-->
            <view class="nav-item" @click="goTo('/pages/status/index')" style="--bg-color: #ec4899">
                <view class="icon-wrapper">
                    <text class="icon">📭</text>
                </view>
                <text class="nav-label">缺省状态</text>
                <text class="nav-desc">Empty / Error</text>
            </view>

            <!-- 主题演示  -->
            <view class="nav-item" @click="goTo('/pages/theme/index')" style="--bg-color: #6366f1">
                <view class="icon-wrapper">
                    <text class="icon">🎨</text>
                </view>
                <text class="nav-label">主题演示</text>
                <text class="nav-desc">Vite & UnoCSS</text>
            </view>
        </view>

        <!-- 底部页脚 -->
        <view class="footer">
            <text>Uni-Lite Framework v1.0</text>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Uni-Lite')

const goTo = (url: string) => {
    uni.navigateTo({
        url: url,
        fail: () => {
            uni.showToast({ title: '页面开发中', icon: 'none' })
        }
    })
}
</script>

<style>
/* 保持你之前的 CSS 样式不变 */
view,
text,
image {
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #f8fafc;
    padding: 40rpx;
    overflow-x: hidden;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60rpx;
    margin-bottom: 80rpx;
    width: 100%;
}

.logo {
    height: 160rpx;
    width: 160rpx;
    border-radius: 40rpx;
    box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.1);
}

.text-area {
    margin-top: 30rpx;
    text-align: center;
}

.title {
    display: block;
    font-size: 48rpx;
    font-weight: bold;
    color: #1e293b;
    letter-spacing: 2rpx;
}

.subtitle {
    display: block;
    font-size: 26rpx;
    color: #94a3b8;
    margin-top: 10rpx;
}

.nav-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30rpx;
    width: 100%;
    max-width: 100%;
    /* 增加底部间距防止被页脚挡住 */
    margin-bottom: 60rpx;
}

.nav-item {
    background-color: #ffffff;
    padding: 40rpx 20rpx;
    border-radius: 32rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    border: 1px solid #f1f5f9;
    width: 100%;
}

.nav-item:active {
    transform: scale(0.95);
    background-color: #f8fafc;
}

.icon-wrapper {
    width: 100rpx;
    height: 100rpx;
    border-radius: 24rpx;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24rpx;
    box-shadow: 0 8rpx 20rpx -6rpx var(--bg-color);
}

.icon {
    font-size: 50rpx;
}

.nav-label {
    font-size: 30rpx;
    font-weight: 600;
    color: #334155;
    text-align: center;
}

.nav-desc {
    font-size: 22rpx;
    color: #94a3b8;
    margin-top: 8rpx;
    text-align: center;
}

.footer {
    margin-top: auto;
    padding: 60rpx 0;
    width: 100%;
    text-align: center;
}

.footer text {
    font-size: 24rpx;
    color: #cbd5e1;
}
</style>
