<template>
    <view class="lite-empty" :style="{ marginTop: marginTop }">
        <!-- 图标区 -->
        <view class="icon-box" :class="statusConfig.color">
            <view :class="statusConfig.icon" class="main-icon"></view>
        </view>

        <!-- 文字区 -->
        <view class="content">
            <text class="title">{{ title || statusConfig.title }}</text>
            <text class="desc">{{ description || statusConfig.desc }}</text>
        </view>

        <!-- 操作区 -->
        <view v-if="showButton" class="action">
            <button class="btn" @tap="handleAction">
                {{ buttonText || statusConfig.btnText }}
            </button>
        </view>

        <!-- 自定义插槽 -->
        <slot></slot>
    </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    type?: 'data' | 'error' | 'network' | 'search' // 状态类型
    title?: string // 主标题
    description?: string // 描述文字
    showButton?: boolean // 是否显示按钮
    buttonText?: string // 按钮文字
    marginTop?: string // 顶部间距
}

const props = withDefaults(defineProps<Props>(), {
    type: 'data',
    showButton: false,
    marginTop: '20vh'
})

const emit = defineEmits(['action', 'retry'])

// 不同状态的预设配置
const statusMap = {
    data: {
        icon: 'i-carbon-document-blank',
        color: 'text-slate-300',
        title: '暂无数据',
        desc: '这里空空如也，什么都没有找到',
        btnText: '去添加'
    },
    error: {
        icon: 'i-carbon-warning-alt',
        color: 'text-orange-400',
        title: '服务异常',
        desc: '服务器开小差了，请稍后再试',
        btnText: '重新加载'
    },
    network: {
        icon: 'i-carbon-wifi-off',
        color: 'text-rose-400',
        title: '网络断开',
        desc: '请检查您的网络设置是否正常',
        btnText: '重试'
    },
    search: {
        icon: 'i-carbon-search',
        color: 'text-slate-300',
        title: '搜索无结果',
        desc: '换个关键词试试看吧',
        btnText: '清空搜索'
    }
}

const statusConfig = computed(() => statusMap[props.type])

const handleAction = () => {
    emit('action')
    if (props.type === 'error' || props.type === 'network') {
        emit('retry')
    }
}
</script>

<style lang="scss" scoped>
.lite-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 60rpx;
    width: 100%;
}

.icon-box {
    margin-bottom: 30rpx;
    .main-icon {
        font-size: 140rpx;
    }
}

.content {
    text-align: center;
    margin-bottom: 50rpx;

    .title {
        display: block;
        font-size: 34rpx;
        font-weight: bold;
        color: #1e293b;
        margin-bottom: 12rpx;
    }

    .desc {
        display: block;
        font-size: 26rpx;
        color: #94a3b8;
        line-height: 1.5;
    }
}

.btn {
    min-width: 240rpx;
    height: 80rpx;
    line-height: 80rpx;
    background-color: #3b82f6;
    color: white;
    border-radius: 40rpx;
    font-size: 28rpx;
    padding: 0 40rpx;

    &:active {
        transform: scale(0.95);
        opacity: 0.9;
    }
}
</style>
