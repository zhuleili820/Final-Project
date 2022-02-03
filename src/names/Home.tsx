import React from "react";
import { connect } from "react-redux";
import Name from "./name/Name";
import {ReduxState} from "../shared/constant/constant";


const Home = () =>{

    return(
        <div className="Home" style={{width:"100%", height:"100%"}}>


            <img style={{width:"100%", height:"100%"}} src="https://www.motortrend.com/uploads/sites/5/2020/04/Porsche-911-history.jpg?fit=around%7C875:492"

            />

        </div>
    );
};

export default Home;

