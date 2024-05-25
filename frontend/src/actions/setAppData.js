import { ACTION_TYPE } from './actionTypes';

export const setAppData = (data) => ({
  type: ACTION_TYPE.SET_APP_DATA,
  payload: data,
});
