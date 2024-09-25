import { get, post } from "../Config/Config";

export const ContactApi = {
    index: (data) => get(`page/contact-us`, { params: data }),
    save: (data) => post(`contact/save`, data),
}

