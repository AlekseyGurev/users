import { ACTION_TYPE } from '../actions';

const initialUsersState = [];

export const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USERS_DATA:
      return { ...state, ...action.payload };
    case ACTION_TYPE.UPDATE_USERS_DATA:
      return {
        ...state,
        data: state.data.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};
