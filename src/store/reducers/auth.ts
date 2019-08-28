import {GET_AUTH_USER, GET_AUTH_USER_FAIL, GET_AUTH_USER_SUCCESS} from '../actions';

const initialState = {
  authUserId: null,
  errors: null,
  loading: false,
  loaded: false,
};

const authReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case GET_AUTH_USER: {
      state.loading = true;
      state.loaded = false;
      return state;
    }

    case GET_AUTH_USER_FAIL: {
      state.errors = payload.errors;
      state.loading = false;
      state.loaded = true;
      return state;
    }

    case GET_AUTH_USER_SUCCESS: {
      state.authUserId = payload.user.id;
      state.loading = false;
      state.loaded = true;
      return state;
    }

    default:
      return state;
  }
};

export default authReducer;
