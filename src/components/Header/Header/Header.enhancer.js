import { withHandlers, pure, compose } from 'recompose'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'

export default compose(
  withRouter,
  firebaseConnect(),
  connect(({ firebase: { auth, profile } }) => ({
    isSigned: !auth.isEmpty,
    profile,
  })),
  // Handlers as props
  withHandlers({
    handleLogout: props => () => {
      props.firebase.logout()
      props.history.push('/')
    }
  }),
  pure // shallow equals comparison on props (prevent unessesary re-renders)
)


