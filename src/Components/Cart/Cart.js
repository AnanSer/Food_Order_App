import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = ` ${cartCtx.totalAmount.toFixed(2)} `;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  async function fetchFoodOrders(foods) {
    const response = await fetch(
      "https://react-5-http-default-rtdb.firebaseio.com/foods.json"
    );
    const data = await response.json();

    const loadedFoods = [];

    for (const key in data) {
      loadedFoods.push({
        key,
      });
    }
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          {" "}
          Close
        </button>
        {hasItems && <button className={classes.button}> Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
