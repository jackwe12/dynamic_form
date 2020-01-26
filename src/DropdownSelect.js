import React from 'react';

const DropdownSelect =( { name, placeholder, required, val, _handleChange} ) => (
    
    <div>
        <label>{placeholder}</label>
        <select name={name} required={required} onChange={_handleChange}>
            <option value="">Select an option</option>
            {val.map(val=><option value={val.name} key={val.name}>{val.name}</option>)}
        </select>
    </div>
)

export default DropdownSelect;