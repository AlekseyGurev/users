import { ACTION_TYPE } from '../actions';
import { UserData } from '../models';

const initialUserState: UserData[] = [];

export const userReducer = (state = initialUserState, action: any) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
