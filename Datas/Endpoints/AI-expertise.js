import { get, post } from "../Config/Config";

export const AIexpertiseApi = {
    index: (data) => get(`page/AI-expertise`, { params: data }),
}

