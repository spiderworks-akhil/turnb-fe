import { get, post } from "../Config/Config";

export const CareerApi = {
    index: (data) => get(`page/career`, { params: data }),
}

