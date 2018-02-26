import { withHandlers, pure, compose } from 'recompose'
import { firebaseConnect } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'
import { withNotifications } from '../../notifications'
import { userIsNotAuthenticated } from '../../auth'

export default compose(
  withRouter,
  userIsNotAuthenticated,
  withNotifications,
  firebaseConnect(),
  // Handlers as props
  withHandlers({
    onSubmitFail: props => (formErrs, dispatch, err) =>
      props.showError(formErrs ? 'Form Invalid' : err.message || 'Error'),
    emailLogin: ({ firebase, router, showError }) => creds =>
      firebase.login(creds).catch(err => showError(err.message))
  }),
  pure // shallow equals comparison on props (prevent unessesary re-renders)
)
