import { useAppInfo } from "@/composables";
const { baseUrl , baseUrlWeiXin } = useAppInfo();
const BASE_URL: string = baseUrl; // H5
const BASE_URL_WEIXIN: string = baseUrlWeiXin; // 微信小程序
export {
    BASE_URL,
    BASE_URL_WEIXIN
}