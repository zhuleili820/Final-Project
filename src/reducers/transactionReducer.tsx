import {AxiosResponse} from "axios";
import {Transaction_model} from "../shared/models/Transaction_model";
import {appConstants} from "../shared/constant/constant";

export const transactionReducer =(state: Transaction_model [] | null=null, action: transactionAction)=>{
    switch(action.type){
        case appConstants.GET_TRANSACTION:
            // console.log(action.payload);
            return action.payload.data;

        case appConstants.ADD_TRANSACTION:

            return action.payload.data;

        case appConstants.EDIT_TRANSACTION:

            return (action.payload as AxiosResponse<{success: boolean}>).data.success?
                action.payload.data:
                state;

        default:
            return state;
    }



};


export interface transactionAction{
    type: string,
    payload: AxiosResponse<Transaction_model>|AxiosResponse<{success: boolean}>
}