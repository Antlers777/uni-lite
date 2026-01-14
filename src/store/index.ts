import { useUserStore } from "./modules/user";

export function useStore() {
    return {
        userStore: useUserStore(),
    };
}
