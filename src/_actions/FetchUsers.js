import { FETCH_USER } from './types';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchUser = id => async dispatch => {
  try {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
      type: FETCH_USER,
      payload: response.data,
    });
  } catch (err) {
    console.log('Error: ', err);
  }
};
