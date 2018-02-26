import React from 'react'
import PropTypes from 'prop-types'
import { profileAvatarUrl } from '../../utils'
import AccountForm from '../AccountForm'

export const AccountPage = ({ avatarUrl, updateAccount, profile }) => (
  <div>
    <div>
      <img src={profileAvatarUrl(profile)} />
    </div>
    <div>
      <AccountForm
        onSubmit={updateAccount}
        account={profile}
        initialValues={profile}
      />
    </div>
  </div>
)

AccountPage.propTypes = {
  profile: PropTypes.object,
  updateAccount: PropTypes.func
}

export default AccountPage
