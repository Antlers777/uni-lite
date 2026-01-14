<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
    console.log('App Launch')
})
onShow(() => {
    console.log('App Show')
})
onHide(() => {
    console.log('App Hide')
})
</script>
<style>
/* 设置全局页面样式 */
page {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-color, #f2f2f7); /* 统一设置全局浅灰色背景 */
    overflow-x: hidden; /* 核心：全局禁止横向滚动，彻底解决溢出问题 */
    -webkit-text-size-adjust: 100%; /* 防止 iOS 系统字体放大导致布局错乱 */
    font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: text-primary;
    font-size: 28rpx; /* 小程序常用字号 */
    line-height: 1.5;
}

view,
scroll-view,
swiper,
text,
button,
input,
textarea,
label,
navigator,
image {
    box-sizing: border-box;
}

button {
    background-color: transparent;
    padding: 0;
    margin: 0;
    line-height: inherit;

    &::after {
        border: none;
    }
}

/* 配安全区域*/
.safe-bottom {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}

/* 覆盖 uni-modal 的圆角样式 */
uni-modal .uni-modal {
    border-radius: 16rpx !important;
}

/* 修改主按钮颜色（蓝色按钮） */
uni-modal .uni-modal__btn.uni-modal__btn_primary {
    color: var(--primary-color) !important;
}
</style>
