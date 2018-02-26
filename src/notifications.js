import React from "react"

export const withNotifications = Component => props => (
  <Component {...props} showError={alert} showSuccess={alert}/>
)