import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

// import { UIkit } from './components';

import Flash from './screens/Flash';

import SignIn from './screens/Auth/SignIn';
import SignUp from './screens/Auth/SignUp';
import Recovery from './screens/Auth/Recovery';
import AuthMessage from './screens/Auth/AuthMessage';

import Home from './screens/App/Home';
import News from './screens/App/News';
import Notification from './screens/App/Notification';
import Profile from './screens/App/Profile';

const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
    Recovery,
    AuthMessage,
  },
  {
    headerMode: 'none',
  },
);

const AppStack = createBottomTabNavigator(
  {
    Home,
    News,
    Notification,
    Profile,
  },
  {},
);

const SwitchStack = createSwitchNavigator({
  Flash,
  Auth: AuthStack,
  App: AppStack,
});

export default createAppContainer(SwitchStack);
