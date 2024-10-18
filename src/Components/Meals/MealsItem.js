import classes from "./MealsItem.module.css";

const MealsItem = () => {
  return (
    <div>
      <form className={classes.form}>
        <label>Amount</label>
        <input type="number" />
        <button>+ Add</button>
      </form>
    </div>
  );
};

export default MealsItem;
