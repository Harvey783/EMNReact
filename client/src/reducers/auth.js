import { SET_USER } from '../actions/types';
import { isEmpty } from '../components/validators';
const initialState = {
  isAuthenticated: false,

  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
