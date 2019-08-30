export const getAuthUserSelector = (state: any) => {
  return state.auth.authUserId
    ? state.user.users.find((user: any) => user.id == state.auth.authUserId)
    : null;
};
