import React, {Component} from "react";
import {Transaction_model} from "../../shared/models/Transaction_model";
import {AxiosResponse} from "axios";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {connect} from "react-redux";
import {getTransactions} from "../../action/transaction.action";
import {Link, NavLink} from "react-router-dom";
import {Button, ButtonGroup} from "@mui/material";


class Transaction extends Component<TransactionProps, any>{
    componentDidMount() {
        this.props.getTransactions();
    }


    render(){
        return(
            <div>
                <table className="table table-bordered table-striped table-light">
                    <thead>
                    <tr>

                        <th>Id</th>
                        <th>Inventory_id</th>
                        <th>Transaction_date</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Sales</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.transaction?.map(t => (

                                <tr  key={t.id} style={{width: 20, height: 20}}>

                                    <td>{t.id}</td>
                                    <td>{t.inventory_id}</td>
                                    <td>{t.transaction_date}</td>
                                    <td>{t.name}</td>
                                    <td>{t.phone}</td>
                                    <td>{t.email}</td>
                                    <td>{t.price}</td>
                                    <td><Link to={`${appConstants.editTransactionRoute}/${t.id}`}>{t.sales}</Link></td>

                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>

                <NavLink className="nav-link"  to={appConstants.chartRoute}>
                    <Button>Sales Report</Button>
                </NavLink>

            </div>
        );
    }
}

export default connect(mapStateToProps, {getTransactions})(Transaction);

interface TransactionProps{
    transaction: Transaction_model [];
    getTransactions: ()=>{type: string, payload: Promise<AxiosResponse>}

}

function mapStateToProps({transaction}: ReduxState){
    return {transaction};
}