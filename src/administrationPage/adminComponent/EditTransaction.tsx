import React, {Component} from "react";
import {RouteComponentProps} from "react-router";
import {Transaction_model} from "../../shared/models/Transaction_model";
import {AxiosResponse} from "axios";
import {appConstants, ReduxState} from "../../shared/constant/constant";
import {connect} from "react-redux";
import {editTransactions, getTransactions} from "../../action/transaction.action";
import * as Yup from "yup";
import {Field, FieldProps, Form, Formik} from "formik";
import {Button, Paper, TextField} from "@material-ui/core";
import {CheckAvailability_model} from "../../shared/models/CheckAvailability_model";
import {editCheckAvailability, getCheckAvailability} from "../../action/checkAvailability.action";



const EditTransactionSchema = Yup.object().shape({
    inventory_id: Yup.number().min(0, 'mm/dd/yyyy').required('Inventory_id is required'),
    transaction_date: Yup.string().min(0, 'mm/dd/yyyy').required('Year is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.number().min(0).required('Phone# is required'),
    email: Yup.string().email().required('Email is required'),
    price: Yup.number().min(0, 'Has to be a positive number').required('Price is required'),
    sales: Yup.string().required('Sales is required')
});

class EditTransaction extends Component<EditTransactionProps, any>{

    constructor(props: EditTransactionProps) {
        super(props);
        this.state = {transaction:''}

    }

    componentDidMount() {
        this.props.transaction === null &&this.props.getTransactions();
    }

    submitHandler =(value: Transaction_model)=>{
        this.props.editTransactions(value);
        this.setState({transaction: this.props.transaction})

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

            this.props.transaction ?
                <Paper elevation={3} className="EditInventory">
                    <h2>Edit Transactions</h2>
                    <Formik
                        initialValues={this.props.transaction}
                        onSubmit={this.submitHandler}
                        validationSchema={EditTransactionSchema}
                    >
                        {
                            ({errors, touched, isValid})=>(
                                <Form className="form-group" >
                                    {
                                        appConstants.TRANSACTION_FIELD.map(m=>(
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
                </Paper>: <h2>abc</h2>
        );
    }


}

function mapStateToProps({transaction}: ReduxState, newProps: EditTransactionProps){
    const id = +newProps.match.params.id;
    console.log(id);
    const check = transaction?.find(i=>i.id===id);

    return{
        transaction: transaction ? check: null
    } as EditTransactionProps;

}

export default connect(mapStateToProps, {getTransactions, editTransactions})(EditTransaction);

interface EditTransactionProps extends RouteComponentProps<{id: string}>{
    transaction: Transaction_model;
    getTransactions: () => object;
    editTransactions: (transaction: Transaction_model) => {type: string, payload: Promise<AxiosResponse>};

}



