import { SET_LANGUAGE, SET_TOKEN } from '.././actions/types';

const initialState = {
  language: 'en',
  token: null,
  logTime: null,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language,
      });
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token,
        logTime: new Date().getTime(),
      });
    default:
      return state;
  }
}
