import React, {Component} from 'react';
import {RouteComponentProps} from "react-router";
import {appConstants, ReduxState} from "../../shared/constant/constant"
import {Button, Paper, TextField} from "@material-ui/core";
import {Field, FieldProps, Form, Formik} from "formik";
import './EditInventory.scss';
import { connect } from "react-redux";
import {Inventory_model} from "../../shared/models/Inventory_model";
import {editInventories, getInventories} from "../../action/inventories.action";
import * as Yup from 'yup';
import {AxiosResponse} from "axios";

const EditInventorySchema = Yup.object().shape({
    image: Yup.string().required('Image is required'),
    year: Yup.number().min(0, 'Has to be a positive number').required('Year is required'),
    make: Yup.string().required('Make is required'),
    model: Yup.string().required('Model is required'),
    engine: Yup.string().required('Engine is required'),
    transmission: Yup.string().required('Transmission is required'),
    miles: Yup.number().min(0, 'Has to be a positive number').required('Miles number is required'),
    exterior: Yup.string().required('Exterior color is required'),
    interior: Yup.string().required('Interior color is required'),
    price: Yup.number().min(0, 'Has to be a positive number').required('Price is required'),
    vin: Yup.string().required('VIN number is required'),
    stock_number: Yup.string().required('Stock number is required')
});

class EditInventory extends Component<EditInventoryProps, any>{

    constructor(props: EditInventoryProps) {
        super(props);
        this.state = {inventory:''}

    }

    componentDidMount() {
        this.props.inventory === null && this.props.getInventories();
    }

    submitHandler =(value: Inventory_model)=>{
        this.props.editInventories(value);
        this.setState({inventory: this.props.inventory})

    };

    renderField =({field, form: {errors, touched}, ...props}: FieldProps)=>{

        return(
            <TextField
                className="form-control"
                {...field}
                {...props}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
            />
        );
    };

    render(){
        return(
            this.props.inventory ?
            <Paper elevation={3} className="EditInventory">
                <h2>Edit Inventory</h2>
                <Formik
                    initialValues={this.props.inventory}
                    onSubmit={this.submitHandler}
                    validationSchema={EditInventorySchema}
                >
                    {
                        ({errors, touched, isValid})=>(
                            <Form className="form-group" >
                                {
                                    appConstants.INVENTORY_FIELD.map(m=>(
                                        <Field
                                            key={m.label}
                                            name={m.name}
                                            type={m.type}
                                            lable={m.label}
                                            component={this.renderField}
                                        />
                                    ))
                                }
                                <Button disabled={!isValid} type="submit" color="primary">Done</Button>
                            </Form>
                        )
                    }

                </Formik>
            </Paper>: <h2>Finished</h2>
        );
    }


}

function mapStateToProps({inventories}: ReduxState, newProps: EditInventoryProps){
    const id = +newProps.match.params.id;
    const inventory = inventories?.find(i=>i.id===id);

    return{
        inventory: inventories ? inventory: null
    } as EditInventoryProps;

}

export default connect(mapStateToProps, {getInventories, editInventories})(EditInventory);

interface EditInventoryProps extends RouteComponentProps<{id: string}>{
        inventory: Inventory_model;
        getInventories: () => object;
        editInventories: (inventory: Inventory_model) => {type: string, payload: Promise<AxiosResponse>};

}

