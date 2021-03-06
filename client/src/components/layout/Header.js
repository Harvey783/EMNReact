import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/index';

const Header = ({ auth, logoutUser }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </li>
    </ul>
  );
  const publicLinks = (
    <ul>
      <li>
        <a className="navbar-links" href="/auth/google">
          Login with Google
        </a>
      </li>
    </ul>
  );

  return (
    <nav id="navbar">
      <h5 className="logo">
        <Link to="/">
          <span className="text-primary">Say</span>
        </Link>
        Something
      </h5>

      <Fragment>{auth.isAuthenticated ? authLinks : publicLinks}</Fragment>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = { logoutUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
