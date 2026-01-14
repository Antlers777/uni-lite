import { get, post } from "@/utils/request/index";
import { URL } from "./url";
import type { User } from "./types";

const detail = async (data: any) => get<User | null>({ url: URL.user, data });
export default { detail };
