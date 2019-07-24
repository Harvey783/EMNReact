import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import auth from './reducers/auth';
import post from './reducers/post';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ auth, post }),
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
