import React, {SyntheticEvent, useState} from 'react';
import css from './Login.module.scss'
import {connect} from "react-redux";
import {login} from "../action/auth.action"
import {AxiosResponse} from "axios";
import {User_model} from "../shared/models/User_model";
import {appConstants} from "../shared/constant/constant";
import {RouteComponentProps} from "react-router";
import {NavLink} from "react-router-dom";


const Login = (props: LoginProps) => {
    // TODO: fix isLoggedIn
    const alertRef = React.createRef<HTMLDivElement>();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const inputChangeHandler = (event: SyntheticEvent)=>{
        const target = event.target as HTMLInputElement;
        setUser({
            ...user,
            [target.id]: target.value

        });
    };
    const cb1 = () => {
         if(user.username==="admin"){
            props.history.push(appConstants.adminPageRoute);
            return;
         }
         else{
             props.history.push(appConstants.administratorPageRoute);
         }

    };

    const cb2 = () => {

        alertRef.current !.style.display=''

    };

    const submitHandler = (event: SyntheticEvent)=>{
        event.preventDefault();

        props.login(user, cb1, cb2);

    };



    return (
        <form onSubmit={submitHandler} className={`${css.LoginForm} form-group`}>

            <h2>Login</h2>
            <label htmlFor="username">Username:</label>
            <input onChange={inputChangeHandler}  value ={user.username} id="username" type="text" className="form-control"/>
            <label htmlFor="Password">Password:</label>
            <input onChange={inputChangeHandler} value ={user.password} id="password" type="password" className="form-control"/>
            <br/>

            <div ref={alertRef} style = { {display: 'none'} } className= "alert.alert-danger">Unmatched information</div>
            <button type = "submit" className="btn btn-primary AddNameButton">Login</button>

        </form>

    );

};

export default connect(null, {login})(Login);

interface LoginProps extends RouteComponentProps{
    login: (user: User_model, cb1: () => void, cb2: () => void) =>{ type: string; payload: Promise<AxiosResponse> };
    user: User_model;
}