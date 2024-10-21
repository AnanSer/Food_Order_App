import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "e1", name: "Beyaynet", amount: 2, price: 13 }].map((item) => (
        <li>item.name</li>
      ))}
    </ul>
  );
  return (
    <div className={classes["cart-items"]}>
      {cartItems}

      <div className={classes.total}>
        <span>total amount</span>
        <span>12.3</span>
      </div>

      <div className={classes.action}>
        <button> Order</button>
        <button> Close</button>
      </div>
    </div>
  );
};

export default Cart;
