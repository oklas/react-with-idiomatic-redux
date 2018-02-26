import React from 'react'

const FormField = props => (
  <span>
    <label>{props.placeholder}: </label>
    <input {...props.input} type={props.type}/>
    <div>
      &nbsp;
      { props.meta.touched && props.meta.error && 
        <span className="error">{props.meta.error}</span>
      }
    </div>
  </span>
)

export default FormField