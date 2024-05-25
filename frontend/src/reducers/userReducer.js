import { ACTION_TYPE } from '../actions';

const initialUserState = [];

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
