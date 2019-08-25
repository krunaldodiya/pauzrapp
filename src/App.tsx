import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import HomeContainer from './containers/home';
import IntroContainer from './containers/intro';
import PostContainer from './containers/post';
import ProfileContainer from './containers/profile';
import {store} from './store';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeContainer},
    Intro: {screen: IntroContainer},
    Post: {screen: PostContainer},
    Profile: {screen: ProfileContainer},
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
