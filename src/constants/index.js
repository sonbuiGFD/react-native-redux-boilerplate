import { Dimensions, StatusBar, Platform } from 'react-native';
import packageJson from '../../package.json';

const { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const heightWithStatusBar = !StatusBar.currentHeight
  ? height - STATUSBAR_HEIGHT
  : height - StatusBar.currentHeight;

export {
  width, height, heightWithStatusBar, packageJson, STATUSBAR_HEIGHT,
};
