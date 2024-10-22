import CartContex from "./Cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const CartContext = {
    item: [],
    total: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
