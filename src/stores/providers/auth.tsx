import React, {createContext} from 'react';
import {useImmerReducer} from 'use-immer';
import authReducer from '../reducers/auth';

export const defaultValue = {};
export const startingValue = {name: 'krunal'};
export const AuthContext = createContext(defaultValue);

const AuthProvider = (props: any) => {
  const data = useImmerReducer(authReducer, startingValue);
  return <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
