import { get, post } from "../Config/Config";

export const ScanbApi = {
    index: (data) => get(`page/scanb`, { params: data }),
}

