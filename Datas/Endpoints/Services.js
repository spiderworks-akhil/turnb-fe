import { get, post } from "../Config/Config";

export const ServicesApi = {
    index: (data) => get(`page/services`, { params: data }),
}

