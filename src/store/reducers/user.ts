import {CHANGE_NAME} from '../actions';

const initialState = {
  users: [{id: 1, name: 'krunal'}, {id: 2, name: 'aryan'}],
  errors: null,
  loading: false,
  loaded: false,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_NAME: {
      const foundIndex = state.users.findIndex(user => user.id == 1);

      state.users[foundIndex] = action.payload;
      state.loading = false;
      state.loaded = true;

      return state;
    }

    default:
      return state;
  }
};

export default userReducer;
