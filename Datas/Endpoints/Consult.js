import { get, post } from "../Config/Config";

export const ConsultApi = {
    index: (data) => get(`page/consult-d5tm`, { params: data }),
}

