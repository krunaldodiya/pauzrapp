const SET_USER = 'SET_USER';

const setUser = (payload: any) => {
  return {
    type: SET_USER,
    payload,
  };
};

export {SET_USER, setUser};
