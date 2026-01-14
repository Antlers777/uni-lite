<template>
    <lite-page>
        <view>
            <!-- 页面内容 -->
            <view> 当前索引: {{ current }} </view>

            <!-- 使用组件 -->
            <lite-tabbar
                v-model="current"
                :list="tabList"
                @actionTap="onScanClick"
            />
        </view>
    </lite-page>
</template>

<script setup lang="ts">
import LiteTabbar from "@/components/layout/lite-tabbar.vue";
import { ref } from "vue";

const current = ref(0);

const tabList = [
    {
        title: "首页",
        icon: "home-filled",
        activeIcon: "/static/tabs/home-active.png",
        path: "/pages/index/index",
    },
    {
        title: "地图",
        icon: "map-filled",
        path: "/pages/order/index",
    },
    {
        title: "",
        icon: "", // 不传则使用插槽或默认图标
        isAction: true,
    },
    {
        title: "画板",
        icon: "color-filled",
        path: "/pages/msg/index",
    },
    {
        title: "我的",
        icon: "person-filled",
        path: "/pages/me/index",
    },
];

const onScanClick = (item: any) => {
    uni.scanCode({
        success: (res) => {
            console.log("扫码结果：", res.result);
        },
    });
};
</script>
