import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter, Link } from 'react-router-dom'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'
import { withFirebase } from 'react-redux-firebase'
import { profileAvatarUrl } from './utils'


class Header extends React.Component {
  handleLogout = () => {
    this.props.firebase.logout()
    this.props.history.push('/')
  }

  render() {
    const {isSigned, signOut, profile} = this.props
    return (
      <div style={{display: 'flex', padding: 20}}>
        <img
          style={{margin: 10, height: 40}}
          src={profileAvatarUrl(profile)}
        />
        <div style={{textAlign: 'left', width: '50%'}}>
          <Breadcrumbs item={Link} separator=' / ' />
        </div>
        <div style={{textAlign: 'right', width: '50%'}}>
          { isSigned ?
            <span>
             <b>
               {profile.displayName}
               {profile.displayName && ','}
             </b>
             <span> welcome </span>
             <a href="#" onClick={this.handleLogout}>Sign out</a>
            </span>
            :
            <span>
              <Link to='/login'>Sign in</Link> &nbsp;
              <Link to='/signup'>Sign up</Link>
            </span>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({firebase: {auth, profile}}) => ({
  isSigned: !auth.isEmpty,
  profile
})

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps),
)(Header)
