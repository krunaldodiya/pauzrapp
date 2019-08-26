import React, {createContext} from 'react';
import {useImmerReducer} from 'use-immer';
import userReducer from '../reducers/user';

export const defaultValue = {};
export const startingValue = {
  users: [{id: 1, name: 'krunal'}, {id: 2, name: 'kalpit'}],
};

export const UserContext = createContext(defaultValue);

const UserProvider = (props: any) => {
  const data = useImmerReducer(userReducer, startingValue);
  return <UserContext.Provider value={data}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
