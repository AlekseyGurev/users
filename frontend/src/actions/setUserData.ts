import { ACTION_TYPE } from './actionTypes';
import { AuthType } from '../models';
export const setUserData = (data: AuthType) => ({
  type: ACTION_TYPE.SET_USER_DATA,
  payload: data,
});
