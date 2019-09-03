import React, {useEffect, useState} from 'react';
import {createAppContainer} from 'react-navigation';
import getStackNavigator from './Route';
import {getInitialRoute} from './services/auth';

const Main = () => {
  const [initialRoute, setInitialRoute] = useState('Splash');

  useEffect(() => {
    getInitialRoute()
      .then(initialRoute => setInitialRoute(initialRoute ? initialRoute : 'Intro'))
      .catch(e => console.log(e));
  }, []);

  const AppNavigator = getStackNavigator(initialRoute);
  const AppContainer = createAppContainer(AppNavigator);

  return <AppContainer />;
};

export default React.memo(Main);
