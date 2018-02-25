import React from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {Breadcrumbs} from 'react-breadcrumbs-dynamic';

const Header = ({auth, history}) => (
  <div style={{display: 'flex'}}>
    <div style={{textAlign: 'left', width: '50%'}}>
      <Breadcrumbs item={Link} separator=' / ' />
    </div>
    <div style={{textAlign: 'right', width: '50%'}}>
      AUTH
    </div>
  </div>
);

const mapStateToProps = ({auth}) => ({auth})

export default withRouter(connect(mapStateToProps)(Header));
