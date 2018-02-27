import React, { Component } from "react";
import PropTypes from "prop-types";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import TodoList from "./TodoList";

const VisibleTodoList = ({toggleDone, filter, todos}) => (
   <div>
     { filter=='all' ? null :
       <BreadcrumbsItem to={filter}>
         {filter.charAt(0).toUpperCase() + filter.slice(1)}
       </BreadcrumbsItem>
     }
     <TodoList
       todos={todos.sort((a,b)=>a.key<b.key)}
       onTodoClick={toggleDone}
    />
  </div>
)
VisibleTodoList.propTypes = {
    filter: PropTypes.string.isRequired,
    toggleDone: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf( PropTypes.object ).isRequired,
};

export default VisibleTodoList

