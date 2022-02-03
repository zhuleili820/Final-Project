import {Inventory_model} from "../shared/models/Inventory_model";
import {appConstants} from "../shared/constant/constant";
import {AxiosResponse} from "axios";
import {CheckAvailability_model} from "../shared/models/CheckAvailability_model";

export const checkAvailabilityReducer = (state: CheckAvailability_model [] | null = null, action: checkAvailabilityAction) => {

    switch(action.type){
        case appConstants.GET_STATUS:
            console.log(action.payload);
            return action.payload.data;

        case appConstants.EDIT_STATUS:
            console.log(action.payload.data);
            return (action.payload as AxiosResponse<{success: boolean}>).data.success?
                action.payload.data:
                state;

        default:
            return state;
    }


};

export interface checkAvailabilityAction{
    type: string,
    payload: AxiosResponse<CheckAvailability_model[]>|AxiosResponse<{success: boolean}>
}