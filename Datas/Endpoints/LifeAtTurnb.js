import { get, post } from "../Config/Config";

export const LifeAtTurnBApi = {
    index: (data) => get(`page/life-at-turnb`, { params: data }),
}

