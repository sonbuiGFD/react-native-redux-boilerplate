import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.red1,
    height: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 12,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default style;
