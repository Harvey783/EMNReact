import axios from 'axios';
import {
  FETCH_USER,
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_LIKES
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const getPosts = () => async dispatch => {
  const res = await axios.get('/api/posts');
  dispatch({ type: GET_POSTS, payload: res.data });
};

export const getPost = _id => async dispatch => {
  const res = await axios.get(`/api/posts/${_id}`);

  dispatch({ type: GET_POST, payload: res.data });
};

export const createPost = (formValues, history) => async dispatch => {
  const res = await axios.post('/api/posts', { ...formValues });
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
