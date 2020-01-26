import React from 'react';

const InputNumberField =({name, placeholder, required, _handleChange, unit, bounds})=>(
  <div>
    <input
      type="text"
      name={name}
      required={required}
      autoComplete="off"
      placeholder={placeholder}
      onChange={_handleChange}  
    />
    <span>{unit}</span>
  </div>
)

export default InputNumberField;
