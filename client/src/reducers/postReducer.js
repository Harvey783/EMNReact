import { GET_POSTS, GET_POST } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, [action.payload.id]: action.payload };
    case GET_POST:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
