import React, {createContext} from 'react';
import {useImmerReducer} from 'use-immer';
import rootReducer from '../reducers/root';

export const defaultValue = {};
export const startingValue = {name: 'krunal'};
export const RootContext = createContext(defaultValue);

const RootProvider = (props: any) => {
  const data = useImmerReducer(rootReducer, startingValue);
  return <RootContext.Provider value={data}>{props.children}</RootContext.Provider>;
};

export default RootProvider;
