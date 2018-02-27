import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, withHandlers } from 'recompose'
import { populate, firebaseConnect } from 'react-redux-firebase'
import { withRouter } from "react-router";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { withNotifications } from '../../notifications'
import { spinnerWhileLoading } from '../../utils'
import TodoList from "./TodoList";
import FetchError from "../FetchError";

const VisibleTodoList = ({toggleTodo, filter, todos}) => (
   <div>
     { filter=='all' ? null :
       <BreadcrumbsItem to={filter}>
         {filter.charAt(0).toUpperCase() + filter.slice(1)}
       </BreadcrumbsItem>
     }
     <TodoList
       todos={todos}
       onTodoClick={toggleTodo}
    />
  </div>
)
VisibleTodoList.propTypes = {
    filter: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf( PropTypes.object ).isRequired,
};

const populates = [{ child: 'createdBy', root: 'users' }]

const enhancer = compose(
  withNotifications,
  withRouter,
  connect( ( {
    firebase,
    firebase: { auth, /*data: { projects } */ },
  },
  {
    match: { params }
  }) => ({
    auth,
    todos: Object.values(
      populate(firebase, 'todos', populates) || {}
    ),
    filter:
      params.filter !== "active" && params.filter !== "completed" ?
        'all' : params.filter,
    }),
  ),
  firebaseConnect(({filter}) => [{
    path:'todos',
    queryParams: [
      'orderByChild=completed',
      filter=='all' ? '' : 'equalTo=' + (filter=='completed')
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
     )
  })
)

export default enhancer( VisibleTodoList )

