import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import * as actions from "../../actions";
import { getVisibleTodos, getIsFetching, getErrorMessage } from "../../reducers";
import TodoList from "./TodoList";
import FetchError from "../FetchError";

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate( prevProps ) {
        if ( this.props.filter !== prevProps.filter ) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props;
        fetchTodos( filter );
    }

    render() {
        const { toggleTodo, filter, todos, isFetching, errorMessage } = this.props;

        if ( isFetching && !todos.length ) {
            return <p>Loading...</p>;
        }

        if ( errorMessage && !todos.length ) {
            return (
                <FetchError
                  message={errorMessage}
                  onRetry={() => this.fetchData()}
                />
            );
        }

        return (
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
        );
    }
}
VisibleTodoList.propTypes = {
    filter: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    todos: PropTypes.arrayOf( PropTypes.object ).isRequired,
    fetchTodos: PropTypes.func.isRequired,
};
VisibleTodoList.defaultProps = {
    errorMessage: "",
};

const mapStateToProps = ( state, { match: { params } } ) => {
    let filter = "";
    if ( !params.filter === undefined ) {
        filter = "all";
    } else if ( params.filter !== "all" && params.filter !== "active" && params.filter !== "completed" ) {
        filter = "all";
    } else {
        filter = params.filter;
    }

    return {
        todos: getVisibleTodos(
                state,
                filter
            ),
        isFetching: getIsFetching( state, filter ),
        errorMessage: getErrorMessage( state, filter ),
        filter,
    };
};

const VisibleTodoListWithRouter = withRouter( connect(
    mapStateToProps,
    actions,
)( VisibleTodoList ) );

export default VisibleTodoListWithRouter;
