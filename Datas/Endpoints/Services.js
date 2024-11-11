import { get, post } from "../Config/Config";

export const ServicesApi = {
    index: (data) => get(`page/services`, { params: data }),
    list: (data) => get(`service`, { params: data }),
    detail:(data) => get(`service/${data?.slug}`, { params: data }),  

}

