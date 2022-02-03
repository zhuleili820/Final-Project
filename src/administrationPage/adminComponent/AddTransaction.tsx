import React, {Component, SyntheticEvent} from "react";
import transaction from "./Transaction";
import {Transaction_model} from "../../shared/models/Transaction_model";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {connect} from "react-redux";
import {addTransactions} from "../../action/transaction.action";
import {TradeTable_model} from "../../shared/models/TradeTable_model";
import classes from "../../inventories/add-inventory/AddInventory.module.scss";

class AddTransaction extends Component<AddTransactionProps, AddTransactionState>{

    constructor(props: AddTransactionProps) {
        super(props);

        const constructTransactionField = (): Transaction_model =>{
            const transactionField = new Map();
            appConstants.TRANSACTION_FIELD.forEach(field=>{
                transactionField.set(field.name, '');
            });
            return Object.fromEntries(transactionField);
        }

        this.state = {
            transaction: constructTransactionField()
        };
    }

    fieldChangeHandler = (event: SyntheticEvent) => {
        const element = event.target as HTMLInputElement;
        const field = element.name;
        const value = element.value;
        const newTransaction = {...this.state.transaction, [field]: value};
        this.setState({
            transaction: newTransaction
        });
    };

    controller = (m: TransactionField) => {
        return(
            <div className="form-control" key={m.name}>
                <label htmlFor={m.name}>{m.label}</label>
                <input className="form-control"
                       id={m.name}
                       name={m.name}
                       type={m.type}
                       value = {this.state.transaction[m.name as keyof Transaction_model]}
                       onChange={this.fieldChangeHandler}
                />
            </div>
        );

    };

    submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        this.props.addTransactions(this.state.transaction);

    };

    render(){
        return(
            <form onSubmit={this.submitHandler} className={classes.AddInventory}>

                <h2 className={classes.header}>Add Transaction</h2>
                {
                    appConstants.TRANSACTION_FIELD.map(m=>this.controller(m))
                }

                <button type="submit" className="btn btn-primary AddNameButton">
                    <span className={classes.addInventoryText}>Add</span>
                </button>
            </form>
        );
    }
}

export default connect(mapStateToProps, {addTransactions})(AddTransaction);

interface AddTransactionProps{
    addTransactions: (transaction: Transaction_model) => object;
}

interface AddTransactionState{
        transaction: Transaction_model;
}

function mapStateToProps({transaction}: ReduxState){
    return {transaction};
}

interface TransactionField{
    name: string;
    label: string;
    type: string
}