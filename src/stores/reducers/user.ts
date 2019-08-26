const userReducer = (draft: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      draft.name = action.payload;
      break;
    }

    case 'CHANGE_EMAIL': {
      draft.email = action.payload;
      break;
    }

    default: {
      break;
    }
  }
};

export default userReducer;
