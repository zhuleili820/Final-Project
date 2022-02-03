import {User_model} from "../shared/models/User_model";
import {AxiosResponse} from "axios";
import {appConstants} from "../shared/constant/constant";


export const authReducers = (state: AuthState | null = null, action: AuthAction) =>{
    switch(action.type){
        case appConstants.LOGIN:
            console.log('abc');
            return action.payload.data.success ? action.payload.data.user: null;


        case appConstants.LOGOUT:
            console.log(action.payload.data);
            return action.payload.data.success ? null: state;


        default:
            return state;

    }
};

interface AuthState{
    user: User_model;
}

interface AuthAction{
    type: string;
    payload: AxiosResponse<{success: boolean, user: User_model}>;
}