import React from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LoginForm from '../LoginForm'

export const LoginPage = ({emailLogin, onSubmitFail}) => (
  <div>
    <div>
      <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
    </div>
    <div>
      <span>Need an account? </span>
      <Link to='/signup'>
        Sign Up
      </Link>
    </div>
  </div>
)

LoginPage.propTypes = {
  number: PropTypes.number
}

export default LoginPage
