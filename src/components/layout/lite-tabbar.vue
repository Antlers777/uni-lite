<template>
    <view
        v-if="placeholder && fixed"
        class="lite-tabbar__placeholder"
        :class="{ 'safe-area-padding': safeAreaInsetBottom }"
    ></view>

    <!-- 主容器 -->
    <view
        class="lite-tabbar"
        :class="[fixed ? 'lite-tabbar--fixed' : '', safeAreaInsetBottom ? 'safe-area-padding' : '']"
        :style="{ zIndex: zIndex }"
    >
        <view
            v-for="(item, index) in list"
            :key="index"
            class="tabbar-item"
            :class="[
                item.isAction ? 'tabbar-item__action' : '',
                modelValue === index ? 'tabbar-item--active' : ''
            ]"
            @click="handleTap(item, index)"
        >
            <!-- 中间凸起的大按钮 -->
            <view v-if="item.isAction" class="action-wrapper">
                <view class="action-button">
                    <!-- 优先使用 slot，其次使用 uni-icons -->
                    <slot name="action-icon">
                        <uni-icons
                            v-if="item.icon"
                            :type="item.icon"
                            size="32"
                            color="#fff"
                        ></uni-icons>
                        <view v-else class="default-action-icon">+</view>
                    </slot>
                </view>
                <text v-if="item.title" class="tabbar-label">{{ item.title }}</text>
            </view>

            <!-- 普通按钮 -->
            <view v-else class="normal-wrapper">
                <uni-icons
                    v-if="item.icon"
                    :type="item.icon"
                    :color="modelValue === index ? activeColor : inactiveColor"
                    size="26"
                ></uni-icons>
                <text class="tabbar-label">{{ item.title }}</text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { themeColors } from '@/styles/theme'

interface TabItem {
    title: string
    icon: string
    path?: string
    isAction?: boolean
}

const props = withDefaults(
    defineProps<{
        modelValue: number
        list: TabItem[]
        activeColor?: string
        inactiveColor?: string
        fixed?: boolean // 是否固定在底部
        placeholder?: boolean // 是否开启占位
        safeAreaInsetBottom?: boolean // 是否开启安全区域适配
        zIndex?: number
    }>(),
    {
        modelValue: 0,
        activeColor: themeColors.primary,
        inactiveColor: '#94a3b8',
        fixed: true,
        placeholder: true,
        safeAreaInsetBottom: true, // 默认开启
        zIndex: 99
    }
)

const emit = defineEmits(['update:modelValue', 'change', 'actionTap'])

const handleTap = (item: TabItem, index: number) => {
    if (item.isAction) {
        emit('actionTap', item)
        return
    }
    if (index !== props.modelValue) {
        emit('update:modelValue', index)
        emit('change', { index, item })

        if (item.path) {
            uni.switchTab({ url: item.path }).catch(() => {
                uni.redirectTo({ url: item.path! })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
$tabbar-height: 100rpx;
$action-size: 100rpx;
$active-color: v-bind('activeColor');
$inactive-color: v-bind('inactiveColor');

/* 安全区域适配类 */
.safe-area-padding {
    /* 使用 padding 撑开底部安全区域 */
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}

.lite-tabbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    height: $tabbar-height;
    box-shadow: 0 -2rpx 20rpx rgba(0, 0, 0, 0.05);
    box-sizing: content-box; // 保证 height 不受 padding 影响

    &--fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    &__placeholder {
        height: $tabbar-height;
        box-sizing: content-box;
    }
}

.tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;

    .normal-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .tabbar-label {
        font-size: 22rpx;
        margin-top: 4rpx;
        color: $inactive-color;
        transition: color 0.2s;
    }

    &--active {
        .tabbar-label {
            color: $active-color;
            font-weight: bold;
        }
    }
}

.tabbar-item__action {
    .action-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .action-button {
        width: $action-size;
        height: $action-size;
        background: linear-gradient(135deg, $active-color, #60a5fa);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -35rpx;
        box-shadow: 0 10rpx 20rpx rgba(59, 130, 246, 0.3);
        border: 6rpx solid #ffffff;
        transition: transform 0.2s;

        &:active {
            transform: scale(0.9) translateY(5rpx);
        }
    }

    .default-action-icon {
        color: #ffffff;
        font-size: 50rpx;
        font-weight: bold;
    }

    .tabbar-label {
        margin-top: 55rpx;
    }
}
</style>
