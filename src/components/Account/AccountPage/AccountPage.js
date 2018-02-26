import React from 'react'
import PropTypes from 'prop-types'
import AccountForm from '../AccountForm'
import md5 from 'md5'

export const AccountPage = ({ avatarUrl, updateAccount, profile }) => (
  <div>
      <AccountForm
        onSubmit={updateAccount}
        account={profile}
        initialValues={profile}
      />
  </div>
)

AccountPage.propTypes = {
  avatarUrl: PropTypes.string,
  profile: PropTypes.object,
  updateAccount: PropTypes.func
}

export default AccountPage
