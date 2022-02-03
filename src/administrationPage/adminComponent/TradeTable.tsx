import React, {Component} from "react";
import {TradeTable_model} from "../../shared/models/TradeTable_model";
import {AxiosResponse} from "axios";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import { connect } from "react-redux";
import {getTradeTable} from "../../action/tradeIn.action";
import {Link} from "react-router-dom";

class TradeTable extends Component<TradeTableProps, any>{

    componentDidMount() {
        this.props.getTradeTable();
    }

    render(){
        return(
            <div>
                <table className="table table-bordered table-striped table-light">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Miles</th>
                        <th>Vin</th>
                        <th>Payoff_Balance</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.tradeTable?.map(t => (

                                <tr  key={t.id} style={{width: 20, height: 20}}>

                                    <td>{t.id}</td>
                                    <td>{t.name}</td>
                                    <td>{t.phone}</td>
                                    <td>{t.email}</td>
                                    <td>{t.year}</td>
                                    <td>{t.make}</td>
                                    <td>{t.model}</td>
                                    <td>{t.miles}</td>
                                    <td>{t.vin}</td>
                                    <td>{t.payoff_balance}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>

            </div>
        );
    }
}

interface TradeTableProps{
    tradeTable: TradeTable_model [];
    getTradeTable: ()=>{type: string, payload: Promise<AxiosResponse>}
}

function mapStateToProps({tradeTable}: ReduxState){
    return {tradeTable};
}

export default connect(mapStateToProps, {getTradeTable})(TradeTable);