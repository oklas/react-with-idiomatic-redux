import React from 'react'

export const required = value => (value ? undefined : 'Required')

export const validateEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const FormField = props => (
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
