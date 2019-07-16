// import { GET_POSTS, GET_POST } from '../actions/types';
// import _ from 'lodash';

// export default (state = {}, action) => {
//   switch (action.type) {
//     case GET_POSTS:
//       return { ...state, ..._.mapKeys(action.payload, '_id') };
//     case GET_POST:
//       return { ...state, [action.payload.id]: action.payload };
//     default:
//       return state;
//   }
// };

import { GET_POSTS, GET_POST, CREATE_POST } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };

    default:
      return state;
  }
}
