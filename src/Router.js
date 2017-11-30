import React from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './components/Main';

const BaseNavigation = StackNavigator({
  Main: { screen: Main },
}, {
  headerMode: 'none',
  initialRouteName: 'Main',
});

export default BaseNavigation;
