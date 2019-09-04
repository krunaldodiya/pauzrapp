import {createSelector} from 'reselect';

const feedsSelector = (state: any) => state;

const getListByKey = (items: any) => {
  return Object.keys(items)
    .map(key => items[key])
    .sort((a: any, b: any) => b.id - a.id);
};

export default createSelector(
  feedsSelector,
  getListByKey
);
