import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("app-user", () => {
    const Token = ref(token);
    const info = ref<Record<any, any>>({});
    const setInfo = (info: any) => {
        info.value = info ? info : "";
    };
    const getUserInfo = () => {
        return info || {};
    };
    const login = () => {
        return new Promise((resolve) => {
            const { data } = loginPassword();
            watch(data, () => {
                setInfo(data.value);
                // useCookies().set(VITE_TOKEN_KEY as string, data.value.token);
                resolve(data.value);
            });
        });
    };
    return {
        Token,
        info,
        setInfo,
        login,
        getUserInfo,
    };
});
