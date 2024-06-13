import { ACTION_TYPE } from './actionTypes';
import { AuthType } from '../models';

export const setUsersData = (data: AuthType) => ({
  type: ACTION_TYPE.SET_USERS_DATA,
  payload: data,
});
