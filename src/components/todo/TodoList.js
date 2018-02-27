import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ( {
    todos,
    onTodoClick,
} ) => (
    <ul>
        {todos && todos.map( todo =>
            <Todo
              key={todo.id}
              {...todo.value}
              onClick={() => onTodoClick( todo )}
            />
        )}
    </ul>
);
TodoList.propTypes = {
    todos: PropTypes.arrayOf( PropTypes.object ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

export default TodoList
