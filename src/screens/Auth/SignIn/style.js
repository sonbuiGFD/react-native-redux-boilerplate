import { StyleSheet } from 'react-native';
import { width } from 'src/constants';
import colors from 'src/constants/colors';

const Style = StyleSheet.create({
  saveView: {
    backgroundColor: '#f5f8fa',
  },
  container: {
    position: 'relative',
    backgroundColor: '#f5f8fa',
    height: '100%',
    justifyContent: 'space-around',
  },
  form__wrapper: {
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 2,
    flex: 1,
  },
  logo: {
    width: 128,
    height: 168,
    marginBottom: 50,
    marginTop: 60,
    resizeMode: 'contain',
  },
  form: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  footer__link: {
    justifyContent: 'center',
    width,
    alignItems: 'center',
  },
  footer__link__text: {
    color: colors.black,
    fontSize: 14,
  },
  footer__link__text__active: {
    color: colors.main__color,
    fontSize: 14,
    fontWeight: '500',
  },
  authen__bg: {
    position: 'absolute',
    zIndex: -1,
    width,
    bottom: 0,
    left: 0,
    resizeMode: 'contain',
  },
});

export default Style;
