import { useReducer } from "react";
import CartContex from "./Cart-context";

const defaultCartState = { items: 0, totalAmount: 0 };

const cardReducer = (state, action) => {
  if (action.type == "ADD") {
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updateItems, totalAmount: updateTotalAmount };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cardReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

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
