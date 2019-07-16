import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';
import { getUser } from '../actions/index';
import Header from './layout/Header';
import Posts from '../components/posts/Posts';
import CreatePost from '../components/posts/CreatePost';
import Post from '../components/post/Post';

const App = () => {
  useEffect(() => {
    store.dispatch(getUser());
  }, []);

  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/new" component={CreatePost} />>
          <Route exact path="/posts/:id" component={Post} />>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
