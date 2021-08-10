import _ from 'lodash';

import { fetchUser } from './FetchUsers';
import { fetchPosts } from './FetchPosts';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  try {
    await dispatch(fetchPosts());

    /*const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));*/

    // Equal
    _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach(id => dispatch(fetchUser(id)))
      .value();
  } catch (err) {}
};
