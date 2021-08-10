import { FETCH_USER } from '../_actions/types';

const usersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return [...state, payload];

    default:
      return state;
  }
};

export default usersReducer;
