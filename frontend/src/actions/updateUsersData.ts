import { AuthType } from '../models';
import { ACTION_TYPE } from './actionTypes';

export const updateUsersData = (data: AuthType) => ({
  type: ACTION_TYPE.UPDATE_USERS_DATA,
  payload: data,
});
