import {appConstants} from "../shared/constant/constant";

export const addName = (newName: string) => {
    return{
        type: appConstants.ADD_NAME,
        payload: newName
    };
};


