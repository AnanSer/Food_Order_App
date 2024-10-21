import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "Amount",
          type: Number,
          min: 1,
          max: 5,
        }}
      />

      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
