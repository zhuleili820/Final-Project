import React, {Component, SyntheticEvent} from "react";
import {User_model} from "../shared/models/User_model";
import {appConstants} from "../shared/constant/constant";
import classes from "../inventories/add-inventory/AddInventory.module.scss";
import {connect} from "react-redux";
import {register} from "../action/register.action";


class Register extends Component<RegisterProps, RegisterState>{

        constructor(props: RegisterProps) {
            super(props);

            const constructRegisterField = (): User_model =>{
                const registerField = new Map();
                appConstants.REGISTER_FIELD.forEach(field=>{
                    registerField.set(field.name, '');
                });
                return Object.fromEntries(registerField);
            }

            this.state = {
                user: constructRegisterField()
            };

        }

    fieldChangeHandler = (event: SyntheticEvent) => {
        const element = event.target as HTMLInputElement;
        const field = element.name;
        const value = element.value;
        const newUser = {...this.state.user, [field]: value};
        this.setState({
            user: newUser
        });
    };

    controller = (m: RegisterField) => {
        return(
            <div className="form-control" key={m.name}>
                <label htmlFor={m.name}>{m.label}</label>
                <input className="form-control"
                       id={m.name}
                       name={m.name}
                       type={m.type}
                       value = {this.state.user[m.name as keyof User_model]}
                       onChange={this.fieldChangeHandler}
                />
            </div>
        );

    };

    submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(this.state.user);
        this.props.register(this.state.user);

    };


    render(){
        return(

                <form onSubmit={this.submitHandler} className={classes.Register}>

                    <h2 className={classes.header}>New User</h2>
                    {
                        appConstants.REGISTER_FIELD.map(m=>this.controller(m))
                    }

                    <button type="submit" className="btn btn-primary AddNameButton">
                        <span className={classes.registerText}>Register</span>
                    </button>
                </form>

        );
    }
}

export default connect(null, {register})(Register);

interface RegisterField{
    name: string;
    label: string;
    type: string;
}

interface RegisterProps{
    register: (user: User_model) => object;
}

interface RegisterState{
    user: User_model;

}