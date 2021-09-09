import React from "react";

import './form-input.styles.scss';

const FormInput = ({handleChange,formName, label, ...otherProps}) =>(
    <div className='group'>
        <input className = 'form-input' n onChange = {handleChange} {...otherProps}/>
        {
            label?
            <label className = {`${otherProps && otherProps.value &&  otherProps.value.length ? 'shrink':'' } form-input-label`}>
            { label }
            </label>
            :null
        }
    </div>
)

export default FormInput;