export const getAuthUserSelector = (state: any) => {
  return state.auth.authUserId ? state.user.users[state.auth.authUserId] : null;
};
