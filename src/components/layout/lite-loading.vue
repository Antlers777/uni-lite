<template>
    <view
        class="lite-loading"
        v-if="loadingState.show"
        :class="{ 'has-mask': loadingState.mask }"
    >
        <view class="loading-content animate-in">
            <!-- 精美旋转动画 -->
            <view class="spinner-box">
                <view class="spinner-inner"></view>
                <view class="spinner-dot"></view>
            </view>
            <text class="loading-text">{{ loadingState.title }}</text>
        </view>
    </view>
</template>

<script setup lang="ts">
import { loadingState } from "@/utils/loading";
</script>

<style lang="scss" scoped>
.lite-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    pointer-events: none; // 默认不阻挡点击

    &.has-mask {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(2px); // 毛玻璃效果
        pointer-events: auto; // 开启遮罩阻挡
    }
}

.loading-content {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 40rpx 50rpx;
    border-radius: 32rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 20rpx 60rpx rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.spinner-box {
    width: 80rpx;
    height: 80rpx;
    position: relative;
    margin-bottom: 24rpx;
}

.spinner-inner {
    width: 100%;
    height: 100%;
    border: 6rpx solid #f1f5f9;
    border-top-color: #3b82f6; // 主题蓝
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

.spinner-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12rpx;
    height: 12rpx;
    background-color: #3b82f6;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 1.5s ease-in-out infinite;
}

.loading-text {
    font-size: 26rpx;
    color: #64748b;
    font-weight: 500;
}

/* 进场动画 */
.animate-in {
    animation: scaleIn 0.2s ease-out;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    50% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(0.8);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
