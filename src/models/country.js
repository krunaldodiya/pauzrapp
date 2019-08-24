import { types } from 'mobx-state-tree';

const Country = types.model('Country', {
  id: types.integer,
  name: types.string,
  shortname: types.string,
  phonecode: types.string,
});

export default Country;
