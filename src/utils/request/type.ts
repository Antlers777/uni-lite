export interface RequestOptions<T = any> {
    url: string;
    method?: string;
    data?: T;
}

// 返回response.data的interface
// export interface IResponse<T = any> {
//     code: number;
//     type: string;
//     message: string;
//     result: T;
//     extras: string | null;
//     time: string;
// }

enum Method {
    POST,
    GET,
}
