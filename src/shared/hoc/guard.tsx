import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {useEffect} from "react";
import {appConstants, ReduxState} from "../constant/constant";
import {User_model} from "../models/User_model";

export const guard =(OldComponent: any)=>{

    function HOC(props: HOCProps){
        // if(props.user) return OldComponent
        // else navigate to login
        //how to simulate life-cycle methods
        useEffect(()=>{
            if(!props.user){
                props.history.push(appConstants.loginRoute);
            }
        }, [props.user, props.history]);


        return(
            props.user ? <OldComponent {...props}/> : <div>loading...</div>

        );

    }
    function mapStateToProps({user}: ReduxState){
        return {user};
    }


    return connect(mapStateToProps)(HOC);
};

interface HOCProps extends RouteComponentProps{
    user: User_model;
}