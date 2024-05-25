import { ACTION_TYPE } from './actionTypes';

export const setUsersData = (data) => ({
  type: ACTION_TYPE.SET_USERS_DATA,
  payload: data,
});
