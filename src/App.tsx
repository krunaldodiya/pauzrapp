import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: require('./screens/home').default},
    Intro: {screen: require('./screens/intro').default},
    Post: {screen: require('./screens/post').default},
  },
  {
    initialRouteName: 'Post',
    defaultNavigationOptions: () => {
      return {
        header: null,
      };
    },
  }
);

class App extends React.PureComponent {
  render() {
    const AppContainer = createAppContainer(AppNavigator);
    return <AppContainer />;
  }
}

export default App;
