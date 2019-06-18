import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <div>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/api/logout">Sign Out</a>
            </li>
          </div>
        );
    }
  }

  render() {
    return (
      <nav id="navbar">
        <h5 className="logo">
          <span className="text-primary">BUZZ</span>
          FEEDER
        </h5>
        <ul>{this.renderContent()}</ul>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
