import {TradeTable_model} from "../shared/models/TradeTable_model";
import {AxiosResponse} from "axios";
import {Inventory_model} from "../shared/models/Inventory_model";
import {appConstants} from "../shared/constant/constant";


export const tradeTableReducer =(state: TradeTable_model [] | null = null, action: tradeTableAction) =>{

    switch(action.type){
        case appConstants.GET_TRADE_TABLE:

            return action.payload.data;

        case appConstants.ADD_TRADE_TABLE:
            console.log(action.payload.data);
            return action.payload.data;

        default:
            return state;
    }

};

export interface tradeTableAction{
    type: string,
    payload: AxiosResponse<TradeTable_model[]>|AxiosResponse<{success: boolean}>
}