<template>
    <view
        class="lite-back"
        :class="{ 'is-show': show }"
        @tap="handleBack()"
        :style="{ top: statusBarHeight + 10 + 'px' }"
    >
        <view class="back-inner">
            <view class="i-carbon-chevron-left icon-back"></view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useBack } from "@/hooks/useBack";

const { handleBack } = useBack();
const show = ref(false);
const statusBarHeight = ref(20);

onMounted(() => {
    // 获取状态栏高度，防止遮挡
    const info = uni.getSystemInfoSync();
    statusBarHeight.value = info.statusBarHeight || 20;

    // 延迟显示，增加过渡感
    setTimeout(() => {
        show.value = true;
    }, 100);
});
</script>

<style lang="scss" scoped>
.lite-back {
    position: fixed;
    left: 30rpx;
    z-index: 999;
    opacity: 0;
    transform: translateX(-20rpx);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    &.is-show {
        opacity: 1;
        transform: translateX(0);
    }
}

.back-inner {
    width: 72rpx;
    height: 72rpx;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px); // 毛玻璃
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);

    &:active {
        transform: scale(0.9);
        background-color: #ffffff;
    }
}

.icon-back {
    font-size: 40rpx;
    color: #1e293b;
    font-weight: bold;
}
</style>
