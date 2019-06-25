import { GET_POSTS, GET_POST } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: payload };
    case GET_POST:
      return { ...state, post: payload };
    default:
      return state;
  }
};
