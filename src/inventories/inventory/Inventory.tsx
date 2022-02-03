import React from "react";
import { Link } from "react-router-dom";
import {Inventory_model} from "../../shared/models/Inventory_model";
import "./Inventory.scss"
import {appConstants} from "../../shared/constant/constant";
import inventory from "./Inventory";
import {CheckAvailability_model} from "../../shared/models/CheckAvailability_model";

const Inventory =({inventory}: InventoryProps) => {
    return(
        <div className="Inventory">
            <Link to={`${appConstants.vehicleSpecRoute}/${inventory.id}`}>
            <img className="inventory-image" src = {inventory.image} alt = {inventory.make}/>
            <div className="inventory-info-overlay">
                <div className="inventory-info">{inventory.year}</div>
                <div className="inventory-info">{inventory.make}</div>
                <div className="inventory-info">{inventory.model}</div>
                <div className="inventory-info">${inventory.price}</div>


            </div>
        </Link>
        </div>
    );
};

export default Inventory;

interface InventoryProps{
    inventory: Inventory_model,

}