import axios from 'axios';
import {
  FETCH_USER,
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  USER_LOADED
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loadUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: USER_LOADED, payload: res.data });
};

export const getPosts = () => async dispatch => {
  const res = await axios.get('/api/posts');
  dispatch({ type: GET_POSTS, payload: res.data });
};

export const getPost = id => async dispatch => {
  const res = await axios.get(`/api/posts/${id}`);
  dispatch({ type: GET_POST, payload: res.data });
};

export const createPost = (formData, history) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const res = await axios.post('/api/posts', formData, config);
  dispatch({ type: CREATE_POST, payload: res.data });
  history.push('/');
};
