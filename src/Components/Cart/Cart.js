import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "e1", name: "Beyaynet", amount: 2, price: 13 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}

      <div className={classes.total}>
        <span>total amount</span>
        <span>12.3</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]}> Close</button>
        <button className={classes.button}> Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
