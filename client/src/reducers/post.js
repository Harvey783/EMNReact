import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_LIKES
} from '../actions/types';
import _ from 'lodash';

const initialState = {
  posts: [],
  post: null,
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        // ..._.mapKeys(action.payload, '_id'),
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === action.payload.id
            ? { ...post, likes: action.payload.likes }
            : post
        ),
        loading: false
      };
    default:
      return state;
  }
}
