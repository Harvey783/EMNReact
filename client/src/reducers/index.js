import authReducer from './authReducer';
import postReducer from './postReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  posts: postReducer
});
