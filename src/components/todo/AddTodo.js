import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, withHandlers } from 'recompose'
import { withFirebase } from 'react-redux-firebase'
import { withNotifications } from '../../notifications'


const AddTodo = ({ addTodo }) => {
    let input;
    return (
        <div>
            <input
              ref={( node ) => {
                  input = node;
              }}
            />
            <button
              onClick={() => {
                  addTodo({text: input.value, completed: false});
                  input.value = "";
              }}
            >
    Add Todo
</button>
        </div>
    );
};
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

const enhancer = compose(
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

export default enhancer( AddTodo )
