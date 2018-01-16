import { FETCH_ALL } from './action.types';

export default function itemsReducer(state, action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.items;
    default:
      return state;
  }

}
