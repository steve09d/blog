import { FETCH_POSTS } from '../_actions/types';

const postsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS:
      return payload;

    default:
      return state;
  }
};
export default postsReducer;
