import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { FormField, required, validateEmail } from '../../utils'

export const LoginForm = ({ pristine, submitting, handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    style={{textAlign: 'right', display: 'inline-block'}}
  >
    <Field
      name='email'
      type='text'
      placeholder='Email'
      component={FormField}
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      type="password"
      placeholder='Password'
      component={FormField}
      validate={required}
    />
    <div>
      <input
        type="submit"
        value={submitting ? 'Loading' : 'Login'}
        disabled={pristine || submitting}
      />
    </div>
  </form>
)

LoginForm.propTypes = {
  pristine: PropTypes.bool.isRequired, // added by redux-form
  submitting: PropTypes.bool.isRequired, // added by redux-form
  handleSubmit: PropTypes.func.isRequired // added by redux-form (calls onSubmit)
}

export default LoginForm
