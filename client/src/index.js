// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// );

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { SET_USER } from './actions/types';
import App from './components/App';

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector('#root')
    );
    hasRendered = true;
  }
};

axios.get('/api/current-user').then(res => {
  store.dispatch({ type: SET_USER, payload: res.data });
  renderApp();
});
