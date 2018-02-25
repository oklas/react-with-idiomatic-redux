import React from "react"
import {BreadcrumbsItem} from 'react-breadcrumbs-dynamic'
import {Link} from "react-router-dom"

const Home = () => (
  <div>
    <BreadcrumbsItem to ='home'>Dashboard</BreadcrumbsItem>
    <h1>Welcome!</h1>
    <Link to='/todo'>TODO</Link>
  </div>
);

export default Home
