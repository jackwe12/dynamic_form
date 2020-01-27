This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Introduction 
This is a dynamic form rendered from JSON schema data.
As the requirement, I didn't use any library execpt for create-react-app.

Follow the rule I was provided:

- Name: Text based. Should enforce the need to a first and last name (separated by a space). Required.
- Gender: Select/option based (male/female). Optional.
- Head Circumference: Number based. Only position number below 100 cm is allowed.
Required.
- Height: Number based. Only positive numbers below 300 cm is allowed. Required.
- Weight: Number based. Only positive numbers below 1000 kg is allowed. Required.
- BMI: Only calculated based height and weight input. Only shown when weight and Height is provided.

I choose to handle invalid inputs by displaying error messages(in red color).
Use Simple CSS to style the form.

After submitting the form, it will console.log the form data(So we can proceess with the data)



### Form selection
In DynamicForm.js
We can change the following name to test different form

```
//Here to choose form1 or form2 !!
    const {dataElements, observationName} = this.state.form1;
    
```
By changing form1 to form 2, we can test the second form
```
//Here to choose form1 or form2 !!
    const {dataElements, observationName} = this.state.form2;
    
```

### Form 
I've put the form json data in state in DynamicForm.js as below:
```
form1 = bmiReferenceProps
```
```
form2 = headCircumferenceReferenceProps
```


```
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
            submitStatus:false
            
            





         };
        }
   ```
        
    

