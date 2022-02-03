import axios from "axios";
import {appConstants} from "../shared/constant/constant";


export const getChart = () =>{
    const getChartPromise = axios.get('http://localhost:8080/transactions/pieChart');
    return{
        type: appConstants.GET_CHART,
        payload: getChartPromise
    };
};