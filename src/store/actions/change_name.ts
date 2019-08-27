import User from '../../models/user';

const CHANGE_NAME = 'CHANGE_NAME';

const changeName = (payload: User) => {
  return {
    type: CHANGE_NAME,
    payload,
  };
};

export {CHANGE_NAME, changeName};
