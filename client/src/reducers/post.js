import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_LIKES,
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_POST
} from '../actions/types';

const initialState = {
  posts: [],
  post: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === action.payload.id
            ? { ...post, likes: action.payload.likes }
            : post
        )
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: action.payload }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            comment => comment._id !== action.payload
          )
        }
      };
    default:
      return state;
  }
}
