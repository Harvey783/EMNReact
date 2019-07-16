import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/index';

const Header = ({ auth, logoutUser }) => {
  const authLinks = (
    <ul className="header">
      <li>
        <Link className="title" to="/posts/new">
          NewPost
        </Link>
      </li>
      <li>
        <Link className="title" onClick={logoutUser}>
          Logout
        </Link>
      </li>
    </ul>
  );
  const publicLinks = (
    <ul className="header">
      <li>
        <a href="/auth/google">Login with Google</a>
      </li>
    </ul>
  );

  return (
    <nav id="navbar">
      <h5 className="logo">
        <Link to="/">
          <span className="text-primary">Reddit</span>
        </Link>
        Lite
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
