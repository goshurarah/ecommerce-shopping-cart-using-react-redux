import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../constants";

const initialState = { cart: [] };

const cartItems = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.data],
      };

    case REMOVE_FROM_CART:
      return {
        cart: [
          ...state.cart.filter(
            (filterItem) => filterItem.id !== action.data.id
          ),
        ],
      };

    case INCREMENT_QUANTITY:
      return {
        cart: [...state.cart.map((items) => {
          if (items.id === action.data.id) {
            items.quantity = items.quantity + 1
            items.totalPrice = items.price * items.quantity
            return items
          }
          return items
        })]

      };

    case DECREMENT_QUANTITY:
      return {
        cart: [...state.cart.map((items) => {
          if (items.id === action.data.id && items.quantity > 1) {
            items.quantity = items.quantity - 1
            items.totalPrice = items.price * items.quantity
            return items
          }
          return items
        })]
      };

    default:
      return state;
  }
};
export default cartItems;
