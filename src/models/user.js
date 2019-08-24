import { types } from 'mobx-state-tree';

const User = types.model('User', {
  id: types.integer,
  name: types.string,
  gender: types.maybeNull(types.string),
  dob: types.maybeNull(types.string),
  bio: types.maybeNull(types.string),
  avatar: types.string,
  status: types.integer,
});

export default User;
