import { setAppData } from './setAppData';

export const sendAuthDataAsync = (data, type) => (dispatch) =>
  fetch(`https://reqres.in/api/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.error) {
        dispatch(setAppData(data));
      }
      return data;
    });
