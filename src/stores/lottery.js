import {flow, types} from 'mobx-state-tree'; // A
import {api} from '../libs/api';
import Lottery from '../models/lottery';
import ValidationError from '../models/validation_error';
import makeRequest from '../services/make_request';

const LotteryStore = types
  .model('LotteryStore', {
    current_page: types.optional(types.integer, 0),
    last_page: types.maybeNull(types.integer),
    total: types.maybeNull(types.integer),
    winners: types.optional(types.array(Lottery), []),
    loading: false,
    errors: types.maybeNull(ValidationError),
  })
  .views(self => ({
    get allWinners() {
      return self.winners.slice();
    },
  }))
  .actions(self => ({
    getLotteryWinners: flow(function*() {
      if (self.current_page === self.last_page) return;

      self.loading = true;
      const nextPage = self.current_page + 1;

      try {
        const {data} = yield makeRequest(api.getLotteryWinners, {page: nextPage});
        const {winners, meta} = data;

        self.current_page = nextPage;
        self.last_page = meta['last_page'];
        self.total = meta['total'];

        self.winners.push(...winners);

        self.loading = false;
      } catch (error) {
        self.loading = false;
      }
    }),
  }))
  .create();

export default LotteryStore;
