import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import PostsList from './PostsList';
import PostCreate from './PostCreate';
import Post from './Post';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={PostsList} />
            <Route path="/posts/new" exact component={PostCreate} />
            <Route path="/posts/:id" exact component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
