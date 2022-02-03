import {appConstants} from "../shared/constant/constant";
import {User_model} from "../shared/models/User_model";
import axios, {Axios, AxiosResponse} from "axios";
import qs from "qs";

export const login = (user: User_model, cb1:() => void, cb2:()=>void) => {


    const userFormData = qs.stringify(user);
    const loginPromise = axios.post(
        'http://localhost:8080/login',
        userFormData,
        {
            //whether to carry/set cookie when cross site
            withCredentials: true
        });
    loginPromise
        .then((res: AxiosResponse<{success: boolean, user: User_model}>)=>{
            res.data.success ? cb1() : cb2();
        })
        .catch(()=> cb2())

    return{
        type: appConstants.LOGIN,
        payload: loginPromise,
    };
};


export const logout =()=>{
    const logoutPromise = axios.get('http://localhost:8080/logout', {withCredentials: true});
    return{
        type: appConstants.LOGOUT,
        payload: logoutPromise
    }
};