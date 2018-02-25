import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ThroughProvider } from 'react-through';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const Root = ( { store } ) => (
  <Provider store={store}>
    <Router>
      <ThroughProvider>
        <App />
      </ThroughProvider>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.oneOfType( [
    PropTypes.func.isRequired,
      PropTypes.object.isRequired,
  ] ).isRequired,
};

export default Root;
