import React, {Component} from "react";
import {CheckAvailability_model} from "../../../shared/models/CheckAvailability_model";
import {AxiosResponse} from "axios";
import {appConstants, ReduxState} from "../../../shared/constant/constant";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {getCheckAvailability} from "../../../action/checkAvailability.action";


class CheckAvailability extends Component<CheckAvailabilityProps, any>{

        componentDidMount() {
            this.props.getCheckAvailability();
        }

    render(){

        return(
            <div>
                <div>
                    <table className="table table-bordered table-striped table-light">
                        <thead>
                        <tr>
                            <th>Inventory_id</th>
                            <th>Status</th>

                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.props.checkAvailability?.map(s => (

                                    <tr  key={s.id} style={{width: 20, height: 20}}>

                                        <td>{s.inventory.id}</td>
                                        <td><Link to={`${appConstants.editStatusRoute}/${s.id}`}>{s.status}</Link></td>

                                        {/*<td><Link to={`${appConstants.editInventoryRoute}/${vehicle.id}`}>{vehicle.stock_number}</Link></td>*/}
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}


export default connect (mapStateToProps, {getCheckAvailability})(CheckAvailability);

interface CheckAvailabilityProps{
    checkAvailability: CheckAvailability_model [];
    getCheckAvailability: ()=>{type: string, payload: Promise<AxiosResponse>}
}

function mapStateToProps({checkAvailability}: ReduxState){
    return {checkAvailability};
}
