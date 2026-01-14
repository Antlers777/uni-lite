<template>
    <lite-page>
        <view class="container">
            <view class="header">
                <view class="i-carbon-timer text-5xl text-purple-500 mb-2"></view>
                <text class="title">定制加载</text>
                <text class="desc">重写全局 Loading 体验</text>
            </view>

            <view class="card-list">
                <view class="card-item" @tap="showStandard">
                    <view class="card-info">
                        <text class="card-title">标准加载</text>
                        <text class="card-tips">3秒后自动关闭</text>
                    </view>
                    <view class="i-carbon-chevron-right text-slate-300"></view>
                </view>

                <view class="card-item" @tap="showCustomText">
                    <view class="card-info">
                        <text class="card-title">自定义文字</text>
                        <text class="card-tips">展示“请稍后...”</text>
                    </view>
                    <view class="i-carbon-chevron-right text-slate-300"></view>
                </view>

                <view class="card-item" @tap="showNoMask">
                    <view class="card-info">
                        <text class="card-title">无遮罩模式</text>
                        <text class="card-tips">不阻碍背景点击</text>
                    </view>
                    <view class="i-carbon-chevron-right text-slate-300"></view>
                </view>
            </view>
        </view>
    </lite-page>
</template>

<script setup lang="ts">
import { $loading } from '@/utils/loading'
import LitePage from '@/components/layout/lite-page.vue'

const showStandard = () => {
    $loading.show()
    setTimeout(() => {
        $loading.hide()
    }, 3000)
}

const showCustomText = () => {
    $loading.show('正在排队中...')
    setTimeout(() => {
        $loading.hide()
    }, 3000)
}

const showNoMask = () => {
    $loading.show('轻量加载', false)
    setTimeout(() => {
        $loading.hide()
    }, 3000)
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 40rpx;

    padding-top: calc(var(--status-bar-height) + 120rpx);
}

.header {
    padding: 60rpx 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        font-size: 44rpx;
        font-weight: bold;
        color: #1e293b;
    }
    .desc {
        font-size: 24rpx;
        color: #94a3b8;
        margin-top: 10rpx;
    }
}

.card-list {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
    width: 100%;
}

.card-item {
    background-color: white;
    padding: 40rpx;
    border-radius: 24rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #f1f5f9;

    &:active {
        background-color: #f8fafc;
    }
}

.card-info {
    display: flex;
    flex-direction: column;
    .card-title {
        font-size: 30rpx;
        font-weight: 600;
        color: #334155;
    }
    .card-tips {
        font-size: 22rpx;
        color: #94a3b8;
        margin-top: 6rpx;
    }
}

.footer {
    margin-top: 100rpx;
    text-align: center;
    text {
        font-size: 24rpx;
        color: #cbd5e1;
    }
}
</style>
