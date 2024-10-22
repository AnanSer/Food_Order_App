import CartContex from "./Cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
