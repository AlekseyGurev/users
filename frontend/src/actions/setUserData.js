import { ACTION_TYPE } from './actionTypes';

export const setUserData = (data) => ({
  type: ACTION_TYPE.SET_USER_DATA,
  payload: data,
});
