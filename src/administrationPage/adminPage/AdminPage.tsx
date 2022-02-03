import React, {Component} from "react";
import {User_model} from "../../shared/models/User_model";
import {AxiosPromise, AxiosResponse} from "axios";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {connect} from "react-redux";
import {logout} from "../../action/auth.action";
import {NavLink} from "react-router-dom";
import {getInventories} from "../../action/inventories.action";
import {Inventory_model} from "../../shared/models/Inventory_model";
import inventories from "../../inventories/Inventories";
import {Box, Button, ButtonGroup, Fab} from "@mui/material";



class AdminPage extends Component<adminProps, any>{
    render(){
        return(
            <div>
                <h2 className="nav-link">Admin Page</h2>
                <section>
                <label className="nav-link">Inventory Management</label>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                <NavLink className="nav-link"  to={appConstants.adminInventoryRoute}>
                <Button>Edit Inventory</Button>
                </NavLink>

                <NavLink className="nav-link" to={appConstants.addInventoryRoute}>
                <Button>Add Inventory</Button>
                </NavLink>
                </ButtonGroup>
                </section>

                <section>
                    <label className="nav-link">Status Management</label>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <NavLink className="nav-link"  to={appConstants.checkAvailabilityRoute}>
                            <Button>Edit Status</Button>
                        </NavLink>

                    </ButtonGroup>
                </section>

                <section>
                    <label className="nav-link">TradeIn Management</label>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <NavLink className="nav-link"  to={appConstants.tradeTableRoute}>
                            <Button>View</Button>
                        </NavLink>

                    </ButtonGroup>
                </section>

                <section>
                    <label className="nav-link">Transaction Management</label>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <NavLink className="nav-link"  to={appConstants.transactionRoute}>
                            <Button>View</Button>
                        </NavLink>

                        <NavLink className="nav-link" to={appConstants.addTransactionRoute}>
                            <Button>Add Transaction</Button>
                        </NavLink>

                    </ButtonGroup>
                </section>


                <section>
                    <NavLink className="nav-link" to={appConstants.registerRoute}>
                        <button className="btn btn-primary AddNameButton">Add New Admin</button>
                    </NavLink>
                </section>


                <section>
                <NavLink className="nav-link" onClick={this.props.logout} to={appConstants.loginRoute}>
                <button className="btn btn-primary AddNameButton">Logout</button>
                </NavLink>
                </section>


            </div>
        );
    }
}

interface adminProps{
    user: User_model;
    logout: ()=>{type: string, payload:AxiosPromise};
    inventories: Inventory_model [];
    getInventories: ()=>{type: string, payload: Promise<AxiosResponse>};

}

const mapStateToProps = ({user}:ReduxState, {inventories}: ReduxState) => {
    return {user} as adminProps;
}
export default connect (mapStateToProps, {logout})(AdminPage);