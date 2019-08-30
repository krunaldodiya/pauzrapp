const SET_POST = 'SET_POST';

const setPost = (payload: any) => {
  return {
    type: SET_POST,
    payload,
  };
};

export {SET_POST, setPost};
