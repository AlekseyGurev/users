import { ACTION_TYPE } from './actionTypes';

export const updateUsersData = (data) => ({
  type: ACTION_TYPE.UPDATE_USERS_DATA,
  payload: data,
});
