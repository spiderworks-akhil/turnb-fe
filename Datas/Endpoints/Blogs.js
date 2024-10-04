import { get, post } from "../Config/Config";

export const BlogApi = {
    index: (data) => get(`page/blogs`, { params: data }),
    list: (data) => get(`blogs`, { params: data }),
    detail:(data) => get(`blogs/${data?.slug}`, { params: data }),  

}

