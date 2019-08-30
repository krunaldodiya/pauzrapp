import Post from '../../models/post';
import {SET_POST} from '../actions';

interface InitialState {
  posts: Post[];
  errors: null;
  loading: boolean;
  loaded: boolean;
}

const initialState: InitialState = {
  posts: [],
  errors: null,
  loading: false,
  loaded: false,
};

const postReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case SET_POST: {
      const {post} = payload;
      const index = state.posts.findIndex(e => e.id === post.id);

      if (index === -1) {
        state.posts.push(post);
      } else {
        state.posts[index] = post;
      }

      return state;
    }

    default: {
      return state;
    }
  }
};

export default postReducer;
