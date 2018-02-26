import React from "react";
import { Route } from "react-router-dom";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Todo from './todo'

const App = () => (
  <div>
    <Header />
    <BreadcrumbsItem to ='/'>Home</BreadcrumbsItem>
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/todo/:filter?" component={Todo} />
  </div>
);

export default App;

