import React from "react"
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import { Link } from "react-router-dom"
import { userIsAuthenticated } from '../auth'

const Home = () => (
  <div>
    <BreadcrumbsItem to ='home'>Dashboard</BreadcrumbsItem>
    <h1>Welcome!</h1>
    <div><Link to='/account'>Account</Link></div>
    <div><Link to='/todo'>TODO</Link></div>
  </div>
);

export default userIsAuthenticated(Home)

