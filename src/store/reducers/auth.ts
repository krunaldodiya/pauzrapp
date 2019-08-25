import {GET_AUTH_USER, GET_AUTH_USER_FAIL, GET_AUTH_USER_SUCCESS} from '../actions';
import AuthProvider from '../providers/auth';

const initialState: AuthProvider = {
  authUserId: 1,
  authUser: null,
  errors: null,
  loading: false,
  loaded: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_AUTH_USER: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case GET_AUTH_USER_FAIL: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case GET_AUTH_USER_SUCCESS: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
