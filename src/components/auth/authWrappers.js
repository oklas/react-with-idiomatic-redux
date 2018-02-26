import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { withRouter } from 'react-router-dom'
import Loading from '../Loading'

const AUTHED_REDIRECT = 'AUTHED_REDIRECT'
const UNAUTHED_REDIRECT = 'UNAUTHED_REDIRECT'

const locationHelper = locationHelperBuilder({
  locationSelector: props => props.location
})

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated',
  AuthenticatingComponent: Loading,
  authenticatedSelector: ({ firebase: { auth } }) => !auth.isEmpty,
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing,
  redirectAction: newLoc => dispatch => {
    dispatch({
      type: UNAUTHED_REDIRECT,
      payload: { message: 'User is not authenticated.' }
    })
  }
})

export const userIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false,
  AuthenticatingComponent: Loading,
  authenticatedSelector: ({ firebase: { auth } }) => auth.isEmpty,
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing,
  redirectAction: newLoc => dispatch => {
    dispatch({ type: AUTHED_REDIRECT })
  }
})

