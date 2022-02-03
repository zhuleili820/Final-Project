import React, {Component} from "react";
import {Chart_model} from "../../shared/models/Chart_model";
import 'chart.js/auto';
import {Pie} from 'react-chartjs-2';
import {connect} from "react-redux";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {getChart} from "../../action/chart.action";
import {NavLink} from "react-router-dom";

class PieChart extends Component<ChartProps, ChartState>{

    componentDidMount() {
        this.props.getChart();
    }
    static getDerivedStateFromProps(props:ChartProps, state:ChartState) {
        if(state.datasets !== null) {
            return {datasets:[{
                data: [props.chart?.ky1, props.chart?.ky2],
                    backgroundColor: ['blue','red']
                }]
            }
        } else {
            return {datasets: state.datasets}
        }
    }
    constructor(props:ChartProps) {
        super(props);
        this.state={
            label:['ky1', 'ky2'],
            datasets: [{
                data: [this.props.chart?.ky1, this.props.chart?.ky2],
                backgroundColor: ['blue','red']
            }]
        }
    }

    render(){

        return(
            <div>
                <div style={{width:"30%"}}>
                <Pie
                    data={{
                        labels: this.state.label,
                        datasets: this.state.datasets
                    }}
                /></div>
            </div>
        );
    }
}
const mapStateToProps = ({chart}: ReduxState) => {
    return {chart};
}

export default connect (mapStateToProps,{getChart})(PieChart);
interface ChartProps {
    chart: Chart_model;
    getChart: ()=> object,
}
interface ChartState {
    label: any
    datasets: any
}