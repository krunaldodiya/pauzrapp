import {GET_AUTH_USER, GET_AUTH_USER_FAIL, GET_AUTH_USER_SUCCESS} from '../actions';

const initialState = {
  authUserId: null,
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
        loading: false,
        loaded: true,
      };
    }

    case GET_AUTH_USER_SUCCESS: {
      return {
        ...state,
        errors: null,
        loading: false,
        loaded: true,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
