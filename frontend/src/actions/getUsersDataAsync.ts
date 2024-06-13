import { setUsersData } from './';

export const getUsersDataAsync = (page: number) => (dispatch: any) => {
  const storage: string | null = sessionStorage.getItem(`${page}`);
  return fetch(`https://reqres.in/api/users?page=${page}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        if (storage) {
          dispatch(
            setUsersData({
              ...data,
              data: JSON.parse(storage),
            })
          );
        } else {
          dispatch(setUsersData(data));
        }
      }
      return data;
    });
};
