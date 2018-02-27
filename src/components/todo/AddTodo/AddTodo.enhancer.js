import { connect } from "react-redux";
import { compose, withHandlers } from 'recompose'
import { withFirebase } from 'react-redux-firebase'
import { withNotifications } from '../../../notifications'

export default compose(
  withFirebase,
  withNotifications,
  connect(({ firebase: { profile } }) => ({
    profile,
  })),
  withHandlers({
    addTodo: ({firebase, showError}) => newTodo => (
      firebase
        .push('todos', newTodo)
        .catch(err => {
          showError('Error creating new todo: ' + error.message || error) // eslint-disable-line
        })
     )
  })
)
