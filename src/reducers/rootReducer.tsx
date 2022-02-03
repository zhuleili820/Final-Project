import {combineReducers} from "redux";
import {namesReducer} from "./namesReducer";
import {inventoriesReducer} from "./inventoriesReducer";
import {authReducers} from "./authReducer";
import {registerReducer} from "./registerReducer";
import {checkAvailabilityReducer} from "./checkAvailabilityReducer";
import {tradeTableReducer} from "./tradeTableReducer";
import {transactionReducer} from "./transactionReducer";
import {chartReducer} from "./chartReducer";


export const rootReducer = combineReducers({
   names: namesReducer,
   inventories: inventoriesReducer,
   user: authReducers,
   register: registerReducer,
   checkAvailability: checkAvailabilityReducer,
   tradeTable: tradeTableReducer,
   transaction: transactionReducer,
   chart: chartReducer
});
