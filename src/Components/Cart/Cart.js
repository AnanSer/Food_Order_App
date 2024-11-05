import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = ` ${cartCtx.totalAmount.toFixed(2)} `;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://react-5-http-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        {" "}
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          {" "}
          Order
        </button>
      )}
    </div>
  );

  const cardModalContent = (
    <React.Fragment>
      {cartItems}

      <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount} birr</span>
      </div>

      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}

      {!isCheckout && modalAction}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>sending the data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>submitted successfully</p>{" "}
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          {" "}
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cardModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
