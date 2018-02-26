import React from "react"
import PropTypes from 'prop-types'
import LoginForm from '../LoginForm'

export const LoginPage = ({emailLogin, onSubmitFail}) => (
  <div>
    <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
  </div>
)

LoginPage.propTypes = {
  number: PropTypes.number
}

export default LoginPage
