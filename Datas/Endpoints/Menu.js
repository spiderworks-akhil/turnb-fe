import { get } from "../Config/Config";

export const MenuApi = {
    genralSettings: (data) => get(`general_settings `, { params: data }),  
}
