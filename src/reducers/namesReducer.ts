import {appConstants} from "../shared/constant/constant";

const names = ['fuck bitch', 'fire in the hole','gg'];


export const namesReducer = (state: string[] = names, action: namesAction): string[] => {
    if(action.type === appConstants.ADD_NAME){
        return [...state, action.payload];
    }
    return state;
};

interface namesAction{
    type: string,
    payload: string
}

