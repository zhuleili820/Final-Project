import React, {Component} from "react";
import {Inventory_model} from "../../shared/models/Inventory_model";
import {AxiosResponse} from "axios";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {connect} from "react-redux";
import {getInventories} from "../../action/inventories.action";
import { Link } from "react-router-dom";

class AdminInventory extends Component<AdminInventoryProps, any>{
        componentDidMount() {
            this.props.getInventories();
        }



    render(){
        return(
            <div>
                <table className="table table-bordered table-striped table-light">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Engine</th>
                        <th>Transmission</th>
                        <th>Miles</th>
                        <th>Exterior</th>
                        <th>Interior</th>
                        <th>Price</th>
                        <th>Vin</th>
                        <th>Stock_Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        this.props.inventories?.map(vehicle =>(

                                <tr  key={vehicle.id} style={{width: 20, height: 20}}>
                                    <td><img style={{width: '50px', height: '50px'}} className="product-image"
                                             src={vehicle.image}/>
                                    </td>
                                    <td>{vehicle.id}</td>
                                    <td>{vehicle.year}</td>
                                    <td>{vehicle.make}</td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.engine}</td>
                                    <td>{vehicle.transmission}</td>
                                    <td>{vehicle.miles}</td>
                                    <td>{vehicle.exterior}</td>
                                    <td>{vehicle.interior}</td>
                                    <td>{vehicle.price}</td>
                                    <td>{vehicle.vin}</td>
                                    <td><Link to={`${appConstants.editInventoryRoute}/${vehicle.id}`}>{vehicle.stock_number}</Link></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>

        )

    }

}

interface AdminInventoryProps{
    inventories: Inventory_model [];
    getInventories: ()=>{type: string, payload: Promise<AxiosResponse>}
}

function mapStateToProps({inventories}: ReduxState){
        return {inventories};
}


export default connect (mapStateToProps, {getInventories})(AdminInventory);