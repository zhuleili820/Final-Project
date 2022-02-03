import React, {Component} from "react";
import * as Yup from 'yup';
import {Button, Paper, TextField} from "@material-ui/core";
import {Field, FieldProps, Form, Formik} from "formik";
import {RouteComponentProps} from "react-router";
import {AxiosResponse} from "axios";
import {CheckAvailability_model} from "../../../shared/models/CheckAvailability_model";
import {appConstants, ReduxState} from "../../../shared/constant/constant";
import {connect} from "react-redux";
import {editCheckAvailability, getCheckAvailability} from "../../../action/checkAvailability.action";

const EditStatusSchema = Yup.object().shape({
    status: Yup.string().required('Status is Required')
});


class EditStatus extends Component<EditStatusProps, any>{

    constructor(props: EditStatusProps) {
        super(props);
        this.state = {checkAvailability:''}

    }

    componentDidMount() {
        this.props.checkAvailability === null && this.props.getCheckAvailability();
    };

    submitHandler =(value: CheckAvailability_model)=>{
        this.props.editCheckAvailability(value);
        this.setState({checkAvailability: this.props.checkAvailability})

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
            this.props.checkAvailability ?
                <Paper elevation={3} className="EditInventory">
                    <h2>Edit Status</h2>
                    <Formik
                        initialValues={this.props.checkAvailability}
                        onSubmit={this.submitHandler}
                        validationSchema={EditStatusSchema}
                    >
                        {
                            ({errors, touched, isValid})=>(
                                <Form className="form-group" >
                                    {
                                        appConstants.AVAILABILITY_FIELD.map(m=>(
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


function mapStateToProps({checkAvailability}: ReduxState, newProps: EditStatusProps){

    const id = +newProps.match.params.id;

    const check = checkAvailability?.find(i=>i.id===id);

    return{
        checkAvailability: checkAvailability ? check: null
    } as EditStatusProps;

}


export default connect (mapStateToProps, {getCheckAvailability, editCheckAvailability})(EditStatus);

interface EditStatusProps extends RouteComponentProps<{id: string}>{
    checkAvailability: CheckAvailability_model;
    getCheckAvailability: () => object;
    editCheckAvailability: (checkAvailability: CheckAvailability_model) => {type: string, payload: Promise<AxiosResponse>};

}



