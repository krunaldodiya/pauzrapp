const CHANGE_NAME = 'CHANGE_NAME';

const changeName = (payload: any) => {
  return {
    type: CHANGE_NAME,
    payload,
  };
};

export {CHANGE_NAME, changeName};
