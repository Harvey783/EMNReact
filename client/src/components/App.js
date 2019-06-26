import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import PostsList from './PostsList';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/posts" component={PostsList} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
