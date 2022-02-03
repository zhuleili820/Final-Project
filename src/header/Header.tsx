import React from "react";
import { NavLink } from "react-router-dom";
import {appConstants, ReduxState} from "../shared/constant/constant";
import {logout} from "../action/auth.action";
import {User_model} from "../shared/models/User_model";
import {AxiosPromise} from "axios";
import {connect} from "react-redux";

const Header = (props: HeaderProps) =>{
    console.log(props.user);
    return(
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <NavLink className="navbar-brand" to={appConstants.homeRoute}>handsome boy</NavLink>
                <ul className="nav navbar-nav">

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.homeRoute}>Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.inventoriesRoute}>Inventories</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.paymentCalculationRoute}>Payment calculation</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.tradeRoute}>Trade</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.serviceRoute}>Service</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to={appConstants.aboutUsRoute}>About Us</NavLink>
                    </li>


                </ul>

                    <ul className="nav navbar-nav" style={{marginLeft: 'auto'}}>
                    <li className="nav-item">

                        {
                            props.user?
                            (
                                props.user.username==="admin"?
                            <NavLink className="nav-link" to={appConstants.adminPageRoute}>My Account</NavLink>:

                            <NavLink className="nav-link" to={appConstants.administratorPageRoute}>Administrator</NavLink>):

                                <NavLink className="nav-link" to={appConstants.loginRoute}>Login</NavLink>


                        }



                    </li>
                    </ul>

            </nav>
        </header>
    );
}

const mapStateToProps = ({user}: ReduxState) =>{
    return {user} as HeaderProps;

}

export default connect (mapStateToProps, {logout})(Header);

interface HeaderProps{
    user: User_model;

    logout: ()=>{type: string; payload: AxiosPromise}
}
