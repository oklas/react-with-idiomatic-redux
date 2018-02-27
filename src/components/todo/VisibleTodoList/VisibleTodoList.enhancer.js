import { connect } from "react-redux";
import { compose, withHandlers } from 'recompose'
import { populate, firebaseConnect } from 'react-redux-firebase'
import { withRouter } from "react-router";
import { withNotifications } from '../../../notifications'
import { spinnerWhileLoading } from '../../../utils'

export default compose(
  withNotifications,
  withRouter,
  connect( ( {
    firebase,
    firebase: { auth, ordered: { todos } },
  },
  {
    match: { params }
  }) => ({
    auth,
    todos,
    filter:
      params.filter !== "active" && params.filter !== "completed" ?
        'all' : params.filter,
    }),
  ),
  firebaseConnect(({filter}) => [{
    path:'todos',
    queryParams: [
      'orderByChild=completed',
      filter=='all' ? '' : 'equalTo=' + (filter=='completed'),
    ]
  }]),
  spinnerWhileLoading(['todos']),
  withHandlers({
    addTodo: ({firebase, showError}) => newTodo => (
      firebase
        .push('todos', newTodo)
        .catch(err => {
          showError('Error creating new todo: ' + error.message || error) // eslint-disable-line
        })
    ),
    toggleDone: props => ({key, value: {completed}}) => {
      const { firebase, auth } = props
      if (!auth || !auth.uid) {
        return props.showError('You must be Logged into Toggle Done')
      }
      return firebase.set(`todos/${key}/completed`, !completed)
    },
  })
)
