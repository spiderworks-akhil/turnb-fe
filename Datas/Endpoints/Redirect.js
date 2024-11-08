import { get, post } from "../Config/Config";

export const RedirectApi = {
    list: (data) => get(`301-redirects`, {params:data}),
}
