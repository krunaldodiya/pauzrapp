import { types } from 'mobx-state-tree';

const ValidationError = types.model('ValidationError', {
  message: types.string,
  code: types.integer,
});

export default ValidationError;
