import { SET_LANGUAGE, SET_TOKEN } from './types';

export const setLanguage = language => (
  dispatch => (
    dispatch({
      type: SET_LANGUAGE,
      language,
    })
  )
);

export const setToken = token => (
  dispatch => (
    dispatch({
      type: SET_TOKEN,
      token,
    })
  )
);
