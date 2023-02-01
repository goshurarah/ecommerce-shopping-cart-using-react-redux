import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../constants";

const addToCart = (productData) => {
  return {
    type: ADD_TO_CART,
    data: productData,
  };
};
const removeFromCart = (removeProductData) => {
  return {
    type: REMOVE_FROM_CART,
    data: removeProductData,
  };
};
const incrementQuantity = (incrementQuantityData) => {
  return {
    type: INCREMENT_QUANTITY,
    data: incrementQuantityData,
  };
};
const decrementQuantity = (decrementQuantityData) => {
  return {
    type: DECREMENT_QUANTITY,
    data: decrementQuantityData,
  };
};
export default addToCart;
export { removeFromCart, incrementQuantity, decrementQuantity };
