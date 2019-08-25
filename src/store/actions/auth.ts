const GET_AUTH_USER = 'GET_AUTH_USER';
const GET_AUTH_USER_SUCCESS = 'GET_AUTH_USER_SUCCESS';
const GET_AUTH_USER_FAIL = 'GET_AUTH_USER_FAIL';

const getAuthUser = (payload: any) => {
  return {
    type: GET_AUTH_USER,
    payload,
  };
};

const getAuthUserSuccess = (payload: any) => {
  return {
    type: GET_AUTH_USER_SUCCESS,
    payload,
  };
};

const getAuthUserFail = (payload: any) => {
  return {
    type: GET_AUTH_USER_FAIL,
    payload,
  };
};

export {
  GET_AUTH_USER,
  GET_AUTH_USER_SUCCESS,
  GET_AUTH_USER_FAIL,
  getAuthUser,
  getAuthUserSuccess,
  getAuthUserFail,
};
