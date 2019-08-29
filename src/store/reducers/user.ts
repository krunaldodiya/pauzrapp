import User from '../../models/user';
import {SET_USER} from '../actions';

interface InitialState {
  users: User[];
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: InitialState = {
  users: [],
  errors: null,
  loading: false,
  loaded: false,
};

const userReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case SET_USER: {
      const {user} = payload;
      const index = state.users.findIndex(e => e.id === user.id);

      if (index === -1) {
        state.users.push(user);
      } else {
        state.users[index] = user;
      }

      return state;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
