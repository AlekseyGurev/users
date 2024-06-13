import { ACTION_TYPE } from '../actions';

export const logout = () => ({
  type: ACTION_TYPE.SET_APP_LOGOUT,
  payload: '',
});
