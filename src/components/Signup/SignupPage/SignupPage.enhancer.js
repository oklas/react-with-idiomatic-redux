import { withFirebase } from 'react-redux-firebase'
import { withHandlers, pure, compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { userIsNotAuthenticated } from '../../auth'
import { withNotifications } from '../../notifications'

export default compose(
  withRouter,
  userIsNotAuthenticated, // redirect to list page if logged in
  withNotifications, // add props.showError
  withFirebase, // add props.firebase (firebaseConnect() can also be used)
  // Handlers
  withHandlers({
    onSubmitFail: props => (formErrs, dispatch, err) =>
      props.showError(formErrs ? 'Form Invalid' : err.message || 'Error'),
    emailSignup: ({ firebase, showError }) => creds =>
      firebase
        .createUser(creds)
        .catch(err => showError(err.message))
  }),
  pure // shallow equals comparison on props (prevent unessesary re-renders)
)
