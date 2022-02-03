import axios from "axios";
import {appConstants} from "../shared/constant/constant";
import {TradeTable_model} from "../shared/models/TradeTable_model";

export const getTradeTable = () =>{
    const getTradeTablePromise = axios.get('http://localhost:8080/tradeIns');
    return{
        type: appConstants.GET_TRADE_TABLE,
        payload: getTradeTablePromise
    };
};
export const addTradeTable = (tradeTable: TradeTable_model) =>{
    const addTradeTablePromise = axios.post('http://localhost:8080/tradeIns', tradeTable);
    return{
        type: appConstants.ADD_TRADE_TABLE,
        payload: addTradeTablePromise
    };
};