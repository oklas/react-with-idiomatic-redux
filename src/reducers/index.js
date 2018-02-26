import { combineReducers } from "redux";
import byId, * as fromById from "./byId";
import createList, * as fromList from "./createList";
import { reducer as form } from 'redux-form'
import { firebaseReducer as firebase } from 'react-redux-firebase'

const listByFilter = combineReducers( {
    all: createList( "all" ),
    active: createList( "active" ),
    completed: createList( "completed" ),
} );

const appReducer = combineReducers( {
    byId,
    listByFilter,
    form,
    firebase
} );

export default appReducer;

export const getVisibleTodos = (
    state,
    filter,
) => {
    const ids = fromList.getIds( state.listByFilter[ filter ] );
    return ids.map( id => fromById.getTodo( state.byId, id ) );
};

export const getIsFetching = ( state, filter ) => fromList.getIsFetching( state.listByFilter[ filter ] );
export const getErrorMessage = ( state, filter ) => fromList.getErrorMessage( state.listByFilter[ filter ] );
