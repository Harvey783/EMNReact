import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul className="header">
      <li>
        <Link className="title" to="/posts/new">
          NewPost
        </Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="header">
      <li>
        <Link to="/auth/google">Login</Link>
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
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Header);
