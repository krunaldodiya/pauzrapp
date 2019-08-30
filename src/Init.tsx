import React from 'react';
import {useSelector} from 'react-redux';
import Main from './Main';

const Init = () => {
  const reach = useSelector((state: any) => state.offline.netInfo.reach);

  if (reach != 'NONE') {
    return <Main />;
  }

  return null;
};

export default React.memo(Init);
