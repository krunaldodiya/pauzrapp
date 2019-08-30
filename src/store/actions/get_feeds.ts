const GET_FEEDS = 'GET_FEEDS';
const GET_FEEDS_SUCCESS = 'GET_FEEDS_SUCCESS';
const GET_FEEDS_FAIL = 'GET_FEEDS_FAIL';

const getFeeds = (payload: any) => {
  return {
    type: GET_FEEDS,
    payload,
  };
};

const getFeedsSuccess = (payload: any) => {
  return {
    type: GET_FEEDS_SUCCESS,
    payload,
  };
};

const getFeedsFail = (payload: any) => {
  return {
    type: GET_FEEDS_FAIL,
    payload,
  };
};

export {GET_FEEDS, GET_FEEDS_SUCCESS, GET_FEEDS_FAIL, getFeeds, getFeedsSuccess, getFeedsFail};
