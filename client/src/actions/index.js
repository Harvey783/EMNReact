import axios from 'axios';
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  SET_USER,
  UPDATE_LIKES
} from './types';

export const logoutUser = () => dispatch => {
  axios.get('/api/logout');
  dispatch({ type: SET_USER, payload: {} });
};

export const getUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: SET_USER, payload: res.data });
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

export const addLike = id => async dispatch => {
  const res = await axios.put(`/api/posts/like/${id}`);
  dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } });
};

export const removeLike = id => async dispatch => {
  const res = await axios.put(`/api/posts/unlike/${id}`);
  dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } });
};
