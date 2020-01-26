import React,{Component} from 'react';

class InputTextField extends Component{  
  constructor(props){
      super(props)
      this.state={
          errors:""
      }
  }

  render(){
    const {name,placeholder,required,_handleChange} = this.props

    return(
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
                      console.log(value)
                      var reg = /^[a-zA-Z]+ [a-zA-Z]+$/
                      let errorMsg = (!value.match(reg)) ? `(Name should be a first and last name (separated by a space) i.e. Json Joe)`: ""
                      this.setState({errors:errorMsg})

              }}
        
        />
        <span className="errorMsg">{this.state.errors}</span>

      </div>
        )
  }
 
}

export default InputTextField;
