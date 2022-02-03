import React, {Component} from "react";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {Field, FieldProps, Form} from "formik";
import {Button, TextField} from "@material-ui/core";
import {Inventory_model} from "../../shared/models/Inventory_model";
import {RouteComponentProps} from "react-router";
import {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {getInventories} from "../../action/inventories.action";
import {Link} from "react-router-dom";

class VehicleSpec extends Component<VehicleSpecProps, any>{

    componentDidMount() {
        this.props.getInventories();
    }

    render(){
        return(
            <div>

                {/*<section>*/}
                {/*    abc: {this.props.match.params.id}*/}

                {/*</section>*/}
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


                                <tr  key={this.props.v.id} style={{width: 20, height: 20}}>
                                    <td><img style={{width: '50px', height: '50px'}} className="product-image"
                                             src={this.props.v.image}/>
                                    </td>
                                    <td>{this.props.v.id}</td>
                                    <td>{this.props.v.year}</td>
                                    <td>{this.props.v.make}</td>
                                    <td>{this.props.v.model}</td>
                                    <td>{this.props.v.engine}</td>
                                    <td>{this.props.v.transmission}</td>
                                    <td>{this.props.v.miles}</td>
                                    <td>{this.props.v.exterior}</td>
                                    <td>{this.props.v.interior}</td>
                                    <td>{this.props.v.price}</td>
                                    <td>{this.props.v.vin}</td>
                                    <td>{this.props.v.stock_number}</td>
                                </tr>



                    </tbody>
                </table>

            </div>
        );
    }
}

function mapStateToProps({inventories}: ReduxState, ownProps: VehicleSpecProps){
    const v = inventories.find(vehicle=> vehicle.id === +ownProps.match.params.id);
    return {inventories, v} as VehicleSpecProps;
}

export default connect(mapStateToProps, {getInventories})(VehicleSpec);

interface VehicleSpecProps extends RouteComponentProps<{id: string}>{
    inventories: Inventory_model[];
    getInventories: ()=>{type: string, payload: Promise<AxiosResponse>}
    v: Inventory_model;
}