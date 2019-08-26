import React, {createContext} from 'react';
import {useImmerReducer} from 'use-immer';

export const defaultValue = {};
export const startingValue = {name: 'krunal'};

export const RootContext = createContext(defaultValue);

const rootReducer = (draft: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return draft.name == action.payload;

    default:
      return draft;
  }
};

const RootProvider = (props: any) => {
  const data = useImmerReducer(rootReducer, startingValue);
  return <RootContext.Provider value={data}>{...props.children}</RootContext.Provider>;
};

export default RootProvider;
