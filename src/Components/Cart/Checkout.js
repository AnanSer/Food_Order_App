import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div>
        <label className={classes.control}>Your Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label className={classes.control}>Street</label>
        <input type="text" id="street" />
      </div>

      <div>
        <label className={classes.control}>Postal Code</label>
        <input type="text" id="postal" />
      </div>

      <div>
        <label className={classes.control}>City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
