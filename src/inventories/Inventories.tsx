import React, {Component, SyntheticEvent} from "react";
import {Inventory_model} from "../shared/models/Inventory_model";
import Inventory from "./inventory/Inventory";
import "./Inventories.scss"
import {connect} from "react-redux";
import {ReduxState} from "../shared/constant/constant";
import {getInventories} from "../action/inventories.action";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import inventories from "./Inventories";
import {TextField} from "@mui/material";


class Inventories extends Component<InventoriesProps, any>{
    componentDidMount() {
        this.props.getInventories();

    }

    constructor(props: InventoriesProps) {

        super(props);
        this.state = {filter: "",

            inventories: this.props.inventories,
            search: ""
        };
        }


    backAllHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "", inventories: this.props.inventories});
    }

    audiHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        console.log((event.target as HTMLInputElement).innerText)
        this.setState({filter: "Audi"});

    }

    bmwHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "BMW"});

    }

    cadillacHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Cadillac"});

    }

    bentleyHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Bentley"});
    }

    hondaHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Honda"});
    }

    lexusHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Lexus"});
    }

    mazdaHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Mazda"});
    }

    porscheHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Porsche"});
    }

    toyotaHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Toyota"});
    }

    autoHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Auto"});
    }

    manualHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: "Manual"});
    }

    priceOneHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: 20000});
    }

    priceTwoHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: 50000});
    }



    priceThreeHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: 100000});
    }

    priceFourHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: 300000});
    }



    makeSortHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({inventories: this.props.inventories.sort(
                (a,b)=>{
                   if(a.vin > b.vin){
                       return 1;
                   }
                   else if(a.vin < b.vin){
                       return -1;
                   }
                   return 0;
                }
            )}
        );
    }

    aTozSortHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({inventories: this.props.inventories.sort(
                (a,b)=>{
                    if(a.make > b.make){
                        return 1;
                    }
                    else if(a.make < b.make){
                        return -1;
                    }
                    return 0;
                }
            )}
        );
    }

    zToaSortHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({inventories: this.props.inventories.sort(
                (a,b)=>{
                    if(a.make > b.make){
                        return -1;
                    }
                    else if(a.make < b.make){
                        return 1;
                    }
                    return 0;
                }
            )}
        );
    }

    priceDownSortHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({inventories: this.props.inventories.sort(
                (a,b)=>{
                    if(a.price > b.price){
                        return -1;
                    }
                    else if(a.price < b.price){
                        return 1;
                    }
                    return 0;
                }
            )}
        );
    }


    priceUpSortHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({inventories: this.props.inventories.sort(
                (a,b)=>{
                    if(a.price > b.price){
                        return 1;
                    }
                    else if(a.price < b.price){
                        return -1;
                    }
                    return 0;
                }
            )}
        );
    }

    milesUpSortHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({inventories: this.props.inventories.sort(
                (a,b)=>{
                    if(a.miles > b.miles){
                        return 1;
                    }
                    else if(a.miles < b.miles){
                        return -1;
                    }
                    return 0;
                }
            )}
        );
    }

    milesDownSortHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({inventories: this.props.inventories.sort(
                (a,b)=>{
                    if(a.miles > b.miles){
                        return -1;
                    }
                    else if(a.miles < b.miles){
                        return 1;
                    }
                    return 0;
                }
            )}
        );
    }

    // searchHandler = (event: SyntheticEvent) =>{
    //     event.preventDefault();
    //
    //     this.setState({search: (event.target as HTMLInputElement).value});
    // }


    render(){


        return(
            <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'
                    }}>

                <Box sx={{ minWidth: 120 }} marginTop={5}>
                    <FormControl sx={{m: 1, minWidth: 200}}>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Sort By"
                        >
                            <MenuItem value={"sort"} onClick={this.makeSortHandler}>All Inventories</MenuItem>
                            <MenuItem value={"a to z"} onClick={this.aTozSortHandler}>A To Z</MenuItem>
                            <MenuItem value={"z to a"} onClick={this.zToaSortHandler}>Z To A</MenuItem>
                            <MenuItem value={"Highest Price to Lowest Price"} onClick={this.priceDownSortHandler}>Highest Price to Lowest Price</MenuItem>
                            <MenuItem value={"Lowest Price to Highest Price"} onClick={this.priceUpSortHandler}>Lowest Price to Highest Price</MenuItem>
                            <MenuItem value={"Miles: Low To High"} onClick={this.milesUpSortHandler}>Miles: Low To High</MenuItem>
                            <MenuItem value={"Miles: High To Low"} onClick={this.milesDownSortHandler}>Miles: High To Low</MenuItem>
                        </Select>
                    </FormControl>
                </Box>




                <Box sx={{ minWidth: 120 }} marginTop={5}>
                    <FormControl sx={{m: 1, minWidth: 200}}>
                        <InputLabel id="demo-simple-select-label">Make</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Make"
                        >
                            <MenuItem value={"All Inventories"} onClick={this.backAllHandler}>All Inventories</MenuItem>
                            <MenuItem value={"Audi"} onClick={this.audiHandler}>Audi</MenuItem>
                            <MenuItem value={"Bentley"} onClick={this.bentleyHandler}>Bentley</MenuItem>
                            <MenuItem value={"BMW"} onClick={this.bmwHandler}>BMW</MenuItem>
                            <MenuItem value={"Cadillac"} onClick={this.cadillacHandler}>Cadillac</MenuItem>
                            <MenuItem value={"Honda"} onClick={this.hondaHandler}>Honda</MenuItem>
                            <MenuItem value={"Lexus"} onClick={this.lexusHandler}>Lexus</MenuItem>
                            <MenuItem value={"Mazda"} onClick={this.mazdaHandler}>Mazda</MenuItem>
                            <MenuItem value={"Porsche"} onClick={this.porscheHandler}>Porsche</MenuItem>
                            <MenuItem value={"Toyota"} onClick={this.toyotaHandler}>Toyota</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl sx={{m: 1, minWidth: 200}}>
                        <InputLabel id="demo-simple-select-label">Transmission</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Transmission"
                        >
                            <MenuItem value={"All Inventories"} onClick={this.backAllHandler}>All Inventories</MenuItem>
                            <MenuItem value={"Auto"} onClick={this.autoHandler}>Auto</MenuItem>
                            <MenuItem value={"Manual"} onClick={this.manualHandler}>Manual</MenuItem>

                        </Select>
                    </FormControl>


                    <FormControl sx={{m: 1, minWidth: 200}}>
                        <InputLabel id="demo-simple-select-label">Price</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Price"
                        >
                            <MenuItem value={"All Inventories"} onClick={this.backAllHandler}>All Inventories</MenuItem>
                            <MenuItem value={"$20000>="} onClick={this.priceOneHandler}>less than $20000</MenuItem>
                            <MenuItem value={"$50000>="} onClick={this.priceTwoHandler}>less than $50000</MenuItem>
                            <MenuItem value={"$100000>="} onClick={this.priceThreeHandler}>less than $100000</MenuItem>
                            <MenuItem value={"$300000>="} onClick={this.priceFourHandler}>less than $300000</MenuItem>

                        </Select>
                    </FormControl>

                    {/*<Box*/}
                    {/*    component="form"*/}
                    {/*    sx={{*/}
                    {/*        '& > :not(style)': { m: 1, width: '25ch' },*/}
                    {/*    }}*/}
                    {/*    noValidate*/}
                    {/*    autoComplete="off"*/}
                    {/*>*/}
                    {/*    <TextField type="search" id="outlined-basic" label="Search" variant="outlined" onChange={this.searchHandler}/>*/}

                    {/*</Box>*/}
                </Box>

                <div className="Inventories">
                    {
                        this.state.filter?
                            (this.props.inventories?.filter(vehicle=> vehicle.make===this.state.filter ||
                                    vehicle.transmission===this.state.filter ||
                                    vehicle.price<=this.state.filter
                                    // ||
                                    // vehicle.make === this.state.search ||
                                    // vehicle.model === this.state.search
                                ).map(p => (
                                    <Inventory inventory={p} key={p.id}/>

                                ))

                            ): this.props.inventories?.map(p => (
                                <Inventory inventory={p} key={p.id}/>

                            ))


                    }

                </div>

            </div>
        );
    }
}



interface InventoriesProps{
    inventories: Inventory_model[],
    getInventories: () => object
}




function mapStateToProps({inventories}: ReduxState){

    return {inventories};
}
export default connect (mapStateToProps, {getInventories})(Inventories);




