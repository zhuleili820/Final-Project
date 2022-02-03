import axios, {AxiosResponse} from "axios";
import {appConstants} from "../shared/constant/constant";
import {Inventory_model} from "../shared/models/Inventory_model";
import {User_model} from "../shared/models/User_model";

export const register = (user: User_model) =>{
    const registerPromise = axios.post('http://localhost:8080/users', user);
    console.log(registerPromise);


    return{
        type: appConstants.REGISTER,
        payload: registerPromise
    };
};