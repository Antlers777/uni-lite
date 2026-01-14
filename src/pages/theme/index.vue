<template>
    <lite-page>
        <view class="container">
            <view class="header">
                <view class="i-carbon-color-palette text-5xl text-primary mb-2"></view>
                <text class="title">主题色配置</text>
                <text class="desc">当前主色调来源于环境变量: VITE_APP_THEME</text>
            </view>

            <!-- 核心测试：主色调 -->
            <view class="section-title">主色测试 (Primary)</view>
            <view class="primary-preview">
                <!-- 测试 1: 使用 UnoCSS 类名 (验证 unocss.config.ts) -->
                <view class="bg-primary shadow-lg shadow-primary/30 preview-box">
                    <text class="text-white font-bold">UnoCSS: bg-primary</text>
                </view>
                <!-- 测试 2: 使用 JS 变量 (验证 theme.ts) -->
                <view class="info-row">
                    <text class="label">当前 Hex 值:</text>
                    <text class="value text-primary font-mono">{{ themeColors.primary }}</text>
                </view>
            </view>

            <!-- 语义色展示 -->
            <view class="section-title">语义色板</view>
            <view class="color-grid">
                <view v-for="(color, name) in semanticColors" :key="name" class="color-card">
                    <!-- 动态绑定背景色 -->
                    <view class="color-swatch" :style="{ backgroundColor: color }"></view>
                    <view class="color-info">
                        <text class="color-name">{{ name }}</text>
                        <text class="color-hex">{{ color }}</text>
                    </view>
                </view>
            </view>

            <!-- 灰阶展示 -->
            <view class="section-title">中性灰阶 (Grayscale)</view>
            <view class="gray-list">
                <view v-for="(color, name) in grayColors" :key="name" class="gray-item">
                    <view class="gray-bar" :style="{ backgroundColor: color }"></view>
                    <text class="gray-label">{{ name }}</text>
                    <text class="gray-hex">{{ color }}</text>
                </view>
            </view>

            <view class="footer">
                <text>修改 .env 后请重启项目生效</text>
            </view>
        </view>
    </lite-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { themeColors } from '@/styles/theme'

// 分离语义色和灰阶以便展示
const semanticColors = computed(() => {
    const { primary, secondary, success, warning, error, info } = themeColors
    return { primary, secondary, success, warning, error, info }
})

const grayColors = computed(() => {
    const { gray1, gray2, gray3, gray4, gray5, gray6, black, slate } = themeColors
    return { black, slate, gray1, gray2, gray3, gray4, gray5, gray6 }
})
</script>

<style lang="scss" scoped>
.container {
    padding: 140rpx 40rpx 60rpx;
    width: 100%;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60rpx;
    .title {
        font-size: 40rpx;
        font-weight: bold;
        color: #1e293b;
    }
    .desc {
        font-size: 24rpx;
        color: #94a3b8;
        margin-top: 8rpx;
        text-align: center;
    }
}

.section-title {
    font-size: 26rpx;
    font-weight: bold;
    color: #64748b;
    margin: 40rpx 0 20rpx;
    text-transform: uppercase;
}

.primary-preview {
    background: white;
    padding: 30rpx;
    border-radius: 24rpx;
    border: 1px solid #f1f5f9;

    .preview-box {
        height: 120rpx;
        border-radius: 16rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20rpx;
    }

    .info-row {
        display: flex;
        justify-content: space-between;
        font-size: 26rpx;
        .label {
            color: #94a3b8;
        }
        .value {
            color: #334155;
        }
    }
}

.color-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;
}

.color-card {
    background: white;
    padding: 16rpx;
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    border: 1px solid #f1f5f9;

    .color-swatch {
        width: 60rpx;
        height: 60rpx;
        border-radius: 12rpx;
        margin-right: 20rpx;
    }

    .color-info {
        display: flex;
        flex-direction: column;
        .color-name {
            font-size: 24rpx;
            font-weight: bold;
            color: #334155;
        }
        .color-hex {
            font-size: 20rpx;
            color: #94a3b8;
            font-family: monospace;
        }
    }
}

.gray-list {
    background: white;
    border-radius: 24rpx;
    padding: 10rpx;
    border: 1px solid #f1f5f9;
}

.gray-item {
    display: flex;
    align-items: center;
    padding: 20rpx;
    border-bottom: 1px solid #f8fafc;
    &:last-child {
        border-bottom: none;
    }

    .gray-bar {
        width: 100rpx;
        height: 30rpx;
        border-radius: 6rpx;
        margin-right: 20rpx;
    }

    .gray-label {
        font-size: 24rpx;
        color: #475569;
        flex: 1;
    }
    .gray-hex {
        font-size: 22rpx;
        color: #94a3b8;
        font-family: monospace;
    }
}

.footer {
    margin-top: 60rpx;
    text-align: center;
    font-size: 22rpx;
    color: #cbd5e1;
}
</style>
