import { showMessage } from './status'
import type { RequestOptions } from './type'
import { useAppInfo } from '@/composables'
import { getToken } from '../auth'
import { BASE_URL_WEIXIN } from '@/config/http.config'
import { $loading } from '@/utils/loading' // 引入自定义 loading

/** 全局信息 */
const { theme } = useAppInfo()
const url = '/api'
const request = <T = any>(config: any): Promise<T> => {
    const conf = config
    const token = getToken() || ''
    let requestUrl = url + conf.url
    //#ifdef MP-WEIXIN
    requestUrl = BASE_URL_WEIXIN + conf.url
    //#endif
    let headers = {
        'content-type': 'application/json',
        ['Authorization']: token ? `${token}` : null
    }
    return new Promise((resolve, reject) => {
        const loadingTitle = conf.loadingText || '加载中...'
        $loading.show(loadingTitle)

        uni.request({
            url: requestUrl,
            data: conf.data,
            method: conf.method,
            header: { ...headers, ...conf.header },
            success: (response: UniApp.RequestSuccessCallbackResult) => {
                $loading.hide()

                if (response.statusCode === 200) {
                    const responseData = response.data as any
                    if (responseData.code === undefined) {
                        resolve(responseData)
                        return
                    }
                    return
                    /// 以下为业务代码，根据项目需求自行修改处理方式
                    // const responseData = response.data as IResponse
                    switch (responseData.code) {
                        case 200:
                            resolve(responseData.result)
                            break
                        case 0:
                            uni.showToast({
                                title: responseData.message,
                                icon: 'error',
                                duration: 1500
                            }).then()
                            reject(responseData)
                            break
                        case 500:
                            uni.showToast({
                                title: responseData.message,
                                icon: 'error',
                                duration: 1500
                            }).then()
                            reject(responseData)
                            break
                        case 4001:
                            handle4001()
                            reject(responseData)
                            break
                        case 4002:
                            break
                        case 4004:
                            break
                        case 4005:
                            handle4005()
                            reject(responseData)
                            break
                        default:
                            reject(responseData)
                            break
                    }
                } else {
                    uni.showToast({
                        title: showMessage(response.statusCode),
                        duration: 3000,
                        icon: 'error'
                    }).then()
                }
            },
            fail: (err) => {
                $loading.hide()
                console.log(err)
                uni.showToast({
                    title: '网络丢失',
                    duration: 3000,
                    icon: 'error'
                }).then()
                reject(err)
            },
            complete: () => {}
        })
    })
}

const handle4001 = () => {
    uni.clearStorageSync()
    uni.showModal({
        title: '提示',
        content: '身份验证失败',
        confirmText: '重新登录',
        showCancel: false,
        confirmColor: theme,
        success: function (res) {
            if (res.confirm) {
                uni.reLaunch({
                    url: '/pages/index/index'
                }).then()
            }
        }
    })
}

/** 4005 强制修改密码 */
const handle4005 = () => {
    uni.showModal({
        title: '提示',
        content: '密码已过期请即时更新',
        confirmText: '确定',
        showCancel: false,
        confirmColor: theme,
        success: function (res) {
            if (res.confirm) {
                uni.reLaunch({
                    url: '/public/changePwd'
                }).then()
            }
        }
    })
}

export function get<T = any>(config: RequestOptions): Promise<T> {
    return request<T>({ ...config, method: 'GET' })
}

export function post<T = any>(config: RequestOptions): Promise<T> {
    return request<T>({ ...config, method: 'POST' })
}

export default request
