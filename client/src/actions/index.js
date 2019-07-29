import axios from 'axios';
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  SET_USER,
  UPDATE_LIKES,
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_POST
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

export const deletePost = id => async dispatch => {
  await axios.delete(`/api/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
};

export const addLike = id => async dispatch => {
  const res = await axios.put(`/api/posts/like/${id}`);
  dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } });
};

export const removeLike = id => async dispatch => {
  const res = await axios.put(`/api/posts/unlike/${id}`);
  dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } });
};

export const addComment = (postId, formData) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  const res = await axios.post(
    `/api/posts/comment/${postId}`,
    formData,
    config
  );
  dispatch({ type: ADD_COMMENT, payload: res.data });
};

export const deleteComment = (postId, commentId) => async dispatch => {
  await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
  dispatch({ type: DELETE_COMMENT, payload: commentId });
};
