import React, {Component, SyntheticEvent} from "react";
import './AddInventory.module.scss'
import classes from "./AddInventory.module.scss";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {Inventory_model} from "../../shared/models/Inventory_model";
import {connect} from "react-redux";
import {addInventories} from "../../action/inventories.action";
import {updateCheckAvailability} from "../../action/checkAvailability.action";
import checkAvailability from "../../administrationPage/adminComponent/CheckAvailability/CheckAvailability";
import {CheckAvailability_model} from "../../shared/models/CheckAvailability_model";


class AddInventory extends Component<AppInventoryProps, AppInventoryState>{

    constructor(props: AppInventoryProps) {
        super(props);

        const constructInventoryField = (): Inventory_model =>{
            const inventoryField = new Map();
            appConstants.INVENTORY_FIELD.forEach(field=>{
                inventoryField.set(field.name, '');
            });
            return Object.fromEntries(inventoryField);
        }

        this.state = {
            inventory: constructInventoryField()
        };

    }

    fieldChangeHandler = (event: SyntheticEvent) => {
        const element = event.target as HTMLInputElement;
        const field = element.name;
        const value = element.value;
        const newInventory = {...this.state.inventory, [field]: value};
        this.setState({
            inventory: newInventory
        });
    };

    controller = (m: InventoryField) => {
        return(
            <div className="form-control" key={m.name}>
            <label htmlFor={m.name}>{m.label}</label>
            <input className="form-control"
                   id={m.name}
                   name={m.name}
                   type={m.type}
                   value = {this.state.inventory[m.name as keyof Inventory_model]}
                   onChange={this.fieldChangeHandler}
            />
            </div>
        );

    };

    submitHandler = async (event: SyntheticEvent) => {
        event.preventDefault();
        await this.props.addInventories(this.state.inventory);

        console.log(this.props.inventories);

        let newAvailability: CheckAvailability_model = {
            inventory: this.props.inventories.reduce((a, v) =>{
                return(a.id>v.id)? a:v
            }),
            status: 'active'
        };

        this.props.updateCheckAvailability(newAvailability)


    };

    render() {
        return (
            <form onSubmit={this.submitHandler} className={classes.AddInventory}>

                <h2 className={classes.header}>Add Inventory</h2>
                {
                    appConstants.INVENTORY_FIELD.map(m=>this.controller(m))
                }

                <button type="submit" className="btn btn-primary AddNameButton">
                    <span className={classes.addInventoryText}>Add Inventory</span>
                </button>
            </form>
        );
    }
}

export default connect(mapStateToProps, {addInventories, updateCheckAvailability})(AddInventory);

interface InventoryField{
    name: string;
    label: string;
    type: string

}

interface AppInventoryProps {
    addInventories: (inventory: Inventory_model) => object;
    updateCheckAvailability: (availability: CheckAvailability_model) => object;
    inventories: Inventory_model [];
}



interface AppInventoryState{
    inventory: Inventory_model;
}

function mapStateToProps({inventories}: ReduxState){
            return {inventories};

}