import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <Link to="/" className="ui red active item">
            BUZZFEEDER
          </Link>
          <div className="ui inverted secondary menu right menu">
            <a className="ui black active item" href="/auth/google">
              Google Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
