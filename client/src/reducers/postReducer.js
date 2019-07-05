import { GET_POSTS, GET_POST, CREATE_POST } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    case GET_POST:
      return { ...state.post, [action.payload._id]: action.payload };
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
