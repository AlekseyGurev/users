import { ACTION_TYPE } from '../actions';

const initialAppState = [];

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_APP_DATA:
      return { ...state, ...action.payload };
    case ACTION_TYPE.SET_APP_LOGOUT:
      return initialAppState;
    default:
      return state;
  }
};
