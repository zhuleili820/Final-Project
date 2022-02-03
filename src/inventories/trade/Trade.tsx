import React, {Component, SyntheticEvent} from 'react';
import {TradeTable_model} from "../../shared/models/TradeTable_model";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {connect} from "react-redux";
import {addTradeTable} from "../../action/tradeIn.action";
import classes from "../add-inventory/AddInventory.module.scss";

class Trade extends Component<TradeProps, TradeState>{

    constructor(props: TradeProps) {
        super(props);

        const constructTradeField = (): TradeTable_model =>{
            const tradeField = new Map();
            appConstants.TRADE_FIELD.forEach(field=>{
                tradeField.set(field.name, '');
            });
            return Object.fromEntries(tradeField);
        }

        this.state = {
            tradeTable: constructTradeField()
        };
    }

    fieldChangeHandler = (event: SyntheticEvent) => {
        const element = event.target as HTMLInputElement;
        const field = element.name;
        const value = element.value;
        const newTradeTable = {...this.state.tradeTable, [field]: value};
        this.setState({
            tradeTable: newTradeTable
        });
    };

    controller = (m: TradeField) => {
        return(
            <div className="form-control" key={m.name}>
                <label htmlFor={m.name}>{m.label}</label>
                <input className="form-control"
                       id={m.name}
                       name={m.name}
                       type={m.type}
                       value = {this.state.tradeTable[m.name as keyof TradeTable_model]}
                       onChange={this.fieldChangeHandler}
                />
            </div>
        );

    };

    submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        this.props.addTradeTable(this.state.tradeTable);

    };



    render(){
        return(
            <form onSubmit={this.submitHandler} className={classes.AddInventory} style={{marginRight:"auto", marginLeft:"auto"}}>

                <h2 className={classes.header}>Trade In</h2>
                {
                    appConstants.TRADE_FIELD.map(m=>this.controller(m))
                }

                <button type="submit" className="btn btn-primary AddNameButton">
                    <span className={classes.addInventoryText}>Trade</span>
                </button>
            </form>
        );
    }
}
export default connect(mapStateToProps, {addTradeTable})(Trade);

interface TradeField{
    name: string;
    label: string;
    type: string
}

interface TradeProps {
    addTradeTable: (tradeTable: TradeTable_model) => object;

    // tradeTable: TradeTable_model [];

}

interface TradeState{
    tradeTable: TradeTable_model;
}

function mapStateToProps({tradeTable}:ReduxState){
    return {tradeTable};
}

