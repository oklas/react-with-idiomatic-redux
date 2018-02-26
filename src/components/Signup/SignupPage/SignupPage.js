import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SignupForm from '../SignupForm'

export const SignupPage = ({ emailSignup, onSubmitFail }) => (
  <div>
    <div>
      <SignupForm onSubmit={emailSignup} onSubmitFail={onSubmitFail} />
    </div>
    <div>
      <span>Already have an account?</span>
      <Link to='/login'>
        Sign In
      </Link>
    </div>
  </div>
)

SignupPage.propTypes = {
  emailSignup: PropTypes.func, // from enhancer (withHandlers - firebase)
  googleLogin: PropTypes.func, // from enhancer (withHandlers - firebase)
  onSubmitFail: PropTypes.func // from enhancer (reduxForm)
}

export default SignupPage
