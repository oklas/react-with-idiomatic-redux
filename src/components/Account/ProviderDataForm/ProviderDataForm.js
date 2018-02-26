import React from 'react'
import PropTypes from 'prop-types'

export const ProviderData = ({ providerData }) => (
  <table>
    {!providerData||providerData.length==0 ? null :
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
      </tr>
    }
    {providerData.map((providerAccount, i) => (
      <tr key={i}>
        <td>{providerAccount.providerId}</td>
        <td>{providerAccount.displayName}</td>
        <td>{providerAccount.email}</td>
      </tr>
    ))}
  </table>
)

ProviderData.propTypes = {
  providerData: PropTypes.array.isRequired
}

export default ProviderData
