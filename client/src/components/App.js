import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser } from '../actions/index';
import store from '../store';
import Header from './layout/Header';
import Posts from '../components/posts/Posts';
import CreatePost from '../components/posts/CreatePost';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/new" component={CreatePost} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
