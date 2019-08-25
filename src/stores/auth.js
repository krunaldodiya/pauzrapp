import {flow, types} from 'mobx-state-tree'; // A
import {api} from '../libs/api';
import makeRequest from '../services/make_request';
import UserStore from './user';

const AuthStore = types
  .model('AuthStore', {
    isDrawerToggling: false,
    isDrawerOpened: false,
    authUserId: types.maybeNull(types.number),
    fcmToken: types.maybeNull(types.string),
    loading: false,
  })
  .views(self => ({
    get authUser() {
      return self.authUserId ? UserStore.users.find(user => user.id === self.authUserId) : null;
    },
  }))
  .actions(self => ({
    setFcmToken(fcmToken) {
      self.fcmToken = fcmToken;
    },

    toggleDrawer() {
      self.isDrawerToggling = true;
      self.isDrawerOpened = !self.isDrawerOpened;
    },

    onChangeDrawer() {
      if (self.isDrawerToggling === false && self.isDrawerOpened === true) {
        self.isDrawerOpened = false;
      }

      self.isDrawerToggling = false;
    },

    getAuthUser: flow(function*() {
      self.loading = true;

      try {
        const {data} = yield makeRequest(api.me);
        const {user} = data;

        UserStore.setAuthUser(user);
        self.authUserId = user['id'];

        self.loading = false;
      } catch (error) {
        self.loading = false;
      }
    }),

    setAuthUserId(authUserId) {
      self.authUserId = authUserId;
    },
  }))
  .create();

export default AuthStore;
