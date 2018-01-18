import { ADD_TO_CART, REMOVE_FROM_CART, GET_ALL_CART } from './action.types';

const initialState = {
  items: [],
  error: false,
  pending: false
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state;

    case REMOVE_FROM_CART:
      return state;
    
    case GET_ALL_CART:
      return state;
    
    default:
      return state;
  }

}
