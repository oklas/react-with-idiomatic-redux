import { combineReducers } from "redux";
import { reducer as form } from 'redux-form'
import { firebaseReducer as firebase } from 'react-redux-firebase'

const appReducer = combineReducers( {
    form,
    firebase
} );

export default appReducer;