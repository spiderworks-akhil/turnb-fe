import { post } from "../Config/Config";

export const BrochureApi = {
    saveLead: (data) => post(`brochure-lead/save`, data),
}
