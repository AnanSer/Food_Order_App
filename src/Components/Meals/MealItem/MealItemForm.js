import { useRef, useState } from "react";

import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const amountInputRef = useRef();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        useRef={amountInputRef}
        label="Amount"
        input={{
          id: "Amount",
          type: Number,
          min: 1,
          max: 5,
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
