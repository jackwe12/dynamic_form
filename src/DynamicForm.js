import React, {Component} from 'react';
import InputTextField from './InputTextField';
import DropdownSelect from './DropdownSelect';
import InputNumberField from './InputNumberField';
import "./DynamicForm.css";

class DynamicForm extends Component{
    constructor(){
        super()
        // this.state = {
        //     fields:[
        //         {
        //             placeholder: "Name",
        //             name: "remaining_values",
        //             input_type: "text",
        //             required:true
        //         },
        //         {
        //             placeholder: "email",
        //             name: "email",
        //             input_type: "text",
        //             required: true
        //         },
        //         {
        //             placeholder: "Prefered time to call you",
        //             name: "contact_time",
        //             input_type: "text",
        //             required: true
        //         }
        //     ]
        // };
        this.state={
            form1:{
                id: 'bmi',
                observationName: 'BMI - Body mass index',
                dataElements: [
                {
                    id: 'name',
                    displayName: 'Name',
                    type: 'textInput',
                    display: true,
                    isRequired: true,
                }, 
                {
                    id: 'gender',
                    displayName: 'Gender',
                    type: 'select',
                    options: [
                        {
                        id: 1,
                                name: 'Male',
                        isDefault: true,
                                sortOrder: 1,
                                },
                        {
                        id: 2,
                                name: 'Female',
                                isDefault: false,
                                sortOrder: 2,
                        }, ],
                    display: true,
                    isRequired: false,
                    },
                    {
                    id: 'weight',
                    displayName: 'Weight',
                    unitOfMeasure: 'kg',
                    type: 'numberInput',
                    bounds: {
                        upperLimit: 1000,
                    },
                    display: true,
                    isRequired: true,
                    },
                    {
                    id: 'height',
                    displayName: 'Height',
                    unitOfMeasure: 'cm',
                    type: 'numberInput',
                    bounds: {
                        upperLimit: 300,
                    },
                    display: true,
                    isRequired: true,
                    },
                {
                id: 'bmi', 
                displayName: 'BMI', 
                unitOfMeasure: 'kg/m2', 
                type: 'numberInput', 
                bounds: {
                        upperLimit: 100,
                    },
                display: false,
                isRequired: false,
                },
                ],
            },
            form2:{
                id: 'head-circumference', observationName: 'Head Circumference', 
                dataElements: [
                    {
                      id: 'name',
                      displayName: 'Name',
                      type: 'textInput',
                      display: true,
                      isRequired: true,
                }, {
                      id: 'gender',
                      displayName: 'Gender',
                      type: 'select',
                      options: [
                {
                id: 1,
                          name: 'Male',
                          isDefault: true,
                          sortOrder: 1,
                }, {
                          id: 2,
                          name: 'Female',
                          isDefault: false,
                          sortOrder: 2,
                }, ],
                      display: true,
                      isRequired: false,
                    },
                {
                id: 'head-circumference', displayName: 'Head Circumference', unitOfMeasure: 'cm',
                type: 'numberInput',
                bounds: {
                        upperLimit: 1000,
                      },
                      display: true,
                      isRequired: true,
                    },
                ], 
            
            
            },
            errors:""
            
            





         };
        }
        
    



    submitForm = event => {

        const {fields, ...inputFields} = this.state;
        // const {name} = this.state;
        console.log(inputFields);
        event.preventDefault();


    };
    _handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
        if(this.state.height&&this.state.weight){
            this.setState({
                BMI:25
            })
        }


    }


    


    render (){
    
    //Here to choose form1 or form2 !!
    const {dataElements, observationName} = this.state.form1;
    let submitStatus=true;
    return(

        <form onSubmit={this.submitForm}>
            <h2>Observation Name: {observationName}</h2>
            {dataElements.map( form => {
                if (form.type === "textInput") {
                    return (
                        <InputTextField
                            name={form.id}
                            placeholder={form.displayName}
                            display={form.display}
                            required={form.isRequired}
                            key={form.id}
                            _handleChange={this._handleChange}
                            errors={this.state.errors}
                        />
                    );
                }else if (form.type === "numberInput"){
                    return (
                        <InputNumberField
                            name={form.id}
                            placeholder={form.displayName}
                            display={form.display}
                            required={form.isRequired}
                            key={form.id}
                            _handleChange={this._handleChange}
                            unit={form.unitOfMeasure}
                            bounds={form.bounds}
                            state={this.state}
                            errors={this.state.errors}

                        />
                        );
                } 
                else if (form.type === "select"){
                    return (
                        <DropdownSelect
                            name={form.id}
                            placeholder={form.displayName}
                            display={form.display}
                            required={form.isRequired}
                            key={form.id}
                            _handleChange={this._handleChange}
                            val = {form.options}
                            errors={this.state.errors}

                        />
                        );
                }
            })}
            <input type="submit" disabled={submitStatus}/>

        </form>
    )
        }

    };

    export default DynamicForm