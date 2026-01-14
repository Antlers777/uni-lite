declare global {
    interface IResponse<T = any> {
        code: number;
        type: string;
        message: string;
        result: T;
        extras: string | null;
        time: string;
    }
}
export {};
