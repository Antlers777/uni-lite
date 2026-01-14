<template>
    <lite-page>
        <view class="container">
            <!-- 1. 顶部状态栏 -->
            <view class="status-header">
                <view
                    class="i-carbon-cloud-service text-5xl text-blue-500 mb-2"
                ></view>
                <text class="title">网络请求封装</text>
                <text class="desc">基于 uni.request 的 Promise 拦截器</text>
            </view>

            <!-- 2. 操作区 -->
            <view class="action-section">
                <view class="section-title">接口调试</view>
                <view class="button-group">
                    <button class="btn btn-primary" @tap="fetchDetail">
                        <text class="i-carbon-fetch-upload mr-1"></text>
                        获取用户数据
                    </button>
                    <button class="btn btn-outline" @tap="resetData">
                        重置
                    </button>
                </view>
            </view>

            <!-- 3. 结果展示区 -->
            <view class="result-section">
                <view class="section-title">用户信息卡片</view>

                <!-- 加载中 -->
                <view v-if="loading" class="loading-box">
                    <view class="spinner"></view>
                    <text>正在连接远程 API...</text>
                </view>

                <!-- 成功展示 -->
                <view v-else-if="userData" class="data-card animate-fade-in">
                    <view class="card-header">
                        <view class="user-main">
                            <text class="user-name">{{ userData.name }}</text>
                            <text class="user-id">#{{ userData.id }}</text>
                        </view>
                        <text class="status-tag">Active</text>
                    </view>

                    <view class="info-list">
                        <view class="info-item">
                            <text class="label">用户名</text>
                            <text class="value">@{{ userData.username }}</text>
                        </view>
                        <view class="info-item">
                            <text class="label">电子邮箱</text>
                            <text class="value">{{ userData.email }}</text>
                        </view>
                        <view class="info-item">
                            <text class="label">联系电话</text>
                            <text class="value">{{ userData.phone }}</text>
                        </view>
                        <view class="info-item">
                            <text class="label">所属公司</text>
                            <text class="value">{{
                                userData.company.name
                            }}</text>
                        </view>
                        <view class="info-item">
                            <text class="label">居住城市</text>
                            <text class="value">{{
                                userData.address.city
                            }}</text>
                        </view>
                    </view>
                </view>

                <!-- 空状态 -->
                <view v-else class="empty-state">
                    <view
                        class="i-carbon-document-blank text-5xl text-slate-200 mb-2"
                    ></view>
                    <text>等待数据加载</text>
                </view>
            </view>

            <!-- 4. JSON 预览 -->
            <view class="json-preview" v-if="userData">
                <view class="preview-title">RAW RESPONSE (JSON)</view>
                <scroll-view scroll-y class="json-content">
                    <text class="json-text">{{
                        JSON.stringify(userData, null, 2)
                    }}</text>
                </scroll-view>
            </view>
        </view>
    </lite-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import api from "@/api/index";
import type { User } from "@/api/test/types";

const userData = ref<User | null>(null);
const loading = ref(false);

const fetchDetail = async () => {
    loading.value = true;
    try {
        // api.test.detail 已配置好指向 https://jsonplaceholder.typicode.com/users/1
        const res = await api.test.detail({ id: 1 });
        if (res) {
            userData.value = res;
        }
    } catch (err) {
        console.error("请求失败", err);
    } finally {
        loading.value = false;
    }
};

const resetData = () => {
    userData.value = null;
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 40rpx;
}

.status-header {
    padding: 60rpx 0 40rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

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

.section-title {
    font-size: 24rpx;
    font-weight: bold;
    color: #94a3b8;
    margin-bottom: 20rpx;
    text-transform: uppercase;
    letter-spacing: 1rpx;
}

.action-section {
    margin-bottom: 60rpx;
    width: 100%;

    .button-group {
        display: flex;
        gap: 20rpx;
        width: 100%;
    }
}

/* 按钮风格 */
.btn {
    flex: 1;
    height: 94rpx;
    border-radius: 16rpx;
    font-size: 28rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    &-primary {
        background: #3b82f6;
        color: white;
        box-shadow: 0 10rpx 20rpx -10rpx rgba(59, 130, 246, 0.5);
        &:active {
            transform: scale(0.96);
            opacity: 0.9;
        }
    }

    &-outline {
        background: white;
        color: #64748b;
        border: 1px solid #e2e8f0;
        &:active {
            background: #f8fafc;
        }
    }
}

/* 数据卡片 */
.data-card {
    background: white;
    border-radius: 32rpx;
    padding: 40rpx;
    border: 1px solid #f1f5f9;
    width: 100%;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.02);

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 40rpx;

        .user-main {
            display: flex;
            flex-direction: column;
        }

        .user-name {
            font-size: 40rpx;
            font-weight: bold;
            color: #1e293b;
        }

        .user-id {
            font-size: 24rpx;
            color: #cbd5e1;
            font-family: monospace;
        }

        .status-tag {
            font-size: 20rpx;
            background: #eff6ff;
            color: #3b82f6;
            padding: 6rpx 16rpx;
            border-radius: 10rpx;
            font-weight: bold;
        }
    }

    .info-list {
        .info-item {
            display: flex;
            flex-direction: column;
            margin-bottom: 24rpx;

            &:last-child {
                margin-bottom: 0;
            }

            .label {
                font-size: 22rpx;
                color: #94a3b8;
                margin-bottom: 4rpx;
            }
            .value {
                font-size: 28rpx;
                color: #475569;
                font-weight: 500;
            }
        }
    }
}

/* JSON 预览区 */
.json-preview {
    margin-top: 60rpx;
    background: #0f172a;
    border-radius: 24rpx;
    padding: 30rpx;
    width: 100%;

    .preview-title {
        color: #475569;
        font-size: 20rpx;
        margin-bottom: 20rpx;
        font-family: monospace;
    }

    .json-content {
        max-height: 500rpx;
        width: 100%;
    }

    .json-text {
        color: #34d399; /* 换个清爽的绿色 */
        font-size: 22rpx;
        font-family: monospace;
        white-space: pre-wrap;
        word-break: break-all;
        line-height: 1.6;
    }
}

/* 加载动画 */
.loading-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80rpx 0;

    .spinner {
        width: 60rpx;
        height: 60rpx;
        border: 5rpx solid #f1f5f9;
        border-top-color: #3b82f6;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        margin-bottom: 20rpx;
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.empty-state {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100rpx 0;
    color: #cbd5e1;
    text {
        font-size: 26rpx;
        margin-top: 20rpx;
    }
}

.animate-fade-in {
    animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20rpx);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
