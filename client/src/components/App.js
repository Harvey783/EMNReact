import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';
import { getUser } from '../actions/index';
import Header from './layout/Header';
import Posts from '../components/posts/Posts';
import CreatePost from '../components/posts/CreatePost';

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
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
