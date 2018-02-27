import React from "react";
import PropTypes from "prop-types";

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

export default AddTodo
