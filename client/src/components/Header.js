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
          <li>
            <a href="/posts">New Post</a>
            <a href="/api/logout">Sign Out</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav id="navbar">
        <h5 className="logo">
          <a href="/">
            <span className="text-primary">Reddit</span>
          </a>
          Lite
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
