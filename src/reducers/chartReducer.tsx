import {Chart_model} from "../shared/models/Chart_model";
import {appConstants} from "../shared/constant/constant";

export const chartReducer = (state: Chart_model | null = null, action: chartAction) => {
    switch (action.type) {
        case appConstants.GET_CHART:
            return action.payload.data;
        default: return state;
    }
}

interface chartAction {
    type: string,
    payload:{data: Chart_model}
}