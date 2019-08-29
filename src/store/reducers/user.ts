import User from '../../models/user';

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
    case 'ADD_USER': {
      state.users.push({id: 1, name: 'krunal', status: true});
      return state;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
