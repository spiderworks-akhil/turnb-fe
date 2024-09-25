import { get, post } from "../Config/Config";

export const AboutApi = {
    index: (data) => get(`page/about-us`, { params: data }),
}

