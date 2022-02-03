import {appConstants} from "../shared/constant/constant";
import axios from "axios";
import {Inventory_model} from "../shared/models/Inventory_model";


export const getInventories = () =>{
    const getInventoriesPromise = axios.get('http://localhost:8080/inventories');
    return{
        type: appConstants.GET_INVENTORIES,
        payload: getInventoriesPromise
    };
};
export const addInventories = async (inventory: Inventory_model) =>{
    const addInventoriesPromise = axios.post('http://localhost:8080/inventories', inventory);
    return{
        type: appConstants.ADD_INVENTORY,
        payload: addInventoriesPromise
    };
};

export const editInventories = (inventory: Inventory_model) =>{
    const editInventoriesPromise = axios.put('http://localhost:8080/inventories', inventory);
    return{
        type: appConstants.EDIT_INVENTORY,
        payload: editInventoriesPromise
    };
};



