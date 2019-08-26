import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import HomeContainer from './screens/home';
import IntroContainer from './screens/intro';
import PostContainer from './screens/post';
import {store} from './store';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeContainer},
    Intro: {screen: IntroContainer},
    Post: {screen: PostContainer},
  },
  {
    initialRouteName: 'Home',
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

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
