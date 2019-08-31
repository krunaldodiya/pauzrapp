import {GET_AUTH_USER_SUCCESS} from '../actions';

interface InitialState {
  users: any;
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: InitialState = {
  users: {},
  errors: null,
  loading: false,
  loaded: false,
};

const userReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case GET_AUTH_USER_SUCCESS: {
      const {user} = payload;
      state.users[user.id] = user;
      return state;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
