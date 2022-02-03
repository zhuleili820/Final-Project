import React, {Component, SyntheticEvent} from 'react';
import'./PaymentCal.scss'
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {addName} from "../../action/names.action";
import Inventory from "../../inventories/inventory/Inventory";
import {Inventory_model} from "../../shared/models/Inventory_model";
import {ReduxState} from "../../shared/constant/constant";
import {getInventories} from "../../action/inventories.action";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

class PaymentCal extends Component<PaymentCalProps, any> {

    componentDidMount() {
        this.props.getInventories();
    }

    constructor(props: PaymentCalProps) {
        super(props);
        this.state={
            inputOne:'',
            inputTwo:'',
            inputThree:'',
            inputFour:'',
            inputFive:'',
            inputSix:'',
            inputSeven:'',
            inputEight:'',
            inputNine:'',
            inputTen:'',

            filter:'',
            secondFilter:'',

        }
    }


    oneChange = (one: any) => {
        this.setState({
            inputOne: one.target.value
        })
    }

    twoChange = (two: any) => {
        this.setState({
            inputTwo: two.target.value
        })
    }

    threeChange = (three: any) => {
        this.setState({
            inputThree: three.target.value
        })
    }

    fourChange = (four: any) => {
        this.setState({
            inputFour: four.target.value
        })
    }

    fiveChange = (five: any) => {
        this.setState({
            inputFive: five.target.value
        })
    }

    sixChange = (six: any) => {
        this.setState({
            inputSix: six.target.value
        })
    }

    sevenChange = (seven: any) => {
        this.setState({
            inputSeven: seven.target.value
        })
    }

    eightChange = (eight: any) => {
        this.setState({
            inputEight: eight.target.value
        })
    }

    nineChange = (nine: any) => {
        this.setState({
            inputNine: nine.target.value
        })
    }

    tenChange = (ten: any) => {
        this.setState({
            inputTen: ten.target.value
        })
    }

    priceHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({filter: this.state.inputOne})
    }

    affordabilityHandler = (event: SyntheticEvent) =>{
        event.preventDefault();
        this.setState({secondFilter: (+this.state.inputSix * +this.state.inputNine/(1+ +this.state.inputTen/100)
                + +this.state.inputSeven)/(1 + +this.state.inputEight/100)})
    }

    render(){
        return(
            <div>

                <h2 className="Inventories">Calculate Monthly Payment</h2>
                <section className="Inventories">
                <section className="form-group AddName">
                    <label>Vehicle Price</label>
                <input onChange={(one)=>this.oneChange(one)} value={this.state.inputOne} className="form-control" type="text"/>
                    <br/>
                    </section>

                    <section className="form-group AddName">
                    <label>Down Payment</label>
                <input onChange={(two)=>this.twoChange(two)} value={this.state.inputTwo} className="form-control" type="text"/>
            </section>

                <section className="form-group AddName">
                    <label>Sales Tax(%)</label>
                    <input onChange={(three)=>this.threeChange(three)} value={this.state.inputThree} className="form-control" type="text"/>
                </section>

                <section className="form-group AddName">
                    <label>Term(months; (36, 48, 60))</label>
                    <input onChange={(four)=>this.fourChange(four)} value={this.state.inputFour} className="form-control" type="text"/>
                    <button onClick={this.priceHandler} className="btn btn-primary AddNameButton">Search Vehicles</button>
                </section>

                <section className="form-group AddName">
                    <label>Interest Rate(%)</label>
                    <input onChange={(five)=>this.fiveChange(five)} value={this.state.inputFive} className="form-control" type="text"/>
                </section>

                </section>

                <section className="form-group AddName">
                    <label><strong>Estimated Monthly Payment: ${((+this.state.inputOne * (1 + +this.state.inputThree/100) - +this.state.inputTwo) * (1 + +this.state.inputFive/100) / +this.state.inputFour).toFixed(2)}</strong></label>
                </section>

                <br/>

                <div className="Inventories">
                    {

                        this.props.inventories?.filter(vehicle=>
                            vehicle.price<= this.state.filter
                        ).map(p => (
                            <Inventory inventory={p} key={p.id}/>

                        ))

                    }

                </div>

                <br/>

                <h2 className="Inventories">Affordability Calculator</h2>
                <section className="Inventories">
                    <section className="form-group AddName">
                        <label>Monthly Payment</label>
                        <input onChange={(six)=>this.sixChange(six)} value={this.state.inputSix} className="form-control" type="text"/>
                        <br/>
                    </section>

                    <section className="form-group AddName">
                        <label>Down Payment</label>
                        <input onChange={(seven)=>this.sevenChange(seven)} value={this.state.inputSeven} className="form-control" type="text"/>
                    </section>

                    <section className="form-group AddName">
                        <label>Sales Tax</label>
                        <input onChange={(eight)=>this.eightChange(eight)} value={this.state.inputEight} className="form-control" type="text"/>
                    </section>

                    <section className="form-group AddName">
                        <label>Term(months; (36, 48, 60))</label>
                        <input onChange={(nine)=>this.nineChange(nine)} value={this.state.inputNine} className="form-control" type="text"/>
                        <button onClick={this.affordabilityHandler} className="btn btn-primary AddNameButton">Search Vehicles</button>
                    </section>

                    <section className="form-group AddName">
                        <label>Interest Rate</label>
                        <input onChange={(ten)=>this.tenChange(ten)} value={this.state.inputTen} className="form-control" type="text"/>
                    </section>

                </section>

                <section className="form-group AddName">
                    <label><strong>Estimated Vehicle Price: ${((+this.state.inputSix * +this.state.inputNine/(1+ +this.state.inputTen/100) + +this.state.inputSeven)/(1 + +this.state.inputEight/100)).toFixed(2)}</strong></label>
                </section>

                <br/>

                <div className="Inventories">
                    {

                        this.props.inventories?.filter(vehicle=>
                            vehicle.price<= this.state.secondFilter
                        ).map(p => (
                            <Inventory inventory={p} key={p.id}/>

                        ))

                    }

                </div>


            </div>
        )
    }

}


interface PaymentCalProps{
    inventories: Inventory_model[],
    getInventories: ()=>object
}

interface PaymentCalState{

    inputOne: string;
    inputTwo: string;
    inputThree: string;
    inputFour: string;
    inputFive: string;
    inputSix: string;
    inputSeven: string;
    inputEight: string;
    inputNine: string;
    inputTen: string;
    filter: string;
    secondFilter: string;
}

function mapStateToProps({inventories}:ReduxState){
    return {inventories};
}

export default connect(mapStateToProps, {getInventories})(PaymentCal);





