import { types } from 'mobx-state-tree';
import User from './user';

const Lottery = types.model('Lottery', {
  id: types.integer,
  user_id: types.integer,
  user: types.maybeNull(User),
  amount: types.integer,
  type: types.string,
  status: types.string,
  date: types.string,
  time: types.string,
});

export default Lottery;
