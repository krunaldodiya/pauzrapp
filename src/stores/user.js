import {types} from 'mobx-state-tree'; // A
import User from '../models/user';

const UserStore = types
  .model('UserStore', {
    users: types.array(User),
  })
  .views(self => ({
    get allUsers() {
      return self.users.slice();
    },
  }))
  .actions(self => ({
    updateUser(userId, userData) {
      self.users = self.users.map(user => {
        return user.id === userId ? userData : user;
      });
    },

    setAuthUser(user) {
      self.users.push(user);
    },
  }))
  .create();

export default UserStore;
