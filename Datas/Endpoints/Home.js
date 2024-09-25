import { get, post } from "../Config/Config";

export const HomeApi = {
    index: (data) => get(`page/index`, { params: data }),
}

