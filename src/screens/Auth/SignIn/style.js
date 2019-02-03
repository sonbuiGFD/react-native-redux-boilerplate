import { StyleSheet, Platform } from 'react-native';
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
    marginBottom: 25,
    marginTop: 30,
    resizeMode: 'contain',
  },
  form: {
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
          height: 1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  form__title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.main__color,
    marginBottom: 28,
  },
  form__item: {
    borderRadius: 4,
    marginBottom: 10,
  },
  form__icon: {
    color: '#c4c4c4',
  },

  form__icon__password: {
    fontSize: 30,
  },

  form__input: {
    height: 40,
    color: colors.border__color,
  },

  form__controls: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
  },

  form__remember: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  form__remember__checkbox: {
    marginRight: 4,
    fontSize: 28,
    color: colors.border__color,
  },
  form__remember__label: {
    fontSize: 16,
    color: colors.black,
  },

  form__forgot__label: {
    fontSize: 16,
    color: colors.main__color,
    fontWeight: '600',
  },

  form__cta: {
    marginTop: 20,
  },

  form__cta__label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
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
    marginLeft: 5,
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
