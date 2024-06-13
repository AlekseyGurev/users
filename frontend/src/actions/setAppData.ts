import { ACTION_TYPE } from './actionTypes';
import { TokenType } from '../models';

export const setAppData = (data: TokenType) => ({
  type: ACTION_TYPE.SET_APP_DATA,
  payload: data,
});
