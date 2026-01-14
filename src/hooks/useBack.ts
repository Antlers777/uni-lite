import { computed } from "vue";

export const useBack = () => {
    // 获取当前页面栈
    const pages = getCurrentPages();

    // 响应式判断：是否可以返回（页面栈大于1）
    const canBack = computed(() => pages.length > 1);

    /**
     * 返回操作
     * @param homePath 如果无法返回时跳转的路径（比如分享进入的情况）
     */
    const handleBack = (homePath: string = "/pages/index/index") => {
        if (canBack.value) {
            uni.navigateBack({
                delta: 1,
            });
        } else {
            // 如果没有返回历史，通常重定向到首页，避免用户“卡死”在当前页
            uni.reLaunch({
                url: homePath,
            });
        }
    };

    return {
        canBack,
        handleBack,
    };
};
