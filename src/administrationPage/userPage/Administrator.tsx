import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {User_model} from "../../shared/models/User_model";
import {AxiosPromise, AxiosResponse} from "axios";
import {connect} from "react-redux";
import {logout} from "../../action/auth.action";
import {Inventory_model} from "../../shared/models/Inventory_model";
import {Button, ButtonGroup} from "@mui/material";

class AdministratorPage extends Component<AdministratorProps, any>{
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
                    <NavLink className="nav-link" onClick={this.props.logout} to={appConstants.loginRoute}>
                        <button className="btn btn-primary AddNameButton">Logout</button>
                    </NavLink>
                </section>


            </div>
        );
    }
}

interface AdministratorProps{
    user: User_model;
    logout: ()=>{type: string, payload:AxiosPromise};
    inventories: Inventory_model [];
    getInventories: ()=>{type: string, payload: Promise<AxiosResponse>};
}

const mapStateToProps = ({user}:ReduxState) => {
    return {user} as AdministratorProps;
}
export default connect (mapStateToProps, {logout})(AdministratorPage);