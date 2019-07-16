import { USER_LOADED } from '../actions/types';

// export default function(state = null, action) {
//   switch (action.type) {
//     case FETCH_USER:
//       return action.payload || false;
//     default:
//       return state;
//   }
// }

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case FETCH_USER:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     loading: false,
    //     user: payload
    //   };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    default:
      return state;
  }
}
