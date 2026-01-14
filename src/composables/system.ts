interface AppInfo {
    /** 项目名称 */
    name: string;
    /** 项目描述 */
    desc: string;
    /** 主题色 */
    theme: string;
    /** 项目请求地址 */
    baseUrl: string;
    /** 微信小程序请求地址 */
    baseUrlWeiXin: string;
    /** 对应小程序appid */
    appid?: string;
    /** 对应小程序分享图片 */
    shareImg: string;
}

/** 项目信息 */
export function useAppInfo(): AppInfo {
    let {
        VITE_APP_NAME: name,
        VITE_APP_DESC: desc,
        VITE_APP_THEME: theme,
        VITE_APP_BASE_URL: baseUrl,
        VITE_APP_BASE_URL_WX: baseUrlWeiXin,
        VITE_APP_APPID: appid,
        VITE_APP_SHAREIMG: shareImg,
    } = import.meta.env;

    return {
        name,
        desc,
        theme,
        baseUrl,
        baseUrlWeiXin,
        appid,
        shareImg,
    };
}
