import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {appConstants} from "./shared/constant/constant";
import Inventories from "./inventories/Inventories";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import reduxPromise from 'redux-promise';
import AddInventory from "./inventories/add-inventory/AddInventory";
import EditInventory from "./inventories/edit-inventory/EditInventory";
import Trade from "./inventories/trade/Trade";
import Service from "./vehicleService/Service";
import AboutUs from "./about/AboutUs";
import Login from "./login/Login";
import PaymentCal from "./names/paymentCalculation/PaymentCal";
import VehicleSpec from "./inventories/vehicle/VehicleSpec";
import Home from "./names/Home";
import {guard} from "./shared/hoc/guard";
import AdminPage from "./administrationPage/adminPage/AdminPage";
import CustomerPage from "./administrationPage/userPage/Administrator";
import AdminInventory from "./administrationPage/adminComponent/AdminInventory";
import Register from "./register/Register";
import CheckAvailability from "./administrationPage/adminComponent/CheckAvailability/CheckAvailability";
import EditStatus from "./administrationPage/adminComponent/CheckAvailability/EditStatus";
import TradeTable from "./administrationPage/adminComponent/TradeTable";
import Transaction from "./administrationPage/adminComponent/Transaction";
import AddTransaction from "./administrationPage/adminComponent/AddTransaction";
import EditTransaction from "./administrationPage/adminComponent/EditTransaction";
import PieChart from "./administrationPage/adminComponent/PieChart";
import AdministratorPage from "./administrationPage/userPage/Administrator";

const root = document.querySelector('#root');


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
    <App>
        <Switch>

            <Route path={appConstants.homeRoute} component={Home}/>
            <Route path={appConstants.paymentCalculationRoute} component={PaymentCal}/>
            <Route path={appConstants.inventoriesRoute} component={Inventories}>
            </Route>
            <Route path={appConstants.addInventoryRoute} component={guard(AddInventory)}>
            </Route>
            <Route path={`${appConstants.editInventoryRoute}/:id`} component={guard(EditInventory)}>
            </Route>
            <Route path={appConstants.tradeRoute} component={Trade}/>
            <Route path={appConstants.serviceRoute} component={Service}/>
            <Route path={appConstants.aboutUsRoute} component={AboutUs}/>
            <Route path={appConstants.loginRoute} component={Login}/>
            <Route path={`${appConstants.vehicleSpecRoute}/:id`} component={VehicleSpec}>
            </Route>
            <Route path={appConstants.adminPageRoute} component={guard(AdminPage)}/>
            <Route path={appConstants.administratorPageRoute} component={guard(AdministratorPage)}/>
            <Route path={appConstants.adminInventoryRoute} component={guard(AdminInventory)}/>
            <Route path={appConstants.registerRoute} component={Register}>
            </Route>
            <Route path={appConstants.checkAvailabilityRoute} component={guard(CheckAvailability)}/>
            <Route path={`${appConstants.editStatusRoute}/:id`} component={guard(EditStatus)}>
            </Route>
            <Route path={appConstants.tradeTableRoute} component={guard(TradeTable)}/>
            <Route path={appConstants.transactionRoute} component={guard(Transaction)}/>
            <Route path={appConstants.addTransactionRoute} component={guard(AddTransaction)}/>
            <Route path={`${appConstants.editTransactionRoute}/:id`} component={guard(EditTransaction)}/>
            <Route path={appConstants.chartRoute} component={guard(PieChart)}/>

        </Switch>
    </App>
    </BrowserRouter>
</Provider>
    ,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
