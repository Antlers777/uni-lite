import { getToken } from '@/utils/auth'
import { whiteList, loginPath } from '@/config/permission.config'

/**
 * 检查路径是否有权限
 * @param url 跳转路径
 */
const checkPermission = (url: string) => {
    const token = getToken()

    // 1. 获取纯净的路径（去除参数，如 /pages/index?id=1 -> /pages/index）
    const path = url.split('?')[0]

    // 2. 如果在白名单中，或者是登录页，直接放行
    if (whiteList.includes(path)) {
        return true
    }

    // 3. 不在白名单中，检查是否有 Token
    if (!token) {
        // 没有 Token，重定向到登录页
        uni.showToast({
            title: '请先登录',
            icon: 'none'
        })

        uni.navigateTo({
            url: loginPath
        })
        return false
    }

    return true
}

/**
 * 初始化路由拦截器
 */
export function setupPermission() {
    // 需要拦截的 API 列表
    const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']

    list.forEach((item) => {
        uni.addInterceptor(item, {
            invoke(args) {
                // args.url 是跳转的目标路径
                return checkPermission(args.url)
            },
            fail(err) {
                console.error('路由拦截失败：', err)
            }
        })
    })
}
