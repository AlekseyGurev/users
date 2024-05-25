import { setUserData } from './setUserData';

export const getUserDataAsync = (id) => (dispatch) =>
  fetch(`https://reqres.in/api/users/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        dispatch(setUserData(data));
      }
      return data;
    });
