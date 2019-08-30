const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

const getPosts = (payload: any) => {
  return {
    type: GET_POSTS,
    payload,
  };
};

const getPostsSuccess = (payload: any) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload,
  };
};

const getPostsFail = (payload: any) => {
  return {
    type: GET_POSTS_FAIL,
    payload,
  };
};

export {GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL, getPosts, getPostsSuccess, getPostsFail};
