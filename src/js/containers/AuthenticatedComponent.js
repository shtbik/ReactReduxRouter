import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {
    render() {
      return (
        <div>
          {this.props.user.isAuthenticated === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}