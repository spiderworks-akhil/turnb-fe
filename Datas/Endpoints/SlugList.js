import { get, post } from "../Config/Config";

export const SlugList = {
    index: (data) => get(`static-pages`, { params: data }),
    industries: (data) => get(`list-urls/industries`, { params: data }),
    blog: (data) => get(`list-urls/blog`, { params: data }),
}
