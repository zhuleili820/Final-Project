import {Inventory_model} from "../shared/models/Inventory_model";
import {appConstants} from "../shared/constant/constant";
import {AxiosResponse} from "axios";
import {User_model} from "../shared/models/User_model";

export const registerReducer = (state: User_model [] | null = null, action: registerAction) => {

    switch(action.type){

        case appConstants.REGISTER:
            return action.payload.data;
        default:
            return state;
    }


};

export interface registerAction{
    type: string,
    payload: AxiosResponse<User_model[]>
}