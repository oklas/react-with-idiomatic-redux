import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { FormField, required, validateEmail } from '../../utils'
import ProviderDataForm from '../ProviderDataForm'

export const AccountForm = ({
  account,
  handleSubmit,
  submitting,
  pristine
}) => (
  <form onSubmit={handleSubmit}>
    <h4>Account</h4>
    <div
      style={{textAlign: 'right', display: 'inline-block'}}
    >
      <Field
        name='displayName'
        type='text'
        placeholder='Display Name'
        component={FormField}
      />
      <Field
        name='email'
        type='text'
        placeholder='Email'
        component={FormField}
      />
      <Field
        name='avatarUrl'
        type='text'
        placeholder='Avatar Url'
        component={FormField}
      />
    </div>
    {!!account &&
      !!account.providerData && (
        <div>
          <h4>Linked Accounts</h4>
          <ProviderDataForm providerData={account.providerData} />
        </div>
      )}
    <input
      type="submit"
      value={submitting ? 'Saving' : 'Save'}
      disabled={pristine || submitting}
    />
  </form>
)

AccountForm.propTypes = {
  account: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default AccountForm
