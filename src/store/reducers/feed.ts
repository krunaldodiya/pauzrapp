import {GET_FEEDS_SUCCESS} from '../actions';

interface InitialState {
  feeds: any[];
  meta: {};
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: InitialState = {
  feeds: [],
  meta: {},
  errors: null,
  loading: false,
  loaded: false,
};

const postReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case GET_FEEDS_SUCCESS: {
      const {feeds, meta} = payload;
      state.feeds.push(Object.keys(feeds));
      state.meta = meta;
    }

    default: {
      return state;
    }
  }
};

export default postReducer;
