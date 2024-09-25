import { get } from "../Config/Config";

export const CaseStudyApi = {
    index: (data) => get(`page/case-studies`, { params: data }),  
    list: (data) => get(`case-studies`, { params: data }),  
    detail:(data) => get(`case-studies/${data?.slug}`, { params: data }),  
}
