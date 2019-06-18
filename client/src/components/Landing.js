import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div>
        <header id="showcase">
          <div className="showcase-content">
            <h5 className="l-heading">Tech-Stack</h5>
            <p className="lead">
              A frontend utilizing React for dynamic UIs, Redux for state
              management, React Router for navigation, and Redux-Thunk for
              asynchronous actions. Underlying the client-side is a Node.js
              backend consisting of an Express web application framework with
              Passport middleware for authentication, and MongoDB Atlas for
              cloud database management.
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Landing;
