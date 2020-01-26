import React, { Component } from 'react';



class InputNumberField extends Component{  
    constructor(props){
        super(props)
        this.state={
            errors:this.props.errors
        }
    }



    render(){
    const {name,placeholder,required,_handleChange,unit,bounds,display,state} = this.props
    let BMI = (state.weight/Math.pow(state.height,2)*10000).toFixed(2)
    if (name==="bmi"){
        return(
            <div>
                {state.height&&state.weight ? (<span>BMI =  {BMI}</span>):(<span>Enter Weight and Height to get BMI</span>) }
                <span> ({unit}) </span>
                <div></div>
                {BMI>bounds.upperLimit ? (<span className="errorMsg">({placeholder} must be lower than {bounds.upperLimit} {unit})</span>) : (<span></span>)}
            </div>
        )
    }else {
        return (
            <div>
            <input
              type="text"
              name={name}
              required={required}
              autoComplete="off"
              placeholder={placeholder}
              onChange={_handleChange}  
              onBlur={(e)=>{
                      let value = e.target.value.trim();
                      let errorMsg = (value > bounds.upperLimit)? `(${placeholder} must be lower than ${bounds.upperLimit} ${unit})`: ""
                      this.setState({errors:errorMsg})
                    
              }}
              disabled={!display}
        
              
            />
            <span> {unit} </span>
            <span className="errorMsg">{this.state.errors}</span>
          </div>  
            )
    }

 
  

    }
}

export default InputNumberField;
