This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Change test form
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

### form 
I've put the form json data in state in DynamicForm.js as below:
form1 = bmiReferenceProps
form2 = headCircumferenceReferenceProps
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
        
    

