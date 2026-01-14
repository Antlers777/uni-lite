<template>
    <lite-page>
        <view class="container">
            <!-- 选项卡 -->
            <view class="tabs">
                <view
                    v-for="tab in tabs"
                    :key="tab.key"
                    class="tab-item"
                    :class="{ active: currentTab === tab.key }"
                    @tap="currentTab = tab.key"
                >
                    {{ tab.name }}
                </view>
            </view>

            <!-- 动态展示不同状态 -->
            <view class="status-content">
                <!-- 场景1：无数据 -->
                <lite-empty
                    v-if="currentTab === 'data'"
                    type="data"
                    show-button
                    @action="handleAdd"
                />

                <!-- 场景2：接口报错 -->
                <lite-empty
                    v-if="currentTab === 'error'"
                    type="error"
                    title="接口请求失败"
                    description="Error Code: 500. 请联系技术支持。"
                    show-button
                    button-text="点击刷新"
                    @retry="handleRetry"
                />

                <!-- 场景3：网络断开 -->
                <lite-empty
                    v-if="currentTab === 'network'"
                    type="network"
                    show-button
                    @retry="handleRetry"
                />

                <!-- 场景4：搜索无结果 -->
                <lite-empty v-if="currentTab === 'search'" type="search">
                    <!-- 演示插槽功能 -->
                    <view class="custom-slot" @tap="currentTab = 'data'"> 返回列表首页 </view>
                </lite-empty>
            </view>
        </view>
    </lite-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentTab = ref('data')

const tabs = [
    { name: '空数据', key: 'data' },
    { name: '报错', key: 'error' },
    { name: '断网', key: 'network' },
    { name: '搜索', key: 'search' }
]

const handleAdd = () => {
    uni.showToast({ title: '去往添加页面', icon: 'none' })
}

const handleRetry = () => {
    uni.showToast({ title: '正在重新加载...', icon: 'loading' })
}
</script>

<style lang="scss" scoped>
.container {
    padding: 160rpx 30rpx 40rpx;
    width: 100%;
}

.tabs {
    display: flex;
    width: 100%; /* 确保 Tab 栏占满整个 container */
    background: white;
    padding: 10rpx;
    border-radius: 20rpx;
    margin-bottom: 40rpx;
    box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.02); // 加点微弱阴影更精美

    .tab-item {
        flex: 1; /* 让 4 个 Tab 均分宽度 */
        text-align: center;
        padding: 20rpx 0;
        font-size: 26rpx;
        color: #64748b;
        border-radius: 16rpx;
        transition: all 0.2s;

        &.active {
            background: #3b82f6;
            color: white;
            font-weight: bold;
        }
    }
}

.custom-slot {
    margin-top: 40rpx;
    font-size: 26rpx;
    color: #3b82f6;
    text-decoration: underline;
}
</style>
