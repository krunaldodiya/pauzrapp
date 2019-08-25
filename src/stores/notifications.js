import {flow, types} from 'mobx-state-tree'; // A
import {api} from '../libs/api';
import Notification from '../models/notification';
import ValidationError from '../models/validation_error';
import makeRequest from '../services/make_request';

const NotificationStore = types
  .model('NotificationStore', {
    current_page: types.optional(types.integer, 0),
    last_page: types.maybeNull(types.integer),
    total: types.maybeNull(types.integer),
    notifications: types.optional(types.array(Notification), []),
    loading: false,
    errors: types.maybeNull(ValidationError),
  })
  .views(self => ({
    get allNotifications() {
      return self.notifications.slice();
    },
  }))
  .actions(self => ({
    getNotifications: flow(function*() {
      if (self.current_page === self.last_page) return;

      self.loading = true;
      const nextPage = self.current_page + 1;

      try {
        const {data} = yield makeRequest(api.getNotifications, {page: nextPage});
        const {notifications, meta} = data;

        self.current_page = nextPage;
        self.last_page = meta['last_page'];
        self.total = meta['total'];

        self.notifications.push(...notifications);

        self.loading = false;
      } catch (error) {
        self.loading = false;
      }
    }),
  }))
  .create();

export default NotificationStore;
