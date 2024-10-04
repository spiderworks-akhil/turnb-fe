import { get } from "../Config/Config";

export const TeamApi = {
    // index: (data) => get(`page/case-studies`, { params: data }),  
    featured: (data) => get(`team/featured`, { params: data }),  
}
