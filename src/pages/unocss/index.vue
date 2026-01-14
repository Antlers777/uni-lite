<template>
    <lite-page>
        <!-- 使用 UnoCSS 的 Flex 布局和内边距 -->
        <view class="min-h-screen bg-slate-50 p-4 pb-10">
            <!-- 头部：展示 文本颜色、字号、字重、居中 -->
            <view class="py-8 flex flex-col items-center">
                <view
                    class="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-200 mb-4"
                >
                    <text
                        class="text-white text-4xl i-carbon-color-palette"
                    ></text>
                </view>
                <text class="text-2xl font-bold text-slate-800"
                    >UnoCSS 演示</text
                >
                <text class="text-slate-400 mt-2 text-sm"
                    >按下方的示例感受原子化 CSS 的魅力</text
                >
            </view>

            <!-- 基础色块与圆角 (展现快速布局) -->
            <view class="bg-white rounded-3xl p-5 mb-4 shadow-sm">
                <view class="flex items-center mb-4">
                    <view class="w-1 h-4 bg-blue-500 rounded-full mr-2"></view>
                    <text class="font-bold text-slate-700">基础样式</text>
                </view>
                <view class="flex gap-3">
                    <!-- 动态数值 w-[100px] 和 快捷色彩 -->
                    <view
                        class="flex-1 h-20 bg-amber-400 rounded-xl shadow-inner flex items-center justify-center text-white font-bold"
                    >
                        Amber
                    </view>
                    <view
                        class="flex-1 h-20 bg-rose-500 rounded-xl shadow-inner flex items-center justify-center text-white font-bold"
                    >
                        Rose
                    </view>
                    <view
                        class="flex-1 h-20 bg-indigo-500 rounded-xl shadow-inner flex items-center justify-center text-white font-bold"
                    >
                        Indigo
                    </view>
                </view>
            </view>

            <!-- 动画效果 -->
            <view class="bg-white rounded-3xl p-5 mb-4 shadow-sm">
                <view class="flex items-center mb-4">
                    <view
                        class="w-1 h-4 bg-orange-500 rounded-full mr-2"
                    ></view>
                    <text class="font-bold text-slate-700">内置动画</text>
                </view>
                <view class="flex justify-around items-center py-4">
                    <view
                        class="w-12 h-12 bg-orange-400 rounded-full animate-bounce flex items-center justify-center text-white text-xs"
                        >跳</view
                    >
                    <view
                        class="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"
                    ></view>
                    <view
                        class="w-12 h-12 bg-orange-400 rounded-lg animate-pulse flex items-center justify-center text-white text-xs"
                        >呼吸</view
                    >
                </view>
            </view>

            <!-- 图标支持 (需安装图标库) -->
            <view class="bg-white rounded-3xl p-5 shadow-sm text-center">
                <text class="block text-slate-400 text-sm mb-4"
                    >结合 Preset-icons 的图标</text
                >
                <view class="flex justify-center gap-6 text-3xl">
                    <view class="i-logos-vue"></view>
                    <view class="i-logos-unocss"></view>
                    <view class="i-carbon-logo-github text-slate-800"></view>
                </view>
            </view> </view
    ></lite-page>
</template>

<script setup lang="ts">
// 无需编写任何传统 CSS，全部由 UnoCSS 完成
</script>

<style>
/* 保持为空，证明只用 UnoCSS */
</style>
