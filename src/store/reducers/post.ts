import {GET_FEEDS_SUCCESS} from '../actions';

interface InitialState {
  posts: any;
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: InitialState = {
  posts: {},
  errors: null,
  loading: false,
  loaded: false,
};

const postReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case GET_FEEDS_SUCCESS: {
      const {feeds} = payload;
      state.posts = Object.assign(state.posts, feeds);
      return state;
    }

    default: {
      return state;
    }
  }
};

export default postReducer;
