import { connect } from "react-redux";
import addToCart, { removeFromCart, incrementQuantity, decrementQuantity } from "../Services/Actions/action.js";

import ProductPage from "../Components/ProductPage.jsx";
import CartPage from "../Components/CartPage.jsx";

const mapState = (state) => ({ Data: state.cartItems.cart });

const mapDispatch = (dispatch) => ({
  addToCartHandler: (productData) => dispatch(addToCart(productData)),
  removeFromCartHandler: (removeProductData) => dispatch(removeFromCart(removeProductData)),
  incrementQuantityHandler: (incrementQuantityData) => dispatch(incrementQuantity(incrementQuantityData)),
  decrementQuantityHandler: (decrementQuantityData) => dispatch(decrementQuantity(decrementQuantityData))
});
export default connect(mapState, mapDispatch)(ProductPage);
export const ConnectCartPage = connect(mapState, mapDispatch)(CartPage);
// export default ProductPage;
