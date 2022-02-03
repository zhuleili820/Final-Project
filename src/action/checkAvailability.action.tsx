import axios from "axios";
import {appConstants} from "../shared/constant/constant";
import {Inventory_model} from "../shared/models/Inventory_model";
import { CheckAvailability_model} from "../shared/models/CheckAvailability_model";


export const getCheckAvailability = () =>{
    const getCheckAvailabilityPromise = axios.get('http://localhost:8080/checkAvailabilities');
    return{
        type: appConstants.GET_STATUS,
        payload: getCheckAvailabilityPromise
    };

};
export const updateCheckAvailability = (availability: CheckAvailability_model) =>{
    const updateCheckAvailabilityPromise = axios.post('http://localhost:8080/checkAvailabilities', availability);
    return{
        type: appConstants.UPDATE_STATUS,
        payload: updateCheckAvailabilityPromise
    };
};

export const editCheckAvailability = (availability: CheckAvailability_model) =>{
    const editCheckAvailabilityPromise = axios.put('http://localhost:8080/checkAvailabilities', availability);
    return{
        type: appConstants.EDIT_STATUS,
        payload: editCheckAvailabilityPromise
    };
};