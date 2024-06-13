import { ACTION_TYPE } from '../actions';
import { UserData } from '../models';

const initialUsersState: any = [];

export const usersReducer = (state = initialUsersState, action: any) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USERS_DATA:
      return { ...state, ...action.payload };
    case ACTION_TYPE.UPDATE_USERS_DATA:
      return {
        ...state,
        data: state.data.map((user: UserData) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};
