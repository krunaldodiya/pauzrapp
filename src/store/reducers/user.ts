import {GET_AUTH_USER, GET_AUTH_USER_FAIL, GET_AUTH_USER_SUCCESS, CHANGE_NAME} from '../actions';
import User from '../../models/user';

export interface UserProvider {
  users: User[];
  errors: null | {};
  loading: boolean;
  loaded: boolean;
}

const initialState: UserProvider = {
  users: [{id: 1, name: 'krunal'}, {id: 2, name: 'aryan'}],
  errors: null,
  loading: false,
  loaded: false,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_NAME: {
      const newUsers = state.users.map(user => {
        if (user.id == 1) {
          return {...user, name: 'hello'};
        }

        return user;
      });

      return {
        ...state,
        users: newUsers,
        loading: true,
        loaded: false,
      };
    }

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

export default userReducer;
