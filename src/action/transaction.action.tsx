import axios from "axios";
import {appConstants} from "../shared/constant/constant";
import {Inventory_model} from "../shared/models/Inventory_model";
import {Transaction_model} from "../shared/models/Transaction_model";

export const getTransactions = () =>{
    const getTransactionsPromise = axios.get('http://localhost:8080/transactions');
    return{
        type: appConstants.GET_TRANSACTION,
        payload: getTransactionsPromise
    };
};
export const addTransactions = (transaction: Transaction_model) =>{
    const addTransactionsPromise = axios.post('http://localhost:8080/transactions', transaction);
    return{
        type: appConstants.ADD_TRANSACTION,
        payload: addTransactionsPromise
    };
};

export const editTransactions = (transaction: Transaction_model) =>{
    const editTransactionsPromise = axios.put('http://localhost:8080/transactions', transaction);
    return{
        type: appConstants.EDIT_INVENTORY,
        payload: editTransactionsPromise
    };
};