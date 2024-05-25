import { setUsersData } from './setUsersData';

export const getUsersDataAsync = (page) => (dispatch) =>
  fetch(`https://reqres.in/api/users?page=${page}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        if (sessionStorage.getItem(`${page}`)) {
          dispatch(
            setUsersData({
              ...data,
              data: JSON.parse(sessionStorage.getItem(`${page}`)),
            })
          );
        } else {
          dispatch(setUsersData(data));
        }
      }
      return data;
    });
