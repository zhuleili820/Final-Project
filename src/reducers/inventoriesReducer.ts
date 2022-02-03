import {Inventory_model} from "../shared/models/Inventory_model";
import {appConstants} from "../shared/constant/constant";
import {Axios, AxiosResponse} from "axios";


export const inventoriesReducer = (state: Inventory_model [] | null = null, action: inventoriesAction) => {

    switch(action.type){
        case appConstants.GET_INVENTORIES:
            // console.log(action.payload);
            return action.payload.data;

        case appConstants.ADD_INVENTORY:
            console.log(action.payload.data);
            return action.payload.data;

        case appConstants.EDIT_INVENTORY:
            console.log(action.payload.data);
            return (action.payload as AxiosResponse<{success: boolean}>).data.success?
                action.payload.data:
                state;

        default:
            return state;
    }


};

export interface inventoriesAction{
    type: string,
    payload: AxiosResponse<Inventory_model[]>|AxiosResponse<{success: boolean}>
}