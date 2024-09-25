import { get } from "../Config/Config";

export const IndustriesApi = {
    // index: (data) => get(`page/case-studies`, { params: data }),  
    // list: (data) => get(`case-studies`, { params: data }),  
    detail:(data) => get(`industries/${data?.slug}`, { params: data }),  
}
