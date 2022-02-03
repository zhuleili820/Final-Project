import inventory from "../../inventories/inventory/Inventory";
import Inventory from "../../inventories/inventory/Inventory";
import {Inventory_model} from "./Inventory_model";

export interface CheckAvailability_model{
    id?: number;
    inventory: Inventory_model;
    status: string;

}

