import {createStore, applyMiddleware} from "redux";
import { compose } from 'recompose'
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import firebase from 'firebase'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import appReducer from "./reducers";
import {
  firebase as fbConfig,
  reduxFirebase as reduxConfig,
  checkFirebase
} from './config'


const configureStore = () => {

  const enhancers = []

  const middlewares = [
    thunk.withExtraArgument(getFirebase)
    // This is where you add other middleware like redux-observable
  ]

  checkFirebase(fbConfig)
  firebase.initializeApp(fbConfig)


  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  /* eslint-disable no-underscore-dangle */
  return createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
      // pass firebase or app instance and config
      reactReduxFirebase(firebase, reduxConfig),
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );
  /* eslint-enable */
};

export default configureStore;
