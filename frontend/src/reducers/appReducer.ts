import { ACTION_TYPE } from '../actions';
import { TokenType } from '../models';

const initialAppState: TokenType[] = [];

export const appReducer = (state = initialAppState, action: any) => {
  switch (action.type) {
    case ACTION_TYPE.SET_APP_DATA:
      return { ...state, ...action.payload };
    case ACTION_TYPE.SET_APP_LOGOUT:
      return initialAppState;
    default:
      return state;
  }
};
