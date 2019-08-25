import {types} from 'mobx-state-tree';
import Post from './post';
import User from './user';

const Notification = types.model('Notification', {
  id: types.string,
  type: types.string,
  notifiable_type: types.string,
  notifiable_id: types.integer,
  when: types.string,
  read: types.optional(types.boolean, false),
  user: types.maybeNull(User),
  post: types.maybeNull(Post),
  follower: types.maybeNull(User),
  following: types.maybeNull(User),
});

export default Notification;
