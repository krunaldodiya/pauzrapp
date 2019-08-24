import {types} from 'mobx-state-tree';
import User from './user';

const Post = types.model('Post', {
  id: types.integer,
  user_id: types.integer,
  owner: types.maybeNull(User),
  description: types.maybeNull(types.string),
  url: types.string,
  when: types.string,
  type: types.optional(types.maybeNull(types.string)),
});

export default Post;
