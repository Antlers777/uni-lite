import { reactive } from "vue";

export const loadingState = reactive({
    show: false,
    title: "加载中...",
    mask: true,
});

export const $loading = {
    show(title = "加载中...", mask = true) {
        loadingState.title = title;
        loadingState.mask = mask;
        loadingState.show = true;
    },
    hide() {
        loadingState.show = false;
    },
};
