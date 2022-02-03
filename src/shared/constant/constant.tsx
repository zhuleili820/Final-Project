import {Inventory_model} from "../models/Inventory_model";
import {User_model} from "../models/User_model";
import {CheckAvailability_model} from "../models/CheckAvailability_model";
import {TradeTable_model} from "../models/TradeTable_model";
import {Transaction_model} from "../models/Transaction_model";
import {Chart_model} from "../models/Chart_model";

export const appConstants ={

    namesRoute: '/names',
    addNameRoute: '/add-names',
    inventoriesRoute: '/inventories',
    addInventoryRoute: '/add-inventory',
    editInventoryRoute: '/edit-inventory',
    tradeRoute: '/trade',
    serviceRoute:'/service',
    aboutUsRoute:'/aboutUs',
    loginRoute:'/login',
    logoutRoute:'/logout',
    homeRoute: '/home',
    paymentCalculationRoute: '/paymentCalculation',
    vehicleSpecRoute: '/vehicleSpec',
    adminPageRoute:'/adminPage',
    administratorPageRoute:'/administratorPage',
    adminInventoryRoute:'/adminInventory',
    registerRoute:'/register',
    checkAvailabilityRoute:'/checkAvailability',
    editStatusRoute:'/editStatus',
    tradeTableRoute:'/tradeTable',
    transactionRoute:'/transaction',
    addTransactionRoute:'/addTransaction',
    editTransactionRoute:'/editTransaction',
    chartRoute:'/chart',


    ADD_NAME:'ADD_NAME',
    GET_INVENTORIES:'GET_INVENTORIES',
    ADD_INVENTORY:'ADD_INVENTORY',
    EDIT_INVENTORY:'EDIT_INVENTORY',
    LOGIN:'LOGIN',
    LOGOUT:'LOGOUT',
    REGISTER:'REGISTER',
    GET_STATUS:'GET_STATUS',
    UPDATE_STATUS:'UPDATE_STATUS',
    EDIT_STATUS:'EDIT_STATUS',
    TRADE:'TRADE',
    GET_TRADE_TABLE:'GET_TRADE_TABLE',
    ADD_TRADE_TABLE:'ADD_TRADE_TABLE',
    ADD_TRANSACTION:'ADD_TRANSACTION',
    GET_TRANSACTION:'GET_TRANSACTION',
    EDIT_TRANSACTION:'EDIT_TRANSACTION',
    GET_CHART:'GET_CHART',

    //demo
    INVENTORY_FIELD: [
        {
            name: 'image',
            label: 'Inventory Image',
            type: 'text'
        },
        {
            name: 'year',
            label: 'Year',
            type: 'number'
        },
        {
            name: 'make',
            label: 'Make',
            type: 'text'
        },
        {
            name: 'model',
            label: 'inventory model',
            type: 'text'
        },
        {
            name: 'engine',
            label: 'Inventory Engine',
            type: 'text'
        },
        {
            name: 'transmission',
            label: 'Inventory Transmission',
            type: 'text'
        },
        {
            name: 'miles',
            label: 'Inventory miles',
            type: 'number'
        },
        {
            name: 'exterior',
            label: 'Exterior',
            type: 'text'
        },
        {
            name: 'interior',
            label: 'Interior',
            type: 'text'
        },
        {
            name: 'price',
            label: 'Inventory Price',
            type: 'number'
        },
        {
            name: 'vin',
            label: 'Inventory Vin',
            type: 'text'
        },
        {
            name: 'stock_number',
            label: 'Inventory Stock_number',
            type: 'text'
        }

    ],

    REGISTER_FIELD:[
        {
            name: 'username',
            label: 'Username',
            type: 'text'
        },

        {
            name: 'password',
            label: 'Password',
            type: 'text'
        }

    ],

    AVAILABILITY_FIELD:[
        {
            name: 'inventory_id',
            label: 'Inventory_Id',
            type: 'number'
        },
        {
            name: 'status',
            label: 'Status',
            type: 'text'
        }

    ],

    TRADE_FIELD: [
        {
            name: 'name',
            label: 'Name',
            type: 'text'
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'text'
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text'
        },
        {
            name: 'year',
            label: 'Year',
            type: 'number'
        },
        {
            name: 'make',
            label: 'Make',
            type: 'text'
        },
        {
            name: 'model',
            label: 'Model',
            type: 'text'
        },
        {
            name: 'miles',
            label: 'Miles',
            type: 'number'
        },
        {
            name: 'vin',
            label: 'Vin',
            type: 'text'
        },
        {
            name: 'payoff_balance',
            label: 'PayOffBalance',
            type: 'number'
        }

    ],

    TRANSACTION_FIELD: [
        {
            name: 'inventory_id',
            label: 'Inventory_id',
            type: 'number'
        },
        {
            name: 'transaction_date',
            label: 'Transaction_date',
            type: 'date'
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text'
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'number'
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text'
        },
        {
            name: 'price',
            label: 'Price',
            type: 'number'
        },
        {
            name: 'sales',
            label: 'Sales',
            type: 'text'
        }
    ]

};


export interface ReduxState{
    names: string[],
    inventories: Inventory_model[],
    user: User_model,
    checkAvailability: CheckAvailability_model[],
    tradeTable: TradeTable_model[],
    transaction: Transaction_model[],
    chart: Chart_model,
}