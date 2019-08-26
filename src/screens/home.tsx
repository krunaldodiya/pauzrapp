import {createMaterialTopTabNavigator} from 'react-navigation';
import FocusContainer from '../screens/focus';
import FunContainer from '../screens/fun';

const Tabs = createMaterialTopTabNavigator(
  {
    Focus: FocusContainer,
    Fun: FunContainer,
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
    },
  }
);

export default Tabs;
