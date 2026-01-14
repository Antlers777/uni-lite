<template>
    <view class="lite-page">
        <lite-back v-if="showBack" />

        <!-- 页面内容插槽 -->
        <slot></slot>

        <!-- 全局组件放这里 -->
        <lite-loading />
    </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBack = ref(false)

onMounted(() => {
    const pages = getCurrentPages()
    // 只有页面栈大于 1（即不是启动页）才显示返回按钮
    showBack.value = pages.length > 1
})
</script>

<style scoped>
.lite-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
}
</style>
