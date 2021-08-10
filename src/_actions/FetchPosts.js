import { FETCH_POSTS } from './types';
import jsonPlaceholder from '../apis/jsonPlaceholder';

/*export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: FECTH_POSTS,
      payload: response,
    });
  };
};*/

// Get posts
export const fetchPosts = () => async dispatch => {
  try {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: FETCH_POSTS,
      payload: response.data,
    });
  } catch (err) {}
};
