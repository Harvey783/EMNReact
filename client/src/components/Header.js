import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="ui black active item">
            Login With Google
          </a>
        );
      default:
        return (
          <ul>
            <li>
              <a href="/api/logout" className="ui black active item">
                Logout
              </a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <Link to="/" className="ui red active item">
            BUZZFEEDER
          </Link>
          <div className="ui inverted secondary menu right menu">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
