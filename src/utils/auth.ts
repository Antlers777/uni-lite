const TokenKey = "token";
const TypeKey = "type";
const PostKey = "postId";
const InfoKey = "user";

/** 是否登录 */
const isLogin = () => {
    return !!uni.getStorageSync(TokenKey);
};

/** postId */
const setPost = (id: string) => {
    uni.setStorageSync(PostKey, id);
};
const getPost = () => {
    return uni.getStorageSync(PostKey);
};

/** token */
const getToken = () => {
    return uni.getStorageSync(TokenKey);
};
const setToken = (token: string) => {
    uni.setStorageSync(TokenKey, token);
};
const clearToken = () => {
    uni.removeStorageSync(TokenKey);
};

/** userType */
const getType = (): string => {
    return uni.getStorageSync(TypeKey);
};
const setType = (type: string) => {
    uni.setStorageSync(TypeKey, type);
};

/** 个人信息 */
const setInfo = (info: Object) => {
    uni.setStorageSync(InfoKey, JSON.stringify(info));
};
const getInfo = () => {
    const str = uni.getStorageSync(InfoKey) || "{}";
    return JSON.parse(str);
};

export {
    isLogin,
    getToken,
    setToken,
    clearToken,
    getType,
    setType,
    setPost,
    getPost,
    setInfo,
    getInfo,
};
