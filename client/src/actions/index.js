import axios from 'axios';
import { FETCH_USER, GET_POSTS, GET_POST } from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current-user');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const getPosts = () => async dispatch => {
  const response = await axios.get('/posts');
  dispatch({ type: GET_POSTS, payload: response.data });
};

export const getPost = id => async dispatch => {
  const response = await axios.get(`/posts/${id}`);
  dispatch({ type: GET_POST, payload: response.data });
};
