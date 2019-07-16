import { SET_USER } from '../actions/types';
import { isEmpty } from '../components/validators';
const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
